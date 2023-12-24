export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data?: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ICourse {
  id: string;
  userId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  categoryId?: string;
  createdAt?: string;
  updatedAt?: string;
}
