import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {  PromotersService } from '../promoters.service';
import { Location } from '@angular/common';
import { Supervisor, Promoter } from '../../models/user';
import {
  CalendarEvent,
  CalendarViewPeriod,
  CalendarMonthViewBeforeRenderEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
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
  public promoter: Promoter; 
  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date()
    }
  ];
  period: CalendarViewPeriod;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private _promotersService: PromotersService,private cdr: ChangeDetectorRef) {}

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
  private getPromoter(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this._promotersService.getPromoter(uid)
      .subscribe(sup => this.promoter = sup);
  }
  
}       
