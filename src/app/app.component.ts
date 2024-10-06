import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Pedro';

  userData = {
    email: 'pedro@email.com',
    role: 'Admin',
  }

  title = 'curso-angular';
}
