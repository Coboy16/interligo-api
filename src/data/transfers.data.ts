import { Transfer } from '../types';

// Este array se modificará en runtime cuando se creen nuevas transferencias
export const transfers: Transfer[] = [
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
  }
];
