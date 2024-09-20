import { Response } from 'express';
import { DavaService } from './dava.service';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
import { Dava } from './entities/dava.entity';
export declare class DavaController {
    private readonly davaService;
    constructor(davaService: DavaService);
    create(createDavaDto: CreateDavaDto): Promise<Dava>;
    findAll(): Promise<Dava[]>;
    findOne(id: string, res: Response): Promise<Response>;
    update(id: string, updateDavaDto: UpdateDavaDto, res: Response): Promise<Response>;
    remove(id: string, res: Response): Promise<Response>;
}
