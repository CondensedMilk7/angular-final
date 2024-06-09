import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <div>
        <h1>SPORTS TODAY</h1>
        <i (click)="onShowMenu()" class="bi bi-list"></i>
      </div>
      <nav [class.show]="showMenu">
        <ul>
          <li><a routerLink="/home" (click)="onShowMenu()">News</a></li>
          <li class="sportsmenu" (click)="onShowDropDown()">
            Sports <i class="bi bi-chevron-down"></i>
            <ul class="dropdown" [class.show]="showDropDown">
              <li>Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Ice skating</li>
            </ul>
          </li>
          <li><a routerLink="/tickets" (click)="onShowMenu()">Tickets</a></li>
        </ul>
        <ul>
          <li>
            <a routerLink="/auth/sign-in" (click)="onShowMenu()">
              Sign in <i class="bi bi-box-arrow-in-right"></i
            ></a>
          </li>
          <li>
            <a routerLink="/auth/sign-up" (click)="onShowMenu()"
              >Sign up <i class="bi bi-person-circle"></i
            ></a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu: boolean = false;
  showDropDown: boolean = false;

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }

  onShowDropDown() {
    this.showDropDown = !this.showDropDown;
  }
}