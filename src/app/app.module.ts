import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import servercompont in AppModule
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
