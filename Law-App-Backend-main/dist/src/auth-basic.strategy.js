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
exports.BasicStrategy = void 0;
const passport_http_1 = require("passport-http");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const fs = require("fs");
let BasicStrategy = class BasicStrategy extends (0, passport_1.PassportStrategy)(passport_http_1.BasicStrategy) {
    constructor() {
        super({
            passReqToCallback: true,
        });
        this.validate = async (req, username, password) => {
            let data = fs.readFileSync('./login.env', 'utf-8');
            data = data.replaceAll('\r', '');
            const lines = data.split('\n');
            const login = lines[0].split(':');
            console.log(login);
            if (login[0] === username && login[1] === password) {
                return true;
            }
            throw new common_1.UnauthorizedException();
        };
    }
};
exports.BasicStrategy = BasicStrategy;
exports.BasicStrategy = BasicStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BasicStrategy);
//# sourceMappingURL=auth-basic.strategy.js.map