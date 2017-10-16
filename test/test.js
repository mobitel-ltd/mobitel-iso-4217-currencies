/* eslint-disable no-undef, no-undefined, func-names, prefer-arrow-callback, max-nested-callbacks, no-unused-vars */

const assert = require('assert');
const iso = require('../index.js');
const iso2 = require('../index.js');

const has = function objHasProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
};

describe('iso', function() {
    it('should be an object', function() {
        assert.equal(typeof iso, 'object');
    });

    it('has equal instances', function() {
        assert.equal(iso, iso2);
    });

    it('is Singleton', function() {
        iso.newProperty = true;
        assert.equal(iso2.newProperty, true);
    });

    describe('iso.list', function() {
        it('should be an array', function() {
            assert.equal(typeof iso.list, 'object');
            assert.equal(Array.isArray(iso.list), true);
        });

        it('should have positive length', function() {
            assert.equal(iso.list.length > 0, true);
        });

        it('each element should be an object', function() {
            let i;
            for (i = 0; i < iso.list.length; i++) {
                assert.equal(typeof iso.list[i], 'object');
            }
        });

        it('each element should have property "country" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'country'), true);
                assert.equal(typeof val.country, 'string');
            }
        });

        it('each element should have property "currency" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'currency'), true);
                assert.equal(typeof val.currency, 'string');
            }
        });

        it('each element should have property "alpha3" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'alpha3'), true);
                assert.equal(typeof val.alpha3, 'string');
            }
        });

        it('each element should have property "numeric" as String', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'numeric'), true);
                assert.equal(typeof val.numeric, 'string');
            }
        });

        it('each element should have property "minor" as Number', function() {
            for (const val of iso.list) {
                assert.equal(has(val, 'minor'), true);
                assert.equal(typeof val.minor, 'number');
            }
        });

        it('each element should be freezed', function() {
            let i;
            for (i = 0; i < iso.list.length; i++) {
                const backUp = {...iso.list[i]};
                iso.list[i] = null;
                assert.equal(JSON.stringify(iso.list[i]), JSON.stringify(backUp));
            }
        });

        it('properties on each element should be freezed', function() {
            let i;
            for (i = 0; i < iso.list.length; i++) {
                const backUp = {...iso.list[i]};
                iso.list[i].numeric = null;
                assert.equal(JSON.stringify(iso.list[i]), JSON.stringify(backUp));
            }
        });
    });

    describe('iso.validate', function() {
        it('should be function', function() {
            assert.equal(typeof iso.validate, 'function');
        });

        it('should be instance of Function', function() {
            assert.equal((iso.validate instanceof Function), true);
        });

        describe('should return FALSE when', function() {
            const test = (...args) => {
                let result;

                if (args.length > 0) {
                    result = iso.validate(...args);
                } else {
                    result = iso.validate();
                }

                assert.deepEqual(typeof result, 'boolean');
                assert.deepEqual(result, false);
            };

            it('call without arguments', function() {
                test();
            });

            it('call with null', function() {
                test(null);
            });

            it('call with true', function() {
                test(true);
            });

            it('call with false', function() {
                test(false);
            });

            it('call with NaN', function() {
                test(NaN);
            });

            it('call with Function', function() {
                test(() => 10);
            });

            it('call with Number', function() {
                test(1);
            });

            it('call with Number as 0', function() {
                test(0);
            });

            it('call with float Number', function() {
                test(1.2);
            });

            it('call with empty String', function() {
                test('');
            });

            it('call with incorrect String', function() {
                test('string');
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with Array with wrong element', function() {
                test([true, false]);
            });

            it('call with empty Object', function() {
                test({});
            });

            it('call with Symbol', function() {
                test(Symbol('test'));
            });

            it('call with RegExp', function() {
                test(/^\d*$/);
            });

            it('call with multiple arguments where first is wrong', function() {
                test(true, false);
            });
        });

        describe('should return TRUE when', function() {
            const test = (...args) => {
                const result = iso.validate(...args);

                assert.deepEqual(typeof result, 'boolean');
                assert.deepEqual(result, true);
            };

            it('call with code "alpha3"', function() {
                test('AFN');
            });

            it('call with code "numeric"', function() {
                test('971');
            });
        });
    });

    describe('iso.get', function() {
        it('should be function', function() {
            assert.equal(typeof iso.get, 'function');
        });

        it('should be instance of Function', function() {
            assert.equal((iso.get instanceof Function), true);
        });

        describe('should return NULL when', function() {
            const test = (...args) => {
                let result;

                if (args.length > 0) {
                    result = iso.get(...args);
                } else {
                    result = iso.get();
                }

                assert.equal(typeof result, 'object');
                assert.equal(result, null);
            };

            it('call without arguments', function() {
                test();
            });

            it('call with null', function() {
                test(null);
            });

            it('call with true', function() {
                test(true);
            });

            it('call with false', function() {
                test(false);
            });

            it('call with NaN', function() {
                test(NaN);
            });

            it('call with Function', function() {
                test(() => 10);
            });

            it('call with Number', function() {
                test(1);
            });

            it('call with Number as 0', function() {
                test(0);
            });

            it('call with float Number', function() {
                test(1.2);
            });

            it('call with empty String', function() {
                test('');
            });

            it('call with incorrect String', function() {
                test('string');
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with Array with wrong element', function() {
                test([true, false]);
            });

            it('call with empty Object', function() {
                test({});
            });

            it('call with Symbol', function() {
                test(Symbol('test'));
            });

            it('call with RegExp', function() {
                test(/^\d*$/);
            });

            it('call with multiple arguments where first is wrong', function() {
                test(true, false);
            });
        });

        describe('should return object when', function() {
            const test = code => {
                const result = iso.get(code);

                assert.deepEqual(typeof result, 'object');
                const keys = Object.keys(result);
                assert.deepEqual(keys.length, 5);
                assert.deepEqual(keys.includes('country'), true);
                assert.deepEqual(keys.includes('currency'), true);
                assert.deepEqual(keys.includes('alpha3'), true);
                assert.deepEqual(keys.includes('numeric'), true);
                assert.deepEqual(keys.includes('minor'), true);
            };

            it('call with code "alpha3"', function() {
                test('AFN');
            });

            it('call with code "numeric"', function() {
                test('971');
            });
        });
    });

    describe('iso.getCodeList', function() {
        it('should be function', function() {
            assert.equal(typeof iso.getCodeList, 'function');
        });

        it('should be instance of Function', function() {
            assert.equal((iso.getCodeList instanceof Function), true);
        });

        describe('should return NULL when', function() {
            const test = (...args) => {
                let result;

                if (args.length > 0) {
                    result = iso.getCodeList(...args);
                } else {
                    result = iso.getCodeList();
                }

                assert.equal(typeof result, 'object');
                assert.equal(result, null);
            };

            it('call without arguments', function() {
                test();
            });

            it('call with null', function() {
                test(null);
            });

            it('call with true', function() {
                test(true);
            });

            it('call with false', function() {
                test(false);
            });

            it('call with NaN', function() {
                test(NaN);
            });

            it('call with Function', function() {
                test(() => 10);
            });

            it('call with Number', function() {
                test(1);
            });

            it('call with Number as 0', function() {
                test(0);
            });

            it('call with float Number', function() {
                test(1.2);
            });

            it('call with empty String', function() {
                test('');
            });

            it('call with incorrect String', function() {
                test('string');
            });

            it('call with empty Array', function() {
                test([]);
            });

            it('call with Array with wrong element', function() {
                test([true, 'alpha3']);
            });

            it('call with empty Object', function() {
                test({});
            });

            it('call with Symbol', function() {
                test(Symbol('test'));
            });

            it('call with RegExp', function() {
                test(/^\d*$/);
            });

            it('call with multiple arguments where first is wrong', function() {
                test(true, 'alpha3');
            });
        });

        describe('should return objects list when', function() {
            const test = (...code) => {
                const result = iso.getCodeList(...code);

                const arr = [].concat(...code).reduce((prev, curr) => {
                    if (prev.indexOf(curr) === -1) {
                        prev.push(curr);
                    }
                    return prev;
                }, []);

                assert.deepEqual(typeof result, 'object');
                assert.deepEqual(Array.isArray(result), true);
                arr.forEach(val => {
                    assert.deepEqual(result.includes(iso.list[0][val]), true);
                });
            };

            it('call with code "alpha3"', function() {
                test('alpha3');
            });

            it('call with code "numeric"', function() {
                test('numeric');
            });

            it('call with code "alpha3" as array', function() {
                test(['alpha3']);
            });

            it('call with code "numeric" as array', function() {
                test(['numeric']);
            });

            it('call with codes "alpha3", "numeric" as array', function() {
                test(['alpha3', 'numeric']);
            });

            it('call with codes "alpha3", "numeric" as multiple arguments', function() {
                test('alpha3', 'numeric');
            });

            it('call with codes "alpha3", "numeric" as multiple double arguments', function() {
                test('alpha3', 'numeric', 'alpha3', 'numeric');
            });

            it('call with codes "alpha3", "numeric" as double array', function() {
                test(['alpha3', 'numeric'], ['alpha3', 'numeric']);
            });
        });
    });
});
