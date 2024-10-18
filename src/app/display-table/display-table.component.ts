import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {

  constructor(private dipslayService: DisplayService) { }

  displayData: any;

  ngOnInit(): void {
    this.dipslayService.getDisplayData().subscribe((data: any) => {
      this.displayData = data.jsonData;
      console.log('object', this.displayData);
    })
  }

  getRowClass(duplicate: number) {
    if (duplicate > 2 && duplicate < 10) {
      return 'yellowRow';
    }
    else if (duplicate >= 10) {
      return 'greenRow';
    }
    else {
      return 'redRow';
    }
    return '';
  }
}
