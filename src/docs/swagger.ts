import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Banking App API Mock',
      version: '1.0.0',
      description: 'API Mock para aplicación bancaria móvil - Reto Técnico Intercorp',
      contact: {
        name: 'Desarrollador',
        email: 'developer @email.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Ingrese el token JWT obtenido del endpoint /auth/oidc/token'
        }
      },
      schemas: {
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'object' },
            error: {
              type: 'object',
              properties: {
                code: { type: 'string' },
                message: { type: 'string' }
              }
            },
            timestamp: { type: 'string', format: 'date-time' }
          }
        },
        Account: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_id: { type: 'string' },
            alias: { type: 'string' },
            account_number: { type: 'string' },
            currency: { type: 'string', enum: ['USD', 'PEN', 'EUR'] },
            available_balance: { type: 'number' },
            ledger_balance: { type: 'number' },
            type: { type: 'string', enum: ['SAVINGS', 'CHECKING'] },
            status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] }
          }
        },
        Transaction: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            account_id: { type: 'string' },
            date: { type: 'string', format: 'date-time' },
            amount: { type: 'number' },
            description: { type: 'string' },
            type: { type: 'string', enum: ['CREDIT', 'DEBIT'] },
            category: { type: 'string' },
            reference_number: { type: 'string' },
            status: { type: 'string', enum: ['COMPLETED', 'PENDING', 'FAILED'] }
          }
        },
        Card: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_id: { type: 'string' },
            account_id: { type: 'string' },
            card_number_masked: { type: 'string' },
            card_holder_name: { type: 'string' },
            type: { type: 'string', enum: ['DEBIT', 'CREDIT'] },
            brand: { type: 'string', enum: ['VISA', 'MASTERCARD'] },
            status: { type: 'string', enum: ['ACTIVE', 'FROZEN', 'BLOCKED'] },
            expiry_date: { type: 'string' },
            cvv_masked: { type: 'string' }
          }
        }
      }
    },
    tags: [
      { name: 'Auth', description: 'Autenticación y autorización' },
      { name: 'Accounts', description: 'Gestión de cuentas bancarias' },
      { name: 'Beneficiaries', description: 'Gestión de beneficiarios' },
      { name: 'Transfers', description: 'Transferencias bancarias' },
      { name: 'Cards', description: 'Gestión de tarjetas' }
    ]
  },
  apis: ['./src/controllers/*.ts', './src/routes/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express): void => {
  // Servir la especificación JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // Configurar Swagger UI con opciones para mejor compatibilidad en servidores
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customSiteTitle: 'Banking API Docs',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
      // Importante para servidores: usar rutas relativas
      url: '/api-docs.json'
    }
  }));
};
