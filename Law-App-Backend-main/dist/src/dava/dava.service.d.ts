import { Dava } from './entities/dava.entity';
import { CreateDavaDto } from './dto/create-dava.dto';
import { UpdateDavaDto } from './dto/update-dava.dto';
export declare class DavaService {
    private db;
    private davaCollection;
    constructor();
    create(createDavaDto: CreateDavaDto): Promise<Dava>;
    findAll(): Promise<Dava[]>;
    findOne(id: string): Promise<Dava>;
    update(id: string, updateDavaDto: UpdateDavaDto): Promise<Dava>;
    remove(id: string): Promise<void>;
}
