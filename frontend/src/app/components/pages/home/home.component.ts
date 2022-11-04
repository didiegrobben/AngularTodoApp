import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketsService } from 'src/app/services/tickets.service';
import {Ticket} from '../../../shared/models/Ticket';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tickets: Ticket[] = [];
  constructor(ticketService: TicketsService, activatedRoute: ActivatedRoute) {
    let ticketObservable:Observable<Ticket[]>;
    activatedRoute.params.subscribe((params) => {
      ticketObservable = ticketService.getAll();
      ticketObservable.subscribe((serverTickets) => {
        this.tickets = serverTickets;
      })
    })
   }

  ngOnInit(): void {
  }

}
