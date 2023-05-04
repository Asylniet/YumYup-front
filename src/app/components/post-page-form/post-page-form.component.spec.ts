import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPageFormComponent } from './post-page-form.component';

describe('PostPageFormComponent', () => {
  let component: PostPageFormComponent;
  let fixture: ComponentFixture<PostPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
