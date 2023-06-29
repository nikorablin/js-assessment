import {strings} from './strings';

describe('strings', function() {
  it('you should be able to reduce duplicate characters to a desired minimum', function() {
    expect(strings.reduceString('aaaabbbb', 2)).toBe('aabb');
    expect(strings.reduceString('xaaabbbb', 2)).toBe('xaabb');
    expect(strings.reduceString('aaaabbbb', 1)).toBe('ab');
    expect(strings.reduceString('aaxxxaabbbb', 2)).toBe('aaxxaabb');
  });

  it('you should be able to wrap lines at a given number of columns, without breaking words', function() {
    const wrapCol = 5;
    const inputStrings = [
      'abcdef abcde abc def',
      'abc abc abc',
      'a b c def'
    ];
    const outputStrings = [
      'abcdef\nabcde\nabc\ndef',
      'abc\nabc\nabc',
      'a b c\ndef'
    ];
    let formattedStr;

    inputStrings.forEach(function(str, index) {
      formattedStr = strings.wordWrap(str, wrapCol);
      expect(formattedStr).toBe(outputStrings[index]);
    });
  });

  it('you should be able to reverse a string', function() {
    const inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama'
    ];
    const outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A'
    ];

    inputStrings.forEach(function(str, index) {
      const result = strings.reverseString(str);
      expect(result).toBe(outputStrings[index]);
    });
  });
});
