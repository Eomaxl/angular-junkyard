import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUSer} from './../../app/Interfaces/iuser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:IUser;
  users:Array<{id:number,name:string,username:string,email:string}>=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    }
    ,{
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    }
  ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params)=>{
    this.user = this.users.filter((user)=>{ return user.id === +params.id});
    
  });
  this.activatedRoute.queryParams.subscribe((qs)=> console.log('Got the QS as:',qs));
  }

}