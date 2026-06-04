# Typescript helpers

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Small footprint library that helps with repetitive tasks.

## Installation

```bash
npm i --save @24vlh/ts-helpers
```

## Usage

```ts
import {DeepObjectScan} from '@24vlh/ts-helpers/deep-object-scan';
import {OfNumberType} from '@24vlh/ts-assert/number';

console.log(
    DeepObjectScan('a.b.c', {a: {b: {c: 1}}}, OfNumberType)
);
// shall output 1
```

## List of helpers

### Helpers

- BuildApiUrl
- BuildSearchTokens
- CompareKeys
- CompareKeysWithDirection
- CountWords
- DeepCopyPrimitive
- DeepCopy
- DeepFreezePrimitive
- DeepObjectScan
- EscapeHtml
- FormatBulletText
- DecodeJsonCursor
- EncodeJsonCursor
- MatchesSearchTokens
- MoveArrayEntryIndex
- NormalizeBaseUrl
- NormalizeBulletText
- NormalizePositiveNumber
- ParseJsonPayload
- ReadObjectProperty
- SaveAs
- SaveAsPrimitive
- SaveAsBlob
- SaveAsText
- SaveAsJson
- SaveAsCsv
- SaveAsXml
- SaveAsHtml
- SaveAsImage
- SaveAsCanvas
- SaveAsPdf
- SaveAsAudio
- SaveAsVideo
- SaveAsFile
- SaveAsArrayBuffer
- SaveAsBlobParts
- StripCodeFence
- TokenizeSearchText

@vlah.io
