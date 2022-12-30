import jwt from 'jsonwebtoken';

export const verifyJwt = (
  token: string,
) => {
  try {
    return jwt.verify(token, 'key-test');
  } catch (error) {
    return null;
  }
};