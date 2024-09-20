"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDavaDto = exports.CreateDavaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateDavaDto {
}
exports.CreateDavaDto = CreateDavaDto;
class UpdateDavaDto extends (0, mapped_types_1.OmitType)(CreateDavaDto, ['dosyaNo']) {
}
exports.UpdateDavaDto = UpdateDavaDto;
//# sourceMappingURL=update-dava.dto.js.map