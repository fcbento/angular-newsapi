import { Component } from '@angular/core';
import Grid from './utils/grid.helper';
import Row from './utils/row.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsapi';

  constructor() {
  }

  public grid(grid: string): string {
    return Grid(grid);
  }

  public row(row: string) : string {
    return Row(row);
  }

}
