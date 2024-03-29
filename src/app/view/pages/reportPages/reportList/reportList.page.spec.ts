import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReportListPage } from './reportList.page';


describe('ArbolesListPage', () => {
  let component: ReportListPage;
  let fixture: ComponentFixture<ReportListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
