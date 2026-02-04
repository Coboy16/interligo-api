import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/token.utils';
import { sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    sendError(res, ERROR_CODES.UNAUTHORIZED, 'Token de autorización requerido', 401);
    return;
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);

  console.log('AuthMiddleware: Token Payload:', payload);

  if (!payload) {
    sendError(res, ERROR_CODES.TOKEN_INVALID, 'Token inválido o expirado', 401);
    return;
  }

  req.userId = payload.userId;
  req.username = payload.username;
  console.log('AuthMiddleware: Assigned userId:', req.userId, 'username:', req.username);
  next();
};
