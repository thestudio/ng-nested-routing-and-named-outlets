import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelLayoutComponent } from './marvel-layout.component';

describe('MarvelLayoutComponent', () => {
  let component: MarvelLayoutComponent;
  let fixture: ComponentFixture<MarvelLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
