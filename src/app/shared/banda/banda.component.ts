import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  @Input() public bandas;

  constructor() { }

  ngOnInit() {
  }

}
