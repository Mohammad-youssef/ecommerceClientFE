import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-side-bar',
  imports: [MatListModule,MatSidenav,MatSidenavContainer,MatSidenavContent,MatIcon],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  standalone:true
})
export class SideBarComponent {
  isVisible = true; // Controls the visibility of the sidebar

  filters = [
    'Customer Reviews',
    'Price',
    'Brand',
    'Category',
    'Shipping Options',
    'Availability',
  ];

  toggleSidenav(sidenav: any): void {
    this.isVisible = !this.isVisible;
    sidenav.toggle();
  }
}
