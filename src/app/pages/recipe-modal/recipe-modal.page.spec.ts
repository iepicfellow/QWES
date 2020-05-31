import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeModalPage } from './recipe-modal.page';

describe('RecipeModalPage', () => {
  let component: RecipeModalPage;
  let fixture: ComponentFixture<RecipeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
