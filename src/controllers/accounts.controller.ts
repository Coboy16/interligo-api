import { Request, Response } from 'express';
import { AccountsService } from '../services/accounts.service';
import { sendSuccess, sendError } from '../utils/response.utils';
import { ERROR_CODES, CONFIG } from '../config/constants';

const accountsService = new AccountsService();

export class AccountsController {
  /**
   * @swagger
   * /accounts:
   *   get:
   *     summary: Listar cuentas del usuario
   *     tags: [Accounts]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de cuentas
   */
  async getAccounts(req: Request, res: Response): Promise<void> {
    const accounts = await accountsService.getAccountsByUserId(req.userId!);
    sendSuccess(res, accounts);
  }

  /**
   * @swagger
   * /accounts/{id}:
   *   get:
   *     summary: Obtener detalle de una cuenta
   *     tags: [Accounts]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Detalle de la cuenta
   *       404:
   *         description: Cuenta no encontrada
   */
  async getAccountById(req: Request, res: Response): Promise<void> {
    const account = await accountsService.getAccountById(req.params.id, req.userId!);

    if (!account) {
      sendError(res, ERROR_CODES.ACCOUNT_NOT_FOUND, 'Cuenta no encontrada', 404);
      return;
    }

    sendSuccess(res, account);
  }

  /**
   * @swagger
   * /accounts/{id}/transactions:
   *   get:
   *     summary: Listar movimientos de una cuenta
   *     tags: [Accounts]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *           default: 1
   *       - in: query
   *         name: limit
   *         schema:
   *           type: integer
   *           default: 10
   *     responses:
   *       200:
   *         description: Lista de movimientos paginada
   *       404:
   *         description: Cuenta no encontrada
   */
  async getTransactions(req: Request, res: Response): Promise<void> {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(
      CONFIG.PAGINATION_MAX_LIMIT,
      Math.max(1, parseInt(req.query.limit as string) || CONFIG.PAGINATION_DEFAULT_LIMIT)
    );

    const result = await accountsService.getTransactionsByAccountId(
      req.params.id,
      req.userId!,
      page,
      limit
    );

    if (!result) {
      sendError(res, ERROR_CODES.ACCOUNT_NOT_FOUND, 'Cuenta no encontrada', 404);
      return;
    }

    sendSuccess(res, result);
  }
}
