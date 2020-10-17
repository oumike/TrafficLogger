import { Injectable } from '@angular/core';
import { TrafficLog } from './trafficlog'
import { TRAFFICLOGS } from './mock-trafficlogs'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TrafficlogService {

  constructor(private messageService: MessageService) { }

  getTrafficLogs(): Observable<TrafficLog[]> {
    this.messageService.add('TrafficLogService: fetched logs')
    return of(TRAFFICLOGS)
  }

}
