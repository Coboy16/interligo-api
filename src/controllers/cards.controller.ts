import { Request, Response } from 'express';
import { CardsService } from '../services/cards.service';
import { sendSuccess, sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

const cardsService = new CardsService();

export class CardsController {
  /**
   * @swagger
   * /cards:
   *   get:
   *     summary: Listar tarjetas del usuario
   *     tags: [Cards]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de tarjetas
   */
  async getCards(req: Request, res: Response): Promise<void> {
    const cards = await cardsService.getCardsByUserId(req.userId!);
    sendSuccess(res, cards);
  }

  /**
   * @swagger
   * /cards/{id}:
   *   get:
   *     summary: Obtener detalle de una tarjeta
   *     tags: [Cards]
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
   *         description: Detalle de la tarjeta
   *       404:
   *         description: Tarjeta no encontrada
   */
  async getCardById(req: Request, res: Response): Promise<void> {
    const card = await cardsService.getCardById(req.params.id as string, req.userId!);

    if (!card) {
      sendError(res, ERROR_CODES.CARD_NOT_FOUND, 'Tarjeta no encontrada', 404);
      return;
    }

    sendSuccess(res, card);
  }

  /**
   * @swagger
   * /cards/{id}:
   *   patch:
   *     summary: Congelar o descongelar una tarjeta
   *     tags: [Cards]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - status
   *             properties:
   *               status:
   *                 type: string
   *                 enum: [ACTIVE, FROZEN]
   *                 example: "FROZEN"
   *     responses:
   *       200:
   *         description: Tarjeta actualizada
   *       400:
   *         description: Error de validación
   *       404:
   *         description: Tarjeta no encontrada
   */
  async updateCardStatus(req: Request, res: Response): Promise<void> {
    const { status } = req.body;

    if (!status || !['ACTIVE', 'FROZEN'].includes(status)) {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'status debe ser ACTIVE o FROZEN', 400);
      return;
    }

    const result = await cardsService.updateCardStatus(req.params.id as string, req.userId!, { status });

    if ('error' in result) {
      const statusCode = result.error.includes('no encontrada') ? 404 : 400;
      sendError(res, ERROR_CODES.CARD_NOT_FOUND, result.error, statusCode);
      return;
    }

    sendSuccess(res, result);
  }
}
