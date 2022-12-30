"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmpresaUseCase = void 0;
const empresa_1 = require("@modules/empresa/domain/empresa");
class CreateEmpresaUseCase {
    constructor(empresaRepo) {
        this.empresaRepo = empresaRepo;
    }
    execute(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresaOrError = empresa_1.Empresa.build({
                    nome: data.nome,
                    cnpj: data.cnpj,
                });
                if (empresaOrError.isError) {
                    return { isError: true, error: 'Campos invalidos' };
                }
                const empresaCreated = yield this.empresaRepo.create(empresaOrError.value);
                if (empresaCreated) {
                    const dataToReturn = {
                        id: empresaCreated.id,
                        nome: empresaCreated.nome,
                        cnpj: empresaCreated.cnpj,
                        createdAt: empresaCreated.createdAt,
                        updatedAt: empresaCreated.updatedAt,
                    };
                    return { isError: false, value: dataToReturn };
                }
                return { isError: true, error: 'Error: criar empresa' };
            }
            catch (err) {
                if (((_a = err === null || err === void 0 ? void 0 : err.meta) === null || _a === void 0 ? void 0 : _a.target[0]) === 'cnpj') {
                    return { isError: true, error: 'Error: empresa já registrada' };
                }
                return { isError: true, error: 'Unexpected error' };
            }
        });
    }
}
exports.CreateEmpresaUseCase = CreateEmpresaUseCase;
