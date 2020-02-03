import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-selector',
  templateUrl: './tabs-selector.component.html',
  styleUrls: ['./tabs-selector.component.scss']
})
export class TabsSelectorComponent implements OnInit {

  constructor() { }
  public options = [
    {
      text: 'Flights',
      value: 'flights'
    },
    {
      text: 'Hotel',
      value: 'hotel'
    }
  ];
  public selected;

  ngOnInit() {
    this.selected = this.options[0];
  }
  selectTab(tab) {
    this.selected = tab;
  }

}
