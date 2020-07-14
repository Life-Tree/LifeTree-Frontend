import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbolesListPage } from './arboles-list.page';

describe('ArbolesListPage', () => {
  let component: ArbolesListPage;
  let fixture: ComponentFixture<ArbolesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbolesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
