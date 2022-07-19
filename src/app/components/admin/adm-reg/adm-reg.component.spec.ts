import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegComponent } from './adm-reg.component';

describe('AdmRegComponent', () => {
  let component: AdmRegComponent;
  let fixture: ComponentFixture<AdmRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
