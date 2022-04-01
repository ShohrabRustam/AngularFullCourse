import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer: boolean = false;

  serverCreationStatus: string = "No Server was created ! ";

  serverCreated:boolean=false;

  server=['testServer 1 ','testServer 2','testServer 3 '];

  serverName: any = '';
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 5000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.server.push(this.serverName);
    this.serverCreationStatus = "Server was created!! Name is " +this.serverName ;
    this.serverCreated=true;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    // typecasting of the event
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
