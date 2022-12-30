"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const AggregateRoot_1 = require("@shared/domain/AggregateRoot");
const GuardClauses_1 = require("@shared/logic/GuardClauses");
class Empresa extends AggregateRoot_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
    }
    get nome() {
        return this.props.nome;
    }
    get cnpj() {
        return this.props.cnpj;
    }
    get createdAt() {
        return this.props.createdAt || new Date();
    }
    get updatedAt() {
        return this.props.updatedAt || new Date();
    }
    static build(props, id) {
        const guardResult = GuardClauses_1.GuardClauses.VerifyNullOrUndefinedArray([
            { fieldValue: props.nome, fieldName: 'nome' },
            { fieldValue: props.cnpj, fieldName: 'cnpj' },
        ]);
        if (!guardResult.succeeded) {
            return { isError: true, error: guardResult.message || 'Unexpected error' };
        }
        const transaction = new Empresa(props, id);
        return { isError: false, value: transaction };
    }
}
exports.Empresa = Empresa;
