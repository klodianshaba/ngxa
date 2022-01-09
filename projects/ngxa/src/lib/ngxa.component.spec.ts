import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxaComponent } from './ngxa.component';

describe('NgxaComponent', () => {
  let component: NgxaComponent;
  let fixture: ComponentFixture<NgxaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
