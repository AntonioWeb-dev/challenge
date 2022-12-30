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
exports.RemoveEmpresaUseCase = void 0;
class RemoveEmpresaUseCase {
    constructor(empresaRepo) {
        this.empresaRepo = empresaRepo;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield this.empresaRepo.findById(data.id);
                if (!empresa) {
                    return { isError: true, error: "Empresa não encontrada" };
                }
                yield this.empresaRepo.remove(data.id);
                const dataToReturn = {
                    id: empresa.id,
                    nome: empresa.nome,
                    cnpj: empresa.cnpj,
                    createdAt: empresa.createdAt,
                    updatedAt: empresa.updatedAt,
                };
                return { isError: false, value: dataToReturn };
            }
            catch (err) {
                return { isError: true, error: "Unexpected error" };
            }
        });
    }
}
exports.RemoveEmpresaUseCase = RemoveEmpresaUseCase;
