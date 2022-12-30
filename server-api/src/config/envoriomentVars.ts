const DB_URI = process.env.DATABASE_URL || 'postgres';
const API_PORT = Number(process.env.API_PORT || 50051);
const PROTO_FILE = './proto/empresa.proto'

export {
  DB_URI,
  API_PORT,
  PROTO_FILE,
};