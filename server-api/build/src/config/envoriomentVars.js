"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROTO_FILE = exports.API_PORT = exports.DB_URI = void 0;
const DB_URI = process.env.DATABASE_URL || 'postgres';
exports.DB_URI = DB_URI;
const API_PORT = Number(process.env.API_PORT || 50051);
exports.API_PORT = API_PORT;
const PROTO_FILE = './proto/empresa.proto';
exports.PROTO_FILE = PROTO_FILE;
