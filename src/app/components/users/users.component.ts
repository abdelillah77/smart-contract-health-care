import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ThrowStmt } from '@angular/compiler';
import { EthcontractService } from '../../ethcontract.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    prenomPersonnel: '',
    nomPersonnel: '',
    age: null,
    mailPersonnel: ''


  };

  users: User[];
  enableAdd: boolean = true;
  showExtended: boolean = true;
  currentClasses = {};
  showUserForm: boolean = false;
  ramos: boolean = false;
  //@ViewChild("userForm") form: any ;
  data: any;

  constructor(private userService: UserService, private ethcontractService: EthcontractService) { }

  ngOnInit() {


    console.log("1111111");
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.showExtended = true;


    /* this.addUser({
   
             firstName : 'moahmed',
             lastName : '6',
              age : 11,
              registered : new Date('01/02/1998 10:30'),
              hide:true
   
     });
     */
    this.SetCurrentClasess();

  }
  /*
  addUser(user:User){
    this.user.isActive = true ;
    this.user.registered  = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName : '' ,
     lastName: '',
     age: null ,
     email:''
    }
  }
  */
  SetCurrentClasess() {
    this.currentClasses = {
      'big-text': this.showExtended,
      'btn-link ': this.enableAdd
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);


  }

  toggleHide(user: User) {
    user.hide = !user.hide
  }
  OnSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form 3ayana')

    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      //this.form.reset();
    }
  }



}
