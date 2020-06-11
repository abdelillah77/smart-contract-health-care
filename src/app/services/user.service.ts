import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from "../models/User";
import { EthcontractService } from '.././ethcontract.service';
@Injectable()
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {

    this.users = [
      {
        prenomPersonnel: 'John',
        nomPersonnel: 'Doe',
        age: 30,
        mailPersonnel: 'aaaa@yahoo.com ',
        //image:'http://lorempixel.com/600/600/people/3',
        isActive: true,
        registered: new Date('11/02/1998 10:30'),
        hide: true


      },

      {
        prenomPersonnel: 'abdelillah',
        nomPersonnel: 'Guermouche',
        age: 22,
        mailPersonnel: 'aaaazzzz@yahoo.com ',
        //image:'http://lorempixel.com/600/600/people/2',
        isActive: false,
        registered: new Date('02/05/1998 10:30'),
        hide: true

      },

      {
        prenomPersonnel: 'Eden',
        nomPersonnel: 'Hazard',
        age: 11,
        mailPersonnel: 'aaaarrrr@yahoo.com ',
        //image:'https:/&psig=AOvVaw1NvdzwWomqkCRkub_yDKx&ust=1582126002532000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLChy_m02-cCFQAAAAAdAAAAABAD'
        registered: new Date('04/05/1998 10:30'),
        hide: true
      }

    ];


  }
  getUsers(): Observable<User[]> {

    return of(this.users);

  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'brad' });
      }, 4000);



    });

    return this.data;

  }


}

