
import {TestComponent} from './test.component';
/*this is for testing two aspects at the same time */
const result = new TestComponent;
describe('compute', () => {
it ('should return 0 if input is positive', () => {
  expect(result.compute(-1)).toBe(0);
});
it ('should increment the input if it is positive', () => {
  expect(result.compute(3)).toBe(4);
});
});
/*this is for Array */
describe('getCurrencies', () => {
  it('it should contain currencies if present', () => {

expect(result.getCurrencies()).toContain('USD');
expect(result.getCurrencies()).toContain('AUD');
expect(result.getCurrencies()).toContain('EUR');
  });
});
/*this is for string */
describe('greet', () => {
 it('it should greet before name', () => {
   expect(result.greet('mosh')).toContain('mosh');
 });
});
