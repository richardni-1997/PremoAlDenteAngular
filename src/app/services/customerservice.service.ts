//has mehods for sending HTTP requests to the APIs
//to service the page so it has the getters and setters for CRUD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8096/api/customers';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(customerId): Observable<any> {
    return this.http.get(`${baseUrl}/${customerId}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(customerId, data): Observable<any> {
    return this.http.put(`${baseUrl}/${customerId}`, data);
  }

}