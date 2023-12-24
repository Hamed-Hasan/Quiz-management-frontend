import jwtDecode from "jwt-decode";
import jwt from 'jsonwebtoken';

export const decodedToken = (token:string) => {
    // @ts-ignore
    return jwtDecode(token)
}


const secretKey = 'quiz-app'; 

export interface JwtPayload {
    userId: string;
    role: string;
    iat: number;
    exp: number;
  }
  
  export const decodeAuthToken = (token: string): JwtPayload | null => {
    try {
      const decodedToken = jwt.verify(token, secretKey) as JwtPayload;
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error.message);
      return null;
    }
  };
  
