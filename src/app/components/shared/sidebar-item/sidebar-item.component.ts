import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})

export class SidebarItemComponent {
  @Input() title!: string;
  @Input() location!: string;
  @Input() icon: string;


  constructor() {
    this.icon = '';
  }
}
