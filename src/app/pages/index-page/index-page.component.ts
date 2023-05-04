import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPostCard, IPostCardResult } from 'src/app/models/post';
import { IUser } from 'src/app/models/user';
import { IProduct } from 'src/app/models/product';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/user/selector';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  user!: IUser;
  postsHolder: IPostCard[] = [
    {
      id: 1,
      author: 'Asylniet J',
      title: 'Kefteme',
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
      id: 2,
      author: 'Asylniet Zhetpisbayev',
      title: 'Pelmeni',
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
    {
      id: 3,
      author: 'Asylniet Zhetpisbayev',
      title: 'Pelmeni',
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
    {
      id: 4,
      author: 'Asylniet Zhetpisbayev',
      title: 'Pelmeni',
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
  posts: IPostCardResult;

  products: IProduct[] = [
    {
      title: 'Milk',
      expiration_date: new Date(2023, 4, 2, 19),
      emoji: '🥛',
    },
    {
      title: 'Apple',
      expiration_date: new Date(2023, 7, 5),
      emoji: '🍎',
    },
    {
      title: 'Corn',
      expiration_date: new Date(2025, 1, 2),
      emoji: '🌽',
    },
  ]
  
  constructor(private store: Store<AppState>) {
    this.posts = {} as IPostCardResult;
    this.posts.status = 'PENDING';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.posts.status = 'SUCCESS';
      this.posts.postCards = this.postsHolder;
    }, 1000);
    this.store.select(selectUser).subscribe(user => this.user = user);
  }
}
