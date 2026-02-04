import { Router } from 'express';
import { AccountsController } from '../controllers/accounts.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const accountsController = new AccountsController();

router.use(authMiddleware);

router.get('/', (req, res) => accountsController.getAccounts(req, res));
router.get('/:id', (req, res) => accountsController.getAccountById(req, res));
router.get('/:id/transactions', (req, res) => accountsController.getTransactions(req, res));

export default router;
