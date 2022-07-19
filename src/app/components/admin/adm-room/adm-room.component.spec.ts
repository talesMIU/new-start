import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRoomComponent } from './adm-room.component';

describe('AdmRoomComponent', () => {
  let component: AdmRoomComponent;
  let fixture: ComponentFixture<AdmRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
