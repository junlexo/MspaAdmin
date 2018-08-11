import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
// Variable in assets/js/scripts.js file
// declare var AdminLogin: any;

@Component({
  selector: 'app-starter',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AdminLoginComponent implements OnInit {
	authenticated: boolean = false;
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
     // Actualiza la barra latera y el footer
    // AdminLogin.init();    
    if(localStorage.getItem('token'))
    {
      this.router.navigate(['/admin']);
    }
  }
  onSubmit(f) {               
    this._authService.signIn({username: f.value.username, password: f.value.password})
        .subscribe(
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigate(['/admin']);
          },
          error => {
            console.error(error);
          }
        );
	}
}
