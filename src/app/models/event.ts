export class Event { 
    uid?: string;
    branch: string;
    promoter?: string;
    eventDateBegin: Date;
    eventDateExp: Date;
    hourWorkdayBegin: string;
    hourWorkdayEnd: string;
    salary: number;
    salaryType: string;
    extraHoursSalary: number;
}