import { test } from '../src/index';

describe('When running the initial test', () => {
    it('it should return a string', () => {
        expect(typeof test()).toBe('string');
    });
});
