import {Component, OnInit, Input} from '@angular/core';
import * as _ from "lodash";

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
  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };

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
  multi: any =
    [
      {
        'name': 'Clean Replica by CDR',
        'series': [
          {
            'name': 'April',
            'value': 41
          },
          {
            'name': 'May',
            'value': 54
          },
          {
            'name': 'June',
            'value': 60
          }
        ]
      },
      {
        'name': 'Original Attachment OK',
        'series': [
          {
            'name': 'April',
            'value': 70
          },
          {
            'name': 'May',
            'value': 20
          },
          {
            'name': 'June',
            'value': 13
          },
        ]
      },
      {
        'name': 'Attachment Blocked By CDR',
        'series': [
          {
            'name': 'April',
            'value': 30
          },
          {
            'name': 'May',
            'value': 45
          },
          {
            'name': 'June',
            'value': 90
          },
        ]
      },
      {
        'name': 'Attachment Blocked By Antivirus',
        'series': [
          {
            'name': 'April',
            'value': 23
          },
          {
            'name': 'May',
            'value': 15
          },
          {
            'name': 'June',
            'value': 34
          },
        ]
      }
    ];
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

