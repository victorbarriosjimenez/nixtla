import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SupervisorsService } from '../supervisors.service';
import { Location } from '@angular/common';
import { Supervisor } from '../../models/user';
@Component({
  selector: 'app-supervisor-details',
  templateUrl: './supervisor-details.component.html',
  styleUrls: ['./supervisor-details.component.css']
})
export class SupervisorDetailsComponent implements OnInit {
  public supervisor: Supervisor
  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private _supervisorService: SupervisorsService) { }
  ngOnInit() {
    this.getSupervisor();
  }
  getSupervisor(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this._supervisorService.getSupervisor(uid)
      .subscribe(sup => this.supervisor = sup);
  }
}
