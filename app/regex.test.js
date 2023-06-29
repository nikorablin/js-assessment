import {regex} from './regex';

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {
    expect(regex.containsNumber('abc123')).toBe(true);
    expect(regex.containsNumber('abc')).toBe(false);
  });

  it('you should be able to detect a repeating letter in a string', function() {
    expect(regex.containsRepeatingLetter('bookkeeping')).toBe(true);
    expect(regex.containsRepeatingLetter('rattler')).toBe(true);
    expect(regex.containsRepeatingLetter('ZEPPELIN')).toBe(true);
    expect(regex.containsRepeatingLetter('cats')).toBe(false);
    expect(regex.containsRepeatingLetter('l33t')).toBe(false);
  });

  it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
    expect(regex.endsWithVowel('cats')).toBe(false);
    expect(regex.endsWithVowel('gorilla')).toBe(true);
    expect(regex.endsWithVowel('I KNOW KUNG FU')).toBe(true);
  });

  it('you should be able to capture the first series of three numbers', function() {
    expect(regex.captureThreeNumbers('abc123')).toBe('123');
    expect(regex.captureThreeNumbers('9876543')).toBe('987');
    expect(regex.captureThreeNumbers('abcdef')).toBe(false);
    expect(regex.captureThreeNumbers('12ab12ab')).toBe(false);
  });

  it('you should be able to determine whether a string matches a pattern', function() {
    // the pattern is XXX-XXX-XXXX where all X's are digits
    expect(regex.matchesPattern('800-555-1212')).toBe(true);
    expect(regex.matchesPattern('451-933-7899')).toBe(true);
    expect(regex.matchesPattern('33-444-5555')).toBe(false);
    expect(regex.matchesPattern('abc-def-hijk')).toBe(false);
    expect(regex.matchesPattern('1800-555-1212')).toBe(false);
    expect(regex.matchesPattern('800-555-12121')).toBe(false);
    expect(regex.matchesPattern('800-5555-1212')).toBe(false);
    expect(regex.matchesPattern('800-55-1212')).toBe(false);
  });

  it('you should be able to detect correctly-formatted monetary amounts in USD', function() {
    expect(regex.isUSD('$132.03')).toBe(true);
    expect(regex.isUSD('$32.03')).toBe(true);
    expect(regex.isUSD('$2.03')).toBe(true);
    expect(regex.isUSD('$1,023,032.03')).toBe(true);
    expect(regex.isUSD('$20,933,209.93')).toBe(true);
    expect(regex.isUSD('$20,933,209')).toBe(true);
    expect(regex.isUSD('$459,049,393.21')).toBe(true);
    expect(regex.isUSD('34,344.34')).toBe(false);
    expect(regex.isUSD('$,344.34')).toBe(false);
    expect(regex.isUSD('$34,344.3')).toBe(false);
    expect(regex.isUSD('$34,344.344')).toBe(false);
    expect(regex.isUSD('$34,344_34')).toBe(false);
    expect(regex.isUSD('$3,432,12.12')).toBe(false);
    expect(regex.isUSD('$3,432,1,034.12')).toBe(false);
    expect(regex.isUSD('4$3,432,034.12')).toBe(false);
    expect(regex.isUSD('$2.03.45')).toBe(false);
  });
});
