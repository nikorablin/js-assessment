import { flowControl } from "./flowControl";

describe('flow control', function() {
  it('you should be able to conditionally branch your code', function() {
    let num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(flowControl.fizzBuzz()).toBe(false);
    expect(flowControl.fizzBuzz('foo')).toBe(false);
    expect(flowControl.fizzBuzz(101)).toBe(101);

    expect(flowControl.fizzBuzz(3)).toBe('fizz');
    expect(flowControl.fizzBuzz(6)).toBe('fizz');
    expect(flowControl.fizzBuzz(num * 3)).toBe('fizz');

    expect(flowControl.fizzBuzz(5)).toBe('buzz');
    expect(flowControl.fizzBuzz(10)).toBe('buzz');
    expect(flowControl.fizzBuzz(num * 5)).toBe('buzz');

    expect(flowControl.fizzBuzz(15)).toBe('fizzbuzz');
    expect(flowControl.fizzBuzz(num * 3 * 5)).toBe('fizzbuzz');
  });
});
