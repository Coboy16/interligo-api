import { Card } from '../types';

export const cards: Card[] = [
  // Tarjetas de Juan (usr_001)
  {
    id: 'card_001',
    user_id: 'usr_001',
    account_id: 'acc_001',
    card_number_masked: '**** **** **** 4532',
    card_holder_name: 'JUAN C PEREZ GARCIA',
    type: 'DEBIT',
    brand: 'VISA',
    status: 'ACTIVE',
    expiry_date: '12/27',
    cvv_masked: '***'
  },
  {
    id: 'card_002',
    user_id: 'usr_001',
    account_id: 'acc_002',
    card_number_masked: '**** **** **** 8901',
    card_holder_name: 'JUAN C PEREZ GARCIA',
    type: 'DEBIT',
    brand: 'MASTERCARD',
    status: 'ACTIVE',
    expiry_date: '06/26',
    cvv_masked: '***'
  },
  {
    id: 'card_003',
    user_id: 'usr_001',
    account_id: 'acc_001',
    card_number_masked: '**** **** **** 1234',
    card_holder_name: 'JUAN C PEREZ GARCIA',
    type: 'CREDIT',
    brand: 'VISA',
    status: 'FROZEN',
    expiry_date: '09/28',
    cvv_masked: '***'
  },
  // Tarjetas de María (usr_002)
  {
    id: 'card_004',
    user_id: 'usr_002',
    account_id: 'acc_004',
    card_number_masked: '**** **** **** 5678',
    card_holder_name: 'MARIA E GARCIA LOPEZ',
    type: 'DEBIT',
    brand: 'VISA',
    status: 'ACTIVE',
    expiry_date: '03/27',
    cvv_masked: '***'
  },
  // Tarjetas de Demo (usr_003)
  {
    id: 'card_005',
    user_id: 'usr_003',
    account_id: 'acc_005',
    card_number_masked: '**** **** **** 0000',
    card_holder_name: 'USUARIO DEMO',
    type: 'DEBIT',
    brand: 'VISA',
    status: 'ACTIVE',
    expiry_date: '12/29',
    cvv_masked: '***'
  },
  {
    id: 'card_006',
    user_id: 'usr_003',
    account_id: 'acc_005',
    card_number_masked: '**** **** **** 9999',
    card_holder_name: 'USUARIO DEMO',
    type: 'CREDIT',
    brand: 'MASTERCARD',
    status: 'ACTIVE',
    expiry_date: '06/28',
    cvv_masked: '***'
  }
];
