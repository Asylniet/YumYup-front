import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFlashcard } from 'src/app/models/flashcard';
import { AppState } from 'src/app/store/app.state';
import { selectFlashcard } from 'src/app/store/flashcard/selector';
import { close } from 'src/app/store/flashcard/actions';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
  flashcard: IFlashcard;
  show: boolean = false;
  constructor(private store: Store<AppState>) {
    this.flashcard = {
      status: "IDLE",
      subject: "",
    }
  }

  ngOnInit(): void {
    this.store.select(selectFlashcard).subscribe(flashcard => {
      this.flashcard = flashcard;
      if(flashcard.status !== 'IDLE') this.show = true;
      
      if(flashcard.status === 'SUCCESS') {
        setTimeout(() => {
          this.show = false;
          setTimeout(() => {
            this.store.dispatch(close());
          }, 400);
        }, 2000);
      }
    });
  }
}
