import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }

}
