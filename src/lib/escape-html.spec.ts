import {EscapeHtml} from './escape-html';

test('EscapeHtml: escapes html-sensitive characters', () => {
  expect(EscapeHtml('<a href=\"x\">& \"y\"</a>')).toBe('&lt;a href=&quot;x&quot;&gt;&amp; &quot;y&quot;&lt;/a&gt;');
});
