const operateString = require('./string');

describe('operate string returns correct value for', () => {
    test('aaabbb', () => {
        expect(operateString('aaabbb')).toEqual('ab');
    });
    test('aaabb', () => {
        expect(operateString('aaabb')).toEqual('a');
    });
    test('aaabbbd', () => {
        expect(operateString('aaabbbd')).toEqual('abd');
    });
    test('aaabbbd', () => {
        expect(operateString('aaabbbd')).toEqual('abd');
    });
    test('a', () => {
        expect(operateString('a')).toEqual('a');
    });
    test('aaabccddd', () => {
        expect(operateString('aaabccddd')).toEqual('abd');
    });
    test('aa', () => {
        expect(operateString('aa')).toEqual('Empty String');
    });
    test('aaabbbaabccc', () => {
        expect(operateString('aaabbbaabccc')).toEqual('ac');
    });
    test('a 100 character string', () => {
        expect(operateString('aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeaber')).toEqual('aber');
    });
});