import { Transaction } from '../types';

export const transactions: Transaction[] = [
  // Transacciones para acc_000 (Demo - usr_000)
  {
    id: 'txn_000',
    account_id: 'acc_000',
    date: '2025-01-15T10:00:00Z',
    amount: 5000.00,
    description: 'Depósito inicial',
    type: 'CREDIT',
    category: 'DEPOSIT',
    reference_number: 'REF000234567',
    status: 'COMPLETED'
  },
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
  },
  {
    id: 'txn_019',
    account_id: 'acc_005',
    date: '2025-01-31T10:00:00Z',
    amount: -120.00,
    description: 'Pago de Netflix',
    type: 'DEBIT',
    category: 'ENTERTAINMENT',
    reference_number: 'REF005234570',
    status: 'COMPLETED'
  },
  {
    id: 'txn_020',
    account_id: 'acc_006',
    date: '2025-02-04T10:00:00Z',
    amount: 500.00,
    description: 'Transferencia USD recibida',
    type: 'CREDIT',
    category: 'TRANSFER',
    reference_number: 'REF006234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_021',
    account_id: 'acc_006',
    date: '2025-02-01T14:00:00Z',
    amount: -75.00,
    description: 'Compra en Amazon USA',
    type: 'DEBIT',
    category: 'SHOPPING',
    reference_number: 'REF006234568',
    status: 'COMPLETED'
  },
  {
    id: 'txn_022',
    account_id: 'acc_007',
    date: '2025-02-05T09:00:00Z',
    amount: 1500.00,
    description: 'Depósito en cuenta corriente',
    type: 'CREDIT',
    category: 'DEPOSIT',
    reference_number: 'REF007234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_023',
    account_id: 'acc_007',
    date: '2025-02-04T16:00:00Z',
    amount: -250.00,
    description: 'Pago a proveedor',
    type: 'DEBIT',
    category: 'BUSINESS',
    reference_number: 'REF007234568',
    status: 'COMPLETED'
  },
  // Transacciones para Marco Timanag (usr_004)
  // acc_008 (PEN Savings)
  {
    id: 'txn_024',
    account_id: 'acc_008',
    date: '2025-02-06T11:00:00Z',
    amount: 2000.00,
    description: 'Transferencia de sueldo',
    type: 'CREDIT',
    category: 'SALARY',
    reference_number: 'REF008234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_025',
    account_id: 'acc_008',
    date: '2025-02-05T13:00:00Z',
    amount: -150.00,
    description: 'Compra en supermercado',
    type: 'DEBIT',
    category: 'GROCERIES',
    reference_number: 'REF008234568',
    status: 'COMPLETED'
  },
  {
    id: 'txn_026',
    account_id: 'acc_008',
    date: '2025-02-04T17:00:00Z',
    amount: -80.00,
    description: 'Pago de internet',
    type: 'DEBIT',
    category: 'UTILITIES',
    reference_number: 'REF008234569',
    status: 'COMPLETED'
  },
  // acc_009 (USD Savings)
  {
    id: 'txn_027',
    account_id: 'acc_009',
    date: '2025-02-06T10:00:00Z',
    amount: 300.00,
    description: 'Depósito en dólares',
    type: 'CREDIT',
    category: 'DEPOSIT',
    reference_number: 'REF009234567',
    status: 'COMPLETED'
  },
  {
    id: 'txn_028',
    account_id: 'acc_009',
    date: '2025-02-05T14:00:00Z',
    amount: -50.00,
    description: 'Compra en Steam (USD)',
    type: 'DEBIT',
    category: 'ENTERTAINMENT',
    reference_number: 'REF009234568',
    status: 'COMPLETED'
  }
];
