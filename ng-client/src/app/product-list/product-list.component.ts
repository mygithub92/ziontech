import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HyperledgerService } from '../services/hyperledger.service.mock';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  componentDestroyed$: Subject<boolean> = new Subject();

  dataSource: MatTableDataSource<any>;
  columns: any;
  role: string;
  rowClickable = true;
  transaction = false;
  showAddButton = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: HyperledgerService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  displayedColumns = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.role = params['role'];
      this.populateMetaData();

      this.service.getHyperledgers()
        .takeUntil(this.componentDestroyed$)
        .subscribe(response => {
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

  ngOnDestroy() {
      this.componentDestroyed$.next(true);
      this.componentDestroyed$.complete();
  }

  populateMetaData() {
    switch (this.role) {
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
    if (this.role !== 'transaction') {
      this.columns.push({ columnDef: 'action', header: 'Action', cell: (row: Product) => 'Transfer' });
    }
    /** Column definitions in order */
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  populateGrowerMetaData() {
    this.rowClickable = false;
    this.transaction = false;
    this.showAddButton = true;
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
    this.transaction = false;
    this.showAddButton = false;
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
    this.transaction = false;
    this.showAddButton = false;
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
    this.transaction = true;
    this.showAddButton = false;
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

  cellClick($event, row, cell) {
    if (cell.header === 'Action') {
      this.openDialog(row);
      $event.stopPropagation();
    }
    return;
  }

  rowClick(row) {
    if (this.transaction) {
      this.openDialog(row.key);
      return;
    }
    if (this.rowClickable) {
      switch (this.role) {
        case 'winery':
          this.router.navigateByUrl(`/home/winery/product/${row.key}`);
          break;
        case 'bottler':
          this.router.navigateByUrl(`/home/bottler/product/${row.key}`);
          break;
    }
  }
}

  openDialog(data) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '550px',
      disableClose: true,
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.service.vineryUpdate(data);
      }
    });
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
