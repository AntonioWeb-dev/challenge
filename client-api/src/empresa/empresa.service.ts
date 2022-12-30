import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { client } from './empresa.grpcCLient';

@Injectable()
export class EmpresaService {
  async create(createEmpresaDto: CreateEmpresaDto) {
    const promiseCreateEmpresa = new Promise((resolve, reject) => {
      client.CreateEmpresa(
        {
          ...createEmpresaDto,
          jwt: process.env.JWT_KEY,
        },
        (err, empresa) => {
          if (err) {
            reject(new BadRequestException(err.details));
          }
          resolve(empresa);
        },
      );
    });
    const empresa = await promiseCreateEmpresa;
    return empresa;
  }

  async findOne(id: string) {
    const promiseEmpresa = new Promise((resolve, reject) => {
      client.GetEmpresa(
        {
          id,
          jwt: process.env.JWT_KEY,
        },
        (err, empresa) => {
          if (err) {
            reject(new NotFoundException(err.details));
          }
          resolve(empresa);
        },
      );
    });
    const empresa = await promiseEmpresa;
    return empresa;
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    const promiseEmpresa = new Promise((resolve, reject) => {
      client.UpdateEmpresa(
        {
          id,
          ...updateEmpresaDto,
          jwt: process.env.JWT_KEY,
        },
        (err, empresa) => {
          if (err) {
            if (err.details === 'Empresa não encontrada') {
              reject(new NotFoundException(err.details));
              return;
            }
            reject(err);
          }
          resolve(empresa);
        },
      );
    });
    const empresa = await promiseEmpresa;
    return empresa;
  }

  async remove(id: string) {
    const promiseEmpresa = new Promise((resolve, reject) => {
      client.removeEmpresa(
        {
          id,
          jwt: process.env.JWT_KEY,
        },
        (err, empresa) => {
          if (err) {
            console.log(err.details);
            if (err.details === 'Empresa não encontrada') {
              reject(new NotFoundException(err.details));
              return;
            }
            reject(err);
          }
          resolve(empresa);
        },
      );
    });
    const empresa = await promiseEmpresa;
    return empresa;
  }
}
