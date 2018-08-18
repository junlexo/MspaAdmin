import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShopListComponent } from './shop-list.component';

describe('AdminShopListComponent', () => {
  let component: AdminShopListComponent;
  let fixture: ComponentFixture<AdminShopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
