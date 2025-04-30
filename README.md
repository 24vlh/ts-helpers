# Typescript helpers

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

- DeepCopyPrimitive
- DeepCopy
- DeepFreezePrimitive
- DeepObjectScan
- MoveArrayEntryIndex
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

@vlah.io
