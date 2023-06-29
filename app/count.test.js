import {count} from './count';

/**
  * This test describes a function, count, that takes two arguments: a starting number,
  * and an ending number. The function should console.log each number from the start
  * number to the end number, one number per 1/10th of a second. The function should
  * return an object with a cancel method, which should cancel the counting.
*/

describe('counter', function () {
  let nums;

  beforeEach(function () {
    nums = [];

    jest.spyOn(console, 'log').mockImplementation((val) => {
      nums.push(val);
    });

    jest.useFakeTimers();
  });

  it('should count from start number to end number, one per 1/10th of a second', function () {
    count.count(1, 5);

    for (let i = 1; i <= 5; i++) {
      expect(nums.length).toBe(i);
      jest.advanceTimersByTime(100);
    }

    expect(nums.length).toBe(5);
    expect(nums[0]).toBe(1);
    expect(nums[4]).toBe(5);
  });

  it('should provide a method to cancel the counting', function () {
    const counter = count.count(1, 5);
    counter.cancel();

    jest.advanceTimersByTime(550);

    expect(nums.length).toBeLessThan(5);
  });
});
