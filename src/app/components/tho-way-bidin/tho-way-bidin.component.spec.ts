import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoWayBidinComponent } from './tho-way-bidin.component';

describe('ThoWayBidinComponent', () => {
  let component: ThoWayBidinComponent;
  let fixture: ComponentFixture<ThoWayBidinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoWayBidinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoWayBidinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
