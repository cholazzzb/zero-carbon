import { NextApiRequest } from 'next';

export const getQueryParams = (
  params: string,
  query: NextApiRequest['query'],
): string => {
  const queryParams = query[params];
  if (!queryParams) return '';
  return Array.isArray(queryParams) ? queryParams[0] : queryParams ?? '';
};

export const getQueryParamsArray = (
  params: string,
  query: NextApiRequest['query'],
): Array<string> => {
  const queryParams = query[params];
  if (!queryParams) return [];
  return Array.isArray(queryParams) ? queryParams : [queryParams];
};

export const getClientQueryParams = (
  URLQuery: string | Array<string> | undefined,
): string => {
  return Array.isArray(URLQuery) ? URLQuery[0] : URLQuery ?? '';
};
