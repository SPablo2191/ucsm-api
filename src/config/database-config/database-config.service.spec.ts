import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConfigService } from './database-config.service';
import { ConfigService } from '@nestjs/config';

describe('DatabaseConfigService', () => {
  let service: DatabaseConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DatabaseConfigService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockImplementation((key: string) => {
              switch (key) {
                case 'DB_HOST':
                  return 'test_host';
                case 'DB_PORT':
                  return 5432;
                case 'DB_USER':
                  return 'test_user';
                case 'DB_PASSWORD':
                  return 'test_password';
                case 'DB_NAME':
                  return 'test_db';
                default:
                  return undefined;
              }
            }),
          },
        },
      ],
    }).compile();

    service = module.get<DatabaseConfigService>(DatabaseConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return TypeOrmModuleOptions', async () => {
    const options = await service.createTypeOrmOptions();
    expect(options).toEqual({
      type: 'postgres',
      host: 'test_host',
      port: 5432,
      username: 'test_user',
      password: 'test_password',
      database: 'test_db',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  });
});
