import { Component, OnInit, ViewChild } from '@angular/core';
import { Promoter } from '../../models/user';
import { PromotersService } from '../promoters.service';
import { Supervisor } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.css']
})
export class PromoterComponent implements OnInit {
  dataSource: any;  
  public displayedColumns = ['name','city','state','status','info'];  
  @ViewChild(MatSort) sort: MatSort;  
  constructor(private _promotersService: PromotersService,
              private _router: Router) { }
  ngOnInit() {
    this._promotersService.promotersReference.valueChanges()
        .subscribe(
          data => {
              this.dataSource = new MatTableDataSource(data);
          });  
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public getDetails(uid:string) { 
    this._router.navigate(['/promoters', uid]);
  }
}
