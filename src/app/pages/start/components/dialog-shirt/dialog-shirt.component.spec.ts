import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShirtComponent } from './dialog-shirt.component';

describe('DialogShirtComponent', () => {
  let component: DialogShirtComponent;
  let fixture: ComponentFixture<DialogShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
