import { Request, Response } from 'express';
import { BeneficiariesService } from '../services/beneficiaries.service';
import { sendSuccess, sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

const beneficiariesService = new BeneficiariesService();

export class BeneficiariesController {
  /**
   * @swagger
   * /beneficiaries:
   *   get:
   *     summary: Listar beneficiarios del usuario
   *     tags: [Beneficiaries]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de beneficiarios
   */
  async getBeneficiaries(req: Request, res: Response): Promise<void> {
    const beneficiaries = await beneficiariesService.getBeneficiariesByUserId(req.userId!);
    sendSuccess(res, beneficiaries);
  }

  /**
   * @swagger
   * /beneficiaries/{id}:
   *   get:
   *     summary: Obtener detalle de un beneficiario
   *     tags: [Beneficiaries]
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
   *         description: Detalle del beneficiario
   *       404:
   *         description: Beneficiario no encontrado
   */
  async getBeneficiaryById(req: Request, res: Response): Promise<void> {
    const beneficiary = await beneficiariesService.getBeneficiaryById(req.params.id, req.userId!);

    if (!beneficiary) {
      sendError(res, ERROR_CODES.BENEFICIARY_NOT_FOUND, 'Beneficiario no encontrado', 404);
      return;
    }

    sendSuccess(res, beneficiary);
  }
}
