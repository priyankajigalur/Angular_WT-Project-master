import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `<app-nav></app-nav>

      <router-outlet></router-outlet>`
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WT-Project';

}
