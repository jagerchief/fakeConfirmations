import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  public flights = [
    {
      departure: {
        iata: 'MAD',
        hour: '13:23'
      },
      destination: {
        iata: 'OPO',
        hour: '16:23'
      },
      airline: {
        image: ''
      },
      flightNum: 'RYR2346'
    },
    {
      departure: {
        iata: 'MAD',
        hour: '13:23'
      },
      destination: {
        iata: 'OPO',
        hour: '16:23'
      },
      airline: {
        image: ''
      },
      flightNum: 'RYR2346'
    },
    {
      departure: {
        iata: 'MAD',
        hour: '13:23'
      },
      destination: {
        iata: 'OPO',
        hour: '16:23'
      },
      airline: {
        image: ''
      },
      flightNum: 'RYR2346'
    },
    {
      departure: {
        iata: 'MAD',
        hour: '13:23'
      },
      destination: {
        iata: 'OPO',
        hour: '16:23'
      },
      airline: {
        image: ''
      },
      flightNum: 'RYR2346'
    }
  ];
  ngOnInit() {
  }

}
