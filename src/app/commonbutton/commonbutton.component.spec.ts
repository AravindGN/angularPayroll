import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonbuttonComponent } from './commonbutton.component';

describe('CommonbuttonComponent', () => {
  let component: CommonbuttonComponent;
  let fixture: ComponentFixture<CommonbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
