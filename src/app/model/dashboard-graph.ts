

export class DashboardGraph{
  list : DashboardGraphKeyValuePair[];
}

export class DashboardGraphKeyValuePair{
  name: string;
  series : DashboardGraphValue;
}

export class DashboardGraphValue{
  name: string;
  value : string;
}

//
//
// multi: any =
//   [
//     {
//       'name': 'Clean Replica by CDR',
//       'series': [
//         {
//           'name': 'April',
//           'value': 41
//         },
//         {
//           'name': 'May',
//           'value': 54
//         },
//         {
//           'name': 'June',
//           'value': 60
//         }
//       ]
//     },
//     {
//       'name': 'Original Attachment OK',
//       'series': [
//         {
//           'name': 'April',
//           'value': 70
//         },
//         {
//           'name': 'May',
//           'value': 20
//         },
//         {
//           'name': 'June',
//           'value': 13
//         },
//       ]
//     },
//     {
//       'name': 'Attachment Blocked By CDR',
//       'series': [
//         {
//           'name': 'April',
//           'value': 30
//         },
//         {
//           'name': 'May',
//           'value': 45
//         },
//         {
//           'name': 'June',
//           'value': 90
//         },
//       ]
//     },
//     {
//       'name': 'Attachment Blocked By Antivirus',
//       'series': [
//         {
//           'name': 'April',
//           'value': 23
//         },
//         {
//           'name': 'May',
//           'value': 15
//         },
//         {
//           'name': 'June',
//           'value': 34
//         },
//       ]
//     }
//   ];
