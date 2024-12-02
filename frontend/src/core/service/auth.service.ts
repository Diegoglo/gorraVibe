import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000'; // URL de tu backend
  private tokenKey = 'auth_token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  // Observable para suscribirse al estado de autenticación
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión y almacenar el token JWT
  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/api/login`;
    return this.http.post<any>(url, { email, password });
  }

  // Almacena el token en localStorage
  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.isLoggedInSubject.next(true); // Actualiza el estado
  }

  // Recupera el token desde localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Verifica si el usuario está autenticado
  // Verifica si el token está presente y no ha expirado
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = this.decodeToken(token);
    if (!payload || !payload.exp) {
      return false;
    }

    // Verifica si el token ha expirado
    const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
    return payload.exp > currentTime;
  }


  // Verifica si el usuario es administrador
  isAdminUser(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = this.decodeToken(token);
    return payload?.role === 'admin';
  }

  // Decodifica el token JWT (simple implementación)
  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }

  // Obtiene el nombre del usuario desde el token JWT
  getUserName(): string {
    const token = this.getToken();
    if (!token) {
      return '';
    }
  
    const payload = this.decodeToken(token); // El payload es donde se almacenan los datos que deseas incluir en el token, como el correo electrónico del usuario, su rol,
    return payload?.email || ''; // Utiliza 'email' en lugar de 'name'
  }
  
}
