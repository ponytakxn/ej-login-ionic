import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {

  userReceived: User | undefined

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
  }

  ngOnInit() {
  }

}
