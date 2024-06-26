import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/api/';
  private clientes = 'clientes';
  private gestores = 'gestores';
  private pagos = 'pagos';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl + this.clientes}`);
  }

  getGestores(): Observable<any> {
    return this.http.get(`${this.apiUrl + this.gestores}`);
  }

  getGestoresByCliente(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl + this.gestores}/?nombre=${nombre}`);
  }

  getPagosByCliente(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl + this.pagos}/cliente/?nombre=${nombre}`);
  }

  getPagosByGestor(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl + this.pagos}/gestor/?nombre=${nombre}`);
  }
}
