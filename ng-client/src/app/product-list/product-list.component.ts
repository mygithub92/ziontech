import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AbstractHyperledgerService } from '../services/hyperledger.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { QrDialogComponent } from '../qr-dialog/qr-dialog.component';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { HyperledgerServiceProvider } from '../services/hyperledger.service.provider';
import { Product } from '../model/Product';
import { AbstractAuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [HyperledgerServiceProvider]
})
export class ProductListComponent implements OnInit, OnDestroy {

  componentDestroyed$: Subject<boolean> = new Subject();

  dataSource: MatTableDataSource<any>;
  columns: any;
  action: string;
  records;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: AbstractHyperledgerService,
    private router: Router,
    private authService: AbstractAuthService,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  displayedColumns = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.populateMetaData();
      console.log(this.action);
      this.service.getAllProducts(this.action === 'transaction')
        .takeUntil(this.componentDestroyed$)
        .subscribe(response => {
          setTimeout(() => {
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
    switch (this.authService.currentUser.role) {
      case 'grower':
        this.populateGrowerMetaData();
        break;
      case 'winery':
        this.populateWineryMetaData();
        break;
      case 'bottler':
        this.populateBottlerMetaData();
        break;
      case 'driver1':
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
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.rowRange}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.estimatedWeight}` }
    ];
    if (this.action === 'transaction') {
      this.columns.push({ columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.actualWeight}` });
    } else {
      this.columns.push({ columnDef: 'action', header: 'Action', cell: (row: Product) => 'Transfer' });
    }
  }

  populateWineryMetaData() {
    this.columns = [
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'variety', header: 'Variety', cell: (row: Product) => `${row.variety}` },
      { columnDef: 'vintage', header: 'Vintage', cell: (row: Product) => `${row.vintage}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.estimatedWeight}` },
      { columnDef: 'actualWeight', header: 'Actual Weight', cell: (row: Product) => `${row.actualWeight ? row.actualWeight : ''}` },
      { columnDef: 'volume', header: 'Volume', cell: (row: Product) => `${row.winery && row.winery.volume ? row.winery.volume : ''}` },
      { columnDef: 'bottler', header: 'Bottler', cell: (row: Product) => `${row.winery && row.winery.bottler ? row.winery.bottler : ''}` }
    ];
    if (this.action !== 'transaction') {
      this.columns.push({
        columnDef: 'action',
        header: 'Action',
        cell: (row: Product) => row.actualWeight && row.winery && row.winery.volume ? 'Transfer' : ''});
    }

  }

  populateBottlerMetaData() {
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

  populateDriverMetaData() {
    this.columns = [
      { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
      { columnDef: 'companyName', header: 'Company Name', cell: (row: Product) => `${row.companyName}` },
      { columnDef: 'region', header: 'Region', cell: (row: Product) => `${row.region}` },
      { columnDef: 'vineyard', header: 'Vineyard', cell: (row: Product) => `${row.vineyard}` },
      { columnDef: 'block', header: 'Block', cell: (row: Product) => `${row.block}` },
      { columnDef: 'rowRange', header: 'Row Range', cell: (row: Product) => `${row.rowRange}` },
      { columnDef: 'winery', header: 'Winery', cell: (row: Product) => `${row.winery}` },
      { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: (row: Product) => `${row.estimatedWeight}` }
    ];
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  cellClick($event, row, cell) {
    if (cell.header === 'Action') {
      this.openConfirmDialog(row);
      $event.stopPropagation();
    }
    return;
  }

  get showAddButton() {
    return this.authService.currentUser.role === 'grower' && this.action !== 'transaction';
  }
  rowClick(row) {
    if (this.action === 'transaction') {
      this.openQrDialog(row._id);
      return;
    }
    switch (this.authService.currentUser.role) {
      case 'grower':
        this.router.navigateByUrl(`/home/grower/new/${row._id}`);
        break;
      case 'winery':
        this.router.navigateByUrl(`/home/winery/product/${row._id}`);
        break;
      case 'bottler':
        this.router.navigateByUrl(`/home/bottler/product/${row._id}`);
        break;
      case 'driver1':
        this.router.navigateByUrl(`/home/driver/product/${row._id}`);
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

  openConfirmDialog(data) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '550px',
      disableClose: true,
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.records = this.records.filter(e => e._id !== data._id);
        this.dataSource = new MatTableDataSource(this.records);
        this.service.addOrUpdateProduct({_id: data._id, transferred: true})
        .subscribe(res => console.log(res));
      }
    });
  }
}
