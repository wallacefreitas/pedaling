import { NextFunction, Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken'

const user = {
  id: '12345',
  username: 'admin',
  password: 'admin',
}

const jwt = {
  secret: process.env.JWT_SECRET_KEY || "",
  expiresIn: '1d'
}

export class AuthService {
  private token: string;

  constructor(username: string, password: string) {
    if (username === user.username && password === user.password) {
      this.token = sign({}, jwt.secret, {
        subject: '1',
        expiresIn: jwt.expiresIn
      })
    }
  }

  public getToken() {
    return this.token
  }

  public authorization(request: Request, response: Response, next: NextFunction) {
    const auth = request.headers.authorization;

    if (!auth) {
      throw new Error('JWT is missing');
    }

    try {
      const [_, token] = auth.split(' ');
      const tokenDecoded = verify(token, jwt.secret);

      if (tokenDecoded) {
        return next();
      } 
        
    } catch(err) {
      return response.status(401).json({ message: 'JWT Invalid...'})
    }
  }
}