import { Component } from '@angular/core';
import { BoxerHttpService } from './services/http/boxer.http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly boxers$ = this.boxerHttpService.getAll();

  constructor(private boxerHttpService: BoxerHttpService) {}
}
