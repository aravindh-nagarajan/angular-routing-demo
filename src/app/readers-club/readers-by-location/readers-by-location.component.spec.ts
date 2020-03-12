import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersByLocationComponent } from './readers-by-location.component';

describe('ReadersByLocationComponent', () => {
  let component: ReadersByLocationComponent;
  let fixture: ComponentFixture<ReadersByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadersByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
