import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedateComponent } from './datedate.component';

describe('DatedateComponent', () => {
  let component: DatedateComponent;
  let fixture: ComponentFixture<DatedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
