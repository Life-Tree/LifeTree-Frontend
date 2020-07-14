import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportarIntervencionPage } from './reportar-intervencion.page';

describe('ReportarIntervencionPage', () => {
  let component: ReportarIntervencionPage;
  let fixture: ComponentFixture<ReportarIntervencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarIntervencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportarIntervencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
