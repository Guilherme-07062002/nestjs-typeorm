import { Injectable, NotFoundException } from '@nestjs/common';
import { PartnerInformationDTO } from './dto/partner.dtos';

export type PartnerModel = {
  findOne: (id: number) => Promise<any>
}

@Injectable()
export class PartnerService {
  constructor(
    private readonly partnerModel: PartnerModel
  ) {}

  async findOne(id: number): Promise<Partial<PartnerInformationDTO>> {
    const partner = await this.partnerModel.findOne(id);
    if (!partner) throw new NotFoundException('Partner not found');

    return {
      partnerId: partner.id,      
      name: partner.name,
      email: partner.email
    }
  }
}
