import { Router } from 'express';
import { BeneficiariesController } from '../controllers/beneficiaries.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const beneficiariesController = new BeneficiariesController();

router.use(authMiddleware);

router.get('/', (req, res) => beneficiariesController.getBeneficiaries(req, res));
router.get('/:id', (req, res) => beneficiariesController.getBeneficiaryById(req, res));

export default router;
