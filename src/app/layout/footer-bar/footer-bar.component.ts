import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'app-footer-bar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule,MatDivider],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss',
  standalone:true
})
export class FooterBarComponent {
  currentYear = new Date().getFullYear();
}
