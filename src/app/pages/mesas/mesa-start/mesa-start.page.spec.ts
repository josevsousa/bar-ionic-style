import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesaStartPage } from './mesa-start.page';

describe('MesaStartPage', () => {
  let component: MesaStartPage;
  let fixture: ComponentFixture<MesaStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesaStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
