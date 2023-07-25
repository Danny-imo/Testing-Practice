const stringer = require('./srtinger');

test('Count Characters', () => {
    expect(stringer('Tom')).toBe(3)
});

test('Character must be at least one but less than eleven', () => {
    expect(() => stringer('')).toThrow('String Must be st least one char long  and Less Than 10 Chars');
});

