import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchesService } from '../branches.service';
import { Branch } from '../../models/branch';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branches:  Observable<Branch[]>;
  dataSource: any; 
  @ViewChild(MatSort) sort: MatSort;  
  displayedColumns = ['name','city','state','info'];  
  constructor(private _branchesService: BranchesService,
              private _router: Router) { }
  ngOnInit() {
    this._branchesService.branchesRef.valueChanges().subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data);
      })    
  }
  public applyFilter(filterValue: string){
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public getDetails(uid:string) { 
    this._router.navigate(['/branches', uid]);
  }
}
