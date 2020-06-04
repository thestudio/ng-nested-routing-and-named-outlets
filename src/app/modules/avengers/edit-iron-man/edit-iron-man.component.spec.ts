import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIronManComponent } from './edit-iron-man.component';

describe('EditIronManComponent', () => {
  let component: EditIronManComponent;
  let fixture: ComponentFixture<EditIronManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIronManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIronManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
