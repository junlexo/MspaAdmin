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
  fail_login: boolean = false;
  isDisconnect: boolean = false;
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
     // Actualiza la barra latera y el footer
    // AdminLogin.init();    
  }

  onSubmit(f) {               
    this._authService.signIn({username: f.value.username, password: f.value.password})
        .subscribe(
          data => {            
            var error_code = data.error;
            if(!error_code)
            {
              localStorage.setItem('token', data.token);
              localStorage.setItem('userId', data.userId);
              this.router.navigate(['/admin']);
            }
            else
            {
              this.fail_login = true;
            }
          },
          error => {
            this.isDisconnect = true;
            console.error(error);
          }
        );
	}
}
