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
exports.EmpresaRepository = void 0;
const client_1 = require("@infra/prisma/client");
const EmpresaMapper_1 = require("../mapper/EmpresaMapper");
class EmpresaRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const raws = yield client_1.client.empresa.findMany();
            return raws.map((raw) => EmpresaMapper_1.EmpresaMapper.toDomain(raw));
        });
    }
    create(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = EmpresaMapper_1.EmpresaMapper.toPersistent(empresa);
            const raw = yield client_1.client.empresa.create({ data });
            return EmpresaMapper_1.EmpresaMapper.toDomain(raw);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const raw = yield client_1.client.empresa.findUnique({
                where: { id },
            });
            if (!raw) {
                return null;
            }
            return EmpresaMapper_1.EmpresaMapper.toDomain(raw);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.client.empresa.update({
                where: {
                    id
                },
                data,
            });
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client_1.client.empresa.delete({ where: { id } });
        });
    }
}
exports.EmpresaRepository = EmpresaRepository;
