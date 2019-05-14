import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTemplateComponent } from './slider-template.component';

describe('SliderTemplateComponent', () => {
  let component: SliderTemplateComponent;
  let fixture: ComponentFixture<SliderTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
