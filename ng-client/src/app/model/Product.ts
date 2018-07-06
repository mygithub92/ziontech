import { DatePipe } from '@angular/common';


export class Product {
  id: number;
  companyName: string;
  grapes: Grape[];
  wineries: Winery[];
  wines: Wine[];
  stage: Stage[];
  transports: Transport[];


  public static grapeValue(product: Product, field: string): any {
    if (product.grapes && product.grapes.length) {
      return product.grapes[0][field] || '';
    }
    return '';
  }

  public static wineryValue(product: Product, field: string): any {
    if (product.wineries && product.wineries.length) {
      return product.wineries[0][field] || '';
    }
    return '';
  }

  public static wineValue(product: Product, field: string): any {
    if (product.wines && product.wines.length) {
      return product.wines[0][field] || '';
    }
    return '';
  }

  public static transportValue(product: Product, field: string, isDate: boolean = false): any {
    if (product.transports && product.transports.length) {
      const value = product.transports[0][field] || '';
      if (value && isDate) {
        return new DatePipe('en-AU').transform(value, 'd MMM yyyy');
      }
      return value;
    }
    return '';
  }

  public static isVaidGrape(product: Product): boolean {
    return product.companyName != null && product.grapes && product.grapes.length && Grape.isValid(product.grapes[0]);
  }

  public static isValidWinery(product: Product): boolean {
    return product.wineries && product.wineries.length && Winery.isValid(product.wineries[0]);
  }

  public static isValidWine(product: Product): boolean {
    return product.wines && product.wines.length && Wine.isValid(product.wines[0]);
  }

  public static isValidTansport(product: Product): boolean {
    return product.transports && product.transports.length && Transport.isValid(product.transports[0]);
  }
}

export class Grape {
  id: number;
  region: string;
  vineyard: string;
  block: string;
  rowRange: string;
  variety: string;
  vintage: string;
  bins: number;
  status: string;
  estimatedWeight: string;

  public static isValid(grape: Grape): boolean {
    return grape.region != null && grape.vineyard != null && grape.block != null
      && grape.rowRange != null && grape.variety != null && grape.vintage != null && grape.estimatedWeight != null;
  }
}

export class Winery {
  id: string;
  volume: number;
  status: string;
  actualWeight: string;

  public static isValid(winery: Winery): boolean {
    return winery.volume != null;
  }
}

export class Wine {
  id: number;
  brand: string;
  label: string;
  corkCap: string;
  status: string;
  boxes: number;

  public static isValid(wine: Wine): boolean {
    return wine.brand != null && wine.label != null && wine.corkCap != null && wine.status != null;
  }
}

export interface Stage {
  stageId: number;
  period: { start: string, end: string };
}

export class Transport {
  id: number;
  from: string;
  to: string;
  start: Date;
  end: Date;
  driverId: string;
  plateNumber: string;

  public static isValid(transport: Transport): boolean {
    return transport.driverId != null && transport.plateNumber != null;
  }
}
