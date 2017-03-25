import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { SupplementsModule } from './supplements.module';

export function main() {
   describe('Supplements component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [SupplementsModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let supplementsDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(supplementsDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-supplements></sd-supplements>'
})
class TestComponent {}
