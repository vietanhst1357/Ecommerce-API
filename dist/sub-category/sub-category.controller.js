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
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const sub_category_service_1 = require("./sub-category.service");
const decorator_1 = require("../auth/decorator");
const dto_1 = require("./dto");
let SubCategoryController = class SubCategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    getAllSubCategories() {
        return this.subCategoryService.getAllSubCategory();
    }
    getSubCategoryById(subCategoryId) {
        return this.subCategoryService.getSubCategoryById(subCategoryId);
    }
    createSubCategory(staff, dto) {
        return this.subCategoryService.createSubCategory(staff, dto);
    }
    updateSubCategory(staff, subCategoryId, dto) {
        return this.subCategoryService.editSubCategory(staff, subCategoryId, dto);
    }
    daleteSubCategory(staff, subCategoryId) {
        return this.subCategoryService.deleteSubCategory(staff, subCategoryId);
    }
};
exports.SubCategoryController = SubCategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "getAllSubCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "getSubCategoryById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, decorator_1.GetStaff)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateSubCategoryDto]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "createSubCategory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, dto_1.EditSubCategoryDto]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "updateSubCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, decorator_1.GetStaff)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "daleteSubCategory", null);
exports.SubCategoryController = SubCategoryController = __decorate([
    (0, common_1.Controller)('sub-category'),
    __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryController);
//# sourceMappingURL=sub-category.controller.js.map