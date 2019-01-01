import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactionComponent } from './my-reaction.component';

describe('MyReactionComponent', () => {
  let component: MyReactionComponent;
  let fixture: ComponentFixture<MyReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
