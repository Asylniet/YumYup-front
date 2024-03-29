import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserName } from 'src/app/store/user/selector';

import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() width: string = '2';
  @Input() fz: string = '1';
  @Input() name: string = '';

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    if(!this.name) {
      this.store.select(selectUserName).subscribe(name => this.name = name);
    }
  }
}
