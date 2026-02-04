import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CONFIG } from './config/constants';
import { loggerMiddleware } from './middleware/logger.middleware';
import { errorMiddleware, notFoundMiddleware } from './middleware/error.middleware';
import { setupSwagger } from './docs/swagger';
import routes from './routes';
import { initializeDatabase } from './db'; // Import database initializer

const app = express();

// Middlewares de seguridad
app.use(helmet({
  contentSecurityPolicy: false, // Deshabilitado para Swagger UI
  crossOriginEmbedderPolicy: false
}));
app.use(cors({
  origin: true, // Permite cualquier origen y refleja el origen en la respuesta
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200 // Para navegadores legacy (IE11)
}));

// Middlewares de parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger (sin PII)
app.use(loggerMiddleware);

// Configurar Swagger
setupSwagger(app);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Rutas API
app.use('/api/v1', routes);

// Manejo de errores
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Iniciar servidor
const startServer = async () => {
  await initializeDatabase(); // Initialize and seed the database
  
  app.listen(CONFIG.PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🏦 Banking API Mock Server (SQLite)                     ║
║                                                           ║
║   Server running on: http://localhost:${CONFIG.PORT}              ║
║   Swagger docs:      http://localhost:${CONFIG.PORT}/api-docs     ║
║   API base URL:      http://localhost:${CONFIG.PORT}/api/v1       ║
║                                                           ║
║   Test credentials:                                       ║
║   - Username: demo                                        ║
║   - Password: demo123                                     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
  });
};

startServer();

export default app;
