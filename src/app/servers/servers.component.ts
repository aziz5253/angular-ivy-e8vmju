import { Component } from '@angular/core';
@Component({
  //selector: '[app-servers]',
  //selector: '.app-severs',
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-client></app-client>
  `
})
export class ServersComponent {}
