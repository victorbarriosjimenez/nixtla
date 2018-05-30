import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BranchesService, dayOff } from '../branches.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branch } from '../../models/branch';
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  branch: any; 
  dayOfFormModel;
  daysOff: dayOff[];
  branchDayOffForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _fb: FormBuilder,
              private _branchesService: BranchesService) { 
  }
  ngOnInit() {
    this.getSupervisorDetails();
    this.createForm();
  }
  public getSupervisorDetails(){
    const uid = this.route.snapshot.paramMap.get('uid');
    this._branchesService.getBranch(uid)
      .subscribe(sup =>{ 
        this.branch = sup
        this.getDaysOff(this.branch.uid);
      });
  }
  public createForm(){
    this.branchDayOffForm = this._fb.group({
      dayOffDateFormControl: ['', Validators.required]
    }) 
  }
  public addNewDayOf() {
    const dayOffModelForm = this.branchDayOffForm.value;
    const dayOffModel = {
      branchUid: this.branch.uid,
      dayOffDate: dayOffModelForm.dayOffDateFormControl
    }
    this._branchesService.setNewDayOff(dayOffModel);
  }
  public getDaysOff(uid: string){
    this._branchesService.getListOfDaysOff(uid)
        .subscribe(days => {
            this.daysOff = days
        });
  }
  public deleteDayOff(dayOff: dayOff) {
    this._branchesService.deleteDayOffFromList(dayOff);
  }
}
