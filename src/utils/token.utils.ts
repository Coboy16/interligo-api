import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/constants';
import { TokenPayload, AuthTokens } from '../types';

export const generateTokens = (payload: TokenPayload): AuthTokens => {
  const access_token = jwt.sign(payload, CONFIG.JWT_SECRET, {
    expiresIn: CONFIG.JWT_EXPIRES_IN as any
  });

  const refresh_token = jwt.sign(payload, CONFIG.JWT_SECRET, {
    expiresIn: CONFIG.JWT_REFRESH_EXPIRES_IN as any
  });

  return {
    access_token,
    refresh_token,
    token_type: 'Bearer',
    expires_in: 3600 // 1 hora en segundos
  };
};

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, CONFIG.JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
};
