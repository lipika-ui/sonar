import { TestBed } from '@angular/core/testing';
import { HomeproductsComponent } from './homeproducts.component';
import { UiModule } from '@lla/ui';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../reducers';
import { StoreModule } from '@ngrx/store';

describe('HomeproductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeproductsComponent],
      imports: [UiModule, EffectsModule, StoreModule.forRoot(reducers)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeproductsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
