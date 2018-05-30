import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BranchesService } from '../branches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branch } from '../../models/branch';
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  branch: any; 
  branchDayOffForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _fb: FormBuilder,
              private _branchesService: BranchesService) { 
  }
  ngOnInit() {
    this.getSupervisorDetails();
  }
  public getSupervisorDetails(){
    const uid = this.route.snapshot.paramMap.get('uid');
    this._branchesService.getBranch(uid)
      .subscribe(sup => this.branch = sup);
  }
  public createForm(){
    this.branchDayOffForm = this._fb.group({
      dayOffDate: ['', Validators.required]
    }); 
  }
}
