import { ComponentFixture, TestBed } from '@angular/core/testing';

import { __name__FormComponent } from './name.component';

describe('NameComponent', () => {
  let component: __name__FormComponent;
  let fixture: ComponentFixture<__name__FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ __name__FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(__name__FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
