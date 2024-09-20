import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { DavaService } from './dava.service';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
import { Dava } from './entities/dava.entity';

@Controller('dava')
export class DavaController {
  constructor(private readonly davaService: DavaService) {}

  @Post()
  async create(@Body() createDavaDto: CreateDavaDto): Promise<Dava> {
    return this.davaService.create(createDavaDto);
  }

  @Get()
  async findAll() {
    return this.davaService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    const dava = await this.davaService.findOne(id);
    if (!dava) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'Dava bulunamadı.' });
    }
    return res.status(HttpStatus.OK).json(dava);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDavaDto: UpdateDavaDto,
    @Res() res: Response,
  ): Promise<Response> {
    const response = await this.davaService.update(id, updateDavaDto);
    if (!response) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'Dava bulunamadı.' });
    }
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Dava bilgileri başarıyla güncellendi.' });
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    await this.davaService.remove(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Dava bilgileri başarıyla silindi.' });
  }
}
