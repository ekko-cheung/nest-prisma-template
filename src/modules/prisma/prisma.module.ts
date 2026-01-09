import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { getAuth } from '../../auth.js';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: 'AUTH',
      inject: [PrismaService],
      useFactory: (prismaService: PrismaService) => getAuth(prismaService),
    },
  ],
  exports: [PrismaService, 'AUTH'],
})
export class PrismaModule {}
