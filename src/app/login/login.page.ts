import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User, UserType } from '../models/user.model';
import { mockedUserDB } from '../db/mockUser.data';
import { NavigationExtras, Router } from '@angular/router';

interface LoginInput {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  loginInput: LoginInput = {
    username: '',
    password: ''
  }

  userList: User[] = mockedUserDB

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginRestart();
  }

  loginRestart(): void {
    this.loginInput.username = '';
    this.loginInput.password = '';
  }

  userLogin(userInfo: LoginInput): void {
    if (userInfo.username && userInfo.password) {
      const userLogged: User | undefined = this.userList.find(
        (user) => user.username === userInfo.username && user.password === userInfo.password
      )

      if (userLogged) {
        this.userAuthorize(userLogged)
      }
    }
  }

  userAuthorize(user: User) {
    const userState: NavigationExtras = {
      state: {
        user
      }
    }

    return user.user_type === UserType.ADMIN
      ? this.router.navigate(['/admin'], userState)
      : this.router.navigate(['/user'], userState);
  }
}
