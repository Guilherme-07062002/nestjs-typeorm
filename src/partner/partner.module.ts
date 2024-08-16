import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';

const fakePartnerModel = {
  findOne: async (id: number) => {
    return {
      id,
      name: 'Partner Name',
      email: 'partner@email.com'
    }
  }
}

@Module({
  controllers: [PartnerController],
  providers: [PartnerService,
    {
      provide: 'PartnerModel',
      useValue: fakePartnerModel
    }
  ],
})
export class PartnerModule {}
