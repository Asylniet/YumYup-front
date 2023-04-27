import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/models/post';
import { IUser } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/user/selector';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  user!: IUser;
  posts: IPost[] = [
    {
      author: 'Asylniet',
      name: 'Kefteme',
      date: new Date(),
      rating: 3,
      comments: [
        {
          author: 'Slavik',
          rating: 1,
          comment: 'BAD',
          date: new Date('yesterday'),
        }
      ],
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505',
    },
    {
      author: 'Asylniet',
      name: 'Pelmeni',
      date: new Date(),
      rating: 2,
      comments: [
        {
          author: 'Slavik',
          rating: 1,
          comment: 'BAD',
          date: new Date('yesterday'),
        },
        {
          author: 'Slavik',
          rating: 1,
          comment: 'BAD',
          date: new Date('yesterday'),
        },
        {
          author: 'Slavik',
          rating: 1,
          comment: 'BAD',
          date: new Date('yesterday'),
        }
      ],
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    },
  ]
  
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);
  }
}
