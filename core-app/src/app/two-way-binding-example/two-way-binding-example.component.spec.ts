import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingExampleComponent } from './two-way-binding-example.component';

describe('TwoWayBindingExampleComponent', () => {
  let component: TwoWayBindingExampleComponent;
  let fixture: ComponentFixture<TwoWayBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
