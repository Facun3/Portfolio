import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstableComponent } from './workstable.component';

describe('WorkstableComponent', () => {
  let component: WorkstableComponent;
  let fixture: ComponentFixture<WorkstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
