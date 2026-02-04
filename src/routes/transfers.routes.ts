import { Router } from 'express';
import { TransfersController } from '../controllers/transfers.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const transfersController = new TransfersController();

router.use(authMiddleware);

router.get('/', (req, res) => transfersController.getTransfers(req, res));
router.post('/', (req, res) => transfersController.createTransfer(req, res));
router.get('/:id', (req, res) => transfersController.getTransferById(req, res));
router.post('/:id/confirm', (req, res) => transfersController.confirmTransfer(req, res));

export default router;
