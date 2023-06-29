import { logicalOperators } from "./logicalOperators";

describe('logical operators', function(){
  it('you should be able to work with logical or', function() {
    expect(logicalOperators.or(false, true)).toBe(true);
    expect(logicalOperators.or(true, false)).toBe(true);
    expect(logicalOperators.or(true, true)).toBe(true);
    expect(logicalOperators.or(false, false)).toBe(false);
    expect(logicalOperators.or(3, 4)).toBe(3);
  });

  it('you should be able to work with logical and', function() {
    expect(logicalOperators.and(false, true)).toBe(false);
    expect(logicalOperators.and(false, false)).toBe(false);
    expect(logicalOperators.and(true, false)).toBe(false);
    expect(logicalOperators.and(true, true)).toBe(true);
    expect(logicalOperators.and(3, 4)).toBeTruthy()
  });
});
