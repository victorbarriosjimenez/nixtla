import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchesService } from '../branches.service';
@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  public branchForm: FormGroup;
  constructor(private _router: Router,
              private _branchesService: BranchesService,
              private _formBuilder) { }
  ngOnInit() { }
  public createBranch( ): void {

  }
  public createForm( ): void {
    this.branchForm =  this._formBuilder.group({
        nameFormControl:['', Validators.required],
        addressFormControl:['', Validators.required],        
      });
  }
}
