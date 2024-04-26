import { environment } from 'src/environments/environment.development';

export const API_URL: string = environment.api_url;

export enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const API_ENDPOINTS = {
  logIn: 'users/login',
  // signUp: 'users/signup',
  // resetPassword: 'users/resetPassword/',
  // forgetPassword: 'users/forgotPassword',
  // getBrowserDetail: 'users/getBrowserDetail/',
};
