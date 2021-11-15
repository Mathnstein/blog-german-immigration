import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreflightChecksComponent } from './preflight-checks.component';

describe('PreflightChecksComponent', () => {
  let component: PreflightChecksComponent;
  let fixture: ComponentFixture<PreflightChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreflightChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreflightChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
