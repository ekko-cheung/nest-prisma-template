import { HttpException } from '@nestjs/common';
import { ErrorCode } from '../resp-body.js';

export class InvalidParamsException extends HttpException {
  constructor(message: string) {
    super(message, 400, {
      description: ErrorCode.INVALID_PARAMS,
    });
  }
}
