import { HttpExceptionFilter } from './http-exception.filter.js';
import { ZodErrorFilter } from './zod-error.filter.js';

export const filters = [new HttpExceptionFilter(), new ZodErrorFilter()];
