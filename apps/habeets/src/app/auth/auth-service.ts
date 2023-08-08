import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public login(email: string, password: string) {
    return this.httpClient.post('/auth/login', { email, password }).pipe(map(console.log));
  }
}
