import { functions } from "./functions";

describe('functions', function() {
  const sayIt = jest.fn((greeting, name, punctuation = '!') => {
    return `${greeting}, ${name}${punctuation}`;
  });

  beforeEach(function () {
    sayIt.mockClear()
  });

  it('you should be able to use an array as arguments when calling a function', function() {
    const result = functions.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
    expect(result).toBe('Hello, Ellie!');
    expect(sayIt).toHaveBeenCalledTimes(1);
  });

  it('you should be able to return a function from a function', function() {
    expect(functions.functionFunction('Hello')('world')).toBe('Hello, world');
    expect(functions.functionFunction('What\'s up')('doc?')).toBe('What\'s up, doc?');
  });

  it('you should be able to use closures', function () {
    const arr = [Math.random(), Math.random(), Math.random(), Math.random()];
    const square = x => x * x;

    const funcs = functions.makeClosures(arr, square);
    expect(funcs.length).toBe(arr.length);

    for (let i = 0; i < arr.length; i++) {
      expect(funcs[i]()).toBe(square(arr[i]));
    }
  });

  it('you should be able to create a "partial" function', function() {
    const partial = functions.partial(sayIt, 'Hello', 'Ellie');
    expect(partial('!!!')).toBe('Hello, Ellie!!!');
    expect(sayIt).toHaveBeenCalledTimes(1);
  });

  it('you should be able to use arguments', function () {
    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    const d = Math.random();

    expect(functions.useArguments(a)).toBe(a);
    expect(functions.useArguments(a, b)).toBe(a + b);
    expect(functions.useArguments(a, b, c)).toBe(a + b + c);
    expect(functions.useArguments(a, b, c, d)).toBe(a + b + c + d);
  });

  it('you should be able to apply functions with arbitrary numbers of arguments', function () {
    (function () {
      const a = Math.random();
      const b = Math.random();
      const c = Math.random();

      const iTake2Arguments = jest.fn((firstArgument, secondArgument) => {
        expect(firstArgument).toBe(a);
        expect(secondArgument).toBe(b);
      });

      const iTake3Arguments = jest.fn((firstArgument, secondArgument, thirdArgument) => {
        expect(firstArgument).toBe(a);
        expect(secondArgument).toBe(b);
        expect(thirdArgument).toBe(c);
      });

      functions.callIt(iTake2Arguments, a, b);
      functions.callIt(iTake3Arguments, a, b, c);

      expect(iTake2Arguments).toHaveBeenCalledTimes(1);
      expect(iTake3Arguments).toHaveBeenCalledTimes(1);
    }());
  });

  it('you should be able to create a "partial" function for variable number of applied arguments', function () {
    const partialMe = (x, y, z) => x / y * z;

    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    expect(functions.partialUsingArguments(partialMe)(a, b, c)).toBe(partialMe(a, b, c));
    expect(functions.partialUsingArguments(partialMe, a)(b, c)).toBe(partialMe(a, b, c));
    expect(functions.partialUsingArguments(partialMe, a, b)(c)).toBe(partialMe(a, b, c));
    expect(functions.partialUsingArguments(partialMe, a, b, c)()).toBe(partialMe(a, b, c));
  });

  it('you should be able to curry existing functions', function () {
    const curryMe = (x, y, z) => x / y * z;

    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    let result;

    result = functions.curry(curryMe);
    expect(typeof result).toBe('function');
    expect(result.length).toBe(1);

    result = functions.curry(curryMe)(a);
    expect(typeof result).toBe('function');
    expect(result.length).toBe(1);

    result = functions.curry(curryMe)(a)(b);
    expect(typeof result).toBe('function');
    expect(result.length).toBe(1);

    result = functions.curry(curryMe)(a)(b)(c);
    expect(typeof result).toBe('number');
    expect(result).toBe(curryMe(a, b, c));
  });
});
