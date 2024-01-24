const typeUtils = require('../type-utils');

const deepEquals = function (a, b) {
    if (!typeUtils.isObject(a) && !Array.isArray(a)) {
        return a === b;
    }
    if (!typeUtils.isObject(b) && !Array.isArray(b)) {
        return false;
    }
    for (let key of Object.keys(a)) {
        if (!deepEquals(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

module.exports = deepEquals;

if (require.main === module) {
    let object1 = {
        foo: 1,
        bar: {
            a: 'b',
            b: 'c',
            d: 'e',
            w: {
                o: {
                    w: {
                        soon: [-Infinity, +Infinity],
                        tm: true
                    },
                    s: undefined
                }
            }
        },
        baz: [1.1, 2.2, 3.3, 4.4],
        qux: true
    };
    let object2 = {
        foo: 1,
        bar: {
            a: 'b',
            b: 'c',
            d: 'e',
            w: {
                o: {
                    w: {
                        soon: [0, +Infinity], // Different
                        tm: true
                    },
                    s: null // Different
                }
            }
        },
        baz: [1.1, 2.2, 3.3, 4.4],
        qux: true
    };
    console.log(`object1: ${JSON.stringify(object1)}`);
    console.log(`object2: ${JSON.stringify(object2)}`);
    console.log(`deepEquals(object1, object2): ${deepEquals(object1, object2)}`);
}
