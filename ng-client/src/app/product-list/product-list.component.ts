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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  componentDestroyed$: Subject<boolean> = new Subject();

  dataSource: MatTableDataSource<any>;
  columns: any;
  records;
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
    this.route.params.subscribe(params => {
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
      case Roles.Distributor:
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
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.grapes[0].region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.grapes[0].vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.grapes[0].block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.grapes[0].rowRange}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.grapes[0].variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.grapes[0].vintage}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.grapes[0].estimatedWeight}` }
    ];
    if (this.authService.transaction) {
      this.columns.push({ columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.grapes[0].actualWeight}` });
    } else {
      this.columns.push({ columnDef: 'action', header: 'Action', cell: (row: Product) => 'Transfer' });
    }
  }

  populateWineryMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.grapes[0].variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.grapes[0].vintage}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.grapes[0].estimatedWeight}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.grapes[0].actualWeight ? row.grapes[0].actualWeight : ''}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.wineries && row.wineries.length && row.wineries[0].volume ? row.wineries[0].volume : ''}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => row.grapes[0].actualWeight && row.wineries && row.wineries.length && row.wineries[0].volume ? 'Transfer' : ''
      });
    }

  }

  populateBottlerMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.grapes[0].variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.grapes[0].vintage}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.wineries && row.wineries[0].volume}` },
      { columnDef: 'brand', header: 'Brand', cell: (row: Product) => `${row.wines && row.wines.length && row.wines[0].brand ? row.wines[0].brand : ''}` },
      { columnDef: 'label', header: 'Label', cell: (row: Product) => `${row.wines && row.wines.length && row.wines[0].label ? row.wines[0].label : ''}` },
      { columnDef: 'corkCap', header: 'Cork Cap', cell: (row: Product) => `${row.wines && row.wines.length && row.wines[0].corkCap ? row.wines[0].corkCap : ''}` },
      { columnDef: 'status', header: 'Status', cell: (row: Product) => `${row.wines && row.wines.length && row.wines[0].status ? row.wines[0].status : ''}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => row.grapes[0].actualWeight && row.wineries && row.wineries.length && row.wineries[0].volume ? 'Transfer' : ''
      });
    }
  }

  populateDriverMetaData() {
    this.columns = [
      // { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.grapes[0].region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.grapes[0].vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.grapes[0].block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.grapes[0].rowRange}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.grapes[0].estimatedWeight}` }
    ];
    if (!this.authService.transaction) {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => 'Transfer'
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
            .subscribe(res => console.log(res));
        }
      });

      $event.stopPropagation();
    }
    return;
  }

  get showAddButton() {
    return this.authService.isAuth(Roles.Grower) && !this.authService.transaction;
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
      case Roles.Distributor:
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
