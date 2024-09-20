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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DavaService = void 0;
const dava_entity_1 = require("./entities/dava.entity");
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
let DavaService = class DavaService {
    constructor() {
        this.db = (0, firebase_admin_1.firestore)();
        this.davaCollection = this.db.collection('davas');
    }
    async create(createDavaDto) {
        const newDava = new dava_entity_1.Dava();
        Object.assign(newDava, createDavaDto);
        const docRef = this.davaCollection.doc();
        await docRef.set(newDava);
        return newDava;
    }
    async findAll() {
        const snapshot = await this.davaCollection.get();
        const dava = snapshot.docs.map((doc) => doc.data());
        return dava;
    }
    async findOne(id) {
        const docRef = this.davaCollection.doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            throw new common_1.NotFoundException(`${id} Numaralı dava bulunamadı.`);
        }
        return doc.data();
    }
    async update(id, updateDavaDto) {
        const dava = await this.findOne(id);
        if (!dava) {
            throw new common_1.NotFoundException(`${id} Numaralı dava bulunamadı.`);
        }
        Object.assign(dava, updateDavaDto);
        const docRef = this.davaCollection.doc(id);
        await docRef.update(id, updateDavaDto);
        return dava;
    }
    async remove(id) {
        await this.davaCollection.doc(id).delete();
    }
};
exports.DavaService = DavaService;
exports.DavaService = DavaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DavaService);
//# sourceMappingURL=dava.service.js.map