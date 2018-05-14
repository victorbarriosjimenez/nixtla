import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../branches.service';
import { Branch } from '../../models/branch';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branches:  Observable<Branch[]>;
  constructor(private _branchesService: BranchesService) { }
  ngOnInit() {
    this.branches = this._branchesService.branchesRef.valueChanges();
  }
}
