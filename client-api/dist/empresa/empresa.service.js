"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaService = void 0;
const common_1 = require("@nestjs/common");
const empresa_grpcCLient_1 = require("./empresa.grpcCLient");
let EmpresaService = class EmpresaService {
    async create(createEmpresaDto) {
        const promiseCreateEmpresa = new Promise((resolve, reject) => {
            empresa_grpcCLient_1.client.CreateEmpresa(Object.assign(Object.assign({}, createEmpresaDto), { jwt: process.env.JWT_KEY }), (err, empresa) => {
                if (err) {
                    reject(new common_1.BadRequestException(err.details));
                }
                resolve(empresa);
            });
        });
        const empresa = await promiseCreateEmpresa;
        return empresa;
    }
    async findOne(id) {
        const promiseEmpresa = new Promise((resolve, reject) => {
            empresa_grpcCLient_1.client.GetEmpresa({
                id,
                jwt: process.env.JWT_KEY,
            }, (err, empresa) => {
                if (err) {
                    reject(new common_1.NotFoundException(err.details));
                }
                resolve(empresa);
            });
        });
        const empresa = await promiseEmpresa;
        return empresa;
    }
    async update(id, updateEmpresaDto) {
        const promiseEmpresa = new Promise((resolve, reject) => {
            empresa_grpcCLient_1.client.UpdateEmpresa(Object.assign(Object.assign({ id }, updateEmpresaDto), { jwt: process.env.JWT_KEY }), (err, empresa) => {
                if (err) {
                    if (err.details === 'Empresa não encontrada') {
                        reject(new common_1.NotFoundException(err.details));
                        return;
                    }
                    reject(err);
                }
                resolve(empresa);
            });
        });
        const empresa = await promiseEmpresa;
        return empresa;
    }
    async remove(id) {
        const promiseEmpresa = new Promise((resolve, reject) => {
            empresa_grpcCLient_1.client.removeEmpresa({
                id,
                jwt: process.env.JWT_KEY,
            }, (err, empresa) => {
                if (err) {
                    console.log(err.details);
                    if (err.details === 'Empresa não encontrada') {
                        reject(new common_1.NotFoundException(err.details));
                        return;
                    }
                    reject(err);
                }
                resolve(empresa);
            });
        });
        const empresa = await promiseEmpresa;
        return empresa;
    }
};
EmpresaService = __decorate([
    (0, common_1.Injectable)()
], EmpresaService);
exports.EmpresaService = EmpresaService;
//# sourceMappingURL=empresa.service.js.map