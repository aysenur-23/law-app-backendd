import { Test, TestingModule } from '@nestjs/testing';
import { DavaService } from './dava.service';

describe('DavaService', () => {
  let service: DavaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DavaService],
    }).compile();

    service = module.get<DavaService>(DavaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
