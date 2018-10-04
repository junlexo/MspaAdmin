import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShopAddComponent } from './shop-add.component';

describe('AdminShopAddComponent', () => {
  let component: AdminShopAddComponent;
  let fixture: ComponentFixture<AdminShopAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShopAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
