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
exports.StaffController = void 0;
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard");
const staff_service_1 = require("./staff.service");
const decorator_1 = require("../auth/decorator");
const dto_1 = require("./dto");
let StaffController = class StaffController {
    constructor(staffService) {
        this.staffService = staffService;
    }
    getCurrentStaff(staff) {
        return staff;
    }
    editStaff(id, dto) {
        return this.staffService.editStaff(id, dto);
    }
};
exports.StaffController = StaffController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, decorator_1.GetStaff)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "getCurrentStaff", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, decorator_1.GetStaff)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditStaffDto]),
    __metadata("design:returntype", void 0)
], StaffController.prototype, "editStaff", null);
exports.StaffController = StaffController = __decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('staff'),
    __metadata("design:paramtypes", [staff_service_1.StaffService])
], StaffController);
//# sourceMappingURL=staff.controller.js.map