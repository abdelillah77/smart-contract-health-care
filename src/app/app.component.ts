//import { Component, OnInit } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';
import { EthcontractService } from './ethcontract.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log("ddddddd");

  }
  //title = 'app works!';
}
