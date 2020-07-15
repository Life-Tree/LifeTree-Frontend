import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntructivoIntervencionesPage } from './intructivo-intervenciones.page';

describe('IntructivoIntervencionesPage', () => {
  let component: IntructivoIntervencionesPage;
  let fixture: ComponentFixture<IntructivoIntervencionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntructivoIntervencionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntructivoIntervencionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
