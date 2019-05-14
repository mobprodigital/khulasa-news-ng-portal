import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestNewsTemplateComponent } from './letest-news-template.component';

describe('LetestNewsTemplateComponent', () => {
  let component: LetestNewsTemplateComponent;
  let fixture: ComponentFixture<LetestNewsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetestNewsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetestNewsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
