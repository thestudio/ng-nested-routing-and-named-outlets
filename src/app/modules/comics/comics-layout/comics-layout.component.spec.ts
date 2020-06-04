import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsLayoutComponent } from './comics-layout.component';

describe('ComicsLayoutComponent', () => {
  let component: ComicsLayoutComponent;
  let fixture: ComponentFixture<ComicsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
