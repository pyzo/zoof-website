

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var utility;
        (function (utility) {
            'use strict';
            /**
             * Create a token with the given name.
             */
            function createToken(name) {
                return new Token(name);
            }
            utility.createToken = createToken;
            /**
             * A concrete implementation of IToken.
             */
            var Token = (function () {
                /**
                 * Construct a new token.
                 */
                function Token(name) {
                    this._m_name = name;
                }
                Object.defineProperty(Token.prototype, "name", {
                    /**
                     * A human readable name for the token.
                     */
                    get: function () {
                        return this._m_name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Token;
            })();
        })(utility = core.utility || (core.utility = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.utility

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var i_container;
        (function (i_container) {
            var createToken = core.utility.createToken;
            /**
             * The IContainer interface token.
             */
            i_container.IContainer = createToken('phosphor.core.i_container.IContainer');
        })(i_container = core.i_container || (core.i_container = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.i_container













/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var algorithm;
        (function (algorithm) {
            'use strict';
            /**
             * Returns the index of the first occurrence of the value.
             *
             * The semantics of `fromIndex` are the same as in `Array#indexOf`
             * except if `wrap` is true, the search will wrap around when the
             * end of the array is reached.
             */
            function indexOf(array, value, fromIndex, wrap) {
                if (fromIndex === void 0) { fromIndex = 0; }
                if (wrap === void 0) { wrap = false; }
                var n = array.length;
                var f = fromIndex | 0;
                if (f > n)
                    f = n;
                if (f < 0)
                    f += n;
                if (f < 0)
                    f = 0;
                for (var i = f; i < n; ++i) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                if (!wrap) {
                    return -1;
                }
                for (var i = 0; i < f; ++i) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                return -1;
            }
            algorithm.indexOf = indexOf;
            /**
             * Returns the index of the last occurrence of the value.
             *
             * The semantics of `fromIndex` are the same as in `Array#lastIndexOf`
             * except if `wrap` is true, the search will wrap around when the
             * front of the array is reached.
             */
            function lastIndexOf(array, value, fromIndex, wrap) {
                if (fromIndex === void 0) { fromIndex = array.length; }
                if (wrap === void 0) { wrap = false; }
                var n = array.length;
                var f = fromIndex | 0;
                if (f >= n)
                    f = n - 1;
                if (f < 0)
                    f += n;
                if (f < 0)
                    f = -1;
                for (var i = f; i >= 0; --i) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                if (!wrap) {
                    return -1;
                }
                for (var i = n - 1; i > f; --i) {
                    if (array[i] === value) {
                        return i;
                    }
                }
                return -1;
            }
            algorithm.lastIndexOf = lastIndexOf;
            /**
             * Find the index of the first value which matches the predicate.
             *
             * The semantics of `fromIndex` are the same as in `Array#indexOf`
             * except if `wrap` is true, the search will wrap around when the
             * end of the array is reached.
             */
            function findIndex(array, pred, fromIndex, wrap) {
                if (fromIndex === void 0) { fromIndex = 0; }
                if (wrap === void 0) { wrap = false; }
                var n = array.length;
                var f = fromIndex | 0;
                if (f > n)
                    f = n;
                if (f < 0)
                    f += n;
                if (f < 0)
                    f = 0;
                for (var i = f; i < n; ++i) {
                    if (pred(array[i])) {
                        return i;
                    }
                }
                if (!wrap) {
                    return -1;
                }
                for (var i = 0; i < f; ++i) {
                    if (pred(array[i])) {
                        return i;
                    }
                }
                return -1;
            }
            algorithm.findIndex = findIndex;
            /**
             * Find the index of the last value which matches the predicate.
             *
             * The semantics of `fromIndex` are the same as in `Array#lastIndexOf`
             * except if `wrap` is true, the search will wrap around when the
             * front of the array is reached.
             */
            function findLastIndex(array, pred, fromIndex, wrap) {
                if (fromIndex === void 0) { fromIndex = array.length; }
                if (wrap === void 0) { wrap = false; }
                var n = array.length;
                var f = fromIndex | 0;
                if (f >= n)
                    f = n - 1;
                if (f < 0)
                    f += n;
                if (f < 0)
                    f = -1;
                for (var i = f; i >= 0; --i) {
                    if (pred(array[i])) {
                        return i;
                    }
                }
                if (!wrap) {
                    return -1;
                }
                for (var i = n - 1; i > f; --i) {
                    if (pred(array[i])) {
                        return i;
                    }
                }
                return -1;
            }
            algorithm.findLastIndex = findLastIndex;
            /**
             * First the first value in the array which matches the predicate.
             */
            function find(array, pred, fromIndex, wrap) {
                var i = findIndex(array, pred, fromIndex, wrap);
                return i >= 0 ? array[i] : void 0;
            }
            algorithm.find = find;
            /**
             * Find the last value in the array which matches the predicate.
             */
            function findLast(array, pred, fromIndex, wrap) {
                var i = findLastIndex(array, pred, fromIndex, wrap);
                return i >= 0 ? array[i] : void 0;
            }
            algorithm.findLast = findLast;
            /**
             * Remove the first occurrence of the given value.
             *
             * Returns the index of the removed value.
             */
            function pull(array, value, fromIndex, wrap) {
                var i = indexOf(array, value, fromIndex, wrap);
                if (i === array.length - 1) {
                    array.pop();
                }
                else if (i === 0) {
                    array.shift();
                }
                else if (i > 0) {
                    array.splice(i, 1);
                }
                return i;
            }
            algorithm.pull = pull;
            /**
             * Remove the last occurrence of the given value.
             *
             * Returns the index of the removed value.
             */
            function pullLast(array, value, fromIndex, wrap) {
                var i = lastIndexOf(array, value, fromIndex, wrap);
                if (i === array.length - 1) {
                    array.pop();
                }
                else if (i === 0) {
                    array.shift();
                }
                else if (i > 0) {
                    array.splice(i, 1);
                }
                return i;
            }
            algorithm.pullLast = pullLast;
            /**
             * Remove all occurrences of the given value.
             */
            function pullAll(array, value) {
                for (var i = array.length - 1; i >= 0; --i) {
                    if (array[i] === value) {
                        if (i === array.length - 1) {
                            array.pop();
                        }
                        else if (i === 0) {
                            array.shift();
                        }
                        else {
                            array.splice(i, 1);
                        }
                    }
                }
            }
            algorithm.pullAll = pullAll;
            /**
             * Remove the first value which matches the predicate.
             *
             * Returns the value removed from the array.
             */
            function remove(array, pred, fromIndex, wrap) {
                var i = findIndex(array, pred, fromIndex, wrap);
                var value;
                if (i === array.length - 1) {
                    value = array.pop();
                }
                else if (i === 0) {
                    value = array.shift();
                }
                else if (i > 0) {
                    value = array.splice(i, 1)[0];
                }
                return value;
            }
            algorithm.remove = remove;
            /**
             * Remove the last value which matches the predicate.
             *
             * Returns the value removed from the array.
             */
            function removeLast(array, pred, fromIndex, wrap) {
                var i = findLastIndex(array, pred, fromIndex, wrap);
                var value;
                if (i === array.length - 1) {
                    value = array.pop();
                }
                else if (i === 0) {
                    value = array.shift();
                }
                else if (i > 0) {
                    value = array.splice(i, 1)[0];
                }
                return value;
            }
            algorithm.removeLast = removeLast;
            /**
             * Remove all values which match the predicate.
             */
            function removeAll(array, pred) {
                for (var i = array.length - 1; i >= 0; --i) {
                    if (pred(array[i])) {
                        if (i === array.length - 1) {
                            array.pop();
                        }
                        else if (i === 0) {
                            array.shift();
                        }
                        else {
                            array.splice(i, 1);
                        }
                    }
                }
            }
            algorithm.removeAll = removeAll;
            /**
             * Reverse an array in-place subject to an optional range.
             *
             * The start index is clamped to zero, the end index is clamped
             * to `length - 1`. If `start >= end`, the array is not modified.
             */
            function reverse(array, start, end) {
                if (start === void 0) { start = 0; }
                if (end === void 0) { end = array.length - 1; }
                var l = array.length - 1;
                var s = start | 0;
                var e = end | 0;
                if (s < 0)
                    s = 0;
                if (e > l)
                    e = l;
                while (s < e) {
                    var t = array[s];
                    array[s++] = array[e];
                    array[e--] = t;
                }
            }
            algorithm.reverse = reverse;
            /**
             * Perform a lower bound search on a sorted array.
             *
             * Returns the index of the first element which does not compare less
             * than the given value.
             */
            function lowerBound(array, value, cmp) {
                var begin = 0;
                var half;
                var middle;
                var n = array.length;
                while (n > 0) {
                    half = n >> 1;
                    middle = begin + half;
                    if (cmp(array[middle], value) < 0) {
                        begin = middle + 1;
                        n -= half + 1;
                    }
                    else {
                        n = half;
                    }
                }
                return begin;
            }
            algorithm.lowerBound = lowerBound;
            /**
             * Perform an upper bound search on a sorted array.
             *
             * Returns the index of the first element in which compares greater
             * than the given value.
             */
            function upperBound(array, value, cmp) {
                var begin = 0;
                var half;
                var middle;
                var n = array.length;
                while (n > 0) {
                    half = n >> 1;
                    middle = begin + half;
                    if (cmp(array[middle], value) > 0) {
                        n = half;
                    }
                    else {
                        begin = middle + 1;
                        n -= half + 1;
                    }
                }
                return begin;
            }
            algorithm.upperBound = upperBound;
            /**
             * Perform a binary search on a sorted array.
             *
             * Returns the index of the matching element, or -1.
             */
            function binarySearch(array, value, cmp) {
                var i = lowerBound(array, value, cmp);
                if (i === array.length) {
                    return -1;
                }
                return cmp(array[i], value) === 0 ? i : -1;
            }
            algorithm.binarySearch = binarySearch;
            /**
             * Perform a binary find on a sorted array.
             *
             * Returns the found element, or undefined.
             */
            function binaryFind(array, value, cmp) {
                var i = lowerBound(array, value, cmp);
                if (i === array.length) {
                    return void 0;
                }
                var item = array[i];
                return cmp(item, value) === 0 ? item : void 0;
            }
            algorithm.binaryFind = binaryFind;
            /**
             * Insert an element into a sorted array at its lower bound index.
             *
             * Returns the index of the inserted element.
             */
            function insortLower(array, value, cmp) {
                var i = lowerBound(array, value, cmp);
                if (i === array.length) {
                    array.push(value);
                }
                else {
                    array.splice(i, 0, value);
                }
                return i;
            }
            algorithm.insortLower = insortLower;
            /**
             * Insert an element into a sorted array at its upper bound index.
             *
             * Returns the index of the inserted element.
             */
            function insortUpper(array, value, cmp) {
                var i = upperBound(array, value, cmp);
                if (i === array.length) {
                    array.push(value);
                }
                else {
                    array.splice(i, 0, value);
                }
                return i;
            }
            algorithm.insortUpper = insortUpper;
            /**
             * Create a new array with consecutive duplicate elements removed.
             *
             * If the array is sorted, the result will have all unique elements.
             */
            function unique(array, eq) {
                var n = array.length;
                if (n === 0) {
                    return [];
                }
                var result = [array[0]];
                for (var i = 1, j = 0; i < n; ++i) {
                    var item = array[i];
                    if (!eq(result[j], item)) {
                        result.push(item);
                        ++j;
                    }
                }
                return result;
            }
            algorithm.unique = unique;
            /**
             * Create a sorted array set from an array of items.
             */
            function makeSet(array, cmp) {
                if (array.length === 0) {
                    return [];
                }
                return unique(array.slice().sort(cmp), function (a, b) { return cmp(a, b) === 0; });
            }
            algorithm.makeSet = makeSet;
            /**
             * Test whether two sorted arrays sets are disjoint.
             */
            function setIsDisjoint(first, second, cmp) {
                var i = 0, j = 0;
                var len1 = first.length;
                var len2 = second.length;
                while (i < len1 && j < len2) {
                    var v = cmp(first[i], second[j]);
                    if (v < 0) {
                        ++i;
                    }
                    else if (v > 0) {
                        ++j;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            algorithm.setIsDisjoint = setIsDisjoint;
            /**
             * Test whether one sorted array set is the subset of another.
             */
            function setIsSubset(first, second, cmp) {
                var len1 = first.length;
                var len2 = second.length;
                if (len1 > len2) {
                    return false;
                }
                var i = 0, j = 0;
                while (i < len1 && j < len2) {
                    var v = cmp(first[i], second[j]);
                    if (v < 0) {
                        return false;
                    }
                    else if (v > 0) {
                        ++j;
                    }
                    else {
                        ++i;
                        ++j;
                    }
                }
                return i == len1;
            }
            algorithm.setIsSubset = setIsSubset;
            /**
             * Create the set union of two sorted array sets.
             */
            function setUnion(first, second, cmp) {
                var i = 0, j = 0;
                var len1 = first.length;
                var len2 = second.length;
                var merged = [];
                while (i < len1 && j < len2) {
                    var a = first[i];
                    var b = second[j];
                    var v = cmp(a, b);
                    if (v < 0) {
                        merged.push(a);
                        ++i;
                    }
                    else if (v > 0) {
                        merged.push(b);
                        ++j;
                    }
                    else {
                        merged.push(a);
                        ++i;
                        ++j;
                    }
                }
                while (i < len1) {
                    merged.push(first[i]);
                    ++i;
                }
                while (j < len2) {
                    merged.push(second[j]);
                    ++j;
                }
                return merged;
            }
            algorithm.setUnion = setUnion;
            /**
             * Create the set intersection of two sorted array sets.
             */
            function setIntersection(first, second, cmp) {
                var i = 0, j = 0;
                var len1 = first.length;
                var len2 = second.length;
                var merged = [];
                while (i < len1 && j < len2) {
                    var a = first[i];
                    var b = second[j];
                    var v = cmp(a, b);
                    if (v < 0) {
                        ++i;
                    }
                    else if (v > 0) {
                        ++j;
                    }
                    else {
                        merged.push(a);
                        ++i;
                        ++j;
                    }
                }
                return merged;
            }
            algorithm.setIntersection = setIntersection;
            /**
             * Create the set difference of two sorted array sets.
             */
            function setDifference(first, second, cmp) {
                var i = 0, j = 0;
                var len1 = first.length;
                var len2 = second.length;
                var merged = [];
                while (i < len1 && j < len2) {
                    var a = first[i];
                    var b = second[j];
                    var v = cmp(a, b);
                    if (v < 0) {
                        merged.push(a);
                        ++i;
                    }
                    else if (v > 0) {
                        ++j;
                    }
                    else {
                        ++i;
                        ++j;
                    }
                }
                while (i < len1) {
                    merged.push(first[i]);
                    ++i;
                }
                return merged;
            }
            algorithm.setDifference = setDifference;
            /**
             * Create the set symmetric difference of two sorted array sets.
             */
            function setSymmetricDifference(first, second, cmp) {
                var i = 0, j = 0;
                var len1 = first.length;
                var len2 = second.length;
                var merged = [];
                while (i < len1 && j < len2) {
                    var a = first[i];
                    var b = second[j];
                    var v = cmp(a, b);
                    if (v < 0) {
                        merged.push(a);
                        ++i;
                    }
                    else if (v > 0) {
                        merged.push(b);
                        ++j;
                    }
                    else {
                        ++i;
                        ++j;
                    }
                }
                while (i < len1) {
                    merged.push(first[i]);
                    ++i;
                }
                while (j < len2) {
                    merged.push(second[j]);
                    ++j;
                }
                return merged;
            }
            algorithm.setSymmetricDifference = setSymmetricDifference;
        })(algorithm = core.algorithm || (core.algorithm = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.algorithm

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var container;
        (function (container) {
            'use strict';
            var algo = core.algorithm;
            /**
             * A concrete implementation of IContainer.
             */
            var Container = (function () {
                /**
                 * Construct a new container.
                 */
                function Container() {
                    this._m_registry = new Map();
                }
                /**
                 * Test whether a type id is registered with the container.
                 */
                Container.prototype.isRegistered = function (type) {
                    return this._m_registry.has(type);
                };
                /**
                 * Register a type mapping with the container.
                 *
                 * The default lifetime is transient.
                 *
                 * This will throw an exception if the id is already registered.
                 *
                 * Returns `this` to permit method chaining.
                 */
                Container.prototype.registerType = function (from, to, lifetime) {
                    if (lifetime === void 0) { lifetime = 'transient'; }
                    if (this._m_registry.has(from)) {
                        throw new Error('type is already registered');
                    }
                    var lt;
                    if (typeof lifetime === 'string') {
                        lt = createLifetime(lifetime);
                    }
                    else {
                        lt = lifetime;
                    }
                    this._m_registry.set(from, new RegistryItem(to, lt));
                    return this;
                };
                /**
                 * Register an instance with the container.
                 *
                 * This is the same as a singleton type registration, except that
                 * the user creates the instance of the type beforehand.
                 *
                 * This will throw an exception if the id is already registered.
                 *
                 * Returns `this` to permit method chaining.
                 */
                Container.prototype.registerInstance = function (type, instance) {
                    if (this._m_registry.has(type)) {
                        throw new Error('type is already registered');
                    }
                    var lt = new SingletonLifetime(instance);
                    this._m_registry.set(type, new RegistryItem(null, lt));
                    return this;
                };
                /**
                 * Get an instance of the requested type from the container.
                 *
                 * The overrides array takes precedence over the registered types.
                 */
                Container.prototype.resolve = function (type) {
                    var overrides = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        overrides[_i - 1] = arguments[_i];
                    }
                    var instance;
                    var reg = this._m_registry;
                    var key = resolveKeyTick++;
                    if (typeof type === 'function') {
                        instance = resolveType(reg, type, key, overrides);
                    }
                    else {
                        instance = resolveItem(reg, type, key, overrides);
                    }
                    return instance;
                };
                return Container;
            })();
            container.Container = Container;
            /**
             * An internal resolve key counter.
             */
            var resolveKeyTick = 0;
            /**
             * An object which holds the data for a type registration.
             */
            var RegistryItem = (function () {
                /**
                 * Construct a new registry item.
                 */
                function RegistryItem(type, lifetime) {
                    this.type = type;
                    this.lifetime = lifetime;
                }
                return RegistryItem;
            })();
            /**
             * A lifetime which never caches its object.
             */
            var TransientLifetime = (function () {
                function TransientLifetime() {
                }
                /**
                 * Get the cached object for the lifetime.
                 */
                TransientLifetime.prototype.getValue = function (key) {
                    return null;
                };
                /**
                 * Set the cached object for the lifetime.
                 */
                TransientLifetime.prototype.setValue = function (key, value) {
                };
                return TransientLifetime;
            })();
            /**
             * A lifetime which always caches its object.
             */
            var SingletonLifetime = (function () {
                /**
                 * Construct a new singleton lifetime.
                 */
                function SingletonLifetime(value) {
                    if (value === void 0) { value = null; }
                    this._m_value = value;
                }
                /**
                 * Get the cached object for the lifetime if one exists.
                 */
                SingletonLifetime.prototype.getValue = function (key) {
                    return this._m_value;
                };
                /**
                 * Set the cached object for the lifetime if needed.
                 */
                SingletonLifetime.prototype.setValue = function (key, value) {
                    this._m_value = value;
                };
                return SingletonLifetime;
            })();
            /**
             * A lifetime which caches the instance on a per-resolve basis.
             */
            var PerResolveLifetime = (function () {
                function PerResolveLifetime() {
                    this._m_key = 0;
                    this._m_value = null;
                }
                /**
                 * Get the cached object for the lifetime if one exists.
                 */
                PerResolveLifetime.prototype.getValue = function (key) {
                    return key === this._m_key ? this._m_value : null;
                };
                /**
                 * Set the cached object for the lifetime if needed.
                 */
                PerResolveLifetime.prototype.setValue = function (key, value) {
                    this._m_key = key;
                    this._m_value = value;
                };
                return PerResolveLifetime;
            })();
            /**
             * Only a single transient lifetime instance is ever needed.
             */
            var transientInstance = new TransientLifetime();
            /**
             * Create a lifetime object for the given string.
             */
            function createLifetime(lifetime) {
                if (lifetime === 'transient') {
                    return transientInstance;
                }
                if (lifetime === 'singleton') {
                    return new SingletonLifetime();
                }
                if (lifetime === 'perresolve') {
                    return new PerResolveLifetime();
                }
                throw new Error('invalid lifetime: ' + lifetime);
            }
            /**
             * Resolve an instance of the type from the registry.
             */
            function resolveItem(registry, type, key, overrides) {
                var instance = resolveOverride(registry, type, key, overrides);
                if (instance) {
                    return instance;
                }
                var item = registry.get(type);
                if (!item) {
                    throw new Error('type `' + type.name + '` is not registered');
                }
                instance = item.lifetime.getValue(key);
                if (instance) {
                    return instance;
                }
                instance = resolveType(registry, item.type, key, overrides);
                item.lifetime.setValue(key, instance);
                return instance;
            }
            /**
             * Resolve an instance of the type from the overrides array.
             */
            function resolveOverride(registry, type, key, overrides) {
                if (overrides.length === 0) {
                    return null;
                }
                var override = algo.find(overrides, function (ov) { return ov.type === type; });
                if (!override) {
                    return null;
                }
                if (typeof override.value === 'function') {
                    return resolveType(registry, override.value, key, overrides);
                }
                return override.value;
            }
            /**
             * Resolve an instance of the type by injecting it with its dependencies.
             */
            function resolveType(registry, type, key, overrides) {
                var deps = type.$inject;
                var instance = Object.create(type.prototype);
                if (!deps || deps.length === 0) {
                    return type.call(instance) || instance;
                }
                var args = new Array(deps.length);
                for (var i = 0, n = deps.length; i < n; ++i) {
                    args[i] = resolveItem(registry, deps[i], key, overrides);
                }
                return type.apply(instance, args) || instance;
            }
        })(container = core.container || (core.container = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.container

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var coreevent;
        (function (coreevent) {
            'use strict';
            /**
             * A concrete implementation of ICoreEvent.
             */
            var CoreEvent = (function () {
                /**
                 * Construct a new event.
                 */
                function CoreEvent(type) {
                    this._m_type = type;
                }
                Object.defineProperty(CoreEvent.prototype, "type", {
                    /**
                     * The type of the event.
                     */
                    get: function () {
                        return this._m_type;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CoreEvent;
            })();
            coreevent.CoreEvent = CoreEvent;
        })(coreevent = core.coreevent || (core.coreevent = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.coreevent

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var disposable;
        (function (disposable) {
            'use strict';
            /**
             * A concrete implementation of IDisposable.
             *
             * Instances of this class call a user provided function when disposed.
             */
            var Disposable = (function () {
                /**
                 * Construct a new disposable.
                 */
                function Disposable(callback) {
                    this._m_callback = callback;
                }
                /**
                 * Dispose the object by invoking the callback.
                 */
                Disposable.prototype.dispose = function () {
                    var callback = this._m_callback;
                    if (callback) {
                        this._m_callback = null;
                        callback();
                    }
                };
                return Disposable;
            })();
            disposable.Disposable = Disposable;
        })(disposable = core.disposable || (core.disposable = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.disposable

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var queue;
        (function (queue) {
            'use strict';
            /**
             * The maximum size of the queue link pool.
             */
            var MAX_POOL_SIZE = 10000;
            /**
             * A concrete implementation of IQueue.
             */
            var Queue = (function () {
                /**
                 * Construct a new queue.
                 */
                function Queue() {
                    this._m_length = 0;
                    this._m_front = null;
                    this._m_back = null;
                }
                Object.defineProperty(Queue.prototype, "length", {
                    /**
                     * The length of the queue.
                     */
                    get: function () {
                        return this._m_length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Queue.prototype, "empty", {
                    /**
                     * Whether the queue is empty.
                     */
                    get: function () {
                        return this._m_length === 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Queue.prototype, "front", {
                    /**
                     * The value at the front of the queue.
                     */
                    get: function () {
                        var front = this._m_front;
                        return front !== null ? front.value : void 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Queue.prototype, "back", {
                    /**
                     * The value at the back of the queue.
                     */
                    get: function () {
                        var back = this._m_back;
                        return back !== null ? back.value : void 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Execute a callback for each value in the queue.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                Queue.prototype.forEach = function (callback) {
                    var i = 0;
                    var link = this._m_front;
                    while (link !== null) {
                        callback(link.value, i++);
                        link = link.next;
                    }
                };
                /**
                 * Returns true if all values pass the given test.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                Queue.prototype.every = function (callback) {
                    var i = 0;
                    var link = this._m_front;
                    while (link !== null) {
                        if (!callback(link.value, i++)) {
                            return false;
                        }
                        link = link.next;
                    }
                    return true;
                };
                /**
                 * Returns true if any value passes the given test.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                Queue.prototype.some = function (callback) {
                    var i = 0;
                    var link = this._m_front;
                    while (link !== null) {
                        if (callback(link.value, i++)) {
                            return true;
                        }
                        link = link.next;
                    }
                    return false;
                };
                /**
                 * Push a value onto the back of the queue.
                 */
                Queue.prototype.push = function (value) {
                    var link = createLink(value);
                    if (this._m_back === null) {
                        this._m_front = link;
                        this._m_back = link;
                    }
                    else {
                        this._m_back.next = link;
                        this._m_back = link;
                    }
                    this._m_length++;
                };
                /**
                 * Pop and return the first value in the queue.
                 */
                Queue.prototype.pop = function () {
                    var link = this._m_front;
                    if (link === null) {
                        return void 0;
                    }
                    if (link.next === null) {
                        this._m_front = null;
                        this._m_back = null;
                    }
                    else {
                        this._m_front = link.next;
                    }
                    this._m_length--;
                    var value = link.value;
                    releaseLink(link);
                    return value;
                };
                /**
                 * Remove all values from the queue.
                 */
                Queue.prototype.clear = function () {
                    var link = this._m_front;
                    while (link !== null) {
                        var next = link.next;
                        releaseLink(link);
                        link = next;
                    }
                    this._m_length = 0;
                    this._m_front = null;
                    this._m_back = null;
                };
                return Queue;
            })();
            queue.Queue = Queue;
            /**
             * A link node in a queue.
             */
            var QueueLink = (function () {
                /**
                 * Construct a new queue link.
                 */
                function QueueLink(value) {
                    this.value = value;
                    /**
                     * The next link in the chain.
                     */
                    this.next = null;
                }
                return QueueLink;
            })();
            /**
             * A shared pool of queue links.
             */
            var pool = [];
            /**
             * Create a new link with the given value.
             *
             * This will use a link from the pool if available.
             */
            function createLink(value) {
                if (pool.length > 0) {
                    var link = pool.pop();
                    link.value = value;
                    return link;
                }
                return new QueueLink(value);
            }
            /**
             * Release a link back to the pool.
             */
            function releaseLink(link) {
                link.next = null;
                link.value = void 0;
                if (pool.length < MAX_POOL_SIZE) {
                    pool.push(link);
                }
            }
        })(queue = core.queue || (core.queue = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.queue

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var ringbuffer;
        (function (ringbuffer) {
            'use strict';
            /**
             * The absolute maximum buffer size allowed.
             */
            var MAX_BUFFER_SIZE = 4294967295;
            /**
             * A generic ring buffer container.
             *
             * A ring buffer is a queue with a maximum size and constant time access
             * to its elements. Once the ring buffer reaches its maximum size, newly
             * added elements will overwrite the oldest elements.
             */
            var RingBuffer = (function () {
                /**
                 * Construct a new ring buffer.
                 */
                function RingBuffer(maxLength) {
                    this._m_count = 0;
                    this._m_offset = 0;
                    this._m_items = [];
                    this._m_maxLength = clipLength(maxLength);
                }
                Object.defineProperty(RingBuffer.prototype, "maxLength", {
                    /**
                     * The maximum length of the buffer.
                     */
                    get: function () {
                        return this._m_maxLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RingBuffer.prototype, "length", {
                    /**
                     * The length of the buffer.
                     */
                    get: function () {
                        return this._m_count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RingBuffer.prototype, "empty", {
                    /**
                     * Whether the buffer is empty.
                     */
                    get: function () {
                        return this._m_count === 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RingBuffer.prototype, "front", {
                    /**
                     * The value at the front of the buffer.
                     */
                    get: function () {
                        if (this._m_count === 0) {
                            return void 0;
                        }
                        return this._m_items[this._m_offset];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RingBuffer.prototype, "back", {
                    /**
                     * The value at the back of the buffer.
                     */
                    get: function () {
                        if (this._m_count === 0) {
                            return void 0;
                        }
                        var index = this._m_offset + this._m_count - 1;
                        return this._m_items[index % this._m_maxLength];
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the value at the given index.
                 */
                RingBuffer.prototype.at = function (index) {
                    if (index < 0 || index >= this._m_count) {
                        return void 0;
                    }
                    return this._m_items[(index + this._m_offset) % this._m_maxLength];
                };
                /**
                 * Execute a callback for each value in the queue.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                RingBuffer.prototype.forEach = function (callback) {
                    var items = this._m_items;
                    var offset = this._m_offset;
                    var maxLength = this._m_maxLength;
                    for (var i = 0, n = this._m_count; i < n; ++i) {
                        callback(items[(offset + i) % maxLength], i);
                    }
                };
                /**
                 * Returns true if all values pass the given test.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                RingBuffer.prototype.every = function (callback) {
                    var items = this._m_items;
                    var offset = this._m_offset;
                    var maxLength = this._m_maxLength;
                    for (var i = 0, n = this._m_count; i < n; ++i) {
                        if (!callback(items[(offset + i) % maxLength], i)) {
                            return false;
                        }
                    }
                    return true;
                };
                /**
                 * Returns true if any value passes the given test.
                 *
                 * It is not safe to modify the queue while iterating.
                 */
                RingBuffer.prototype.some = function (callback) {
                    var items = this._m_items;
                    var offset = this._m_offset;
                    var maxLength = this._m_maxLength;
                    for (var i = 0, n = this._m_count; i < n; ++i) {
                        if (callback(items[(offset + i) % maxLength], i)) {
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * Push a value onto the back of the buffer.
                 */
                RingBuffer.prototype.push = function (value) {
                    var index = (this._m_offset + this._m_count) % this._m_maxLength;
                    if (this._m_count === this._m_maxLength) {
                        this._m_offset = (this._m_offset + 1) % this._m_maxLength;
                    }
                    else {
                        this._m_count++;
                    }
                    this._m_items[index] = value;
                };
                /**
                 * Pop and return the first value in the buffer.
                 */
                RingBuffer.prototype.pop = function () {
                    if (this._m_count === 0) {
                        return void 0;
                    }
                    var value = this._m_items[this._m_offset];
                    this._m_items[this._m_offset] = void 0;
                    if (--this._m_count === 0) {
                        this._m_offset = 0;
                    }
                    else {
                        this._m_offset = (this._m_offset + 1) % this._m_maxLength;
                    }
                    return value;
                };
                /**
                 * Remove all values from the buffer and release the buffer memory.
                 */
                RingBuffer.prototype.clear = function () {
                    this._m_count = 0;
                    this._m_offset = 0;
                    this._m_items.length = 0;
                };
                return RingBuffer;
            })();
            ringbuffer.RingBuffer = RingBuffer;
            /**
             * Clip a length to the allowed bounds for a ring buffer.
             */
            function clipLength(length) {
                return Math.max(1, Math.min(Math.floor(length), MAX_BUFFER_SIZE));
            }
        })(ringbuffer = core.ringbuffer || (core.ringbuffer = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.ringbuffer

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var eventloop;
        (function (eventloop) {
            'use strict';
            var Queue = core.queue.Queue;
            /**
             * Send an event to the event handler to process immediately.
             */
            function sendEvent(handler, event) {
                handler.hookEvent(event);
                if (!filterEvent(handler, event)) {
                    handler.processEvent(event);
                }
            }
            eventloop.sendEvent = sendEvent;
            /**
             * Post an event to the event handler to process in the future.
             */
            function postEvent(handler, event) {
                var postedEvents = ensureData(handler).postedEvents;
                if (postedEvents.empty || !handler.compressEvent(event, postedEvents)) {
                    postedEvents.push(event);
                    handlerQueue.push(handler);
                    wakeUpEventLoop();
                }
            }
            eventloop.postEvent = postEvent;
            /**
             * Send the first pending posted event to the event handler.
             */
            function sendPendingEvent(handler) {
                var data = handlerDataMap.get(handler);
                if (data === void 0) {
                    return;
                }
                var postedEvents = data.postedEvents;
                if (postedEvents.empty) {
                    return;
                }
                sendEvent(handler, postedEvents.pop());
            }
            eventloop.sendPendingEvent = sendPendingEvent;
            /**
             * Test whether the event handler has pending posted events.
             */
            function hasPendingEvents(handler) {
                var data = handlerDataMap.get(handler);
                return data !== void 0 && !data.postedEvents.empty;
            }
            eventloop.hasPendingEvents = hasPendingEvents;
            /**
             * Clear the pending posted events for the event handler.
             */
            function clearPendingEvents(handler) {
                var data = handlerDataMap.get(handler);
                if (data !== void 0) {
                    data.postedEvents.clear();
                }
            }
            eventloop.clearPendingEvents = clearPendingEvents;
            /**
             * Install an event filter for an event handler.
             *
             * An event filter is invoked after an event handler's `hookEvent`
             * method, but before its `processEvent` method. If the event filter
             * returns true from its `filterEvent` method, the processing of the
             * event will stop immediately.
             *
             * The most recently installed event filter is executed first. If the
             * given event filter is already installed, it is moved to the front
             * of the list.
             */
            function installEventFilter(handler, filter) {
                removeEventFilter(handler, filter);
                var data = ensureData(handler);
                var link = new EventFilterLink(filter);
                link.next = data.eventFilters;
                data.eventFilters = link;
            }
            eventloop.installEventFilter = installEventFilter;
            /**
             * Remove an event filter installed for an event handler.
             *
             * It is safe to call this function while the event filter is executing
             * or while the target event handler is processing events.
             *
             * If the given filter is not installed, this is a no-op.
             */
            function removeEventFilter(handler, filter) {
                var data = handlerDataMap.get(handler);
                if (data === void 0) {
                    return;
                }
                var prev = null;
                var link = data.eventFilters;
                while (link !== null) {
                    var next = link.next;
                    if (link.filter === filter) {
                        link.filter = null;
                        if (prev !== null) {
                            prev.next = next;
                        }
                        else {
                            data.eventFilters = next;
                        }
                        return;
                    }
                    prev = link;
                    link = next;
                }
            }
            eventloop.removeEventFilter = removeEventFilter;
            /**
             * The internal map of event handler data.
             */
            var handlerDataMap = new WeakMap();
            /**
             * The internal queue of posted event handlers.
             */
            var handlerQueue = new Queue();
            /**
             * The internal animation frame id for the event loop wake up call.
             */
            var frameId = 0;
            /**
             * A local reference to `requestAnimationFrame`.
             */
            var raf = requestAnimationFrame;
            /**
             * A node in a singly-linked event filter list.
             */
            var EventFilterLink = (function () {
                /**
                 * Construct a new event filter link.
                 */
                function EventFilterLink(filter) {
                    this.filter = filter;
                    /**
                     * The next link in the list.
                     */
                    this.next = null;
                }
                return EventFilterLink;
            })();
            /**
             * An object which holds data for an event handler.
             */
            var EventHandlerData = (function () {
                function EventHandlerData() {
                    /**
                     * The queue of posted events for the handler.
                     */
                    this.postedEvents = new Queue();
                    /**
                     * The event filters installed for the handler.
                     */
                    this.eventFilters = null;
                }
                return EventHandlerData;
            })();
            /**
             * Get the data object for an event handler, creating it if necessary.
             */
            function ensureData(handler) {
                var data = handlerDataMap.get(handler);
                if (data === void 0) {
                    data = new EventHandlerData();
                    handlerDataMap.set(handler, data);
                }
                return data;
            }
            /**
             * Filter the event using the installed event handlers.
             *
             * Returns true if the event should be filtered, false otherwise.
             */
            function filterEvent(handler, event) {
                var data = handlerDataMap.get(handler);
                if (data === void 0) {
                    return false;
                }
                var link = data.eventFilters;
                while (link !== null) {
                    if (link.filter !== null && link.filter.filterEvent(handler, event)) {
                        return true;
                    }
                    link = link.next;
                }
                return false;
            }
            /**
             * Wake up the event loop to process the pending handlers.
             *
             * If a wake up is pending or if there are no handlers, this is a no-op.
             */
            function wakeUpEventLoop() {
                if (frameId !== 0 || handlerQueue.empty) {
                    return;
                }
                frameId = raf(runEventLoop);
            }
            /**
             * The main event loop.
             *
             * This will process all pending handlers currently in the queue.
             * Event handlers which are added to the queue while the loop is
             * running will be processed on the next invocation of the loop.
             */
            function runEventLoop() {
                // Clear the frame id so the next wake up call can be scheduled.
                frameId = 0;
                // If the queue is empty, there is nothing else to do.
                if (handlerQueue.empty) {
                    return;
                }
                // Add a null sentinel value to the end of the queue. The queue
                // will only be processed up to the first null value. This means
                // that events posted during this cycle will execute on the next
                // cycle of the loop. If the last value in the array is null, it
                // means that an exception was thrown by an event handler and the
                // loop had to be restarted.
                if (handlerQueue.back !== null) {
                    handlerQueue.push(null);
                }
                while (!handlerQueue.empty) {
                    var handler = handlerQueue.pop();
                    if (handler === null) {
                        wakeUpEventLoop();
                        return;
                    }
                    dispatchHandler(handler);
                }
            }
            /**
             * Safely process the pending handler event.
             *
             * If the event handler throws an exception, the event loop will
             * be restarted and the exception will be rethrown.
             */
            function dispatchHandler(handler) {
                try {
                    sendPendingEvent(handler);
                }
                catch (ex) {
                    wakeUpEventLoop();
                    throw ex;
                }
            }
        })(eventloop = core.eventloop || (core.eventloop = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.eventloop

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var core;
    (function (core) {
        var signal;
        (function (signal) {
            'use strict';
            /**
             * A concrete implementation of ISignal.
             */
            var Signal = (function () {
                /**
                 * Construct a new signal.
                 */
                function Signal() {
                    this._m_front = null;
                    this._m_back = null;
                }
                /**
                 * Dispose of the resources held by the signal.
                 */
                Signal.prototype.dispose = function () {
                    this.clear();
                };
                /**
                 * Test whether a slot is connected to the signal.
                 */
                Signal.prototype.isConnected = function (slot, thisArg) {
                    var link = this._m_front;
                    while (link !== null) {
                        if (link.slot === slot && link.thisArg === thisArg) {
                            return true;
                        }
                        link = link.next;
                    }
                    return false;
                };
                /**
                 * Connect a slot to the signal.
                 *
                 * If the slot is connected multiple times, it will be invoked
                 * that same number of times when the signal is emitted.
                 *
                 * The slot will not be invoked until the next emission of the
                 * signal, even if it is connected while the signal is emitting.
                 *
                 * Slots are invoked in the order in which they are connected.
                 */
                Signal.prototype.connect = function (slot, thisArg) {
                    var link = new SlotLink(slot, thisArg);
                    if (this._m_back === null) {
                        this._m_front = link;
                        this._m_back = link;
                    }
                    else {
                        this._m_back.next = link;
                        this._m_back = link;
                    }
                };
                /**
                 * Disconnect a slot from the signal.
                 *
                 * This will remove all instances of the connected slot.
                 *
                 * The signal will not invoke the slot after it is disconnected,
                 * even if it is disconnected while the signal is emitting.
                 *
                 * If the slot is not connected, this is a no-op.
                 */
                Signal.prototype.disconnect = function (slot, thisArg) {
                    var prev = null;
                    var link = this._m_front;
                    while (link !== null) {
                        var next = link.next;
                        if (link.slot === slot && link.thisArg === thisArg) {
                            link.slot = null;
                            link.thisArg = null;
                            if (prev !== null) {
                                prev.next = next;
                            }
                            else {
                                this._m_front = next;
                            }
                            if (next === null) {
                                this._m_back = prev;
                            }
                        }
                        else {
                            prev = link;
                        }
                        link = next;
                    }
                };
                /**
                 * Emit the signal with the given sender and args.
                 *
                 * This invokes each slot synchronously in the order in which it was
                 * connected to the signal. If a slot throws an exception, it will
                 * be propagated to the caller and no further slots will execute.
                 */
                Signal.prototype.emit = function (sender, args) {
                    var link = this._m_front;
                    if (link === null) {
                        return;
                    }
                    var last = this._m_back.id;
                    while (link !== null && link.id <= last) {
                        if (link.slot !== null) {
                            link.slot.call(link.thisArg, sender, args);
                        }
                        link = link.next;
                    }
                };
                /**
                 * Disconnect all slots from the the signal.
                 */
                Signal.prototype.clear = function () {
                    var link = this._m_front;
                    while (link !== null) {
                        link.slot = null;
                        link.thisArg = null;
                        link = link.next;
                    }
                    this._m_front = null;
                    this._m_back = null;
                };
                return Signal;
            })();
            signal.Signal = Signal;
            /**
             * A monotonically increasing connection id.
             *
             * This is used to know when slots are added to a signal while the
             * signal is being emitted, so that emission can terminate before
             * the newly added slots are invoked.
             *
             * If a new connection were created 100 times a second, we would run
             * out of integer id's in ~2.8 million years.
             */
            var connectionIdTick = 0;
            /**
             * A node in a singly-linked slot list.
             */
            var SlotLink = (function () {
                /**
                 * Construct a new slot link.
                 */
                function SlotLink(slot, thisArg) {
                    this.slot = slot;
                    this.thisArg = thisArg;
                    /**
                     * The next link in the list.
                     */
                    this.next = null;
                    /**
                     * The id of this slot link.
                     */
                    this.id = connectionIdTick++;
                }
                return SlotLink;
            })();
        })(signal = core.signal || (core.signal = {}));
    })(core = phosphor.core || (phosphor.core = {}));
})(phosphor || (phosphor = {})); // module phosphor.core.signal
