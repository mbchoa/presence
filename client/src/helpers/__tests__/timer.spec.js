import calculateOverflowTime from '../timer.js';

describe('timer test suite', () => {
  it('should return correct number of seconds', () => {
    expect(calculateOverflowTime(3500)).toMatchSnapshot();
  });

  it('should return correct number of minutes', () => {
    expect(calculateOverflowTime(125000)).toMatchSnapshot();
  });

  it('should return correct number of hours', () => {
    expect(calculateOverflowTime(3652341)).toMatchSnapshot();
  });
});
