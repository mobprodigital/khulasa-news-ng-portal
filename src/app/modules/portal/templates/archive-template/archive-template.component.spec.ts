import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTemplateComponent } from './archive-template.component';

describe('ArchiveTemplateComponent', () => {
  let component: ArchiveTemplateComponent;
  let fixture: ComponentFixture<ArchiveTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
