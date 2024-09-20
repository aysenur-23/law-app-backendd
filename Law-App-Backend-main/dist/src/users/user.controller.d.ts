import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    create(createCreateuserDto: UserDTO): Promise<import("./user.entity").UserEntity>;
    updatepassw(createCreateuserDto: any): Promise<{
        hashedPassword: any;
        mail: string;
        name: string;
        surname: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updatemail(createCreateuserDto: any): Promise<import("./user.entity").UserEntity>;
    delete(createCreateuserDto: UserDTO): void;
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./user.entity").UserEntity[];
    }>;
}
