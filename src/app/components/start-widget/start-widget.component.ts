import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'start-widget',
  templateUrl: './start-widget.component.html',
  styleUrls: ['./start-widget.component.scss']
})
export class StartWidgetComponent implements OnInit {

  @Output() onSearchFlights: EventEmitter<any> = new EventEmitter();
  @Input() simplified = false;
  constructor() { }
  public selectedType = 'flights';

  ngOnInit() {
  }

  changeSelected(newSelected) {
    this.selectedType = newSelected;
  }

  searchFlights() {
    this.onSearchFlights.emit();
  }

}
