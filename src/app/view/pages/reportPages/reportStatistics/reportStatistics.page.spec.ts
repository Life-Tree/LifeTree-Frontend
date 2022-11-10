import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportStatisticsPage } from './reportStatistics.page';

describe('ReportsPage', () => {
  let component: ReportStatisticsPage;
  let fixture: ComponentFixture<ReportStatisticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStatisticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportStatisticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
