import { Response } from 'express';
import { ApiResponse } from '../types';

export const sendSuccess = <T>(res: Response, data: T, statusCode: number = 200): void => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    timestamp: new Date().toISOString()
  };
  res.status(statusCode).json(response);
};

export const sendError = (
  res: Response, 
  code: string, 
  message: string, 
  statusCode: number = 400
): void => {
  const response: ApiResponse<null> = {
    success: false,
    error: { code, message },
    timestamp: new Date().toISOString()
  };
  res.status(statusCode).json(response);
};
