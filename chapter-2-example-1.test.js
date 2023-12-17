const plotTwist = require('./chapter-2-example-1');

test(':O', () => {
  const logSpy = jest.spyOn(console, 'log');
  plotTwist();
  expect(logSpy).toHaveBeenCalledWith("Hello Luke. I'm your father!");
});
