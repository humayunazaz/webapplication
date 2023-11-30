import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}
  userName: string = '';
  public showhamburgermenu: boolean = false;

  ngOnInit(): void {
    if (this.sessionService.getUserName()) {
      this.userName = this.sessionService.getUserName();
    }
  }

  public togglehamburgermenu(): void {
    this.showhamburgermenu = !this.showhamburgermenu;
  }

  public logoutHandler(): void {
    this.sessionService.signOutHandler();
    this.router.navigate(['/signin']);
  }
}
