import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { sendSuccess, sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

const authService = new AuthService();

export class AuthController {
  /**
   * @swagger
   * /auth/oidc/token:
   *   post:
   *     summary: Obtener tokens de acceso (simula OIDC/PKCE)
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - username
   *               - password
   *               - grant_type
   *             properties:
   *               username:
   *                 type: string
   *                 example: "demo"
   *               password:
   *                 type: string
   *                 example: "demo123"
   *               grant_type:
   *                 type: string
   *                 example: "password"
   *               code_verifier:
   *                 type: string
   *                 example: "optional-pkce-verifier"
   *     responses:
   *       200:
   *         description: Login exitoso
   *       401:
   *         description: Credenciales inválidas
   */
  async login(req: Request, res: Response): Promise<void> {
    const { username, password, grant_type } = req.body;

    if (!username || !password) {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'Username y password son requeridos', 400);
      return;
    }

    if (grant_type !== 'password') {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'grant_type debe ser "password"', 400);
      return;
    }

    const result = await authService.login(username, password);

    if (!result) {
      sendError(res, ERROR_CODES.INVALID_CREDENTIALS, 'Credenciales inválidas', 401);
      return;
    }

    sendSuccess(res, {
      ...result.tokens,
      user: result.user
    });
  }

  /**
   * @swagger
   * /auth/oidc/refresh:
   *   post:
   *     summary: Refrescar token de acceso
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - refresh_token
   *               - grant_type
   *             properties:
   *               refresh_token:
   *                 type: string
   *               grant_type:
   *                 type: string
   *                 example: "refresh_token"
   *     responses:
   *       200:
   *         description: Token refrescado exitosamente
   *       401:
   *         description: Refresh token inválido
   */
  async refresh(req: Request, res: Response): Promise<void> {
    const { refresh_token, grant_type } = req.body;

    if (!refresh_token || grant_type !== 'refresh_token') {
      sendError(res, ERROR_CODES.VALIDATION_ERROR, 'refresh_token y grant_type son requeridos', 400);
      return;
    }

    const tokens = await authService.refreshToken(refresh_token);

    if (!tokens) {
      sendError(res, ERROR_CODES.TOKEN_INVALID, 'Refresh token inválido o expirado', 401);
      return;
    }

    sendSuccess(res, tokens);
  }

  /**
   * @swagger
   * /auth/logout:
   *   post:
   *     summary: Cerrar sesión
   *     tags: [Auth]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Sesión cerrada exitosamente
   */
  logout(req: Request, res: Response): void {
    // En un caso real, invalidaríamos el token en una blacklist
    sendSuccess(res, { message: 'Sesión cerrada exitosamente' });
  }

  /**
   * @swagger
   * /auth/me:
   *   get:
   *     summary: Obtener información del usuario actual
   *     tags: [Auth]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Información del usuario
   *       401:
   *         description: No autorizado
   */
  async me(req: Request, res: Response): Promise<void> {
    const user = await authService.getUserById(req.userId!);

    if (!user) {
      sendError(res, ERROR_CODES.UNAUTHORIZED, 'Usuario no encontrado', 404);
      return;
    }

    sendSuccess(res, user);
  }
}
