import { recursion } from "./recursion";

describe('recursion', function() {
  const fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'underscore.js'
            ]
          }
        ]
      },
      {
        dir: 'css',
        files: [
          'reset.css',
          'main.css'
        ]
      }
    ]
  };

  it('you should be able to return a list of files from the data', function() {
    const result = recursion.listFiles(fileData);
    expect(result.length).toBe(8);
    expect(result).toContain('index.html');
    expect(result).toContain('main.js');
    expect(result).toContain('underscore.js');
  });

  it('you should be able to return a list of files in a subdir', function() {
    const result = recursion.listFiles(fileData, 'js');
    expect(result.length).toBe(5);
    expect(result).toContain('main.js');
    expect(result).toContain('underscore.js');
  });
});

describe('permutation', function() {
  const arr = [ 1, 2, 3, 4 ];
  const answer = [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 4, 1, 2],
    [3, 4, 2, 1],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [4, 2, 1, 3],
    [4, 2, 3, 1],
    [4, 3, 1, 2],
    [4, 3, 2, 1]
  ];

  it('you should be able to return the permutations of an array', function() {
    const result = recursion.permute(arr);
    const resultStrings = result.map((r) => r.join(''));

    expect(result.length).toBe(answer.length);

    answer.forEach((a) => {
      expect(resultStrings).toContain(a.join(''));
    });
  });

  it('you should be able to return the nth number in a fibonacci sequence', function() {
    expect(recursion.fibonacci(2)).toBe(1);
    expect(recursion.fibonacci(6)).toBe(8);
  });

  it('you should be able to return the set of all valid combinations of n pairs of parentheses.', function() {
    var expected = [ '((()))', '(()())', '(())()', '()(())', '()()()'];
    var result = recursion.validParentheses(3);

    expect(result.length).toBe(5);
    expected.forEach((c) => {
      expect(result).toContain(c);
    });
  });
});
