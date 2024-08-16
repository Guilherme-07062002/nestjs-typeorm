import { Controller, Get, Param } from '@nestjs/common';
import { PartnerService } from './partner.service';

@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get('/partners/:parterId')
  async findOne(@Param('id') id: string) {
    return await this.partnerService.findOne(+id);
  }
}
