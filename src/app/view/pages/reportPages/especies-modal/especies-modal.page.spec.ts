import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspeciesModalPage } from './especies-modal.page';

describe('EspeciesModalPage', () => {
  let component: EspeciesModalPage;
  let fixture: ComponentFixture<EspeciesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspeciesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
