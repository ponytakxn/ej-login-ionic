import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  userReceived: User | undefined

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
  }

  ngOnInit() {
  }

}
