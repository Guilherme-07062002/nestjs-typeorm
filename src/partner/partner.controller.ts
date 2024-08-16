import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { PartnerService } from './partner.service';

@Controller('partners')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    if (!id) throw new BadRequestException('Id is required');

    return await this.partnerService.findOne(+id);
  }
}
