import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ExercisesModule } from './exercises.module';

export function main() {
   describe('Exercises component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ExercisesModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let exercisesDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(exercisesDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-exercises></sd-exercises>'
})
class TestComponent {}
