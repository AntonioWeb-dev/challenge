import jwt from 'jsonwebtoken';
import * as grpc from "@grpc/grpc-js";
import { createEmpresaUseCase } from "@modules/empresa/useCase/createempresa";
import { findEmpresaByIdUseCase } from "@modules/empresa/useCase/findempresaById";
import { removeEmpresaUseCase } from "@modules/empresa/useCase/removeempresa";
import { updateEmpresaUseCase } from "@modules/empresa/useCase/updateempresa";
import { EmpresaServiceHandlers } from "../../../../../proto/empresas/EmpresaService";
import { verifyJwt } from '@shared/infra/verifyJwt';

export class EmpresaServer implements EmpresaServiceHandlers {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    async GetEmpresa (call: any, callback: any) {
      const isValid = verifyJwt(call.request.jwt)
        if (isValid === null) {
          callback({
            code: 403,
            message: 'Unauthorized',
            status: grpc.status.PERMISSION_DENIED
          })
          return;
        }
        delete call.request.jwt;
      const empresa = await findEmpresaByIdUseCase.execute(call.request)
      if (!empresa.isError) {
        callback(null, empresa.value)
        return;
      }
      callback({
        code: 400,
        message: empresa.error,
        status: grpc.status.NOT_FOUND
      })
     }
  
     async CreateEmpresa(call: any, callback: any) {
      try {
        const isValid = verifyJwt(call.request.jwt)
        if (isValid === null) {
          callback({
            code: 403,
            message: 'Unauthorized',
            status: grpc.status.PERMISSION_DENIED
          })
          return;
        }
        delete call.jwt;
        const empresaResult = await createEmpresaUseCase.execute(call.request)
        if (!empresaResult.isError) {
          callback(null, empresaResult.value)
          return;
        }
        callback({
          code: 400,
          message: empresaResult.error,
          status: grpc.status.ALREADY_EXISTS
        })
      } catch(err) {
        callback({
          code: 400,
          message: 'Server Error',
          status: grpc.status.NOT_FOUND
        })
      }
     }

     async RemoveEmpresa(call: any, callback: any) {
      try {
        const isValid = verifyJwt(call.request.jwt)
        if (isValid === null) {
          callback({
            code: 403,
            message: 'Unauthorized',
            status: grpc.status.PERMISSION_DENIED
          })
          return;
        }
        delete call.request.jwt;
        const empresaResult = await removeEmpresaUseCase.execute(call.request)
        if (!empresaResult.isError) {
          callback(null, empresaResult.value)
          return;
        }
        callback({
          code: 404,
          message: empresaResult.error,
          status: grpc.status.NOT_FOUND
        })
      } catch(err) {
        callback({
          code: 400,
          message: 'Server Error',
          status: grpc.status.UNKNOWN
        })
      }
     }

     async UpdateEmpresa(call: any, callback: any) {
      try {
        const isValid = verifyJwt(call.request.jwt)
        if (isValid === null) {
          callback({
            code: 403,
            message: 'Unauthorized',
            status: grpc.status.PERMISSION_DENIED
          })
          return;
        }
        delete call.request.jwt;
        const empresaResult = await updateEmpresaUseCase.execute(call.request)
        if (!empresaResult.isError) {
          callback(null, empresaResult.value)
          return;
        }
        callback({
          code: 400,
          message: empresaResult.error,
          status: grpc.status.UNKNOWN
        })
      } catch(err) {
        callback({
          code: 400,
          message: 'Server Error',
          status: grpc.status.UNKNOWN
        })
      }
     }
  }