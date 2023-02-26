const { email, text, number } = require('../assets/js/validate.js');

test("Should return boolean", () => {
  const e = email('');
  expect(typeof (e)).toBe("boolean");
});

test("Should return boolean", () => {
  const t = text('');
  expect(typeof (t)).toBe("boolean");
});

test("Should return boolean", () => {
  const n = number('');
  expect(typeof (n)).toBe("boolean");
});