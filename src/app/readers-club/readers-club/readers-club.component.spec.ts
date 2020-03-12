import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersClubComponent } from './readers-club.component';

describe('ReadersClubComponent', () => {
  let component: ReadersClubComponent;
  let fixture: ComponentFixture<ReadersClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadersClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
