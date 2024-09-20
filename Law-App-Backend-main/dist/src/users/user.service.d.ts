import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private usersRepository;
    delete(_createCreateuserDto: UserDTO): void;
    constructor(usersRepository: Repository<UserEntity>);
    create(data: UserDTO): Promise<UserEntity>;
    updatepassw(data: any): Promise<{
        hashedPassword: any;
        mail: string;
        name: string;
        surname: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMail(data: {
        oldMail: string;
        newMail: string;
        hashedPassword: string;
        name: string;
        surname: string;
    }): Promise<UserEntity>;
    readAll(): Promise<UserEntity[]>;
    findOne(mail: string, passw: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        user: UserEntity;
    }>;
}
