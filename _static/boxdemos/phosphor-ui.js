







/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var i_virtualelement;
        (function (i_virtualelement) {
        })(i_virtualelement = ui.i_virtualelement || (ui.i_virtualelement = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.i_virtualelement

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var geometry;
        (function (geometry) {
            'use strict';
            /**
             * The position of a two dimensional object.
             */
            var Point = (function () {
                /**
                 * Construct a new point.
                 */
                function Point(x, y) {
                    this._m_x = x;
                    this._m_y = y;
                }
                Object.defineProperty(Point.prototype, "x", {
                    /**
                     * The X coordinate of the point.
                     */
                    get: function () {
                        return this._m_x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Point.prototype, "y", {
                    /**
                     * The Y coordinate of the point.
                     */
                    get: function () {
                        return this._m_y;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Test whether the point is equivalent to another.
                 */
                Point.prototype.equals = function (other) {
                    return this._m_x === other._m_x && this._m_y === other._m_y;
                };
                return Point;
            })();
            geometry.Point = Point;
            /**
             * The size of a 2-dimensional object.
             */
            var Size = (function () {
                /**
                 * Construct a new size.
                 */
                function Size(width, height) {
                    this._m_width = width;
                    this._m_height = height;
                }
                Object.defineProperty(Size.prototype, "width", {
                    /**
                     * The width of the size.
                     */
                    get: function () {
                        return this._m_width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Size.prototype, "height", {
                    /**
                     * The height of the size.
                     */
                    get: function () {
                        return this._m_height;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Test whether the size is equivalent to another.
                 */
                Size.prototype.equals = function (other) {
                    return this._m_width === other._m_width && this._m_height === other._m_height;
                };
                return Size;
            })();
            geometry.Size = Size;
            /**
             * The position and size of a 2-dimensional object.
             */
            var Rect = (function () {
                /**
                 * Construct a new rect.
                 */
                function Rect(x, y, width, height) {
                    this._m_x = x;
                    this._m_y = y;
                    this._m_width = width;
                    this._m_height = height;
                }
                Object.defineProperty(Rect.prototype, "x", {
                    /**
                     * The X coordinate of the rect.
                     *
                     * This is equivalent to `left`.
                     */
                    get: function () {
                        return this._m_x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "y", {
                    /**
                     * The Y coordinate of the rect.
                     *
                     * This is equivalent to `top`.
                     */
                    get: function () {
                        return this._m_y;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "width", {
                    /**
                     * The width of the rect.
                     */
                    get: function () {
                        return this._m_width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "height", {
                    /**
                     * The height of the rect.
                     */
                    get: function () {
                        return this._m_height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "pos", {
                    /**
                     * The position of the rect.
                     *
                     * This is equivalent to `topLeft`.
                     */
                    get: function () {
                        return new Point(this._m_x, this._m_y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "size", {
                    /**
                     * The size of the rect.
                     */
                    get: function () {
                        return new Size(this._m_width, this._m_height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "top", {
                    /**
                     * The top edge of the rect.
                     *
                     * This is equivalent to `y`.
                     */
                    get: function () {
                        return this._m_y;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "left", {
                    /**
                     * The left edge of the rect.
                     *
                     * This is equivalent to `x`.
                     */
                    get: function () {
                        return this._m_x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "right", {
                    /**
                     * The right edge of the rect.
                     *
                     * This is equivalent to `x + width`.
                     */
                    get: function () {
                        return this._m_x + this._m_width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "bottom", {
                    /**
                     * The bottom edge of the rect.
                     *
                     * This is equivalent to `y + height`.
                     */
                    get: function () {
                        return this._m_y + this._m_height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "topLeft", {
                    /**
                     * The position of the top left corner of the rect.
                     *
                     * This is equivalent to `pos`.
                     */
                    get: function () {
                        return new Point(this._m_x, this._m_y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "topRight", {
                    /**
                     * The position of the top right corner of the rect.
                     */
                    get: function () {
                        return new Point(this._m_x + this._m_width, this._m_y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "bottomLeft", {
                    /**
                     * The position bottom left corner of the rect.
                     */
                    get: function () {
                        return new Point(this._m_x, this._m_y + this._m_height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Rect.prototype, "bottomRight", {
                    /**
                     * The position bottom right corner of the rect.
                     */
                    get: function () {
                        return new Point(this._m_x + this._m_width, this._m_y + this._m_height);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Test whether the rect is equivalent to another.
                 */
                Rect.prototype.equals = function (other) {
                    return this._m_x === other._m_x && this._m_y === other._m_y && this._m_width === other._m_width && this._m_height === other._m_height;
                };
                return Rect;
            })();
            geometry.Rect = Rect;
        })(geometry = ui.geometry || (ui.geometry = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.geometry

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var domutil;
        (function (domutil) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var Disposable = phosphor.core.disposable.Disposable;
            var Size = ui.geometry.Size;
            /**
             * Test whether a client position lies within a node.
             */
            function hitTest(node, x, y) {
                var rect = node.getBoundingClientRect();
                return x >= rect.left && x < rect.right && y >= rect.top && y < rect.bottom;
            }
            domutil.hitTest = hitTest;
            /**
             * The class name added to the document body on cursor override.
             */
            var CURSOR_OVERRIDE = 'p-cursor-override';
            /**
             * The internal stack holding the override cursors.
             */
            var cursorStack = [];
            /**
             * Remove an item from the cursor stack and update the cursor.
             */
            function removeCursorItem(item) {
                algo.pull(cursorStack, item);
                var cursor = '';
                var body = document.body;
                if (cursorStack.length === 0) {
                    body.classList.remove(CURSOR_OVERRIDE);
                }
                else {
                    cursor = cursorStack[cursorStack.length - 1].cursor;
                }
                var style = body.style;
                if (style.cursor !== cursor) {
                    style.cursor = cursor;
                }
            }
            /**
             * Override the cursor for the entire document.
             *
             * Returns an IDisposable which will clear the override.
             */
            function overrideCursor(cursor) {
                var body = document.body;
                if (cursorStack.length === 0) {
                    body.classList.add(CURSOR_OVERRIDE);
                }
                var style = body.style;
                if (style.cursor !== cursor) {
                    style.cursor = cursor;
                }
                var item = { cursor: cursor };
                cursorStack.push(item);
                return new Disposable(function () { return removeCursorItem(item); });
            }
            domutil.overrideCursor = overrideCursor;
            /**
             * The box data prototype object used by `createBoxData`.
             */
            var boxDataProto = {
                get borderTop() {
                    return this._m_bt;
                },
                get borderLeft() {
                    return this._m_bl;
                },
                get borderRight() {
                    return this._m_br;
                },
                get borderBottom() {
                    return this._m_bb;
                },
                get paddingTop() {
                    return this._m_pt;
                },
                get paddingLeft() {
                    return this._m_pl;
                },
                get paddingRight() {
                    return this._m_pr;
                },
                get paddingBottom() {
                    return this._m_pb;
                },
                get verticalSum() {
                    return this._m_bt + this._m_bb + this._m_pt + this._m_pb;
                },
                get horizontalSum() {
                    return this._m_bl + this._m_br + this._m_pl + this._m_pr;
                },
                _m_bt: 0,
                _m_bl: 0,
                _m_br: 0,
                _m_bb: 0,
                _m_pt: 0,
                _m_pl: 0,
                _m_pr: 0,
                _m_pb: 0,
            };
            /**
             * Create a box data object for the given node.
             *
             * The values of the returned object are read only.
             */
            function createBoxData(node) {
                var style = window.getComputedStyle(node);
                var bt = parseInt(style.borderTopWidth, 10) || 0;
                var bl = parseInt(style.borderLeftWidth, 10) || 0;
                var br = parseInt(style.borderRightWidth, 10) || 0;
                var bb = parseInt(style.borderBottomWidth, 10) || 0;
                var pt = parseInt(style.paddingTop, 10) || 0;
                var pl = parseInt(style.paddingLeft, 10) || 0;
                var pr = parseInt(style.paddingRight, 10) || 0;
                var pb = parseInt(style.paddingBottom, 10) || 0;
                var data = Object.create(boxDataProto);
                if (bt !== 0)
                    data._m_bt = bt;
                if (bl !== 0)
                    data._m_bl = bl;
                if (br !== 0)
                    data._m_br = br;
                if (bb !== 0)
                    data._m_bb = bb;
                if (pt !== 0)
                    data._m_pt = pt;
                if (pl !== 0)
                    data._m_pl = pl;
                if (pr !== 0)
                    data._m_pr = pr;
                if (pb !== 0)
                    data._m_pb = pb;
                return data;
            }
            domutil.createBoxData = createBoxData;
            /**
             * The internal text measuring context.
             */
            var textCtxt = null;
            /**
             * Mesure the width of a string using the given font.
             */
            function measureTextWidth(text, font) {
                if (!textCtxt) {
                    var canvas = document.createElement('canvas');
                    textCtxt = canvas.getContext('2d');
                }
                textCtxt.font = font;
                return textCtxt.measureText(text).width;
            }
            domutil.measureTextWidth = measureTextWidth;
            /**
             * Compute a natural size for the given DOM node.
             *
             * This should only be called for block-level nodes which are attached
             * to the DOM and are visible on the page.
             *
             * This can be an expensive operation, so the results should be cached.
             */
            function naturalSize(node) {
                var style = node.style;
                var boxSizing = style.boxSizing;
                var position = style.position;
                var top = style.top;
                var left = style.left;
                var right = style.right;
                var bottom = style.bottom;
                var width = style.width;
                var height = style.height;
                style.boxSizing = 'border-box';
                style.position = 'absolute';
                style.top = '0';
                style.left = '0';
                style.right = 'auto';
                style.bottom = 'auto';
                style.width = 'auto';
                style.height = 'auto';
                var rect = node.getBoundingClientRect();
                style.boxSizing = boxSizing;
                style.position = position;
                style.top = top;
                style.left = left;
                style.right = right;
                style.bottom = bottom;
                style.width = width;
                style.height = height;
                // IE11 reports fractional result which are just a touch too small
                // and cause text to be elided. The results are ceiled in order to
                // prevent this. This doesn't cause a problem for Chrome or Firefox,
                // and it's better to be 1px too big than too small.
                var w = Math.ceil(rect.width);
                var h = Math.ceil(rect.height);
                return new Size(w, h);
            }
            domutil.naturalSize = naturalSize;
        })(domutil = ui.domutil || (ui.domutil = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.domutil

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var enums;
        (function (enums) {
            'use strict';
            /**
             * An enum of widget bit flags.
             */
            (function (WidgetFlag) {
                /**
                 * The widget is attached to the DOM.
                 */
                WidgetFlag[WidgetFlag["IsAttached"] = 0x1] = "IsAttached";
                /**
                 * The widget is explicitly hidden.
                 */
                WidgetFlag[WidgetFlag["IsHidden"] = 0x2] = "IsHidden";
                /**
                 * The widget is visible.
                 */
                WidgetFlag[WidgetFlag["IsVisible"] = 0x4] = "IsVisible";
                /**
                 * The widget has been disposed.
                 */
                WidgetFlag[WidgetFlag["IsDisposed"] = 0x8] = "IsDisposed";
                /**
                 * Changing the widget layout is disallowed.
                 */
                WidgetFlag[WidgetFlag["DisallowLayoutChange"] = 0x10] = "DisallowLayoutChange";
            })(enums.WidgetFlag || (enums.WidgetFlag = {}));
            var WidgetFlag = enums.WidgetFlag;
            /**
             * An enum of alignment bit flags.
             */
            (function (Alignment) {
                /**
                 * Align with the left edge.
                 */
                Alignment[Alignment["Left"] = 0x1] = "Left";
                /**
                 * Align with the right edge.
                 */
                Alignment[Alignment["Right"] = 0x2] = "Right";
                /**
                 * Align with the horizontal center.
                 */
                Alignment[Alignment["HCenter"] = 0x4] = "HCenter";
                /**
                 * Align with the top edge.
                 */
                Alignment[Alignment["Top"] = 0x10] = "Top";
                /**
                 * Align with the bottom edge.
                 */
                Alignment[Alignment["Bottom"] = 0x20] = "Bottom";
                /**
                 * Align with the vertical center.
                 */
                Alignment[Alignment["VCenter"] = 0x40] = "VCenter";
                /**
                 * Align with the horizontal and vertical center.
                 */
                Alignment[Alignment["Center"] = Alignment.HCenter | Alignment.VCenter] = "Center";
                /**
                 * A mask of horizontal alignment values.
                 */
                Alignment[Alignment["H_Mask"] = Alignment.Left | Alignment.Right | Alignment.HCenter] = "H_Mask";
                /**
                 * A mask of vertical alignment values.
                 */
                Alignment[Alignment["V_Mask"] = Alignment.Top | Alignment.Bottom | Alignment.VCenter] = "V_Mask";
            })(enums.Alignment || (enums.Alignment = {}));
            var Alignment = enums.Alignment;
            /**
             * An enum of orientation bit flags.
             */
            (function (Orientation) {
                /**
                 * Horizontal orientation.
                 */
                Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
                /**
                 * Vertical orientation.
                 */
                Orientation[Orientation["Vertical"] = 1] = "Vertical";
            })(enums.Orientation || (enums.Orientation = {}));
            var Orientation = enums.Orientation;
            /**
             * An enum of direction values.
             */
            (function (Direction) {
                /**
                 * Left to right direction.
                 */
                Direction[Direction["LeftToRight"] = 0] = "LeftToRight";
                /**
                 * Right to left direction.
                 */
                Direction[Direction["RightToLeft"] = 1] = "RightToLeft";
                /**
                 * Top to bottom direction.
                 */
                Direction[Direction["TopToBottom"] = 2] = "TopToBottom";
                /**
                 * Bottom to top direction.
                 */
                Direction[Direction["BottomToTop"] = 3] = "BottomToTop";
            })(enums.Direction || (enums.Direction = {}));
            var Direction = enums.Direction;
            /**
             * An enum of size policy values.
             *
             * Size policy controls how a layout interprets a widget's `sizeHint`.
             */
            (function (SizePolicy) {
                /**
                 * A policy indicating that the `sizeHint` is the only acceptable
                 * size for the widget.
                 */
                SizePolicy[SizePolicy["Fixed"] = 0] = "Fixed";
                /**
                 * A bit flag indicating the widget can grow beyond `sizeHint`.
                 */
                SizePolicy[SizePolicy["GrowFlag"] = 0x1] = "GrowFlag";
                /**
                 * A bit flag indicating the widget can shrink below `sizeHint`.
                 */
                SizePolicy[SizePolicy["ShrinkFlag"] = 0x2] = "ShrinkFlag";
                /**
                 * A bit flag indicating the widget should expand beyond `sizeHint`.
                 */
                SizePolicy[SizePolicy["ExpandFlag"] = 0x4] = "ExpandFlag";
                /**
                 * A bit flag indicating the `sizeHint` is ignored.
                 */
                SizePolicy[SizePolicy["IgnoreFlag"] = 0x8] = "IgnoreFlag";
                /**
                 * A policy indicating that the `sizeHint` is a minimum, but the
                 * widget can be expanded if needed and still be useful.
                 */
                SizePolicy[SizePolicy["Minimum"] = SizePolicy.GrowFlag] = "Minimum";
                /**
                 * A policy indicating that the `sizeHint` is a maximum, but the
                 * widget can be shrunk if needed and still be useful.
                 */
                SizePolicy[SizePolicy["Maximum"] = SizePolicy.ShrinkFlag] = "Maximum";
                /**
                 * A policy indicating that the `sizeHint` is preferred, but the
                 * widget can grow or shrink if needed and still be useful.
                 *
                 * This is the default size policy.
                 */
                SizePolicy[SizePolicy["Preferred"] = SizePolicy.GrowFlag | SizePolicy.ShrinkFlag] = "Preferred";
                /**
                 * A policy indicating that `sizeHint` is reasonable, but the widget
                 * can shrink if needed and still be useful. It can also make use of
                 * extra space and should expand as much as possible.
                 */
                SizePolicy[SizePolicy["Expanding"] = SizePolicy.GrowFlag | SizePolicy.ShrinkFlag | SizePolicy.ExpandFlag] = "Expanding";
                /**
                 * A policy indicating that `sizeHint` is a minimum. The widget can
                 * make use of extra space and should expand as much as possible.
                 */
                SizePolicy[SizePolicy["MinimumExpanding"] = SizePolicy.GrowFlag | SizePolicy.ExpandFlag] = "MinimumExpanding";
                /**
                 * A policy indicating the `sizeHint` is ignored.
                 */
                SizePolicy[SizePolicy["Ignored"] = SizePolicy.GrowFlag | SizePolicy.ShrinkFlag | SizePolicy.IgnoreFlag] = "Ignored";
            })(enums.SizePolicy || (enums.SizePolicy = {}));
            var SizePolicy = enums.SizePolicy;
            /**
             * The available docking modes for a dock area.
             */
            (function (DockMode) {
                /**
                 * Insert the widget at the top of the dock area.
                 */
                DockMode[DockMode["Top"] = 0] = "Top";
                /**
                 * Insert the widget at the left of the dock area.
                 */
                DockMode[DockMode["Left"] = 1] = "Left";
                /**
                 * Insert the widget at the right of the dock area.
                 */
                DockMode[DockMode["Right"] = 2] = "Right";
                /**
                 * Insert the widget at the bottom of the dock area.
                 */
                DockMode[DockMode["Bottom"] = 3] = "Bottom";
                /**
                 * Insert the widget as a new split item above the reference.
                 */
                DockMode[DockMode["SplitTop"] = 4] = "SplitTop";
                /**
                 * Insert the widget as a new split item to the left of the reference.
                 */
                DockMode[DockMode["SplitLeft"] = 5] = "SplitLeft";
                /**
                 * Insert the widget as a new split item to the right of the reference.
                 */
                DockMode[DockMode["SplitRight"] = 6] = "SplitRight";
                /**
                 * Insert the widget as a new split item below the reference.
                 */
                DockMode[DockMode["SplitBottom"] = 7] = "SplitBottom";
                /**
                 * Insert the widget as a new tab before the reference.
                 */
                DockMode[DockMode["TabBefore"] = 8] = "TabBefore";
                /**
                 * Insert the widget as a new tab after the reference.
                 */
                DockMode[DockMode["TabAfter"] = 9] = "TabAfter";
            })(enums.DockMode || (enums.DockMode = {}));
            var DockMode = enums.DockMode;
            /**
             * An enum of supported virtual element types.
             */
            (function (VirtualElementType) {
                /**
                 * The element represents a text node.
                 */
                VirtualElementType[VirtualElementType["Text"] = 0] = "Text";
                /**
                 * The element represents an HTMLElement node.
                 */
                VirtualElementType[VirtualElementType["Node"] = 1] = "Node";
                /**
                 * The element represents a component.
                 */
                VirtualElementType[VirtualElementType["Component"] = 2] = "Component";
            })(enums.VirtualElementType || (enums.VirtualElementType = {}));
            var VirtualElementType = enums.VirtualElementType;
        })(enums = ui.enums || (ui.enums = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.enums

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var eventtypes;
        (function (eventtypes) {
            'use strict';
            var CoreEvent = phosphor.core.coreevent.CoreEvent;
            /**
             * A singleton 'before-show' event.
             */
            eventtypes.EVT_BEFORE_SHOW = new CoreEvent('before-show');
            /**
             * A singleton 'after-show' event.
             */
            eventtypes.EVT_AFTER_SHOW = new CoreEvent('after-show');
            /**
             * A singleton 'before-hide' event.
             */
            eventtypes.EVT_BEFORE_HIDE = new CoreEvent('before-hide');
            /**
             * A singleton 'after-hide' event.
             */
            eventtypes.EVT_AFTER_HIDE = new CoreEvent('after-hide');
            /**
             * A singleton 'before-attach' event.
             */
            eventtypes.EVT_BEFORE_ATTACH = new CoreEvent('before-attach');
            /**
             * A singleton 'after-attach' event.
             */
            eventtypes.EVT_AFTER_ATTACH = new CoreEvent('after-attach');
            /**
             * A singleton 'before-detach' event.
             */
            eventtypes.EVT_BEFORE_DETACH = new CoreEvent('before-detach');
            /**
             * A singleton 'after-detach' event.
             */
            eventtypes.EVT_AFTER_DETACH = new CoreEvent('after-detach');
            /**
             * A singleton 'parent-changed' event.
             */
            eventtypes.EVT_PARENT_CHANGED = new CoreEvent('parent-changed');
            /**
             * A singleton 'layout-changed' event.
             */
            eventtypes.EVT_LAYOUT_CHANGED = new CoreEvent('layout-changed');
            /**
             * A singleton 'layout-request' event.
             */
            eventtypes.EVT_LAYOUT_REQUEST = new CoreEvent('layout-request');
            /**
             * A singleton 'render-request' event.
             */
            eventtypes.EVT_RENDER_REQUEST = new CoreEvent('render-request');
            /**
             * A singleton 'before-render' request.
             */
            eventtypes.EVT_BEFORE_RENDER = new CoreEvent('before-render');
            /**
             * A singleton 'after-render' request.
             */
            eventtypes.EVT_AFTER_RENDER = new CoreEvent('after-render');
            /**
             * A singleton 'close' event.
             */
            eventtypes.EVT_CLOSE = new CoreEvent('close');
            /**
             * An event class for child related events.
             *
             * The current child event types are:
             * - 'child-added'
             * - 'child-removed'
             * - 'child-shown'
             * - 'child-hidden'
             */
            var ChildEvent = (function (_super) {
                __extends(ChildEvent, _super);
                /**
                 * Construct a new child event.
                 */
                function ChildEvent(type, child) {
                    _super.call(this, type);
                    this._m_child = child;
                }
                Object.defineProperty(ChildEvent.prototype, "child", {
                    /**
                     * The child widget for the event.
                     */
                    get: function () {
                        return this._m_child;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ChildEvent;
            })(CoreEvent);
            eventtypes.ChildEvent = ChildEvent;
            // TODO consider using a pool for move events
            /**
             * An event class for 'move' events.
             */
            var MoveEvent = (function (_super) {
                __extends(MoveEvent, _super);
                /**
                 * Construct a new move event.
                 */
                function MoveEvent(oldX, oldY, x, y) {
                    _super.call(this, 'move');
                    this._m_oldX = oldX;
                    this._m_oldY = oldY;
                    this._m_x = x;
                    this._m_y = y;
                }
                Object.defineProperty(MoveEvent.prototype, "oldX", {
                    /**
                     * The old X coordinate of the widget.
                     */
                    get: function () {
                        return this._m_oldX;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MoveEvent.prototype, "oldY", {
                    /**
                     * The old Y coordinate of the widget.
                     */
                    get: function () {
                        return this._m_oldY;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MoveEvent.prototype, "x", {
                    /**
                     * The current X coordinate of the widget.
                     */
                    get: function () {
                        return this._m_x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MoveEvent.prototype, "y", {
                    /**
                     * The current Y coordinate of the widget.
                     */
                    get: function () {
                        return this._m_y;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MoveEvent;
            })(CoreEvent);
            eventtypes.MoveEvent = MoveEvent;
            // TODO consider using a pool for resize events
            /**
             * An event class for 'resize' events.
             */
            var ResizeEvent = (function (_super) {
                __extends(ResizeEvent, _super);
                /**
                 * Construct a new resize event.
                 */
                function ResizeEvent(oldWidth, oldHeight, width, height) {
                    _super.call(this, 'resize');
                    this._m_oldWidth = oldWidth;
                    this._m_oldHeight = oldHeight;
                    this._m_width = width;
                    this._m_height = height;
                }
                Object.defineProperty(ResizeEvent.prototype, "oldWidth", {
                    /**
                     * The old width of the widget.
                     */
                    get: function () {
                        return this._m_oldWidth;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizeEvent.prototype, "oldHeight", {
                    /**
                     * The old height of the widget.
                     */
                    get: function () {
                        return this._m_oldHeight;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizeEvent.prototype, "width", {
                    /**
                     * The current width of the widget.
                     */
                    get: function () {
                        return this._m_width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResizeEvent.prototype, "height", {
                    /**
                     * The current height of the widget.
                     */
                    get: function () {
                        return this._m_height;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ResizeEvent;
            })(CoreEvent);
            eventtypes.ResizeEvent = ResizeEvent;
        })(eventtypes = ui.eventtypes || (ui.eventtypes = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.eventtypes

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var widget;
        (function (_widget) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var clearPendingEvents = phosphor.core.eventloop.clearPendingEvents;
            var postEvent = phosphor.core.eventloop.postEvent;
            var sendEvent = phosphor.core.eventloop.sendEvent;
            var Signal = phosphor.core.signal.Signal;
            var createBoxData = ui.domutil.createBoxData;
            var SizePolicy = ui.enums.SizePolicy;
            var WidgetFlag = ui.enums.WidgetFlag;
            var ChildEvent = ui.eventtypes.ChildEvent;
            var EVT_AFTER_ATTACH = ui.eventtypes.EVT_AFTER_ATTACH;
            var EVT_AFTER_DETACH = ui.eventtypes.EVT_AFTER_DETACH;
            var EVT_AFTER_HIDE = ui.eventtypes.EVT_AFTER_HIDE;
            var EVT_AFTER_SHOW = ui.eventtypes.EVT_AFTER_SHOW;
            var EVT_BEFORE_ATTACH = ui.eventtypes.EVT_BEFORE_ATTACH;
            var EVT_BEFORE_DETACH = ui.eventtypes.EVT_BEFORE_DETACH;
            var EVT_BEFORE_HIDE = ui.eventtypes.EVT_BEFORE_HIDE;
            var EVT_BEFORE_SHOW = ui.eventtypes.EVT_BEFORE_SHOW;
            var EVT_CLOSE = ui.eventtypes.EVT_CLOSE;
            var EVT_LAYOUT_CHANGED = ui.eventtypes.EVT_LAYOUT_CHANGED;
            var EVT_LAYOUT_REQUEST = ui.eventtypes.EVT_LAYOUT_REQUEST;
            var EVT_PARENT_CHANGED = ui.eventtypes.EVT_PARENT_CHANGED;
            var MoveEvent = ui.eventtypes.MoveEvent;
            var ResizeEvent = ui.eventtypes.ResizeEvent;
            var Point = ui.geometry.Point;
            var Size = ui.geometry.Size;
            var Rect = ui.geometry.Rect;
            /**
             * The class name added to Widget instances.
             */
            var WIDGET_CLASS = 'p-Widget';
            /**
             * The class name added to hidden widgets.
             */
            var HIDDEN_CLASS = 'p-hidden';
            /**
             * The base class of the Phosphor widget hierarchy.
             */
            var Widget = (function () {
                /**
                 * Construct a new widget.
                 */
                function Widget() {
                    this._m_flags = 0;
                    this._m_extra = createExtra();
                    this._m_parent = null;
                    this._m_layout = null;
                    this._m_children = [];
                    this._m_disposed = new Signal();
                    this._m_node = this.createNode();
                    this.classList.add(WIDGET_CLASS);
                }
                /**
                 * Dispose of the widget and its descendants.
                 *
                 * The widget should be discarded after calling this method.
                 */
                Widget.prototype.dispose = function () {
                    // Set the disposed flag before taking any action. This allows
                    // user code triggered by the `disposed` signal to test whether
                    // the widget is disposed.
                    this.setFlag(8 /* IsDisposed */);
                    // Clear any posted events before potentially invoking user code.
                    clearPendingEvents(this);
                    // Allow user code to a chance to cleanup resources or take action
                    // in response to the widget being disposed.
                    this._m_disposed.emit(this, void 0);
                    this._m_disposed.dispose();
                    // Remove the widget from its parent or detach it from the DOM.
                    // The parent references on the children are cleared before they
                    // are disposed, so the expensive path is only taken for the
                    // widget at the root of the disposal tree.
                    var parent = this._m_parent;
                    if (parent) {
                        this._m_parent = null;
                        algo.pull(parent._m_children, this);
                        sendEvent(parent, new ChildEvent('child-removed', this));
                    }
                    else if (this.isAttached) {
                        this.detach();
                    }
                    // Drop what should be the last reference to the DOM node.
                    this._m_node = null;
                    // Dispose of the layout.
                    var layout = this._m_layout;
                    if (layout) {
                        this._m_layout = null;
                        layout.dispose();
                    }
                    // Dispose of the children. A child's parent reference is first
                    // cleared so that it does not try to recursively remove itself.
                    var children = this._m_children;
                    if (children) {
                        for (var i = 0; i < children.length; ++i) {
                            var child = children[i];
                            if (!child)
                                continue;
                            children[i] = null;
                            child._m_parent = null;
                            child.dispose();
                        }
                        this._m_children = null;
                    }
                };
                Object.defineProperty(Widget.prototype, "disposed", {
                    /**
                     * A signal emitted when the widget is disposed.
                     */
                    get: function () {
                        return this._m_disposed;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "parent", {
                    /**
                     * Get the parent widget of the widget.
                     */
                    get: function () {
                        return this._m_parent;
                    },
                    /**
                     * Set the parent widget of the widget.
                     */
                    set: function (parent) {
                        parent = parent || null;
                        var old = this._m_parent;
                        if (old === parent) {
                            return;
                        }
                        if (old) {
                            this._m_parent = null;
                            algo.pull(old._m_children, this);
                            sendEvent(old, new ChildEvent('child-removed', this));
                        }
                        if (parent) {
                            this._m_parent = parent;
                            parent._m_children.push(this);
                            sendEvent(parent, new ChildEvent('child-added', this));
                        }
                        sendEvent(this, EVT_PARENT_CHANGED);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "layout", {
                    /**
                     * Get the layout associated with the widget.
                     */
                    get: function () {
                        return this._m_layout;
                    },
                    /**
                     * Set the layout associated with the widget.
                     *
                     * The given layout must be a new layout not assigned to any other
                     * widget or an exception will be raised. A null layout is allowed.
                     *
                     * The current layout will be disposed and cannot be reused.
                     */
                    set: function (layout) {
                        layout = layout || null;
                        var old = this._m_layout;
                        if (old === layout) {
                            return;
                        }
                        if (this.testFlag(16 /* DisallowLayoutChange */)) {
                            throw new Error('cannot change widget layout');
                        }
                        if (layout && layout.parentWidget) {
                            throw new Error('layout already installed on a widget');
                        }
                        if (old) {
                            this._m_layout = null;
                            old.dispose();
                        }
                        if (layout) {
                            this._m_layout = layout;
                            layout.parentWidget = this;
                        }
                        sendEvent(this, EVT_LAYOUT_CHANGED);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "name", {
                    /**
                     * Get the name of the widget.
                     *
                     * The widget name can be used to identify the widget in various
                     * contexts. It does not have a visual representation and is not
                     * stored in the DOM node.
                     *
                     * The default name is an empty string.
                     */
                    get: function () {
                        return this._m_extra.name;
                    },
                    /**
                     * Set the name of the widget.
                     *
                     * The widget name can be used to identify the widget in various
                     * contexts. It does not have a visual representation and is not
                     * stored in the DOM node.
                     *
                     * This should typically by set to a unique value.
                     */
                    set: function (name) {
                        if (name === this._m_extra.name) {
                            return;
                        }
                        this._m_extra.name = name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "node", {
                    /**
                     * Get the DOM node managed by the widget.
                     */
                    get: function () {
                        return this._m_node;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "id", {
                    /**
                     * Get the id of the widget's DOM node.
                     */
                    get: function () {
                        return this._m_node.id;
                    },
                    /**
                     * Set the id of the widget's DOM node.
                     */
                    set: function (value) {
                        this._m_node.id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "classList", {
                    /**
                     * Get the class list for the widget's DOM node.
                     */
                    get: function () {
                        return this._m_node.classList;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "x", {
                    /**
                     * Get the X position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.x;
                    },
                    /**
                     * Set the X position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (x) {
                        this.move(x, this._m_extra.y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "y", {
                    /**
                     * Get the Y position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.y;
                    },
                    /**
                     * Set the Y position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (y) {
                        this.move(this._m_extra.x, y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "width", {
                    /**
                     * Get the width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.width;
                    },
                    /**
                     * Set the width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (width) {
                        this.resize(width, this._m_extra.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "height", {
                    /**
                     * Get the height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.height;
                    },
                    /**
                     * Set the height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (height) {
                        this.resize(this._m_extra.width, height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "pos", {
                    /**
                     * Get the position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        return new Point(extra.x, extra.y);
                    },
                    /**
                     * Set the position of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (pos) {
                        this.move(pos.x, pos.y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "size", {
                    /**
                     * Get the size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        return new Size(extra.width, extra.height);
                    },
                    /**
                     * Set the size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (size) {
                        this.resize(size.width, size.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "geometry", {
                    /**
                     * Get the geometry of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        return new Rect(extra.x, extra.y, extra.width, extra.height);
                    },
                    /**
                     * Set the geometry of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (rect) {
                        this.setGeometry(rect.x, rect.y, rect.width, rect.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "minWidth", {
                    /**
                     * Get the minimum width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.minWidth;
                    },
                    /**
                     * Set the minimum width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (width) {
                        this.setMinSize(width, this._m_extra.minHeight);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "minHeight", {
                    /**
                     * Get the minimum height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.minHeight;
                    },
                    /**
                     * Set the minimum height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (height) {
                        this.setMinSize(this._m_extra.minWidth, height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "maxWidth", {
                    /**
                     * Get the maximum width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.maxWidth;
                    },
                    /**
                     * Set the maximum width of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (width) {
                        this.setMaxSize(width, this._m_extra.maxHeight);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "maxHeight", {
                    /**
                     * Get the maximum height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        return this._m_extra.maxHeight;
                    },
                    /**
                     * Set the maximum height of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (height) {
                        this.setMaxSize(this._m_extra.maxWidth, height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "minSize", {
                    /**
                     * Get the minimum size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        return new Size(extra.minWidth, extra.minHeight);
                    },
                    /**
                     * Set the minimum size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (size) {
                        this.setMinSize(size.width, size.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "maxSize", {
                    /**
                     * Get the maximum size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        return new Size(extra.maxWidth, extra.maxHeight);
                    },
                    /**
                     * Set the maximum size of the widget.
                     *
                     * This does not apply when using CSS for layout.
                     */
                    set: function (size) {
                        this.setMaxSize(size.width, size.height);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "horizontalSizePolicy", {
                    /**
                     * Get the horizontal size policy for the widget.
                     */
                    get: function () {
                        return this._m_extra.hSizePolicy;
                    },
                    /**
                     * Set the horizontal size policy for the widget.
                     */
                    set: function (policy) {
                        this.setSizePolicy(policy, this._m_extra.vSizePolicy);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "verticalSizePolicy", {
                    /**
                     * Get the vertical size policy for the widget.
                     */
                    get: function () {
                        return this._m_extra.vSizePolicy;
                    },
                    /**
                     * Set the vertical size policy for the widget.
                     */
                    set: function (policy) {
                        this.setSizePolicy(this._m_extra.hSizePolicy, policy);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "boxData", {
                    /**
                     * Get the read only box data for the widget node.
                     *
                     * If an external style change causes the box data to change, the
                     * `updateBoxData` method should be called to update the widget.
                     */
                    get: function () {
                        var extra = this._m_extra;
                        var data = extra.boxData;
                        if (data)
                            return data;
                        return extra.boxData = createBoxData(this._m_node);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "isAttached", {
                    /**
                     * Test whether the widget's node is attached to the DOM.
                     */
                    get: function () {
                        return this.testFlag(1 /* IsAttached */);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "isDisposed", {
                    /**
                     * Test whether the widget has been disposed.
                     */
                    get: function () {
                        return this.testFlag(8 /* IsDisposed */);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "isHidden", {
                    /**
                     * Test whether the widget is explicitly hidden.
                     */
                    get: function () {
                        return this.testFlag(2 /* IsHidden */);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "isVisible", {
                    /**
                     * Test whether the widget is visible.
                     *
                     * A widget is visible under the following conditions:
                     *  - it is attached to the DOM
                     *  - it is not explicitly hidden
                     *  - it has no explicitly hidden ancestors
                     */
                    get: function () {
                        return this.testFlag(4 /* IsVisible */);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Widget.prototype, "childCount", {
                    /**
                     * Get the number of child widgets of the widget.
                     */
                    get: function () {
                        return this._m_children.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the child widget at the given index.
                 */
                Widget.prototype.childAt = function (index) {
                    return this._m_children[index];
                };
                /**
                 * Get the index of the given child.
                 */
                Widget.prototype.childIndex = function (widget) {
                    return this._m_children.indexOf(widget);
                };
                /**
                 * Test whether a widget flag is set.
                 */
                Widget.prototype.testFlag = function (flag) {
                    return (this._m_flags & flag) !== 0;
                };
                /**
                 * Set the given widget flag.
                 */
                Widget.prototype.setFlag = function (flag) {
                    this._m_flags |= flag;
                };
                /**
                 * Clear the given widget flag.
                 */
                Widget.prototype.clearFlag = function (flag) {
                    this._m_flags &= ~flag;
                };
                /**
                 * Make the widget visible to its parent.
                 *
                 * If the widget is not explicitly hidden, this is a no-op.
                 */
                Widget.prototype.show = function () {
                    if (!this.isHidden) {
                        return;
                    }
                    var p = this._m_parent;
                    if (this.isAttached && (!p || p.isVisible)) {
                        sendEvent(this, EVT_BEFORE_SHOW);
                        this.classList.remove(HIDDEN_CLASS);
                        this.clearFlag(2 /* IsHidden */);
                        sendEvent(this, EVT_AFTER_SHOW);
                    }
                    else {
                        this.classList.remove(HIDDEN_CLASS);
                        this.clearFlag(2 /* IsHidden */);
                    }
                    if (p) {
                        sendEvent(p, new ChildEvent('child-shown', this));
                    }
                    this.updateGeometry();
                };
                /**
                 * Make the widget invisible to its parent.
                 *
                 * If the widget is already hidden, this is a no-op.
                 */
                Widget.prototype.hide = function () {
                    if (this.isHidden) {
                        return;
                    }
                    var p = this._m_parent;
                    if (this.isAttached && (!p || p.isVisible)) {
                        sendEvent(this, EVT_BEFORE_HIDE);
                        this.classList.add(HIDDEN_CLASS);
                        this.setFlag(2 /* IsHidden */);
                        sendEvent(this, EVT_AFTER_HIDE);
                    }
                    else {
                        this.classList.add(HIDDEN_CLASS);
                        this.setFlag(2 /* IsHidden */);
                    }
                    if (p) {
                        sendEvent(p, new ChildEvent('child-hidden', this));
                    }
                    this.updateGeometry(true);
                };
                /**
                 * Close the widget by sending it a 'close' event.
                 *
                 * Subclass may reimplement the `closeEvent` method to perform custom
                 * actions before removing the widget from the hierarchy. The default
                 * close event handler will unparent the widget.
                 */
                Widget.prototype.close = function () {
                    sendEvent(this, EVT_CLOSE);
                };
                /**
                 * Attach the widget's node to a DOM element.
                 *
                 * The `fitToHost` method can be called to resize the widget to
                 * fill its host node. It should be called whenever the size of
                 * host node is known to have changed.
                 *
                 * Only a root widget can be attached to a host node.
                 */
                Widget.prototype.attach = function (node) {
                    if (this._m_parent) {
                        throw new Error('can only attach a root widget to the DOM');
                    }
                    sendEvent(this, EVT_BEFORE_ATTACH);
                    node.appendChild(this._m_node);
                    sendEvent(this, EVT_AFTER_ATTACH);
                };
                /**
                 * Detach the widget's node from the DOM.
                 *
                 * Only a root widget can be detached from its host node.
                 */
                Widget.prototype.detach = function () {
                    if (this._m_parent) {
                        throw new Error('can only detach a root widget from the DOM');
                    }
                    var node = this._m_node;
                    var parentNode = node.parentNode;
                    if (!parentNode) {
                        return;
                    }
                    sendEvent(this, EVT_BEFORE_DETACH);
                    parentNode.removeChild(node);
                    sendEvent(this, EVT_AFTER_DETACH);
                };
                /**
                 * Resize the widget so that its fills its host node.
                 *
                 * Only a root widget can be resized to fill its host node.
                 *
                 * If the size of the host node is known, it can be provided
                 * so that the size does not need to be read from the DOM.
                 */
                Widget.prototype.fitToHost = function (width, height, box) {
                    if (this._m_parent) {
                        throw new Error('can only fit a root widget');
                    }
                    var parentNode = this._m_node.parentNode;
                    if (!parentNode) {
                        return;
                    }
                    if (box === void 0) {
                        box = createBoxData(parentNode);
                    }
                    if (width === void 0) {
                        width = parentNode.offsetWidth - box.horizontalSum;
                    }
                    if (height === void 0) {
                        height = parentNode.offsetHeight - box.verticalSum;
                    }
                    this.setGeometry(box.paddingLeft, box.paddingTop, width, height);
                };
                /**
                 * Calculate the preferred size for the widget.
                 *
                 * This does not apply when using CSS for layout.
                 *
                 * The default implementation returns the layout size hint if
                 * a layout is installed, otherwise it returns a zero size.
                 *
                 * Most leaf widgets will reimplement this method.
                 */
                Widget.prototype.sizeHint = function () {
                    if (this._m_layout) {
                        return this._m_layout.sizeHint();
                    }
                    return new Size(0, 0);
                };
                /**
                 * Calculate the preferred minimum size for the widget.
                 *
                 * This does not apply when using CSS for layout.
                 *
                 * The default implementation returns the layout min size if
                 * a layout is installed, otherwise it returns a zero size.
                 *
                 * Most leaf widgets will reimplement this method.
                 */
                Widget.prototype.minSizeHint = function () {
                    if (this._m_layout) {
                        return this._m_layout.minSize();
                    }
                    return new Size(0, 0);
                };
                /**
                 * Calculate the preferred maximum size for the widget.
                 *
                 * This does not apply when using CSS for layout.
                 *
                 * The default implementation returns the layout max size if
                 * a layout is installed, otherwise it returns an inf size.
                 */
                Widget.prototype.maxSizeHint = function () {
                    if (this._m_layout) {
                        return this._m_layout.maxSize();
                    }
                    return new Size(Infinity, Infinity);
                };
                /**
                 * Notify the layout system that the widget geometry needs updating.
                 *
                 * This should be called if the widget's size hint(s) have changed.
                 *
                 * If the `force` flag is false and the widget is explicitly hidden,
                 * this is a no-op. The layout will update automatically when the
                 * widget is made visible.
                 */
                Widget.prototype.updateGeometry = function (force) {
                    if (force === void 0) { force = false; }
                    var parent = this._m_parent;
                    if (!parent || (this.isHidden && !force)) {
                        return;
                    }
                    if (parent._m_layout) {
                        parent._m_layout.invalidate();
                    }
                    else {
                        postEvent(parent, EVT_LAYOUT_REQUEST);
                        parent.updateGeometry();
                    }
                };
                /**
                 * Notify the layout system that the widget box data needs updating.
                 *
                 * This should be called if the node's padding or border has changed.
                 */
                Widget.prototype.updateBoxData = function () {
                    this._m_extra.boxData = null;
                    if (this._m_layout) {
                        this._m_layout.invalidate();
                    }
                    else {
                        postEvent(this, EVT_LAYOUT_REQUEST);
                    }
                    this.updateGeometry();
                };
                /**
                 * Move the widget to the given X-Y position.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.move = function (x, y) {
                    var extra = this._m_extra;
                    this.setGeometry(x, y, extra.width, extra.height);
                };
                /**
                 * Resize the widget to the given width and height.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.resize = function (width, height) {
                    var extra = this._m_extra;
                    this.setGeometry(extra.x, extra.y, width, height);
                };
                /**
                 * Set the geometry of the widget.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.setGeometry = function (x, y, width, height) {
                    var extra = this._m_extra;
                    width = Math.max(extra.minWidth, Math.min(width, extra.maxWidth));
                    height = Math.max(extra.minHeight, Math.min(height, extra.maxHeight));
                    var isMove = false;
                    var isResize = false;
                    var oldX = extra.x;
                    var oldY = extra.y;
                    var oldWidth = extra.width;
                    var oldHeight = extra.height;
                    var style = this._m_node.style;
                    if (oldX !== x) {
                        isMove = true;
                        extra.x = x;
                        style.left = x + 'px';
                    }
                    if (oldY !== y) {
                        isMove = true;
                        extra.y = y;
                        style.top = y + 'px';
                    }
                    if (oldWidth !== width) {
                        isResize = true;
                        extra.width = width;
                        style.width = width + 'px';
                    }
                    if (oldHeight !== height) {
                        isResize = true;
                        extra.height = height;
                        style.height = height + 'px';
                    }
                    if (isMove) {
                        sendEvent(this, new MoveEvent(oldX, oldY, x, y));
                    }
                    if (isResize) {
                        sendEvent(this, new ResizeEvent(oldWidth, oldHeight, width, height));
                    }
                };
                /**
                 * Set the minimum size of the widget.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.setMinSize = function (width, height) {
                    var extra = this._m_extra;
                    this.setSizeLimits(width, height, extra.maxWidth, extra.maxHeight);
                };
                /**
                 * Set the maximum size of the widget.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.setMaxSize = function (width, height) {
                    var extra = this._m_extra;
                    this.setSizeLimits(extra.minWidth, extra.minHeight, width, height);
                };
                /**
                 * Set the minimum and maximum sizes of the widget.
                 *
                 * This does not apply when using CSS for layout.
                 */
                Widget.prototype.setSizeLimits = function (minW, minH, maxW, maxH) {
                    minW = Math.max(0, minW);
                    minH = Math.max(0, minH);
                    maxW = Math.max(minW, maxW);
                    maxH = Math.max(minH, maxH);
                    var changed = false;
                    var extra = this._m_extra;
                    if (minW !== extra.minWidth) {
                        extra.minWidth = minW;
                        changed = true;
                    }
                    if (minH !== extra.minHeight) {
                        extra.minHeight = minH;
                        changed = true;
                    }
                    if (maxW !== extra.maxWidth) {
                        extra.maxWidth = maxW;
                        changed = true;
                    }
                    if (maxH !== extra.maxHeight) {
                        extra.maxHeight = maxH;
                        changed = true;
                    }
                    if (changed) {
                        this.resize(extra.width, extra.height);
                        this.updateGeometry();
                    }
                };
                /**
                 * Set the size policy values for the widget.
                 */
                Widget.prototype.setSizePolicy = function (horizontal, vertical) {
                    var changed = false;
                    var extra = this._m_extra;
                    if (horizontal !== extra.hSizePolicy) {
                        extra.hSizePolicy = horizontal;
                        changed = true;
                    }
                    if (vertical !== extra.vSizePolicy) {
                        extra.vSizePolicy = vertical;
                        changed = true;
                    }
                    if (changed)
                        this.updateGeometry();
                };
                /**
                 * Process an event dispatched to the handler.
                 *
                 * This is the primary event processing method. If the handler has
                 * installed event filters and one of them returns true from its
                 * `filterEvent` method, this method will not be called.
                 */
                Widget.prototype.processEvent = function (event) {
                    switch (event.type) {
                        case 'move':
                            this.moveEvent(event);
                            break;
                        case 'resize':
                            this.resizeEvent(event);
                            break;
                        case 'child-added':
                            var child = event.child;
                            if (this.isAttached) {
                                sendEvent(child, EVT_BEFORE_ATTACH);
                                this._m_node.appendChild(child._m_node);
                                sendEvent(child, EVT_AFTER_ATTACH);
                            }
                            else {
                                this._m_node.appendChild(child._m_node);
                            }
                            break;
                        case 'child-removed':
                            var child = event.child;
                            if (this.isAttached) {
                                sendEvent(child, EVT_BEFORE_DETACH);
                                this._m_node.removeChild(child._m_node);
                                sendEvent(child, EVT_AFTER_DETACH);
                            }
                            else {
                                this._m_node.removeChild(child._m_node);
                            }
                            break;
                        case 'before-show':
                            this.beforeShowEvent(event);
                            sendNonHiddenChildrenEvent(this._m_children, event);
                            break;
                        case 'after-show':
                            this.setFlag(4 /* IsVisible */);
                            this.afterShowEvent(event);
                            sendNonHiddenChildrenEvent(this._m_children, event);
                            break;
                        case 'before-hide':
                            this.beforeHideEvent(event);
                            sendNonHiddenChildrenEvent(this._m_children, event);
                            break;
                        case 'after-hide':
                            this.clearFlag(4 /* IsVisible */);
                            this.afterHideEvent(event);
                            sendNonHiddenChildrenEvent(this._m_children, event);
                            break;
                        case 'before-attach':
                            this._m_extra.boxData = null;
                            this.beforeAttachEvent(event);
                            sendChildrenEvent(this._m_children, event);
                            break;
                        case 'after-attach':
                            var p = this._m_parent;
                            var v = !p || p.isVisible;
                            v = v && !this.isHidden;
                            if (v)
                                this.setFlag(4 /* IsVisible */);
                            this.setFlag(1 /* IsAttached */);
                            this.afterAttachEvent(event);
                            sendChildrenEvent(this._m_children, event);
                            break;
                        case 'before-detach':
                            this.beforeDetachEvent(event);
                            sendChildrenEvent(this._m_children, event);
                            break;
                        case 'after-detach':
                            this.clearFlag(4 /* IsVisible */);
                            this.clearFlag(1 /* IsAttached */);
                            this.afterDetachEvent(event);
                            sendChildrenEvent(this._m_children, event);
                            break;
                        case 'close':
                            this.closeEvent(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Compress an event posted to the event handler.
                 *
                 * This allows the handler to merge a posted event with an event
                 * which is already enqueued. It should return true if the event
                 * was compressed and should be dropped, or false if the event
                 * should be posted as normal.
                 *
                 * By default 'layout-request' events are compressed.
                 */
                Widget.prototype.compressEvent = function (event, postedEvents) {
                    var type = event.type;
                    if (type === 'layout-request') {
                        return postedEvents.some(function (other) { return other.type === type; });
                    }
                    return false;
                };
                /**
                 * A hook method invoked before normal event processing.
                 *
                 * This method is always invoked when an event is dispatched to
                 * the handler, even if the handler has installed event filters.
                 *
                 * As the name suggests, this method is intended as a hook and not as
                 * the primary event processing method. It should be used sparingly.
                 *
                 * By default the layout's `processWidgetEvent` method is invoked.
                 */
                Widget.prototype.hookEvent = function (event) {
                    if (this._m_layout) {
                        this._m_layout.processWidgetEvent(event);
                    }
                };
                /**
                 * Create the DOM node which represents the widget.
                 *
                 * The default implementation creates an empty div.
                 */
                Widget.prototype.createNode = function () {
                    return document.createElement('div');
                };
                /**
                 * A method invoked on a 'close' event.
                 *
                 * Subclass may reimplement this method to perform custom actions
                 * before removing the widget from the hierarchy.
                 *
                 * The default behavior will unparent the widget.
                 */
                Widget.prototype.closeEvent = function (event) {
                    this.parent = null;
                };
                /**
                 * A method invoked on a 'move' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.moveEvent = function (event) {
                };
                /**
                 * A method invoked on a 'resize' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.resizeEvent = function (event) {
                };
                /**
                 * A method invoked on a 'before-show' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.beforeShowEvent = function (event) {
                };
                /**
                 * A method invoked on an 'after-show' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.afterShowEvent = function (event) {
                };
                /**
                 * A method invoked on a 'before-hide' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.beforeHideEvent = function (event) {
                };
                /**
                 * A method invoked on an 'after-hide' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.afterHideEvent = function (event) {
                };
                /**
                 * A method invoked on a 'before-attach' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.beforeAttachEvent = function (event) {
                };
                /**
                 * A method invoked on an 'after-attach' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.afterAttachEvent = function (event) {
                };
                /**
                 * A method invoked on a 'before-detach' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.beforeDetachEvent = function (event) {
                };
                /**
                 * A method invoked on an 'after-detach' event.
                 *
                 * The default implementation is a no-op.
                 */
                Widget.prototype.afterDetachEvent = function (event) {
                };
                return Widget;
            })();
            _widget.Widget = Widget;
            /**
             * The widget extra prototype object used by `createExtra`.
             */
            var widgetExtraProto = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                minWidth: 0,
                minHeight: 0,
                maxWidth: Infinity,
                maxHeight: Infinity,
                hSizePolicy: SizePolicy.Preferred,
                vSizePolicy: SizePolicy.Preferred,
                boxData: null,
                name: '',
            };
            /**
             * Create a new widget extra object using the extra prototype.
             */
            function createExtra() {
                return Object.create(widgetExtraProto);
            }
            /**
             * Send an event to the given widget children.
             */
            function sendChildrenEvent(children, event) {
                for (var i = 0; i < children.length; ++i) {
                    sendEvent(children[i], event);
                }
            }
            /**
             * Send an event to the given widget children which are not hidden.
             */
            function sendNonHiddenChildrenEvent(children, event) {
                for (var i = 0; i < children.length; ++i) {
                    var child = children[i];
                    if (!child.isHidden) {
                        sendEvent(child, event);
                    }
                }
            }
        })(widget = ui.widget || (ui.widget = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.widget

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var menuitem;
        (function (menuitem) {
            'use strict';
            var Signal = phosphor.core.signal.Signal;
            /**
             * An object which can be added to a menu or menu bar.
             */
            var MenuItem = (function () {
                /**
                 * Construct a new menu item.
                 */
                function MenuItem(opts) {
                    this._m_mnemonic = '';
                    this._m_shortcut = '';
                    this._m_className = '';
                    this._m_enabled = true;
                    this._m_type = 'normal';
                    this._m_checked = false;
                    this._m_submenu = null;
                    this._m_changed = new Signal();
                    this._m_toggled = new Signal();
                    this._m_triggered = new Signal();
                    if (opts)
                        this._initFrom(opts);
                }
                Object.defineProperty(MenuItem.prototype, "changed", {
                    /**
                     * A signal emitted when the state of the menu item is changed.
                     */
                    get: function () {
                        return this._m_changed;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "toggled", {
                    /**
                     * A signal emitted when a `check` type menu item is toggled.
                     */
                    get: function () {
                        return this._m_toggled;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "triggered", {
                    /**
                     * A signal emitted when the menu item is triggered by the user.
                     */
                    get: function () {
                        return this._m_triggered;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "type", {
                    /**
                     * Get the type of the menu item: 'normal' | 'check' | 'separator'.
                     */
                    get: function () {
                        return this._m_type;
                    },
                    /**
                     * Set the type of the menu item: 'normal' | 'check' | 'separator'.
                     */
                    set: function (type) {
                        if (type === this._m_type) {
                            return;
                        }
                        if (type !== 'normal' && type !== 'check' && type !== 'separator') {
                            throw new Error('invalid menu item type: ' + type);
                        }
                        this._m_type = type;
                        this._m_checked = false;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "text", {
                    /**
                     * Get the text for the menu item.
                     */
                    get: function () {
                        return this._m_text;
                    },
                    /**
                     * Set the text for the menu item.
                     */
                    set: function (text) {
                        if (text === this._m_text) {
                            return;
                        }
                        this._m_text = text;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "mnemonic", {
                    /**
                     * Get the mnemonic key for the menu item.
                     */
                    get: function () {
                        return this._m_mnemonic;
                    },
                    /**
                     * Set the mnemonic key for the menu item.
                     */
                    set: function (mnemonic) {
                        if (mnemonic === this._m_mnemonic || mnemonic.length > 1) {
                            return;
                        }
                        this._m_mnemonic = mnemonic;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "shortcut", {
                    /**
                     * Get the shortcut key for the menu item (decoration only).
                     */
                    get: function () {
                        return this._m_shortcut;
                    },
                    /**
                     * Set the shortcut key for the menu item (decoration only).
                     */
                    set: function (shortcut) {
                        if (shortcut === this._m_shortcut) {
                            return;
                        }
                        this._m_shortcut = shortcut;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "enabled", {
                    /**
                     * Get whether the menu item is enabled.
                     */
                    get: function () {
                        return this._m_enabled;
                    },
                    /**
                     * Set whether the menu item is enabled.
                     */
                    set: function (enabled) {
                        if (enabled === this._m_enabled) {
                            return;
                        }
                        this._m_enabled = enabled;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "checked", {
                    /**
                     * Get whether the 'check' type menu item is checked.
                     */
                    get: function () {
                        return this._m_checked;
                    },
                    /**
                     * Set whether the 'check' type menu item is checked.
                     */
                    set: function (checked) {
                        if (this._m_type !== 'check' || checked === this._m_checked) {
                            return;
                        }
                        this._m_checked = checked;
                        this._m_changed.emit(this, void 0);
                        this._m_toggled.emit(this, checked);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "submenu", {
                    /**
                     * Get the submenu for the menu item.
                     */
                    get: function () {
                        return this._m_submenu;
                    },
                    /**
                     * Set the submenu for the menu item.
                     */
                    set: function (submenu) {
                        if (submenu === this._m_submenu) {
                            return;
                        }
                        this._m_submenu = submenu;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuItem.prototype, "className", {
                    /**
                     * Get the class name for the menu item.
                     */
                    get: function () {
                        return this._m_className;
                    },
                    /**
                     * Set the class name for the menu item.
                     */
                    set: function (name) {
                        if (name === this._m_className) {
                            return;
                        }
                        this._m_className = name;
                        this._m_changed.emit(this, void 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Trigger the menu item.
                 *
                 * This will emit the `triggered` signal.
                 *
                 * If the item is a `check` type, it will also be toggled.
                 */
                MenuItem.prototype.trigger = function () {
                    if (this._m_type === 'check') {
                        this.checked = !this.checked;
                    }
                    this._m_triggered.emit(this, this._m_checked);
                };
                /**
                 * Initialize the menu item from the given options object.
                 */
                MenuItem.prototype._initFrom = function (opts) {
                    if (opts.type !== void 0) {
                        this.type = opts.type;
                    }
                    if (opts.text !== void 0) {
                        this._m_text = opts.text;
                    }
                    if (opts.mnemonic !== void 0) {
                        this.mnemonic = opts.mnemonic;
                    }
                    if (opts.shortcut !== void 0) {
                        this._m_shortcut = opts.shortcut;
                    }
                    if (opts.enabled !== void 0) {
                        this._m_enabled = opts.enabled;
                    }
                    if (opts.checked !== void 0) {
                        this.checked = opts.checked;
                    }
                    if (opts.submenu !== void 0) {
                        this._m_submenu = opts.submenu;
                    }
                    if (opts.className !== void 0) {
                        this._m_className = opts.className;
                    }
                    if (opts.triggered !== void 0) {
                        this._m_triggered.connect(opts.triggered);
                    }
                    if (opts.toggled !== void 0) {
                        this._m_toggled.connect(opts.toggled);
                    }
                };
                return MenuItem;
            })();
            menuitem.MenuItem = MenuItem;
        })(menuitem = ui.menuitem || (ui.menuitem = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.menuitem

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var menu;
        (function (_menu) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var Signal = phosphor.core.signal.Signal;
            var hitTest = ui.domutil.hitTest;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to a menu widget.
             */
            var MENU_CLASS = 'p-Menu';
            /**
             * The class name assigned to a menu item.
             */
            var MENU_ITEM_CLASS = 'p-Menu-item';
            /**
             * The class name added to a menu item icon cell.
             */
            var ICON_CLASS = 'p-Menu-item-icon';
            /**
             * The class name added to a menu item text cell.
             */
            var TEXT_CLASS = 'p-Menu-item-text';
            /**
             * The class name added to a menu item shortcut cell.
             */
            var SHORTCUT_CLASS = 'p-Menu-item-shortcut';
            /**
             * The class name added to a menu item submenu icon cell.
             */
            var SUBMENU_ICON_CLASS = 'p-Menu-item-submenu-icon';
            /**
             * The class name added to a check type menu item.
             */
            var CHECK_TYPE_CLASS = 'p-check-type';
            /**
             * The class name added to a separator type menu item.
             */
            var SEPARATOR_TYPE_CLASS = 'p-separator-type';
            /**
             * The class name added to active menu items.
             */
            var ACTIVE_CLASS = 'p-active';
            /**
             * The class name added to a disabled menu item.
             */
            var DISABLED_CLASS = 'p-disabled';
            /**
             * The class name added to a checked menu item.
             */
            var CHECKED_CLASS = 'p-checked';
            /**
             * The class name added to a menu item with a submenu.
             */
            var HAS_SUBMENU_CLASS = 'p-has-submenu';
            /**
             * The delay, in ms, for opening a submenu.
             */
            var OPEN_DELAY = 300;
            /**
             * The delay, in ms, for closing a submenu.
             */
            var CLOSE_DELAY = 300;
            /**
             * The horizontal overlap to use for submenus.
             */
            var SUBMENU_OVERLAP = 3;
            /**
             * A widget which displays an array of menu items as a menu.
             */
            var Menu = (function (_super) {
                __extends(Menu, _super);
                /**
                 * Construct a new menu.
                 */
                function Menu(items) {
                    var _this = this;
                    _super.call(this);
                    this._m_childItem = null;
                    this._m_childMenu = null;
                    this._m_parentMenu = null;
                    this._m_items = [];
                    this._m_nodes = [];
                    this._m_activeIndex = -1;
                    this._m_openTimer = 0;
                    this._m_closeTimer = 0;
                    this._m_closed = new Signal();
                    this.classList.add(MENU_CLASS);
                    if (items)
                        items.forEach(function (it) { return _this.addItem(it); });
                }
                /**
                 * Find the root menu of a menu hierarchy.
                 */
                Menu.rootMenu = function (menu) {
                    while (menu._m_parentMenu) {
                        menu = menu._m_parentMenu;
                    }
                    return menu;
                };
                /**
                 * Find the leaf menu of the menu hierarchy.
                 */
                Menu.leafMenu = function (menu) {
                    while (menu._m_childMenu) {
                        menu = menu._m_childMenu;
                    }
                    return menu;
                };
                /**
                 * Dispose of the resources held by the widget.
                 */
                Menu.prototype.dispose = function () {
                    this._reset();
                    this._removeFromParentMenu();
                    this._m_closed.dispose();
                    this.clearItems();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(Menu.prototype, "closed", {
                    /**
                     * A signal emitted when the menu is closed.
                     */
                    get: function () {
                        return this._m_closed;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Menu.prototype, "parentMenu", {
                    /**
                     * Get the parent menu of the menu.
                     *
                     * This will be null if the menu is not an open submenu.
                     */
                    get: function () {
                        return this._m_parentMenu;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Menu.prototype, "childMenu", {
                    /**
                     * Get the child menu of the menu.
                     *
                     * This will be null if the menu does not have an open submenu.
                     */
                    get: function () {
                        return this._m_childMenu;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Menu.prototype, "activeIndex", {
                    /**
                     * Get the index of the active (highlighted) item.
                     */
                    get: function () {
                        return this._m_activeIndex;
                    },
                    /**
                     * Set the index of the active (highlighted) menu item.
                     *
                     * Only a non-separator item can be set as the active item.
                     */
                    set: function (index) {
                        var item = this._m_items[index];
                        var ok = item && item.type !== 'separator';
                        this._setActiveIndex(ok ? index : -1);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Menu.prototype, "activeItem", {
                    /**
                     * Get the active (highlighted) item.
                     */
                    get: function () {
                        return this._m_items[this._m_activeIndex];
                    },
                    /**
                     * Set the active (highlighted) item.
                     *
                     * Only a non-separator item can be set as the active item.
                     */
                    set: function (item) {
                        this.activeIndex = this._m_items.indexOf(item);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Menu.prototype, "count", {
                    /**
                     * Get the number of menu items in the menu.
                     */
                    get: function () {
                        return this._m_items.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the menu item at the given index.
                 */
                Menu.prototype.itemAt = function (index) {
                    return this._m_items[index];
                };
                /**
                 * Get the index of the given menu item.
                 */
                Menu.prototype.itemIndex = function (item) {
                    return this._m_items.indexOf(item);
                };
                /**
                 * Add a menu item to the end of the menu.
                 *
                 * Returns the new index of the item.
                 */
                Menu.prototype.addItem = function (item) {
                    return this.insertItem(this._m_items.length, item);
                };
                /**
                 * Insert a menu item into the menu at the given index.
                 *
                 * Returns the new index of the item.
                 */
                Menu.prototype.insertItem = function (index, item) {
                    var items = this._m_items;
                    index = Math.max(0, Math.min(index | 0, items.length));
                    if (index === items.length) {
                        items.push(item);
                    }
                    else {
                        items.splice(index, 0, item);
                    }
                    this.itemInserted(index, item);
                    return index;
                };
                /**
                 * Remove the menu item at the given index from the menu.
                 *
                 * Returns the removed item.
                 */
                Menu.prototype.takeItem = function (index) {
                    index = index | 0;
                    var items = this._m_items;
                    if (index < 0 || index >= items.length) {
                        return void 0;
                    }
                    var item;
                    if (index === items.length - 1) {
                        item = items.pop();
                    }
                    else {
                        item = items.splice(index, 1)[0];
                    }
                    this.itemRemoved(index, item);
                    return item;
                };
                /**
                 * Remove the given menu item from the menu.
                 *
                 * Returns the index of the removed item.
                 */
                Menu.prototype.removeItem = function (item) {
                    var index = this._m_items.indexOf(item);
                    if (index === -1) {
                        return -1;
                    }
                    this.takeItem(index);
                    return index;
                };
                /**
                 * Remove all menu items from the menu.
                 */
                Menu.prototype.clearItems = function () {
                    var items = this._m_items;
                    while (items.length) {
                        var item = items.pop();
                        var index = items.length;
                        this.itemRemoved(index, item);
                    }
                };
                /**
                 * Activate the next non-separator menu item.
                 *
                 * This is equivalent to pressing the down arrow key.
                 */
                Menu.prototype.activateNextItem = function () {
                    var i = algo.findIndex(this._m_items, function (it) {
                        return it.type !== 'separator';
                    }, this._m_activeIndex + 1, true);
                    this._setActiveIndex(i);
                };
                /**
                 * Activate the previous non-separator menu item.
                 *
                 * This is equivalent to pressing the up arrow key.
                 */
                Menu.prototype.activatePreviousItem = function () {
                    var i = algo.findLastIndex(this._m_items, function (it) {
                        return it.type !== 'separator';
                    }, this._m_activeIndex - 1, true);
                    this._setActiveIndex(i);
                };
                /**
                 * Activate the next menu item with the given mnemonic key.
                 *
                 * This is equivalent to pressing the mnemonic key.
                 */
                Menu.prototype.activateMnemonicItem = function (key) {
                    key = key.toUpperCase();
                    var i = algo.findIndex(this._m_items, function (it) {
                        if (it.type !== 'separator' && it.enabled) {
                            return it.mnemonic.toUpperCase() === key;
                        }
                        return false;
                    }, this._m_activeIndex + 1, true);
                    this._setActiveIndex(i);
                };
                /**
                 * Open the submenu of the active menu item.
                 *
                 * This is equivalent to pressing the right arrow key.
                 *
                 * Returns true if the item was opened, false otherwise.
                 */
                Menu.prototype.openActiveItem = function () {
                    var index = this._m_activeIndex;
                    var item = this._m_items[index];
                    if (!item || !item.submenu || !item.enabled) {
                        return false;
                    }
                    this._openChildMenu(item, this._m_nodes[index], false);
                    this._m_childMenu.activateNextItem();
                    return true;
                };
                /**
                 * Trigger (or open) the active menu item.
                 *
                 * This is equivalent to pressing the enter key.
                 *
                 * Returns true if the item was triggered, false otherwise.
                 */
                Menu.prototype.triggerActiveItem = function () {
                    var index = this._m_activeIndex;
                    var item = this._m_items[index];
                    if (!item || !item.enabled) {
                        return false;
                    }
                    if (item.submenu) {
                        this._openChildMenu(item, this._m_nodes[index], false);
                        this._m_childMenu.activateNextItem();
                    }
                    else {
                        Menu.rootMenu(this).close();
                        item.trigger();
                    }
                    return true;
                };
                /**
                 * Popup the menu at the specified location.
                 *
                 * The menu will be opened at the given location unless it will not
                 * fully fit on the screen. If it will not fit, it will be adjusted
                 * to fit naturally on the screen. The last two optional parameters
                 * control whether the provided coordinate value must be obeyed.
                 *
                 * When the menu is opened as a popup menu, it will handle all key
                 * events related to menu navigation as well as closing the menu
                 * when the mouse is pressed outside of the menu hierarchy. To
                 * prevent these actions, use the 'open' method instead.
                 */
                Menu.prototype.popup = function (x, y, forceX, forceY) {
                    if (forceX === void 0) { forceX = false; }
                    if (forceY === void 0) { forceY = false; }
                    if (this.isAttached) {
                        return;
                    }
                    document.addEventListener('keydown', this, true);
                    document.addEventListener('keypress', this, true);
                    document.addEventListener('mousedown', this, true);
                    openRootMenu(this, x, y, forceX, forceY);
                };
                /**
                 * Open the menu at the specified location.
                 *
                 * The menu will be opened at the given location unless it will not
                 * fully fit on the screen. If it will not fit, it will be adjusted
                 * to fit naturally on the screen. The last two optional parameters
                 * control whether the provided coordinate value must be obeyed.
                 *
                 * When the menu is opened with this method, it will not handle key
                 * events for navigation, nor will it close itself when the mouse is
                 * pressed outside the menu hierarchy. This is useful when using the
                 * menu from a menubar, where this menubar should handle these tasks.
                 * Use the `popup` method for the alternative behavior.
                 */
                Menu.prototype.open = function (x, y, forceX, forceY) {
                    if (forceX === void 0) { forceX = false; }
                    if (forceY === void 0) { forceY = false; }
                    if (!this.isAttached)
                        openRootMenu(this, x, y, forceX, forceY);
                };
                /**
                 * Handle the 'close' event for the menu.
                 *
                 * If the menu is currently attached, this will detach the menu
                 * and emit the `closed` signal. The super handler is not called.
                 */
                Menu.prototype.closeEvent = function (event) {
                    if (!this.isAttached) {
                        return;
                    }
                    this.hide();
                    this._reset();
                    this._removeFromParentMenu();
                    this._m_closed.emit(this, void 0);
                    this.detach();
                };
                /**
                 * A method invoked when a menu item is inserted into the menu.
                 */
                Menu.prototype.itemInserted = function (index, item) {
                    if (this._m_activeIndex !== -1) {
                        this._reset();
                    }
                    var node = createItemNode(item);
                    var next = this._m_nodes[index];
                    this.node.insertBefore(node, next);
                    this._m_nodes.splice(index, 0, node);
                    node.addEventListener('mouseenter', this);
                    item.changed.connect(this._mi_changed, this);
                };
                /**
                 * A method invoked when a menu item is removed from the menu.
                 */
                Menu.prototype.itemRemoved = function (index, item) {
                    if (this._m_activeIndex !== -1) {
                        this._reset();
                    }
                    var node = this._m_nodes.splice(index, 1)[0];
                    this.node.removeChild(node);
                    node.removeEventListener('mouseenter', this);
                    item.changed.disconnect(this._mi_changed, this);
                };
                /**
                 * Create the DOM node for the widget.
                 */
                Menu.prototype.createNode = function () {
                    return document.createElement('ul');
                };
                /**
                 * A method invoked on the 'after-attach' event.
                 */
                Menu.prototype.afterAttachEvent = function (event) {
                    var node = this.node;
                    node.addEventListener('mouseup', this);
                    node.addEventListener('mouseleave', this);
                    node.addEventListener('contextmenu', this);
                };
                /**
                 * A method invoked on the 'after-detach' event.
                 */
                Menu.prototype.afterDetachEvent = function (event) {
                    var node = this.node;
                    node.removeEventListener('mouseup', this);
                    node.removeEventListener('mouseleave', this);
                    node.removeEventListener('contextmenu', this);
                    document.removeEventListener('mousedown', this, true);
                    document.removeEventListener('keydown', this, true);
                    document.removeEventListener('keypress', this, true);
                };
                /**
                 * Handle the DOM events for the menu.
                 */
                Menu.prototype.handleEvent = function (event) {
                    switch (event.type) {
                        case 'mouseenter':
                            this.domEvent_mouseenter(event);
                            break;
                        case 'mouseleave':
                            this.domEvent_mouseleave(event);
                            break;
                        case 'mousedown':
                            this.domEvent_mousedown(event);
                            break;
                        case 'mouseup':
                            this.domEvent_mouseup(event);
                            break;
                        case 'contextmenu':
                            this.domEvent_contextmenu(event);
                            break;
                        case 'keydown':
                            this.domEvent_keydown(event);
                            break;
                        case 'keypress':
                            this.domEvent_keypress(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'mouseenter' event for the menu.
                 *
                 * This event listener is attached to the child item nodes.
                 */
                Menu.prototype.domEvent_mouseenter = function (event) {
                    this._syncAncestors();
                    this._closeChildMenu();
                    this._cancelPendingOpen();
                    var node = event.currentTarget;
                    var index = this._m_nodes.indexOf(node);
                    if (index === -1) {
                        this._setActiveIndex(-1);
                        return;
                    }
                    var item = this._m_items[index];
                    if (item.type === 'separator') {
                        this._setActiveIndex(-1);
                        return;
                    }
                    this._setActiveIndex(index);
                    if (item.submenu && item.enabled) {
                        if (item === this._m_childItem) {
                            this._cancelPendingClose();
                        }
                        else {
                            this._openChildMenu(item, node, true);
                        }
                    }
                };
                /**
                 * Handle the 'mouseleave' event for the menu.
                 *
                 * The event listener is only attached to the menu node.
                 */
                Menu.prototype.domEvent_mouseleave = function (event) {
                    this._cancelPendingOpen();
                    var x = event.clientX;
                    var y = event.clientY;
                    var child = this._m_childMenu;
                    if (!child || !hitTest(child.node, x, y)) {
                        this._setActiveIndex(-1);
                        this._closeChildMenu();
                    }
                };
                /**
                 * Handle the 'mouseup' event for the menu.
                 *
                 * This event listener is attached to the menu node.
                 */
                Menu.prototype.domEvent_mouseup = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (event.button === 0) {
                        this.triggerActiveItem();
                    }
                };
                /**
                 * Handle the 'contextmenu' event for the menu.
                 *
                 * This event listener is attached to the menu node.
                 */
                Menu.prototype.domEvent_contextmenu = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                };
                /**
                 * Handle the 'mousedown' event for the menu.
                 *
                 * This event listener is attached to the document for the root
                 * menu only when it is opened as a popup menu.
                 */
                Menu.prototype.domEvent_mousedown = function (event) {
                    var menu = this;
                    var hit = false;
                    var x = event.clientX;
                    var y = event.clientY;
                    while (!hit && menu) {
                        hit = hitTest(menu.node, x, y);
                        menu = menu._m_childMenu;
                    }
                    if (!hit)
                        this.close();
                };
                /**
                 * Handle the key down event for the menu.
                 *
                 * This event listener is attached to the document for the root
                 * menu only when it is opened as a popup menu.
                 */
                Menu.prototype.domEvent_keydown = function (event) {
                    event.stopPropagation();
                    var leaf = Menu.leafMenu(this);
                    switch (event.keyCode) {
                        case 13:
                            event.preventDefault();
                            leaf.triggerActiveItem();
                            break;
                        case 27:
                            event.preventDefault();
                            leaf.close();
                            break;
                        case 37:
                            event.preventDefault();
                            if (leaf !== this)
                                leaf.close();
                            break;
                        case 38:
                            event.preventDefault();
                            leaf.activatePreviousItem();
                            break;
                        case 39:
                            event.preventDefault();
                            leaf.openActiveItem();
                            break;
                        case 40:
                            event.preventDefault();
                            leaf.activateNextItem();
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'keypress' event for the menu.
                 *
                 * This event listener is attached to the document for the root
                 * menu only when it is opened as a popup menu.
                 */
                Menu.prototype.domEvent_keypress = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var str = String.fromCharCode(event.charCode);
                    Menu.leafMenu(this).activateMnemonicItem(str);
                };
                /**
                 * Set the active item index for the menu.
                 *
                 * This updates the class name of the relevant item nodes.
                 */
                Menu.prototype._setActiveIndex = function (index) {
                    var curr = this._m_nodes[this._m_activeIndex];
                    var next = this._m_nodes[index];
                    this._m_activeIndex = index;
                    if (curr === next) {
                        return;
                    }
                    if (curr)
                        curr.classList.remove(ACTIVE_CLASS);
                    if (next)
                        next.classList.add(ACTIVE_CLASS);
                };
                /**
                 * Synchronize the active item hierarchy starting with the parent.
                 *
                 * This ensures that the proper child items are activated for the
                 * ancestor menu hierarchy and that any pending open or close
                 * tasks are cleared.
                 */
                Menu.prototype._syncAncestors = function () {
                    var menu = this._m_parentMenu;
                    while (menu) {
                        menu._cancelPendingOpen();
                        menu._cancelPendingClose();
                        menu._syncChildItem();
                        menu = menu._m_parentMenu;
                    }
                };
                /**
                 * Synchronize the active item with the item for the child menu.
                 *
                 * This ensures that the active item is the child menu item.
                 */
                Menu.prototype._syncChildItem = function () {
                    var menu = this._m_childMenu;
                    if (!menu) {
                        return;
                    }
                    var index = this._m_items.indexOf(this._m_childItem);
                    if (index === -1) {
                        return;
                    }
                    this._setActiveIndex(index);
                };
                /**
                 * Open the menu item's submenu using the node for location.
                 *
                 * If the given item is already open, this is a no-op.
                 *
                 * Any pending open operation will be cancelled before opening
                 * the menu or queueing the delayed task to open the menu.
                 */
                Menu.prototype._openChildMenu = function (item, node, delayed) {
                    var _this = this;
                    if (item === this._m_childItem) {
                        return;
                    }
                    this._cancelPendingOpen();
                    if (delayed) {
                        this._m_openTimer = setTimeout(function () {
                            var menu = item.submenu;
                            _this._m_openTimer = 0;
                            _this._m_childItem = item;
                            _this._m_childMenu = menu;
                            menu._m_parentMenu = _this;
                            openSubmenu(menu, node);
                        }, OPEN_DELAY);
                    }
                    else {
                        var menu = item.submenu;
                        this._m_childItem = item;
                        this._m_childMenu = menu;
                        menu._m_parentMenu = this;
                        openSubmenu(menu, node);
                    }
                };
                /**
                 * Close the currently open child menu using a delayed task.
                 *
                 * If a task is pending or if there is no child menu, this is a no-op.
                 */
                Menu.prototype._closeChildMenu = function () {
                    var _this = this;
                    if (this._m_closeTimer || !this._m_childMenu) {
                        return;
                    }
                    this._m_closeTimer = setTimeout(function () {
                        _this._m_closeTimer = 0;
                        if (_this._m_childMenu) {
                            _this._m_childMenu.close();
                            _this._m_childMenu = null;
                            _this._m_childItem = null;
                        }
                    }, CLOSE_DELAY);
                };
                /**
                 * Reset the state of the menu.
                 *
                 * This deactivates the current item and closes the child menu.
                 */
                Menu.prototype._reset = function () {
                    this._cancelPendingOpen();
                    this._cancelPendingClose();
                    this._setActiveIndex(-1);
                    if (this._m_childMenu) {
                        this._m_childMenu.close();
                        this._m_childMenu = null;
                        this._m_childItem = null;
                    }
                };
                /**
                 * Remove the menu from its parent menu.
                 */
                Menu.prototype._removeFromParentMenu = function () {
                    var parent = this._m_parentMenu;
                    if (!parent) {
                        return;
                    }
                    this._m_parentMenu = null;
                    parent._cancelPendingOpen();
                    parent._cancelPendingClose();
                    parent._m_childMenu = null;
                    parent._m_childItem = null;
                };
                /**
                 * Cancel any pending child menu open task.
                 */
                Menu.prototype._cancelPendingOpen = function () {
                    if (this._m_openTimer) {
                        clearTimeout(this._m_openTimer);
                        this._m_openTimer = 0;
                    }
                };
                /**
                 * Cancel any pending child menu close task.
                 */
                Menu.prototype._cancelPendingClose = function () {
                    if (this._m_closeTimer) {
                        clearTimeout(this._m_closeTimer);
                        this._m_closeTimer = 0;
                    }
                };
                /**
                 * Handle the `changed` signal from a menu item.
                 */
                Menu.prototype._mi_changed = function (sender) {
                    var items = this._m_items;
                    var nodes = this._m_nodes;
                    for (var i = 0, n = items.length; i < n; ++i) {
                        if (items[i] !== sender) {
                            continue;
                        }
                        if (i === this._m_activeIndex) {
                            this._reset();
                        }
                        initItemNode(sender, nodes[i]);
                    }
                };
                return Menu;
            })(Widget);
            _menu.Menu = Menu;
            /**
             * Compute the offset of the first menu item.
             *
             * This returns the distance from the top of the menu to the top
             * of the first item in the menu.
             */
            function firstItemOffset(node) {
                var item = node.firstChild;
                if (!item) {
                    return 0;
                }
                var menuRect = node.getBoundingClientRect();
                var itemRect = item.getBoundingClientRect();
                return itemRect.top - menuRect.top;
            }
            /**
             * Compute the offset of the last menu item.
             *
             * This returns the distance from the bottom of the menu to the
             * bottom of the last item in the menu.
             */
            function lastItemOffset(node) {
                var item = node.lastChild;
                if (!item) {
                    return 0;
                }
                var menuRect = node.getBoundingClientRect();
                var itemRect = item.getBoundingClientRect();
                return menuRect.bottom - itemRect.bottom;
            }
            /**
             * Open the menu as a root menu at the target location.
             */
            function openRootMenu(menu, x, y, forceX, forceY) {
                // mount far offscreen for measurement
                var node = menu.node;
                var style = node.style;
                style.visibility = 'hidden';
                menu.attach(document.body);
                menu.show();
                // compute the adjusted coordinates
                var elem = document.documentElement;
                var maxX = elem.clientWidth;
                var maxY = elem.clientHeight;
                var rect = node.getBoundingClientRect();
                if (!forceX && x + rect.width > maxX) {
                    x = maxX - rect.width;
                }
                if (!forceY && y + rect.height > maxY) {
                    if (y > maxY) {
                        y = maxY - rect.height;
                    }
                    else {
                        y = y - rect.height;
                    }
                }
                // move to adjusted position
                style.top = Math.max(0, y) + 'px';
                style.left = Math.max(0, x) + 'px';
                style.visibility = '';
            }
            /**
             * Open a the menu as a submenu using the item node for positioning.
             */
            function openSubmenu(menu, item) {
                // mount far offscreen for measurement
                var node = menu.node;
                var style = node.style;
                style.visibility = 'hidden';
                menu.attach(document.body);
                menu.show();
                // compute the adjusted coordinates
                var elem = document.documentElement;
                var maxX = elem.clientWidth;
                var maxY = elem.clientHeight;
                var menuRect = node.getBoundingClientRect();
                var itemRect = item.getBoundingClientRect();
                var x = itemRect.right - SUBMENU_OVERLAP;
                var y = itemRect.top - firstItemOffset(node);
                if (x + menuRect.width > maxX) {
                    x = itemRect.left + SUBMENU_OVERLAP - menuRect.width;
                }
                if (y + menuRect.height > maxY) {
                    y = itemRect.bottom + lastItemOffset(node) - menuRect.height;
                }
                // move to adjusted position
                style.top = Math.max(0, y) + 'px';
                style.left = Math.max(0, x) + 'px';
                style.visibility = '';
            }
            /**
             * Create an initialize the node for a menu item.
             */
            function createItemNode(item) {
                var node = document.createElement('li');
                var icon = document.createElement('span');
                var text = document.createElement('span');
                var shortcut = document.createElement('span');
                var submenu = document.createElement('span');
                icon.className = ICON_CLASS;
                text.className = TEXT_CLASS;
                shortcut.className = SHORTCUT_CLASS;
                submenu.className = SUBMENU_ICON_CLASS;
                node.appendChild(icon);
                node.appendChild(text);
                node.appendChild(shortcut);
                node.appendChild(submenu);
                initItemNode(item, node);
                return node;
            }
            /**
             * Initialize the node for a menu item.
             *
             * This can be called again to update the node state.
             */
            function initItemNode(item, node) {
                var classParts = [MENU_ITEM_CLASS];
                if (item.className) {
                    classParts.push(item.className);
                }
                if (item.type === 'check') {
                    classParts.push(CHECK_TYPE_CLASS);
                }
                else if (item.type === 'separator') {
                    classParts.push(SEPARATOR_TYPE_CLASS);
                }
                if (item.checked) {
                    classParts.push(CHECKED_CLASS);
                }
                if (!item.enabled) {
                    classParts.push(DISABLED_CLASS);
                }
                if (item.submenu) {
                    classParts.push(HAS_SUBMENU_CLASS);
                }
                node.className = classParts.join(' ');
                node.children[1].textContent = item.text;
                node.children[2].textContent = item.shortcut;
            }
        })(menu = ui.menu || (ui.menu = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // phosphor.ui.menu

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var menubar;
        (function (menubar) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var hitTest = ui.domutil.hitTest;
            var SizePolicy = ui.enums.SizePolicy;
            var Size = ui.geometry.Size;
            var Menu = ui.menu.Menu;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to a menu bar widget.
             */
            var MENU_BAR_CLASS = 'p-MenuBar';
            /**
             * The class name assigned to an open menu bar menu.
             */
            var MENU_CLASS = 'p-MenuBar-menu';
            /**
             * The class name assigned to a menu item.
             */
            var MENU_ITEM_CLASS = 'p-MenuBar-item';
            /**
             * The class name added to a menu item icon cell.
             */
            var ICON_CLASS = 'p-MenuBar-item-icon';
            /**
             * The class name added to a menu item text cell.
             */
            var TEXT_CLASS = 'p-MenuBar-item-text';
            /**
             * The class name added to a separator type menu item.
             */
            var SEPARATOR_TYPE_CLASS = 'p-separator-type';
            /**
             * The class name added to active menu items.
             */
            var ACTIVE_CLASS = 'p-active';
            /**
             * The class name added to active menu items.
             */
            var SELECTED_CLASS = 'p-selected';
            /**
             * The class name added to a disabled menu item.
             */
            var DISABLED_CLASS = 'p-disabled';
            /**
             * A widget which displays menu items as a menu bar.
             */
            var MenuBar = (function (_super) {
                __extends(MenuBar, _super);
                /**
                 * Construct a new menu bar.
                 */
                function MenuBar(items) {
                    var _this = this;
                    _super.call(this);
                    this._m_childMenu = null;
                    this._m_items = [];
                    this._m_nodes = [];
                    this._m_state = 0 /* Inactive */;
                    this._m_activeIndex = -1;
                    this.classList.add(MENU_BAR_CLASS);
                    this.verticalSizePolicy = 0 /* Fixed */;
                    if (items)
                        items.forEach(function (it) { return _this.addItem(it); });
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                MenuBar.prototype.dispose = function () {
                    this._closeChildMenu();
                    this.clearItems();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(MenuBar.prototype, "childMenu", {
                    /**
                     * Get the child menu of the menu bar.
                     *
                     * This will be null if the menu bar does not have an open menu.
                     */
                    get: function () {
                        return this._m_childMenu;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuBar.prototype, "activeIndex", {
                    /**
                     * Get the index of the active (highlighted) item.
                     */
                    get: function () {
                        return this._m_activeIndex;
                    },
                    /**
                     * Set the index of the active (highlighted) menu item.
                     *
                     * Only an enabled non-separator item can be set as the active item.
                     */
                    set: function (index) {
                        var ok = isSelectable(this._m_items[index]);
                        this._setActiveIndex(ok ? index : -1);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuBar.prototype, "activeItem", {
                    /**
                     * Get the active (highlighted) item.
                     */
                    get: function () {
                        return this._m_items[this._m_activeIndex];
                    },
                    /**
                     * Set the active (highlighted) item.
                     *
                     * Only an enabled non-separator item can be set as the active item.
                     */
                    set: function (item) {
                        this.activeIndex = this._m_items.indexOf(item);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuBar.prototype, "count", {
                    /**
                     * Get the number of menu items in the menu bar.
                     */
                    get: function () {
                        return this._m_items.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the menu item at the given index.
                 */
                MenuBar.prototype.itemAt = function (index) {
                    return this._m_items[index];
                };
                /**
                 * Get the index of the given menu item.
                 */
                MenuBar.prototype.itemIndex = function (item) {
                    return this._m_items.indexOf(item);
                };
                /**
                 * Add a menu item to the end of the menu bar.
                 *
                 * Returns the new index of the item.
                 */
                MenuBar.prototype.addItem = function (item) {
                    return this.insertItem(this._m_items.length, item);
                };
                /**
                 * Insert a menu item into the menu bar at the given index.
                 *
                 * Returns the new index of the item.
                 */
                MenuBar.prototype.insertItem = function (index, item) {
                    var items = this._m_items;
                    index = Math.max(0, Math.min(index | 0, items.length));
                    if (index === items.length) {
                        items.push(item);
                    }
                    else {
                        items.splice(index, 0, item);
                    }
                    this.itemInserted(index, item);
                    return index;
                };
                /**
                 * Remove the menu item at the given index from the menu bar.
                 *
                 * Returns the removed item.
                 */
                MenuBar.prototype.takeItem = function (index) {
                    index = index | 0;
                    var items = this._m_items;
                    if (index < 0 || index >= items.length) {
                        return void 0;
                    }
                    var item;
                    if (index === items.length - 1) {
                        item = items.pop();
                    }
                    else {
                        item = items.splice(index, 1)[0];
                    }
                    this.itemRemoved(index, item);
                    return item;
                };
                /**
                 * Remove the given menu item from the menu bar.
                 *
                 * Returns the index of the removed item.
                 */
                MenuBar.prototype.removeItem = function (item) {
                    var index = this._m_items.indexOf(item);
                    if (index === -1) {
                        return -1;
                    }
                    this.takeItem(index);
                    return index;
                };
                /**
                 * Remove all menu items from the menu bar.
                 */
                MenuBar.prototype.clearItems = function () {
                    var items = this._m_items;
                    while (items.length) {
                        var item = items.pop();
                        var index = items.length;
                        this.itemRemoved(index, item);
                    }
                };
                /**
                 * Activate the next non-separator menu item.
                 *
                 * This is equivalent to pressing the right arrow key.
                 */
                MenuBar.prototype.activateNextItem = function () {
                    var from = this._m_activeIndex + 1;
                    var i = algo.findIndex(this._m_items, isSelectable, from, true);
                    this._setActiveIndex(i);
                    var menu = this._m_childMenu;
                    if (menu)
                        menu.activateNextItem();
                };
                /**
                 * Activate the previous non-separator menu item.
                 *
                 * This is equivalent to pressing the left arrow key.
                 */
                MenuBar.prototype.activatePreviousItem = function () {
                    var from = this._m_activeIndex - 1;
                    var i = algo.findLastIndex(this._m_items, isSelectable, from, true);
                    this._setActiveIndex(i);
                    var menu = this._m_childMenu;
                    if (menu)
                        menu.activateNextItem();
                };
                /**
                 * Activate the next menu item with the given mnemonic key.
                 *
                 * This is equivalent to pressing the mnemonic key.
                 */
                MenuBar.prototype.activateMnemonicItem = function (key) {
                    key = key.toUpperCase();
                    var i = algo.findIndex(this._m_items, function (it) {
                        return isSelectable(it) && it.mnemonic.toUpperCase() === key;
                    }, this._m_activeIndex + 1, true);
                    this._setActiveIndex(i);
                    var menu = this._m_childMenu;
                    if (menu)
                        menu.activateNextItem();
                };
                /**
                 * Open the submenu of the active menu item.
                 *
                 * This is equivalent to pressing the down arrow key.
                 *
                 * Returns true if the item was opened, false otherwise.
                 */
                MenuBar.prototype.openActiveItem = function () {
                    var index = this._m_activeIndex;
                    var item = this._m_items[index];
                    if (!item) {
                        return false;
                    }
                    this._setState(1 /* Active */);
                    this._setActiveIndex(index);
                    var menu = this._m_childMenu;
                    if (menu)
                        menu.activateNextItem();
                    return true;
                };
                /**
                 * Compute the size hint for the menu bar.
                 */
                MenuBar.prototype.sizeHint = function () {
                    return this.minSizeHint();
                };
                /**
                 * Compute the minimum size hint for the menu bar.
                 */
                MenuBar.prototype.minSizeHint = function () {
                    var style = window.getComputedStyle(this.node);
                    var height = parseInt(style.minHeight, 10) || 0;
                    return new Size(0, height);
                };
                /**
                 * A method called when a menu item is inserted into the menu bar.
                 */
                MenuBar.prototype.itemInserted = function (index, item) {
                    if (this._m_activeIndex !== -1) {
                        this._setState(0 /* Inactive */);
                        this._setActiveIndex(-1);
                    }
                    var node = createItemNode(item);
                    var next = this._m_nodes[index];
                    this.node.insertBefore(node, next);
                    this._m_nodes.splice(index, 0, node);
                    item.changed.connect(this._mi_changed, this);
                };
                /**
                 * A method called when a menu item is removed from the menu bar.
                 */
                MenuBar.prototype.itemRemoved = function (index, item) {
                    if (this._m_activeIndex !== -1) {
                        this._setState(0 /* Inactive */);
                        this._setActiveIndex(-1);
                    }
                    var node = this._m_nodes.splice(index, 1)[0];
                    this.node.removeChild(node);
                    item.changed.disconnect(this._mi_changed, this);
                };
                /**
                 * Create the DOM node for the widget.
                 */
                MenuBar.prototype.createNode = function () {
                    return document.createElement('ul');
                };
                /**
                 * A method invoked on the 'after-attach' event.
                 */
                MenuBar.prototype.afterAttachEvent = function (event) {
                    this.node.addEventListener('mousedown', this);
                    this.node.addEventListener('mousemove', this);
                    this.node.addEventListener('mouseleave', this);
                };
                /**
                 * A method invoked on the 'after-detach' event.
                 */
                MenuBar.prototype.afterDetachEvent = function (event) {
                    this.node.removeEventListener('mousedown', this);
                    this.node.removeEventListener('mousemove', this);
                    this.node.removeEventListener('mouseleave', this);
                };
                /**
                 * Handle the DOM events for the menu bar.
                 */
                MenuBar.prototype.handleEvent = function (event) {
                    switch (event.type) {
                        case 'mousedown':
                            this.domEvent_mousedown(event);
                            break;
                        case 'mousemove':
                            this.domEvent_mousemove(event);
                            break;
                        case 'mouseleave':
                            this.domEvent_mouseleave(event);
                            break;
                        case 'keydown':
                            this.domEvent_keydown(event);
                            break;
                        case 'keypress':
                            this.domEvent_keypress(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'mousedown' event for the menu bar.
                 */
                MenuBar.prototype.domEvent_mousedown = function (event) {
                    var x = event.clientX;
                    var y = event.clientY;
                    if (this._m_state === 0 /* Inactive */) {
                        if (event.button !== 0) {
                            return;
                        }
                        var index = algo.findIndex(this._m_nodes, function (n) { return hitTest(n, x, y); });
                        if (!isSelectable(this._m_items[index])) {
                            return;
                        }
                        this._setState(1 /* Active */);
                        this._setActiveIndex(index);
                    }
                    else {
                        if (hitTestMenus(this._m_childMenu, x, y)) {
                            return;
                        }
                        this._setState(0 /* Inactive */);
                        var index = algo.findIndex(this._m_nodes, function (n) { return hitTest(n, x, y); });
                        var ok = isSelectable(this._m_items[index]);
                        this._setActiveIndex(ok ? index : -1);
                    }
                };
                /**
                 * Handle the 'mousemove' event for the menu bar.
                 */
                MenuBar.prototype.domEvent_mousemove = function (event) {
                    var x = event.clientX;
                    var y = event.clientY;
                    var index = algo.findIndex(this._m_nodes, function (n) { return hitTest(n, x, y); });
                    if (index === this._m_activeIndex) {
                        return;
                    }
                    if (index === -1 && this._m_state === 1 /* Active */) {
                        return;
                    }
                    var ok = isSelectable(this._m_items[index]);
                    this._setActiveIndex(ok ? index : -1);
                };
                /**
                 * Handle the 'mouseleave' event for the menu bar.
                 */
                MenuBar.prototype.domEvent_mouseleave = function (event) {
                    if (this._m_state === 0 /* Inactive */) {
                        this._setActiveIndex(-1);
                    }
                };
                /**
                 * Handle the 'keydown' event for the menu bar.
                 */
                MenuBar.prototype.domEvent_keydown = function (event) {
                    event.stopPropagation();
                    var menu = this._m_childMenu;
                    var leaf = menu && Menu.leafMenu(menu);
                    switch (event.keyCode) {
                        case 13:
                            event.preventDefault();
                            if (leaf)
                                leaf.triggerActiveItem();
                            break;
                        case 27:
                            event.preventDefault();
                            if (leaf && leaf !== menu) {
                                leaf.close();
                            }
                            else {
                                this._setState(0 /* Inactive */);
                                this._setActiveIndex(-1);
                            }
                            break;
                        case 37:
                            event.preventDefault();
                            if (leaf && leaf !== menu) {
                                leaf.close();
                            }
                            else {
                                this.activatePreviousItem();
                            }
                            break;
                        case 38:
                            event.preventDefault();
                            if (leaf)
                                leaf.activatePreviousItem();
                            break;
                        case 39:
                            event.preventDefault();
                            if (!leaf || !leaf.openActiveItem()) {
                                this.activateNextItem();
                            }
                            break;
                        case 40:
                            event.preventDefault();
                            if (leaf)
                                leaf.activateNextItem();
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'keypress' event for the menu bar.
                 */
                MenuBar.prototype.domEvent_keypress = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var str = String.fromCharCode(event.charCode);
                    if (this._m_childMenu) {
                        Menu.leafMenu(this._m_childMenu).activateMnemonicItem(str);
                    }
                    else {
                        this.activateMnemonicItem(str);
                    }
                };
                /**
                 * Set the active item index for the menu bar.
                 *
                 * If the index points to an item, it is assumed to be selectable.
                 *
                 * This will take the appropriate action based on the menu bar state.
                 */
                MenuBar.prototype._setActiveIndex = function (index) {
                    var curr = this._m_nodes[this._m_activeIndex];
                    var next = this._m_nodes[index];
                    this._m_activeIndex = index;
                    if (curr) {
                        curr.classList.remove(ACTIVE_CLASS);
                        curr.classList.remove(SELECTED_CLASS);
                    }
                    if (next) {
                        next.classList.add(ACTIVE_CLASS);
                    }
                    if (next && this._m_state !== 0 /* Inactive */) {
                        next.classList.add(SELECTED_CLASS);
                    }
                    this._closeChildMenu();
                    if (!next || this._m_state !== 1 /* Active */) {
                        return;
                    }
                    var item = this._m_items[index];
                    if (!item.submenu) {
                        return;
                    }
                    this._openChildMenu(item.submenu, next);
                };
                /**
                 * Open the menu item's submenu using the node for location.
                 */
                MenuBar.prototype._openChildMenu = function (menu, node) {
                    var rect = node.getBoundingClientRect();
                    this._m_childMenu = menu;
                    menu.classList.add(MENU_CLASS);
                    menu.closed.connect(this._mn_closed, this);
                    menu.open(rect.left, rect.bottom, false, true);
                };
                /**
                 * Close the current child menu, if one exists.
                 */
                MenuBar.prototype._closeChildMenu = function () {
                    if (this._m_childMenu) {
                        this._m_childMenu.classList.remove(MENU_CLASS);
                        this._m_childMenu.closed.disconnect(this._mn_closed, this);
                        this._m_childMenu.close();
                        this._m_childMenu = null;
                    }
                };
                /**
                 * Set the state mode for the menu bar.
                 *
                 * This will update the menu bar event listeners accordingly.
                 */
                MenuBar.prototype._setState = function (state) {
                    if (state === this._m_state) {
                        return;
                    }
                    if (state === 0 /* Inactive */) {
                        this._useInactiveListeners();
                    }
                    else {
                        this._useActiveListeners();
                    }
                    this._m_state = state;
                };
                /**
                 * Update the event listeners for the inactive state.
                 */
                MenuBar.prototype._useInactiveListeners = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.node.addEventListener('mousedown', _this);
                        document.removeEventListener('mousedown', _this, true);
                        document.removeEventListener('keydown', _this, true);
                        document.removeEventListener('keypress', _this, true);
                    }, 0);
                };
                /**
                 * Update the event listeners for the active and open states.
                 */
                MenuBar.prototype._useActiveListeners = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.node.removeEventListener('mousedown', _this);
                        document.addEventListener('mousedown', _this, true);
                        document.addEventListener('keydown', _this, true);
                        document.addEventListener('keypress', _this, true);
                    }, 0);
                };
                /**
                 * Handle the `closed` signal from the child menu.
                 */
                MenuBar.prototype._mn_closed = function (sender) {
                    sender.closed.disconnect(this._mn_closed, this);
                    sender.classList.remove(MENU_CLASS);
                    this._m_childMenu = null;
                    this._setState(0 /* Inactive */);
                    this._setActiveIndex(-1);
                };
                /**
                 * Handle the `changed` signal from a menu item.
                 */
                MenuBar.prototype._mi_changed = function (sender) {
                    var items = this._m_items;
                    var nodes = this._m_nodes;
                    for (var i = 0, n = items.length; i < n; ++i) {
                        if (items[i] !== sender) {
                            continue;
                        }
                        if (i === this._m_activeIndex) {
                            this._setState(0 /* Inactive */);
                            this._setActiveIndex(-1);
                        }
                        initItemNode(sender, nodes[i]);
                    }
                };
                return MenuBar;
            })(Widget);
            menubar.MenuBar = MenuBar;
            /**
             * An internal enum describing the current state of the menu bar.
             */
            var MBState;
            (function (MBState) {
                MBState[MBState["Inactive"] = 0] = "Inactive";
                MBState[MBState["Active"] = 1] = "Active";
            })(MBState || (MBState = {}));
            ;
            /**
             * Test whether the menu bar item is selectable.
             *
             * This returns true if the item is enabled and not a separator.
             */
            function isSelectable(item) {
                return item && item.type !== 'separator' && item.enabled;
            }
            /**
             * Hit test the chain menus for the given client position.
             */
            function hitTestMenus(menu, x, y) {
                while (menu) {
                    if (hitTest(menu.node, x, y)) {
                        return true;
                    }
                    menu = menu.childMenu;
                }
                return false;
            }
            /**
             * Create and initialize the node for a menu item.
             */
            function createItemNode(item) {
                var node = document.createElement('li');
                var icon = document.createElement('span');
                var text = document.createElement('span');
                icon.className = ICON_CLASS;
                text.className = TEXT_CLASS;
                node.appendChild(icon);
                node.appendChild(text);
                initItemNode(item, node);
                return node;
            }
            /**
             * Initialize the node for a menu item.
             *
             * This can be called again to update the node state.
             */
            function initItemNode(item, node) {
                var classParts = [MENU_ITEM_CLASS];
                if (item.className) {
                    classParts.push(item.className);
                }
                if (item.type === 'separator') {
                    classParts.push(SEPARATOR_TYPE_CLASS);
                }
                if (!item.enabled) {
                    classParts.push(DISABLED_CLASS);
                }
                node.className = classParts.join(' ');
                node.children[1].textContent = item.text;
            }
        })(menubar = ui.menubar || (ui.menubar = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.menubar

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var tab;
        (function (tab) {
            'use strict';
            /**
             * The class name added to Tab instances.
             */
            var TAB_CLASS = 'p-Tab';
            /**
             * The class name assigned to a tab text sub element.
             */
            var TEXT_CLASS = 'p-Tab-text';
            /**
             * The class name assigned to a tab icon sub element.
             */
            var ICON_CLASS = 'p-Tab-icon';
            /**
             * The class name assigned to a tab close icon sub element.
             */
            var CLOSE_ICON_CLASS = 'p-Tab-close-icon';
            /**
             * The class name added to the selected tab.
             */
            var SELECTED_CLASS = 'p-selected';
            /**
             * The class name added to a closable tab.
             */
            var CLOSABLE_CLASS = 'p-closable';
            /**
             * A concrete implementation of ITab.
             */
            var Tab = (function () {
                /**
                 * Construct a new tab.
                 */
                function Tab(text) {
                    this._m_node = this.createNode();
                    if (text)
                        this.text = text;
                }
                Object.defineProperty(Tab.prototype, "text", {
                    /**
                     * Get the text for the tab.
                     */
                    get: function () {
                        return this._m_node.children[1].textContent;
                    },
                    /**
                     * Set the text for the tab.
                     */
                    set: function (text) {
                        this._m_node.children[1].textContent = text;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tab.prototype, "selected", {
                    /**
                     * Get whether the tab is selected.
                     */
                    get: function () {
                        return this._m_node.classList.contains(SELECTED_CLASS);
                    },
                    /**
                     * Set whether the tab is selected.
                     */
                    set: function (selected) {
                        if (selected) {
                            this._m_node.classList.add(SELECTED_CLASS);
                        }
                        else {
                            this._m_node.classList.remove(SELECTED_CLASS);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tab.prototype, "closable", {
                    /**
                     * Get whether the tab is closable.
                     */
                    get: function () {
                        return this._m_node.classList.contains(CLOSABLE_CLASS);
                    },
                    /**
                     * Set whether the tab is closable.
                     */
                    set: function (closable) {
                        if (closable) {
                            this._m_node.classList.add(CLOSABLE_CLASS);
                        }
                        else {
                            this._m_node.classList.remove(CLOSABLE_CLASS);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tab.prototype, "node", {
                    /**
                     * The DOM node for the tab.
                     */
                    get: function () {
                        return this._m_node;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tab.prototype, "closeIconNode", {
                    /**
                     * The DOM node for the close icon, if available.
                     */
                    get: function () {
                        return this._m_node.lastChild;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Create the DOM node for the tab.
                 */
                Tab.prototype.createNode = function () {
                    var node = document.createElement('li');
                    var icon = document.createElement('span');
                    var text = document.createElement('span');
                    var closeIcon = document.createElement('span');
                    node.className = TAB_CLASS;
                    icon.className = ICON_CLASS;
                    text.className = TEXT_CLASS;
                    closeIcon.className = CLOSE_ICON_CLASS;
                    node.appendChild(icon);
                    node.appendChild(text);
                    node.appendChild(closeIcon);
                    return node;
                };
                return Tab;
            })();
            tab.Tab = Tab;
        })(tab = ui.tab || (ui.tab = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.tab

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var tabbar;
        (function (tabbar) {
            'use strict';
            var Signal = phosphor.core.signal.Signal;
            var hitTest = ui.domutil.hitTest;
            var overrideCursor = ui.domutil.overrideCursor;
            var SizePolicy = ui.enums.SizePolicy;
            var Size = ui.geometry.Size;
            var Tab = ui.tab.Tab;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to TabBar instances.
             */
            var TAB_BAR_CLASS = 'p-TabBar';
            /**
             * The class name added to the tab bar inner div.
             */
            var INNER_CLASS = 'p-TabBar-inner';
            /**
             * The class name added to the inner div when transitioning tabs.
             */
            var TRANSITION_CLASS = 'p-transition';
            /**
             * The class name added to a tab being inserted.
             */
            var INSERTING_CLASS = 'p-inserting';
            /**
             * The class name added to a tab being removed.
             */
            var REMOVING_CLASS = 'p-removing';
            /**
             * The overlap threshold before swapping tabs.
             */
            var OVERLAP_THRESHOLD = 0.6;
            /**
             * The start drag distance threshold.
             */
            var DRAG_THRESHOLD = 5;
            /**
             * The detach distance threshold.
             */
            var DETACH_THRESHOLD = 20;
            /**
             * The tab transition duration.
             */
            var TRANSITION_DURATION = 150;
            /**
             * The stub size of an overlapped tab.
             */
            var TAB_STUB_SIZE = 5;
            /**
             * A widget which displays a row of tabs.
             */
            var TabBar = (function (_super) {
                __extends(TabBar, _super);
                /**
                 * Construct a new tab bar.
                 */
                function TabBar() {
                    _super.call(this);
                    this._m_movable = true;
                    this._m_tabWidth = 175;
                    this._m_tabOverlap = 1;
                    this._m_minTabWidth = 45;
                    this._m_selectedTab = null;
                    this._m_previousTab = null;
                    this._m_dragData = null;
                    this._m_tabs = [];
                    this._m_tabSelected = new Signal();
                    this._m_tabMoved = new Signal();
                    this._m_tabCloseRequested = new Signal();
                    this._m_tabDetachRequested = new Signal();
                    this.classList.add(TAB_BAR_CLASS);
                    this.verticalSizePolicy = 0 /* Fixed */;
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                TabBar.prototype.dispose = function () {
                    this._releaseMouse();
                    this._m_tabs = null;
                    this._m_tabMoved.dispose();
                    this._m_tabSelected.dispose();
                    this._m_tabCloseRequested.dispose();
                    this._m_tabDetachRequested.dispose();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(TabBar.prototype, "tabSelected", {
                    /**
                     * A signal emitted when a tab is selected.
                     */
                    get: function () {
                        return this._m_tabSelected;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabMoved", {
                    /**
                     * A signal emitted when a tab is moved.
                     */
                    get: function () {
                        return this._m_tabMoved;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabCloseRequested", {
                    /**
                     * A signal emitted when the user clicks a tab close icon.
                     */
                    get: function () {
                        return this._m_tabCloseRequested;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabDetachRequested", {
                    /**
                     * A signal emitted when a tab is dragged beyond the detach threshold.
                     */
                    get: function () {
                        return this._m_tabDetachRequested;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "selectedIndex", {
                    /**
                     * Get the index of the selected tab.
                     */
                    get: function () {
                        return this._m_tabs.indexOf(this._m_selectedTab);
                    },
                    /**
                     * Set the selected tab index.
                     */
                    set: function (index) {
                        var prev = this._m_selectedTab;
                        var next = this._m_tabs[index] || null;
                        if (prev === next) {
                            return;
                        }
                        if (prev)
                            prev.selected = false;
                        if (next)
                            next.selected = true;
                        index = next ? index : -1;
                        this._m_selectedTab = next;
                        this._m_previousTab = prev;
                        this._updateTabZOrder();
                        this._m_tabSelected.emit(this, index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "selectedTab", {
                    /**
                     * Get the selected tab.
                     */
                    get: function () {
                        return this._m_selectedTab;
                    },
                    /**
                     * Set the selected tab.
                     */
                    set: function (tab) {
                        this.selectedIndex = this._m_tabs.indexOf(tab);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "previousTab", {
                    /**
                     * Get the previously selected tab.
                     */
                    get: function () {
                        return this._m_previousTab;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabsMovable", {
                    /**
                     * Get whether the tabs are movable by the user.
                     */
                    get: function () {
                        return this._m_movable;
                    },
                    /**
                     * Set whether the tabs are movable by the user.
                     */
                    set: function (movable) {
                        this._m_movable = movable;
                        if (!movable)
                            this._releaseMouse();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabWidth", {
                    /**
                     * Get the desired tab width in pixels.
                     */
                    get: function () {
                        return this._m_tabWidth;
                    },
                    /**
                     * Set the desired tab width in pixels.
                     */
                    set: function (width) {
                        width = Math.max(0, width);
                        if (width === this._m_tabWidth) {
                            return;
                        }
                        this._m_tabWidth = width;
                        if (this.isAttached) {
                            this._updateTabLayout();
                            this.updateGeometry();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "minTabWidth", {
                    /**
                     * Get the minimum tab width in pixels.
                     */
                    get: function () {
                        return this._m_minTabWidth;
                    },
                    /**
                     * Set the minimum tab width in pixels.
                     */
                    set: function (width) {
                        width = Math.max(0, width);
                        if (width === this._m_minTabWidth) {
                            return;
                        }
                        this._m_minTabWidth = width;
                        if (this.isAttached) {
                            this._updateTabLayout();
                            this.updateGeometry();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "tabOverlap", {
                    /**
                     * Get the tab overlap amount in pixels.
                     */
                    get: function () {
                        return this._m_tabOverlap;
                    },
                    /**
                     * Set the tab overlap amount in pixels.
                     */
                    set: function (overlap) {
                        if (overlap === this._m_tabOverlap) {
                            return;
                        }
                        this._m_tabOverlap = overlap;
                        if (this.isAttached) {
                            this._updateTabLayout();
                            this.updateGeometry();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabBar.prototype, "count", {
                    /**
                     * Get the number of tabs in the tab bar.
                     */
                    get: function () {
                        return this._m_tabs.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the tab at the given index.
                 */
                TabBar.prototype.tabAt = function (index) {
                    return this._m_tabs[index];
                };
                /**
                 * Get the index of the given tab.
                 */
                TabBar.prototype.tabIndex = function (tab) {
                    return this._m_tabs.indexOf(tab);
                };
                /**
                 * Add a tab to the end of the tab bar.
                 *
                 * Returns the index of the tab.
                 */
                TabBar.prototype.addTab = function (tab) {
                    return this.insertTab(this._m_tabs.length, tab);
                };
                /**
                 * Insert a tab into the tab bar at the given index.
                 *
                 * Returns the index of the tab.
                 */
                TabBar.prototype.insertTab = function (index, tab) {
                    var tabs = this._m_tabs;
                    index = Math.max(0, Math.min(index | 0, tabs.length));
                    if (typeof tab === 'string') {
                        this._insertTab(index, new Tab(tab), true);
                    }
                    else {
                        var curr = tabs.indexOf(tab);
                        if (curr !== -1) {
                            index = this.moveTab(curr, index);
                        }
                        else {
                            this._insertTab(index, tab, true);
                        }
                    }
                    return index;
                };
                /**
                 * Move a tab from one index to another.
                 *
                 * Returns the new tab index.
                 */
                TabBar.prototype.moveTab = function (fromIndex, toIndex) {
                    fromIndex = fromIndex | 0;
                    var count = this._m_tabs.length;
                    if (fromIndex < 0 || fromIndex >= count) {
                        return -1;
                    }
                    toIndex = Math.max(0, Math.min(toIndex | 0, count - 1));
                    if (fromIndex === toIndex) {
                        return toIndex;
                    }
                    this._moveTab(fromIndex, toIndex);
                    return toIndex;
                };
                /**
                 * Remove a tab from the tab bar by index.
                 *
                 * Returns the removed tab.
                 */
                TabBar.prototype.takeAt = function (index, animate) {
                    if (animate === void 0) { animate = true; }
                    index = index | 0;
                    var tabs = this._m_tabs;
                    if (index < 0 || index >= tabs.length) {
                        return void 0;
                    }
                    var tab = this._m_tabs[index];
                    this._removeTab(index, animate);
                    return tab;
                };
                /**
                 * Remove a tab from the tab bar by value.
                 *
                 * Returns the index of the removed item.
                 */
                TabBar.prototype.removeTab = function (tab, animate) {
                    if (animate === void 0) { animate = true; }
                    var index = this._m_tabs.indexOf(tab);
                    this.takeAt(index, animate);
                    return index;
                };
                /**
                 * Remove all of the tabs from the tab bar.
                 *
                 * This is more efficient than removing the tabs individually.
                 */
                TabBar.prototype.clearTabs = function () {
                    this._releaseMouse();
                    if (this._m_selectedTab) {
                        this._m_selectedTab.selected = false;
                        this._m_selectedTab = null;
                    }
                    this._m_previousTab = null;
                    this._m_tabs.length = 0;
                    this.node.firstChild.innerHTML = '';
                    if (this.isAttached) {
                        this.updateGeometry();
                    }
                };
                /**
                 * Attach a tab to the tab bar.
                 *
                 * This will immediately insert the tab with no transition. It will
                 * then grab the mouse to continue the tab drag. This can be used
                 * by composite widgets which support tearoff tabs.
                 *
                 * This method assumes the left mouse button is down.
                 */
                TabBar.prototype.attachTab = function (args) {
                    var curr = this._m_tabs.indexOf(args.tab);
                    var inner = this.node.firstChild;
                    var innerRect = inner.getBoundingClientRect();
                    var localLeft = args.clientX - args.offsetX - innerRect.left;
                    var index = localLeft / (this._tabLayoutWidth() - this._m_tabOverlap);
                    index = Math.max(0, Math.min(Math.round(index), this._m_tabs.length));
                    if (curr === -1) {
                        this._insertTab(index, args.tab, false);
                    }
                    else if (curr !== index) {
                        this._moveTab(curr, index);
                    }
                    this.selectedIndex = index;
                    document.addEventListener('mouseup', this, true);
                    document.addEventListener('mousemove', this, true);
                    if (!this._m_movable) {
                        return;
                    }
                    var node = args.tab.node;
                    var tabWidth = this._tabLayoutWidth();
                    var offsetX = tabWidth * (args.offsetX / args.tabWidth);
                    var maxX = this.width - tabWidth;
                    var localX = args.clientX - innerRect.left - offsetX;
                    var targetX = Math.max(0, Math.min(localX, maxX));
                    var grab = overrideCursor(window.getComputedStyle(node).cursor);
                    this._m_dragData = {
                        node: node,
                        pressX: args.clientX,
                        pressY: args.clientY,
                        offsetX: offsetX,
                        offsetY: args.offsetY,
                        innerRect: innerRect,
                        cursorGrab: grab,
                        dragActive: true,
                        emitted: false,
                    };
                    inner.classList.add(TRANSITION_CLASS);
                    node.style.transition = 'none';
                    this._updateTabLayout();
                    node.style.left = targetX + 'px';
                };
                /**
                 * Compute the size hint for the tab bar.
                 */
                TabBar.prototype.sizeHint = function () {
                    var width = 0;
                    var count = this._m_tabs.length;
                    if (count > 0) {
                        var overlap = this._m_tabOverlap * (count - 1);
                        width = this._m_tabWidth * count - overlap;
                    }
                    var style = window.getComputedStyle(this.node);
                    var height = parseInt(style.minHeight, 10) || 0;
                    return new Size(width, height);
                };
                /**
                 * Compute the minimum size hint for the tab bar.
                 */
                TabBar.prototype.minSizeHint = function () {
                    var width = 0;
                    var count = this._m_tabs.length;
                    if (count > 0) {
                        var stub = TAB_STUB_SIZE * (count - 1);
                        width = this._m_minTabWidth + stub;
                    }
                    var style = window.getComputedStyle(this.node);
                    var height = parseInt(style.minHeight, 10) || 0;
                    return new Size(width, height);
                };
                /**
                 * Create the DOM node for the tab bar.
                 */
                TabBar.prototype.createNode = function () {
                    var node = document.createElement('div');
                    var inner = document.createElement('ul');
                    inner.className = INNER_CLASS;
                    node.appendChild(inner);
                    return node;
                };
                /**
                 * A method invoked on the 'after-attach' event.
                 */
                TabBar.prototype.afterAttachEvent = function (event) {
                    var node = this.node;
                    node.addEventListener('mousedown', this);
                    node.addEventListener('click', this);
                };
                /**
                 * A method invoked on the 'after-dettach' event.
                 */
                TabBar.prototype.afterDetachEvent = function (event) {
                    var node = this.node;
                    node.removeEventListener('mousedown', this);
                    node.removeEventListener('click', this);
                };
                /**
                 * A method invoked on the 'resize' event.
                 */
                TabBar.prototype.resizeEvent = function (event) {
                    this._updateTabLayout();
                };
                /**
                 * Handle the DOM events for the tab bar.
                 */
                TabBar.prototype.handleEvent = function (event) {
                    switch (event.type) {
                        case 'click':
                            this.domEvent_click(event);
                            break;
                        case 'mousedown':
                            this.domEvent_mousedown(event);
                            break;
                        case 'mousemove':
                            this.domEvent_mousemove(event);
                            break;
                        case 'mouseup':
                            this.domEvent_mouseup(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the click event for the tab bar.
                 */
                TabBar.prototype.domEvent_click = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    var clientX = event.clientX;
                    var clientY = event.clientY;
                    var index = this._indexAtPos(clientX, clientY);
                    if (index < 0) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    var tab = this._m_tabs[index];
                    var icon = tab.closeIconNode;
                    if (icon && icon === event.target && tab.closable) {
                        this._m_tabCloseRequested.emit(this, index);
                    }
                };
                /**
                 * Handle the mousedown event for the tab bar.
                 */
                TabBar.prototype.domEvent_mousedown = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    var clientX = event.clientX;
                    var clientY = event.clientY;
                    var index = this._indexAtPos(clientX, clientY);
                    if (index < 0) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    var tab = this._m_tabs[index];
                    var icon = tab.closeIconNode;
                    if (icon && icon === event.target) {
                        return;
                    }
                    if (this._m_movable) {
                        var node = tab.node;
                        var rect = node.getBoundingClientRect();
                        this._m_dragData = {
                            node: node,
                            pressX: clientX,
                            pressY: clientY,
                            offsetX: clientX - rect.left,
                            offsetY: clientY - rect.top,
                            innerRect: null,
                            cursorGrab: null,
                            dragActive: false,
                            emitted: false,
                        };
                    }
                    this.selectedIndex = index;
                    document.addEventListener('mouseup', this, true);
                    document.addEventListener('mousemove', this, true);
                };
                /**
                 * Handle the mouse move event for the tab bar.
                 */
                TabBar.prototype.domEvent_mousemove = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!this._m_movable || !this._m_dragData) {
                        return;
                    }
                    var clientX = event.clientX;
                    var clientY = event.clientY;
                    var data = this._m_dragData;
                    if (!data.dragActive) {
                        var dx = Math.abs(clientX - data.pressX);
                        var dy = Math.abs(clientY - data.pressY);
                        if (dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) {
                            return;
                        }
                        var inner = this.node.firstChild;
                        var innerRect = inner.getBoundingClientRect();
                        var cursor = window.getComputedStyle(data.node).cursor;
                        var grab = overrideCursor(cursor);
                        data.innerRect = innerRect;
                        data.cursorGrab = grab;
                        data.dragActive = true;
                        inner.classList.add(TRANSITION_CLASS);
                        data.node.style.transition = 'none';
                    }
                    var tabWidth = this._tabLayoutWidth();
                    if (!data.emitted) {
                        var innerRect = data.innerRect;
                        if (!inBounds(innerRect, DETACH_THRESHOLD, clientX, clientY)) {
                            var args = {
                                index: this.selectedIndex,
                                tabWidth: tabWidth,
                                offsetX: data.offsetX,
                                offsetY: data.offsetY,
                                clientX: clientX,
                                clientY: clientY,
                            };
                            data.emitted = true;
                            this._m_tabDetachRequested.emit(this, args);
                            if (!this._m_dragData) {
                                return;
                            }
                        }
                    }
                    var index = this.selectedIndex;
                    var naturalX = index * (tabWidth - this._m_tabOverlap);
                    var lowerBound = naturalX - tabWidth * OVERLAP_THRESHOLD;
                    var upperBound = naturalX + tabWidth * OVERLAP_THRESHOLD;
                    var localX = event.clientX - data.innerRect.left - data.offsetX;
                    var targetX = Math.max(0, Math.min(localX, this.width - tabWidth));
                    if (targetX < lowerBound) {
                        this.moveTab(index, index - 1);
                    }
                    else if (targetX > upperBound) {
                        this.moveTab(index, index + 1);
                    }
                    data.node.style.left = targetX + 'px';
                };
                /**
                 * Handle the mouse up event for the tab bar.
                 */
                TabBar.prototype.domEvent_mouseup = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this._releaseMouse();
                };
                /**
                 * Release the current mouse grab for the tab bar.
                 */
                TabBar.prototype._releaseMouse = function () {
                    var _this = this;
                    var data = this._m_dragData;
                    if (!data) {
                        return;
                    }
                    this._m_dragData = null;
                    document.removeEventListener('mouseup', this, true);
                    document.removeEventListener('mousemove', this, true);
                    if (data && data.dragActive) {
                        data.cursorGrab.dispose();
                        data.node.style.transition = '';
                        this._withTransition(function () { return _this._updateTabLayout(); });
                    }
                };
                /**
                 * Insert a new tab into the tab bar at a valid index.
                 */
                TabBar.prototype._insertTab = function (index, tab, animate) {
                    var _this = this;
                    tab.selected = false;
                    this._m_tabs.splice(index, 0, tab);
                    this.node.firstChild.appendChild(tab.node);
                    if (!this._m_selectedTab) {
                        this.selectedTab = tab;
                    }
                    else {
                        this._updateTabZOrder();
                    }
                    if (!this.isAttached) {
                        return;
                    }
                    if (animate) {
                        this._withTransition(function () {
                            tab.node.classList.add(INSERTING_CLASS);
                            _this._updateTabLayout();
                        }, function () {
                            tab.node.classList.remove(INSERTING_CLASS);
                        });
                    }
                    else {
                        this._withTransition(function () { return _this._updateTabLayout(); });
                    }
                    this.updateGeometry();
                };
                /**
                 * Move an item to a new index in the tab bar.
                 */
                TabBar.prototype._moveTab = function (fromIndex, toIndex) {
                    var _this = this;
                    var tab = this._m_tabs.splice(fromIndex, 1)[0];
                    this._m_tabs.splice(toIndex, 0, tab);
                    this._updateTabZOrder();
                    this._m_tabMoved.emit(this, { fromIndex: fromIndex, toIndex: toIndex });
                    if (!this.isAttached) {
                        return;
                    }
                    this._withTransition(function () { return _this._updateTabLayout(); });
                };
                /**
                 * Remove the tab at the given index from the tab bar.
                 */
                TabBar.prototype._removeTab = function (index, animate) {
                    var _this = this;
                    this._releaseMouse();
                    var tabs = this._m_tabs;
                    var tab = tabs.splice(index, 1)[0];
                    tab.selected = false;
                    tab.node.style.zIndex = '0';
                    if (tab === this._m_selectedTab) {
                        var next = this._m_previousTab || tabs[index] || tabs[index - 1];
                        this._m_selectedTab = null;
                        this._m_previousTab = null;
                        if (next) {
                            this.selectedTab = next;
                        }
                        else {
                            this._m_tabSelected.emit(this, -1);
                        }
                    }
                    else if (tab === this._m_previousTab) {
                        this._m_previousTab = null;
                        this._updateTabZOrder();
                    }
                    else {
                        this._updateTabZOrder();
                    }
                    var inner = this.node.firstChild;
                    if (!this.isAttached) {
                        inner.removeChild(tab.node);
                        return;
                    }
                    if (animate) {
                        this._withTransition(function () {
                            tab.node.classList.add(REMOVING_CLASS);
                            _this._updateTabLayout();
                        }, function () {
                            tab.node.classList.remove(REMOVING_CLASS);
                            inner.removeChild(tab.node);
                        });
                    }
                    else {
                        inner.removeChild(tab.node);
                        this._withTransition(function () { return _this._updateTabLayout(); });
                    }
                    this.updateGeometry();
                };
                /**
                 * Update the Z order of the tab nodes in the tab bar.
                 */
                TabBar.prototype._updateTabZOrder = function () {
                    var tabs = this._m_tabs;
                    var index = tabs.length - 1;
                    for (var i = 0, n = tabs.length; i < n; ++i) {
                        var tab = tabs[i];
                        if (tab === this._m_selectedTab) {
                            tab.node.style.zIndex = tabs.length + '';
                        }
                        else {
                            tab.node.style.zIndex = index-- + '';
                        }
                    }
                };
                /**
                 * Get the index of the tab which covers the given client position.
                 */
                TabBar.prototype._indexAtPos = function (clientX, clientY) {
                    var tabs = this._m_tabs;
                    for (var i = 0, n = tabs.length; i < n; ++i) {
                        if (hitTest(tabs[i].node, clientX, clientY)) {
                            return i;
                        }
                    }
                    return -1;
                };
                /**
                 * Compute the layout width of a tab.
                 *
                 * This computes a tab size as close as possible to the preferred
                 * tab size (but not less than the minimum), taking into account
                 * the current tab bar inner div width and tab overlap setting.
                 */
                TabBar.prototype._tabLayoutWidth = function () {
                    var count = this._m_tabs.length;
                    if (count === 0) {
                        return 0;
                    }
                    var totalOverlap = this._m_tabOverlap * (count - 1);
                    var totalWidth = this._m_tabWidth * count - totalOverlap;
                    if (this.width >= totalWidth) {
                        return this._m_tabWidth;
                    }
                    var ideal = (this.width + totalOverlap) / count;
                    return Math.max(this._m_minTabWidth, ideal);
                };
                /**
                 * Update the layout of the tabs in the tab bar.
                 *
                 * This will update the position and size of the tabs according to
                 * the current inner width of the tab bar. The position of the drag
                 * tab will not be updated.
                 */
                TabBar.prototype._updateTabLayout = function () {
                    var left = 0;
                    var width = this.width;
                    var tabs = this._m_tabs;
                    var stub = TAB_STUB_SIZE;
                    var data = this._m_dragData;
                    var overlap = this._m_tabOverlap;
                    var tabWidth = this._tabLayoutWidth();
                    var dragNode = data && data.dragActive && data.node;
                    for (var i = 0, n = tabs.length; i < n; ++i) {
                        var node = tabs[i].node;
                        var style = node.style;
                        if (node !== dragNode) {
                            var stubOffset = tabWidth + stub * (n - i - 1);
                            if (left + stubOffset > width) {
                                left = Math.max(0, width - stubOffset);
                            }
                            style.left = left + 'px';
                        }
                        style.width = tabWidth + 'px';
                        left += tabWidth - overlap;
                    }
                };
                /**
                 * A helper function to execute an animated transition.
                 *
                 * This will execute the enter after the transition class has been
                 * added to the tab bar, and execute the exit callback after the
                 * transition duration has expired and the transition class has
                 * been removed from the tab bar.
                 *
                 * If there is an active drag in progress, the transition class
                 * will not be removed from the inner div on exit.
                 */
                TabBar.prototype._withTransition = function (enter, exit) {
                    var _this = this;
                    var inner = this.node.firstChild;
                    inner.classList.add(TRANSITION_CLASS);
                    if (enter)
                        enter();
                    setTimeout(function () {
                        var data = _this._m_dragData;
                        if (!data || !data.dragActive) {
                            inner.classList.remove(TRANSITION_CLASS);
                        }
                        if (exit)
                            exit();
                    }, TRANSITION_DURATION);
                };
                return TabBar;
            })(Widget);
            tabbar.TabBar = TabBar;
            /**
             * Test whether a point lies within an expanded rect.
             */
            function inBounds(r, v, x, y) {
                if (x < r.left - v) {
                    return false;
                }
                if (x >= r.right + v) {
                    return false;
                }
                if (y < r.top - v) {
                    return false;
                }
                if (y >= r.bottom + v) {
                    return false;
                }
                return true;
            }
        })(tabbar = ui.tabbar || (ui.tabbar = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.tabbar

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var spaceritem;
        (function (spaceritem) {
            'use strict';
            var SizePolicy = ui.enums.SizePolicy;
            var Size = ui.geometry.Size;
            /**
             * A concrete implementation of ILayoutItem which manages empty space.
             *
             * User code will not typically create instances of this class directly.
             */
            var SpacerItem = (function () {
                /**
                 * Construct a new spacer item.
                 */
                function SpacerItem(width, height, hPolicy, vPolicy) {
                    this.setSize(width, height, hPolicy, vPolicy);
                }
                Object.defineProperty(SpacerItem.prototype, "isWidget", {
                    /**
                     * Test whether the item manages a widget.
                     */
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "isSpacer", {
                    /**
                     * Test whether the item manages empty space.
                     */
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "isHidden", {
                    /**
                     * Test whether the item should be treated as hidden.
                     */
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "widget", {
                    /**
                     * The widget the item manages, if any.
                     */
                    get: function () {
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "expandHorizontal", {
                    /**
                     * Test whether the item should be expanded horizontally.
                     */
                    get: function () {
                        return (this._m_hPolicy & 4 /* ExpandFlag */) !== 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "expandVertical", {
                    /**
                     * Test Whether the item should be expanded vertically.
                     */
                    get: function () {
                        return (this._m_vPolicy & 4 /* ExpandFlag */) !== 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SpacerItem.prototype, "alignment", {
                    /**
                     * The alignment of the item in its layout cell.
                     */
                    get: function () {
                        return 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Change the size of the spacer item.
                 *
                 * The owner layout must be invalidated to reflect the change.
                 */
                SpacerItem.prototype.setSize = function (width, height, hPolicy, vPolicy) {
                    var w = Math.max(0, width);
                    var h = Math.max(0, height);
                    this._m_size = new Size(w, h);
                    this._m_hPolicy = hPolicy;
                    this._m_vPolicy = vPolicy;
                };
                /**
                 * Transpose the effective orientation of the spacer item.
                 */
                SpacerItem.prototype.transpose = function () {
                    var size = this._m_size;
                    var hPolicy = this._m_hPolicy;
                    var vPolicy = this._m_vPolicy;
                    this._m_size = new Size(size.height, size.width);
                    this._m_vPolicy = hPolicy;
                    this._m_hPolicy = vPolicy;
                };
                /**
                 * Invalidate the cached data for the item.
                 */
                SpacerItem.prototype.invalidate = function () {
                };
                /**
                 * Compute the preferred size of the item.
                 */
                SpacerItem.prototype.sizeHint = function () {
                    return this._m_size;
                };
                /**
                 * Compute the minimum size of the item.
                 */
                SpacerItem.prototype.minSize = function () {
                    var size = this._m_size;
                    var w = this._m_hPolicy & 2 /* ShrinkFlag */ ? 0 : size.width;
                    var h = this._m_vPolicy & 2 /* ShrinkFlag */ ? 0 : size.height;
                    return new Size(w, h);
                };
                /**
                 * Compute the maximum size of the item.
                 */
                SpacerItem.prototype.maxSize = function () {
                    var size = this._m_size;
                    var w = this._m_hPolicy & 1 /* GrowFlag */ ? Infinity : size.width;
                    var h = this._m_vPolicy & 1 /* GrowFlag */ ? Infinity : size.height;
                    return new Size(w, h);
                };
                /**
                 * Set the geometry of the item.
                 */
                SpacerItem.prototype.setGeometry = function (x, y, width, height) {
                };
                return SpacerItem;
            })();
            spaceritem.SpacerItem = SpacerItem;
        })(spaceritem = ui.spaceritem || (ui.spaceritem = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.spaceritem

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var widgetitem;
        (function (widgetitem) {
            'use strict';
            var Alignment = ui.enums.Alignment;
            var SizePolicy = ui.enums.SizePolicy;
            var Size = ui.geometry.Size;
            /**
             * A concrete implementation of ILayoutItem which manages a widget.
             *
             * User code will not typically create instances of this class directly.
             */
            var WidgetItem = (function () {
                /**
                 * Construct a new widget item.
                 */
                function WidgetItem(widget, alignment) {
                    if (alignment === void 0) { alignment = 0; }
                    this._m_origHint = null;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                    this._m_widget = widget;
                    this._m_alignment = alignment;
                }
                Object.defineProperty(WidgetItem.prototype, "isWidget", {
                    /**
                     * Test whether the item manages a widget.
                     */
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "isSpacer", {
                    /**
                     * Test whether the item manages empty space.
                     */
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "isHidden", {
                    /**
                     * Test whether the item should be treated as hidden.
                     */
                    get: function () {
                        return this._m_widget.isHidden;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "widget", {
                    /**
                     * The widget the item manages, if any.
                     */
                    get: function () {
                        return this._m_widget;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "expandHorizontal", {
                    /**
                     * Test whether the item should be expanded horizontally.
                     */
                    get: function () {
                        if (this._m_alignment & Alignment.H_Mask) {
                            return false;
                        }
                        if (this._m_widget.horizontalSizePolicy & 4 /* ExpandFlag */) {
                            return true;
                        }
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "expandVertical", {
                    /**
                     * Test Whether the item should be expanded vertically.
                     */
                    get: function () {
                        if (this._m_alignment & Alignment.V_Mask) {
                            return false;
                        }
                        if (this._m_widget.verticalSizePolicy & 4 /* ExpandFlag */) {
                            return true;
                        }
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WidgetItem.prototype, "alignment", {
                    /**
                     * Get the alignment of the item in its layout cell.
                     */
                    get: function () {
                        return this._m_alignment;
                    },
                    /**
                     * Set the alignment of the item in its layout cell.
                     */
                    set: function (alignment) {
                        this._m_alignment = alignment;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Invalidate the cached data for the item.
                 */
                WidgetItem.prototype.invalidate = function () {
                    this._m_origHint = null;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                };
                /**
                 * Compute the preferred size of the item.
                 */
                WidgetItem.prototype.sizeHint = function () {
                    if (this._m_sizeHint === null) {
                        this._updateSizes();
                    }
                    return this._m_sizeHint;
                };
                /**
                 * Compute the minimum size of the item.
                 */
                WidgetItem.prototype.minSize = function () {
                    if (this._m_minSize === null) {
                        this._updateSizes();
                    }
                    return this._m_minSize;
                };
                /**
                 * Compute the maximum size of the item.
                 */
                WidgetItem.prototype.maxSize = function () {
                    if (this._m_maxSize === null) {
                        this._updateSizes();
                    }
                    return this._m_maxSize;
                };
                /**
                 * Set the geometry of the item.
                 */
                WidgetItem.prototype.setGeometry = function (x, y, width, height) {
                    var widget = this._m_widget;
                    if (widget.isHidden) {
                        return;
                    }
                    var w = width;
                    var h = height;
                    var alignment = this._m_alignment;
                    if (alignment & Alignment.H_Mask) {
                        var igW = widget.horizontalSizePolicy === SizePolicy.Ignored;
                        w = Math.min(w, igW ? this._m_origHint.width : this._m_sizeHint.width);
                    }
                    if (alignment & Alignment.V_Mask) {
                        var igH = widget.verticalSizePolicy === SizePolicy.Ignored;
                        h = Math.min(h, igH ? this._m_origHint.height : this._m_sizeHint.height);
                    }
                    var minSize = this._m_minSize;
                    var maxSize = this._m_maxSize;
                    var w = Math.max(minSize.width, Math.min(w, maxSize.width));
                    var h = Math.max(minSize.height, Math.min(h, maxSize.height));
                    if (alignment & 2 /* Right */) {
                        x += width - w;
                    }
                    else if (alignment & 4 /* HCenter */) {
                        x += (width - w) / 2;
                    }
                    if (alignment & 32 /* Bottom */) {
                        y += height - h;
                    }
                    else if (alignment & 64 /* VCenter */) {
                        y += (height - h) / 2;
                    }
                    widget.setGeometry(x, y, w, h);
                };
                /**
                 * Update the computed sizes for the widget item.
                 */
                WidgetItem.prototype._updateSizes = function () {
                    var widget = this._m_widget;
                    if (widget.isHidden) {
                        var zero = new Size(0, 0);
                        this._m_origHint = zero;
                        this._m_sizeHint = zero;
                        this._m_minSize = zero;
                        this._m_maxSize = zero;
                        return;
                    }
                    var min = widget.minSize;
                    var max = widget.maxSize;
                    var sHint = widget.sizeHint();
                    var mHint = widget.minSizeHint();
                    var xHint = widget.maxSizeHint();
                    var vsp = widget.verticalSizePolicy;
                    var hsp = widget.horizontalSizePolicy;
                    var al = this._m_alignment;
                    this._m_origHint = sHint;
                    this._m_sizeHint = makeSizeHint(sHint, mHint, min, max, hsp, vsp);
                    this._m_minSize = makeMinSize(sHint, mHint, min, max, hsp, vsp);
                    this._m_maxSize = makeMaxSize(sHint, mHint, xHint, min, max, hsp, vsp, al);
                };
                return WidgetItem;
            })();
            widgetitem.WidgetItem = WidgetItem;
            /**
             * Make the effective size hint for the given sizing values.
             */
            function makeSizeHint(sizeHint, minHint, minSize, maxSize, hPolicy, vPolicy) {
                var w = 0;
                var h = 0;
                if (hPolicy !== SizePolicy.Ignored) {
                    w = Math.max(minHint.width, sizeHint.width);
                }
                if (vPolicy !== SizePolicy.Ignored) {
                    h = Math.max(minHint.height, sizeHint.height);
                }
                w = Math.max(minSize.width, Math.min(w, maxSize.width));
                h = Math.max(minSize.height, Math.min(h, maxSize.height));
                return new Size(w, h);
            }
            /**
             * Make the effective minimum size for the given sizing values.
             */
            function makeMinSize(sizeHint, minHint, minSize, maxSize, hPolicy, vPolicy) {
                var w = 0;
                var h = 0;
                if (hPolicy !== SizePolicy.Ignored) {
                    if (hPolicy & 2 /* ShrinkFlag */) {
                        w = minHint.width;
                    }
                    else {
                        w = Math.max(minHint.width, sizeHint.width);
                    }
                }
                if (vPolicy !== SizePolicy.Ignored) {
                    if (vPolicy & 2 /* ShrinkFlag */) {
                        h = minHint.height;
                    }
                    else {
                        h = Math.max(minHint.height, sizeHint.height);
                    }
                }
                w = Math.max(minSize.width, Math.min(w, maxSize.width));
                h = Math.max(minSize.height, Math.min(h, maxSize.height));
                return new Size(w, h);
            }
            /**
             * Make the effective maximum size for the given sizing values.
             */
            function makeMaxSize(sizeHint, minHint, maxHint, minSize, maxSize, hPolicy, vPolicy, alignment) {
                var w = Infinity;
                var h = Infinity;
                if ((alignment & Alignment.H_Mask) === 0) {
                    if (hPolicy !== SizePolicy.Ignored) {
                        if (hPolicy & 1 /* GrowFlag */) {
                            w = Math.max(minHint.width, maxHint.width);
                        }
                        else {
                            w = Math.max(minHint.width, sizeHint.width);
                        }
                    }
                    w = Math.max(minSize.width, Math.min(w, maxSize.width));
                }
                if ((alignment & Alignment.V_Mask) === 0) {
                    if (vPolicy !== SizePolicy.Ignored) {
                        if (vPolicy & 1 /* GrowFlag */) {
                            h = Math.max(minHint.height, maxHint.height);
                        }
                        else {
                            h = Math.max(minHint.height, sizeHint.height);
                        }
                    }
                    h = Math.max(minSize.height, Math.min(h, maxSize.height));
                }
                return new Size(w, h);
            }
        })(widgetitem = ui.widgetitem || (ui.widgetitem = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.widgetitem

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var layoutsizing;
        (function (layoutsizing) {
            'use strict';
            /**
             * A data item for the `distributeSpace` function.
             */
            var SizingItem = (function () {
                function SizingItem() {
                    /**
                     * The preferred size of the item.
                     */
                    this.sizeHint = 0;
                    /**
                     * The minimum size of the item.
                     *
                     * The item will never sized less than this value.
                     *
                     * Limits: [0, Infinity) && <= maxSize
                     */
                    this.minSize = 0;
                    /**
                     * The maximum size of the item.
                     *
                     * The item will never be sized greater than this value.
                     *
                     * Limits: [0, Infinity] && >= minSize
                     */
                    this.maxSize = Infinity;
                    /**
                     * The stretch factor for the item.
                     *
                     * This controls how much the item stretches relative to the other
                     * items when layout space is distributed. An item with a stretch
                     * factor of zero will only be resized after all stretch items
                     * and expansive items have been sized to their limits.
                     *
                     * Limits: [0, Infinity)
                     */
                    this.stretch = 1;
                    /**
                     * Whether the item should consume extra space if available.
                     *
                     * Expansive items will absorb any remaining space after all
                     * stretch items have been resized to their limits.
                     */
                    this.expansive = false;
                    /**
                     * The computed size of the item.
                     *
                     * This value is the output of the algorithm.
                     */
                    this.size = 0;
                    /**
                     * An internal storage property for the layout algorithm.
                     */
                    this.done = false;
                }
                return SizingItem;
            })();
            layoutsizing.SizingItem = SizingItem;
            /**
             * Distribute space among the given sizing items.
             *
             * The distributes the given layout spacing among the sizing items
             * according the following algorithm:
             *
             *   1) Initialize the item's size to its size hint and compute
             *      the sums for each of size hint, min size, and max size.
             *
             *   2) If the total size hint equals the layout space, return.
             *
             *   3) If the layout space is less than the total min size,
             *      set all items to their min size and return.
             *
             *   4) If the layout space is greater than the total max size,
             *      set all items to their max size and return.
             *
             *   5) If the layout space is less than the total size hint,
             *      distribute the negative delta as follows:
             *
             *     a) Shrink each item with a stretch factor greater than
             *        zero by an amount proportional to the sum of stretch
             *        factors and negative space. If the item reaches its
             *        minimum size, remove it and its stretch factor from
             *        the computation.
             *
             *     b) If after adjusting all stretch items there remains
             *        negative space, distribute it equally among items
             *        with a stretch factor of zero. If an item reaches
             *        its minimum size, remove it from the computation.
             *
             *   6) If the layout space is greater than the total size hint,
             *      distribute the positive delta as follows:
             *
             *     a) Expand each item with a stretch factor greater than
             *        zero by an amount proportional to the sum of stretch
             *        factors and positive space. If the item reaches its
             *        maximum size, remove it and its stretch factor from
             *        the computation.
             *
             *     b) If after adjusting all stretch items there remains
             *        positive space, distribute it equally among items
             *        with the `expansive` flag set. If an item reaches
             *        its maximum size, remove it from the computation.
             *
             *     c) If after adjusting all stretch and expansive items
             *        there remains positive space, distribute it equally
             *        among items with a stretch factor of zero. If an item
             *        reaches its maximum size, remove it from the computation.
             */
            function distributeSpace(items, space) {
                var count = items.length;
                if (count === 0) {
                    return;
                }
                // Setup the counters.
                var totalMin = 0;
                var totalMax = 0;
                var totalSize = 0;
                var totalStretch = 0;
                var stretchCount = 0;
                var expansiveCount = 0;
                for (var i = 0; i < count; ++i) {
                    var item = items[i];
                    var size = startSize(item);
                    item.done = false;
                    item.size = size;
                    totalSize += size;
                    totalMin += item.minSize;
                    totalMax += item.maxSize;
                    if (item.stretch > 0) {
                        totalStretch += item.stretch;
                        stretchCount++;
                    }
                    if (item.expansive) {
                        expansiveCount++;
                    }
                }
                // 1) If the space is equal to the total size, return.
                if (space === totalSize) {
                    return;
                }
                // 2) If the space is less than the total min, minimize each item.
                if (space <= totalMin) {
                    for (var i = 0; i < count; ++i) {
                        var item = items[i];
                        item.size = item.minSize;
                    }
                    return;
                }
                // 3) If the space is greater than the total max, maximize each item.
                if (space >= totalMax) {
                    for (var i = 0; i < count; ++i) {
                        var item = items[i];
                        item.size = item.maxSize;
                    }
                    return;
                }
                // The loops below perform sub-pixel precision sizing. A near zero
                // value is used for compares instead of zero to ensure that the
                // loop terminates when the subdivided space is reasonably small.
                var nearZero = 0.01;
                // A counter which decreaes monotonically each time an item is
                // resized to its limit. This ensure the loops terminate even
                // if there is space remaining to distribute.
                var notDoneCount = count;
                // 5) Distribute negative delta space.
                if (space < totalSize) {
                    // 5a) Shrink each stretch item by an amount proportional to its
                    // stretch factor. If it reaches its limit it's marked as done.
                    // The loop progresses in phases where each item gets a chance to
                    // consume its fair share for the phase, regardless of whether an
                    // item before it reached its limit. This continues until the
                    // stretch items or the free space is exhausted.
                    var freeSpace = totalSize - space;
                    while (stretchCount > 0 && freeSpace > nearZero) {
                        var distSpace = freeSpace;
                        var distStretch = totalStretch;
                        for (var i = 0; i < count; ++i) {
                            var item = items[i];
                            if (item.done || item.stretch === 0) {
                                continue;
                            }
                            var amt = item.stretch * distSpace / distStretch;
                            if (item.size - amt <= item.minSize) {
                                freeSpace -= item.size - item.minSize;
                                totalStretch -= item.stretch;
                                item.size = item.minSize;
                                item.done = true;
                                notDoneCount--;
                                stretchCount--;
                            }
                            else {
                                freeSpace -= amt;
                                item.size -= amt;
                            }
                        }
                    }
                    while (notDoneCount > 0 && freeSpace > nearZero) {
                        var amt = freeSpace / notDoneCount;
                        for (var i = 0; i < count; ++i) {
                            var item = items[i];
                            if (item.done) {
                                continue;
                            }
                            if (item.size - amt <= item.minSize) {
                                freeSpace -= item.size - item.minSize;
                                item.size = item.minSize;
                                item.done = true;
                                notDoneCount--;
                            }
                            else {
                                freeSpace -= amt;
                                item.size -= amt;
                            }
                        }
                    }
                }
                else {
                    // 6a) Expand each stretch item by an amount proportional to its
                    // stretch factor. If it reaches its limit it's marked as done.
                    // The loop progresses in phases where each item gets a chance to
                    // consume its fair share for the phase, regardless of whether an
                    // item before it reached its limit. This continues until the
                    // stretch items or the free space is exhausted.
                    var freeSpace = space - totalSize;
                    while (stretchCount > 0 && freeSpace > nearZero) {
                        var distSpace = freeSpace;
                        var distStretch = totalStretch;
                        for (var i = 0; i < count; ++i) {
                            var item = items[i];
                            if (item.done || item.stretch === 0) {
                                continue;
                            }
                            var amt = item.stretch * distSpace / distStretch;
                            if (item.size + amt >= item.maxSize) {
                                freeSpace -= item.maxSize - item.size;
                                totalStretch -= item.stretch;
                                item.size = item.maxSize;
                                item.done = true;
                                notDoneCount--;
                                stretchCount--;
                                if (item.expansive) {
                                    expansiveCount--;
                                }
                            }
                            else {
                                freeSpace -= amt;
                                item.size += amt;
                            }
                        }
                    }
                    while (expansiveCount > 0 && freeSpace > nearZero) {
                        var amt = freeSpace / expansiveCount;
                        for (var i = 0; i < count; ++i) {
                            var item = items[i];
                            if (item.done || !item.expansive) {
                                continue;
                            }
                            if (item.size + amt >= item.maxSize) {
                                freeSpace -= item.maxSize - item.size;
                                item.size = item.maxSize;
                                item.done = true;
                                expansiveCount--;
                                notDoneCount--;
                            }
                            else {
                                freeSpace -= amt;
                                item.size += amt;
                            }
                        }
                    }
                    while (notDoneCount > 0 && freeSpace > nearZero) {
                        var amt = freeSpace / notDoneCount;
                        for (var i = 0; i < count; ++i) {
                            var item = items[i];
                            if (item.done) {
                                continue;
                            }
                            if (item.size + amt >= item.maxSize) {
                                freeSpace -= item.maxSize - item.size;
                                item.size = item.maxSize;
                                item.done = true;
                                notDoneCount--;
                            }
                            else {
                                freeSpace -= amt;
                                item.size += amt;
                            }
                        }
                    }
                }
            }
            layoutsizing.distributeSpace = distributeSpace;
            /**
             * Compute the starting size for a sizing item.
             */
            function startSize(item) {
                return Math.max(item.minSize, Math.min(item.sizeHint, item.maxSize));
            }
        })(layoutsizing = ui.layoutsizing || (ui.layoutsizing = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.layoutsizing

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var layout;
        (function (layout) {
            'use strict';
            var postEvent = phosphor.core.eventloop.postEvent;
            var EVT_LAYOUT_REQUEST = ui.eventtypes.EVT_LAYOUT_REQUEST;
            /**
             * The base class of phosphor layout classes.
             *
             * The Layout class does not define an interface for adding widgets
             * or layout items to the layout. A subclass should define that API
             * in a manner suitable for its intended use case.
             *
             * This class must be subclassed to be useful.
             */
            var Layout = (function () {
                /**
                 * Construct a new layout.
                 */
                function Layout() {
                    this._m_parentWidget = null;
                }
                /**
                 * Dispose of the resources held by the layout.
                 */
                Layout.prototype.dispose = function () {
                    this._m_parentWidget = null;
                };
                Object.defineProperty(Layout.prototype, "parentWidget", {
                    /**
                     * Get the parent widget of the layout.
                     */
                    get: function () {
                        return this._m_parentWidget;
                    },
                    /**
                     * Set the parent widget of the layout.
                     *
                     * The parent widget can only be set once, and is done automatically
                     * when the layout is installed on a widget. It should not be set
                     * directly by user code.
                     */
                    set: function (widget) {
                        if (!widget) {
                            throw new Error('cannot set parent widget to null');
                        }
                        if (widget === this._m_parentWidget) {
                            return;
                        }
                        if (this._m_parentWidget) {
                            throw new Error('layout already installed on a widget');
                        }
                        this._m_parentWidget = widget;
                        this.reparentChildWidgets();
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Layout.prototype, "count", {
                    /**
                     * Get the number of layout items in the layout.
                     *
                     * This must be implemented by a subclass.
                     */
                    get: function () {
                        throw new Error('not implemented');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the layout item at the given index.
                 *
                 * The items are numbered consecutively from `0` to `count - 1`.
                 *
                 * This must be implemented by a subclass.
                 */
                Layout.prototype.itemAt = function (index) {
                    throw new Error('not implemented');
                };
                /**
                 * Remove and return the layout item at the given index.
                 *
                 * This must be implemented by a subclass.
                 */
                Layout.prototype.takeAt = function (index) {
                    throw new Error('not implemented');
                };
                /**
                 * Compute the preferred size of the layout.
                 *
                 * This must be implemented by a subclass.
                 */
                Layout.prototype.sizeHint = function () {
                    throw new Error('not implemented');
                };
                /**
                 * Compute the minimum required size for the layout.
                 *
                 * This must be implemented by a subclass.
                 */
                Layout.prototype.minSize = function () {
                    throw new Error('not implemented');
                };
                /**
                 * Compute the maximum allowed size for the layout.
                 *
                 * This must be implemented by a subclass.
                 */
                Layout.prototype.maxSize = function () {
                    throw new Error('not implemented');
                };
                /**
                 * Get the index of the given layout item.
                 *
                 * Returns -1 if the item is not in the layout.
                 */
                Layout.prototype.itemIndex = function (item) {
                    for (var i = 0, n = this.count; i < n; ++i) {
                        if (this.itemAt(i) === item) {
                            return i;
                        }
                    }
                    return -1;
                };
                /**
                 * Remove the given item from the layout.
                 *
                 * This is a no-op if the item is not in the layout.
                 *
                 * Returns the index of the removed item.
                 */
                Layout.prototype.removeItem = function (item) {
                    var i = this.itemIndex(item);
                    if (i >= 0)
                        this.takeAt(i);
                    return i;
                };
                /**
                 * Get the widget at the given index.
                 *
                 * Returns undefined if no widget exists for the index.
                 */
                Layout.prototype.widgetAt = function (index) {
                    var item = this.itemAt(index);
                    return (item && item.widget) || void 0;
                };
                /**
                 * Get the index of the given widget.
                 *
                 * Returns -1 if the widget is not in the layout.
                 */
                Layout.prototype.widgetIndex = function (widget) {
                    for (var i = 0, n = this.count; i < n; ++i) {
                        if (this.itemAt(i).widget === widget) {
                            return i;
                        }
                    }
                    return -1;
                };
                /**
                 * Remove the given widget from the layout.
                 *
                 * This is a no-op if the widget is not in the layout.
                 *
                 * Returns the index of the removed widget.
                 */
                Layout.prototype.removeWidget = function (widget) {
                    var i = this.widgetIndex(widget);
                    if (i >= 0)
                        this.takeAt(i);
                    return i;
                };
                /**
                 * Get the alignment for the given widget.
                 *
                 * Returns 0 if the widget is not in the layout.
                 */
                Layout.prototype.alignmentFor = function (widget) {
                    var i = this.widgetIndex(widget);
                    return i >= 0 ? this.itemAt(i).alignment : 0;
                };
                /**
                 * Set the alignment for the given widget.
                 *
                 * If the widget is not in the layout, this is a no-op.
                 */
                Layout.prototype.setAlignment = function (widget, alignment) {
                    var i = this.widgetIndex(widget);
                    if (i >= 0) {
                        var item = this.itemAt(i);
                        if (item.alignment !== alignment) {
                            item.alignment = alignment;
                            this.invalidate();
                        }
                    }
                };
                /**
                 * Invalidate the cached layout data and enqueue an update.
                 *
                 * This should be reimplemented by a subclass as needed.
                 */
                Layout.prototype.invalidate = function () {
                    var parent = this._m_parentWidget;
                    if (parent) {
                        postEvent(parent, EVT_LAYOUT_REQUEST);
                        parent.updateGeometry();
                    }
                };
                /**
                 * Process an event sent to the parent widget.
                 *
                 * This is called before the event is processed normally.
                 *
                 * Subclasses should reimplement this method as needed.
                 */
                Layout.prototype.processWidgetEvent = function (event) {
                    switch (event.type) {
                        case 'resize':
                        case 'layout-request':
                            if (this._m_parentWidget.isVisible) {
                                this.updateLayout();
                            }
                            break;
                        case 'child-removed':
                            this.removeWidget(event.child);
                            break;
                        case 'before-attach':
                            this.invalidate();
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * A method invoked on parent 'resize' and 'layout-request' events.
                 *
                 * Subclasses should reimplement this method to update the layout.
                 *
                 * The default implementation is a no-op.
                 */
                Layout.prototype.updateLayout = function () {
                };
                /**
                 * Reparent the child widgets to the layout's parent.
                 *
                 * This is called when the layout is installed on a widget.
                 */
                Layout.prototype.reparentChildWidgets = function () {
                    var parent = this._m_parentWidget;
                    if (parent) {
                        for (var i = 0, n = this.count; i < n; ++i) {
                            var child = this.itemAt(i).widget;
                            if (child)
                                child.parent = parent;
                        }
                    }
                };
                /**
                 * Add a child widget to the layout.
                 *
                 * This should be called by a subclass when a widget is added to
                 * layout. It ensures that the widget is properly parented to the
                 * layout's parent widget.
                 */
                Layout.prototype.addChildWidget = function (child) {
                    var parent = this._m_parentWidget;
                    if (parent)
                        child.parent = parent;
                };
                return Layout;
            })();
            layout.Layout = Layout;
        })(layout = ui.layout || (ui.layout = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.layout

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var boxlayout;
        (function (boxlayout) {
            'use strict';
            var Direction = ui.enums.Direction;
            var SizePolicy = ui.enums.SizePolicy;
            var Size = ui.geometry.Size;
            var Layout = ui.layout.Layout;
            var SizingItem = ui.layoutsizing.SizingItem;
            var distributeSpace = ui.layoutsizing.distributeSpace;
            var SpacerItem = ui.spaceritem.SpacerItem;
            var WidgetItem = ui.widgetitem.WidgetItem;
            /**
             * A layout which arranges widgets in a row or column.
             */
            var BoxLayout = (function (_super) {
                __extends(BoxLayout, _super);
                /**
                 * Construct a new box layout.
                 */
                function BoxLayout(direction, spacing) {
                    if (spacing === void 0) { spacing = 8; }
                    _super.call(this);
                    this._m_dirty = true;
                    this._m_fixedSpace = 0;
                    this._m_lastSpaceIndex = -1;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                    this._m_sizingItems = [];
                    this._m_layoutItems = [];
                    this._m_direction = direction;
                    this._m_spacing = Math.max(0, spacing);
                }
                /**
                 * Dispose of the resources held by the layout.
                 */
                BoxLayout.prototype.dispose = function () {
                    this._m_sizingItems = null;
                    this._m_layoutItems = null;
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(BoxLayout.prototype, "direction", {
                    /**
                     * Get the layout direction for the box layout.
                     */
                    get: function () {
                        return this._m_direction;
                    },
                    /**
                     * Set the layout direction for the box layout.
                     */
                    set: function (direction) {
                        if (direction === this._m_direction) {
                            return;
                        }
                        var wasHoriz = isHorizontal(this._m_direction);
                        var nowHoriz = isHorizontal(direction);
                        if (wasHoriz !== nowHoriz) {
                            this._m_layoutItems.forEach(function (item) {
                                if (item instanceof SpacerItem) {
                                    item.transpose();
                                }
                            });
                        }
                        this._m_direction = direction;
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoxLayout.prototype, "spacing", {
                    /**
                     * Get the inter-element fixed spacing for the box layout.
                     */
                    get: function () {
                        return this._m_spacing;
                    },
                    /**
                     * Set the inter-element fixed spacing for the box layout.
                     */
                    set: function (spacing) {
                        spacing = Math.max(0, spacing);
                        if (spacing === this._m_spacing) {
                            return;
                        }
                        this._m_spacing = spacing;
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoxLayout.prototype, "count", {
                    /**
                     * Get the number of layout items in the layout.
                     */
                    get: function () {
                        return this._m_layoutItems.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the layout item at the specified index.
                 */
                BoxLayout.prototype.itemAt = function (index) {
                    return this._m_layoutItems[index];
                };
                /**
                 * Remove and return the layout item at the specified index.
                 */
                BoxLayout.prototype.takeAt = function (index) {
                    index = index | 0;
                    if (index < 0 || index >= this._m_layoutItems.length) {
                        return void 0;
                    }
                    var item = this._m_layoutItems.splice(index, 1)[0];
                    this._m_sizingItems.splice(index, 1);
                    this.invalidate();
                    return item;
                };
                /**
                 * Move a layout item from one index to another.
                 *
                 * Returns the new index of the item.
                 */
                BoxLayout.prototype.moveItem = function (fromIndex, toIndex) {
                    fromIndex = fromIndex | 0;
                    var n = this._m_layoutItems.length;
                    if (fromIndex < 0 || fromIndex >= n) {
                        return -1;
                    }
                    toIndex = Math.max(0, Math.min(toIndex | 0, n - 1));
                    if (fromIndex === toIndex) {
                        return toIndex;
                    }
                    var item = this._m_layoutItems.splice(fromIndex, 1)[0];
                    this._m_layoutItems.splice(toIndex, 0, item);
                    var sizeItem = this._m_sizingItems.splice(fromIndex, 1)[0];
                    this._m_sizingItems.splice(toIndex, 0, sizeItem);
                    this.invalidate();
                    return toIndex;
                };
                /**
                 * Add a widget as the last item in the layout.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added widget.
                 */
                BoxLayout.prototype.addWidget = function (widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    return this.insertWidget(this.count, widget, stretch, alignment);
                };
                /**
                 * Insert a widget into the layout at the given index.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added item.
                 */
                BoxLayout.prototype.insertWidget = function (index, widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    var i = this.widgetIndex(widget);
                    if (i >= 0) {
                        return this.moveItem(i, index);
                    }
                    this.addChildWidget(widget);
                    var item = new WidgetItem(widget, alignment);
                    return this._insertItem(index, item, stretch);
                };
                /**
                 * Add a fixed amount of spacing to the end of the layout.
                 *
                 * Returns the index of the added space.
                 */
                BoxLayout.prototype.addSpacing = function (size) {
                    return this.insertSpacing(this.count, size);
                };
                /**
                 * Insert a fixed amount of spacing at the given index.
                 *
                 * Returns the index of the added space.
                 */
                BoxLayout.prototype.insertSpacing = function (index, size) {
                    var item = createFixedSpacer(this._m_direction, size);
                    return this._insertItem(index, item, 0);
                };
                /**
                 * Add stretchable space to the end of the layout.
                 *
                 * Returns the index of the added spac.
                 */
                BoxLayout.prototype.addStretch = function (stretch) {
                    if (stretch === void 0) { stretch = 0; }
                    return this.insertStretch(this.count, stretch);
                };
                /**
                 * Insert stretchable space at the given index.
                 */
                BoxLayout.prototype.insertStretch = function (index, stretch) {
                    if (stretch === void 0) { stretch = 0; }
                    var item = createStretchSpacer(this._m_direction);
                    return this._insertItem(index, item, stretch);
                };
                /**
                 * Get the stretch factor for the item at the given index.
                 *
                 * Returns -1 if the index is out of range.
                 */
                BoxLayout.prototype.stretchAt = function (index) {
                    var item = this._m_sizingItems[index];
                    return item ? item.stretch : -1;
                };
                /**
                 * Set the stretch factor for the item at the given index.
                 */
                BoxLayout.prototype.setStretch = function (index, stretch) {
                    stretch = Math.max(0, stretch | 0);
                    var item = this._m_sizingItems[index];
                    if (item && item.stretch !== stretch) {
                        item.stretch = stretch;
                        this.invalidate();
                    }
                };
                /**
                 * Invalidate the cached layout data and enqueue an update.
                 */
                BoxLayout.prototype.invalidate = function () {
                    this._m_dirty = true;
                    _super.prototype.invalidate.call(this);
                };
                /**
                 * Compute the preferred size of the layout.
                 */
                BoxLayout.prototype.sizeHint = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_sizeHint;
                };
                /**
                 * Compute the minimum size of the layout.
                 */
                BoxLayout.prototype.minSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_minSize;
                };
                /**
                 * Compute the maximum size of the layout.
                 */
                BoxLayout.prototype.maxSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_maxSize;
                };
                /**
                 * Update the geometry of the child layout items.
                 *
                 * This is called automatically when the parent widget is resized
                 * or when it receives a posted 'layout-request' event. It should
                 * not normally be invoked directly.
                 */
                BoxLayout.prototype.updateLayout = function () {
                    // Bail early when no work needs to be done.
                    var parent = this.parentWidget;
                    if (!parent) {
                        return;
                    }
                    var layoutItems = this._m_layoutItems;
                    if (layoutItems.length === 0) {
                        return;
                    }
                    // Refresh the layout items if needed.
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    // Setup commonly used variables.
                    var boxD = parent.boxData;
                    var width = parent.width - boxD.horizontalSum;
                    var height = parent.height - boxD.verticalSum;
                    var dir = this._m_direction;
                    var sizingItems = this._m_sizingItems;
                    var lastSpaceIndex = this._m_lastSpaceIndex;
                    // Distribute the layout space to the sizing items.
                    var mainSpace = isHorizontal(dir) ? width : height;
                    distributeSpace(sizingItems, mainSpace - this._m_fixedSpace);
                    // Update the geometry of the items according to the layout
                    // direction. Fixed spacing is added before each item which
                    // immediately follows a non-hidden widget item. This has the
                    // effect of of collapsing all sibling spacers and ensuring
                    // that only one fixed spacing increment occurs between any
                    // two widgets. It also prevents fixed spacing from being
                    // added before the first item or after the last item.
                    var y = boxD.paddingTop;
                    var x = boxD.paddingLeft;
                    var lastWasWidget = false;
                    var spacing = this._m_spacing;
                    var count = layoutItems.length;
                    if (dir === 0 /* LeftToRight */) {
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                x += spacing;
                            }
                            var size = sizingItems[i].size;
                            item.setGeometry(x, y, size, height);
                            lastWasWidget = item.isWidget;
                            x += size;
                        }
                    }
                    else if (dir === 2 /* TopToBottom */) {
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                y += spacing;
                            }
                            var size = sizingItems[i].size;
                            item.setGeometry(x, y, width, size);
                            lastWasWidget = item.isWidget;
                            y += size;
                        }
                    }
                    else if (dir === 1 /* RightToLeft */) {
                        x += width;
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                x -= spacing;
                            }
                            var size = sizingItems[i].size;
                            item.setGeometry(x - size, y, size, height);
                            lastWasWidget = item.isWidget;
                            x -= size;
                        }
                    }
                    else {
                        y += height;
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                y -= spacing;
                            }
                            var size = sizingItems[i].size;
                            item.setGeometry(x, y - size, width, size);
                            lastWasWidget = item.isWidget;
                            y -= size;
                        }
                    }
                };
                /**
                 * Initialize the layout items and internal sizes for the layout.
                 */
                BoxLayout.prototype._setupGeometry = function () {
                    // Bail early when no work needs to be done.
                    if (!this._m_dirty) {
                        return;
                    }
                    this._m_dirty = false;
                    // No parent means the layout is not yet attached.
                    var parent = this.parentWidget;
                    if (!parent) {
                        var zero = new Size(0, 0);
                        this._m_sizeHint = zero;
                        this._m_minSize = zero;
                        this._m_maxSize = zero;
                        this._m_fixedSpace = 0;
                        return;
                    }
                    // Invalidate the layout items. This is done here instead of the
                    // `invalidate` method as this method is invoked only when needed,
                    // typically on a collapsed event. It also finds the last visible
                    // widget item index, which is needed for fixed spacing allocation.
                    var lastSpaceIndex = -1;
                    var layoutItems = this._m_layoutItems;
                    var count = layoutItems.length;
                    for (var i = 0; i < count; ++i) {
                        var item = layoutItems[i];
                        item.invalidate();
                        if (item.isWidget && !item.isHidden) {
                            lastSpaceIndex = i;
                        }
                    }
                    // Setup commonly used variables.
                    var hintW = 0;
                    var hintH = 0;
                    var minW = 0;
                    var minH = 0;
                    var maxW;
                    var maxH;
                    var fixedSpace = 0;
                    var lastWasWidget = false;
                    var dir = this._m_direction;
                    var spacing = this._m_spacing;
                    var sizingItems = this._m_sizingItems;
                    // Compute the size bounds according to the layout orientation.
                    // Empty layout items behave as if they don't exist and fixed
                    // spacing is before items which immediately follow a non-hidden
                    // widget item. This prevents leading and trailing fixed spacing
                    // as well as fixed spacing after spacers. The sizing items are
                    // initialized according to their corresponding layout item.
                    // The stretch factor of the sizing item was set when it was
                    // constructed and does not need to be updated.
                    if (isHorizontal(dir)) {
                        maxH = Infinity;
                        maxW = count > 0 ? 0 : Infinity;
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            var sizingItem = sizingItems[i];
                            if (item.isHidden) {
                                sizingItem.expansive = false;
                                sizingItem.sizeHint = 0;
                                sizingItem.minSize = 0;
                                sizingItem.maxSize = 0;
                                continue;
                            }
                            var itemHint = item.sizeHint();
                            var itemMin = item.minSize();
                            var itemMax = item.maxSize();
                            hintH = Math.max(hintH, itemHint.height);
                            minH = Math.max(minH, itemMin.height);
                            maxH = Math.min(maxH, itemMax.height);
                            hintW += itemHint.width;
                            minW += itemMin.width;
                            maxW += itemMax.width;
                            sizingItem.expansive = item.expandHorizontal;
                            sizingItem.sizeHint = itemHint.width;
                            sizingItem.minSize = itemMin.width;
                            sizingItem.maxSize = itemMax.width;
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                fixedSpace += spacing;
                            }
                            lastWasWidget = item.isWidget;
                        }
                        hintW += fixedSpace;
                        minW += fixedSpace;
                        maxW += fixedSpace;
                    }
                    else {
                        maxW = Infinity;
                        maxH = count > 0 ? 0 : Infinity;
                        for (var i = 0; i < count; ++i) {
                            var item = layoutItems[i];
                            var sizingItem = sizingItems[i];
                            if (item.isHidden) {
                                sizingItem.expansive = false;
                                sizingItem.sizeHint = 0;
                                sizingItem.minSize = 0;
                                sizingItem.maxSize = 0;
                                continue;
                            }
                            var itemHint = item.sizeHint();
                            var itemMin = item.minSize();
                            var itemMax = item.maxSize();
                            hintW = Math.max(hintW, itemHint.width);
                            minW = Math.max(minW, itemMin.width);
                            maxW = Math.min(maxW, itemMax.width);
                            hintH += itemHint.height;
                            minH += itemMin.height;
                            maxH += itemMax.height;
                            sizingItem.expansive = item.expandVertical;
                            sizingItem.sizeHint = itemHint.height;
                            sizingItem.minSize = itemMin.height;
                            sizingItem.maxSize = itemMax.height;
                            if (lastWasWidget && i <= lastSpaceIndex) {
                                fixedSpace += spacing;
                            }
                            lastWasWidget = item.isWidget;
                        }
                        hintH += fixedSpace;
                        minH += fixedSpace;
                        maxH += fixedSpace;
                    }
                    // Account for padding and border on the parent.
                    var boxD = parent.boxData;
                    var boxW = boxD.horizontalSum;
                    var boxH = boxD.verticalSum;
                    hintW += boxW;
                    hintH += boxH;
                    minW += boxW;
                    minH += boxH;
                    maxW += boxW;
                    maxH += boxH;
                    // Update the internal sizes.
                    this._m_sizeHint = new Size(hintW, hintH);
                    this._m_minSize = new Size(minW, minH);
                    this._m_maxSize = new Size(maxW, maxH);
                    this._m_fixedSpace = fixedSpace;
                    this._m_lastSpaceIndex = lastSpaceIndex;
                };
                /**
                 * Insert a layout item with the specified stretch factor.
                 *
                 * Returns the index of the added item.
                 */
                BoxLayout.prototype._insertItem = function (index, item, stretch) {
                    var sizingItem = createSizingItem(Math.max(0, stretch | 0));
                    index = Math.max(0, Math.min(index | 0, this._m_layoutItems.length));
                    this._m_layoutItems.splice(index, 0, item);
                    this._m_sizingItems.splice(index, 0, sizingItem);
                    this.invalidate();
                    return index;
                };
                return BoxLayout;
            })(Layout);
            boxlayout.BoxLayout = BoxLayout;
            /**
             * Create a sizing item with the given stretch factor.
             */
            function createSizingItem(stretch) {
                var item = new SizingItem();
                item.stretch = stretch;
                return item;
            }
            /**
             * Create a spacer item for the given fixed size.
             */
            function createFixedSpacer(dir, size) {
                if (isHorizontal(dir)) {
                    return new SpacerItem(size, 0, 0 /* Fixed */, SizePolicy.Minimum);
                }
                return new SpacerItem(0, size, SizePolicy.Minimum, 0 /* Fixed */);
            }
            /**
             * Create a stretch spacer item.
             */
            function createStretchSpacer(dir) {
                if (isHorizontal(dir)) {
                    return new SpacerItem(0, 0, SizePolicy.Expanding, SizePolicy.Minimum);
                }
                return new SpacerItem(0, 0, SizePolicy.Minimum, SizePolicy.Expanding);
            }
            /**
             * Test whether the given direction is horizontal.
             */
            function isHorizontal(dir) {
                return dir === 0 /* LeftToRight */ || dir === 1 /* RightToLeft */;
            }
        })(boxlayout = ui.boxlayout || (ui.boxlayout = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.boxlayout

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var singlelayout;
        (function (singlelayout) {
            'use strict';
            var Size = ui.geometry.Size;
            var Layout = ui.layout.Layout;
            var WidgetItem = ui.widgetitem.WidgetItem;
            /**
             * A layout in which positions a single child at time.
             *
             * This is useful for widgets which hold a single content child.
             */
            var SingleLayout = (function (_super) {
                __extends(SingleLayout, _super);
                /**
                 * Construct a new single layout.
                 */
                function SingleLayout() {
                    _super.call(this);
                    this._m_dirty = true;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                    this._m_widgetItem = null;
                }
                /**
                 * Dispose of the resources held by the layout.
                 */
                SingleLayout.prototype.dispose = function () {
                    this._m_widgetItem = null;
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(SingleLayout.prototype, "widget", {
                    /**
                     * Get the widget managed by the layout.
                     */
                    get: function () {
                        var item = this._m_widgetItem;
                        return item ? item.widget : null;
                    },
                    /**
                     * Set the widget managed by the layout.
                     */
                    set: function (widget) {
                        var item = this._m_widgetItem;
                        if (item && item.widget === widget) {
                            return;
                        }
                        this._m_widgetItem = new WidgetItem(widget);
                        this.addChildWidget(widget);
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SingleLayout.prototype, "count", {
                    /**
                     * Get the number of layout items in the layout.
                     */
                    get: function () {
                        return this._m_widgetItem ? 1 : 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the layout item at the specified index.
                 */
                SingleLayout.prototype.itemAt = function (index) {
                    var item = this._m_widgetItem;
                    if (item && index === 0) {
                        return item;
                    }
                    return void 0;
                };
                /**
                 * Remove and return the layout item at the specified index.
                 */
                SingleLayout.prototype.takeAt = function (index) {
                    var item = this._m_widgetItem;
                    if (item && index === 0) {
                        this._m_widgetItem = null;
                        this.invalidate();
                        return item;
                    }
                    return void 0;
                };
                /**
                 * Invalidate the cached layout data and enqueue an update.
                 */
                SingleLayout.prototype.invalidate = function () {
                    this._m_dirty = true;
                    _super.prototype.invalidate.call(this);
                };
                /**
                 * Compute the preferred size of the layout.
                 */
                SingleLayout.prototype.sizeHint = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_sizeHint;
                };
                /**
                 * Compute the minimum size of the layout.
                 */
                SingleLayout.prototype.minSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_minSize;
                };
                /**
                 * Compute the maximum size of the layout.
                 */
                SingleLayout.prototype.maxSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_maxSize;
                };
                /**
                 * Update the geometry of the child layout items.
                 *
                 * This is called automatically when the parent widget is resized
                 * or when it receives a posted 'layout-request' event. It should
                 * not normally be invoked directly.
                 */
                SingleLayout.prototype.updateLayout = function () {
                    // Bail early when no work needs to be done.
                    var parent = this.parentWidget;
                    if (!parent) {
                        return;
                    }
                    var item = this._m_widgetItem;
                    if (!item) {
                        return;
                    }
                    // Refresh the layout items if needed.
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    // Update the geometry of the visible item.
                    var boxD = parent.boxData;
                    var x = boxD.paddingLeft;
                    var y = boxD.paddingTop;
                    var w = parent.width - boxD.horizontalSum;
                    var h = parent.height - boxD.verticalSum;
                    item.setGeometry(x, y, w, h);
                };
                /**
                 * Initialize the layout items and internal sizes for the layout.
                 */
                SingleLayout.prototype._setupGeometry = function () {
                    // Bail early when no work needs to be done.
                    if (!this._m_dirty) {
                        return;
                    }
                    this._m_dirty = false;
                    // No parent means the layout is not yet attached.
                    var parent = this.parentWidget;
                    if (!parent) {
                        var zero = new Size(0, 0);
                        this._m_sizeHint = zero;
                        this._m_minSize = zero;
                        this._m_maxSize = zero;
                        return;
                    }
                    // Compute the size bounds based on the widget item.
                    var hintW = 0;
                    var hintH = 0;
                    var minW = 0;
                    var minH = 0;
                    var maxW = Infinity;
                    var maxH = Infinity;
                    var item = this._m_widgetItem;
                    if (item) {
                        item.invalidate();
                        var itemHint = item.sizeHint();
                        var itemMin = item.minSize();
                        var itemMax = item.maxSize();
                        hintW = Math.max(hintW, itemHint.width);
                        hintH = Math.max(hintH, itemHint.height);
                        minW = Math.max(minW, itemMin.width);
                        minH = Math.max(minH, itemMin.height);
                        maxW = Math.min(maxW, itemMax.width);
                        maxH = Math.min(maxH, itemMax.height);
                    }
                    // Account for padding and border on the parent.
                    var boxD = parent.boxData;
                    var boxW = boxD.horizontalSum;
                    var boxH = boxD.verticalSum;
                    hintW += boxW;
                    hintH += boxH;
                    minW += boxW;
                    minH += boxH;
                    maxW += boxW;
                    maxH += boxH;
                    // Update the internal sizes.
                    this._m_sizeHint = new Size(hintW, hintH);
                    this._m_minSize = new Size(minW, minH);
                    this._m_maxSize = new Size(maxW, maxH);
                };
                return SingleLayout;
            })(Layout);
            singlelayout.SingleLayout = SingleLayout;
        })(singlelayout = ui.singlelayout || (ui.singlelayout = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.singlelayout

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var stacklayout;
        (function (stacklayout) {
            'use strict';
            var Signal = phosphor.core.signal.Signal;
            var Size = ui.geometry.Size;
            var Layout = ui.layout.Layout;
            var WidgetItem = ui.widgetitem.WidgetItem;
            /**
             * A layout in which only one child widget is visible at a time.
             */
            var StackLayout = (function (_super) {
                __extends(StackLayout, _super);
                /**
                 * Construct a new stack layout.
                 */
                function StackLayout() {
                    _super.call(this);
                    this._m_dirty = true;
                    this._m_currentIndex = -1;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                    this._m_layoutItems = [];
                    this._m_currentChanged = new Signal();
                    this._m_widgetRemoved = new Signal();
                }
                /**
                 * Dispose of the resources held by the layout.
                 */
                StackLayout.prototype.dispose = function () {
                    this._m_layoutItems = null;
                    this._m_currentChanged.dispose();
                    this._m_widgetRemoved.dispose();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(StackLayout.prototype, "currentChanged", {
                    /**
                     * A signal emitted when the current index is changed.
                     */
                    get: function () {
                        return this._m_currentChanged;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackLayout.prototype, "widgetRemoved", {
                    /**
                     * A signal emitted when a widget is removed from the layout.
                     */
                    get: function () {
                        return this._m_widgetRemoved;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackLayout.prototype, "currentIndex", {
                    /**
                     * Get the current index of the stack.
                     */
                    get: function () {
                        return this._m_currentIndex;
                    },
                    /**
                     * Set the current index of the stack.
                     */
                    set: function (index) {
                        var prev = this.currentWidget;
                        var next = this.widgetAt(index);
                        if (prev === next) {
                            return;
                        }
                        index = next ? index : -1;
                        this._m_currentIndex = index;
                        if (prev)
                            prev.hide();
                        if (next)
                            next.show();
                        // IE repaints before firing the animation frame which processes
                        // the layout event triggered by the show/hide calls above. This
                        // causes unsightly flicker when changing the visible widget. To
                        // avoid this, the layout is updated immediately.
                        this.updateLayout();
                        this._m_currentChanged.emit(this, index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackLayout.prototype, "currentWidget", {
                    /**
                     * Get the current widget in the stack.
                     */
                    get: function () {
                        return this.widgetAt(this.currentIndex);
                    },
                    /**
                     * Set the current widget in the stack.
                     */
                    set: function (widget) {
                        this.currentIndex = this.widgetIndex(widget);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackLayout.prototype, "count", {
                    /**
                     * Get the number of layout items in the layout.
                     */
                    get: function () {
                        return this._m_layoutItems.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the layout item at the specified index.
                 */
                StackLayout.prototype.itemAt = function (index) {
                    return this._m_layoutItems[index];
                };
                /**
                 * Remove and return the layout item at the specified index.
                 */
                StackLayout.prototype.takeAt = function (index) {
                    index = index | 0;
                    if (index < 0 || index >= this._m_layoutItems.length) {
                        return void 0;
                    }
                    var item = this._m_layoutItems.splice(index, 1)[0];
                    if (index === this._m_currentIndex) {
                        this._m_currentIndex = -1;
                        this.invalidate();
                        this._m_currentChanged.emit(this, -1);
                    }
                    else if (index < this._m_currentIndex) {
                        this._m_currentIndex--;
                    }
                    this._m_widgetRemoved.emit(this, { index: index, widget: item.widget });
                    return item;
                };
                /**
                 * Move a layout item from one index to another.
                 *
                 * Returns the new index of the item.
                 */
                StackLayout.prototype.moveItem = function (fromIndex, toIndex) {
                    fromIndex = fromIndex | 0;
                    var n = this._m_layoutItems.length;
                    if (fromIndex < 0 || fromIndex >= n) {
                        return -1;
                    }
                    toIndex = Math.max(0, Math.min(toIndex | 0, n - 1));
                    if (fromIndex === toIndex) {
                        return toIndex;
                    }
                    var item = this._m_layoutItems.splice(fromIndex, 1)[0];
                    this._m_layoutItems.splice(toIndex, 0, item);
                    var current = this._m_currentIndex;
                    if (fromIndex === current) {
                        current = toIndex;
                    }
                    else {
                        if (fromIndex < current)
                            current--;
                        if (toIndex <= current)
                            current++;
                    }
                    this._m_currentIndex = current;
                    return toIndex;
                };
                /**
                 * Add a widget as the last item in the layout.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added widget.
                 */
                StackLayout.prototype.addWidget = function (widget) {
                    return this.insertWidget(this._m_layoutItems.length, widget);
                };
                /**
                 * Insert a widget into the layout at the given index.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added widget.
                 */
                StackLayout.prototype.insertWidget = function (index, widget) {
                    var i = this.widgetIndex(widget);
                    if (i >= 0) {
                        return this.moveItem(i, index);
                    }
                    widget.hide();
                    this.addChildWidget(widget);
                    index = Math.max(0, Math.min(index | 0, this._m_layoutItems.length));
                    this._m_layoutItems.splice(index, 0, new WidgetItem(widget));
                    if (index <= this._m_currentIndex) {
                        this._m_currentIndex++;
                    }
                    return index;
                };
                /**
                 * Invalidate the cached layout data and enqueue an update.
                 */
                StackLayout.prototype.invalidate = function () {
                    this._m_dirty = true;
                    _super.prototype.invalidate.call(this);
                };
                /**
                 * Compute the preferred size of the layout.
                 */
                StackLayout.prototype.sizeHint = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_sizeHint;
                };
                /**
                 * Compute the minimum size of the layout.
                 */
                StackLayout.prototype.minSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_minSize;
                };
                /**
                 * Compute the maximum size of the layout.
                 */
                StackLayout.prototype.maxSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_maxSize;
                };
                /**
                 * Update the geometry of the child layout items.
                 *
                 * This is called automatically when the parent widget is resized
                 * or when it receives a posted 'layout-request' event. It should
                 * not normally be invoked directly.
                 */
                StackLayout.prototype.updateLayout = function () {
                    // Bail early when no work needs to be done.
                    var parent = this.parentWidget;
                    if (!parent) {
                        return;
                    }
                    var item = this._m_layoutItems[this._m_currentIndex];
                    if (!item) {
                        return;
                    }
                    // Refresh the layout items if needed.
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    // Update the geometry of the visible item.
                    var boxD = parent.boxData;
                    var x = boxD.paddingLeft;
                    var y = boxD.paddingTop;
                    var w = parent.width - boxD.horizontalSum;
                    var h = parent.height - boxD.verticalSum;
                    item.setGeometry(x, y, w, h);
                };
                /**
                 * Initialize the layout items and internal sizes for the layout.
                 */
                StackLayout.prototype._setupGeometry = function () {
                    // Bail early when no work needs to be done.
                    if (!this._m_dirty) {
                        return;
                    }
                    this._m_dirty = false;
                    // No parent means the layout is not yet attached.
                    var parent = this.parentWidget;
                    if (!parent) {
                        var zero = new Size(0, 0);
                        this._m_sizeHint = zero;
                        this._m_minSize = zero;
                        this._m_maxSize = zero;
                        return;
                    }
                    // Compute the size bounds based on the visible item.
                    var hintW = 0;
                    var hintH = 0;
                    var minW = 0;
                    var minH = 0;
                    var maxW = Infinity;
                    var maxH = Infinity;
                    var item = this._m_layoutItems[this._m_currentIndex];
                    if (item) {
                        item.invalidate();
                        var itemHint = item.sizeHint();
                        var itemMin = item.minSize();
                        var itemMax = item.maxSize();
                        hintW = Math.max(hintW, itemHint.width);
                        hintH = Math.max(hintH, itemHint.height);
                        minW = Math.max(minW, itemMin.width);
                        minH = Math.max(minH, itemMin.height);
                        maxW = Math.min(maxW, itemMax.width);
                        maxH = Math.min(maxH, itemMax.height);
                    }
                    // Account for padding and border on the parent.
                    var boxD = parent.boxData;
                    var boxW = boxD.horizontalSum;
                    var boxH = boxD.verticalSum;
                    hintW += boxW;
                    hintH += boxH;
                    minW += boxW;
                    minH += boxH;
                    maxW += boxW;
                    maxH += boxH;
                    // Update the internal sizes.
                    this._m_sizeHint = new Size(hintW, hintH);
                    this._m_minSize = new Size(minW, minH);
                    this._m_maxSize = new Size(maxW, maxH);
                };
                return StackLayout;
            })(Layout);
            stacklayout.StackLayout = StackLayout;
        })(stacklayout = ui.stacklayout || (ui.stacklayout = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.stacklayout

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var splitterhandle;
        (function (splitterhandle) {
            'use strict';
            var Orientation = ui.enums.Orientation;
            /**
             * The class name assigned to a splitter handle.
             */
            var HANDLE_CLASS = 'p-SplitterHandle';
            /**
             * The class name assigned to a splitter handle overlay.
             */
            var OVERLAY_CLASS = 'p-SplitterHandle-overlay';
            /**
             * The class name added to horizontal splitter handles.
             */
            var HORIZONTAL_CLASS = 'p-horizontal';
            /**
             * The class name added to vertical splitter handles.
             */
            var VERTICAL_CLASS = 'p-vertical';
            /**
             * The class name added to hidden splitter handles.
             */
            var HIDDEN_CLASS = 'p-hidden';
            /**
             * A class which manages a handle node for a splitter.
             */
            var SplitterHandle = (function () {
                /**
                 * Construct a new splitter handle.
                 */
                function SplitterHandle(orientation) {
                    this._m_hidden = false;
                    this._m_node = this.createNode();
                    this.orientation = orientation;
                }
                Object.defineProperty(SplitterHandle.prototype, "hidden", {
                    /**
                     * Get whether the handle is hidden.
                     */
                    get: function () {
                        return this._m_hidden;
                    },
                    /**
                     * Set whether the handle is hidden.
                     */
                    set: function (hidden) {
                        if (hidden === this._m_hidden) {
                            return;
                        }
                        this._m_hidden = hidden;
                        if (hidden) {
                            this._m_node.classList.add(HIDDEN_CLASS);
                        }
                        else {
                            this._m_node.classList.remove(HIDDEN_CLASS);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplitterHandle.prototype, "orientation", {
                    /**
                     * Get the orientation of the handle.
                     */
                    get: function () {
                        return this._m_orientation;
                    },
                    /**
                     * Set the orientation of the handle.
                     */
                    set: function (value) {
                        if (value === this._m_orientation) {
                            return;
                        }
                        var node = this._m_node;
                        if (value === 0 /* Horizontal */) {
                            node.classList.remove(VERTICAL_CLASS);
                            node.classList.add(HORIZONTAL_CLASS);
                        }
                        else {
                            node.classList.remove(HORIZONTAL_CLASS);
                            node.classList.add(VERTICAL_CLASS);
                        }
                        this._m_orientation = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplitterHandle.prototype, "node", {
                    /**
                     * Get the DOM node for the handle.
                     */
                    get: function () {
                        return this._m_node;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Create the DOM node for the handle.
                 */
                SplitterHandle.prototype.createNode = function () {
                    var node = document.createElement('div');
                    var overlay = document.createElement('div');
                    node.className = HANDLE_CLASS;
                    overlay.className = OVERLAY_CLASS;
                    node.appendChild(overlay);
                    return node;
                };
                return SplitterHandle;
            })();
            splitterhandle.SplitterHandle = SplitterHandle;
        })(splitterhandle = ui.splitterhandle || (ui.splitterhandle = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.splitterhandle

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var splitterlayout;
        (function (splitterlayout) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var Orientation = ui.enums.Orientation;
            var Size = ui.geometry.Size;
            var Layout = ui.layout.Layout;
            var SizingItem = ui.layoutsizing.SizingItem;
            var distributeSpace = ui.layoutsizing.distributeSpace;
            var SplitterHandle = ui.splitterhandle.SplitterHandle;
            var WidgetItem = ui.widgetitem.WidgetItem;
            /**
             * The layout class used by the Splitter widget.
             *
             * This will not typically be used directly by user code.
             */
            var SplitterLayout = (function (_super) {
                __extends(SplitterLayout, _super);
                /**
                 * Construct a new splitter layout.
                 */
                function SplitterLayout(orientation) {
                    _super.call(this);
                    this._m_dirty = true;
                    this._m_handleSize = 3;
                    this._m_fixedSpace = 0;
                    this._m_sizeHint = null;
                    this._m_minSize = null;
                    this._m_maxSize = null;
                    this._m_sizingItems = [];
                    this._m_splitterItems = [];
                    this._m_orientation = orientation;
                }
                /**
                 * Dispose of the resources held by the layout.
                 */
                SplitterLayout.prototype.dispose = function () {
                    this._m_sizingItems = null;
                    this._m_splitterItems = null;
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(SplitterLayout.prototype, "orientation", {
                    /**
                     * Get the orientation of the splitter layout.
                     */
                    get: function () {
                        return this._m_orientation;
                    },
                    /**
                     * Set the orientation of the splitter layout.
                     */
                    set: function (value) {
                        if (value === this._m_orientation) {
                            return;
                        }
                        this._m_orientation = value;
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplitterLayout.prototype, "handleSize", {
                    /**
                     * Get the size of the splitter handles.
                     */
                    get: function () {
                        return this._m_handleSize;
                    },
                    /**
                     * Set the the size of the splitter handles.
                     */
                    set: function (size) {
                        size = Math.max(0, size | 0);
                        if (size === this._m_handleSize) {
                            return;
                        }
                        this._m_handleSize = size;
                        this.invalidate();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplitterLayout.prototype, "count", {
                    /**
                     * Get the number of layout items in the layout.
                     */
                    get: function () {
                        return this._m_splitterItems.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the normalized sizes of the items in the layout.
                 */
                SplitterLayout.prototype.sizes = function () {
                    return normalize(this._m_sizingItems.map(function (it) { return it.size; }));
                };
                /**
                 * Set the relative sizes for the splitter items.
                 *
                 * Extra values are ignored, too few will yield an undefined layout.
                 */
                SplitterLayout.prototype.setSizes = function (sizes) {
                    var parent = this.parentWidget;
                    if (!parent) {
                        return;
                    }
                    var totalSize;
                    var boxD = parent.boxData;
                    if (this._m_orientation === 0 /* Horizontal */) {
                        totalSize = parent.width - boxD.horizontalSum - this._m_fixedSpace;
                    }
                    else {
                        totalSize = parent.height - boxD.verticalSum - this._m_fixedSpace;
                    }
                    var normed = normalize(sizes);
                    var items = this._m_sizingItems;
                    var n = Math.min(items.length, normed.length);
                    for (var i = 0; i < n; ++i) {
                        items[i].sizeHint = Math.round(normed[i] * totalSize);
                    }
                    if (parent.isVisible) {
                        this.updateLayout();
                    }
                };
                /**
                 * Get the splitter handle at the given index.
                 */
                SplitterLayout.prototype.handleAt = function (index) {
                    var item = this._m_splitterItems[index];
                    return (item && item.handle) || void 0;
                };
                /**
                 * Get the layout item at the specified index.
                 */
                SplitterLayout.prototype.itemAt = function (index) {
                    return this._m_splitterItems[index];
                };
                /**
                 * Remove and return the layout item at the specified index.
                 */
                SplitterLayout.prototype.takeAt = function (index) {
                    index = index | 0;
                    if (index < 0 || index >= this._m_splitterItems.length) {
                        return void 0;
                    }
                    var item = this._m_splitterItems.splice(index, 1)[0];
                    this._m_sizingItems.splice(index, 1);
                    var hNode = item.handle.node;
                    var pNode = hNode.parentNode;
                    if (pNode)
                        pNode.removeChild(hNode);
                    this.invalidate();
                    return item;
                };
                /**
                 * Move a layout item from one index to another.
                 *
                 * Returns the new index of the item.
                 */
                SplitterLayout.prototype.moveItem = function (fromIndex, toIndex) {
                    fromIndex = fromIndex | 0;
                    var n = this._m_splitterItems.length;
                    if (fromIndex < 0 || fromIndex >= n) {
                        return -1;
                    }
                    toIndex = Math.max(0, Math.min(toIndex | 0, n - 1));
                    if (fromIndex === toIndex) {
                        return toIndex;
                    }
                    var item = this._m_splitterItems.splice(fromIndex, 1)[0];
                    this._m_splitterItems.splice(toIndex, 0, item);
                    var sizeItem = this._m_sizingItems.splice(fromIndex, 1)[0];
                    this._m_sizingItems.splice(toIndex, 0, sizeItem);
                    this.invalidate();
                    return toIndex;
                };
                /**
                 * Add a widget as the last item in the layout.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added widget.
                 */
                SplitterLayout.prototype.addWidget = function (widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    return this.insertWidget(this.count, widget, stretch, alignment);
                };
                /**
                 * Insert a widget into the layout at the given index.
                 *
                 * If the widget already exists in the layout, it will be moved.
                 *
                 * Returns the index of the added item.
                 */
                SplitterLayout.prototype.insertWidget = function (index, widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    var i = this.widgetIndex(widget);
                    if (i >= 0) {
                        return this.moveItem(i, index);
                    }
                    this.addChildWidget(widget);
                    var orient = this._m_orientation;
                    var handle = new SplitterHandle(orient);
                    var item = new SplitterItem(widget, handle, alignment);
                    return this._insertItem(index, item, stretch);
                };
                /**
                 * Get the stretch factor for the item at the given index.
                 *
                 * Returns -1 if the index is out of range.
                 */
                SplitterLayout.prototype.stretchAt = function (index) {
                    var item = this._m_sizingItems[index];
                    return item ? item.stretch : -1;
                };
                /**
                 * Set the stretch factor for the item at the given index.
                 */
                SplitterLayout.prototype.setStretch = function (index, stretch) {
                    stretch = Math.max(0, stretch | 0);
                    var item = this._m_sizingItems[index];
                    if (item && item.stretch !== stretch) {
                        item.stretch = stretch;
                        this.invalidate();
                    }
                };
                /**
                 * Move the handle at the given index to the offset position.
                 *
                 * This will move the handle as close as possible to the given
                 * offset position, without violating item size constraints.
                 */
                SplitterLayout.prototype.moveHandle = function (index, pos) {
                    var item = this._m_splitterItems[index];
                    if (!item || item.handle.hidden) {
                        return;
                    }
                    var delta;
                    if (this._m_orientation === 0 /* Horizontal */) {
                        delta = pos - item.handle.node.offsetLeft;
                    }
                    else {
                        delta = pos - item.handle.node.offsetTop;
                    }
                    if (delta === 0) {
                        return;
                    }
                    var sizingItems = this._m_sizingItems;
                    if (delta > 0) {
                        growItem(sizingItems, index, delta);
                    }
                    else {
                        algo.reverse(sizingItems);
                        growItem(sizingItems, sizingItems.length - (index + 2), -delta);
                        algo.reverse(sizingItems);
                    }
                    this.updateLayout();
                };
                /**
                 * Invalidate the cached layout data and enqueue an update.
                 */
                SplitterLayout.prototype.invalidate = function () {
                    this._m_dirty = true;
                    _super.prototype.invalidate.call(this);
                };
                /**
                 * Compute the preferred size of the layout.
                 */
                SplitterLayout.prototype.sizeHint = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_sizeHint;
                };
                /**
                 * Compute the minimum size of the layout.
                 */
                SplitterLayout.prototype.minSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_minSize;
                };
                /**
                 * Compute the maximum size of the layout.
                 */
                SplitterLayout.prototype.maxSize = function () {
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    return this._m_maxSize;
                };
                /**
                 * Update the geometry of the child layout items.
                 *
                 * This is called automatically when the parent widget is resized
                 * or when it receives a posted 'layout-request' event. It should
                 * not normally be invoked directly.
                 */
                SplitterLayout.prototype.updateLayout = function () {
                    // Bail early when no work needs to be done.
                    var parent = this.parentWidget;
                    if (!parent) {
                        return;
                    }
                    var splitterItems = this._m_splitterItems;
                    if (splitterItems.length === 0) {
                        return;
                    }
                    // Refresh the layout items if needed.
                    if (this._m_dirty) {
                        this._setupGeometry();
                    }
                    // Setup commonly used variables.
                    var boxD = parent.boxData;
                    var width = parent.width - boxD.horizontalSum;
                    var height = parent.height - boxD.verticalSum;
                    var orient = this._m_orientation;
                    var sizingItems = this._m_sizingItems;
                    // Distribute the layout space to the sizing items.
                    var mainSpace = orient === 0 /* Horizontal */ ? width : height;
                    distributeSpace(sizingItems, mainSpace - this._m_fixedSpace);
                    // Update the geometry of the items according to the orientation.
                    var y = boxD.paddingTop;
                    var x = boxD.paddingLeft;
                    var hSize = this._m_handleSize;
                    var count = splitterItems.length;
                    if (orient === 0 /* Horizontal */) {
                        for (var i = 0; i < count; ++i) {
                            var item = splitterItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            var size = sizingItems[i].size;
                            var hStyle = item.handle.node.style;
                            item.setGeometry(x, y, size, height);
                            hStyle.top = y + 'px';
                            hStyle.left = x + size + 'px';
                            hStyle.width = hSize + 'px';
                            hStyle.height = height + 'px';
                            x += size + hSize;
                        }
                    }
                    else {
                        for (var i = 0; i < count; ++i) {
                            var item = splitterItems[i];
                            if (item.isHidden) {
                                continue;
                            }
                            var size = sizingItems[i].size;
                            var hStyle = item.handle.node.style;
                            item.setGeometry(x, y, width, size);
                            hStyle.top = y + size + 'px';
                            hStyle.left = x + 'px';
                            hStyle.width = width + 'px';
                            hStyle.height = hSize + 'px';
                            y += size + hSize;
                        }
                    }
                };
                /**
                 * Initialize the layout items and internal sizes for the layout.
                 */
                SplitterLayout.prototype._setupGeometry = function () {
                    // Bail early when no work needs to be done.
                    if (!this._m_dirty) {
                        return;
                    }
                    this._m_dirty = false;
                    // No parent means the layout is not yet attached.
                    var parent = this.parentWidget;
                    if (!parent) {
                        var zero = new Size(0, 0);
                        this._m_sizeHint = zero;
                        this._m_minSize = zero;
                        this._m_maxSize = zero;
                        this._m_fixedSpace = 0;
                        return;
                    }
                    // Invalidate the layout items and reset the handles for the current
                    // orientation. Hide the handles associated with a hidden item and
                    // the handle node is attached to the parent node. Traverse the
                    // items backwards and hide the first visible item handle.
                    var hidFirst = false;
                    var pNode = parent.node;
                    var orient = this._m_orientation;
                    var splitterItems = this._m_splitterItems;
                    var count = splitterItems.length;
                    for (var i = count - 1; i >= 0; --i) {
                        var item = splitterItems[i];
                        var handle = item.handle;
                        var hNode = handle.node;
                        item.invalidate();
                        handle.orientation = orient;
                        handle.hidden = item.isHidden;
                        if (hNode.parentNode !== pNode) {
                            pNode.appendChild(hNode);
                        }
                        if (!hidFirst && !item.isHidden) {
                            item.handle.hidden = true;
                            hidFirst = true;
                        }
                    }
                    // Setup commonly used variables.
                    var hintW = 0;
                    var hintH = 0;
                    var minW = 0;
                    var minH = 0;
                    var maxW;
                    var maxH;
                    var fixedSpace = 0;
                    var handleSize = this._m_handleSize;
                    var sizingItems = this._m_sizingItems;
                    // Compute the size bounds according to the splitter orientation.
                    // The size hints for the sizing items are explicitly not updated.
                    // The hint is only adjusted when the user moves a handle. This
                    // allows the sections to remain well-sized when siblings are
                    // added/removed or shown/hidden (see the growItem function).
                    if (orient === 0 /* Horizontal */) {
                        maxH = Infinity;
                        maxW = count > 0 ? 0 : Infinity;
                        for (var i = 0; i < count; ++i) {
                            var item = splitterItems[i];
                            var sizingItem = sizingItems[i];
                            if (item.isHidden) {
                                sizingItem.expansive = false;
                                sizingItem.minSize = 0;
                                sizingItem.maxSize = 0;
                                continue;
                            }
                            var itemHint = item.sizeHint();
                            var itemMin = item.minSize();
                            var itemMax = item.maxSize();
                            hintH = Math.max(hintH, itemHint.height);
                            minH = Math.max(minH, itemMin.height);
                            maxH = Math.min(maxH, itemMax.height);
                            hintW += itemHint.width;
                            minW += itemMin.width;
                            maxW += itemMax.width;
                            sizingItem.expansive = item.expandHorizontal;
                            sizingItem.minSize = itemMin.width;
                            sizingItem.maxSize = itemMax.width;
                            if (!item.handle.hidden) {
                                fixedSpace += handleSize;
                            }
                        }
                        hintW += fixedSpace;
                        minW += fixedSpace;
                        maxW += fixedSpace;
                    }
                    else {
                        maxW = Infinity;
                        maxH = count > 0 ? 0 : Infinity;
                        for (var i = 0; i < count; ++i) {
                            var item = splitterItems[i];
                            var sizingItem = sizingItems[i];
                            if (item.isHidden) {
                                sizingItem.expansive = false;
                                sizingItem.minSize = 0;
                                sizingItem.maxSize = 0;
                                continue;
                            }
                            var itemHint = item.sizeHint();
                            var itemMin = item.minSize();
                            var itemMax = item.maxSize();
                            hintW = Math.max(hintW, itemHint.width);
                            minW = Math.max(minW, itemMin.width);
                            maxW = Math.min(maxW, itemMax.width);
                            hintH += itemHint.height;
                            minH += itemMin.height;
                            maxH += itemMax.height;
                            sizingItem.expansive = item.expandVertical;
                            sizingItem.minSize = itemMin.height;
                            sizingItem.maxSize = itemMax.height;
                            if (!item.handle.hidden) {
                                fixedSpace += handleSize;
                            }
                        }
                        hintH += fixedSpace;
                        minH += fixedSpace;
                        maxH += fixedSpace;
                    }
                    // Account for padding and border on the parent.
                    var boxD = parent.boxData;
                    var boxW = boxD.horizontalSum;
                    var boxH = boxD.verticalSum;
                    hintW += boxW;
                    hintH += boxH;
                    minW += boxW;
                    minH += boxH;
                    maxW += boxW;
                    maxH += boxH;
                    // Update the internal sizes.
                    this._m_sizeHint = new Size(hintW, hintH);
                    this._m_minSize = new Size(minW, minH);
                    this._m_maxSize = new Size(maxW, maxH);
                    this._m_fixedSpace = fixedSpace;
                };
                /**
                 * Insert a splitter item with the specified stretch factor.
                 *
                 * Returns the index of the added item.
                 */
                SplitterLayout.prototype._insertItem = function (index, item, stretch) {
                    var sizingItem = createSizingItem(Math.max(0, stretch | 0));
                    index = Math.max(0, Math.min(index | 0, this._m_splitterItems.length));
                    this._m_splitterItems.splice(index, 0, item);
                    this._m_sizingItems.splice(index, 0, sizingItem);
                    this.invalidate();
                    return index;
                };
                return SplitterLayout;
            })(Layout);
            splitterlayout.SplitterLayout = SplitterLayout;
            /**
             * A custom widget item class used by the splitter layout.
             */
            var SplitterItem = (function (_super) {
                __extends(SplitterItem, _super);
                /**
                 * Construct a new splitter item.
                 */
                function SplitterItem(widget, handle, alignment) {
                    if (alignment === void 0) { alignment = 0; }
                    _super.call(this, widget, alignment);
                    this._m_handle = handle;
                }
                Object.defineProperty(SplitterItem.prototype, "handle", {
                    /**
                     * Get the splitter handle for the item.
                     */
                    get: function () {
                        return this._m_handle;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SplitterItem;
            })(WidgetItem);
            /**
             * Create a sizing item with the given stretch factor.
             */
            function createSizingItem(stretch) {
                var item = new SizingItem();
                item.stretch = stretch;
                return item;
            }
            /**
             * Grow an item to the right by a positive delta.
             *
             * This will adjust the items neighbors if required.
             *
             * Before adjusting the item, the size hints of all items will be
             * updated to their current size. This allows the sections to remain
             * well sized on the subsequent layout since the size hint is the
             * effective input to the `distributeSpace` function.
             */
            function growItem(items, index, delta) {
                for (var i = 0, n = items.length; i < n; ++i) {
                    var item = items[i];
                    item.sizeHint = item.size;
                }
                var growLimit = 0;
                for (var i = 0; i <= index; ++i) {
                    var item = items[i];
                    growLimit += item.maxSize - item.size;
                }
                var shrinkLimit = 0;
                for (var i = index + 1, n = items.length; i < n; ++i) {
                    var item = items[i];
                    shrinkLimit += item.size - item.minSize;
                }
                delta = Math.min(delta, growLimit, shrinkLimit);
                var grow = delta;
                for (var i = index; i >= 0 && grow > 0; --i) {
                    var item = items[i];
                    var limit = item.maxSize - item.size;
                    if (limit >= grow) {
                        item.sizeHint = item.size + grow;
                        grow = 0;
                    }
                    else {
                        item.sizeHint = item.size + limit;
                        grow -= limit;
                    }
                }
                var shrink = delta;
                for (var i = index + 1, n = items.length; i < n && shrink > 0; ++i) {
                    var item = items[i];
                    var limit = item.size - item.minSize;
                    if (limit >= shrink) {
                        item.sizeHint = item.size - shrink;
                        shrink = 0;
                    }
                    else {
                        item.sizeHint = item.size - limit;
                        shrink -= limit;
                    }
                }
            }
            /**
             * Normalize an array of positive values.
             */
            function normalize(values) {
                var n = values.length;
                if (n === 0) {
                    return [];
                }
                var sum = 0;
                for (var i = 0; i < n; ++i) {
                    sum += values[i];
                }
                var result = new Array(n);
                if (sum === 0) {
                    for (var i = 0; i < n; ++i) {
                        result[i] = 1 / n;
                    }
                }
                else {
                    for (var i = 0; i < n; ++i) {
                        result[i] = values[i] / sum;
                    }
                }
                return result;
            }
        })(splitterlayout = ui.splitterlayout || (ui.splitterlayout = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.splitterlayout

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var splitter;
        (function (splitter) {
            'use strict';
            var overrideCursor = ui.domutil.overrideCursor;
            var Orientation = ui.enums.Orientation;
            var WidgetFlag = ui.enums.WidgetFlag;
            var SplitterLayout = ui.splitterlayout.SplitterLayout;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to Splitter instances.
             */
            var SPLITTER_CLASS = 'p-Splitter';
            /**
             * A widget which separates its children into resizable sections.
             */
            var Splitter = (function (_super) {
                __extends(Splitter, _super);
                /**
                 * Construct a new splitter.
                 */
                function Splitter(orientation) {
                    if (orientation === void 0) { orientation = 0 /* Horizontal */; }
                    _super.call(this);
                    this._m_pressData = null;
                    this.classList.add(SPLITTER_CLASS);
                    this.layout = new SplitterLayout(orientation);
                    this.setFlag(16 /* DisallowLayoutChange */);
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                Splitter.prototype.dispose = function () {
                    this._releaseMouse();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(Splitter.prototype, "orientation", {
                    /**
                     * Get the orientation of the splitter.
                     */
                    get: function () {
                        return this.layout.orientation;
                    },
                    /**
                     * Set the orientation of the splitter.
                     */
                    set: function (value) {
                        this.layout.orientation = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Splitter.prototype, "handleSize", {
                    /**
                     * Get the size of the splitter handles.
                     */
                    get: function () {
                        return this.layout.handleSize;
                    },
                    /**
                     * Set the the size of the splitter handles.
                     */
                    set: function (size) {
                        this.layout.handleSize = size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Splitter.prototype, "count", {
                    /**
                     * Get the number of widgets in the splitter.
                     */
                    get: function () {
                        return this.layout.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the normalized sizes of the items in the splitter.
                 */
                Splitter.prototype.sizes = function () {
                    return this.layout.sizes();
                };
                /**
                 * Set the relative sizes for the splitter items.
                 *
                 * Extra values are ignored, too few will yield an undefined layout.
                 */
                Splitter.prototype.setSizes = function (sizes) {
                    this.layout.setSizes(sizes);
                };
                /**
                 * Get the splitter handle at the given index.
                 */
                Splitter.prototype.handleAt = function (index) {
                    return this.layout.handleAt(index);
                };
                /**
                 * Get the widget at the given index.
                 */
                Splitter.prototype.widgetAt = function (index) {
                    return this.layout.widgetAt(index);
                };
                /**
                 * Get the index of the given widget.
                 */
                Splitter.prototype.widgetIndex = function (widget) {
                    return this.layout.widgetIndex(widget);
                };
                /**
                 * Add a child widget to the end of the splitter.
                 *
                 * Returns the index of the added widget.
                 */
                Splitter.prototype.addWidget = function (widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    return this.layout.addWidget(widget, stretch, alignment);
                };
                /**
                 * Insert a child widget into the splitter at the given index.
                 *
                 * Returns the index of the added widget.
                 */
                Splitter.prototype.insertWidget = function (index, widget, stretch, alignment) {
                    if (stretch === void 0) { stretch = 0; }
                    if (alignment === void 0) { alignment = 0; }
                    return this.layout.insertWidget(index, widget, stretch, alignment);
                };
                /**
                 * Move a child widget from one index to another.
                 *
                 * Returns the new index of the widget.
                 */
                Splitter.prototype.moveWidget = function (fromIndex, toIndex) {
                    return this.layout.moveItem(fromIndex, toIndex);
                };
                /**
                 * Remove a widget from the splitter and set its parent to null.
                 *
                 * This is equivalent to simply setting the widget parent to null,
                 * except that it returns the index that the widget occupied.
                 *
                 * If the widget is not a child of the splitter, this returns -1.
                 */
                Splitter.prototype.removeWidget = function (widget) {
                    if (widget.parent !== this) {
                        return -1;
                    }
                    var index = this.widgetIndex(widget);
                    widget.parent = null;
                    return index;
                };
                /**
                 * Get the stretch factor for the widget at the given index.
                 *
                 * Returns -1 if the index is out of range.
                 */
                Splitter.prototype.stretchAt = function (index) {
                    return this.layout.stretchAt(index);
                };
                /**
                 * Set the stretch factor for the widget at the given index.
                 */
                Splitter.prototype.setStretch = function (index, stretch) {
                    this.layout.setStretch(index, stretch);
                };
                /**
                 * Get the alignment for the given widget.
                 *
                 * Returns 0 if the widget is not in the layout.
                 */
                Splitter.prototype.alignmentFor = function (widget) {
                    return this.layout.alignmentFor(widget);
                };
                /**
                 * Set the alignment for the given widget.
                 *
                 * If the widget is not in the layout, this is a no-op.
                 */
                Splitter.prototype.setAlignment = function (widget, alignment) {
                    this.layout.setAlignment(widget, alignment);
                };
                /**
                 * A method invoked after the node is attached to the DOM.
                 */
                Splitter.prototype.afterAttachEvent = function (event) {
                    this.node.addEventListener('mousedown', this);
                };
                /**
                 * A method invoked after the node is detached from the DOM.
                 */
                Splitter.prototype.afterDetachEvent = function (event) {
                    this.node.removeEventListener('mousedown', this);
                };
                /**
                 * Handle the DOM events for the splitter.
                 */
                Splitter.prototype.handleEvent = function (event) {
                    switch (event.type) {
                        case 'mousedown':
                            this.domEvent_mousedown(event);
                            break;
                        case 'mouseup':
                            this.domEvent_mouseup(event);
                            break;
                        case 'mousemove':
                            this.domEvent_mousemove(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'mousedown' event for the splitter.
                 */
                Splitter.prototype.domEvent_mousedown = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    var data = this._findHandle(event.target);
                    if (!data) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    document.addEventListener('mouseup', this, true);
                    document.addEventListener('mousemove', this, true);
                    var delta;
                    var node = data.handle.node;
                    var rect = node.getBoundingClientRect();
                    if (this.orientation === 0 /* Horizontal */) {
                        delta = event.clientX - rect.left;
                    }
                    else {
                        delta = event.clientY - rect.top;
                    }
                    var grab = overrideCursor(window.getComputedStyle(node).cursor);
                    this._m_pressData = { index: data.index, delta: delta, grab: grab };
                };
                /**
                 * Handle the 'mouseup' event for the splitter.
                 */
                Splitter.prototype.domEvent_mouseup = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    this._releaseMouse();
                };
                /**
                 * Handle the 'mousemove' event for the splitter.
                 */
                Splitter.prototype.domEvent_mousemove = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var pos;
                    var data = this._m_pressData;
                    var rect = this.node.getBoundingClientRect();
                    var layout = this.layout;
                    if (layout.orientation === 0 /* Horizontal */) {
                        pos = event.clientX - data.delta - rect.left;
                    }
                    else {
                        pos = event.clientY - data.delta - rect.top;
                    }
                    layout.moveHandle(data.index, pos);
                };
                /**
                 * Find the index of the handle which contains a target element.
                 */
                Splitter.prototype._findHandle = function (target) {
                    var layout = this.layout;
                    for (var i = 0, n = layout.count; i < n; ++i) {
                        var handle = layout.handleAt(i);
                        if (handle.node.contains(target)) {
                            return { index: i, handle: handle };
                        }
                    }
                    return null;
                };
                /**
                 * Release the mouse grab for the splitter.
                 */
                Splitter.prototype._releaseMouse = function () {
                    if (!this._m_pressData) {
                        return;
                    }
                    this._m_pressData.grab.dispose();
                    this._m_pressData = null;
                    document.removeEventListener('mouseup', this, true);
                    document.removeEventListener('mousemove', this, true);
                };
                return Splitter;
            })(Widget);
            splitter.Splitter = Splitter;
        })(splitter = ui.splitter || (ui.splitter = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.splitter

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var stackwidget;
        (function (stackwidget) {
            'use strict';
            var Signal = phosphor.core.signal.Signal;
            var WidgetFlag = ui.enums.WidgetFlag;
            var StackLayout = ui.stacklayout.StackLayout;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to StackWidget instances.
             */
            var STACK_WIDGET_CLASS = 'p-StackWidget';
            /**
             * A container widget where only one child is visible at a time.
             *
             * This widget delegates to a permanently installed stack layout and
             * can be used as a more convenient interface to a stack layout.
             */
            var StackWidget = (function (_super) {
                __extends(StackWidget, _super);
                /**
                 * Construct a new stack widget.
                 */
                function StackWidget() {
                    _super.call(this);
                    this._m_currentChanged = new Signal();
                    this._m_widgetRemoved = new Signal();
                    this.classList.add(STACK_WIDGET_CLASS);
                    var layout = this.layout = new StackLayout();
                    this.setFlag(16 /* DisallowLayoutChange */);
                    layout.currentChanged.connect(this._sl_currentChanged, this);
                    layout.widgetRemoved.connect(this._sl_widgetRemoved, this);
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                StackWidget.prototype.dispose = function () {
                    this._m_currentChanged.dispose();
                    this._m_widgetRemoved.dispose();
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(StackWidget.prototype, "currentChanged", {
                    /**
                     * A signal emitted when the current index changes.
                     */
                    get: function () {
                        return this._m_currentChanged;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackWidget.prototype, "widgetRemoved", {
                    /**
                     * A signal emitted when a widget is removed from the stack.
                     */
                    get: function () {
                        return this._m_widgetRemoved;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackWidget.prototype, "currentIndex", {
                    /**
                     * Get the current index of the stack.
                     */
                    get: function () {
                        return this.layout.currentIndex;
                    },
                    /**
                     * Set the current index of the stack.
                     */
                    set: function (index) {
                        this.layout.currentIndex = index;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackWidget.prototype, "currentWidget", {
                    /**
                     * Get the current stack widget.
                     */
                    get: function () {
                        return this.layout.currentWidget;
                    },
                    /**
                     * Set the current stack widget.
                     */
                    set: function (widget) {
                        this.layout.currentWidget = widget;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StackWidget.prototype, "count", {
                    /**
                     * Get the number of widgets in the stack.
                     */
                    get: function () {
                        return this.layout.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the widget at the given index.
                 */
                StackWidget.prototype.widgetAt = function (index) {
                    return this.layout.widgetAt(index);
                };
                /**
                 * Get the index of the given widget.
                 */
                StackWidget.prototype.widgetIndex = function (widget) {
                    return this.layout.widgetIndex(widget);
                };
                /**
                 * Add a child widget to the end of the stack.
                 *
                 * Returns the index of the added widget.
                 */
                StackWidget.prototype.addWidget = function (widget) {
                    return this.layout.addWidget(widget);
                };
                /**
                 * Insert a child widget into the stack at the given index.
                 *
                 * Returns the index of the added widget.
                 */
                StackWidget.prototype.insertWidget = function (index, widget) {
                    return this.layout.insertWidget(index, widget);
                };
                /**
                 * Move a child widget from one index to another.
                 *
                 * Returns the new index of the widget.
                 */
                StackWidget.prototype.moveWidget = function (fromIndex, toIndex) {
                    return this.layout.moveItem(fromIndex, toIndex);
                };
                /**
                 * Remove a widget from the stack and set its parent to null.
                 *
                 * This is equivalent to simply setting the widget parent to null,
                 * except that it returns the index that the widget occupied.
                 *
                 * If the widget is not a child of the stack, this returns -1.
                 */
                StackWidget.prototype.removeWidget = function (widget) {
                    if (widget.parent !== this) {
                        return -1;
                    }
                    var index = this.widgetIndex(widget);
                    widget.parent = null;
                    return index;
                };
                /**
                 * Handle the `currentChanged` signal for the stack layout.
                 */
                StackWidget.prototype._sl_currentChanged = function (sender, index) {
                    this._m_currentChanged.emit(this, index);
                };
                /**
                 * Handle the `widgetChanged` signal for the stack layout.
                 */
                StackWidget.prototype._sl_widgetRemoved = function (sender, args) {
                    this._m_widgetRemoved.emit(this, args);
                };
                return StackWidget;
            })(Widget);
            stackwidget.StackWidget = StackWidget;
        })(stackwidget = ui.stackwidget || (ui.stackwidget = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.stackwidget

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var tabwidget;
        (function (tabwidget) {
            'use strict';
            var BoxLayout = ui.boxlayout.BoxLayout;
            var Direction = ui.enums.Direction;
            var WidgetFlag = ui.enums.WidgetFlag;
            var StackWidget = ui.stackwidget.StackWidget;
            var TabBar = ui.tabbar.TabBar;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to tab widget instances.
             */
            var TAB_WIDGET_CLASS = 'p-TabWidget';
            /**
             * A container which provides a stack of tabbed widgets.
             *
             * The TabWidget provides a convenient combination of a tab bar and
             * a stack widget which allows the user to toggle between widgets
             * by selecting the tab associated with a particular widget.
             */
            var TabWidget = (function (_super) {
                __extends(TabWidget, _super);
                /**
                 * Construct a new tab widget.
                 */
                function TabWidget() {
                    _super.call(this);
                    this._m_tabBar = null;
                    this._m_stackWidget = null;
                    this.classList.add(TAB_WIDGET_CLASS);
                    this.layout = new BoxLayout(2 /* TopToBottom */, 0);
                    this.setFlag(16 /* DisallowLayoutChange */);
                    this.tabBar = new TabBar();
                    this.stackWidget = new StackWidget();
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                TabWidget.prototype.dispose = function () {
                    this._m_tabBar = null;
                    this._m_stackWidget = null;
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(TabWidget.prototype, "selectedIndex", {
                    /**
                     * Get the currently selected index.
                     */
                    get: function () {
                        return this._m_tabBar.selectedIndex;
                    },
                    /**
                     * Set the currently selected index.
                     */
                    set: function (index) {
                        this._m_tabBar.selectedIndex = index;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabWidget.prototype, "selectedWidget", {
                    /**
                     * Get the currently selected widget.
                     */
                    get: function () {
                        return this._m_stackWidget.currentWidget;
                    },
                    /**
                     * Set the currently selected widget.
                     */
                    set: function (widget) {
                        this.selectedIndex = this.widgetIndex(widget);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabWidget.prototype, "tabsMovable", {
                    /**
                     * Get whether the tabs are movable by the user.
                     */
                    get: function () {
                        return this._m_tabBar.tabsMovable;
                    },
                    /**
                     * Set whether the tabs are movable by the user.
                     */
                    set: function (movable) {
                        this._m_tabBar.tabsMovable = movable;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabWidget.prototype, "count", {
                    /**
                     * Get the number of tabs in the tab widget.
                     */
                    get: function () {
                        return this._m_tabBar.count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabWidget.prototype, "tabBar", {
                    /**
                     * Get the tab bar used by the tab widget.
                     */
                    get: function () {
                        return this._m_tabBar;
                    },
                    /**
                     * Set the tab bar used by the tab widget.
                     *
                     * This allows for the use of a custom tab bar. This should be set
                     * before any tabs are added to the widget.
                     *
                     * The old tab bar will be disposed.
                     */
                    set: function (bar) {
                        var old = this._m_tabBar;
                        if (!bar || bar === old) {
                            return;
                        }
                        if (old)
                            old.dispose();
                        this._m_tabBar = bar;
                        bar.tabMoved.connect(this._tb_tabMoved, this);
                        bar.tabSelected.connect(this._tb_tabSelected, this);
                        bar.tabCloseRequested.connect(this._tb_tabCloseRequested, this);
                        this.layout.insertWidget(0, bar);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TabWidget.prototype, "stackWidget", {
                    /**
                     * Get the stack widget used by the tab widget.
                     */
                    get: function () {
                        return this._m_stackWidget;
                    },
                    /**
                     * Set the stack widget used by the tab widget.
                     *
                     * This allows for the use of a custom stack widget. This should be
                     * set before any tabs are added to the widget.
                     *
                     * The old stack widget will be disposed.
                     */
                    set: function (stack) {
                        var old = this._m_stackWidget;
                        if (!stack || stack === old) {
                            return;
                        }
                        if (old)
                            old.dispose();
                        this._m_stackWidget = stack;
                        stack.widgetRemoved.connect(this._sw_widgetRemoved, this);
                        this.layout.insertWidget(1, stack);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the tab at the given index.
                 */
                TabWidget.prototype.tabAt = function (index) {
                    return this._m_tabBar.tabAt(index);
                };
                /**
                 * Get the index of the given tab.
                 */
                TabWidget.prototype.tabIndex = function (tab) {
                    return this._m_tabBar.tabIndex(tab);
                };
                /**
                 * Get the widget at the given index.
                 */
                TabWidget.prototype.widgetAt = function (index) {
                    return this._m_stackWidget.widgetAt(index);
                };
                /**
                 * Get the index of the given widget.
                 */
                TabWidget.prototype.widgetIndex = function (widget) {
                    return this._m_stackWidget.widgetIndex(widget);
                };
                /**
                 * Add a tab to the end of the tab widget.
                 *
                 * If the widget has already been added, this is a no-op.
                 *
                 * Returns the index of the added tab.
                 */
                TabWidget.prototype.addTab = function (tab, widget) {
                    return this.insertTab(this.count, tab, widget);
                };
                /**
                 * Insert a tab into the tab widget at the given index.
                 *
                 * If the widget has already been added, this is a no-op.
                 *
                 * Returns the index of the added tab.
                 */
                TabWidget.prototype.insertTab = function (index, tab, widget) {
                    var i = this.widgetIndex(widget);
                    if (i >= 0) {
                        return i;
                    }
                    index = this._m_stackWidget.insertWidget(index, widget);
                    return this._m_tabBar.insertTab(index, tab);
                };
                /**
                 * Move a tab from one index to another.
                 *
                 * Returns the new index of the tab.
                 */
                TabWidget.prototype.moveTab = function (fromIndex, toIndex) {
                    return this._m_tabBar.moveTab(fromIndex, toIndex);
                };
                /**
                 * Remove a widget from the tab widget and set its parent to null.
                 *
                 * This is equivalent to simply setting the widget parent to null,
                 * except that it returns the index that the widget occupied.
                 *
                 * If the widget is not a child, this returns -1.
                 */
                TabWidget.prototype.removeWidget = function (widget) {
                    return this._m_stackWidget.removeWidget(widget);
                };
                /**
                 * A method invoked when a tab close button is clicked.
                 *
                 * This may be reimplemented by subclasses if necessary.
                 *
                 * The default implementation closes the widget.
                 */
                TabWidget.prototype.onTabCloseRequested = function (index) {
                    this._m_stackWidget.widgetAt(index).close();
                };
                /**
                 * A method invoked when a widget is removed from the tab widget.
                 *
                 * This may be reimplemented by subclasses if necessary.
                 *
                 * The default implementation removes the tab bar tab.
                 */
                TabWidget.prototype.onWidgetRemoved = function (widget, index) {
                    this._m_tabBar.takeAt(index);
                };
                /**
                 * Handle the `tabMoved` signal from the tab bar.
                 */
                TabWidget.prototype._tb_tabMoved = function (sender, args) {
                    this._m_stackWidget.moveWidget(args.fromIndex, args.toIndex);
                };
                /**
                 * Handle the `tabSelected` signal from the tab bar.
                 */
                TabWidget.prototype._tb_tabSelected = function (sender, index) {
                    this._m_stackWidget.currentIndex = index;
                };
                /**
                 * Handle the `tabCloseRequested` signal from the tab bar.
                 */
                TabWidget.prototype._tb_tabCloseRequested = function (sender, index) {
                    this.onTabCloseRequested(index);
                };
                /**
                 * Handle the `widgetRemoved` signal from the stack widget.
                 */
                TabWidget.prototype._sw_widgetRemoved = function (sender, args) {
                    this.onWidgetRemoved(args.widget, args.index);
                };
                return TabWidget;
            })(Widget);
            tabwidget.TabWidget = TabWidget;
        })(tabwidget = ui.tabwidget || (ui.tabwidget = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.tabwidget

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var dockwidget;
        (function (dockwidget) {
            'use strict';
            var Tab = ui.tab.Tab;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to DockWidget instances.
             */
            var DOCK_WIDGET_CLASS = 'p-DockWidget';
            /**
             * A widget which can be added to a DockArea.
             */
            var DockWidget = (function (_super) {
                __extends(DockWidget, _super);
                /**
                 * Construct a new dock widget.
                 */
                function DockWidget(title) {
                    _super.call(this);
                    this._m_tab = null;
                    this.classList.add(DOCK_WIDGET_CLASS);
                    if (title === void 0) {
                        this._m_tab = new Tab();
                    }
                    else if (typeof title === 'string') {
                        this._m_tab = new Tab(title);
                    }
                    else {
                        this._m_tab = title;
                    }
                }
                Object.defineProperty(DockWidget.prototype, "title", {
                    /**
                     * Get the title of the dock widget.
                     */
                    get: function () {
                        return this._m_tab.text;
                    },
                    /**
                     * Set the title of the dock widget.
                     */
                    set: function (title) {
                        this._m_tab.text = title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockWidget.prototype, "closable", {
                    /**
                     * Get whether the dock widget is closable by the user.
                     */
                    get: function () {
                        return this._m_tab.closable;
                    },
                    /**
                     * Set whether the dock widget is closable by the user.
                     */
                    set: function (closable) {
                        this._m_tab.closable = closable;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockWidget.prototype, "tab", {
                    /**
                     * Get the tab for the dock widget.
                     */
                    get: function () {
                        return this._m_tab;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DockWidget;
            })(Widget);
            dockwidget.DockWidget = DockWidget;
        })(dockwidget = ui.dockwidget || (ui.dockwidget = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.dockwidget

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var docksplitter;
        (function (docksplitter) {
            'use strict';
            var Splitter = ui.splitter.Splitter;
            /**
             * The class name added to DockSplitter instances.
             */
            var DOCK_SPLITTER_CLASS = 'p-DockSplitter';
            /**
             * A splitter widget used by a DockArea.
             *
             * This class is not part of the public Phosphor API.
             */
            var DockSplitter = (function (_super) {
                __extends(DockSplitter, _super);
                /**
                 * Construct a new dock splitter.
                 */
                function DockSplitter(orientation) {
                    _super.call(this, orientation);
                    this.classList.add(DOCK_SPLITTER_CLASS);
                }
                return DockSplitter;
            })(Splitter);
            docksplitter.DockSplitter = DockSplitter;
        })(docksplitter = ui.docksplitter || (ui.docksplitter = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.docksplitter

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var dockpanel;
        (function (dockpanel) {
            'use strict';
            var BoxLayout = ui.boxlayout.BoxLayout;
            var Direction = ui.enums.Direction;
            var WidgetFlag = ui.enums.WidgetFlag;
            var StackWidget = ui.stackwidget.StackWidget;
            var TabBar = ui.tabbar.TabBar;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to DockPanel instances.
             */
            var DOCK_PANEL_CLASS = 'p-DockPanel';
            /**
             * The class name added to the DockPanel overlay div.
             */
            var OVERLAY_CLASS = 'p-DockPanel-overlay';
            /**
             * The split modes used to indicate a dock panel split direction.
             */
            (function (SplitMode) {
                SplitMode[SplitMode["Top"] = 0] = "Top";
                SplitMode[SplitMode["Left"] = 1] = "Left";
                SplitMode[SplitMode["Right"] = 2] = "Right";
                SplitMode[SplitMode["Bottom"] = 3] = "Bottom";
                SplitMode[SplitMode["Invalid"] = 4] = "Invalid";
            })(dockpanel.SplitMode || (dockpanel.SplitMode = {}));
            var SplitMode = dockpanel.SplitMode;
            /**
             * An panel widget used by the DockArea widget.
             *
             * A dock panel acts as a simple container for a tab bar and stack
             * widget, plus a bit of logic to manage a drop indicator overlay.
             * The dock area manages the tab bar and stack widget directly, as
             * there is not always a 1:1 association between a tab and widget.
             *
             * This class is not part of the public Phosphor API.
             */
            var DockPanel = (function (_super) {
                __extends(DockPanel, _super);
                /**
                 * Construct a new dock panel.
                 */
                function DockPanel() {
                    _super.call(this);
                    this._m_overlayTimer = 0;
                    this._m_overlayHidden = true;
                    this._m_overlayNode = null;
                    this.classList.add(DOCK_PANEL_CLASS);
                    this._m_tabBar = new TabBar();
                    this._m_stackWidget = new StackWidget();
                    this._m_overlayNode = this.createOverlay();
                    var layout = new BoxLayout(2 /* TopToBottom */, 0);
                    layout.addWidget(this._m_tabBar);
                    layout.addWidget(this._m_stackWidget);
                    this.layout = layout;
                    this.setFlag(16 /* DisallowLayoutChange */);
                    this.node.appendChild(this._m_overlayNode);
                }
                Object.defineProperty(DockPanel.prototype, "tabBar", {
                    /**
                     * Get the tab bar child of the dock panel.
                     */
                    get: function () {
                        return this._m_tabBar;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockPanel.prototype, "stackWidget", {
                    /**
                     * Get the stack widget child of the dock panel.
                     */
                    get: function () {
                        return this._m_stackWidget;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Dispose of the resources held by the widget.
                 */
                DockPanel.prototype.dispose = function () {
                    this._clearOverlayTimer();
                    this._m_tabBar = null;
                    this._m_stackWidget = null;
                    this._m_overlayNode = null;
                    _super.prototype.dispose.call(this);
                };
                /**
                 * Compute the split mode for the given client position.
                 */
                DockPanel.prototype.splitModeAt = function (clientX, clientY) {
                    var rect = this.node.getBoundingClientRect();
                    var fracX = (clientX - rect.left) / rect.width;
                    var fracY = (clientY - rect.top) / rect.height;
                    if (fracX < 0.0 || fracX > 1.0 || fracY < 0.0 || fracY > 1.0) {
                        return 4 /* Invalid */;
                    }
                    var mode;
                    var normX = fracX > 0.5 ? 1 - fracX : fracX;
                    var normY = fracY > 0.5 ? 1 - fracY : fracY;
                    if (normX < normY) {
                        mode = fracX <= 0.5 ? 1 /* Left */ : 2 /* Right */;
                    }
                    else {
                        mode = fracY <= 0.5 ? 0 /* Top */ : 3 /* Bottom */;
                    }
                    return mode;
                };
                /**
                 * Show the dock overlay for the given client position.
                 *
                 * If the overlay is already visible, it will be adjusted.
                 */
                DockPanel.prototype.showOverlay = function (clientX, clientY) {
                    this._clearOverlayTimer();
                    var box = this.boxData;
                    var top = box.paddingTop;
                    var left = box.paddingLeft;
                    var right = box.paddingRight;
                    var bottom = box.paddingBottom;
                    switch (this.splitModeAt(clientX, clientY)) {
                        case 1 /* Left */:
                            right = this.width / 2;
                            break;
                        case 2 /* Right */:
                            left = this.width / 2;
                            break;
                        case 0 /* Top */:
                            bottom = this.height / 2;
                            break;
                        case 3 /* Bottom */:
                            top = this.height / 2;
                            break;
                        default:
                            return;
                    }
                    // The first time the overlay is made visible, it is positioned at
                    // the cursor with zero size before being displayed. This allows
                    // for a nice transition to the normally computed size. Since the
                    // elements starts with display: none, a restyle must be forced.
                    var style = this._m_overlayNode.style;
                    if (this._m_overlayHidden) {
                        this._m_overlayHidden = false;
                        var rect = this.node.getBoundingClientRect();
                        style.top = clientY - rect.top + 'px';
                        style.left = clientX - rect.left + 'px';
                        style.right = rect.right - clientX + 'px';
                        style.bottom = rect.bottom - clientY + 'px';
                        style.display = '';
                        this._m_overlayNode.offsetWidth; // force restyle
                    }
                    style.opacity = '1';
                    style.top = top + 'px';
                    style.left = left + 'px';
                    style.right = right + 'px';
                    style.bottom = bottom + 'px';
                };
                /**
                 * Hide the dock overlay.
                 *
                 * If the overlay is already hidden, this is a no-op.
                 */
                DockPanel.prototype.hideOverlay = function () {
                    var _this = this;
                    if (this._m_overlayHidden) {
                        return;
                    }
                    this._clearOverlayTimer();
                    this._m_overlayHidden = true;
                    this._m_overlayNode.style.opacity = '0';
                    this._m_overlayTimer = setTimeout(function () {
                        _this._m_overlayTimer = 0;
                        _this._m_overlayNode.style.display = 'none';
                    }, 150);
                };
                /**
                 * Create the overlay node for the dock panel.
                 */
                DockPanel.prototype.createOverlay = function () {
                    var overlay = document.createElement('div');
                    overlay.className = OVERLAY_CLASS;
                    overlay.style.display = 'none';
                    return overlay;
                };
                /**
                 * Clear the overlay timer.
                 */
                DockPanel.prototype._clearOverlayTimer = function () {
                    if (this._m_overlayTimer) {
                        clearTimeout(this._m_overlayTimer);
                        this._m_overlayTimer = 0;
                    }
                };
                return DockPanel;
            })(Widget);
            dockpanel.DockPanel = DockPanel;
        })(dockpanel = ui.dockpanel || (ui.dockpanel = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.dockpanel

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var dockarea;
        (function (dockarea) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var DockPanel = ui.dockpanel.DockPanel;
            var SplitMode = ui.dockpanel.SplitMode;
            var DockSplitter = ui.docksplitter.DockSplitter;
            var hitTest = ui.domutil.hitTest;
            var overrideCursor = ui.domutil.overrideCursor;
            var DockMode = ui.enums.DockMode;
            var Orientation = ui.enums.Orientation;
            var WidgetFlag = ui.enums.WidgetFlag;
            var SingleLayout = ui.singlelayout.SingleLayout;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to DockArea instances.
             */
            var DOCK_AREA_CLASS = 'p-DockArea';
            /**
             * The class name added to floating tabs.
             */
            var FLOATING_CLASS = 'p-floating';
            /**
             * A widget which provides a flexible layout area for dock widgets.
             */
            var DockArea = (function (_super) {
                __extends(DockArea, _super);
                /**
                 * Construct a new dock area.
                 */
                function DockArea() {
                    _super.call(this);
                    this._m_handleSize = 3;
                    this._m_tabWidth = 175;
                    this._m_tabOverlap = 1;
                    this._m_minTabWidth = 45;
                    this._m_ignoreRemoved = false;
                    this._m_root = null;
                    this._m_dragData = null;
                    this._m_dockItems = [];
                    this.classList.add(DOCK_AREA_CLASS);
                    this._m_root = this._createSplitter(0 /* Horizontal */);
                    var layout = new SingleLayout();
                    layout.widget = this._m_root;
                    this.layout = layout;
                    this.setFlag(16 /* DisallowLayoutChange */);
                }
                /**
                 * Dispose of the resources held by the widget.
                 */
                DockArea.prototype.dispose = function () {
                    this._abortDrag();
                    this._m_root = null;
                    this._m_dockItems = null;
                    _super.prototype.dispose.call(this);
                };
                Object.defineProperty(DockArea.prototype, "tabWidth", {
                    /**
                     * Get the width of the tabs in the dock area.
                     */
                    get: function () {
                        return this._m_tabWidth;
                    },
                    /**
                     * Get the width of the tabs in the dock area.
                     */
                    set: function (width) {
                        width = Math.max(0, width);
                        if (width === this._m_tabWidth) {
                            return;
                        }
                        this._m_tabWidth = width;
                        iterPanels(this._m_root, function (panel) {
                            panel.tabBar.tabWidth = width;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockArea.prototype, "minTabWidth", {
                    /**
                     * Get the minimum tab width in pixels.
                     */
                    get: function () {
                        return this._m_minTabWidth;
                    },
                    /**
                     * Set the minimum tab width in pixels.
                     */
                    set: function (width) {
                        width = Math.max(0, width);
                        if (width === this._m_minTabWidth) {
                            return;
                        }
                        this._m_minTabWidth = width;
                        iterPanels(this._m_root, function (panel) {
                            panel.tabBar.minTabWidth = width;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockArea.prototype, "tabOverlap", {
                    /**
                     * Get the tab overlap amount in pixels.
                     */
                    get: function () {
                        return this._m_tabOverlap;
                    },
                    /**
                     * Set the tab overlap amount in pixels.
                     */
                    set: function (overlap) {
                        if (overlap === this._m_tabOverlap) {
                            return;
                        }
                        this._m_tabOverlap = overlap;
                        iterPanels(this._m_root, function (panel) {
                            panel.tabBar.tabOverlap = overlap;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DockArea.prototype, "handleSize", {
                    /**
                     * Get the handle size of the dock splitters.
                     */
                    get: function () {
                        return this._m_handleSize;
                    },
                    /**
                     * Set the handle size of the dock splitters.
                     */
                    set: function (size) {
                        if (size === this._m_handleSize) {
                            return;
                        }
                        this._m_handleSize = size;
                        iterSplitters(this._m_root, function (splitter) {
                            splitter.handleSize = size;
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Add a dock widget to the dock area.
                 *
                 * The widget is positioned in the area according to the given dock
                 * mode and reference widget. If the dock widget is already added to
                 * the area, it will be moved to the new location.
                 *
                 * A dock widget can be removed by setting its parent to null.
                 *
                 * The default mode inserts the widget on the left side of the area.
                 */
                DockArea.prototype.addWidget = function (widget, mode, ref) {
                    switch (mode) {
                        case 0 /* Top */:
                            this._addWidget(widget, 1 /* Vertical */, false);
                            break;
                        case 1 /* Left */:
                            this._addWidget(widget, 0 /* Horizontal */, false);
                            break;
                        case 2 /* Right */:
                            this._addWidget(widget, 0 /* Horizontal */, true);
                            break;
                        case 3 /* Bottom */:
                            this._addWidget(widget, 1 /* Vertical */, true);
                            break;
                        case 4 /* SplitTop */:
                            this._splitWidget(widget, ref, 1 /* Vertical */, false);
                            break;
                        case 5 /* SplitLeft */:
                            this._splitWidget(widget, ref, 0 /* Horizontal */, false);
                            break;
                        case 6 /* SplitRight */:
                            this._splitWidget(widget, ref, 0 /* Horizontal */, true);
                            break;
                        case 7 /* SplitBottom */:
                            this._splitWidget(widget, ref, 1 /* Vertical */, true);
                            break;
                        case 8 /* TabBefore */:
                            this._tabifyWidget(widget, ref, false);
                            break;
                        case 9 /* TabAfter */:
                            this._tabifyWidget(widget, ref, true);
                            break;
                        default:
                            this._addWidget(widget, 0 /* Horizontal */, false);
                            break;
                    }
                };
                /**
                 * Handle the DOM events for the dock area.
                 */
                DockArea.prototype.handleEvent = function (event) {
                    switch (event.type) {
                        case 'mousemove':
                            this.domEvent_mousemove(event);
                            break;
                        case 'mouseup':
                            this.domEvent_mouseup(event);
                            break;
                        case 'contextmenu':
                            event.preventDefault();
                            event.stopPropagation();
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Handle the 'mousemove' event for the dock area.
                 *
                 * This is triggered on the document during a tab move operation.
                 */
                DockArea.prototype.domEvent_mousemove = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var dragData = this._m_dragData;
                    if (!dragData) {
                        return;
                    }
                    // Hit test the panels using the current mouse position.
                    var clientX = event.clientX;
                    var clientY = event.clientY;
                    var hitPanel = iterPanels(this._m_root, function (p) {
                        return hitTest(p.node, clientX, clientY) ? p : void 0;
                    });
                    // If the last hit panel is not this hit panel, clear the overlay.
                    if (dragData.lastHitPanel && dragData.lastHitPanel !== hitPanel) {
                        dragData.lastHitPanel.hideOverlay();
                    }
                    // Clear the reference to the hit panel. It will be updated again
                    // if the mouse is over a panel, but not over the panel's tab bar.
                    dragData.lastHitPanel = null;
                    // Compute the new X and Y tab coordinates.
                    var x = clientX - dragData.offsetX;
                    var y = clientY - dragData.offsetY;
                    // If the mouse is not over a dock panel, simply update the tab.
                    var item = dragData.item;
                    var itemTab = item.widget.tab;
                    var tabStyle = itemTab.node.style;
                    if (!hitPanel) {
                        tabStyle.left = x + 'px';
                        tabStyle.top = y + 'px';
                        return;
                    }
                    // Handle the case where the mouse is not over a tab bar. This
                    // saves a reference to the hit panel so that its overlay can be
                    // hidden once the mouse leaves the area, and shows the overlay
                    // provided that the split target is not the current widget.
                    if (!hitTest(hitPanel.tabBar.node, clientX, clientY)) {
                        dragData.lastHitPanel = hitPanel;
                        if (hitPanel !== item.panel || hitPanel.tabBar.count > 0) {
                            hitPanel.showOverlay(clientX, clientY);
                        }
                        tabStyle.left = x + 'px';
                        tabStyle.top = y + 'px';
                        return;
                    }
                    // Otherwise the mouse is positioned over a tab bar. Hide the
                    // overlay before attaching the tab to the new tab bar.
                    hitPanel.hideOverlay();
                    // If the hit panel is not the current owner, the current hit
                    // panel and tab are saved so that they can be restored later.
                    if (hitPanel !== item.panel) {
                        dragData.tempPanel = hitPanel;
                        dragData.tempTab = hitPanel.tabBar.selectedTab;
                    }
                    // Reset the tab style before attaching the tab to the tab bar.
                    floatTab(itemTab, false);
                    tabStyle.top = '';
                    tabStyle.left = '';
                    tabStyle.width = '';
                    // Attach the tab to the hit tab bar.
                    hitPanel.tabBar.attachTab({
                        tab: itemTab,
                        clientX: clientX,
                        clientY: clientY,
                        offsetX: dragData.offsetX,
                        offsetY: dragData.offsetY,
                        tabWidth: dragData.tabWidth,
                    });
                    // The tab bar takes over movement of the tab. The dock area still
                    // listens for the mouseup event in order to complete the move.
                    document.removeEventListener('mousemove', this, true);
                };
                /**
                 * Handle the 'mouseup' event for the dock area.
                 *
                 * This is triggered on the document during a tab move operation.
                 */
                DockArea.prototype.domEvent_mouseup = function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    document.removeEventListener('mouseup', this, true);
                    document.removeEventListener('mousemove', this, true);
                    document.removeEventListener('contextmenu', this, true);
                    var dragData = this._m_dragData;
                    if (!dragData) {
                        return;
                    }
                    this._m_dragData = null;
                    // Restore the application cursor and hide the overlay.
                    dragData.grab.dispose();
                    if (dragData.lastHitPanel) {
                        dragData.lastHitPanel.hideOverlay();
                    }
                    // Fetch common variables.
                    var item = dragData.item;
                    var ownPanel = item.panel;
                    var ownBar = ownPanel.tabBar;
                    var ownCount = ownBar.count;
                    var itemTab = item.widget.tab;
                    // If the tab was being temporarily borrowed by another panel,
                    // make that relationship permanent by moving the dock widget.
                    // If the original owner panel becomes empty, it is removed.
                    // Otherwise, its current index is updated to the next widget.
                    //
                    // The ignoreRemoved flag is set during the widget swap since
                    // the widget is not actually being removed from the area.
                    if (dragData.tempPanel) {
                        item.panel = dragData.tempPanel;
                        this._m_ignoreRemoved = true;
                        item.panel.stackWidget.addWidget(item.widget);
                        this._m_ignoreRemoved = false;
                        item.panel.stackWidget.currentWidget = item.widget;
                        if (ownPanel.stackWidget.count === 0) {
                            this._removePanel(ownPanel);
                        }
                        else {
                            var i = ownBar.tabIndex(dragData.prevTab);
                            if (i === -1)
                                i = Math.min(dragData.index, ownCount - 1);
                            ownBar.selectedIndex = i;
                        }
                        return;
                    }
                    // Snap the split mode before modifying the DOM with the tab insert.
                    var mode = 4 /* Invalid */;
                    var hitPanel = dragData.lastHitPanel;
                    if (hitPanel && (hitPanel !== ownPanel || ownCount !== 0)) {
                        mode = hitPanel.splitModeAt(event.clientX, event.clientY);
                    }
                    // If the mouse was not released over a panel, or if the hit panel
                    // is the empty owner panel, restore the tab to its position.
                    var tabStyle = itemTab.node.style;
                    if (mode === 4 /* Invalid */) {
                        if (ownBar.selectedTab !== itemTab) {
                            floatTab(itemTab, false);
                            tabStyle.top = '';
                            tabStyle.left = '';
                            tabStyle.width = '';
                            ownBar.insertTab(dragData.index, itemTab);
                        }
                        return;
                    }
                    // Remove the tab from the document body and reset its style.
                    document.body.removeChild(itemTab.node);
                    floatTab(itemTab, false);
                    tabStyle.top = '';
                    tabStyle.left = '';
                    tabStyle.width = '';
                    // Split the target panel with the dock widget.
                    var after = mode === 2 /* Right */ || mode === 3 /* Bottom */;
                    var horiz = mode === 1 /* Left */ || mode === 2 /* Right */;
                    var orientation = horiz ? 0 /* Horizontal */ : 1 /* Vertical */;
                    this._splitPanel(hitPanel, item.widget, orientation, after);
                    var i = ownBar.tabIndex(dragData.prevTab);
                    if (i === -1)
                        i = Math.min(dragData.index, ownCount - 1);
                    ownBar.selectedIndex = i;
                };
                /**
                 * Add the widget to a new root dock panel along the given orientation.
                 *
                 * If the widget already exists in the area, it will be removed.
                 */
                DockArea.prototype._addWidget = function (widget, orientation, after) {
                    widget.parent = null;
                    var panel = this._createPanel();
                    this._addItem(widget, panel);
                    panel.stackWidget.addWidget(widget);
                    panel.tabBar.addTab(widget.tab);
                    this._ensureRoot(orientation);
                    if (after) {
                        this._m_root.addWidget(panel);
                    }
                    else {
                        this._m_root.insertWidget(0, panel);
                    }
                };
                /**
                 * Add the dock widget as a new split panel next to the reference.
                 *
                 * If the reference does not exist in the area, this is a no-op.
                 *
                 * If the dock widget already exists in the area, it will be moved.
                 */
                DockArea.prototype._splitWidget = function (widget, ref, orientation, after) {
                    if (widget === ref) {
                        return;
                    }
                    var refItem = algo.find(this._m_dockItems, function (it) { return it.widget === ref; });
                    if (!refItem) {
                        return;
                    }
                    this._splitPanel(refItem.panel, widget, orientation, after);
                };
                /**
                 * Split the panel with the given widget along the given orientation.
                 *
                 * If the widget already exists in the area, it will be moved.
                 */
                DockArea.prototype._splitPanel = function (panel, widget, orientation, after) {
                    widget.parent = null;
                    var newPanel = this._createPanel();
                    this._addItem(widget, newPanel);
                    newPanel.stackWidget.addWidget(widget);
                    newPanel.tabBar.addTab(widget.tab);
                    var splitter = panel.parent;
                    if (splitter.orientation !== orientation) {
                        if (splitter.count <= 1) {
                            splitter.orientation = orientation;
                            splitter.insertWidget(after ? 1 : 0, newPanel);
                            splitter.setSizes([1, 1]);
                        }
                        else {
                            var sizes = splitter.sizes();
                            var index = splitter.removeWidget(panel);
                            var newSplitter = this._createSplitter(orientation);
                            newSplitter.addWidget(panel);
                            newSplitter.insertWidget(after ? 1 : 0, newPanel);
                            splitter.insertWidget(index, newSplitter);
                            splitter.setSizes(sizes);
                            newSplitter.setSizes([1, 1]);
                        }
                    }
                    else {
                        var sizes = splitter.sizes();
                        var index = splitter.widgetIndex(panel);
                        splitter.insertWidget(index + (after ? 1 : 0), newPanel);
                        sizes.splice(index, 0, 1 / sizes.length);
                        splitter.setSizes(sizes);
                    }
                };
                /**
                 * Add the dock widget as a tab next to the reference.
                 *
                 * If the reference does not exist in the area, this is a no-op.
                 *
                 * If the dock widget already exists in the area, it will be moved.
                 */
                DockArea.prototype._tabifyWidget = function (widget, ref, after) {
                    if (widget === ref) {
                        return;
                    }
                    var refItem = algo.find(this._m_dockItems, function (it) { return it.widget === ref; });
                    if (!refItem) {
                        return;
                    }
                    widget.parent = null;
                    var panel = refItem.panel;
                    var index = panel.tabBar.tabIndex(ref.tab) + (after ? 1 : 0);
                    this._addItem(widget, panel);
                    panel.stackWidget.addWidget(widget);
                    panel.tabBar.insertTab(index, widget.tab);
                };
                /**
                 * Ensure the root splitter has the given orientation.
                 *
                 * If the current root has the given orientation, this is a no-op.
                 *
                 * If the root has <= 1 child, its orientation will be updated.
                 *
                 * Otherwise, a new root will be created with the proper orientation
                 * and the current root will be added as the new root's first child.
                 */
                DockArea.prototype._ensureRoot = function (orientation) {
                    var root = this._m_root;
                    if (root.orientation === orientation) {
                        return;
                    }
                    if (root.count <= 1) {
                        root.orientation = orientation;
                    }
                    else {
                        this._m_root = this._createSplitter(orientation);
                        this._m_root.addWidget(root);
                        this.layout.widget = this._m_root;
                    }
                };
                /**
                 * Add a new item to the dock area and install its signal handlers.
                 */
                DockArea.prototype._addItem = function (widget, panel) {
                    this._m_dockItems.push({ widget: widget, panel: panel });
                };
                /**
                 * Create a new panel and setup the signal handlers.
                 */
                DockArea.prototype._createPanel = function () {
                    var panel = new DockPanel();
                    var tabBar = panel.tabBar;
                    tabBar.tabWidth = this._m_tabWidth;
                    tabBar.tabOverlap = this._m_tabOverlap;
                    tabBar.minTabWidth = this._m_minTabWidth;
                    tabBar.tabSelected.connect(this._tb_tabSelected, this);
                    tabBar.tabCloseRequested.connect(this._tb_tabCloseRequested, this);
                    tabBar.tabDetachRequested.connect(this._tb_tabDetachRequested, this);
                    panel.stackWidget.widgetRemoved.connect(this._sw_widgetRemoved, this);
                    return panel;
                };
                /**
                 * Create a new dock splitter for the dock area.
                 */
                DockArea.prototype._createSplitter = function (orientation) {
                    var splitter = new DockSplitter(orientation);
                    splitter.handleSize = this._m_handleSize;
                    return splitter;
                };
                /**
                 * Remove an empty dock panel from the hierarchy.
                 *
                 * This ensures that the hierarchy is kept consistent by merging an
                 * ancestor splitter when it contains only a single child widget.
                 */
                DockArea.prototype._removePanel = function (panel) {
                    // The parent of a dock panel is always a splitter.
                    var splitter = panel.parent;
                    // Dispose the panel. It is possible that this method is executing
                    // on the path of the panel's child stack widget event handler, so
                    // the panel is disposed in a deferred fashion to avoid disposing
                    // the child stack widget while its processing events.
                    panel.parent = null;
                    setTimeout(function () { return panel.dispose(); }, 0);
                    // If the splitter still has multiple children after removing
                    // the target panel, nothing else needs to be done.
                    if (splitter.count > 1) {
                        return;
                    }
                    // If the splitter is the root splitter and has a remaining
                    // child which is a splitter, that child becomes the root.
                    if (splitter === this._m_root) {
                        if (splitter.count === 1) {
                            var child = splitter.widgetAt(0);
                            if (child instanceof DockSplitter) {
                                var layout = this.layout;
                                var sizes = child.sizes();
                                this._m_root = child;
                                splitter.parent = null;
                                layout.widget = child;
                                child.setSizes(sizes);
                                splitter.dispose();
                            }
                        }
                        return;
                    }
                    // Non-root splitters always have a splitter parent and are always
                    // created with 2 children, so the splitter is guaranteed to have
                    // a single child at this point. Furthermore, splitters always have
                    // an orthogonal orientation to their parent, so a grandparent and
                    // a grandhild splitter will have the same orientation. This means
                    // the children of the granchild can be merged into the grandparent.
                    var gParent = splitter.parent;
                    var gSizes = gParent.sizes();
                    var gChild = splitter.widgetAt(0);
                    var index = gParent.removeWidget(splitter);
                    if (gChild instanceof DockPanel) {
                        gParent.insertWidget(index, gChild);
                    }
                    else {
                        var gcsp = gChild;
                        var gcspSizes = gcsp.sizes();
                        var sizeShare = gSizes.splice(index, 1)[0];
                        for (var i = 0; gcsp.count !== 0; ++i) {
                            gParent.insertWidget(index + i, gcsp.widgetAt(0));
                            gSizes.splice(index + i, 0, sizeShare * gcspSizes[i]);
                        }
                    }
                    gParent.setSizes(gSizes);
                    splitter.dispose();
                };
                /**
                 * Abort the tab drag operation if one is in progress.
                 */
                DockArea.prototype._abortDrag = function () {
                    var dragData = this._m_dragData;
                    if (!dragData) {
                        return;
                    }
                    this._m_dragData = null;
                    // Release the mouse grab and restore the application cursor.
                    document.removeEventListener('mouseup', this, true);
                    document.removeEventListener('mousemove', this, true);
                    document.removeEventListener('contextmenu', this, true);
                    dragData.grab.dispose();
                    // Hide the overlay for the last hit panel.
                    if (dragData.lastHitPanel) {
                        dragData.lastHitPanel.hideOverlay();
                    }
                    // If the tab is borrowed by another tab bar, remove it from
                    // that tab bar and restore that tab bar's previous tab.
                    if (dragData.tempPanel) {
                        var tabBar = dragData.tempPanel.tabBar;
                        tabBar.takeAt(tabBar.selectedIndex, false);
                        tabBar.selectedTab = dragData.tempTab;
                    }
                    // Restore the tab to its original location in its owner panel.
                    var item = dragData.item;
                    var itemTab = item.widget.tab;
                    var ownBar = item.panel.tabBar;
                    if (ownBar.selectedTab !== itemTab) {
                        var tabStyle = itemTab.node.style;
                        floatTab(itemTab, false);
                        tabStyle.top = '';
                        tabStyle.left = '';
                        tabStyle.width = '';
                        ownBar.insertTab(dragData.index, itemTab);
                    }
                };
                /**
                 * Handle the `tabSelected` signal from a tab bar.
                 */
                DockArea.prototype._tb_tabSelected = function (sender, index) {
                    var tab = sender.tabAt(index);
                    var item = algo.find(this._m_dockItems, function (it) { return it.widget.tab === tab; });
                    if (item && item.panel.tabBar === sender) {
                        item.panel.stackWidget.currentWidget = item.widget;
                    }
                };
                /**
                 * Handle the `tabCloseRequested` signal from a tab bar.
                 */
                DockArea.prototype._tb_tabCloseRequested = function (sender, index) {
                    var tab = sender.tabAt(index);
                    var item = algo.find(this._m_dockItems, function (it) { return it.widget.tab === tab; });
                    if (item)
                        item.widget.close();
                };
                /**
                 * Handle the `tabDetachRequested` signal from the tab bar.
                 */
                DockArea.prototype._tb_tabDetachRequested = function (sender, args) {
                    // Find the dock item for the detach operation.
                    var tab = sender.tabAt(args.index);
                    var item = algo.find(this._m_dockItems, function (it) { return it.widget.tab === tab; });
                    if (!item) {
                        return;
                    }
                    // Create the drag data the first time a tab is detached.
                    // The drag data will be cleared on the mouse up event.
                    if (!this._m_dragData) {
                        var prevTab = sender.previousTab;
                        var grab = overrideCursor(window.getComputedStyle(tab.node).cursor);
                        this._m_dragData = {
                            item: item,
                            index: args.index,
                            tabWidth: 0,
                            offsetX: 0,
                            offsetY: 0,
                            grab: grab,
                            prevTab: prevTab,
                            lastHitPanel: null,
                            tempPanel: null,
                            tempTab: null,
                        };
                    }
                    // Update the drag data with the current tab geometry.
                    var dragData = this._m_dragData;
                    dragData.tabWidth = args.tabWidth;
                    dragData.offsetX = args.offsetX;
                    dragData.offsetY = args.offsetY;
                    // The tab being detached will have one of two states:
                    //
                    // 1) The tab is being detached from its owner tab bar. The current
                    //    index is unset before detaching the tab so that the content
                    //    widget does not change during the drag operation.
                    // 2) The tab is being detached from a tab bar which was borrowing
                    //    the tab temporarily. Its previously selected tab is restored.
                    if (item.panel.tabBar === sender) {
                        sender.selectedIndex = -1;
                        sender.takeAt(args.index, false);
                    }
                    else {
                        sender.takeAt(args.index, false);
                        sender.selectedTab = dragData.tempTab;
                    }
                    // Clear the temp panel and tab
                    dragData.tempPanel = null;
                    dragData.tempTab = null;
                    // Setup the initial style and position for the floating tab.
                    var style = tab.node.style;
                    style.left = args.clientX - args.offsetX + 'px';
                    style.top = args.clientY - args.offsetY + 'px';
                    style.width = args.tabWidth + 'px';
                    style.zIndex = '';
                    // Add the floating tab to the document body.
                    floatTab(tab, true);
                    document.body.appendChild(tab.node);
                    // Attach the necessary mouse event listeners.
                    document.addEventListener('mouseup', this, true);
                    document.addEventListener('mousemove', this, true);
                    document.addEventListener('contextmenu', this, true);
                };
                /**
                 * Handle the `widgetRemoved` signal from a stack widget.
                 */
                DockArea.prototype._sw_widgetRemoved = function (sender, args) {
                    if (this._m_ignoreRemoved) {
                        return;
                    }
                    var widget = args.widget;
                    var item = algo.remove(this._m_dockItems, function (it) { return it.widget === widget; });
                    if (!item) {
                        return;
                    }
                    this._abortDrag();
                    item.panel.tabBar.removeTab(item.widget.tab);
                    if (item.panel.stackWidget.count === 0) {
                        this._removePanel(item.panel);
                    }
                };
                return DockArea;
            })(Widget);
            dockarea.DockArea = DockArea;
            /**
             * Set or remove the floating class on the given tab.
             */
            function floatTab(tab, on) {
                if (on) {
                    tab.node.classList.add(FLOATING_CLASS);
                }
                else {
                    tab.node.classList.remove(FLOATING_CLASS);
                }
            }
            /**
             * Iterate over the DockPanels starting with the given root splitter.
             *
             * Iteration stops when the callback returns anything but undefined.
             */
            function iterPanels(root, cb) {
                for (var i = 0, n = root.count; i < n; ++i) {
                    var result;
                    var widget = root.widgetAt(i);
                    if (widget instanceof DockPanel) {
                        result = cb(widget);
                    }
                    else {
                        result = iterPanels(widget, cb);
                    }
                    if (result !== void 0) {
                        return result;
                    }
                }
            }
            /**
             * Iterate over the DockSplitters starting with the given root splitter.
             *
             * Iteration stops when the callback returns anything but undefined.
             */
            function iterSplitters(root, cb) {
                var result = cb(root);
                if (result !== void 0) {
                    return result;
                }
                for (var i = 0, n = root.count; i < n; ++i) {
                    var widget = root.widgetAt(i);
                    if (widget instanceof DockSplitter) {
                        result = iterSplitters(widget, cb);
                        if (result !== void 0) {
                            return result;
                        }
                    }
                }
            }
        })(dockarea = ui.dockarea || (ui.dockarea = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.dockarea

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var virtualelement;
        (function (virtualelement) {
            'use strict';
            var VirtualElementType = ui.enums.VirtualElementType;
            /**
             * Create a virtual element factory function for the given tag.
             */
            function createFactory(tag) {
                return createElement.bind(void 0, tag);
            }
            virtualelement.createFactory = createFactory;
            /**
             * A concrete implementation of IVirtualElement.
             */
            var VirtualElement = (function () {
                /**
                 * Construct a new virtual element.
                 */
                function VirtualElement(type, tag, data, children) {
                    this.type = type;
                    this.tag = tag;
                    this.data = data;
                    this.children = children;
                }
                return VirtualElement;
            })();
            VirtualElement.prototype.isVirtualElement = true;
            /**
             * A singleton empty object.
             */
            var emptyObject = Object.freeze(Object.create(null));
            /**
             * A singleton empty array.
             */
            var emptyArray = Object.freeze([]);
            /**
             * Create a new virtual text element.
             */
            function createTextElement(text) {
                return new VirtualElement(0 /* Text */, text, emptyObject, emptyArray);
            }
            /**
             * Create a new virtual node element.
             */
            function createNodeElement(tag, data, children) {
                return new VirtualElement(1 /* Node */, tag, data, children);
            }
            /**
             * Create a new virtual component element.
             */
            function createComponentElement(tag, data, children) {
                return new VirtualElement(2 /* Component */, tag, data, children);
            }
            /**
             * Extend the first array with elements of the second.
             */
            function extend(first, second) {
                for (var i = 0, n = second.length; i < n; ++i) {
                    var item = second[i];
                    if (item)
                        first.push(item);
                }
            }
            /**
             * Create a new virtual element with the given tag name.
             *
             * This can be bound to the tag name to create an element factory.
             */
            function createElement(tag, first) {
                var data = emptyObject;
                var children;
                if (first) {
                    if (typeof first === 'string' || first.isVirtualElement) {
                        children = [first];
                    }
                    else if (Array.isArray(first)) {
                        children = first.slice();
                    }
                    else {
                        data = first;
                    }
                }
                var count = arguments.length;
                if (count > 2) {
                    children = children || [];
                    for (var i = 2; i < count; ++i) {
                        var child = arguments[i];
                        if (Array.isArray(child)) {
                            extend(children, child);
                        }
                        else if (child) {
                            children.push(child);
                        }
                    }
                }
                if (children) {
                    for (var i = 0, n = children.length; i < n; ++i) {
                        var child = children[i];
                        if (typeof child === 'string') {
                            children[i] = createTextElement(child);
                        }
                    }
                }
                else {
                    children = emptyArray;
                }
                var elem;
                if (typeof tag === 'string') {
                    elem = createNodeElement(tag, data, children);
                }
                else {
                    elem = createComponentElement(tag, data, children);
                }
                return elem;
            }
        })(virtualelement = ui.virtualelement || (ui.virtualelement = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.virtualelement

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var virtualdom;
        (function (virtualdom) {
            'use strict';
            var createFactory = ui.virtualelement.createFactory;
            /**
             * The virtual DOM factory functions.
             */
            virtualdom.DOM = {
                a: createFactory('a'),
                abbr: createFactory('abbr'),
                address: createFactory('address'),
                area: createFactory('area'),
                article: createFactory('article'),
                aside: createFactory('aside'),
                audio: createFactory('audio'),
                b: createFactory('b'),
                bdi: createFactory('bdi'),
                bdo: createFactory('bdo'),
                blockquote: createFactory('blockquote'),
                br: createFactory('br'),
                button: createFactory('button'),
                canvas: createFactory('canvas'),
                caption: createFactory('caption'),
                cite: createFactory('cite'),
                code: createFactory('code'),
                col: createFactory('col'),
                colgroup: createFactory('colgroup'),
                data: createFactory('data'),
                datalist: createFactory('datalist'),
                dd: createFactory('dd'),
                del: createFactory('del'),
                dfn: createFactory('dfn'),
                div: createFactory('div'),
                dl: createFactory('dl'),
                dt: createFactory('dt'),
                em: createFactory('em'),
                embed: createFactory('embed'),
                fieldset: createFactory('fieldset'),
                figcaption: createFactory('figcaption'),
                figure: createFactory('figure'),
                footer: createFactory('footer'),
                form: createFactory('form'),
                h1: createFactory('h1'),
                h2: createFactory('h2'),
                h3: createFactory('h3'),
                h4: createFactory('h4'),
                h5: createFactory('h5'),
                h6: createFactory('h6'),
                header: createFactory('header'),
                hr: createFactory('hr'),
                i: createFactory('i'),
                iframe: createFactory('iframe'),
                img: createFactory('img'),
                input: createFactory('input'),
                ins: createFactory('ins'),
                kbd: createFactory('kbd'),
                label: createFactory('label'),
                legend: createFactory('legend'),
                li: createFactory('li'),
                main: createFactory('main'),
                map: createFactory('map'),
                mark: createFactory('mark'),
                meter: createFactory('meter'),
                nav: createFactory('nav'),
                object: createFactory('object'),
                ol: createFactory('ol'),
                optgroup: createFactory('optgroup'),
                option: createFactory('option'),
                output: createFactory('output'),
                p: createFactory('p'),
                param: createFactory('param'),
                pre: createFactory('pre'),
                progress: createFactory('progress'),
                q: createFactory('q'),
                rp: createFactory('rp'),
                rt: createFactory('rt'),
                ruby: createFactory('ruby'),
                s: createFactory('s'),
                samp: createFactory('samp'),
                section: createFactory('section'),
                select: createFactory('select'),
                small: createFactory('small'),
                source: createFactory('source'),
                span: createFactory('span'),
                strong: createFactory('strong'),
                sub: createFactory('sub'),
                summary: createFactory('summary'),
                sup: createFactory('sup'),
                table: createFactory('table'),
                tbody: createFactory('tbody'),
                td: createFactory('td'),
                textarea: createFactory('textarea'),
                tfoot: createFactory('tfoot'),
                th: createFactory('th'),
                thead: createFactory('thead'),
                time: createFactory('time'),
                title: createFactory('title'),
                tr: createFactory('tr'),
                track: createFactory('track'),
                u: createFactory('u'),
                ul: createFactory('ul'),
                var: createFactory('var'),
                video: createFactory('video'),
                wbr: createFactory('wbr'),
            };
        })(virtualdom = ui.virtualdom || (ui.virtualdom = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.virtualdom

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var virtualrenderer;
        (function (virtualrenderer) {
            'use strict';
            var algo = phosphor.core.algorithm;
            var sendEvent = phosphor.core.eventloop.sendEvent;
            var VirtualElementType = ui.enums.VirtualElementType;
            var EVT_RENDER_REQUEST = ui.eventtypes.EVT_RENDER_REQUEST;
            /**
             * Render virtual content into a host node.
             *
             * This renders the delta from the previous rendering. It assumes that
             * the contents of the host node are not manipulated by external code.
             * Modifying the host node will result in undefined rendering behavior.
             *
             * Returns a mapping of ref nodes and components.
             */
            function render(content, host) {
                var oldContent = hostMap.get(host) || emptyArray;
                var newContent = asElementArray(content);
                hostMap.set(host, newContent);
                updateContent(host, oldContent, newContent);
                return collectRefs(host, newContent);
            }
            virtualrenderer.render = render;
            /**
             * A weak mapping of host node to rendered content.
             */
            var hostMap = new WeakMap();
            /**
             * A weak mapping of component node to component.
             */
            var componentMap = new WeakMap();
            /**
             * A singleton empty object.
             */
            var emptyObject = Object.freeze(Object.create(null));
            /**
             * A singleton empty array.
             */
            var emptyArray = Object.freeze([]);
            /**
             * A regex for testing for 'data-*' attributes.
             */
            var dataRegex = /^data-/;
            /**
             * A constant indicating an attribute is node property.
             */
            var IS_PROPERTY = 0;
            /**
             * A constant indicating an attribute is node attribute.
             */
            var IS_ATTRIBUTE = 1;
            /**
             * A constant indicate an attribute is an inline event handler.
             */
            var IS_EVENT = 2;
            /**
             * Coerce virtual content into a virtual element array.
             *
             * Null content will be coerced to an empty array.
             */
            function asElementArray(content) {
                if (Array.isArray(content)) {
                    return content;
                }
                if (content) {
                    return [content];
                }
                return emptyArray;
            }
            /**
             * Collect the mapping of keyed elements for the host content.
             */
            function collectKeys(host, content) {
                var childNodes = host.childNodes;
                var keyed = Object.create(null);
                for (var i = 0, n = content.length; i < n; ++i) {
                    var elem = content[i];
                    var key = elem.data.key;
                    if (key)
                        keyed[key] = { elem: elem, node: childNodes[i] };
                }
                return keyed;
            }
            /**
             * Walk the element tree and collect the refs into a new object.
             */
            function collectRefs(host, content) {
                var refs = Object.create(null);
                collectRefsRecursive(host, content, refs);
                return refs;
            }
            /**
             * A recursive implementation helper for `collectRefs`.
             */
            function collectRefsRecursive(host, content, refs) {
                var childNodes = host.childNodes;
                for (var i = 0, n = content.length; i < n; ++i) {
                    var elem = content[i];
                    var type = elem.type;
                    if (type === 1 /* Node */) {
                        var node = childNodes[i];
                        var ref = elem.data.ref;
                        if (ref)
                            refs[ref] = node;
                        collectRefsRecursive(node, elem.children, refs);
                    }
                    else if (type === 2 /* Component */) {
                        var ref = elem.data.ref;
                        if (ref)
                            refs[ref] = componentMap.get(childNodes[i]);
                    }
                }
            }
            /**
             * Move a node to a new location in a host element.
             *
             * This function will maintain focus on the node if applicable.
             */
            function moveNode(host, node, ref) {
                // TODO - IE11 fails to set the focus properly
                var wasActive = document.activeElement === node;
                host.insertBefore(node, ref);
                if (wasActive)
                    node.focus();
            }
            /**
             * Create a new DOM node for the given virtual element.
             */
            function createNode(elem) {
                var type = elem.type;
                if (type === 0 /* Text */) {
                    return document.createTextNode(elem.tag);
                }
                if (type === 1 /* Node */) {
                    var node = document.createElement(elem.tag);
                    addAttributes(node, elem.data);
                    addContent(node, elem.children);
                    return node;
                }
                if (type === 2 /* Component */) {
                    var component = new elem.tag();
                    componentMap.set(component.node, component);
                    component.init(elem.data, elem.children);
                    sendEvent(component, EVT_RENDER_REQUEST);
                    return component.node;
                }
                throw new Error('invalid element type');
            }
            /**
             * Add content to a newly created DOM node.
             */
            function addContent(node, content) {
                for (var i = 0, n = content.length; i < n; ++i) {
                    node.appendChild(createNode(content[i]));
                }
            }
            /**
             * Add attributes to a newly created DOM node.
             */
            function addAttributes(node, attrs) {
                for (var name in attrs) {
                    var mode = attrModeTable[name];
                    if (mode === IS_PROPERTY || mode === IS_EVENT) {
                        node[name] = attrs[name];
                    }
                    else if (mode === IS_ATTRIBUTE) {
                        node.setAttribute(name.toLowerCase(), attrs[name]);
                    }
                    else if (dataRegex.test(name)) {
                        node.setAttribute(name, attrs[name]);
                    }
                }
                var inlineStyles = attrs.style;
                if (!inlineStyles) {
                    return;
                }
                var style = node.style;
                for (var name in inlineStyles) {
                    style[name] = inlineStyles[name];
                }
            }
            /**
             * Update a host node with the delta of the virtual content.
             */
            function updateContent(host, oldContent, newContent) {
                // Bail early if the content is identical. This can occur when an
                // element has no children or if a component renders cached content.
                if (oldContent === newContent) {
                    return;
                }
                // Collect the old keyed elements into a mapping.
                var oldKeyed = collectKeys(host, oldContent);
                // Create a copy of the old content which can be modified in-place.
                var oldCopy = oldContent.slice();
                // Store the child node list locally.
                var childNodes = host.childNodes;
                // Update the host with the new content. The diff algorithm always
                // proceeds forward and never modifies a previously visited index.
                // The `oldCopy` array is modified in-place to reflect the changes
                // made to the host. This causes the unused nodes to be pushed to
                // the end of the host node and removed at the end of the loop.
                var newCount = newContent.length;
                for (var i = 0; i < newCount; ++i) {
                    var newElem = newContent[i];
                    // If the old elements are exhausted, create a new node.
                    if (i >= oldCopy.length) {
                        oldCopy.push(newElem);
                        host.appendChild(createNode(newElem));
                        continue;
                    }
                    var oldElem = oldCopy[i];
                    var currentNode = childNodes[i];
                    // If the new element is keyed, move a keyed old element
                    // to the proper location before proceeding with the diff.
                    var key = newElem.data.key;
                    if (key && key in oldKeyed) {
                        var pair = oldKeyed[key];
                        if (pair.elem !== oldElem) {
                            algo.pull(oldCopy, pair.elem);
                            oldCopy.splice(i, 0, pair.elem);
                            moveNode(host, pair.node, currentNode);
                            oldElem = pair.elem;
                            currentNode = pair.node;
                        }
                    }
                    // If both elements are identical, there is nothing to do.
                    // This can occur when a component renders cached content.
                    if (oldElem === newElem) {
                        continue;
                    }
                    // If the elements have different types, create a new node.
                    if (oldElem.type !== newElem.type) {
                        oldCopy.splice(i, 0, newElem);
                        host.insertBefore(createNode(newElem), currentNode);
                        continue;
                    }
                    // If the element is a text node, update its text content.
                    if (newElem.type === 0 /* Text */) {
                        if (oldElem.tag !== newElem.tag) {
                            currentNode.textContent = newElem.tag;
                        }
                        continue;
                    }
                    // At this point, the element is a Node or Component type.
                    // If the element tags are different, create a new node.
                    if (oldElem.tag !== newElem.tag) {
                        oldCopy.splice(i, 0, newElem);
                        host.insertBefore(createNode(newElem), currentNode);
                        continue;
                    }
                    // If the element is a Node type, update the node in place.
                    if (newElem.type === 1 /* Node */) {
                        updateAttributes(currentNode, oldElem.data, newElem.data);
                        updateContent(currentNode, oldElem.children, newElem.children);
                        continue;
                    }
                    // At this point, the node is a Component type. Initialize
                    // the component with new data and render it if necessary.
                    var component = componentMap.get(currentNode);
                    if (component.init(newElem.data, newElem.children)) {
                        sendEvent(component, EVT_RENDER_REQUEST);
                    }
                }
                for (var i = oldCopy.length - 1; i >= newCount; --i) {
                    var oldNode = childNodes[i];
                    host.removeChild(oldNode);
                    disposeBranch(oldNode);
                }
            }
            /**
             * Update node attributes with the delta of attribute objects.
             */
            function updateAttributes(node, oldAttrs, newAttrs) {
                if (oldAttrs === newAttrs) {
                    return;
                }
                for (var name in oldAttrs) {
                    if (!(name in newAttrs)) {
                        var mode = attrModeTable[name];
                        if (mode === IS_PROPERTY) {
                            node.removeAttribute(name);
                        }
                        else if (mode === IS_ATTRIBUTE) {
                            node.removeAttribute(name.toLowerCase());
                        }
                        else if (mode === IS_EVENT) {
                            node[name] = null;
                        }
                        else if (dataRegex.test(name)) {
                            node.removeAttribute(name);
                        }
                    }
                }
                for (var name in newAttrs) {
                    var value = newAttrs[name];
                    if (oldAttrs[name] !== value) {
                        var mode = attrModeTable[name];
                        if (mode === IS_PROPERTY || mode === IS_EVENT) {
                            node[name] = value;
                        }
                        else if (mode === IS_ATTRIBUTE) {
                            node.setAttribute(name.toLowerCase(), value);
                        }
                        else if (dataRegex.test(name)) {
                            node.setAttribute(name, value);
                        }
                    }
                }
                var oldInlineStyles = oldAttrs.style || emptyObject;
                var newInlineStyles = newAttrs.style || emptyObject;
                if (oldInlineStyles === newInlineStyles) {
                    return;
                }
                var style = node.style;
                for (var name in oldInlineStyles) {
                    if (!(name in newInlineStyles)) {
                        style[name] = '';
                    }
                }
                for (var name in newInlineStyles) {
                    var value = newInlineStyles[name];
                    if (oldInlineStyles[name] !== value) {
                        style[name] = value;
                    }
                }
            }
            /**
             * Dispose of the components associated with the given branch.
             */
            function disposeBranch(root) {
                if (root.nodeType === 1) {
                    var component = componentMap.get(root);
                    if (component)
                        component.dispose();
                }
                for (var node = root.firstChild; node; node = node.nextSibling) {
                    disposeBranch(node);
                }
            }
            /**
             * A mapping of attribute name to required setattr mode.
             */
            var attrModeTable = {
                accept: IS_PROPERTY,
                acceptCharset: IS_PROPERTY,
                accessKey: IS_PROPERTY,
                action: IS_PROPERTY,
                allowFullscreen: IS_ATTRIBUTE,
                alt: IS_PROPERTY,
                autocomplete: IS_PROPERTY,
                autofocus: IS_PROPERTY,
                autoplay: IS_PROPERTY,
                checked: IS_PROPERTY,
                cite: IS_PROPERTY,
                className: IS_PROPERTY,
                colSpan: IS_PROPERTY,
                cols: IS_PROPERTY,
                contentEditable: IS_PROPERTY,
                controls: IS_PROPERTY,
                coords: IS_PROPERTY,
                crossOrigin: IS_PROPERTY,
                data: IS_PROPERTY,
                dateTime: IS_PROPERTY,
                default: IS_PROPERTY,
                dir: IS_PROPERTY,
                dirName: IS_PROPERTY,
                disabled: IS_PROPERTY,
                download: IS_PROPERTY,
                draggable: IS_PROPERTY,
                enctype: IS_PROPERTY,
                form: IS_ATTRIBUTE,
                formAction: IS_PROPERTY,
                formEnctype: IS_PROPERTY,
                formMethod: IS_PROPERTY,
                formNoValidate: IS_PROPERTY,
                formTarget: IS_PROPERTY,
                headers: IS_PROPERTY,
                height: IS_PROPERTY,
                hidden: IS_PROPERTY,
                high: IS_PROPERTY,
                href: IS_PROPERTY,
                hreflang: IS_PROPERTY,
                htmlFor: IS_PROPERTY,
                id: IS_PROPERTY,
                inputMode: IS_PROPERTY,
                isMap: IS_PROPERTY,
                kind: IS_PROPERTY,
                label: IS_PROPERTY,
                lang: IS_PROPERTY,
                list: IS_ATTRIBUTE,
                loop: IS_PROPERTY,
                low: IS_PROPERTY,
                max: IS_PROPERTY,
                maxLength: IS_PROPERTY,
                media: IS_ATTRIBUTE,
                mediaGroup: IS_PROPERTY,
                method: IS_PROPERTY,
                min: IS_PROPERTY,
                minLength: IS_PROPERTY,
                multiple: IS_PROPERTY,
                muted: IS_PROPERTY,
                name: IS_PROPERTY,
                noValidate: IS_PROPERTY,
                optimum: IS_PROPERTY,
                pattern: IS_PROPERTY,
                placeholder: IS_PROPERTY,
                poster: IS_PROPERTY,
                preload: IS_PROPERTY,
                readOnly: IS_PROPERTY,
                rel: IS_PROPERTY,
                required: IS_PROPERTY,
                reversed: IS_PROPERTY,
                rowSpan: IS_PROPERTY,
                rows: IS_PROPERTY,
                sandbox: IS_PROPERTY,
                scope: IS_PROPERTY,
                seamless: IS_ATTRIBUTE,
                selected: IS_PROPERTY,
                shape: IS_PROPERTY,
                size: IS_PROPERTY,
                sizes: IS_ATTRIBUTE,
                sorted: IS_PROPERTY,
                span: IS_PROPERTY,
                spellcheck: IS_PROPERTY,
                src: IS_PROPERTY,
                srcdoc: IS_PROPERTY,
                srclang: IS_PROPERTY,
                srcset: IS_ATTRIBUTE,
                start: IS_PROPERTY,
                step: IS_PROPERTY,
                tabIndex: IS_PROPERTY,
                target: IS_PROPERTY,
                title: IS_PROPERTY,
                type: IS_PROPERTY,
                typeMustMatch: IS_PROPERTY,
                useMap: IS_PROPERTY,
                value: IS_PROPERTY,
                volume: IS_PROPERTY,
                width: IS_PROPERTY,
                wrap: IS_PROPERTY,
                onabort: IS_EVENT,
                onbeforecopy: IS_EVENT,
                onbeforecut: IS_EVENT,
                onbeforepaste: IS_EVENT,
                onblur: IS_EVENT,
                oncanplay: IS_EVENT,
                oncanplaythrough: IS_EVENT,
                onchange: IS_EVENT,
                onclick: IS_EVENT,
                oncontextmenu: IS_EVENT,
                oncopy: IS_EVENT,
                oncuechange: IS_EVENT,
                oncut: IS_EVENT,
                ondblclick: IS_EVENT,
                ondrag: IS_EVENT,
                ondragend: IS_EVENT,
                ondragenter: IS_EVENT,
                ondragleave: IS_EVENT,
                ondragover: IS_EVENT,
                ondragstart: IS_EVENT,
                ondrop: IS_EVENT,
                ondurationchange: IS_EVENT,
                onended: IS_EVENT,
                onemptied: IS_EVENT,
                onerror: IS_EVENT,
                onfocus: IS_EVENT,
                onhelp: IS_EVENT,
                oninput: IS_EVENT,
                onkeydown: IS_EVENT,
                onkeypress: IS_EVENT,
                onkeyup: IS_EVENT,
                onload: IS_EVENT,
                onloadeddata: IS_EVENT,
                onloadedmetadata: IS_EVENT,
                onloadstart: IS_EVENT,
                onmousedown: IS_EVENT,
                onmouseenter: IS_EVENT,
                onmouseleave: IS_EVENT,
                onmousemove: IS_EVENT,
                onmouseout: IS_EVENT,
                onmouseover: IS_EVENT,
                onmouseup: IS_EVENT,
                onmousewheel: IS_EVENT,
                onpaste: IS_EVENT,
                onpause: IS_EVENT,
                onplay: IS_EVENT,
                onplaying: IS_EVENT,
                onprogress: IS_EVENT,
                onratechange: IS_EVENT,
                onreadystatechange: IS_EVENT,
                onreset: IS_EVENT,
                onscroll: IS_EVENT,
                onseeked: IS_EVENT,
                onseeking: IS_EVENT,
                onselect: IS_EVENT,
                onselectstart: IS_EVENT,
                onstalled: IS_EVENT,
                onsubmit: IS_EVENT,
                onsuspend: IS_EVENT,
                ontimeupdate: IS_EVENT,
                onvolumechange: IS_EVENT,
                onwaiting: IS_EVENT,
            };
        })(virtualrenderer = ui.virtualrenderer || (ui.virtualrenderer = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.virtualrenderer

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var component;
        (function (component) {
            'use strict';
            var postEvent = phosphor.core.eventloop.postEvent;
            var sendEvent = phosphor.core.eventloop.sendEvent;
            var EVT_AFTER_RENDER = ui.eventtypes.EVT_AFTER_RENDER;
            var EVT_BEFORE_RENDER = ui.eventtypes.EVT_BEFORE_RENDER;
            var EVT_RENDER_REQUEST = ui.eventtypes.EVT_RENDER_REQUEST;
            var render = ui.virtualrenderer.render;
            /**
             * A singleton empty object.
             */
            var emptyObject = Object.freeze(Object.create(null));
            /**
             * A singleton empty array.
             */
            var emptyArray = Object.freeze([]);
            /**
             * A concrete implementation of IComponent.
             */
            var Component = (function () {
                /**
                 * Construct a new component.
                 */
                function Component() {
                    this._m_data = null;
                    this._m_refs = null;
                    this._m_children = null;
                    var ctor = this.constructor;
                    this._m_node = document.createElement(ctor.tag);
                    this._m_node.className = ctor.className;
                }
                /**
                 * Dispose of the resources held by the component.
                 */
                Component.prototype.dispose = function () {
                    this._m_node = null;
                    this._m_data = null;
                    this._m_refs = null;
                    this._m_children = null;
                };
                Object.defineProperty(Component.prototype, "node", {
                    /**
                     * Get the DOM node for the component.
                     */
                    get: function () {
                        return this._m_node;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Component.prototype, "id", {
                    /**
                     * Get the id of the component's DOM node.
                     */
                    get: function () {
                        return this._m_node.id;
                    },
                    /**
                     * Set the id of the component's DOM node.
                     */
                    set: function (id) {
                        this._m_node.id = id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Component.prototype, "classList", {
                    /**
                     * Get the class list for the component's DOM node.
                     */
                    get: function () {
                        return this._m_node.classList;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Component.prototype, "data", {
                    /**
                     * Get the current data for the component.
                     *
                     * Returns an empty object if the component is not rendered.
                     */
                    get: function () {
                        return this._m_data || emptyObject;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Component.prototype, "children", {
                    /**
                     * Get the current children elements of the component.
                     *
                     * Returns an empty array if the component is not rendered.
                     */
                    get: function () {
                        return this._m_children || emptyArray;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Component.prototype, "refs", {
                    /**
                     * Get the current refs mapping for the component.
                     *
                     * Returns an empty object if the component is not rendered.
                     */
                    get: function () {
                        return this._m_refs || emptyObject;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Initialize the component with new data and children.
                 *
                 * This is called automatically by the renderer at the proper times.
                 *
                 * Returns true if the component should be updated, false otherwise.
                 * The default implementation returns true. A reimplementation must
                 * call the superclass method to update the internal component state.
                 */
                Component.prototype.init = function (data, children) {
                    this._m_data = data;
                    this._m_children = children;
                    return true;
                };
                /**
                 * Render the virtual content for the component.
                 *
                 * The rendered content is used to populate the component's node.
                 *
                 * This should be reimplemented by a subclass.
                 *
                 * The default implementation returns null.
                 */
                Component.prototype.render = function () {
                    return null;
                };
                /**
                 * Schedule a rendering update for the component.
                 *
                 * This should be called whenever the internal state of the component
                 * has changed such that it requires the component to be re-rendered.
                 *
                 * Multiple synchronous calls to this method are collapsed.
                 */
                Component.prototype.update = function () {
                    postEvent(this, EVT_RENDER_REQUEST);
                };
                /**
                 * Process an event dispatched to the component.
                 */
                Component.prototype.processEvent = function (event) {
                    switch (event.type) {
                        case 'render-request':
                            sendEvent(this, EVT_BEFORE_RENDER);
                            this._m_refs = render(this.render(), this._m_node);
                            sendEvent(this, EVT_AFTER_RENDER);
                            break;
                        case 'before-render':
                            this.beforeRenderEvent(event);
                            break;
                        case 'after-render':
                            this.afterRenderEvent(event);
                            break;
                        default:
                            break;
                    }
                };
                /**
                 * Compress an event posted to the component.
                 */
                Component.prototype.compressEvent = function (event, postedEvents) {
                    var type = event.type;
                    if (type === 'render-request') {
                        return postedEvents.some(function (other) { return other.type === type; });
                    }
                    return false;
                };
                /**
                 * A hook method invoked before normal event processing.
                 */
                Component.prototype.hookEvent = function (event) {
                };
                /**
                 * A method invoked on a 'before-render' event.
                 *
                 * The default implementation is a no-op.
                 */
                Component.prototype.beforeRenderEvent = function (event) {
                };
                /**
                 * A method invoked on an 'after-render' event.
                 *
                 * The default implementation is a no-op.
                 */
                Component.prototype.afterRenderEvent = function (event) {
                };
                /**
                 * The tag name used to create the component's DOM node.
                 *
                 * A subclass may redefine this property.
                 */
                Component.tag = 'div';
                /**
                 * The initial class name for the component's DOM node.
                 *
                 * A subclass may redefine this property.
                 */
                Component.className = '';
                return Component;
            })();
            component.Component = Component;
        })(component = ui.component || (ui.component = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.component

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var phosphor;
(function (phosphor) {
    var ui;
    (function (ui) {
        var elementhost;
        (function (elementhost) {
            'use strict';
            var WidgetFlag = ui.enums.WidgetFlag;
            var Size = ui.geometry.Size;
            var render = ui.virtualrenderer.render;
            var Widget = ui.widget.Widget;
            /**
             * The class name added to element host widgets.
             */
            var ELEMENT_HOST_CLASS = 'p-ElementHost';
            /**
             * A Widget which hosts a virtual element.
             *
             * This widget can be used to embed an element in a widget hierarchy.
             */
            var ElementHost = (function (_super) {
                __extends(ElementHost, _super);
                /**
                 * Construct a new console view.
                 */
                function ElementHost(element, width, height) {
                    if (element === void 0) { element = null; }
                    if (width === void 0) { width = 0; }
                    if (height === void 0) { height = 0; }
                    _super.call(this);
                    this.classList.add(ELEMENT_HOST_CLASS);
                    this.setFlag(16 /* DisallowLayoutChange */);
                    width = Math.max(0, width);
                    height = Math.max(0, height);
                    this._m_element = element;
                    this._m_preferredSize = new Size(width, height);
                }
                Object.defineProperty(ElementHost.prototype, "element", {
                    /**
                     * Get the virtual element hosted by the widget.
                     */
                    get: function () {
                        return this._m_element;
                    },
                    /**
                     * Set the virtual element hosted by the widget.
                     */
                    set: function (element) {
                        element = element || null;
                        if (element === this._m_element) {
                            return;
                        }
                        this._m_element = element;
                        render(element, this.node);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Calculate the preferred size of the widget.
                 */
                ElementHost.prototype.sizeHint = function () {
                    return this._m_preferredSize;
                };
                /**
                 * Set the preferred size for the widget.
                 */
                ElementHost.prototype.setPreferredSize = function (width, height) {
                    width = Math.max(0, width);
                    height = Math.max(0, height);
                    var old = this._m_preferredSize;
                    if (width === old.width && height === old.height) {
                        return;
                    }
                    this._m_preferredSize = new Size(width, height);
                    this.updateGeometry();
                };
                /**
                 * A method invoked on the 'after-attach' event.
                 */
                ElementHost.prototype.afterAttachEvent = function (event) {
                    render(this._m_element, this.node);
                };
                /**
                 * A method invoked on the 'after-detach' event.
                 */
                ElementHost.prototype.afterDetachEvent = function (event) {
                    render(null, this.node);
                };
                return ElementHost;
            })(Widget);
            elementhost.ElementHost = ElementHost;
        })(elementhost = ui.elementhost || (ui.elementhost = {}));
    })(ui = phosphor.ui || (phosphor.ui = {}));
})(phosphor || (phosphor = {})); // module phosphor.ui.elementhost
