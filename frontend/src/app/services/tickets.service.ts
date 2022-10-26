import { Injectable } from '@angular/core';
import { sample_tickets } from 'src/data';
import {Ticket} from '../shared/models/Ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() { }

  getAll():Ticket[]{
    return sample_tickets;
  }
}
