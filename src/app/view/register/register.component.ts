import {Component, OnInit} from '@angular/core'
import 'rxjs/add/operator/map';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';
var _that = null;
@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],	
})
export class AdminRegisterComponent {
	title: string = 'Register';
	saveSuccess: boolean;
	error: number;		
	constructor(private router: Router, private _authService: AuthService ) {
		this.error = 0;
		_that = this;
	}
	onSubmit(f) {		
		this._authService.register({username: f.value.username, email: f.value.email, password: f.value.password})
				.subscribe(
					data => {
						this.error = data.error;
						if(!data.error)	
						{					
							this.saveSuccess = true;
							setTimeout(function(){
								_that.router.navigate(['/login']);
							},1000);
						}
						else
							this.saveSuccess = false;
					},
					error => {
						console.error(error);
					}
				);
	}
	ngOnInit(){
	}
}
