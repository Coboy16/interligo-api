import { sequelize, connectDatabase } from './config/database';
import { User } from './models/User.model';
import { Account } from './models/Account.model';
import { Transaction } from './models/Transaction.model';
import { Beneficiary } from './models/Beneficiary.model';
import { Card } from './models/Card.model';
import { Transfer } from './models/Transfer.model';

// Import old mock data
import { users as mockUsers } from './data/users.data';
import { accounts as mockAccounts } from './data/accounts.data';
import { transactions as mockTransactions } from './data/transactions.data';
import { beneficiaries as mockBeneficiaries } from './data/beneficiaries.data';
import { cards as mockCards } from './data/cards.data';
import { transfers as mockTransfers } from './data/transfers.data';

export const initializeDatabase = async () => {
  await connectDatabase();

  // Sync models
  await sequelize.sync({ force: true }); // Use { force: true } to drop existing tables and re-create them
  console.log('All models were synchronized successfully.');

  // Seed data
  try {
    await User.bulkCreate(mockUsers);
    await Account.bulkCreate(mockAccounts);
    await Transaction.bulkCreate(mockTransactions);
    await Beneficiary.bulkCreate(mockBeneficiaries);
    await Card.bulkCreate(mockCards);
    await Transfer.bulkCreate(mockTransfers);
    console.log('Database seeded with mock data!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
