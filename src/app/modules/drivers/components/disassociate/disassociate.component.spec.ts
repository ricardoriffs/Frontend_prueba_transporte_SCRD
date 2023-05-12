import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisassociateComponent } from './disassociate.component';

describe('DisassociateComponent', () => {
  let component: DisassociateComponent;
  let fixture: ComponentFixture<DisassociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisassociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
