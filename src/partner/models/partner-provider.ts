import { DataSource } from 'typeorm';
import { Partners } from './partner-model';

export const partnerProviders = [
  {
    provide: 'PARTNER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Partners),
    inject: ['DATA_SOURCE'],
  },
];