import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PromotersService } from '../promoters.service';
import { Location } from '@angular/common';
import { Supervisor, Promoter } from '../../models/user';
import {
  CalendarEvent,
  CalendarViewPeriod,
  CalendarMonthViewBeforeRenderEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarDayViewBeforeRenderEvent
} from 'angular-calendar';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BranchesService } from '../../branches/branches.service';
import { Branch } from '../../models/branch';
import { Event } from '../../models/event';
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
  public eventForm: FormGroup;
  public event: Event;
  public openSchedules = [
    { sched: '9:00 AM', valueTime: '9:00:00' },
    { sched: '10:00 AM', valueTime: '10:00:00' },
    { sched: '11:00 AM', valueTime: '11:00:00'},       
    { sched: '12:00 AM', valueTime: '12:00:00' }
  ];
  public closingSchedules = [
    { sched: '4:00 PM', valueTime: '16:00:00'},
    { sched: '5:00 PM', valueTime: '17:00:00'},
    { sched: '6:00 PM', valueTime: '18:00:00'},
    { sched: '7:00 PM', valueTime: '19:00:00'},
    { sched: '8:00 PM', valueTime: '20:00:00'},
    { sched: '9:00 PM', valueTime: '21:00:00'}            
  ];
  public promoter: Promoter; 
  public branches: Observable<Branch[]>;
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
          private _promotersService: PromotersService,
          private _branchesService: BranchesService,
          private cdr: ChangeDetectorRef,
          private _formBuilder:  FormBuilder) {}

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
     this.createForm();
     this.getListOfBranches();
  }
  private getPromoter(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this._promotersService.getPromoter(uid)
      .subscribe(sup => this.promoter = sup);
  }
  public createForm( ): void {
      this.eventForm = this._formBuilder.group({
          branchFormControl: ['', Validators.required],
          eventDateBeginFormControl: ['',Validators.required],
          eventDateExpFormControl: ['',Validators.required],
          hourWorkdayBeginFormControl: ['',Validators.required],
          hourWorkdayEndFormControl: ['',Validators.required],
          salaryFormControl: ['',Validators.required],
          salaryTypeFormControl: ['',Validators.required],
          extraHoursSalaryFormControl: ['',Validators.required]                                        
      })
  }
  public getListOfBranches( ): void{
    this.branches = this._branchesService.branchesRef.valueChanges();
  }
  public setNewPromoterEvent(): void {
    const eventModelForm = this.eventForm.value;
    this.event = {
        branch: eventModelForm.branchFormControl as string,
        eventDateBegin: eventModelForm.eventDateBeginFormControl as Date,
        eventDateExp: eventModelForm.eventDateExpFormControl as Date,
        hourWorkdayBegin: eventModelForm.hourWorkdayBeginFormControl as string,
        hourWorkdayEnd: eventModelForm.hourWorkdayEndFormControl as string,
        salary: eventModelForm.salaryFormControl as number,
        salaryType: eventModelForm.salaryTypeFormControl as string,
        extraHoursSalary: eventModelForm. extraHoursSalaryFormControl as number,
        promoter: this.promoter.uid,
    }
    this._promotersService.setNewEvent(this.event, this.promoter);
  }
}       
