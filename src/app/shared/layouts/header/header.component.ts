import { Component } from '@angular/core';
import { LeftMenuComponent } from '../../components/left-menu/left-menu.component';
import { RightMenuComponent } from '../../components/right-menu/right-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftMenuComponent, RightMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
