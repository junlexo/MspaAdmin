import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeGroupListComponent } from './employee-group-list.component';

describe('AdminEmployeeGroupListComponent', () => {
  let component: AdminEmployeeGroupListComponent;
  let fixture: ComponentFixture<AdminEmployeeGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
