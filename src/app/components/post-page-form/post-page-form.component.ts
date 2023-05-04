import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IPostCard } from 'src/app/models/post';
import { IUser } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { selectUser } from 'src/app/store/user/selector';

@Component({
  selector: 'app-post-page-form',
  templateUrl: './post-page-form.component.html',
  styleUrls: ['./post-page-form.component.scss']
})
export class PostPageFormComponent implements OnInit {
  files: File[] = [];
  post: IPostCard;
  maxLength: number = 1000;
  user!: IUser;

  form = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
  })

  constructor(private store: Store<AppState>) {
    this.post = {} as IPostCard;
  }

  onClick(): void {
    console.log("CLICKED");
  }

	onSelect(event: any): void {
    this.files.push(...event.addedFiles);
    this.updateImage();
	}
  
	onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
    this.updateImage();
	}

  private updateImage(): void {
    const reader = new FileReader();
    if(this.files.length > 0) {
      reader.readAsDataURL(this.files[0]);
      reader.onload = (_event) => {
        this.post.img = reader.result as string;
      }
    } else {
      this.post.img = '/assets/preview.png';
    }
  }
  
  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user = user);

    this.post = {
      author: this.user.name,
      date: new Date(),
      title: 'Title',
      rating: 0,
      comments: [],
      img: '/assets/preview.png',
    }
		
    this.form.valueChanges.subscribe((value) => {
      if(value.title) this.post.title = value.title
      else this.post.title = 'Title';
    });
  }
}
