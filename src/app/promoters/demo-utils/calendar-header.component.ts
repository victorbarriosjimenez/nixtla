import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mwl-demo-utils-calendar-header',
  template: `
    <div class="row text-center">
      <div class="col-md-4">
        <div class="button-row">
          <button
            mat-mini-fab
            matTooltip="Anterior"                                    
            color="primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            <mat-icon>keyboard_arrow_left</mat-icon>  
          </button>
          <button
            mat-mini-fab
            matTooltip="Hoy"                                    
            color="primary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            <mat-icon>today</mat-icon>  
          </button>
          <button
            mat-mini-fab
            color="primary"
            matTooltip="Siguiente"                                    
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            <mat-icon>keyboard_arrow_right</mat-icon>              
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>
      </div>
      <div class="col-md-4">
        <div class="button-row">
          <button
            mat-mini-fab
            matTooltip="Este Mes"           
            color="primary"
            (click)="viewChange.emit('month')"
            [class.active]="view === 'month'">
            <mat-icon>calendar_today</mat-icon>              
          </button>
          <button
             mat-mini-fab
            matTooltip="Esta Semana"                        
            color="primary"            
            (click)="viewChange.emit('week')"
            [class.active]="view === 'week'">
            <mat-icon>date_range</mat-icon>              
          </button>
          <button
            mat-mini-fab
            color="primary"  
            matTooltip="Este día"                                              
            (click)="viewChange.emit('day')"
            [class.active]="view === 'day'">
            <mat-icon>today</mat-icon>              
          </button>
        </div>
      </div>
    </div>
    <br>
  `,
  styles:[`
  .button-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }`]
})
export class CalendarHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}