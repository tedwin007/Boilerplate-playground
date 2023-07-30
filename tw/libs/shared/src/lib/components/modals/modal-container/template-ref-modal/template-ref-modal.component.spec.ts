import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefModalComponent } from './template-ref-modal.component';

describe('TemplateRefModalComponent', () => {
  let component: TemplateRefModalComponent;
  let fixture: ComponentFixture<TemplateRefModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
