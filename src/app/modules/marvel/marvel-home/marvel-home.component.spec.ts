import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHomeComponent } from './marvel-home.component';

describe('MarvelHomeComponent', () => {
  let component: MarvelHomeComponent;
  let fixture: ComponentFixture<MarvelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
