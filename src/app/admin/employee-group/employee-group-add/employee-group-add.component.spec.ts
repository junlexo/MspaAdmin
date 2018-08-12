import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeGroupAddComponent } from './employee-group-add.component';

describe('AdminEmployeeGroupAddComponent', () => {
  let component: AdminEmployeeGroupAddComponent;
  let fixture: ComponentFixture<AdminEmployeeGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
