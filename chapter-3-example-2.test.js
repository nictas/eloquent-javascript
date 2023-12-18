const example = require('./chapter-3-example-2');

describe('closureVar function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('logs correct values using var', () => {
    const logSpy = jest.spyOn(console, 'log');
    example.closureVar();

    jest.runAllTimers();

    expect(logSpy).toHaveBeenNthCalledWith(1, 3);
    expect(logSpy).toHaveBeenNthCalledWith(2, 3);
    expect(logSpy).toHaveBeenNthCalledWith(3, 3);
    logSpy.mockRestore();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});

describe('closureLet function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('logs correct values using let', () => {
    const logSpy = jest.spyOn(console, 'log');
    example.closureLet();

    jest.runAllTimers();

    expect(logSpy).toHaveBeenNthCalledWith(1, 0);
    expect(logSpy).toHaveBeenNthCalledWith(2, 1);
    expect(logSpy).toHaveBeenNthCalledWith(3, 2);
    logSpy.mockRestore();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
