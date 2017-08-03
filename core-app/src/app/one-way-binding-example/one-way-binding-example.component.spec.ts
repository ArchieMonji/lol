import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBindingExampleComponent } from './one-way-binding-example.component';

describe('OneWayBindingExampleComponent', () => {
  let component: OneWayBindingExampleComponent;
  let fixture: ComponentFixture<OneWayBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
