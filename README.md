# Banking App API Mock

Este proyecto implementa una API REST mock completa para una aplicación bancaria móvil, desarrollada con Express y TypeScript. Simula un backend bancario con datos en memoria para permitir al equipo móvil consumir y probar funcionalidades sin una base de datos real.

## Estructura de Carpetas

```
src/
├── config/                  # Archivos de configuración y constantes (incluye configuración de la base de datos)
├── models/                  # Definiciones de modelos Sequelize para la base de datos SQLite
├── types/                   # Definiciones de tipos TypeScript
├── middleware/              # Middlewares de Express (autenticación, errores, logging)
├── routes/                  # Definición de rutas de la API
├── controllers/             # Lógica de manejo de solicitudes HTTP
├── services/                # Lógica de negocio y manipulación de datos (ahora interactúa con la DB)
├── utils/                   # Utilidades generales (manejo de tokens, respuestas API)
├── docs/                    # Configuración de Swagger para la documentación de la API
├── db.ts                    # Script para inicializar y seedear la base de datos SQLite
└── app.ts                   # Archivo principal de la aplicación
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

**Runtime:**
- `express`: Framework web para Node.js
- `cors`: Middleware para habilitar Cross-Origin Resource Sharing
- `helmet`: Colección de middlewares para seguridad HTTP
- `morgan`: Logger de solicitudes HTTP
- `uuid`: Generador de IDs únicos universales
- `jsonwebtoken`: Implementación de JSON Web Tokens
- `swagger-ui-express`: Interfaz de usuario para Swagger
- `swagger-jsdoc`: Generador de especificaciones Swagger/OpenAPI a partir de comentarios JSDoc
- `sequelize`: ORM (Object-Relational Mapper) para interactuar con la base de datos
- `sqlite3`: Driver de base de datos SQLite

**Desarrollo:**
- `@types/*`: Tipos TypeScript para las librerías de runtime
- `@types/sequelize`: Tipos TypeScript para Sequelize
- `@types/sqlite3`: Tipos TypeScript para SQLite
- `ts-node-dev`: Reinicia el servidor Node.js automáticamente al detectar cambios en archivos TypeScript
- `typescript`: Transpilador de TypeScript a JavaScript
- `eslint`: Linter para código JavaScript/TypeScript

## Instalación

1.  Clona este repositorio:
    ```bash
    git clone <url-del-repositorio>
    cd api-express-ts
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```

## Cómo Ejecutar

Para iniciar el servidor en modo desarrollo (con recarga automática):
```bash
npm run dev
```

Para construir el proyecto (transpilar TypeScript a JavaScript):
```bash
npm run build
```

Para iniciar el servidor en producción (después de construir):
```bash
npm run start
```

## Endpoints Disponibles

La API se ejecutará en `http://localhost:3000`. La URL base para los endpoints es `http://localhost:3000/api/v1`.
La documentación de Swagger estará disponible en `http://localhost:3000/api-docs`.

### Credenciales de Prueba

Puedes usar las siguientes credenciales para probar la API:

-   **Username:** `demo`
-   **Password:** `demo123`

### Ejemplos de Uso con `curl`

**1. Obtener Token de Acceso (Login)**

```bash
curl -X POST 
  http://localhost:3000/api/v1/auth/oidc/token 
  -H 'Content-Type: application/json' 
  -d '{
    "username": "demo",
    "password": "demo123",
    "grant_type": "password"
  }'
```
> **Respuesta esperada:** Un objeto con `access_token`, `refresh_token`, `token_type` y `expires_in`.

**2. Obtener Perfil del Usuario Actual (`/auth/me`)**

Necesitarás el `access_token` de la respuesta anterior.

```bash
curl -X GET 
  http://localhost:3000/api/v1/auth/me 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>'
```
> **Respuesta esperada:** Información del usuario `demo`.

**3. Listar Cuentas del Usuario (`/accounts`)**

```bash
curl -X GET 
  http://localhost:3000/api/v1/accounts 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>'
```
> **Respuesta esperada:** Un array de las cuentas del usuario `demo`.

**4. Obtener Movimientos de una Cuenta (paginado) (`/accounts/{id}/transactions`)**

Reemplaza `<ACCOUNT_ID>` con el ID de una de las cuentas del usuario `demo` (ej. `acc_005`).

```bash
curl -X GET 
  "http://localhost:3000/api/v1/accounts/<ACCOUNT_ID>/transactions?page=1&limit=5" 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>'
```
> **Respuesta esperada:** Una lista paginada de transacciones para la cuenta especificada.

**5. Crear una Nueva Transferencia (`/transfers`)**

Reemplaza `<ACCOUNT_ID>` con la cuenta de origen (ej. `acc_005`) y `<BENEFICIARY_ID>` con un beneficiario del usuario `demo` (ej. `ben_006`).

```bash
curl -X POST 
  http://localhost:3000/api/v1/transfers 
  -H 'Content-Type: application/json' 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>' 
  -d '{
    "from_account_id": "<ACCOUNT_ID>",
    "beneficiary_id": "<BENEFICIARY_ID>",
    "amount": 100.00,
    "currency": "PEN",
    "description": "Prueba de transferencia"
  }'
```
> **Respuesta esperada:** Detalles de la transferencia creada con `status: "PENDING"`. Guarda el `id` de la transferencia para el siguiente paso.

**6. Confirmar una Transferencia (`/transfers/{id}/confirm`)**

Reemplaza `<TRANSFER_ID>` con el ID de la transferencia obtenida en el paso anterior.

```bash
curl -X POST 
  http://localhost:3000/api/v1/transfers/<TRANSFER_ID>/confirm 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>'
```
> **Respuesta esperada:** Detalles de la transferencia con `status: "COMPLETED"`.

**7. Congelar una Tarjeta (`/cards/{id}`)**

Reemplaza `<CARD_ID>` con el ID de una de las tarjetas del usuario `demo` (ej. `card_005`).

```bash
curl -X PATCH 
  http://localhost:3000/api/v1/cards/<CARD_ID> 
  -H 'Content-Type: application/json' 
  -H 'Authorization: Bearer <TU_ACCESS_TOKEN>' 
  -d '{
    "status": "FROZEN"
  }'
```
> **Respuesta esperada:** Detalles de la tarjeta con `status: "FROZEN"`.

## NOTAS IMPORTANTES PARA EL MOCK
1. NO LOGUEAR información sensible (passwords, tokens, PII)
2. Los números de tarjeta siempre deben estar enmascarados
3. Los datos se persisten en un archivo SQLite (`database.sqlite`) y se re-seedan al iniciar el servidor en modo desarrollo (`npm run dev`) si las tablas no existen o si se usa `force: true` en la sincronización de Sequelize.
4. Para el usuario DEMO usar los IDs: usr_003, acc_005, acc_006, ben_006, ben_007, card_005, card_006