import { HttpExceptionFilter } from './http-exception.filter';
import { ZodErrorFilter } from './zod-error.filter';

export const filters = [new HttpExceptionFilter(), new ZodErrorFilter()];
