import { Account } from '../types';

export const accounts: Account[] = [
  // Usuario Demo (usr_000)
  {
    id: 'acc_000',
    user_id: 'usr_000',
    alias: 'Cuenta Principal Demo',
    account_number: '0000000000000000',
    currency: 'PEN',
    available_balance: 10000.00,
    ledger_balance: 10000.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  // Usuario 1 - Juan Pérez
  {
    id: 'acc_001',
    user_id: 'usr_001',
    alias: 'Cuenta Principal',
    account_number: '1234567890123456',
    currency: 'PEN',
    available_balance: 15750.50,
    ledger_balance: 16000.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  {
    id: 'acc_002',
    user_id: 'usr_001',
    alias: 'Cuenta Sueldo',
    account_number: '1234567890123457',
    currency: 'PEN',
    available_balance: 8320.75,
    ledger_balance: 8320.75,
    type: 'CHECKING',
    status: 'ACTIVE'
  },
  {
    id: 'acc_003',
    user_id: 'usr_001',
    alias: 'Cuenta Dólares',
    account_number: '1234567890123458',
    currency: 'USD',
    available_balance: 2500.00,
    ledger_balance: 2500.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  // Usuario 2 - María García
  {
    id: 'acc_004',
    user_id: 'usr_002',
    alias: 'Mi Cuenta',
    account_number: '9876543210987654',
    currency: 'PEN',
    available_balance: 22100.00,
    ledger_balance: 22100.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  // Usuario Demo
  {
    id: 'acc_005',
    user_id: 'usr_003',
    alias: 'Cuenta Demo',
    account_number: '0000000000000001',
    currency: 'PEN',
    available_balance: 5000.00,
    ledger_balance: 5000.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  {
    id: 'acc_006',
    user_id: 'usr_003',
    alias: 'Cuenta Dólares Demo',
    account_number: '0000000000000002',
    currency: 'USD',
    available_balance: 1000.00,
    ledger_balance: 1000.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  {
    id: 'acc_007',
    user_id: 'usr_003',
    alias: 'Cuenta Corriente Demo',
    account_number: '0000000000000003',
    currency: 'PEN',
    available_balance: 3500.00,
    ledger_balance: 3500.00,
    type: 'CHECKING',
    status: 'ACTIVE'
  },
  // Usuario Marco Timanag
  {
    id: 'acc_008',
    user_id: 'usr_004',
    alias: 'Mi Cuenta Principal',
    account_number: '1111222233334444',
    currency: 'PEN',
    available_balance: 7500.00,
    ledger_balance: 7500.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  },
  {
    id: 'acc_009',
    user_id: 'usr_004',
    alias: 'Ahorro Dólares Marco',
    account_number: '5555666677778888',
    currency: 'USD',
    available_balance: 1500.00,
    ledger_balance: 1500.00,
    type: 'SAVINGS',
    status: 'ACTIVE'
  }

];
