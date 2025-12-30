import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import type { Response } from 'express';
import { createErrorResp, ErrorCode } from '../resp-body';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exceptionResp = exception.getResponse();
    let errorCode = '';
    if (
      exceptionResp &&
      typeof exceptionResp === 'object' &&
      'error' in exceptionResp
    ) {
      errorCode = (exceptionResp as any).error;
    }

    response
      .status(status)
      .json(createErrorResp(exception.message, errorCode as ErrorCode));
  }
}
