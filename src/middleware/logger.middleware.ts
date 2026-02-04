import morgan from 'morgan';

// Custom token para ocultar datos sensibles
morgan.token('body-safe', (req: any) => {
  if (req.body) {
    const safeBody = { ...req.body };
    // Ocultar campos sensibles - NO LOGUEAR PII
    if (safeBody.password) safeBody.password = '***HIDDEN***';
    if (safeBody.code_verifier) safeBody.code_verifier = '***HIDDEN***';
    if (safeBody.refresh_token) safeBody.refresh_token = '***HIDDEN***';
    if (safeBody.access_token) safeBody.access_token = '***HIDDEN***';
    return JSON.stringify(safeBody);
  }
  return '-';
});

export const loggerMiddleware = morgan(
  ':method :url :status :response-time ms - :body-safe'
);
