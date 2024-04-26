import { Injectable } from '@angular/core';
import { ApiHandler } from '../utils/api-handler';
import { API_ENDPOINTS, ApiMethod } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: ApiHandler) {}

  signIn(data: any) {
    return this.http.requestCall(API_ENDPOINTS.logIn, ApiMethod.POST, '', data);
  }
}
