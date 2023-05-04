import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/user/selector';
import { updateBio, updateName } from 'src/app/store/user/actions';
import { show, close, setStatus } from 'src/app/store/flashcard/actions';

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
    if(this.bioInput && this.bioInput !== this.user.bio) {
      this.store.dispatch(show({
        subject: 'bio',
        status: 'PENDING',
      }));

      setTimeout(() => {
        this.store.dispatch(updateBio({bio: this.bioInput}));
        this.store.dispatch(setStatus({ status: 'SUCCESS' }));
      }, 1000);
    } else {
      this.bioInput = this.user.bio;
    }
  }

  onNameBlur() {
    if(this.nameInput && this.nameInput !== this.user.name) {
      this.store.dispatch(show({
        subject: 'name',
        status: 'PENDING',
      }));
      
      setTimeout(() => {
        this.store.dispatch(updateName({name: this.nameInput}));
        this.store.dispatch(setStatus({ status: 'SUCCESS' }));
      }, 1000);
    } else if(!this.nameInput) {
      this.nameInput = this.user.name;
    }
  }
    
  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);
    this.bioInput = this.user.bio;
    this.nameInput = this.user.name;
  }
}
