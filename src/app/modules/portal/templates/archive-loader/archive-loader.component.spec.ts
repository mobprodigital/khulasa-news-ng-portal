import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveLoaderComponent } from './archive-loader.component';

describe('ArchiveLoaderComponent', () => {
  let component: ArchiveLoaderComponent;
  let fixture: ComponentFixture<ArchiveLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
