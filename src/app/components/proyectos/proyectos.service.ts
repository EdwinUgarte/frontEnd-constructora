import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from './proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

 private urlEndPoint: string = "http://localhost:8080/api/proyectos";
 private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.urlEndPoint);
  }
  
  public getProyectoById(id) : Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.urlEndPoint}/${id}`)
  }

  create(proyecto : Proyecto) : Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlEndPoint, proyecto, {headers: this.httpHeaders})
  } 

  update(proyecto : Proyecto) : Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.urlEndPoint}/${proyecto.id}`, proyecto, {headers: this.httpHeaders})
  }
  
  delete(id) : Observable<Proyecto>{
    return this.http.delete<Proyecto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }


}
