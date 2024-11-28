import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';

@Component({
    selector: 'app-root',
    imports: [ RouterOutlet, NavBarComponent ,FooterBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
})
export class AppComponent {
  title = 'Ecommerce Site';
 
}
