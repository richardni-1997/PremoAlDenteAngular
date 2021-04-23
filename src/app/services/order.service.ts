import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = "http://localhost:8096/api/orders";

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getOrder(orderId): Observable<any> {
    return this.http.get(`${baseUrl}/${orderId}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(orderId, data): Observable<any> {
    return this.http.put(`${baseUrl}/${orderId}`, data);
  }
  
  delete(orderId): Observable<any> {
    return this.http.delete(`${baseUrl}/${orderId}`);
  }
  
}
