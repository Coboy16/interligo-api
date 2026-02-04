import { Router } from 'express';
import { CardsController } from '../controllers/cards.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const cardsController = new CardsController();

router.use(authMiddleware);

router.get('/', (req, res) => cardsController.getCards(req, res));
router.get('/:id', (req, res) => cardsController.getCardById(req, res));
router.patch('/:id', (req, res) => cardsController.updateCardStatus(req, res));

export default router;
