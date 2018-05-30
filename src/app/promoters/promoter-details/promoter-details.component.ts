import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PromotersService } from '../promoters.service';
import { Location } from '@angular/common';
import { Supervisor, Promoter } from '../../models/user';
import {
  CalendarEvent,
  CalendarViewPeriod,
  CalendarEventAction,
  CalendarMonthViewBeforeRenderEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns'
import { Observable } from 'rxjs/Observable';
import { BranchesService } from '../../branches/branches.service';
import { Branch } from '../../models/branch';
import { Event } from '../../models/event';
import { Workday } from '../../models/workday';
import * as moment from 'moment';
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
  selector: 'app-promoter-details',
  templateUrl: './promoter-details.component.html',
  styleUrls: ['./promoter-details.component.css']
})
export class PromoterDetailsComponent implements OnInit {
  public event: Event;
  public branches: Observable<Branch[]>;
  view: string = 'month';
  workdays;
  promoter: Promoter;
  viewDate: Date = new Date();
  public events: CalendarEvent[] = [ ];
  period: CalendarViewPeriod;
  activeDayIsOpen: boolean = false;
  constructor(private route: ActivatedRoute,
          private router: Router,
          private location: Location,
          private _promotersService: PromotersService,
          private _branchesService: BranchesService,
          private cdr: ChangeDetectorRef
          ) {}

  beforeViewRender(
    event:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ) {
    this.period = event.period;
    this.cdr.detectChanges();
  }
  ngOnInit() {
     this.getPromoter();
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  
  private getPromoter(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this._promotersService.getPromoter(uid)
      .subscribe(sup =>{ this.promoter = sup });
    this.getListOfCalendarEvents(uid);
  }
  public getListOfCalendarEvents(uid: string){
    this._promotersService.getPromoterWordkdays(uid)
        .subscribe(calendarEvents => {
            this.events = calendarEvents;
        })
  }
}       
