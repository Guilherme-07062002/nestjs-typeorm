import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PartnerInformationDTO } from './dto/partner.dtos';
import { Partners } from './models/partner-model';
import { Repository } from 'typeorm';

@Injectable()
export class PartnerService {
  constructor(
    @Inject('PARTNER_REPOSITORY')
    private readonly partnerRepository: Repository<Partners>
  ) {}

  async findOne(id: number): Promise<Partial<PartnerInformationDTO>> {
    const partner = await this.partnerRepository.findOne({ where: { id } });
    if (!partner) throw new NotFoundException('Partner not found');

    return {
      partnerId: partner.id,      
      name: partner.name,
      email: partner.email
    }
  }
}
