import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleddivComponent } from './styleddiv.component';

describe('StyleddivComponent', () => {
  let component: StyleddivComponent;
  let fixture: ComponentFixture<StyleddivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleddivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleddivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
