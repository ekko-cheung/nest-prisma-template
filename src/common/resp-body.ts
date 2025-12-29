export enum ErrorCode {
  INVALID_PARAMS = '10000',
}

type RespError = {
  code: ErrorCode;
  message: string;
};

type RespBody<T> = {
  data?: T;
  errors?: RespError[];
  total?: number;
};

export const createRespBody = <T>(
  data?: T,
  errors?: RespError[],
  total?: number,
): RespBody<T> => {
  const respBody: RespBody<T> = {};
  if (data !== undefined) {
    respBody.data = data;
  }
  if (errors !== undefined) {
    respBody.errors = errors;
  }
  if (total !== undefined) {
    respBody.total = total;
  }
  return respBody;
};
