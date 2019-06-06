import { Component } from '@angular/core';

//Adding Decorator
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    title: string = "server component !!!";
    serverId:number = 12345;
    serverStatus:string = "Offline";
    
    getServerStatus(){
        return this.serverStatus;
    }
}