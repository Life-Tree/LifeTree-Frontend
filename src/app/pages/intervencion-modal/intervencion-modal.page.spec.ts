import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntervencionModalPage } from './intervencion-modal.page';

describe('IntervencionModalPage', () => {
  let component: IntervencionModalPage;
  let fixture: ComponentFixture<IntervencionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervencionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntervencionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
