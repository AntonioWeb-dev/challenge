"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmpresaUseCase = void 0;
const EmpresaRepository_1 = require("@modules/empresa/infra/database/EmpresaRepository");
const createempresaUseCase_1 = require("./createempresaUseCase");
const repo = new EmpresaRepository_1.EmpresaRepository();
const useCase = new createempresaUseCase_1.CreateEmpresaUseCase(repo);
exports.createEmpresaUseCase = useCase;
