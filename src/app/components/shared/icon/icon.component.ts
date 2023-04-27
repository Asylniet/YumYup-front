import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { icons } from 'src/assets/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit {
  @Input() icon: string;

  constructor() {
    this.icon = '';
  }
  
  ngOnInit(): void {
    this.icon = icons.find((icon) => icon.name === this.icon)?.icon!;
  }
}
