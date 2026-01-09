import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module.js';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [
    PrismaModule,
    AuthModule.forRootAsync({
      imports: [PrismaModule],
      inject: ['AUTH'],
      useFactory: (auth) => ({ auth }),
    }),
  ],
  providers: [],
})
export class AppModule {}
