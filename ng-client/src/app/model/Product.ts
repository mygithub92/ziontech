

export interface Product {
  id: string;
  companyName: string;
  grapes: Grape[];
  wineries: Winery[];
  wines: Wine[];
  stage: Stage[];
}

export interface Grape {
  id: number;
  region: string;
  vineyard: string;
  block: string;
  rowRange: string;
  variety: string;
  vintage: string;
  winery: Winery;
  estimatedWeight: string;
  actualWeight: string;
}

export interface Winery {
  id: string;
  volume: number;
}

export interface Wine {
  id: number;
  brand: string;
  label: string;
  corkCap: string;
  status: string;
}

export interface Stage {
  stageId: number;
  period: { start: string, end: string};
}
