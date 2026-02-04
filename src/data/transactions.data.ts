import { Transaction } from '../types';

export const transactions: Transaction[] = [
  // Transacciones para acc_001 (Juan - Cuenta Principal)
  {
    id: 'txn_001',
    account_id: 'acc_001',
    date: '2025-02-03T14:30:00Z',
    amount: 1500.00,
    description: 'Transferencia recibida - Carlos Mendoza',
    type: 'CREDIT',
    category: 'TRANSFER',
    reference_number: 'REF001234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_002',
    account_id: 'acc_001',
    date: '2025-02-02T10:15:00Z',
    amount: -250.50,
    description: 'Pago Servicios - Luz del Sur',
    type: 'DEBIT',
    category: 'SERVICES',
    reference_number: 'REF001234568',
    status: 'COMPLETED'
  },
  {
    id: 'txn_003',
    account_id: 'acc_001',
    date: '2025-02-01T16:45:00Z',
    amount: -89.90,
    description: 'Compra - Plaza Vea San Borja',
    type: 'DEBIT',
    category: 'SHOPPING',
    reference_number: 'REF001234569',
    status: 'COMPLETED'
  },
  {
    id: 'txn_004',
    account_id: 'acc_001',
    date: '2025-01-31T09:00:00Z',
    amount: 5000.00,
    description: 'Depósito en efectivo',
    type: 'CREDIT',
    category: 'DEPOSIT',
    reference_number: 'REF001234570',
    status: 'COMPLETED'
  },
  {
    id: 'txn_005',
    account_id: 'acc_001',
    date: '2025-01-30T12:30:00Z',
    amount: -150.00,
    description: 'Retiro ATM - BCP Jockey Plaza',
    type: 'DEBIT',
    category: 'ATM',
    reference_number: 'REF001234571',
    status: 'COMPLETED'
  },
  {
    id: 'txn_006',
    account_id: 'acc_001',
    date: '2025-01-29T18:20:00Z',
    amount: -45.00,
    description: 'Netflix Subscription',
    type: 'DEBIT',
    category: 'ENTERTAINMENT',
    reference_number: 'REF001234572',
    status: 'COMPLETED'
  },
  {
    id: 'txn_007',
    account_id: 'acc_001',
    date: '2025-01-28T08:00:00Z',
    amount: -500.00,
    description: 'Transferencia enviada - Ana Torres',
    type: 'DEBIT',
    category: 'TRANSFER',
    reference_number: 'REF001234573',
    status: 'COMPLETED'
  },
  {
    id: 'txn_008',
    account_id: 'acc_001',
    date: '2025-01-27T15:45:00Z',
    amount: -120.00,
    description: 'Uber - Viajes del mes',
    type: 'DEBIT',
    category: 'TRANSPORT',
    reference_number: 'REF001234574',
    status: 'COMPLETED'
  },
  {
    id: 'txn_009',
    account_id: 'acc_001',
    date: '2025-01-26T11:30:00Z',
    amount: 3500.00,
    description: 'Transferencia recibida - Empresa ABC',
    type: 'CREDIT',
    category: 'SALARY',
    reference_number: 'REF001234575',
    status: 'COMPLETED'
  },
  {
    id: 'txn_010',
    account_id: 'acc_001',
    date: '2025-01-25T14:00:00Z',
    amount: -200.00,
    description: 'Farmacia Universal',
    type: 'DEBIT',
    category: 'HEALTH',
    reference_number: 'REF001234576',
    status: 'COMPLETED'
  },
  {
    id: 'txn_011',
    account_id: 'acc_001',
    date: '2025-01-24T17:30:00Z',
    amount: -85.50,
    description: 'Restaurante La Mar',
    type: 'DEBIT',
    category: 'FOOD',
    reference_number: 'REF001234577',
    status: 'COMPLETED'
  },
  {
    id: 'txn_012',
    account_id: 'acc_001',
    date: '2025-01-23T10:00:00Z',
    amount: -350.00,
    description: 'Pago Tarjeta de Crédito',
    type: 'DEBIT',
    category: 'CREDIT_CARD',
    reference_number: 'REF001234578',
    status: 'COMPLETED'
  },
  // Transacciones para acc_002 (Juan - Cuenta Sueldo)
  {
    id: 'txn_013',
    account_id: 'acc_002',
    date: '2025-02-01T00:01:00Z',
    amount: 8500.00,
    description: 'Depósito de Sueldo - Empresa XYZ',
    type: 'CREDIT',
    category: 'SALARY',
    reference_number: 'REF002234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_014',
    account_id: 'acc_002',
    date: '2025-01-15T00:01:00Z',
    amount: 8500.00,
    description: 'Depósito de Sueldo - Empresa XYZ',
    type: 'CREDIT',
    category: 'SALARY',
    reference_number: 'REF002234568',
    status: 'COMPLETED'
  },
  // Transacciones para acc_003 (Juan - Dólares)
  {
    id: 'txn_015',
    account_id: 'acc_003',
    date: '2025-01-20T10:00:00Z',
    amount: 500.00,
    description: 'Compra de dólares',
    type: 'CREDIT',
    category: 'EXCHANGE',
    reference_number: 'REF003234567',
    status: 'COMPLETED'
  },
  // Transacciones para acc_005 (Demo)
  {
    id: 'txn_016',
    account_id: 'acc_005',
    date: '2025-02-03T12:00:00Z',
    amount: 1000.00,
    description: 'Depósito inicial demo',
    type: 'CREDIT',
    category: 'DEPOSIT',
    reference_number: 'REF005234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_017',
    account_id: 'acc_005',
    date: '2025-02-02T15:00:00Z',
    amount: -50.00,
    description: 'Compra demo',
    type: 'DEBIT',
    category: 'SHOPPING',
    reference_number: 'REF005234568',
    status: 'COMPLETED'
  },
  {
    id: 'txn_018',
    account_id: 'acc_005',
    date: '2025-02-01T09:00:00Z',
    amount: 2000.00,
    description: 'Transferencia recibida demo',
    type: 'CREDIT',
    category: 'TRANSFER',
    reference_number: 'REF005234569',
    status: 'COMPLETED'
  }
];
