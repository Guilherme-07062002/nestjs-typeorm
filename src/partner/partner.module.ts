import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { partnerProviders } from './models/partner-provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PartnerController],
  providers: [
    PartnerService,
    ...partnerProviders
  ],
})
export class PartnerModule {}
