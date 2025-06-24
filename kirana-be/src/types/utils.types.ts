import { Request } from 'express';
import { User } from 'generated/prisma';

export type AuthenticatedRequest = Request & {
  user: User;
};
