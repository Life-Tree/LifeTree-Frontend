import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntervencionesPage } from './intervenciones.page';

describe('IntervencionesPage', () => {
  let component: IntervencionesPage;
  let fixture: ComponentFixture<IntervencionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervencionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntervencionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
