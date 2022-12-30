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
exports.UpdateEmpresaUseCase = void 0;
class UpdateEmpresaUseCase {
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
                const { id } = data;
                yield this.empresaRepo.update(id, data);
                return { isError: false, value: null };
            }
            catch (err) {
                return { isError: true, error: "Unexpected error" };
            }
        });
    }
}
exports.UpdateEmpresaUseCase = UpdateEmpresaUseCase;
