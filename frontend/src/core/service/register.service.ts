import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
// import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/api/register'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData).pipe(
      catchError(error => {
        console.error('Error en la solicitud', error);
        return throwError('Error en la solicitud, intenta nuevamente.');
      })
    );
  }
}
