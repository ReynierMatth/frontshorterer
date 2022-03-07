import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducerUrlComponent } from './reducer-url.component';

describe('ReducerUrlComponent', () => {
  let component: ReducerUrlComponent;
  let fixture: ComponentFixture<ReducerUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducerUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducerUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
