"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmpresaByIdUseCase = void 0;
const EmpresaRepository_1 = require("@modules/empresa/infra/database/EmpresaRepository");
const findempresaByIdUseCase_1 = require("./findempresaByIdUseCase");
const repo = new EmpresaRepository_1.EmpresaRepository();
const useCase = new findempresaByIdUseCase_1.FindEmpresaByIDUseCase(repo);
exports.findEmpresaByIdUseCase = useCase;
