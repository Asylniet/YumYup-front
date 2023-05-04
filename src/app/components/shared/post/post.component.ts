import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPostCard } from 'src/app/models/post';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {
  @Input() post: IPostCard;

  constructor(private store: Store<AppState>) {
    this.post = {} as IPostCard;
  }
}
