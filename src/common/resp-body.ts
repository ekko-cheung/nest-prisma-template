export enum ErrorCode {
  INVALID_PARAMS = '10000',
}

type RespError = {
  cause: string;
  field: string;
};

type RespBody<T> = {
  success: boolean;
  code: ErrorCode | '0';
  data?: T;
  errors?: RespError[];
  message: string;
};

export const createSuccessResp = <T>(data: T): RespBody<T> => {
  return {
    success: true,
    code: '0',
    data,
    message: 'success',
  };
};

export const createErrorResp = (
  message: string,
  code: ErrorCode,
  errors?: RespError[],
): RespBody<null> => {
  return {
    success: false,
    code,
    message,
    errors,
  };
};
