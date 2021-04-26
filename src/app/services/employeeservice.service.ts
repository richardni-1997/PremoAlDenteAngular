import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8081/api/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  findByStatus(status): Observable<any> {
    return this.http.get(`${baseURL}/${status}`);
  }}
