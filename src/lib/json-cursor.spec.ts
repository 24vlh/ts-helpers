import {DecodeJsonCursor, EncodeJsonCursor} from './json-cursor';

test('EncodeJsonCursor/DecodeJsonCursor: round-trips a JSON value', () => {
  const value = ['a', 1, {ok: true}];
  const cursor = EncodeJsonCursor(value);
  expect(DecodeJsonCursor<typeof value>(cursor)).toEqual(value);
});

test('DecodeJsonCursor: returns null for invalid cursor', () => {
  expect(DecodeJsonCursor('not-cursor')).toBeNull();
});
