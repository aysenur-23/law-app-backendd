"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    delete(_createCreateuserDto) {
        throw new Error('Method not implemented.');
    }
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);
            const user = this.usersRepository.create({
                ...data,
                hashedPassword,
            });
            await this.usersRepository.insert(user);
            return user;
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError &&
                error.message.includes('Duplicate')) {
                throw new Error('Bu e-posta zaten kullanılıyor.');
            }
            throw new Error('Kayıt sırasında bir hata oluştu.');
        }
    }
    async updatepassw(data) {
        const user = await this.usersRepository.findOne({
            where: { mail: data.mail },
        });
        if (!user) {
            throw new Error('Kullanıcı bulunamadı.');
        }
        const isMatch = await bcrypt.compare(data.oldPassword, user.hashedPassword);
        if (!isMatch) {
            throw new Error('Eski parola hatalı.');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);
        const updatedUser = {
            ...user,
            hashedPassword,
        };
        await this.usersRepository.save(updatedUser);
        return updatedUser;
    }
    async updateMail(data) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.hashedPassword, saltRounds);
        await this.usersRepository.update({ mail: data.oldMail }, {
            mail: data.newMail,
            name: data.name,
            surname: data.surname,
            hashedPassword,
        });
        const updatedUser = await this.usersRepository.findOne({
            where: { mail: data.newMail },
        });
        return updatedUser;
    }
    async readAll() {
        return await this.usersRepository.find();
    }
    async findOne(mail, passw) {
        const user = await this.usersRepository.findOne({ where: { mail } });
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Kullanıcı Bulunamdı',
                user,
            };
        }
        const isMatch = await bcrypt.compare(passw, user.hashedPassword);
        if (!isMatch) {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Şifre Yanlış',
                user,
            };
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Login successful',
            user,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map