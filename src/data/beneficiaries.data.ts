import { Beneficiary } from '../types';

export const beneficiaries: Beneficiary[] = [
  // Beneficiarios de Juan (usr_001)
  {
    id: 'ben_001',
    user_id: 'usr_001',
    name: 'Carlos Alberto Mendoza Ruiz',
    account_number: '************7890',
    bank_name: 'Banco de Crédito del Perú',
    bank_code: 'BCP',
    alias: 'Carlos Mendoza',
    email: 'carlos.mendoza @email.com'
  },
  {
    id: 'ben_002',
    user_id: 'usr_001',
    name: 'Ana María Torres Vega',
    account_number: '************4567',
    bank_name: 'Interbank',
    bank_code: 'IBK',
    alias: 'Ana Torres',
    email: 'ana.torres @email.com'
  },
  {
    id: 'ben_003',
    user_id: 'usr_001',
    name: 'Roberto Sánchez Luna',
    account_number: '************1234',
    bank_name: 'BBVA',
    bank_code: 'BBVA',
    alias: 'Roberto',
    email: 'roberto.sanchez @email.com'
  },
  {
    id: 'ben_004',
    user_id: 'usr_001',
    name: 'Luz del Sur S.A.A.',
    account_number: '************9999',
    bank_name: 'Banco de la Nación',
    bank_code: 'BN',
    alias: 'Luz del Sur',
    email: null
  },
  // Beneficiarios de María (usr_002)
  {
    id: 'ben_005',
    user_id: 'usr_002',
    name: 'Pedro García López',
    account_number: '************5678',
    bank_name: 'Scotiabank',
    bank_code: 'SCBK',
    alias: 'Papá',
    email: 'pedro.garcia @email.com'
  },
  // Beneficiarios de Demo (usr_003)
  {
    id: 'ben_006',
    user_id: 'usr_003',
    name: 'Beneficiario Demo 1',
    account_number: '************0001',
    bank_name: 'Banco Demo',
    bank_code: 'DEMO',
    alias: 'Demo 1',
    email: 'demo1 @email.com'
  },
  {
    id: 'ben_007',
    user_id: 'usr_003',
    name: 'Beneficiario Demo 2',
    account_number: '************0002',
    bank_name: 'Banco Demo',
    bank_code: 'DEMO',
    alias: 'Demo 2',
    email: 'demo2 @email.com'
  }
];
