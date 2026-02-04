import { Transfer } from '../types';

// Este array se modificará en runtime cuando se creen nuevas transferencias
export const transfers: Transfer[] = [
  // Transferencia para Demo (usr_000)
  {
    id: 'trf_000',
    user_id: 'usr_000',
    from_account_id: 'acc_000',
    beneficiary_id: 'ben_000',
    amount: 100.00,
    currency: 'PEN',
    description: 'Transferencia de prueba',
    status: 'COMPLETED',
    created_at: '2025-01-01T10:00:00Z',
    confirmed_at: '2025-01-01T10:01:00Z'
  },
  {
    id: 'trf_001',
    user_id: 'usr_001',
    from_account_id: 'acc_001',
    beneficiary_id: 'ben_002',
    amount: 500.00,
    currency: 'PEN',
    description: 'Pago préstamo',
    status: 'COMPLETED',
    created_at: '2025-01-28T08:00:00Z',
    confirmed_at: '2025-01-28T08:01:00Z'
  },
  // Transferencias para Usuario Demo (usr_003)
  {
    id: 'trf_002',
    user_id: 'usr_003',
    from_account_id: 'acc_005',
    beneficiary_id: 'ben_006',
    amount: 150.00,
    currency: 'PEN',
    description: 'Transferencia a Demo 1',
    status: 'COMPLETED',
    created_at: '2025-02-01T10:00:00Z',
    confirmed_at: '2025-02-01T10:01:00Z'
  },
  {
    id: 'trf_003',
    user_id: 'usr_003',
    from_account_id: 'acc_006',
    beneficiary_id: 'ben_007',
    amount: 50.00,
    currency: 'USD',
    description: 'Transferencia a Demo 2 USD',
    status: 'COMPLETED',
    created_at: '2025-02-02T11:00:00Z',
    confirmed_at: '2025-02-02T11:01:00Z'
  },
  // Transferencias para Marco Timanag (usr_004)
  {
    id: 'trf_004',
    user_id: 'usr_004',
    from_account_id: 'acc_008',
    beneficiary_id: 'ben_009',
    amount: 200.00,
    currency: 'PEN',
    description: 'Regalo a papá',
    status: 'COMPLETED',
    created_at: '2025-02-05T12:00:00Z',
    confirmed_at: '2025-02-05T12:01:00Z'
  },
  {
    id: 'trf_005',
    user_id: 'usr_004',
    from_account_id: 'acc_009',
    beneficiary_id: 'ben_010',
    amount: 25.00,
    currency: 'USD',
    description: 'Ayuda para hermana',
    status: 'COMPLETED',
    created_at: '2025-02-06T13:00:00Z',
    confirmed_at: '2025-02-06T13:01:00Z'
  }

];
