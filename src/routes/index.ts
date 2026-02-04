import { Router } from 'express';
import authRoutes from './auth.routes';
import accountsRoutes from './accounts.routes';
import beneficiariesRoutes from './beneficiaries.routes';
import transfersRoutes from './transfers.routes';
import cardsRoutes from './cards.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/accounts', accountsRoutes);
router.use('/beneficiaries', beneficiariesRoutes);
router.use('/transfers', transfersRoutes);
router.use('/cards', cardsRoutes);

export default router;
