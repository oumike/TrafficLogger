import { Component, OnInit } from '@angular/core';
import { TrafficLog } from '../trafficlog'
import { TrafficlogService } from '../trafficlog.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-trafficlogs',
  templateUrl: './trafficlogs.component.html',
  styleUrls: ['./trafficlogs.component.css']
})
export class TrafficlogsComponent implements OnInit {

  trafficLogs: TrafficLog[]
  selectedTrafficLog: TrafficLog

  constructor(private trafficLogService: TrafficlogService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTrafficLogs()
  }

  onSelect(trafficLog: TrafficLog): void {
    this.selectedTrafficLog = trafficLog
    this.messageService.add('TrafficLogComponent: Selected log id=' + trafficLog.id)
  }

  getTrafficLogs(): void {
    this.trafficLogService.getTrafficLogs ()
      .subscribe(trafficLogs => this.trafficLogs = trafficLogs)
  }

}
