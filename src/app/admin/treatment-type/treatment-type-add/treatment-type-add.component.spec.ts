import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTreatmentTypeAddComponent } from './treatment-type-add.component';

describe('AdminTreatmentTypeAddComponent', () => {
  let component: AdminTreatmentTypeAddComponent;
  let fixture: ComponentFixture<AdminTreatmentTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTreatmentTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTreatmentTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
