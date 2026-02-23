import {FormatBulletText, NormalizeBulletText} from './bullet-text';

test('FormatBulletText: prefixes non-empty lines with bullet marker', () => {
  expect(FormatBulletText('alpha\n beta\n\n- gamma')).toBe('- alpha\n- beta\n\n- gamma');
});

test('NormalizeBulletText: removes bullets and drops empty lines', () => {
  expect(NormalizeBulletText('- alpha\n\n - beta \n gamma')).toBe('alpha\nbeta\ngamma');
});
