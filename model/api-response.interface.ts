export interface HttpResponse {
  data: any;
  message?: string;
  status: number;
}

export interface ErrorResponse {
  code?: string;
  data?: any;
  additional_errors?: AdditionalError[];
  message: string;
}

interface AdditionalError {
  code?: string;
  data?: any;
  message: string;
}
