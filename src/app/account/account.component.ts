import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService ]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logService: LoggingService, private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logService.logStatusChanged(status);
    this.accountService.statusUpdated.emit(status);
  }

}
