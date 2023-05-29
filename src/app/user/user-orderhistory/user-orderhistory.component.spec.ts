import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderhistoryComponent } from './user-orderhistory.component';

describe('UserOrderhistoryComponent', () => {
  let component: UserOrderhistoryComponent;
  let fixture: ComponentFixture<UserOrderhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOrderhistoryComponent]
    });
    fixture = TestBed.createComponent(UserOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
