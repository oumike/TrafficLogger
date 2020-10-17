import { Component, OnInit } from '@angular/core';
import { TrafficLog } from '../trafficlog'
import { TRAFFICLOGS } from '../mock-trafficlogs'

@Component({
  selector: 'app-trafficlogs',
  templateUrl: './trafficlogs.component.html',
  styleUrls: ['./trafficlogs.component.css']
})
export class TrafficlogsComponent implements OnInit {

  trafficLogs = TRAFFICLOGS

  constructor() { }

  ngOnInit(): void {
  }

}
