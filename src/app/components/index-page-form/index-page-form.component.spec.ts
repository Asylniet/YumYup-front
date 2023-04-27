import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageFormComponent } from './index-page-form.component';

describe('IndexPageFormComponent', () => {
  let component: IndexPageFormComponent;
  let fixture: ComponentFixture<IndexPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
