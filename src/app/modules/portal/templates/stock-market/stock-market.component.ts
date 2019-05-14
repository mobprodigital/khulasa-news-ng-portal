import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent implements OnInit {
  @Input() tableData: any[][];
  @Input() tableHead: any[][];

  constructor() { }

  ngOnInit() {
  }

}
