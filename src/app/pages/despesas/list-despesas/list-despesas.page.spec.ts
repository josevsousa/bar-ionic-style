import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDespesasPage } from './list-despesas.page';

describe('ListDespesasPage', () => {
  let component: ListDespesasPage;
  let fixture: ComponentFixture<ListDespesasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDespesasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDespesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
