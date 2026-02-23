import {ParseJsonPayload} from './parse-json-payload';

test('ParseJsonPayload: parses direct JSON', () => {
  expect(ParseJsonPayload<{ok: boolean}>('{"ok":true}')).toEqual({
    parsed: {ok: true},
    errors: []
  });
});

test('ParseJsonPayload: parses fenced JSON', () => {
  expect(ParseJsonPayload<{ok: boolean}>('```json\n{"ok":true}\n```')).toEqual({
    parsed: {ok: true},
    errors: []
  });
});

test('ParseJsonPayload: parses wrapped JSON object', () => {
  expect(ParseJsonPayload<{ok: boolean}>('Result:\n{"ok":true}\nThanks')).toEqual({
    parsed: {ok: true},
    errors: []
  });
});

test('ParseJsonPayload: returns error for invalid payload', () => {
  expect(ParseJsonPayload('not-json').errors).toEqual(['Payload must be valid JSON.']);
});
