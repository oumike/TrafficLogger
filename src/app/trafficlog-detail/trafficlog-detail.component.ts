import { TrafficLog } from '../trafficlog';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-trafficlog-detail',
  templateUrl: './trafficlog-detail.component.html',
  styleUrls: ['./trafficlog-detail.component.css']
})
export class TrafficlogDetailComponent implements OnInit {

  @Input() trafficLog: TrafficLog

  constructor() { }

  ngOnInit(): void {
  }

}
