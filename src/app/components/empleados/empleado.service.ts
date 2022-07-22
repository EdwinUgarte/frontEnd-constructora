import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable()
export class EmpleadoService {

  private urlEndPoint: string = "https://secret-plains-60366.herokuapp.com/api/empleados";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Empleado[])//!Aqui estamos convirtiendo la respuesta en tipo de dato Empleado[]
    )
  }

  public getEmpleadoById(id): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEndPoint}/${id}`)
  }

  public crear(empleado: Empleado) : Observable<Empleado>{
    return this.http.post<Empleado>(this.urlEndPoint, empleado, {headers: this.httpHeaders})
  }

  public update(empleado: Empleado) : Observable<Empleado>{
    return this.http.put<Empleado>(`${this.urlEndPoint}/${empleado.id}`, empleado, {headers: this.httpHeaders})
  }

  public delete(id: number) : Observable<Empleado> {
    return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
