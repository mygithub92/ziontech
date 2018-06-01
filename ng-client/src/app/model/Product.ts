

export interface Product {
  _id: string;
  companyName: string;
  region: string;
  vineyard: string;
  block: string;
  rowRange: string;
  variety: string;
  vintage: string;
  dateDelivered: string;
  winery: Winery;
  estimatedWeight: string;
  actualWeight: string;
  volume: string;
  bottlingCompany: string;
  brand: string;
  label: string;
  corkCap: string;
  seller: string;
  status: string;
  stage: Stage[];
}

export interface Winery {
  _id: string;
  volume: number;
  bottler: string;
}

export interface Stage {
  stageId: number;
  period: { start: string, end: string};
}
