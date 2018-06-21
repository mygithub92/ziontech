import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Product } from '../model/Product';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { AuthService } from '../services/auth.service';
import { HyperledgerService } from '../services/hyperledger.service';
import { Roles } from '../shared/Roles.enum';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DatePipe } from '@angular/common';
import { NoAuthError } from '../common/no-auth-error';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  datePipe: DatePipe = new DatePipe('en-AU');
  componentDestroyed$: Subject<boolean> = new Subject();

  dataSource: MatTableDataSource<any>;
  columns: any;
  records: Product[];
  currentRolename;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: HyperledgerService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  displayedColumns = [];

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.populateMetaData();
      this.service.getAllProducts(this.authService.transaction)
        .takeUntil(this.componentDestroyed$)
        .subscribe(response => {
          setTimeout(() => {
            this.currentRolename = this.authService.currentRoleName();
            this.records = response;
            this.dataSource = new MatTableDataSource(this.records);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
        }, err => {
          if (err instanceof NoAuthError) {
            this.router.navigate(['login']);
          }
        });
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  populateMetaData() {
    switch (this.authService.currentRole) {
      case Roles.Grower:
        this.populateGrowerMetaData();
        break;
      case Roles.Winery:
        this.populateWineryMetaData();
        break;
      case Roles.Bottler:
        this.populateBottlerMetaData();
        break;
      case Roles.Logistic:
        this.populateDriverMetaData();
        break;
      // default:
      //   this.populateGrowerMetaData();
    }
    /** Column definitions in order */
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  populateGrowerMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${Product.grapeValue(row, 'region')}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${Product.grapeValue(row, 'vineyard')}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${Product.grapeValue(row, 'block')}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${Product.grapeValue(row, 'rowRange')}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${Product.grapeValue(row, 'variety')}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${Product.grapeValue(row, 'vintage')}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${Product.grapeValue(row, 'estimatedWeight')}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${Product.grapeValue(row, 'actualWeight')}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({ columnDef: 'action', header: 'Action', cell: (row: Product) => 'Transfer' });
    }
  }

  populateWineryMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${Product.grapeValue(row, 'variety')}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${Product.grapeValue(row, 'vintage')}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${Product.grapeValue(row, 'estimatedWeight')}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${Product.grapeValue(row, 'actualWeight')}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${Product.wineryValue(row, 'volume')}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => Product.isValidWinery(row) ? 'Transfer' : ''
      });
    }

  }

  populateBottlerMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${Product.grapeValue(row, 'variety')}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${Product.grapeValue(row, 'vintage')}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${Product.wineryValue(row, 'volume')}` },
      { columnDef: 'brand', header: 'Brand', cell: (row: Product) => `${Product.wineValue(row, 'brand')}` },
      { columnDef: 'label', header: 'Label', cell: (row: Product) => `${Product.wineValue(row, 'label')}` },
      { columnDef: 'corkCap', header: 'Cork Cap', cell: (row: Product) => `${Product.wineValue(row, 'corkCap')}` },
      { columnDef: 'status', header: 'Status', cell: (row: Product) => `${Product.wineValue(row, 'status')}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => Product.isValidWine(row) ? 'Transfer' : ''
      });
    }
  }

  populateDriverMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${Product.grapeValue(row, 'region')}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${Product.grapeValue(row, 'vineyard')}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${Product.grapeValue(row, 'actualWeight')}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${Product.wineryValue(row, 'volume')}` },
      { columnDef: 'brand', header: 'Brand', cell: (row: Product) => `${Product.wineValue(row, 'brand')}` },
      { columnDef: 'from', header: 'From', cell: (row: Product) => `${Product.transportValue(row, 'from')}` },
      { columnDef: 'to', header: 'To', cell: (row: Product) => `${Product.transportValue(row, 'to')}` },
      { columnDef: 'start', header: 'Start', cell: (row: Product) => `${Product.transportValue(row, 'start', true)}` },
      { columnDef: 'end', header: 'End', cell: (row: Product) => `${Product.transportValue(row, 'end', true)}` },
      { columnDef: 'driverId', header: 'Driver Id', cell: (row: Product) => `${Product.transportValue(row, 'driverId')}` },
      { columnDef: 'plateNumber', header: 'Plate Number', cell: (row: Product) => `${Product.transportValue(row, 'plateNumber')}` },
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => Product.isValidTansport(row) ? 'Transfer' : ''
      });
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  transfer($event, row, cell) {
    if (cell.header === 'Action') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '550px',
        disableClose: true,
        data: row
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'yes') {
          this.records = this.records.filter(e => e.id !== row.id);
          this.dataSource = new MatTableDataSource(this.records);
          this.service.transportProduct(row.id)
            .subscribe(res => res);
        }
      });

      $event.stopPropagation();
    }
    return;
  }

  get showAddButton() {
    return this.authService.currentRole === Roles.Grower && !this.authService.transaction;
  }

  rowClick(row) {
    if (this.authService.transaction) {
      this.openQrDialog(row.id);
      return;
    }
    switch (this.authService.currentRole) {
      case Roles.Grower:
        this.router.navigateByUrl(`/home/grower/new/${row.id}`);
        break;
      case Roles.Winery:
        this.router.navigateByUrl(`/home/winery/product/${row.id}`);
        break;
      case Roles.Bottler:
        this.router.navigateByUrl(`/home/bottler/product/${row.id}`);
        break;
      case Roles.Logistic:
        this.router.navigateByUrl(`/home/driver/product/${row.id}`);
        break;
    }
  }

  openQrDialog(id) {
    this.dialog.open(QrDialogComponent, {
      data: {
        id
      }
    });
  }
}
