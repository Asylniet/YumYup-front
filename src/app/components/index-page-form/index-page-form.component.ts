import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/user/selector';
import { updateBio, updateName } from 'src/app/store/user/actions';

@Component({
  selector: 'index-page-form',
  templateUrl: './index-page-form.component.html',
  styleUrls: ['./index-page-form.component.scss']
})
export class IndexPageFormComponent implements OnInit {
  user!: IUser;
  bioInput: string;
  nameInput: string;
  
  constructor(private store: Store<AppState>) {
    this.bioInput = '';
    this.nameInput = '';
  }
  
  onBioBlur() {
   this.store.dispatch(updateBio({bio: this.bioInput}));
  }

  onNameBlur() {
    this.store.dispatch(updateName({name: this.nameInput}));
  }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);
    this.bioInput = this.user.bio;
    this.nameInput = this.user.name;
  }
}
