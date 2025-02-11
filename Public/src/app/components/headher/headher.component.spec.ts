import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadherComponent } from './headher.component';

describe('HeadherComponent', () => {
  let component: HeadherComponent;
  let fixture: ComponentFixture<HeadherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
