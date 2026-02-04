import { v4 as uuidv4 } from 'uuid';
import { Transfer } from '../models/Transfer.model';
import { Transaction } from '../models/Transaction.model';
import { AccountsService } from './accounts.service';
import { BeneficiariesService } from './beneficiaries.service';
import { CreateTransferRequest, Transfer as TransferInterface, Transaction as TransactionInterface } from '../types';

export class TransfersService {
  private accountsService = new AccountsService();
  private beneficiariesService = new BeneficiariesService();

  async createTransfer(userId: string, data: CreateTransferRequest): Promise<TransferInterface | { error: string }> {
    const account = await this.accountsService.getAccountById(data.from_account_id, userId);
    if (!account) {
      return { error: 'Cuenta origen no encontrada' };
    }

    if (account.available_balance < data.amount) {
      return { error: 'Saldo insuficiente' };
    }

    const beneficiary = await this.beneficiariesService.getBeneficiaryById(data.beneficiary_id, userId);
    if (!beneficiary) {
      return { error: 'Beneficiario no encontrado' };
    }

    const transfer = await Transfer.create({
      id: `trf_${uuidv4().substring(0, 8)}`,
      user_id: userId,
      from_account_id: data.from_account_id,
      beneficiary_id: data.beneficiary_id,
      amount: data.amount,
      currency: data.currency || account.currency,
      description: data.description || 'Transferencia',
      status: 'PENDING',
      created_at: new Date().toISOString()
    });

    return transfer.toJSON();
  }

  async confirmTransfer(transferId: string, userId: string): Promise<TransferInterface | { error: string }> {
    const transfer = await Transfer.findOne({ where: { id: transferId, user_id: userId } });

    if (!transfer) {
      return { error: 'Transferencia no encontrada' };
    }

    // Obtener valores usando getDataValue para Sequelize
    const status = transfer.getDataValue('status');
    const fromAccountId = transfer.getDataValue('from_account_id');
    const beneficiaryId = transfer.getDataValue('beneficiary_id');
    const amount = transfer.getDataValue('amount');

    if (status === 'COMPLETED') {
      return { error: 'La transferencia ya fue confirmada' };
    }

    if (status === 'FAILED' || status === 'CANCELLED') {
      return { error: 'La transferencia no puede ser confirmada' };
    }

    const account = await this.accountsService.getAccountById(fromAccountId, userId);
    if (!account || account.available_balance < amount) {
      transfer.setDataValue('status', 'FAILED');
      await transfer.save();
      return { error: 'Saldo insuficiente para completar la transferencia' };
    }

    await this.accountsService.updateBalance(fromAccountId, -amount);

    const beneficiary = await this.beneficiariesService.getBeneficiaryById(beneficiaryId, userId);
    await Transaction.create({
      id: `txn_${uuidv4().substring(0, 8)}`,
      account_id: fromAccountId,
      date: new Date().toISOString(),
      amount: -amount,
      description: `Transferencia enviada - ${beneficiary?.name || 'Beneficiario'}`,
      type: 'DEBIT',
      category: 'TRANSFER',
      reference_number: `REF${Date.now()}`,
      status: 'COMPLETED'
    });

    transfer.setDataValue('status', 'COMPLETED');
    transfer.setDataValue('confirmed_at', new Date().toISOString());
    await transfer.save();

    return transfer.toJSON();
  }

  async getTransferById(transferId: string, userId: string): Promise<TransferInterface | null> {
    const transfer = await Transfer.findOne({ where: { id: transferId, user_id: userId } });
    return transfer ? transfer.toJSON() : null;
  }

  async getTransfersByUserId(userId: string): Promise<TransferInterface[]> {
    const transfers = await Transfer.findAll({ 
      where: { user_id: userId },
      order: [['created_at', 'DESC']]
    });
    return transfers.map(t => t.toJSON());
  }
}