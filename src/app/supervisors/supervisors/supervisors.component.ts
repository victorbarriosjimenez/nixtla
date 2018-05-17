import { Component, OnInit, ViewChild } from '@angular/core';
import { Supervisor } from '../../models/user';
import { SupervisorsService } from '../supervisors.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import { Router } from '@angular/router';
import { NGSP_UNICODE } from '@angular/compiler';
@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.css']
})
export class SupervisorsComponent implements OnInit {
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['name','city','state','info','status','schedule'];
  constructor(private _supervisorService: SupervisorsService, private _router: Router) { }
  ngOnInit() {
    this._supervisorService.supervisorsReference.valueChanges()
        .subscribe(
          data => {
              this.dataSource = new MatTableDataSource(data);
          })      
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public getDetails(uid:string) { 
    this._router.navigate(['/supervisors', uid]);
  }
}
