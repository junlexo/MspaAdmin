import {Component, OnInit} from '@angular/core'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-starter',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListUserComponent {
	title: string = 'List User';
	users = [];
	constructor(private router: Router, private _authService: AuthService ) {

	}	
	removeUser(username){		
		this._authService.removeUser(username).subscribe(json => {
				if(json.remove)
					this.loadList();
		});;
	}
	ngOnInit(){
		this.loadList();
	}
	loadList(){
		this._authService.getUser()
			.subscribe(json => {
				this.users = json.users;
		});
	}
}
