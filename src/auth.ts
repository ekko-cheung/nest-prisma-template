import { betterAuth } from 'better-auth';
import { PrismaService } from './modules/prisma/prisma.service.js';
import { prismaAdapter } from 'better-auth/adapters/prisma';

let authInstance: ReturnType<typeof betterAuth> | null = null;

export function getAuth(prismaService: PrismaService) {
  if (!authInstance) {
    authInstance = betterAuth({
      database: prismaAdapter(prismaService, {
        provider: 'postgresql',
      }),
    });
  }

  return authInstance;
}
