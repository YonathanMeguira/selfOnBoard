/**
 * Created by if_found_call_0586288454 on 08/06/2017 ap. J.-C..
 */

export class SeriesModel {
  name: string;
  value: number
}

export class GraphDataModel {
  name: string;
  series: Array<SeriesModel>;
  constructor(name: string){
    this.name = name;
  }
}
