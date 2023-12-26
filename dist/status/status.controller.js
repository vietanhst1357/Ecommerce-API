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
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
const decorator_1 = require("../auth/decorator");
const dto_1 = require("./dto");
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    getAllStatus(staff) {
        return this.statusService.getAllStatus(staff);
    }
    getStatusById(staff, statusId) {
        return this.statusService.getStatusById(staff, statusId);
    }
    createStatus(staff, dto) {
        return this.statusService.createStatus(staff, dto);
    }
    editStatus(staff, statusId, dto) {
        return this.statusService.editStatus(staff, statusId, dto);
    }
    deleteStatus(staff, statusId) {
        return this.statusService.deleteStatus(staff, statusId);
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, decorator_1.GetStaff)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "getAllStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "getStatusById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateStatusDto]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "createStatus", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, dto_1.EditStatusDto]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "editStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "deleteStatus", null);
exports.StatusController = StatusController = __decorate([
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
//# sourceMappingURL=status.controller.js.map