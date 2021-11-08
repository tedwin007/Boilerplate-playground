import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGroupNavigationComponent } from './device-group-navigation.component';

describe('DeviceGroupNavigationComponent', () => {
  let component: DeviceGroupNavigationComponent;
  let fixture: ComponentFixture<DeviceGroupNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGroupNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
