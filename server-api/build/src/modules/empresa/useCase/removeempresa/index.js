"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmpresaUseCase = void 0;
const EmpresaRepository_1 = require("@modules/empresa/infra/database/EmpresaRepository");
const removeempresaUseCase_1 = require("./removeempresaUseCase");
const repo = new EmpresaRepository_1.EmpresaRepository();
const useCase = new removeempresaUseCase_1.RemoveEmpresaUseCase(repo);
exports.removeEmpresaUseCase = useCase;
