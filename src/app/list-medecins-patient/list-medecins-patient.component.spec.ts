import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedecinsPatientComponent } from './list-medecins-patient.component';

describe('ListMedecinsPatientComponent', () => {
  let component: ListMedecinsPatientComponent;
  let fixture: ComponentFixture<ListMedecinsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedecinsPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedecinsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
