import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLinksComponent } from './management-links.component';

describe('ManagementLinksComponent', () => {
  let component: ManagementLinksComponent;
  let fixture: ComponentFixture<ManagementLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
