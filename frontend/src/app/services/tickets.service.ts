import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TICKETS } from '../shared/constants/urls';
import {Ticket} from '../shared/models/Ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(TICKETS);
  }
}
