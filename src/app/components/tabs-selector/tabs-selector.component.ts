import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tabs-selector',
  templateUrl: './tabs-selector.component.html',
  styleUrls: ['./tabs-selector.component.scss']
})
export class TabsSelectorComponent implements OnInit {

  @Output() onSelectChange: EventEmitter<any> = new EventEmitter();

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
    this.onSelectChange.emit(tab.value);
  }

}
