import { Card } from '../models/Card.model';
import { Card as CardInterface, UpdateCardRequest } from '../types';

export class CardsService {
  async getCardsByUserId(userId: string): Promise<CardInterface[]> {
    const cards = await Card.findAll({ where: { user_id: userId } });
    return cards.map(card => card.toJSON());
  }

  async getCardById(cardId: string, userId: string): Promise<CardInterface | null> {
    const card = await Card.findOne({ where: { id: cardId, user_id: userId } });
    return card ? card.toJSON() : null;
  }

  async updateCardStatus(cardId: string, userId: string, data: UpdateCardRequest): Promise<CardInterface | { error: string }> {
    const card = await Card.findOne({ where: { id: cardId, user_id: userId } });
    
    if (!card) {
      return { error: 'Tarjeta no encontrada' };
    }

    if (card.status === 'BLOCKED') {
      return { error: 'La tarjeta está bloqueada y no puede ser modificada' };
    }

    if (card.status === data.status) {
      return { error: `La tarjeta ya está ${data.status === 'FROZEN' ? 'congelada' : 'activa'}` };
    }

    card.status = data.status;
    await card.save();
    return card.toJSON();
  }
}