import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface JwtPayload {
  id: number;
  name: string;
}

// This secret should be stored in environment variables for production
export const JWT_SECRET = 'your_jwt_secret'; // TODO: Store securely in environment variables!

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Authorization header
      secretOrKey: JWT_SECRET, // Secret to verify the JWT
    });
  }

  async validate(payload: JwtPayload) {
    // The payload will contain the data passed when the JWT was created
    return { userId: payload.id, name: payload.name };
  }
}
