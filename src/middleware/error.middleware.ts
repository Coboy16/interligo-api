import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response.utils';
import { ERROR_CODES } from '../config/constants';

export const errorMiddleware = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  console.error('Error:', err.message);
  sendError(res, ERROR_CODES.INTERNAL_ERROR, 'Error interno del servidor', 500);
};

export const notFoundMiddleware = (req: Request, res: Response): void => {
  sendError(res, 'NOT_FOUND', `Ruta ${req.method} ${req.path} no encontrada`, 404);
};
