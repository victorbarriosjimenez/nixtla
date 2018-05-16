import { Component, OnInit } from '@angular/core';
import { Promoter } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { PromotersService } from '../promoters.service';
@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.css']
})
export class PromoterComponent implements OnInit {
  promoters: Observable<Promoter[]>;  
  constructor(private _promotersService: PromotersService) { }
  ngOnInit() {
    this.promoters = this._promotersService.promotersReference.valueChanges();   
  }
}
