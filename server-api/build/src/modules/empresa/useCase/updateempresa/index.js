"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmpresaUseCase = void 0;
const EmpresaRepository_1 = require("@modules/empresa/infra/database/EmpresaRepository");
const updateempresaUseCase_1 = require("./updateempresaUseCase");
const repo = new EmpresaRepository_1.EmpresaRepository();
const useCase = new updateempresaUseCase_1.UpdateEmpresaUseCase(repo);
exports.updateEmpresaUseCase = useCase;
