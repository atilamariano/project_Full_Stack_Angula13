import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsComponentComponent } from './firts-component.component';

describe('FirtsComponentComponent', () => {
  let component: FirtsComponentComponent;
  let fixture: ComponentFixture<FirtsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirtsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
