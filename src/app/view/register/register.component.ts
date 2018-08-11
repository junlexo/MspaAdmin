import {Component, OnInit} from '@angular/core'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],	
})
export class AdminRegisterComponent {
	title: string = 'Register';
	saveSuccess: boolean;
	constructor(private router: Router, private _authService: AuthService ) {

	}
	onSubmit(f) {		
		this._authService.register({username: f.value.username, email: f.value.email, password: f.value.password})
				.subscribe(
					data => {
						if(data)
							this.saveSuccess = true;
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
