import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import DrowpdownTitles from '../../../core/constants/constants';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  drowpdownTitles: string[] = DrowpdownTitles;
}
