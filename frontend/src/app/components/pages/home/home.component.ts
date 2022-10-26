import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import {Ticket} from './app/shared/models/Ticket';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tickets:Ticket[] = []
  constructor(private ticketService:TicketsService) {
    this.tickets = ticketService.getAll();
   }

  ngOnInit(): void {
  }

}
