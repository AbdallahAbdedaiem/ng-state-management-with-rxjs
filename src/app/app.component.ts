import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserHttpService } from './services/http/user.http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly users$ = this.userHttpService.getAll();

  constructor(private userHttpService: UserHttpService) {
      return
  }
}
