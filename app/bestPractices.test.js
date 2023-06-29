import { bestPractices } from "./bestPractices";

describe('best practices', function(){
  it('you should use parseInt correctly', function() {
    expect(bestPractices.parseInt('12')).toBe(12);
    expect(bestPractices.parseInt('12px')).toBe(12);
    expect(bestPractices.parseInt('0x12')).toBe(0);
  });

  it('you should understand strict comparison', function() {
    expect(bestPractices.identity(1, '1')).toBe(false);
    expect(bestPractices.identity(1, 1)).toBe(true);
    expect(bestPractices.identity(0, false)).toBe(false);
  });
});
