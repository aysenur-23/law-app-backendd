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
exports.DavaController = void 0;
const common_1 = require("@nestjs/common");
const dava_service_1 = require("./dava.service");
const create_dava_dto_1 = require("./dto/create-dava.dto");
const update_dava_dto_1 = require("./dto/update-dava.dto");
let DavaController = class DavaController {
    constructor(davaService) {
        this.davaService = davaService;
    }
    async create(createDavaDto) {
        return this.davaService.create(createDavaDto);
    }
    async findAll() {
        return this.davaService.findAll();
    }
    async findOne(id, res) {
        const dava = await this.davaService.findOne(id);
        if (!dava) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ error: 'Dava bulunamadı.' });
        }
        return res.status(common_1.HttpStatus.OK).json(dava);
    }
    async update(id, updateDavaDto, res) {
        const response = await this.davaService.update(id, updateDavaDto);
        if (!response) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ error: 'Dava bulunamadı.' });
        }
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'Dava bilgileri başarıyla güncellendi.' });
    }
    async remove(id, res) {
        await this.davaService.remove(id);
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'Dava bilgileri başarıyla silindi.' });
    }
};
exports.DavaController = DavaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dava_dto_1.CreateDavaDto]),
    __metadata("design:returntype", Promise)
], DavaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DavaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DavaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dava_dto_1.UpdateDavaDto, Object]),
    __metadata("design:returntype", Promise)
], DavaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DavaController.prototype, "remove", null);
exports.DavaController = DavaController = __decorate([
    (0, common_1.Controller)('dava'),
    __metadata("design:paramtypes", [dava_service_1.DavaService])
], DavaController);
//# sourceMappingURL=dava.controller.js.map