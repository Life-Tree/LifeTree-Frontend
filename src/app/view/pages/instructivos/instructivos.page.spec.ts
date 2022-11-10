import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstructivosPage } from './instructivos.page';

describe('InstructivosPage', () => {
  let component: InstructivosPage;
  let fixture: ComponentFixture<InstructivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstructivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
