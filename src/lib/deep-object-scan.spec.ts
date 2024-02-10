import {DeepObjectScan} from './deep-object-scan';
import {OfNumberType, OfStringType} from "@24vlh/ts-assert";

test('DeepObjectScan: Expecting `a.b.c` to return 1', () => {
    const obj = {a: {b: {c: 1}}};
    expect(DeepObjectScan('a.b.c', obj)).toEqual(1);
});

test('DeepObjectScan: Expecting `a.b.c` with OfNumberType assertion to return 1', () => {
    const obj = {a: {b: {c: 1}}};
    expect(DeepObjectScan('a.b.c', obj, OfNumberType)).toEqual(1);
});

test('DeepObjectScan: Expecting `a.b.c` with OfStringType assertion to fail and return undefined', () => {
    const obj = {a: {b: {c: 1}}};
    expect(DeepObjectScan('a.b.c', obj, OfStringType)).toEqual(undefined);
});

test('DeepObjectScan: Expecting `a.b.d` to fail and to return undefined', () => {
    const obj = {a: {b: {c: 1}}};
    expect(DeepObjectScan('a.b.d', obj)).toEqual(undefined);
});

test('DeepObjectScan: Expecting `a` to return 10', () => {
    const obj = {a: 10};
    expect(DeepObjectScan('a', obj)).toEqual(10);
});

test('DeepObjectScan: Expecting `` to fail and to return undefined', () => {
    const obj = {a: {b: {c: 1}}};
    expect(DeepObjectScan('', obj)).toEqual(undefined);
});

test('DeepObjectScan: Expecting `a.b.c` to fail and to return undefined', () => {
    const obj = null;
    expect(DeepObjectScan('a.b.c', obj)).toEqual(undefined);
});