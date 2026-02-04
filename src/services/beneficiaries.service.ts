import { Beneficiary } from '../models/Beneficiary.model';
import { Beneficiary as BeneficiaryInterface } from '../types';

export class BeneficiariesService {
  async getBeneficiariesByUserId(userId: string): Promise<BeneficiaryInterface[]> {
    const beneficiaries = await Beneficiary.findAll({ where: { user_id: userId } });
    return beneficiaries.map(ben => ben.toJSON());
  }

  async getBeneficiaryById(beneficiaryId: string, userId: string): Promise<BeneficiaryInterface | null> {
    const beneficiary = await Beneficiary.findOne({ where: { id: beneficiaryId, user_id: userId } });
    return beneficiary ? beneficiary.toJSON() : null;
  }
}