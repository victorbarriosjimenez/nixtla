import { Component, OnInit } from '@angular/core';
import { Supervisor } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { SupervisorsService } from '../supervisors.service';
@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.css']
})
export class SupervisorsComponent implements OnInit {
  supervisors: Observable<Supervisor[]>;
  constructor(private _supervisorService: SupervisorsService) { }
  ngOnInit() {
    this.supervisors = this._supervisorService.supervisorsReference.valueChanges();
  }
}
