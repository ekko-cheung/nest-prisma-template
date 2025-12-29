import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import type { Response } from 'express';
import { createRespBody, ErrorCode } from '../resp-body';

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
    const resp = createRespBody(null, [
      { message: exception.message, code: errorCode as ErrorCode },
    ]);
    response.status(status).json(resp);
  }
}
