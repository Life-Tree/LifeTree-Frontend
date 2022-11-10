import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReportsMapPage } from './reportsMap.page';


describe('IndicadoresPage', () => {
  let component: ReportsMapPage;
  let fixture: ComponentFixture<ReportsMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
