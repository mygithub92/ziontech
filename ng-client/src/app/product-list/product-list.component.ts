import { Component, OnInit, ViewChild } from '@angular/core';
import { HyperledgerService } from '../services/hyperledger.service';
import { HyperledgerMockService } from '../services/hyperledger.mock.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  columns: any;
  rowClickable = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: HyperledgerMockService, private router: Router, private route: ActivatedRoute) { }

  displayedColumns = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const role = params['role'];
      this.populateMetaData(role);

      this.service.getHyperledgers().subscribe(response => {
        setTimeout(() => {
          const result = response.map(record => {
            return {
              key: record['Key'],
              ...record['Record']
            };
          });
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
    });
  }

  populateMetaData(role: string) {
    console.log(role);
    switch (role) {
      case 'grower':
        this.populateGrowerMetaData();
        break;
      case 'winery':
        this.populateWineryMetaData();
        break;
      case 'bottler':
        this.populateBottlerMetaData();
        break;
      case 'transaction':
        this.populateTransactionMetaData();
        break;
      // default:
      //   this.populateGrowerMetaData();
    }

    /** Column definitions in order */
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  populateGrowerMetaData() {
    this.rowClickable = false;
    this.columns = [
      { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.rowRange}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'dateDelivered', header: 'Date Delivered', cell: (row: Product) => `${row.dateDelivered}` },
      { columnDef: 'vinery', header: 'Vinery', cell: (row: Product) => `${row.vinery}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.estimatedWeight}` }
    ];
  }

  populateWineryMetaData() {
    this.rowClickable = true;
    this.columns = [
      { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'dateDelivered', header: 'Date Delivered', cell: (row: Product) => `${row.dateDelivered}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.estimatedWeight}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.actualWeight}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.volume}` },
      { columnDef: 'bottlingCompany', header: 'Bottling Company', cell: (row: Product) => `${row.bottlingCompany}` }
    ];
  }

  populateBottlerMetaData() {
    this.rowClickable = true;
    this.columns = [
      { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.volume}` },
      { columnDef: 'brand', header: 'Brand', cell: (row: Product) => `${row.brand}` },
      { columnDef: 'label', header: 'Label', cell: (row: Product) => `${row.label}` },
      { columnDef: 'corkCap', header: 'Cork Cap', cell: (row: Product) => `${row.corkCap}` },
      { columnDef: 'seller', header: 'Seller', cell: (row: Product) => `${row.seller}` },
      { columnDef: 'status', header: 'Status', cell: (row: Product) => `${row.status}` }
    ];
  }

  populateTransactionMetaData() {
    this.rowClickable = true;
    this.columns = [
      { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.rowRange}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'dateDelivered', header: 'Date Delivered', cell: (row: Product) => `${row.dateDelivered}` },
      { columnDef: 'vinery', header: 'Vinery', cell: (row: Product) => `${row.vinery}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.actualWeight}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.volume}` },
      { columnDef: 'bottlingCompany', header: 'Bottling Company', cell: (row: Product) => `${row.bottlingCompany}` },
      { columnDef: 'brand', header: 'Brand', cell: (row: Product) => `${row.brand}` },
      { columnDef: 'label', header: 'Label', cell: (row: Product) => `${row.label}` },
      { columnDef: 'corkCap', header: 'Cork Cap', cell: (row: Product) => `${row.corkCap}` },
      { columnDef: 'seller', header: 'Seller', cell: (row: Product) => `${row.seller}` },
      { columnDef: 'status', header: 'Status', cell: (row: Product) => `${row.status}` }
    ];
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  navigateTo(row) {
    if (this.rowClickable) {
      this.router.navigateByUrl('/grower/new');
    }
  }
}


export interface Product {
  key: string;
  companyName: string;
  region: string;
  vineyard: string;
  block: string;
  rowRange: string;
  variety: string;
  vintage: string;
  dateDelivered: string;
  vinery: string;
  estimatedWeight: string;
  actualWeight: string;
  volume: string;
  bottlingCompany: string;
  brand: string;
  label: string;
  corkCap: string;
  seller: string;
  status: string;
}
