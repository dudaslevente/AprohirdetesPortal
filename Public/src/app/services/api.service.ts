import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  server = `http://localhost:3000`;

  readAll(table: string){
    return this.http.get(this.server + '/api/advertisements/' + table);
  }

  selectAll(table:string){
    return this.http.get(`${this.server}/${table}`);
  }

  select(table: string, field:string, op: string, value: string){
    return this.http.get(this.server + '/'+table+'/'+field+'/'+op+'/'+value);
  }

  delete(table:string, id:number){
    return this.http.delete(`${this.server}/${table}/${id}`);
  }

  insert(table:string, data: object){
    return this.http.post(`${this.server}/${table}`, data);
  }

  upload(form: FormData, id:number){
    return this.http.post(`${this.server}/upload/${id}`, form);
  }

  registration(data: object) {
    return this.http.post(this.server + '/api/users/register', data);
  }

  login(data:object){
    return this.http.post(this.server + '/api/users/login/', data);
  }
}