import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSetterComponent } from './img-setter.component';

describe('ImgSetterComponent', () => {
  let component: ImgSetterComponent;
  let fixture: ComponentFixture<ImgSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
