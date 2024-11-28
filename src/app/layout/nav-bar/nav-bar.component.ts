import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-nav-bar',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, SideBarComponent],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    standalone: true,
})
export class NavBarComponent {

}
