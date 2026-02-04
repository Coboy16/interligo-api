import { Account } from '../models/Account.model';
import { Transaction } from '../models/Transaction.model';
import { Account as AccountInterface, Transaction as TransactionInterface, PaginatedTransactions } from '../types';
import { CONFIG } from '../config/constants';
import { Op } from 'sequelize';

export class AccountsService {
  async getAccountsByUserId(userId: string): Promise<AccountInterface[]> {
    const accounts = await Account.findAll({ where: { user_id: userId, status: 'ACTIVE' } });
    return accounts.map(acc => acc.toJSON());
  }

  async getAccountById(accountId: string, userId: string): Promise<AccountInterface | null> {
    const account = await Account.findOne({ where: { id: accountId, user_id: userId } });
    return account ? account.toJSON() : null;
  }

  async getTransactionsByAccountId(
    accountId: string, 
    userId: string,
    page: number = 1,
    limit: number = CONFIG.PAGINATION_DEFAULT_LIMIT
  ): Promise<PaginatedTransactions | null> {
    const account = await this.getAccountById(accountId, userId);
    if (!account) {
      return null;
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await Transaction.findAndCountAll({
      where: { account_id: accountId },
      order: [['date', 'DESC']],
      limit,
      offset,
    });

    const totalItems = count;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: rows.map(txn => txn.toJSON()),
      pagination: {
        current_page: page,
        total_pages: totalPages,
        total_items: totalItems,
        items_per_page: limit,
        has_next: page < totalPages,
        has_previous: page > 1
      }
    };
  }

  async updateBalance(accountId: string, amount: number): Promise<boolean> {
    const account = await Account.findByPk(accountId);
    if (!account) return false;

    const currentAvailable = account.getDataValue('available_balance');
    const currentLedger = account.getDataValue('ledger_balance');

    account.setDataValue('available_balance', parseFloat((currentAvailable + amount).toFixed(2)));
    account.setDataValue('ledger_balance', parseFloat((currentLedger + amount).toFixed(2)));
    await account.save();
    return true;
  }
}