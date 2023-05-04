import { Component, OnInit } from '@angular/core';
import { IPostCard, IPostCardResult } from 'src/app/models/post';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {
  posts: IPostCardResult;
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

  constructor() {
    this.posts = {} as IPostCardResult;
    this.posts.status = 'PENDING';
  }

  ngOnInit(): void {
    this.posts.postCards = this.postsHolder;
    setTimeout(() => {
      this.posts.status = 'SUCCESS';
    }, 1000)
  }
}
