import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportarArbolPage } from './reportar-arbol.page';

describe('ReportarArbolPage', () => {
  let component: ReportarArbolPage;
  let fixture: ComponentFixture<ReportarArbolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarArbolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportarArbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
