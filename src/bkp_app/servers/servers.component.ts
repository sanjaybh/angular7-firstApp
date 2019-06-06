import { Component, OnInit } from '@angular/core';

@Component({
  selector: ".app-servers",
  //element selector = app-servers
  //attribute selector = [app-server]
  //class selector = .app-server

  templateUrl: "./servers.component.html",
  /*
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  */

  styleUrls: ["./servers.component.css"]

  /*
  styles: [
    `
      h3 {
        color: darkblue;
      }
    `
  ] //color:dodgerblue
  */
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server available";
  serverName = "Test Server";
  serverVarCreated: boolean = false;
  username = "";
  serverId = 1234;

  serverCreated = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverCreated = Math.random() > 0.5 ? "online" : "offline";
  }

  onCreateServer() {
    this.serverVarCreated = true;
    this.serverCreationStatus =
      "Server was created and the server name is [" + this.serverName + "]";
  }

  getServerStatus() {
    return this.serverCreated;
  }

  //Not getting used, commited in html
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverCreated === 'online' ? 'green' : 'red';
  }

  ngOnInit() {}
}
