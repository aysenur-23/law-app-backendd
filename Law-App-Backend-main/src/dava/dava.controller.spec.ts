import { Test, TestingModule } from '@nestjs/testing';
import { DavaController } from './dava.controller';
import { DavaService } from './dava.service';

describe('DavaController', () => {
  let controller: DavaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DavaController],
      providers: [DavaService],
    }).compile();

    controller = module.get<DavaController>(DavaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
