enum Severity{
  High = 0,
  Highest = 1
}

export class Cdr {
  Documents: number;
  Images: number;
  Spreadsheets: number;
  Presentations: number;

  constructor(documents: number, images: number, spreadsheets: number, presentations: number) {
    this.Documents = documents;
    this.Images = images;
    this.Presentations = presentations;
    this.Spreadsheets = spreadsheets;
  }
}

export class
