import { Request, Response } from 'express';
import { TransfersService } from '../services/transfers.service';
import { sendSuccess, sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

const transfersService = new TransfersService();

export class TransfersController {
  /**
   * @swagger
   * /transfers:
   *   post:
   *     summary: Crear una nueva transferencia (estado PENDING)
   *     tags: [Transfers]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - from_account_id
   *               - beneficiary_id
   *               - amount
   *             properties:
   *               from_account_id:
   *                 type: string
   *                 example: "acc_005"
   *               beneficiary_id:
   *                 type: string
   *                 example: "ben_006"
   *               amount:
   *                 type: number
   *                 example: 100.00
   *               currency:
   *                 type: string
   *                 example: "PEN"
   *               description:
   *                 type: string
   *                 example: "Pago de servicios"
   *     responses:
   *       201:
   *         description: Transferencia creada
   *       400:
   *         description: Error de validación
   */
  async createTransfer(req: Request, res: Response): Promise<void> {
    const { from_account_id, beneficiary_id, amount, currency, description } = req.body;

    if (!from_account_id || !beneficiary_id || !amount) {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'from_account_id, beneficiary_id y amount son requeridos', 400);
      return;
    }

    if (amount <= 0) {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'El monto debe ser mayor a 0', 400);
      return;
    }

    const result = await transfersService.createTransfer(req.userId!, {
      from_account_id,
      beneficiary_id,
      amount,
      currency,
      description
    });

    if ('error' in result) {
      sendError(res, ERROR_CODES.TRANSFER_FAILED, result.error, 400);
      return;
    }

    sendSuccess(res, result, 201);
  }

  /**
   * @swagger
   * /transfers/{id}/confirm:
   *   post:
   *     summary: Confirmar una transferencia pendiente
   *     tags: [Transfers]
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
   *         description: Transferencia confirmada
   *       400:
   *         description: Error al confirmar
   *       404:
   *         description: Transferencia no encontrada
   */
  async confirmTransfer(req: Request, res: Response): Promise<void> {
    const result = await transfersService.confirmTransfer(req.params.id, req.userId!);

    if ('error' in result) {
      const statusCode = result.error.includes('no encontrada') ? 404 : 400;
      sendError(res, ERROR_CODES.TRANSFER_FAILED, result.error, statusCode);
      return;
    }

    sendSuccess(res, result);
  }

  /**
   * @swagger
   * /transfers/{id}:
   *   get:
   *     summary: Obtener estado de una transferencia
   *     tags: [Transfers]
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
   *         description: Detalle de la transferencia
   *       404:
   *         description: Transferencia no encontrada
   */
  async getTransferById(req: Request, res: Response): Promise<void> {
    const transfer = await transfersService.getTransferById(req.params.id, req.userId!);

    if (!transfer) {
      sendError(res, ERROR_CODES.TRANSFER_NOT_FOUND, 'Transferencia no encontrada', 404);
      return;
    }

    sendSuccess(res, transfer);
  }

  /**
   * @swagger
   * /transfers:
   *   get:
   *     summary: Listar transferencias del usuario
   *     tags: [Transfers]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de transferencias
   */
  async getTransfers(req: Request, res: Response): Promise<void> {
    const transfers = await transfersService.getTransfersByUserId(req.userId!);
    sendSuccess(res, transfers);
  }
}
