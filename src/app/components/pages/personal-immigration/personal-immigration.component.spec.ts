import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalImmigrationComponent } from './personal-immigration.component';

describe('PersonalImmigrationComponent', () => {
  let component: PersonalImmigrationComponent;
  let fixture: ComponentFixture<PersonalImmigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalImmigrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalImmigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
