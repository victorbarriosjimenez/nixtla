import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SupervisorsService } from '../supervisors.service';
import { Location } from '@angular/common';
import { Supervisor } from '../../models/user';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {
  CalendarEvent,
  CalendarViewPeriod,
  CalendarMonthViewBeforeRenderEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
import { Observable } from 'rxjs/Observable';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-supervisor-details',
  templateUrl: './supervisor-details.component.html',
  styleUrls: ['./supervisor-details.component.css']
})
export class SupervisorDetailsComponent implements OnInit {
  public supervisor: Supervisor;
  viewDate: Date = new Date(); 
  period: CalendarViewPeriod;  
  view: string = 'month';  
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date()
    }
  ]; 
  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private _supervisorService: SupervisorsService,
              private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.getSupervisor();
  }
  beforeViewRender(
    event:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ) {
    this.period = event.period;
    this.cdr.detectChanges();
  }
  public getSupervisor(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this._supervisorService.getSupervisor(uid)
      .subscribe(sup => this.supervisor = sup);
  }
}
