import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard-top-totals',
  templateUrl: './totals-top.component.html',
  styleUrls: ['./dashboard-templates.component.css']
})
export class TotalsTopComponent {
  @Input() totals;

  constructor() {
  }

}


@Component({
  selector: 'app-dashboard-graph-selector',
  templateUrl: './graph-selector.html',
  styleUrls: ['./dashboard-templates.component.css']
})

export class GraphSelectorComponent {
  @Input() totals;
  @Output() onGraphChanged = new EventEmitter<any>();

  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };

  changeTheCurrentLine(event){
    console.log(event);
    if (arguments[1]) {
      this.onGraphChanged.emit(arguments[1]);
    }
  }

  constructor() {
  }

}


@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './graphs.html',
  styleUrls: ['./dashboard-templates.component.css']
})


export class GraphComponent implements OnInit {
  @Input() GraphObject;
  @Input() graphData: any;
  curving: any;
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = false;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = 'Month';
  showGridLines = false;
  schemeType = 'linear';

  colorScheme = {
    domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
  };
  // lie, area
  constructor() {
    console.log(d3);
    this.curving = d3.curveCardinal;
    console.log(this.curving);
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-dashboard-pie-charts',
  templateUrl: './pie-charts.html',
  styleUrls: ['./dashboard-templates.component.css']
})

export class PieChartsComponent {
  view = [500, 400];
  @Input() pieData;
  @Input() colorScheme;
}

@Component({
  selector: 'app-email-section',
  templateUrl: './email-section.html',
  styleUrls: ['./dashboard-templates.component.css']
})

export class EmailSectionComponent {
  @Input() figureColor;
  @Input() users;
  userValues: Array<object> = [{'name': 'April', 'value': 20}, {'name': 'May', 'value': 40}, {
    'name': 'June',
    'value': 30
  }, {'name': 'July', 'value': 67}];
  colorScheme = {domain: ['#ADE1D8']};

}

@Component({
  selector: 'app-dashboard-news-feed',
  templateUrl: './news.html',
  styleUrls: ['./dashboard-templates.component.css']
})

export class NewsFeedComponent {
  @Input() feeds;
}
