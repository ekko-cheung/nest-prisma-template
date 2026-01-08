import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ZodError } from 'zod';
import { createErrorResp, ErrorCode } from '../resp-body.js';

@Catch(ZodError)
export class ZodErrorFilter implements ExceptionFilter<ZodError> {
  catch(exception: ZodError, host: ArgumentsHost) {
    const errors = exception.issues.map((issue) => {
      return {
        field: issue.path.join('.'),
        cause: issue.message,
      };
    });

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response
      .status(400)
      .json(
        createErrorResp('validation_error', ErrorCode.INVALID_PARAMS, errors),
      );
  }
}
