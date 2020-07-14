import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbolModalPage } from './arbol-modal.page';

describe('ArbolModalPage', () => {
  let component: ArbolModalPage;
  let fixture: ComponentFixture<ArbolModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbolModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
