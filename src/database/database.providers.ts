import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'user',
        password: '1234',
        database: 'database',
        entities: [
            __dirname + '/../**/*-model{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];