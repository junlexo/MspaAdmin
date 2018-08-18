import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTreatmentTypeListComponent } from './treatment-type-list.component';

describe('AdminTreatmentTypeListComponent', () => {
  let component: AdminTreatmentTypeListComponent;
  let fixture: ComponentFixture<AdminTreatmentTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTreatmentTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTreatmentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
