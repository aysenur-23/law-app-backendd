import { Module } from '@nestjs/common';
import { DavaService } from './dava.service';
import { DavaController } from './dava.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dava as dava } from './entities/dava.entity';

@Module({
  imports: [TypeOrmModule.forFeature([dava])],
  exports: [TypeOrmModule],
  controllers: [DavaController],
  providers: [DavaService],
})
export class DavaModule {}
