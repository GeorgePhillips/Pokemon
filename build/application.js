(function(a, b) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = a.document ? b(a, true) : function(a) {
            if (!a.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return b(a);
        };
    } else {
        b(a);
    }
})(typeof window !== "undefined" ? window : this, function(a, b) {
    var c = [];
    var d = c.slice;
    var e = c.concat;
    var f = c.push;
    var g = c.indexOf;
    var h = {};
    var i = h.toString;
    var j = h.hasOwnProperty;
    var k = {};
    var l = a.document, m = "2.1.1", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return a != null ? a < 0 ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            b.prevObject = this;
            b.context = this.context;
            return b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    };
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = false;
        if (typeof g === "boolean") {
            j = g;
            g = arguments[h] || {};
            h++;
        }
        if (typeof g !== "object" && !n.isFunction(g)) {
            g = {};
        }
        if (h === i) {
            g = this;
            h--;
        }
        for (;h < i; h++) {
            if ((a = arguments[h]) != null) {
                for (b in a) {
                    c = g[b];
                    d = a[b];
                    if (g === d) {
                        continue;
                    }
                    if (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))) {
                        if (e) {
                            e = false;
                            f = c && n.isArray(c) ? c : [];
                        } else {
                            f = c && n.isPlainObject(c) ? c : {};
                        }
                        g[b] = n.extend(j, f, d);
                    } else if (d !== undefined) {
                        g[b] = d;
                    }
                }
            }
        }
        return g;
    };
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return n.type(a) === "function";
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return a != null && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0;
        },
        isPlainObject: function(a) {
            if (n.type(a) !== "object" || a.nodeType || n.isWindow(a)) {
                return false;
            }
            if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
            return true;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return false;
            }
            return true;
        },
        type: function(a) {
            if (a == null) {
                return a + "";
            }
            return typeof a === "object" || typeof a === "function" ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a);
            if (a) {
                if (a.indexOf("use strict") === 1) {
                    b = l.createElement("script");
                    b.text = a;
                    l.head.appendChild(b).parentNode.removeChild(b);
                } else {
                    c(a);
                }
            }
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (;e < f; e++) {
                        d = b.apply(a[e], c);
                        if (d === false) {
                            break;
                        }
                    }
                } else {
                    for (e in a) {
                        d = b.apply(a[e], c);
                        if (d === false) {
                            break;
                        }
                    }
                }
            } else {
                if (g) {
                    for (;e < f; e++) {
                        d = b.call(a[e], e, a[e]);
                        if (d === false) {
                            break;
                        }
                    }
                } else {
                    for (e in a) {
                        d = b.call(a[e], e, a[e]);
                        if (d === false) {
                            break;
                        }
                    }
                }
            }
            return a;
        },
        trim: function(a) {
            return a == null ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            if (a != null) {
                if (s(Object(a))) {
                    n.merge(c, typeof a === "string" ? [ a ] : a);
                } else {
                    f.call(c, a);
                }
            }
            return c;
        },
        inArray: function(a, b, c) {
            return b == null ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            for (;d < c; d++) {
                a[e++] = b[d];
            }
            a.length = e;
            return a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length, h = !c;
            for (;f < g; f++) {
                d = !b(a[f], f);
                if (d !== h) {
                    e.push(a[f]);
                }
            }
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) {
                for (;f < g; f++) {
                    d = b(a[f], f, c);
                    if (d != null) {
                        i.push(d);
                    }
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c);
                    if (d != null) {
                        i.push(d);
                    }
                }
            }
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            if (typeof b === "string") {
                c = a[b];
                b = a;
                a = c;
            }
            if (!n.isFunction(a)) {
                return undefined;
            }
            e = d.call(arguments, 2);
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            };
            f.guid = a.guid = a.guid || n.guid++;
            return f;
        },
        now: Date.now,
        support: k
    });
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        if (c === "function" || n.isWindow(a)) {
            return false;
        }
        if (a.nodeType === 1 && b) {
            return true;
        }
        return c === "array" || b === 0 || typeof b === "number" && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date(), v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            if (a === b) {
                l = true;
            }
            return 0;
        }, C = typeof undefined, D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            var b = 0, c = this.length;
            for (;b < c; b++) {
                if (this[b] === a) {
                    return b;
                }
            }
            return -1;
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|" + ".*" + ")\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, d & 1023 | 56320);
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes);
            F[v.childNodes.length].nodeType;
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1;
                }
            };
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n) {
                m(b);
            }
            b = b || n;
            d = d || [];
            if (!a || typeof a !== "string") {
                return d;
            }
            if ((k = b.nodeType) !== 1 && k !== 9) {
                return [];
            }
            if (p && !e) {
                if (f = _.exec(a)) {
                    if (j = f[1]) {
                        if (k === 9) {
                            h = b.getElementById(j);
                            if (h && h.parentNode) {
                                if (h.id === j) {
                                    d.push(h);
                                    return d;
                                }
                            } else {
                                return d;
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                d.push(h);
                                return d;
                            }
                        }
                    } else if (f[2]) {
                        I.apply(d, b.getElementsByTagName(a));
                        return d;
                    } else if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                        I.apply(d, b.getElementsByClassName(j));
                        return d;
                    }
                }
                if (c.qsa && (!q || !q.test(a))) {
                    s = r = u;
                    w = b;
                    x = k === 9 && a;
                    if (k === 1 && b.nodeName.toLowerCase() !== "object") {
                        o = g(a);
                        if (r = b.getAttribute("id")) {
                            s = r.replace(bb, "\\$&");
                        } else {
                            b.setAttribute("id", s);
                        }
                        s = "[id='" + s + "'] ";
                        l = o.length;
                        while (l--) {
                            o[l] = s + qb(o[l]);
                        }
                        w = ab.test(a) && ob(b.parentNode) || b;
                        x = o.join(",");
                    }
                    if (x) {
                        try {
                            I.apply(d, w.querySelectorAll(x));
                            return d;
                        } catch (y) {} finally {
                            if (!r) {
                                b.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function gb() {
            var a = [];
            function b(c, e) {
                if (a.push(c + " ") > d.cacheLength) {
                    delete b[a.shift()];
                }
                return b[c + " "] = e;
            }
            return b;
        }
        function hb(a) {
            a[u] = true;
            return a;
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return false;
            } finally {
                if (b.parentNode) {
                    b.parentNode.removeChild(b);
                }
                b = null;
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }
        function kb(a, b) {
            var c = b && a, d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) {
                return d;
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a;
            };
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a;
            };
        }
        function nb(a) {
            return hb(function(b) {
                b = +b;
                return hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        if (c[e = f[g]]) {
                            c[e] = !(d[e] = c[e]);
                        }
                    }
                });
            });
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a;
        }
        c = fb.support = {};
        f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : false;
        };
        m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            if (e === n || e.nodeType !== 9 || !e.documentElement) {
                return n;
            }
            n = e;
            o = e.documentElement;
            p = !f(e);
            if (g && g !== g.top) {
                if (g.addEventListener) {
                    g.addEventListener("unload", function() {
                        m();
                    }, false);
                } else if (g.attachEvent) {
                    g.attachEvent("onunload", function() {
                        m();
                    });
                }
            }
            c.attributes = ib(function(a) {
                a.className = "i";
                return !a.getAttribute("className");
            });
            c.getElementsByTagName = ib(function(a) {
                a.appendChild(e.createComment(""));
                return !a.getElementsByTagName("*").length;
            });
            c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return a.getElementsByClassName("i").length === 2;
            });
            c.getById = ib(function(a) {
                o.appendChild(a).id = u;
                return !e.getElementsByName || !e.getElementsByName(u).length;
            });
            if (c.getById) {
                d.find["ID"] = function(a, b) {
                    if (typeof b.getElementById !== C && p) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [ c ] : [];
                    }
                };
                d.filter["ID"] = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        return a.getAttribute("id") === b;
                    };
                };
            } else {
                delete d.find["ID"];
                d.filter["ID"] = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                        return c && c.value === b;
                    };
                };
            }
            d.find["TAG"] = c.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== C) {
                    return b.getElementsByTagName(a);
                }
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if (a === "*") {
                    while (c = f[e++]) {
                        if (c.nodeType === 1) {
                            d.push(c);
                        }
                    }
                    return d;
                }
                return f;
            };
            d.find["CLASS"] = c.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== C && p) {
                    return b.getElementsByClassName(a);
                }
            };
            r = [];
            q = [];
            if (c.qsa = $.test(e.querySelectorAll)) {
                ib(function(a) {
                    a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                    if (a.querySelectorAll("[msallowclip^='']").length) {
                        q.push("[*^$]=" + M + "*(?:''|\"\")");
                    }
                    if (!a.querySelectorAll("[selected]").length) {
                        q.push("\\[" + M + "*(?:value|" + L + ")");
                    }
                    if (!a.querySelectorAll(":checked").length) {
                        q.push(":checked");
                    }
                });
                ib(function(a) {
                    var b = e.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    if (a.querySelectorAll("[name=d]").length) {
                        q.push("name" + M + "*[*^$|!~]?=");
                    }
                    if (!a.querySelectorAll(":enabled").length) {
                        q.push(":enabled", ":disabled");
                    }
                    a.querySelectorAll("*,:x");
                    q.push(",.*:");
                });
            }
            if (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                ib(function(a) {
                    c.disconnectedMatch = s.call(a, "div");
                    s.call(a, "[s!='']:x");
                    r.push("!=", Q);
                });
            }
            q = q.length && new RegExp(q.join("|"));
            r = r.length && new RegExp(r.join("|"));
            b = $.test(o.compareDocumentPosition);
            t = b || $.test(o.contains) ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            B = b ? function(a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (d) {
                    return d;
                }
                d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                if (d & 1 || !c.sortDetached && b.compareDocumentPosition(a) === d) {
                    if (a === e || a.ownerDocument === v && t(v, a)) {
                        return -1;
                    }
                    if (b === e || b.ownerDocument === v && t(v, b)) {
                        return 1;
                    }
                    return k ? K.call(k, a) - K.call(k, b) : 0;
                }
                return d & 4 ? -1 : 1;
            } : function(a, b) {
                if (a === b) {
                    l = true;
                    return 0;
                }
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [ a ], i = [ b ];
                if (!f || !g) {
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                } else if (f === g) {
                    return kb(a, b);
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c);
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c);
                }
                while (h[d] === i[d]) {
                    d++;
                }
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            };
            return e;
        };
        fb.matches = function(a, b) {
            return fb(a, null, null, b);
        };
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            b = b.replace(U, "='$1']");
            if (c.matchesSelector && p && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && a.document.nodeType !== 11) {
                        return d;
                    }
                } catch (e) {}
            }
            return fb(b, n, null, [ a ]).length > 0;
        };
        fb.contains = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            return t(a, b);
        };
        fb.attr = function(a, b) {
            if ((a.ownerDocument || a) !== n) {
                m(a);
            }
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : undefined;
            return f !== undefined ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        };
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        };
        fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            l = !c.detectDuplicates;
            k = !c.sortStable && a.slice(0);
            a.sort(B);
            if (l) {
                while (b = a[f++]) {
                    if (b === a[f]) {
                        e = d.push(f);
                    }
                }
                while (e--) {
                    a.splice(d[e], 1);
                }
            }
            k = null;
            return a;
        };
        e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (!f) {
                while (b = a[d++]) {
                    c += e(b);
                }
            } else if (f === 1 || f === 9 || f === 11) {
                if (typeof a.textContent === "string") {
                    return a.textContent;
                } else {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                }
            } else if (f === 3 || f === 4) {
                return a.nodeValue;
            }
            return c;
        };
        d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(cb, db);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db);
                    if (a[2] === "~=") {
                        a[3] = " " + a[3] + " ";
                    }
                    return a.slice(0, 4);
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    if (a[1].slice(0, 3) === "nth") {
                        if (!a[3]) {
                            fb.error(a[0]);
                        }
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd"));
                        a[5] = +(a[7] + a[8] || a[3] === "odd");
                    } else if (a[3]) {
                        fb.error(a[0]);
                    }
                    return a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (X["CHILD"].test(a[0])) {
                        return null;
                    }
                    if (a[3]) {
                        a[2] = a[4] || a[5] || "";
                    } else if (c && V.test(c) && (b = g(c, true)) && (b = c.indexOf(")", c.length - b) - c.length)) {
                        a[0] = a[0].slice(0, b);
                        a[2] = c.slice(0, b);
                    }
                    return a.slice(0, 3);
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return a === "*" ? function() {
                        return true;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test(typeof a.className === "string" && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        if (e == null) {
                            return b === "!=";
                        }
                        if (!b) {
                            return true;
                        }
                        e += "";
                        return b === "=" ? e === c : b === "!=" ? e !== c : b === "^=" ? c && e.indexOf(c) === 0 : b === "*=" ? c && e.indexOf(c) > -1 : b === "$=" ? c && e.slice(-c.length) === c : b === "~=" ? (" " + e + " ").indexOf(c) > -1 : b === "|=" ? e === c || e.slice(0, c.length + 1) === c + "-" : false;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = a.slice(0, 3) !== "nth", g = a.slice(-4) !== "last", h = b === "of-type";
                    return d === 1 && e === 0 ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    o = p = a === "only" && !o && "nextSibling";
                                }
                                return true;
                            }
                            o = [ g ? q.firstChild : q.lastChild ];
                            if (g && s) {
                                k = q[u] || (q[u] = {});
                                j = k[a] || [];
                                n = j[0] === w && j[1];
                                m = j[0] === w && j[2];
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (l.nodeType === 1 && ++m && l === b) {
                                        k[a] = [ w, n, m ];
                                        break;
                                    }
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                m = j[1];
                            } else {
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if ((h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) && ++m) {
                                        if (s) {
                                            (l[u] || (l[u] = {}))[a] = [ w, m ];
                                        }
                                        if (l === b) {
                                            break;
                                        }
                                    }
                                }
                            }
                            m -= e;
                            return m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    if (e[u]) {
                        return e(b);
                    }
                    if (e.length > 1) {
                        c = [ a, a, "", b ];
                        return d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                            var d, f = e(a, b), g = f.length;
                            while (g--) {
                                d = K.call(a, f[g]);
                                a[d] = !(c[d] = f[g]);
                            }
                        }) : function(a) {
                            return e(a, 0, c);
                        };
                    }
                    return e;
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            if (f = g[h]) {
                                a[h] = !(b[h] = f);
                            }
                        }
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        return !c.pop();
                    };
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0;
                    };
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: hb(function(a) {
                    if (!W.test(a || "")) {
                        fb.error("unsupported lang: " + a);
                    }
                    a = a.replace(cb, db).toLowerCase();
                    return function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                c = c.toLowerCase();
                                return c === a || c.indexOf(a + "-") === 0;
                            }
                        } while ((b = b.parentNode) && b.nodeType === 1);
                        return false;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === false;
                },
                disabled: function(a) {
                    return a.disabled === true;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected;
                },
                selected: function(a) {
                    if (a.parentNode) {
                        a.parentNode.selectedIndex;
                    }
                    return a.selected === true;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(a) {
                    return !d.pseudos["empty"](a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button";
                },
                text: function(a) {
                    var b;
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text");
                },
                first: nb(function() {
                    return [ 0 ];
                }),
                last: nb(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: nb(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: nb(function(a, b) {
                    var c = 0;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                odd: nb(function(a, b) {
                    var c = 1;
                    for (;c < b; c += 2) {
                        a.push(c);
                    }
                    return a;
                }),
                lt: nb(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;--d >= 0; ) {
                        a.push(d);
                    }
                    return a;
                }),
                gt: nb(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (;++d < b; ) {
                        a.push(d);
                    }
                    return a;
                })
            }
        };
        d.pseudos["nth"] = d.pseudos["eq"];
        for (b in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            d.pseudos[b] = lb(b);
        }
        for (b in {
            submit: true,
            reset: true
        }) {
            d.pseudos[b] = mb(b);
        }
        function pb() {}
        pb.prototype = d.filters = d.pseudos;
        d.setFilters = new pb();
        g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0);
            }
            h = a;
            i = [];
            j = d.preFilter;
            while (h) {
                if (!c || (e = S.exec(h))) {
                    if (e) {
                        h = h.slice(e[0].length) || h;
                    }
                    i.push(f = []);
                }
                c = false;
                if (e = T.exec(h)) {
                    c = e.shift();
                    f.push({
                        value: c,
                        type: e[0].replace(R, " ")
                    });
                    h = h.slice(c.length);
                }
                for (g in d.filter) {
                    if ((e = X[g].exec(h)) && (!j[g] || (e = j[g](e)))) {
                        c = e.shift();
                        f.push({
                            value: c,
                            type: g,
                            matches: e
                        });
                        h = h.slice(c.length);
                    }
                }
                if (!c) {
                    break;
                }
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        };
        function qb(a) {
            var b = 0, c = a.length, d = "";
            for (;b < c; b++) {
                d += a[b].value;
            }
            return d;
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && d === "parentNode", f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (b.nodeType === 1 || e) {
                        return a(b, c, f);
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            if (a(b, c, g)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (b.nodeType === 1 || e) {
                            i = b[u] || (b[u] = {});
                            if ((h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2];
                            } else {
                                i[d] = j;
                                if (j[2] = a(b, c, g)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return false;
                    }
                }
                return true;
            } : a[0];
        }
        function tb(a, b, c) {
            var d = 0, e = b.length;
            for (;d < e; d++) {
                fb(a, b[d], c);
            }
            return c;
        }
        function ub(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (;h < i; h++) {
                if (f = a[h]) {
                    if (!c || c(f, d, e)) {
                        g.push(f);
                        if (j) {
                            b.push(h);
                        }
                    }
                }
            }
            return g;
        }
        function vb(a, b, c, d, e, f) {
            if (d && !d[u]) {
                d = vb(d);
            }
            if (e && !e[u]) {
                e = vb(e, f);
            }
            return hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [ h ] : h, []), q = a && (f || !b) ? ub(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c) {
                    c(q, r, h, i);
                }
                if (d) {
                    j = ub(r, n);
                    d(j, [], h, i);
                    k = j.length;
                    while (k--) {
                        if (l = j[k]) {
                            r[n[k]] = !(q[n[k]] = l);
                        }
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [];
                            k = r.length;
                            while (k--) {
                                if (l = r[k]) {
                                    j.push(q[k] = l);
                                }
                            }
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) {
                            if ((l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1) {
                                f[j] = !(g[j] = l);
                            }
                        }
                    }
                } else {
                    r = ub(r === g ? r.splice(o, r.length) : r);
                    if (e) {
                        e(null, g, r, i);
                    } else {
                        I.apply(g, r);
                    }
                }
            });
        }
        function wb(a) {
            var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b;
            }, h, true), l = rb(function(a) {
                return K.call(b, a) > -1;
            }, h, true), m = [ function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            } ];
            for (;i < f; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ rb(sb(m), c) ];
                } else {
                    c = d.filter[a[i].type].apply(null, a[i].matches);
                    if (c[u]) {
                        e = ++i;
                        for (;e < f; e++) {
                            if (d.relative[a[e].type]) {
                                break;
                            }
                        }
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: a[i - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), c, i < e && wb(a.slice(i, e)), e < f && wb(a = a.slice(e)), e < f && qb(a));
                    }
                    m.push(c);
                }
            }
            return sb(m);
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find["TAG"]("*", k), v = w += t == null ? 1 : Math.random() || .1, x = u.length;
                if (k) {
                    j = g !== n && g;
                }
                for (;q !== x && (l = u[q]) != null; q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);
                                break;
                            }
                        }
                        if (k) {
                            w = v;
                        }
                    }
                    if (c) {
                        if (l = !o && l) {
                            p--;
                        }
                        if (f) {
                            r.push(l);
                        }
                    }
                }
                p += q;
                if (c && q !== p) {
                    m = 0;
                    while (o = b[m++]) {
                        o(r, s, g, h);
                    }
                    if (f) {
                        if (p > 0) {
                            while (q--) {
                                if (!(r[q] || s[q])) {
                                    s[q] = G.call(i);
                                }
                            }
                        }
                        s = ub(s);
                    }
                    I.apply(i, s);
                    if (k && !f && s.length > 0 && p + b.length > 1) {
                        fb.uniqueSort(i);
                    }
                }
                if (k) {
                    w = v;
                    j = t;
                }
                return r;
            };
            return c ? hb(f) : f;
        }
        h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                if (!b) {
                    b = g(a);
                }
                c = b.length;
                while (c--) {
                    f = wb(b[c]);
                    if (f[u]) {
                        d.push(f);
                    } else {
                        e.push(f);
                    }
                }
                f = A(a, xb(e, d));
                f.selector = a;
            }
            return f;
        };
        i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = typeof a === "function" && a, o = !f && g(a = n.selector || a);
            e = e || [];
            if (o.length === 1) {
                j = o[0] = o[0].slice(0);
                if (j.length > 2 && (k = j[0]).type === "ID" && c.getById && b.nodeType === 9 && p && d.relative[j[1].type]) {
                    b = (d.find["ID"](k.matches[0].replace(cb, db), b) || [])[0];
                    if (!b) {
                        return e;
                    } else if (n) {
                        b = b.parentNode;
                    }
                    a = a.slice(j.shift().value.length);
                }
                i = X["needsContext"].test(a) ? 0 : j.length;
                while (i--) {
                    k = j[i];
                    if (d.relative[l = k.type]) {
                        break;
                    }
                    if (m = d.find[l]) {
                        if (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b)) {
                            j.splice(i, 1);
                            a = f.length && qb(j);
                            if (!a) {
                                I.apply(e, f);
                                return e;
                            }
                            break;
                        }
                    }
                }
            }
            (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b);
            return e;
        };
        c.sortStable = u.split("").sort(B).join("") === u;
        c.detectDuplicates = !!l;
        m();
        c.sortDetached = ib(function(a) {
            return a.compareDocumentPosition(n.createElement("div")) & 1;
        });
        if (!ib(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return a.firstChild.getAttribute("href") === "#";
        })) {
            jb("type|href|height|width", function(a, b, c) {
                if (!c) {
                    return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!c.attributes || !ib(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return a.firstChild.getAttribute("value") === "";
        })) {
            jb("value", function(a, b, c) {
                if (!c && a.nodeName.toLowerCase() === "input") {
                    return a.defaultValue;
                }
            });
        }
        if (!ib(function(a) {
            return a.getAttribute("disabled") == null;
        })) {
            jb(L, function(a, b, c) {
                var d;
                if (!c) {
                    return a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }
            });
        }
        return fb;
    }(a);
    n.find = t;
    n.expr = t.selectors;
    n.expr[":"] = n.expr.pseudos;
    n.unique = t.uniqueSort;
    n.text = t.getText;
    n.isXMLDoc = t.isXML;
    n.contains = t.contains;
    var u = n.expr.match.needsContext;
    var v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c;
            });
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c;
            });
        }
        if (typeof b === "string") {
            if (w.test(b)) {
                return n.filter(b, a, c);
            }
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        if (c) {
            a = ":not(" + a + ")";
        }
        return b.length === 1 && d.nodeType === 1 ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return a.nodeType === 1;
        }));
    };
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if (typeof a !== "string") {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; b < c; b++) {
                        if (n.contains(e[b], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (b = 0; b < c; b++) {
                n.find(a, e[b], d);
            }
            d = this.pushStack(c > 1 ? n.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], false));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], true));
        },
        is: function(a) {
            return !!x(this, typeof a === "string" && u.test(a) ? n(a) : a || [], false).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) {
            return this;
        }
        if (typeof a === "string") {
            if (a[0] === "<" && a[a.length - 1] === ">" && a.length >= 3) {
                c = [ null, a, null ];
            } else {
                c = z.exec(a);
            }
            if (c && (c[1] || !b)) {
                if (c[1]) {
                    b = b instanceof n ? b[0] : b;
                    n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, true));
                    if (v.test(c[1]) && n.isPlainObject(b)) {
                        for (c in b) {
                            if (n.isFunction(this[c])) {
                                this[c](b[c]);
                            } else {
                                this.attr(c, b[c]);
                            }
                        }
                    }
                    return this;
                } else {
                    d = l.getElementById(c[2]);
                    if (d && d.parentNode) {
                        this.length = 1;
                        this[0] = d;
                    }
                    this.context = l;
                    this.selector = a;
                    return this;
                }
            } else if (!b || b.jquery) {
                return (b || y).find(a);
            } else {
                return this.constructor(b).find(a);
            }
        } else if (a.nodeType) {
            this.context = this[0] = a;
            this.length = 1;
            return this;
        } else if (n.isFunction(a)) {
            return typeof y.ready !== "undefined" ? y.ready(a) : a(n);
        }
        if (a.selector !== undefined) {
            this.selector = a.selector;
            this.context = a.context;
        }
        return n.makeArray(a, this);
    };
    A.prototype = n.fn;
    y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = c !== undefined;
            while ((a = a[b]) && a.nodeType !== 9) {
                if (a.nodeType === 1) {
                    if (e && n(a).is(c)) {
                        break;
                    }
                    d.push(a);
                }
            }
            return d;
        },
        sibling: function(a, b) {
            var c = [];
            for (;a; a = a.nextSibling) {
                if (a.nodeType === 1 && a !== b) {
                    c.push(a);
                }
            }
            return c;
        }
    });
    n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                var a = 0;
                for (;a < c; a++) {
                    if (n.contains(this, b[a])) {
                        return true;
                    }
                }
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = u.test(a) || typeof a !== "string" ? n(a, b || this.context) : 0;
            for (;d < e; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof a === "string") {
                return g.call(n(a), this[0]);
            }
            return g.call(this, a.jquery ? a[0] : a);
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && a.nodeType !== 1) {}
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            if (a.slice(-5) !== "Until") {
                d = c;
            }
            if (d && typeof d === "string") {
                e = n.filter(d, e);
            }
            if (this.length > 1) {
                if (!C[a]) {
                    n.unique(e);
                }
                if (B.test(a)) {
                    e.reverse();
                }
            }
            return this.pushStack(e);
        };
    });
    var E = /\S+/g;
    var F = {};
    function G(a) {
        var b = F[a] = {};
        n.each(a.match(E) || [], function(a, c) {
            b[c] = true;
        });
        return b;
    }
    n.Callbacks = function(a) {
        a = typeof a === "string" ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            b = a.memory && l;
            c = true;
            g = e || 0;
            e = 0;
            f = h.length;
            d = true;
            for (;h && g < f; g++) {
                if (h[g].apply(l[0], l[1]) === false && a.stopOnFalse) {
                    b = false;
                    break;
                }
            }
            d = false;
            if (h) {
                if (i) {
                    if (i.length) {
                        j(i.shift());
                    }
                } else if (b) {
                    h = [];
                } else {
                    k.disable();
                }
            }
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    (function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            if (d === "function") {
                                if (!a.unique || !k.has(c)) {
                                    h.push(c);
                                }
                            } else if (c && c.length && d !== "string") {
                                g(c);
                            }
                        });
                    })(arguments);
                    if (d) {
                        f = h.length;
                    } else if (b) {
                        e = c;
                        j(b);
                    }
                }
                return this;
            },
            remove: function() {
                if (h) {
                    n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) {
                            h.splice(c, 1);
                            if (d) {
                                if (c <= f) {
                                    f--;
                                }
                                if (c <= g) {
                                    g--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !!(h && h.length);
            },
            empty: function() {
                h = [];
                f = 0;
                return this;
            },
            disable: function() {
                h = i = b = undefined;
                return this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                i = undefined;
                if (!b) {
                    k.disable();
                }
                return this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                if (h && (!c || i)) {
                    b = b || [];
                    b = [ a, b.slice ? b.slice() : b ];
                    if (d) {
                        i.push(b);
                    } else {
                        j(b);
                    }
                }
                return this;
            },
            fire: function() {
                k.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    };
    n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                if (a && n.isFunction(a.promise)) {
                                    a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                } else {
                                    c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                                }
                            });
                        });
                        a = null;
                    }).promise();
                },
                promise: function(a) {
                    return a != null ? n.extend(a, d) : d;
                }
            }, e = {};
            d.pipe = d.then;
            n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add;
                if (h) {
                    g.add(function() {
                        c = h;
                    }, b[a ^ 1][2].disable, b[2][2].lock);
                }
                e[f[0]] = function() {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this;
                };
                e[f[0] + "With"] = g.fireWith;
            });
            d.promise(e);
            if (a) {
                a.call(e, e);
            }
            return e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = e !== 1 || a && n.isFunction(a.promise) ? e : 0, g = f === 1 ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? d.call(arguments) : e;
                    if (c === i) {
                        g.notifyWith(b, c);
                    } else if (!--f) {
                        g.resolveWith(b, c);
                    }
                };
            }, i, j, k;
            if (e > 1) {
                i = new Array(e);
                j = new Array(e);
                k = new Array(e);
                for (;b < e; b++) {
                    if (c[b] && n.isFunction(c[b].promise)) {
                        c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i));
                    } else {
                        --f;
                    }
                }
            }
            if (!f) {
                g.resolveWith(k, c);
            }
            return g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        n.ready.promise().done(a);
        return this;
    };
    n.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(a) {
            if (a) {
                n.readyWait++;
            } else {
                n.ready(true);
            }
        },
        ready: function(a) {
            if (a === true ? --n.readyWait : n.isReady) {
                return;
            }
            n.isReady = true;
            if (a !== true && --n.readyWait > 0) {
                return;
            }
            H.resolveWith(l, [ n ]);
            if (n.fn.triggerHandler) {
                n(l).triggerHandler("ready");
                n(l).off("ready");
            }
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, false);
        a.removeEventListener("load", I, false);
        n.ready();
    }
    n.ready.promise = function(b) {
        if (!H) {
            H = n.Deferred();
            if (l.readyState === "complete") {
                setTimeout(n.ready);
            } else {
                l.addEventListener("DOMContentLoaded", I, false);
                a.addEventListener("load", I, false);
            }
        }
        return H.promise(b);
    };
    n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = c == null;
        if (n.type(c) === "object") {
            e = true;
            for (h in c) {
                n.access(a, b, h, c[h], true, f, g);
            }
        } else if (d !== undefined) {
            e = true;
            if (!n.isFunction(d)) {
                g = true;
            }
            if (j) {
                if (g) {
                    b.call(a, d);
                    b = null;
                } else {
                    j = b;
                    b = function(a, b, c) {
                        return j.call(n(a), c);
                    };
                }
            }
            if (b) {
                for (;h < i; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        });
        this.expando = n.expando + Math.random();
    }
    K.uid = 1;
    K.accepts = n.acceptData;
    K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) {
                return 0;
            }
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    };
                    Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c;
                    n.extend(a, b);
                }
            }
            if (!this.cache[c]) {
                this.cache[c] = {};
            }
            return c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if (typeof b === "string") {
                f[b] = c;
            } else {
                if (n.isEmptyObject(f)) {
                    n.extend(this.cache[e], b);
                } else {
                    for (d in b) {
                        f[d] = b[d];
                    }
                }
            }
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return b === undefined ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            if (b === undefined || b && typeof b === "string" && c === undefined) {
                d = this.get(a, b);
                return d !== undefined ? d : this.get(a, n.camelCase(b));
            }
            this.set(a, b, c);
            return c !== undefined ? c : b;
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (b === undefined) {
                this.cache[f] = {};
            } else {
                if (n.isArray(b)) {
                    d = b.concat(b.map(n.camelCase));
                } else {
                    e = n.camelCase(b);
                    if (b in g) {
                        d = [ b, e ];
                    } else {
                        d = e;
                        d = d in g ? [ d ] : d.match(E) || [];
                    }
                }
                c = d.length;
                while (c--) {
                    delete g[d[c]];
                }
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            if (a[this.expando]) {
                delete this.cache[a[this.expando]];
            }
        }
    };
    var L = new K();
    var M = new K();
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (c === undefined && a.nodeType === 1) {
            d = "data-" + b.replace(O, "-$1").toLowerCase();
            c = a.getAttribute(d);
            if (typeof c === "string") {
                try {
                    c = c === "true" ? true : c === "false" ? false : c === "null" ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                M.set(a, b, c);
            } else {
                c = undefined;
            }
        }
        return c;
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    });
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (a === undefined) {
                if (this.length) {
                    e = M.get(f);
                    if (f.nodeType === 1 && !L.get(f, "hasDataAttrs")) {
                        c = g.length;
                        while (c--) {
                            if (g[c]) {
                                d = g[c].name;
                                if (d.indexOf("data-") === 0) {
                                    d = n.camelCase(d.slice(5));
                                    P(f, d, e[d]);
                                }
                            }
                        }
                        L.set(f, "hasDataAttrs", true);
                    }
                }
                return e;
            }
            if (typeof a === "object") {
                return this.each(function() {
                    M.set(this, a);
                });
            }
            return J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && b === undefined) {
                    c = M.get(f, a);
                    if (c !== undefined) {
                        return c;
                    }
                    c = M.get(f, d);
                    if (c !== undefined) {
                        return c;
                    }
                    c = P(f, d, undefined);
                    if (c !== undefined) {
                        return c;
                    }
                    return;
                }
                this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b);
                    if (a.indexOf("-") !== -1 && c !== undefined) {
                        M.set(this, a, b);
                    }
                });
            }, null, b, arguments.length > 1, null, true);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    });
    n.extend({
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = L.get(a, b);
                if (c) {
                    if (!d || n.isArray(c)) {
                        d = L.access(a, b, n.makeArray(c));
                    } else {
                        d.push(c);
                    }
                }
                return d || [];
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            if (e === "inprogress") {
                e = c.shift();
                d--;
            }
            if (e) {
                if (b === "fx") {
                    c.unshift("inprogress");
                }
                delete f.stop;
                e.call(a, g, f);
            }
            if (!d && f) {
                f.empty.fire();
            }
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    });
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            if (typeof a !== "string") {
                b = a;
                a = "fx";
                c--;
            }
            if (arguments.length < c) {
                return n.queue(this[0], a);
            }
            return b === undefined ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a);
                if (a === "fx" && c[0] !== "inprogress") {
                    n.dequeue(this, a);
                }
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                if (!--d) {
                    e.resolveWith(f, [ f ]);
                }
            };
            if (typeof a !== "string") {
                b = a;
                a = undefined;
            }
            a = a || "fx";
            while (g--) {
                c = L.get(f[g], a + "queueHooks");
                if (c && c.empty) {
                    d++;
                    c.empty.add(h);
                }
            }
            h();
            return e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var R = [ "Top", "Right", "Bottom", "Left" ];
    var S = function(a, b) {
        a = b || a;
        return n.css(a, "display") === "none" || !n.contains(a.ownerDocument, a);
    };
    var T = /^(?:checkbox|radio)$/i;
    (function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        b.appendChild(c);
        k.checkClone = b.cloneNode(true).cloneNode(true).lastChild.checked;
        b.innerHTML = "<textarea>x</textarea>";
        k.noCloneChecked = !!b.cloneNode(true).lastChild.defaultValue;
    })();
    var U = typeof undefined;
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return true;
    }
    function $() {
        return false;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (!r) {
                return;
            }
            if (c.handler) {
                f = c;
                c = f.handler;
                e = f.selector;
            }
            if (!c.guid) {
                c.guid = n.guid++;
            }
            if (!(i = r.events)) {
                i = r.events = {};
            }
            if (!(g = r.handle)) {
                g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : undefined;
                };
            }
            b = (b || "").match(E) || [ "" ];
            j = b.length;
            while (j--) {
                h = Y.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
                if (!o) {
                    continue;
                }
                l = n.event.special[o] || {};
                o = (e ? l.delegateType : l.bindType) || o;
                l = n.event.special[o] || {};
                k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f);
                if (!(m = i[o])) {
                    m = i[o] = [];
                    m.delegateCount = 0;
                    if (!l.setup || l.setup.call(a, d, p, g) === false) {
                        if (a.addEventListener) {
                            a.addEventListener(o, g, false);
                        }
                    }
                }
                if (l.add) {
                    l.add.call(a, k);
                    if (!k.handler.guid) {
                        k.handler.guid = c.guid;
                    }
                }
                if (e) {
                    m.splice(m.delegateCount++, 0, k);
                } else {
                    m.push(k);
                }
                n.event.global[o] = true;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (!r || !(i = r.events)) {
                return;
            }
            b = (b || "").match(E) || [ "" ];
            j = b.length;
            while (j--) {
                h = Y.exec(b[j]) || [];
                o = q = h[1];
                p = (h[2] || "").split(".").sort();
                if (!o) {
                    for (o in i) {
                        n.event.remove(a, o + b[j], c, d, true);
                    }
                    continue;
                }
                l = n.event.special[o] || {};
                o = (d ? l.delegateType : l.bindType) || o;
                m = i[o] || [];
                h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                g = f = m.length;
                while (f--) {
                    k = m[f];
                    if ((e || q === k.origType) && (!c || c.guid === k.guid) && (!h || h.test(k.namespace)) && (!d || d === k.selector || d === "**" && k.selector)) {
                        m.splice(f, 1);
                        if (k.selector) {
                            m.delegateCount--;
                        }
                        if (l.remove) {
                            l.remove.call(a, k);
                        }
                    }
                }
                if (g && !m.length) {
                    if (!l.teardown || l.teardown.call(a, p, r.handle) === false) {
                        n.removeEvent(a, o, r.handle);
                    }
                    delete i[o];
                }
            }
            if (n.isEmptyObject(i)) {
                delete r.handle;
                L.remove(a, "events");
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            g = h = d = d || l;
            if (d.nodeType === 3 || d.nodeType === 8) {
                return;
            }
            if (X.test(q + n.event.triggered)) {
                return;
            }
            if (q.indexOf(".") >= 0) {
                r = q.split(".");
                q = r.shift();
                r.sort();
            }
            k = q.indexOf(":") < 0 && "on" + q;
            b = b[n.expando] ? b : new n.Event(q, typeof b === "object" && b);
            b.isTrigger = e ? 2 : 3;
            b.namespace = r.join(".");
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b.result = undefined;
            if (!b.target) {
                b.target = d;
            }
            c = c == null ? [ b ] : n.makeArray(c, [ b ]);
            o = n.event.special[q] || {};
            if (!e && o.trigger && o.trigger.apply(d, c) === false) {
                return;
            }
            if (!e && !o.noBubble && !n.isWindow(d)) {
                i = o.delegateType || q;
                if (!X.test(i + q)) {
                    g = g.parentNode;
                }
                for (;g; g = g.parentNode) {
                    p.push(g);
                    h = g;
                }
                if (h === (d.ownerDocument || l)) {
                    p.push(h.defaultView || h.parentWindow || a);
                }
            }
            f = 0;
            while ((g = p[f++]) && !b.isPropagationStopped()) {
                b.type = f > 1 ? i : o.bindType || q;
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle");
                if (m) {
                    m.apply(g, c);
                }
                m = k && g[k];
                if (m && m.apply && n.acceptData(g)) {
                    b.result = m.apply(g, c);
                    if (b.result === false) {
                        b.preventDefault();
                    }
                }
            }
            b.type = q;
            if (!e && !b.isDefaultPrevented()) {
                if ((!o._default || o._default.apply(p.pop(), c) === false) && n.acceptData(d)) {
                    if (k && n.isFunction(d[q]) && !n.isWindow(d)) {
                        h = d[k];
                        if (h) {
                            d[k] = null;
                        }
                        n.event.triggered = q;
                        d[q]();
                        n.event.triggered = undefined;
                        if (h) {
                            d[k] = h;
                        }
                    }
                }
            }
            return b.result;
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            i[0] = a;
            a.delegateTarget = this;
            if (k.preDispatch && k.preDispatch.call(this, a) === false) {
                return;
            }
            h = n.event.handlers.call(this, a, j);
            b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem;
                c = 0;
                while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                    if (!a.namespace_re || a.namespace_re.test(g.namespace)) {
                        a.handleObj = g;
                        a.data = g.data;
                        e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i);
                        if (e !== undefined) {
                            if ((a.result = e) === false) {
                                a.preventDefault();
                                a.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (k.postDispatch) {
                k.postDispatch.call(this, a);
            }
            return a.result;
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || a.type !== "click")) {
                for (;i !== this; i = i.parentNode || this) {
                    if (i.disabled !== true || a.type !== "click") {
                        d = [];
                        for (c = 0; c < h; c++) {
                            f = b[c];
                            e = f.selector + " ";
                            if (d[e] === undefined) {
                                d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length;
                            }
                            if (d[e]) {
                                d.push(f);
                            }
                        }
                        if (d.length) {
                            g.push({
                                elem: i,
                                handlers: d
                            });
                        }
                    }
                }
            }
            if (h < b.length) {
                g.push({
                    elem: this,
                    handlers: b.slice(h)
                });
            }
            return g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                if (a.which == null) {
                    a.which = b.charCode != null ? b.charCode : b.keyCode;
                }
                return a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                if (a.pageX == null && b.clientX != null) {
                    c = a.target.ownerDocument || l;
                    d = c.documentElement;
                    e = c.body;
                    a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0);
                    a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0);
                }
                if (!a.which && f !== undefined) {
                    a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
                }
                return a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a;
            }
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            if (!g) {
                this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {};
            }
            d = g.props ? this.props.concat(g.props) : this.props;
            a = new n.Event(f);
            b = d.length;
            while (b--) {
                c = d[b];
                a[c] = f[c];
            }
            if (!a.target) {
                a.target = l;
            }
            if (a.target.nodeType === 3) {
                a.target = a.target.parentNode;
            }
            return g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== _() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === _() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && n.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    if (a.result !== undefined && a.originalEvent) {
                        a.originalEvent.returnValue = a.result;
                    }
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: true,
                originalEvent: {}
            });
            if (d) {
                n.event.trigger(e, null, b);
            } else {
                n.event.dispatch.call(b, e);
            }
            if (e.isDefaultPrevented()) {
                c.preventDefault();
            }
        }
    };
    n.removeEvent = function(a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c, false);
        }
    };
    n.Event = function(a, b) {
        if (!(this instanceof n.Event)) {
            return new n.Event(a, b);
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && a.returnValue === false ? Z : $;
        } else {
            this.type = a;
        }
        if (b) {
            n.extend(this, b);
        }
        this.timeStamp = a && a.timeStamp || n.now();
        this[n.expando] = true;
    };
    n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z;
            if (a && a.preventDefault) {
                a.preventDefault();
            }
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z;
            if (a && a.stopPropagation) {
                a.stopPropagation();
            }
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z;
            if (a && a.stopImmediatePropagation) {
                a.stopImmediatePropagation();
            }
            this.stopPropagation();
        }
    };
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                if (!e || e !== d && !n.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b;
                }
                return c;
            }
        };
    });
    if (!k.focusinBubbles) {
        n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a), true);
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this, e = L.access(d, b);
                    if (!e) {
                        d.addEventListener(a, c, true);
                    }
                    L.access(d, b, (e || 0) + 1);
                },
                teardown: function() {
                    var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                    if (!e) {
                        d.removeEventListener(a, c, true);
                        L.remove(d, b);
                    } else {
                        L.access(d, b, e);
                    }
                }
            };
        });
    }
    n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if (typeof a === "object") {
                if (typeof b !== "string") {
                    c = c || b;
                    b = undefined;
                }
                for (g in a) {
                    this.on(g, b, c, a[g], e);
                }
                return this;
            }
            if (c == null && d == null) {
                d = b;
                c = b = undefined;
            } else if (d == null) {
                if (typeof b === "string") {
                    d = c;
                    c = undefined;
                } else {
                    d = c;
                    c = b;
                    b = undefined;
                }
            }
            if (d === false) {
                d = $;
            } else if (!d) {
                return this;
            }
            if (e === 1) {
                f = d;
                d = function(a) {
                    n().off(a);
                    return f.apply(this, arguments);
                };
                d.guid = f.guid || (f.guid = n.guid++);
            }
            return this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                d = a.handleObj;
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                return this;
            }
            if (typeof a === "object") {
                for (e in a) {
                    this.off(e, b, a[e]);
                }
                return this;
            }
            if (b === false || typeof b === "function") {
                c = b;
                b = undefined;
            }
            if (c === false) {
                c = $;
            }
            return this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) {
                return n.event.trigger(a, b, c, true);
            }
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ib.optgroup = ib.option;
    ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead;
    ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
        a.type = (a.getAttribute("type") !== null) + "/" + a.type;
        return a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        if (b) {
            a.type = b[1];
        } else {
            a.removeAttribute("type");
        }
        return a;
    }
    function mb(a, b) {
        var c = 0, d = a.length;
        for (;c < d; c++) {
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
        }
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (b.nodeType !== 1) {
            return;
        }
        if (L.hasData(a)) {
            f = L.access(a);
            g = L.set(b, f);
            j = f.events;
            if (j) {
                delete g.handle;
                g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; c < d; c++) {
                        n.event.add(b, e, j[e][c]);
                    }
                }
            }
        }
        if (M.hasData(a)) {
            h = M.access(a);
            i = n.extend({}, h);
            M.set(b, i);
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return b === undefined || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        if (c === "input" && T.test(a.type)) {
            b.checked = a.checked;
        } else if (c === "input" || c === "textarea") {
            b.defaultValue = a.defaultValue;
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(true), i = n.contains(a.ownerDocument, a);
            if (!k.noCloneChecked && (a.nodeType === 1 || a.nodeType === 11) && !n.isXMLDoc(a)) {
                g = ob(h);
                f = ob(a);
                for (d = 0, e = f.length; d < e; d++) {
                    pb(f[d], g[d]);
                }
            }
            if (b) {
                if (c) {
                    f = f || ob(a);
                    g = g || ob(h);
                    for (d = 0, e = f.length; d < e; d++) {
                        nb(f[d], g[d]);
                    }
                } else {
                    nb(a, h);
                }
            }
            g = ob(h, "script");
            if (g.length > 0) {
                mb(g, !i && ob(a, "script"));
            }
            return h;
        },
        buildFragment: function(a, b, c, d) {
            var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length;
            for (;m < o; m++) {
                e = a[m];
                if (e || e === 0) {
                    if (n.type(e) === "object") {
                        n.merge(l, e.nodeType ? [ e ] : e);
                    } else if (!cb.test(e)) {
                        l.push(b.createTextNode(e));
                    } else {
                        f = f || k.appendChild(b.createElement("div"));
                        g = (bb.exec(e) || [ "", "" ])[1].toLowerCase();
                        h = ib[g] || ib._default;
                        f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2];
                        j = h[0];
                        while (j--) {
                            f = f.lastChild;
                        }
                        n.merge(l, f.childNodes);
                        f = k.firstChild;
                        f.textContent = "";
                    }
                }
            }
            k.textContent = "";
            m = 0;
            while (e = l[m++]) {
                if (d && n.inArray(e, d) !== -1) {
                    continue;
                }
                i = n.contains(e.ownerDocument, e);
                f = ob(k.appendChild(e), "script");
                if (i) {
                    mb(f);
                }
                if (c) {
                    j = 0;
                    while (e = f[j++]) {
                        if (fb.test(e.type || "")) {
                            c.push(e);
                        }
                    }
                }
            }
            return k;
        },
        cleanData: function(a) {
            var b, c, d, e, f = n.event.special, g = 0;
            for (;(c = a[g]) !== undefined; g++) {
                if (n.acceptData(c)) {
                    e = c[L.expando];
                    if (e && (b = L.cache[e])) {
                        if (b.events) {
                            for (d in b.events) {
                                if (f[d]) {
                                    n.event.remove(c, d);
                                } else {
                                    n.removeEvent(c, d, b.handle);
                                }
                            }
                        }
                        if (L.cache[e]) {
                            delete L.cache[e];
                        }
                    }
                }
                delete M.cache[c[M.expando]];
            }
        }
    });
    n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return a === undefined ? n.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = a;
                    }
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(a, this.nextSibling);
                }
            });
        },
        remove: function(a, b) {
            var c, d = a ? n.filter(a, this) : this, e = 0;
            for (;(c = d[e]) != null; e++) {
                if (!b && c.nodeType === 1) {
                    n.cleanData(ob(c));
                }
                if (c.parentNode) {
                    if (b && n.contains(c.ownerDocument, c)) {
                        mb(ob(c, "script"));
                    }
                    c.parentNode.removeChild(c);
                }
            }
            return this;
        },
        empty: function() {
            var a, b = 0;
            for (;(a = this[b]) != null; b++) {
                if (a.nodeType === 1) {
                    n.cleanData(ob(a, false));
                    a.textContent = "";
                }
            }
            return this;
        },
        clone: function(a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (a === undefined && b.nodeType === 1) {
                    return b.innerHTML;
                }
                if (typeof a === "string" && !db.test(a) && !ib[(bb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (;c < d; c++) {
                            b = this[c] || {};
                            if (b.nodeType === 1) {
                                n.cleanData(ob(b, false));
                                b.innerHTML = a;
                            }
                        }
                        b = 0;
                    } catch (e) {}
                }
                if (b) {
                    this.empty().append(a);
                }
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(b) {
                a = this.parentNode;
                n.cleanData(ob(this));
                if (a) {
                    a.replaceChild(b, this);
                }
            });
            return a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, true);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && typeof p === "string" && !k.checkClone && eb.test(p)) {
                return this.each(function(c) {
                    var d = m.eq(c);
                    if (q) {
                        a[0] = p.call(this, c, d.html());
                    }
                    d.domManip(a, b);
                });
            }
            if (l) {
                c = n.buildFragment(a, this[0].ownerDocument, false, this);
                d = c.firstChild;
                if (c.childNodes.length === 1) {
                    c = d;
                }
                if (d) {
                    f = n.map(ob(c, "script"), kb);
                    g = f.length;
                    for (;j < l; j++) {
                        h = c;
                        if (j !== o) {
                            h = n.clone(h, true, true);
                            if (g) {
                                n.merge(f, ob(h, "script"));
                            }
                        }
                        b.call(this[j], h, j);
                    }
                    if (g) {
                        i = f[f.length - 1].ownerDocument;
                        n.map(f, lb);
                        for (j = 0; j < g; j++) {
                            h = f[j];
                            if (fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h)) {
                                if (h.src) {
                                    if (n._evalUrl) {
                                        n._evalUrl(h.src);
                                    }
                                } else {
                                    n.globalEval(h.textContent.replace(hb, ""));
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }
    });
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            var c, d = [], e = n(a), g = e.length - 1, h = 0;
            for (;h <= g; h++) {
                c = h === g ? this : this.clone(true);
                n(e[h])[b](c);
                f.apply(d, c.get());
            }
            return this.pushStack(d);
        };
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        e.detach();
        return f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        if (!c) {
            c = sb(a, b);
            if (c === "none" || !c) {
                qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement);
                b = qb[0].contentDocument;
                b.write();
                b.close();
                c = sb(a, b);
                qb.detach();
            }
            rb[a] = c;
        }
        return c;
    }
    var ub = /^margin/;
    var vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i");
    var wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
    };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        c = c || wb(a);
        if (c) {
            g = c.getPropertyValue(b) || c[b];
        }
        if (c) {
            if (g === "" && !n.contains(a.ownerDocument, a)) {
                g = n.style(a, b);
            }
            if (vb.test(g) && ub.test(b)) {
                d = h.width;
                e = h.minWidth;
                f = h.maxWidth;
                h.minWidth = h.maxWidth = h.width = g;
                g = c.width;
                h.width = d;
                h.minWidth = e;
                h.maxWidth = f;
            }
        }
        return g !== undefined ? g + "" : g;
    }
    function yb(a, b) {
        return {
            get: function() {
                if (a()) {
                    delete this.get;
                    return;
                }
                return (this.get = b).apply(this, arguments);
            }
        };
    }
    (function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (!f.style) {
            return;
        }
        f.style.backgroundClip = "content-box";
        f.cloneNode(true).style.backgroundClip = "";
        k.clearCloneStyle = f.style.backgroundClip === "content-box";
        e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        e.appendChild(f);
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            f.innerHTML = "";
            d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = g.top !== "1%";
            c = g.width === "4px";
            d.removeChild(e);
        }
        if (a.getComputedStyle) {
            n.extend(k, {
                pixelPosition: function() {
                    g();
                    return b;
                },
                boxSizingReliable: function() {
                    if (c == null) {
                        g();
                    }
                    return c;
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    c.style.marginRight = c.style.width = "0";
                    f.style.width = "1px";
                    d.appendChild(e);
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight);
                    d.removeChild(e);
                    return b;
                }
            });
        }
    })();
    n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f];
            a.style[f] = b[f];
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f];
        }
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = [ "Webkit", "O", "Moz", "ms" ];
    function Fb(a, b) {
        if (b in a) {
            return b;
        }
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--) {
            b = Eb[e] + c;
            if (b in a) {
                return b;
            }
        }
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, g = 0;
        for (;f < 4; f += 2) {
            if (c === "margin") {
                g += n.css(a, c + R[f], true, e);
            }
            if (d) {
                if (c === "content") {
                    g -= n.css(a, "padding" + R[f], true, e);
                }
                if (c !== "margin") {
                    g -= n.css(a, "border" + R[f] + "Width", true, e);
                }
            } else {
                g += n.css(a, "padding" + R[f], true, e);
                if (c !== "padding") {
                    g += n.css(a, "border" + R[f] + "Width", true, e);
                }
            }
        }
        return g;
    }
    function Ib(a, b, c) {
        var d = true, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = wb(a), g = n.css(a, "boxSizing", false, f) === "border-box";
        if (e <= 0 || e == null) {
            e = xb(a, b, f);
            if (e < 0 || e == null) {
                e = a.style[b];
            }
            if (vb.test(e)) {
                return e;
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (;g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            f[g] = L.get(d, "olddisplay");
            c = d.style.display;
            if (b) {
                if (!f[g] && c === "none") {
                    d.style.display = "";
                }
                if (d.style.display === "" && S(d)) {
                    f[g] = L.access(d, "olddisplay", tb(d.nodeName));
                }
            } else {
                e = S(d);
                if (c !== "none" || !e) {
                    L.set(d, "olddisplay", e ? c : n.css(d, "display"));
                }
            }
        }
        for (g = 0; g < h; g++) {
            d = a[g];
            if (!d.style) {
                continue;
            }
            if (!b || d.style.display === "none" || d.style.display === "") {
                d.style.display = b ? f[g] || "" : "none";
            }
        }
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return c === "" ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return;
            }
            var e, f, g, h = n.camelCase(b), i = a.style;
            b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h));
            g = n.cssHooks[b] || n.cssHooks[h];
            if (c !== undefined) {
                f = typeof c;
                if (f === "string" && (e = Bb.exec(c))) {
                    c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b));
                    f = "number";
                }
                if (c == null || c !== c) {
                    return;
                }
                if (f === "number" && !n.cssNumber[h]) {
                    c += "px";
                }
                if (!k.clearCloneStyle && c === "" && b.indexOf("background") === 0) {
                    i[b] = "inherit";
                }
                if (!g || !("set" in g) || (c = g.set(a, c, d)) !== undefined) {
                    i[b] = c;
                }
            } else {
                if (g && "get" in g && (e = g.get(a, false, d)) !== undefined) {
                    return e;
                }
                return i[b];
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h));
            g = n.cssHooks[b] || n.cssHooks[h];
            if (g && "get" in g) {
                e = g.get(a, true, c);
            }
            if (e === undefined) {
                e = xb(a, b, d);
            }
            if (e === "normal" && b in Db) {
                e = Db[b];
            }
            if (c === "" || c) {
                f = parseFloat(e);
                return c === true || n.isNumeric(f) ? f || 0 : e;
            }
            return e;
        }
    });
    n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) {
                    return zb.test(n.css(a, "display")) && a.offsetWidth === 0 ? n.swap(a, Cb, function() {
                        return Ib(a, b, d);
                    }) : Ib(a, b, d);
                }
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, n.css(a, "boxSizing", false, e) === "border-box", e) : 0);
            }
        };
    });
    n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        if (b) {
            return n.swap(a, {
                display: "inline-block"
            }, xb, [ a, "marginRight" ]);
        }
    });
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0, e = {}, f = typeof c === "string" ? c.split(" ") : [ c ];
                for (;d < 4; d++) {
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                }
                return e;
            }
        };
        if (!ub.test(a)) {
            n.cssHooks[a + b].set = Gb;
        }
    });
    n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    d = wb(a);
                    e = b.length;
                    for (;g < e; g++) {
                        f[b[g]] = n.css(a, b[g], false, d);
                    }
                    return f;
                }
                return c !== undefined ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Jb(this, true);
        },
        hide: function() {
            return Jb(this);
        },
        toggle: function(a) {
            if (typeof a === "boolean") {
                return a ? this.show() : this.hide();
            }
            return this.each(function() {
                if (S(this)) {
                    n(this).show();
                } else {
                    n(this).hide();
                }
            });
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb;
    Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration);
            } else {
                this.pos = b = a;
            }
            this.now = (this.end - this.start) * b + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (c && c.set) {
                c.set(this);
            } else {
                Kb.propHooks._default.set(this);
            }
            return this;
        }
    };
    Kb.prototype.init.prototype = Kb.prototype;
    Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
                    return a.elem[a.prop];
                }
                b = n.css(a.elem, a.prop, "");
                return !b || b === "auto" ? 0 : b;
            },
            set: function(a) {
                if (n.fx.step[a.prop]) {
                    n.fx.step[a.prop](a);
                } else if (a.elem.style && (a.elem.style[n.cssProps[a.prop]] != null || n.cssHooks[a.prop])) {
                    n.style(a.elem, a.prop, a.now + a.unit);
                } else {
                    a.elem[a.prop] = a.now;
                }
            }
        }
    };
    Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            if (a.elem.nodeType && a.elem.parentNode) {
                a.elem[a.prop] = a.now;
            }
        }
    };
    n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    };
    n.fx = Kb.prototype.init;
    n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [ Vb ], Rb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || f !== "px" && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3];
                e = e || [];
                g = +d || 1;
                do {
                    h = h || ".5";
                    g = g / h;
                    n.style(c.elem, a, g + f);
                } while (h !== (h = c.cur() / d) && h !== 1 && --i);
            }
            if (e) {
                g = c.start = +g || +d || 0;
                c.unit = f;
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2];
            }
            return c;
        } ]
    };
    function Sb() {
        setTimeout(function() {
            Lb = undefined;
        });
        return Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        b = b ? 1 : 0;
        for (;d < 4; d += 2 - b) {
            c = R[d];
            e["margin" + c] = e["padding" + c] = a;
        }
        if (b) {
            e.opacity = e.width = a;
        }
        return e;
    }
    function Ub(a, b, c) {
        var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length;
        for (;f < g; f++) {
            if (d = e[f].call(c, b, a)) {
                return d;
            }
        }
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        if (!c.queue) {
            h = n._queueHooks(a, "fx");
            if (h.unqueued == null) {
                h.unqueued = 0;
                i = h.empty.fire;
                h.empty.fire = function() {
                    if (!h.unqueued) {
                        i();
                    }
                };
            }
            h.unqueued++;
            l.always(function() {
                l.always(function() {
                    h.unqueued--;
                    if (!n.queue(a, "fx").length) {
                        h.empty.fire();
                    }
                });
            });
        }
        if (a.nodeType === 1 && ("height" in b || "width" in b)) {
            c.overflow = [ o.overflow, o.overflowX, o.overflowY ];
            j = n.css(a, "display");
            k = j === "none" ? L.get(a, "olddisplay") || tb(a.nodeName) : j;
            if (k === "inline" && n.css(a, "float") === "none") {
                o.display = "inline-block";
            }
        }
        if (c.overflow) {
            o.overflow = "hidden";
            l.always(function() {
                o.overflow = c.overflow[0];
                o.overflowX = c.overflow[1];
                o.overflowY = c.overflow[2];
            });
        }
        for (d in b) {
            e = b[d];
            if (Nb.exec(e)) {
                delete b[d];
                f = f || e === "toggle";
                if (e === (p ? "hide" : "show")) {
                    if (e === "show" && q && q[d] !== undefined) {
                        p = true;
                    } else {
                        continue;
                    }
                }
                m[d] = q && q[d] || n.style(a, d);
            } else {
                j = undefined;
            }
        }
        if (!n.isEmptyObject(m)) {
            if (q) {
                if ("hidden" in q) {
                    p = q.hidden;
                }
            } else {
                q = L.access(a, "fxshow", {});
            }
            if (f) {
                q.hidden = !p;
            }
            if (p) {
                n(a).show();
            } else {
                l.done(function() {
                    n(a).hide();
                });
            }
            l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) {
                    n.style(a, b, m[b]);
                }
            });
            for (d in m) {
                g = Ub(p ? q[d] : 0, d, l);
                if (!(d in q)) {
                    q[d] = g.start;
                    if (p) {
                        g.end = g.start;
                        g.start = d === "width" || d === "height" ? 1 : 0;
                    }
                }
            }
        } else if ((j === "none" ? tb(a.nodeName) : j) === "inline") {
            o.display = j;
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = n.camelCase(c);
            e = b[d];
            f = a[c];
            if (n.isArray(f)) {
                e = f[1];
                f = a[c] = f[0];
            }
            if (c !== d) {
                a[d] = f;
                delete a[c];
            }
            g = n.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f);
                delete a[d];
                for (c in f) {
                    if (!(c in a)) {
                        a[c] = f[c];
                        b[c] = e;
                    }
                }
            } else {
                b[d] = e;
            }
        }
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) {
                return false;
            }
            var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (;g < i; g++) {
                j.tweens[g].run(f);
            }
            h.notifyWith(a, [ j, f, c ]);
            if (f < 1 && i) {
                return c;
            } else {
                h.resolveWith(a, [ j ]);
                return false;
            }
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(true, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                j.tweens.push(d);
                return d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) {
                    return this;
                }
                e = true;
                for (;c < d; c++) {
                    j.tweens[c].run(1);
                }
                if (b) {
                    h.resolveWith(a, [ j, b ]);
                } else {
                    h.rejectWith(a, [ j, b ]);
                }
                return this;
            }
        }), k = j.props;
        Wb(k, j.opts.specialEasing);
        for (;f < g; f++) {
            d = Qb[f].call(j, a, k, j.opts);
            if (d) {
                return d;
            }
        }
        n.map(k, Ub, j);
        if (n.isFunction(j.opts.start)) {
            j.opts.start.call(a, j);
        }
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        }));
        return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            if (n.isFunction(a)) {
                b = a;
                a = [ "*" ];
            } else {
                a = a.split(" ");
            }
            var c, d = 0, e = a.length;
            for (;d < e; d++) {
                c = a[d];
                Rb[c] = Rb[c] || [];
                Rb[c].unshift(b);
            }
        },
        prefilter: function(a, b) {
            if (b) {
                Qb.unshift(a);
            } else {
                Qb.push(a);
            }
        }
    });
    n.speed = function(a, b, c) {
        var d = a && typeof a === "object" ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        d.duration = n.fx.off ? 0 : typeof d.duration === "number" ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default;
        if (d.queue == null || d.queue === true) {
            d.queue = "fx";
        }
        d.old = d.complete;
        d.complete = function() {
            if (n.isFunction(d.old)) {
                d.old.call(this);
            }
            if (d.queue) {
                n.dequeue(this, d.queue);
            }
        };
        return d;
    };
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                if (e || L.get(this, "finish")) {
                    b.stop(true);
                }
            };
            g.finish = g;
            return e || f.queue === false ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c);
            };
            if (typeof a !== "string") {
                c = b;
                b = a;
                a = undefined;
            }
            if (b && a !== false) {
                this.queue(a || "fx", []);
            }
            return this.each(function() {
                var b = true, e = a != null && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) {
                    if (g[e] && g[e].stop) {
                        d(g[e]);
                    }
                } else {
                    for (e in g) {
                        if (g[e] && g[e].stop && Pb.test(e)) {
                            d(g[e]);
                        }
                    }
                }
                for (e = f.length; e--; ) {
                    if (f[e].elem === this && (a == null || f[e].queue === a)) {
                        f[e].anim.stop(c);
                        b = false;
                        f.splice(e, 1);
                    }
                }
                if (b || !c) {
                    n.dequeue(this, a);
                }
            });
        },
        finish: function(a) {
            if (a !== false) {
                a = a || "fx";
            }
            return this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                c.finish = true;
                n.queue(this, a, []);
                if (e && e.stop) {
                    e.stop.call(this, true);
                }
                for (b = f.length; b--; ) {
                    if (f[b].elem === this && f[b].queue === a) {
                        f[b].anim.stop(true);
                        f.splice(b, 1);
                    }
                }
                for (b = 0; b < g; b++) {
                    if (d[b] && d[b].finish) {
                        d[b].finish.call(this);
                    }
                }
                delete c.finish;
            });
        }
    });
    n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return a == null || typeof a === "boolean" ? c.apply(this, arguments) : this.animate(Tb(b, true), a, d, e);
        };
    });
    n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    });
    n.timers = [];
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        Lb = n.now();
        for (;b < c.length; b++) {
            a = c[b];
            if (!a() && c[b] === a) {
                c.splice(b--, 1);
            }
        }
        if (!c.length) {
            n.fx.stop();
        }
        Lb = undefined;
    };
    n.fx.timer = function(a) {
        n.timers.push(a);
        if (a()) {
            n.fx.start();
        } else {
            n.timers.pop();
        }
    };
    n.fx.interval = 13;
    n.fx.start = function() {
        if (!Mb) {
            Mb = setInterval(n.fx.tick, n.fx.interval);
        }
    };
    n.fx.stop = function() {
        clearInterval(Mb);
        Mb = null;
    };
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    n.fn.delay = function(a, b) {
        a = n.fx ? n.fx.speeds[a] || a : a;
        b = b || "fx";
        return this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    };
    (function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox";
        k.checkOn = a.value !== "";
        k.optSelected = c.selected;
        b.disabled = true;
        k.optDisabled = !c.disabled;
        a = l.createElement("input");
        a.value = "t";
        a.type = "radio";
        k.radioValue = a.value === "t";
    })();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    });
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (!a || f === 3 || f === 8 || f === 2) {
                return;
            }
            if (typeof a.getAttribute === U) {
                return n.prop(a, b, c);
            }
            if (f !== 1 || !n.isXMLDoc(a)) {
                b = b.toLowerCase();
                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb);
            }
            if (c !== undefined) {
                if (c === null) {
                    n.removeAttr(a, b);
                } else if (d && "set" in d && (e = d.set(a, c, b)) !== undefined) {
                    return e;
                } else {
                    a.setAttribute(b, c + "");
                    return c;
                }
            } else if (d && "get" in d && (e = d.get(a, b)) !== null) {
                return e;
            } else {
                e = n.find.attr(a, b);
                return e == null ? undefined : e;
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && a.nodeType === 1) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c;
                    if (n.expr.match.bool.test(c)) {
                        a[d] = false;
                    }
                    a.removeAttribute(c);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && b === "radio" && n.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c) {
                            a.value = c;
                        }
                        return b;
                    }
                }
            }
        }
    });
    Zb = {
        set: function(a, b, c) {
            if (b === false) {
                n.removeAttr(a, c);
            } else {
                a.setAttribute(c, c);
            }
            return c;
        }
    };
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            if (!d) {
                f = $b[b];
                $b[b] = e;
                e = c(a, b, d) != null ? b.toLowerCase() : null;
                $b[b] = f;
            }
            return e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    });
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2) {
                return;
            }
            f = g !== 1 || !n.isXMLDoc(a);
            if (f) {
                b = n.propFix[b] || b;
                e = n.propHooks[b];
            }
            if (c !== undefined) {
                return e && "set" in e && (d = e.set(a, c, b)) !== undefined ? d : a[b] = c;
            } else {
                return e && "get" in e && (d = e.get(a, b)) !== null ? d : a[b];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    });
    if (!k.optSelected) {
        n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                if (b && b.parentNode) {
                    b.parentNode.selectedIndex;
                }
                return null;
            }
        };
    }
    n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = typeof a === "string" && a, i = 0, j = this.length;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className));
                });
            }
            if (h) {
                b = (a || "").match(E) || [];
                for (;i < j; i++) {
                    c = this[i];
                    d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ");
                    if (d) {
                        f = 0;
                        while (e = b[f++]) {
                            if (d.indexOf(" " + e + " ") < 0) {
                                d += e + " ";
                            }
                        }
                        g = n.trim(d);
                        if (c.className !== g) {
                            c.className = g;
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = arguments.length === 0 || typeof a === "string" && a, i = 0, j = this.length;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className));
                });
            }
            if (h) {
                b = (a || "").match(E) || [];
                for (;i < j; i++) {
                    c = this[i];
                    d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(ac, " ") : "");
                    if (d) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ");
                            }
                        }
                        g = a ? n.trim(d) : "";
                        if (c.className !== g) {
                            c.className = g;
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            if (typeof b === "boolean" && c === "string") {
                return b ? this.addClass(a) : this.removeClass(a);
            }
            if (n.isFunction(a)) {
                return this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, this.className, b), b);
                });
            }
            return this.each(function() {
                if (c === "string") {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) {
                        if (e.hasClass(b)) {
                            e.removeClass(b);
                        } else {
                            e.addClass(b);
                        }
                    }
                } else if (c === U || c === "boolean") {
                    if (this.className) {
                        L.set(this, "__className__", this.className);
                    }
                    this.className = this.className || a === false ? "" : L.get(this, "__className__") || "";
                }
            });
        },
        hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (;c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) {
                    return true;
                }
            }
            return false;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()];
                    if (b && "get" in b && (c = b.get(e, "value")) !== undefined) {
                        return c;
                    }
                    c = e.value;
                    return typeof c === "string" ? c.replace(bc, "") : c == null ? "" : c;
                }
                return;
            }
            d = n.isFunction(a);
            return this.each(function(c) {
                var e;
                if (this.nodeType !== 1) {
                    return;
                }
                if (d) {
                    e = a.call(this, c, n(this).val());
                } else {
                    e = a;
                }
                if (e == null) {
                    e = "";
                } else if (typeof e === "number") {
                    e += "";
                } else if (n.isArray(e)) {
                    e = n.map(e, function(a) {
                        return a == null ? "" : a + "";
                    });
                }
                b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()];
                if (!b || !("set" in b) || b.set(this, e, "value") === undefined) {
                    this.value = e;
                }
            });
        }
    });
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return b != null ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    for (;i < h; i++) {
                        c = d[i];
                        if ((c.selected || i === e) && (k.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            b = n(c).val();
                            if (f) {
                                return b;
                            }
                            g.push(b);
                        }
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) {
                        d = e[g];
                        if (d.selected = n.inArray(d.value, f) >= 0) {
                            c = true;
                        }
                    }
                    if (!c) {
                        a.selectedIndex = -1;
                    }
                    return f;
                }
            }
        }
    });
    n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                if (n.isArray(b)) {
                    return a.checked = n.inArray(n(a).val(), b) >= 0;
                }
            }
        };
        if (!k.checkOn) {
            n.valHooks[this].get = function(a) {
                return a.getAttribute("value") === null ? "on" : a.value;
            };
        }
    });
    n.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cc = n.now();
    var dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    };
    n.parseXML = function(a) {
        var b, c;
        if (!a || typeof a !== "string") {
            return null;
        }
        try {
            c = new DOMParser();
            b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = undefined;
        }
        if (!b || b.getElementsByTagName("parsererror").length) {
            n.error("Invalid XML: " + a);
        }
        return b;
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href;
    } catch (qc) {
        fc = l.createElement("a");
        fc.href = "";
        fc = fc.href;
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function(b, c) {
            if (typeof b !== "string") {
                c = b;
                b = "*";
            }
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    if (d[0] === "+") {
                        d = d.slice(1) || "*";
                        (a[d] = a[d] || []).unshift(c);
                    } else {
                        (a[d] = a[d] || []).push(c);
                    }
                }
            }
        };
    }
    function sc(a, b, c, d) {
        var e = {}, f = a === oc;
        function g(h) {
            var i;
            e[h] = true;
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                if (typeof j === "string" && !f && !e[j]) {
                    b.dataTypes.unshift(j);
                    g(j);
                    return false;
                } else if (f) {
                    return !(i = j);
                }
            });
            return i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) {
            if (b[c] !== undefined) {
                (e[c] ? a : d || (d = {}))[c] = b[c];
            }
        }
        if (d) {
            n.extend(true, a, d);
        }
        return a;
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while (i[0] === "*") {
            i.shift();
            if (d === undefined) {
                d = a.mimeType || b.getResponseHeader("Content-Type");
            }
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
            }
        }
        if (i[0] in c) {
            f = i[0];
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                if (!g) {
                    g = e;
                }
            }
            f = f || g;
        }
        if (f) {
            if (f !== i[0]) {
                i.unshift(f);
            }
            return c[f];
        }
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g];
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f]) {
                c[a.responseFields[f]] = b;
            }
            if (!i && d && a.dataFilter) {
                b = a.dataFilter(b, a.dataType);
            }
            i = f;
            f = k.shift();
            if (f) {
                if (f === "*") {
                    f = i;
                } else if (i !== "*" && i !== f) {
                    g = j[i + " " + f] || j["* " + f];
                    if (!g) {
                        for (e in j) {
                            h = e.split(" ");
                            if (h[1] === f) {
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
                                    if (g === true) {
                                        g = j[e];
                                    } else if (j[e] !== true) {
                                        f = h[0];
                                        k.unshift(h[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (g !== true) {
                        if (g && a["throws"]) {
                            b = g(b);
                        } else {
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            if (typeof a === "object") {
                b = a;
                a = undefined;
            }
            b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (t === 2) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e)) {
                                f[b[1].toLowerCase()] = b[2];
                            }
                        }
                        b = f[a.toLowerCase()];
                    }
                    return b == null ? null : b;
                },
                getAllResponseHeaders: function() {
                    return t === 2 ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    if (!t) {
                        a = s[c] = s[c] || a;
                        r[a] = b;
                    }
                    return this;
                },
                overrideMimeType: function(a) {
                    if (!t) {
                        k.mimeType = a;
                    }
                    return this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (t < 2) {
                            for (b in a) {
                                q[b] = [ q[b], a[b] ];
                            }
                        } else {
                            v.always(a[v.status]);
                        }
                    }
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    if (c) {
                        c.abort(b);
                    }
                    x(0, b);
                    return this;
                }
            };
            o.promise(v).complete = p.add;
            v.success = v.done;
            v.error = v.fail;
            k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//");
            k.type = b.method || b.type || k.method || k.type;
            k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ];
            if (k.crossDomain == null) {
                h = mc.exec(k.url.toLowerCase());
                k.crossDomain = !!(h && (h[1] !== ec[1] || h[2] !== ec[2] || (h[3] || (h[1] === "http:" ? "80" : "443")) !== (ec[3] || (ec[1] === "http:" ? "80" : "443"))));
            }
            if (k.data && k.processData && typeof k.data !== "string") {
                k.data = n.param(k.data, k.traditional);
            }
            sc(nc, k, b, v);
            if (t === 2) {
                return v;
            }
            i = k.global;
            if (i && n.active++ === 0) {
                n.event.trigger("ajaxStart");
            }
            k.type = k.type.toUpperCase();
            k.hasContent = !kc.test(k.type);
            d = k.url;
            if (!k.hasContent) {
                if (k.data) {
                    d = k.url += (dc.test(d) ? "&" : "?") + k.data;
                    delete k.data;
                }
                if (k.cache === false) {
                    k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++;
                }
            }
            if (k.ifModified) {
                if (n.lastModified[d]) {
                    v.setRequestHeader("If-Modified-Since", n.lastModified[d]);
                }
                if (n.etag[d]) {
                    v.setRequestHeader("If-None-Match", n.etag[d]);
                }
            }
            if (k.data && k.hasContent && k.contentType !== false || b.contentType) {
                v.setRequestHeader("Content-Type", k.contentType);
            }
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + (k.dataTypes[0] !== "*" ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) {
                v.setRequestHeader(j, k.headers[j]);
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === false || t === 2)) {
                return v.abort();
            }
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[j](k[j]);
            }
            c = sc(oc, k, b, v);
            if (!c) {
                x(-1, "No Transport");
            } else {
                v.readyState = 1;
                if (i) {
                    m.trigger("ajaxSend", [ v, k ]);
                }
                if (k.async && k.timeout > 0) {
                    g = setTimeout(function() {
                        v.abort("timeout");
                    }, k.timeout);
                }
                try {
                    t = 1;
                    c.send(r, x);
                } catch (w) {
                    if (t < 2) {
                        x(-1, w);
                    } else {
                        throw w;
                    }
                }
            }
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                if (t === 2) {
                    return;
                }
                t = 2;
                if (g) {
                    clearTimeout(g);
                }
                c = undefined;
                e = h || "";
                v.readyState = a > 0 ? 4 : 0;
                j = a >= 200 && a < 300 || a === 304;
                if (f) {
                    u = uc(k, v, f);
                }
                u = vc(k, u, v, j);
                if (j) {
                    if (k.ifModified) {
                        w = v.getResponseHeader("Last-Modified");
                        if (w) {
                            n.lastModified[d] = w;
                        }
                        w = v.getResponseHeader("etag");
                        if (w) {
                            n.etag[d] = w;
                        }
                    }
                    if (a === 204 || k.type === "HEAD") {
                        x = "nocontent";
                    } else if (a === 304) {
                        x = "notmodified";
                    } else {
                        x = u.state;
                        r = u.data;
                        s = u.error;
                        j = !s;
                    }
                } else {
                    s = x;
                    if (a || !x) {
                        x = "error";
                        if (a < 0) {
                            a = 0;
                        }
                    }
                }
                v.status = a;
                v.statusText = (b || x) + "";
                if (j) {
                    o.resolveWith(l, [ r, x, v ]);
                } else {
                    o.rejectWith(l, [ v, x, s ]);
                }
                v.statusCode(q);
                q = undefined;
                if (i) {
                    m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]);
                }
                p.fireWith(l, [ v, x ]);
                if (i) {
                    m.trigger("ajaxComplete", [ v, k ]);
                    if (!--n.active) {
                        n.event.trigger("ajaxStop");
                    }
                }
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, undefined, b, "script");
        }
    });
    n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            if (n.isFunction(c)) {
                e = e || d;
                d = c;
                c = undefined;
            }
            return n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    });
    n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    });
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b));
                });
            }
            if (this[0]) {
                b = n(a, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b.insertBefore(this[0]);
                }
                b.map(function() {
                    var a = this;
                    while (a.firstElementChild) {
                        a = a.firstElementChild;
                    }
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).wrapInner(a.call(this, b));
                });
            }
            return this.each(function() {
                var b = n(this), c = b.contents();
                if (c.length) {
                    c.wrapAll(a);
                } else {
                    b.append(a);
                }
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!n.nodeName(this, "body")) {
                    n(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    };
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                if (c || xc.test(a)) {
                    d(a, e);
                } else {
                    Bc(a + "[" + (typeof e === "object" ? b : "") + "]", e, c, d);
                }
            });
        } else if (!c && n.type(b) === "object") {
            for (e in b) {
                Bc(a + "[" + e + "]", b[e], c, d);
            }
        } else {
            d(a, b);
        }
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : b == null ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (b === undefined) {
            b = n.ajaxSettings && n.ajaxSettings.traditional;
        }
        if (n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value);
            });
        } else {
            for (c in a) {
                Bc(c, a[c], b, e);
            }
        }
        return d.join("&").replace(wc, "+");
    };
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return c == null ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                };
            }).get();
        }
    });
    n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Cc = 0, Dc = {}, Ec = {
        0: 200,
        1223: 204
    }, Fc = n.ajaxSettings.xhr();
    if (a.ActiveXObject) {
        n(a).on("unload", function() {
            for (var a in Dc) {
                Dc[a]();
            }
        });
    }
    k.cors = !!Fc && "withCredentials" in Fc;
    k.ajax = Fc = !!Fc;
    n.ajaxTransport(function(a) {
        var b;
        if (k.cors || Fc && !a.crossDomain) {
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Cc;
                    f.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e];
                        }
                    }
                    if (a.mimeType && f.overrideMimeType) {
                        f.overrideMimeType(a.mimeType);
                    }
                    if (!a.crossDomain && !c["X-Requested-With"]) {
                        c["X-Requested-With"] = "XMLHttpRequest";
                    }
                    for (e in c) {
                        f.setRequestHeader(e, c[e]);
                    }
                    b = function(a) {
                        return function() {
                            if (b) {
                                delete Dc[g];
                                b = f.onload = f.onerror = null;
                                if (a === "abort") {
                                    f.abort();
                                } else if (a === "error") {
                                    d(f.status, f.statusText);
                                } else {
                                    d(Ec[f.status] || f.status, f.statusText, typeof f.responseText === "string" ? {
                                        text: f.responseText
                                    } : undefined, f.getAllResponseHeaders());
                                }
                            }
                        };
                    };
                    f.onload = b();
                    f.onerror = b("error");
                    b = Dc[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null);
                    } catch (h) {
                        if (b) {
                            throw h;
                        }
                    }
                },
                abort: function() {
                    if (b) {
                        b();
                    }
                }
            };
        }
    });
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                n.globalEval(a);
                return a;
            }
        }
    });
    n.ajaxPrefilter("script", function(a) {
        if (a.cache === undefined) {
            a.cache = false;
        }
        if (a.crossDomain) {
            a.type = "GET";
        }
    });
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: true,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        if (a) {
                            e(a.type === "error" ? 404 : 200, a.type);
                        }
                    });
                    l.head.appendChild(b[0]);
                },
                abort: function() {
                    if (c) {
                        c();
                    }
                }
            };
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || n.expando + "_" + cc++;
            this[a] = true;
            return a;
        }
    });
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== false && (Hc.test(b.url) ? "url" : typeof b.data === "string" && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        if (h || b.dataTypes[0] === "jsonp") {
            e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
            if (h) {
                b[h] = b[h].replace(Hc, "$1" + e);
            } else if (b.jsonp !== false) {
                b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e;
            }
            b.converters["script json"] = function() {
                if (!g) {
                    n.error(e + " was not called");
                }
                return g[0];
            };
            b.dataTypes[0] = "json";
            f = a[e];
            a[e] = function() {
                g = arguments;
            };
            d.always(function() {
                a[e] = f;
                if (b[e]) {
                    b.jsonpCallback = c.jsonpCallback;
                    Gc.push(e);
                }
                if (g && n.isFunction(f)) {
                    f(g[0]);
                }
                g = f = undefined;
            });
            return "script";
        }
    });
    n.parseHTML = function(a, b, c) {
        if (!a || typeof a !== "string") {
            return null;
        }
        if (typeof b === "boolean") {
            c = b;
            b = false;
        }
        b = b || l;
        var d = v.exec(a), e = !c && [];
        if (d) {
            return [ b.createElement(d[1]) ];
        }
        d = n.buildFragment([ a ], b, e);
        if (e && e.length) {
            n(e).remove();
        }
        return n.merge([], d.childNodes);
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
        if (typeof a !== "string" && Ic) {
            return Ic.apply(this, arguments);
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        if (h >= 0) {
            d = n.trim(a.slice(h));
            a = a.slice(0, h);
        }
        if (n.isFunction(b)) {
            c = b;
            b = undefined;
        } else if (b && typeof b === "object") {
            e = "POST";
        }
        if (g.length > 0) {
            n.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments;
                g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
            }).complete(c && function(a, b) {
                g.each(c, f || [ a.responseText, b, a ]);
            });
        }
        return this;
    };
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : a.nodeType === 9 && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            if (k === "static") {
                a.style.position = "relative";
            }
            h = l.offset();
            f = n.css(a, "top");
            i = n.css(a, "left");
            j = (k === "absolute" || k === "fixed") && (f + i).indexOf("auto") > -1;
            if (j) {
                d = l.position();
                g = d.top;
                e = d.left;
            } else {
                g = parseFloat(f) || 0;
                e = parseFloat(i) || 0;
            }
            if (n.isFunction(b)) {
                b = b.call(a, c, h);
            }
            if (b.top != null) {
                m.top = b.top - h.top + g;
            }
            if (b.left != null) {
                m.left = b.left - h.left + e;
            }
            if ("using" in b) {
                b.using.call(a, m);
            } else {
                l.css(m);
            }
        }
    };
    n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return a === undefined ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b);
                });
            }
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (!f) {
                return;
            }
            b = f.documentElement;
            if (!n.contains(b, d)) {
                return e;
            }
            if (typeof d.getBoundingClientRect !== U) {
                e = d.getBoundingClientRect();
            }
            c = Kc(f);
            return {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            };
        },
        position: function() {
            if (!this[0]) {
                return;
            }
            var a, b, c = this[0], d = {
                top: 0,
                left: 0
            };
            if (n.css(c, "position") === "fixed") {
                b = c.getBoundingClientRect();
            } else {
                a = this.offsetParent();
                b = this.offset();
                if (!n.nodeName(a[0], "html")) {
                    d = a.offset();
                }
                d.top += n.css(a[0], "borderTopWidth", true);
                d.left += n.css(a[0], "borderLeftWidth", true);
            }
            return {
                top: b.top - d.top - n.css(c, "marginTop", true),
                left: b.left - d.left - n.css(c, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a && (!n.nodeName(a, "html") && n.css(a, "position") === "static")) {
                    a = a.offsetParent;
                }
                return a || Jc;
            });
        }
    });
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                if (f === undefined) {
                    return g ? g[c] : b[e];
                }
                if (g) {
                    g.scrollTo(!d ? f : a.pageXOffset, d ? f : a.pageYOffset);
                } else {
                    b[e] = f;
                }
            }, b, e, arguments.length, null);
        };
    });
    n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            if (c) {
                c = xb(a, b);
                return vb.test(c) ? n(a).position()[b] + "px" : c;
            }
        });
    });
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || typeof d !== "boolean"), g = c || (d === true || e === true ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    if (n.isWindow(b)) {
                        return b.document.documentElement["client" + a];
                    }
                    if (b.nodeType === 9) {
                        e = b.documentElement;
                        return Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]);
                    }
                    return d === undefined ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : undefined, f, null);
            };
        });
    });
    n.fn.size = function() {
        return this.length;
    };
    n.fn.andSelf = n.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return n;
        });
    }
    var Lc = a.jQuery, Mc = a.$;
    n.noConflict = function(b) {
        if (a.$ === n) {
            a.$ = Mc;
        }
        if (b && a.jQuery === n) {
            a.jQuery = Lc;
        }
        return n;
    };
    if (typeof b === U) {
        a.jQuery = a.$ = n;
    }
    return n;
});

(function() {
    var a = this;
    var b = a._;
    var c = Array.prototype, d = Object.prototype, e = Function.prototype;
    var f = c.push, g = c.slice, h = c.concat, i = d.toString, j = d.hasOwnProperty;
    var k = Array.isArray, l = Object.keys, m = e.bind;
    var n = function(a) {
        if (a instanceof n) return a;
        if (!(this instanceof n)) return new n(a);
        this._wrapped = a;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = n;
        }
        exports._ = n;
    } else {
        a._ = n;
    }
    n.VERSION = "1.7.0";
    var o = function(a, b, c) {
        if (b === void 0) return a;
        switch (c == null ? 3 : c) {
          case 1:
            return function(c) {
                return a.call(b, c);
            };

          case 2:
            return function(c, d) {
                return a.call(b, c, d);
            };

          case 3:
            return function(c, d, e) {
                return a.call(b, c, d, e);
            };

          case 4:
            return function(c, d, e, f) {
                return a.call(b, c, d, e, f);
            };
        }
        return function() {
            return a.apply(b, arguments);
        };
    };
    n.iteratee = function(a, b, c) {
        if (a == null) return n.identity;
        if (n.isFunction(a)) return o(a, b, c);
        if (n.isObject(a)) return n.matches(a);
        return n.property(a);
    };
    n.each = n.forEach = function(a, b, c) {
        if (a == null) return a;
        b = o(b, c);
        var d, e = a.length;
        if (e === +e) {
            for (d = 0; d < e; d++) {
                b(a[d], d, a);
            }
        } else {
            var f = n.keys(a);
            for (d = 0, e = f.length; d < e; d++) {
                b(a[f[d]], f[d], a);
            }
        }
        return a;
    };
    n.map = n.collect = function(a, b, c) {
        if (a == null) return [];
        b = n.iteratee(b, c);
        var d = a.length !== +a.length && n.keys(a), e = (d || a).length, f = Array(e), g;
        for (var h = 0; h < e; h++) {
            g = d ? d[h] : h;
            f[h] = b(a[g], g, a);
        }
        return f;
    };
    var p = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(a, b, c, d) {
        if (a == null) a = [];
        b = o(b, d, 4);
        var e = a.length !== +a.length && n.keys(a), f = (e || a).length, g = 0, h;
        if (arguments.length < 3) {
            if (!f) throw new TypeError(p);
            c = a[e ? e[g++] : g++];
        }
        for (;g < f; g++) {
            h = e ? e[g] : g;
            c = b(c, a[h], h, a);
        }
        return c;
    };
    n.reduceRight = n.foldr = function(a, b, c, d) {
        if (a == null) a = [];
        b = o(b, d, 4);
        var e = a.length !== +a.length && n.keys(a), f = (e || a).length, g;
        if (arguments.length < 3) {
            if (!f) throw new TypeError(p);
            c = a[e ? e[--f] : --f];
        }
        while (f--) {
            g = e ? e[f] : f;
            c = b(c, a[g], g, a);
        }
        return c;
    };
    n.find = n.detect = function(a, b, c) {
        var d;
        b = n.iteratee(b, c);
        n.some(a, function(a, c, e) {
            if (b(a, c, e)) {
                d = a;
                return true;
            }
        });
        return d;
    };
    n.filter = n.select = function(a, b, c) {
        var d = [];
        if (a == null) return d;
        b = n.iteratee(b, c);
        n.each(a, function(a, c, e) {
            if (b(a, c, e)) d.push(a);
        });
        return d;
    };
    n.reject = function(a, b, c) {
        return n.filter(a, n.negate(n.iteratee(b)), c);
    };
    n.every = n.all = function(a, b, c) {
        if (a == null) return true;
        b = n.iteratee(b, c);
        var d = a.length !== +a.length && n.keys(a), e = (d || a).length, f, g;
        for (f = 0; f < e; f++) {
            g = d ? d[f] : f;
            if (!b(a[g], g, a)) return false;
        }
        return true;
    };
    n.some = n.any = function(a, b, c) {
        if (a == null) return false;
        b = n.iteratee(b, c);
        var d = a.length !== +a.length && n.keys(a), e = (d || a).length, f, g;
        for (f = 0; f < e; f++) {
            g = d ? d[f] : f;
            if (b(a[g], g, a)) return true;
        }
        return false;
    };
    n.contains = n.include = function(a, b) {
        if (a == null) return false;
        if (a.length !== +a.length) a = n.values(a);
        return n.indexOf(a, b) >= 0;
    };
    n.invoke = function(a, b) {
        var c = g.call(arguments, 2);
        var d = n.isFunction(b);
        return n.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    };
    n.pluck = function(a, b) {
        return n.map(a, n.property(b));
    };
    n.where = function(a, b) {
        return n.filter(a, n.matches(b));
    };
    n.findWhere = function(a, b) {
        return n.find(a, n.matches(b));
    };
    n.max = function(a, b, c) {
        var d = -Infinity, e = -Infinity, f, g;
        if (b == null && a != null) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; h < i; h++) {
                f = a[h];
                if (f > d) {
                    d = f;
                }
            }
        } else {
            b = n.iteratee(b, c);
            n.each(a, function(a, c, f) {
                g = b(a, c, f);
                if (g > e || g === -Infinity && d === -Infinity) {
                    d = a;
                    e = g;
                }
            });
        }
        return d;
    };
    n.min = function(a, b, c) {
        var d = Infinity, e = Infinity, f, g;
        if (b == null && a != null) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; h < i; h++) {
                f = a[h];
                if (f < d) {
                    d = f;
                }
            }
        } else {
            b = n.iteratee(b, c);
            n.each(a, function(a, c, f) {
                g = b(a, c, f);
                if (g < e || g === Infinity && d === Infinity) {
                    d = a;
                    e = g;
                }
            });
        }
        return d;
    };
    n.shuffle = function(a) {
        var b = a && a.length === +a.length ? a : n.values(a);
        var c = b.length;
        var d = Array(c);
        for (var e = 0, f; e < c; e++) {
            f = n.random(0, e);
            if (f !== e) d[e] = d[f];
            d[f] = b[e];
        }
        return d;
    };
    n.sample = function(a, b, c) {
        if (b == null || c) {
            if (a.length !== +a.length) a = n.values(a);
            return a[n.random(a.length - 1)];
        }
        return n.shuffle(a).slice(0, Math.max(0, b));
    };
    n.sortBy = function(a, b, c) {
        b = n.iteratee(b, c);
        return n.pluck(n.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            };
        }).sort(function(a, b) {
            var c = a.criteria;
            var d = b.criteria;
            if (c !== d) {
                if (c > d || c === void 0) return 1;
                if (c < d || d === void 0) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var q = function(a) {
        return function(b, c, d) {
            var e = {};
            c = n.iteratee(c, d);
            n.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g);
            });
            return e;
        };
    };
    n.groupBy = q(function(a, b, c) {
        if (n.has(a, c)) a[c].push(b); else a[c] = [ b ];
    });
    n.indexBy = q(function(a, b, c) {
        a[c] = b;
    });
    n.countBy = q(function(a, b, c) {
        if (n.has(a, c)) a[c]++; else a[c] = 1;
    });
    n.sortedIndex = function(a, b, c, d) {
        c = n.iteratee(c, d, 1);
        var e = c(b);
        var f = 0, g = a.length;
        while (f < g) {
            var h = f + g >>> 1;
            if (c(a[h]) < e) f = h + 1; else g = h;
        }
        return f;
    };
    n.toArray = function(a) {
        if (!a) return [];
        if (n.isArray(a)) return g.call(a);
        if (a.length === +a.length) return n.map(a, n.identity);
        return n.values(a);
    };
    n.size = function(a) {
        if (a == null) return 0;
        return a.length === +a.length ? a.length : n.keys(a).length;
    };
    n.partition = function(a, b, c) {
        b = n.iteratee(b, c);
        var d = [], e = [];
        n.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a);
        });
        return [ d, e ];
    };
    n.first = n.head = n.take = function(a, b, c) {
        if (a == null) return void 0;
        if (b == null || c) return a[0];
        if (b < 0) return [];
        return g.call(a, 0, b);
    };
    n.initial = function(a, b, c) {
        return g.call(a, 0, Math.max(0, a.length - (b == null || c ? 1 : b)));
    };
    n.last = function(a, b, c) {
        if (a == null) return void 0;
        if (b == null || c) return a[a.length - 1];
        return g.call(a, Math.max(a.length - b, 0));
    };
    n.rest = n.tail = n.drop = function(a, b, c) {
        return g.call(a, b == null || c ? 1 : b);
    };
    n.compact = function(a) {
        return n.filter(a, n.identity);
    };
    var r = function(a, b, c, d) {
        if (b && n.every(a, n.isArray)) {
            return h.apply(d, a);
        }
        for (var e = 0, g = a.length; e < g; e++) {
            var i = a[e];
            if (!n.isArray(i) && !n.isArguments(i)) {
                if (!c) d.push(i);
            } else if (b) {
                f.apply(d, i);
            } else {
                r(i, b, c, d);
            }
        }
        return d;
    };
    n.flatten = function(a, b) {
        return r(a, b, false, []);
    };
    n.without = function(a) {
        return n.difference(a, g.call(arguments, 1));
    };
    n.uniq = n.unique = function(a, b, c, d) {
        if (a == null) return [];
        if (!n.isBoolean(b)) {
            d = c;
            c = b;
            b = false;
        }
        if (c != null) c = n.iteratee(c, d);
        var e = [];
        var f = [];
        for (var g = 0, h = a.length; g < h; g++) {
            var i = a[g];
            if (b) {
                if (!g || f !== i) e.push(i);
                f = i;
            } else if (c) {
                var j = c(i, g, a);
                if (n.indexOf(f, j) < 0) {
                    f.push(j);
                    e.push(i);
                }
            } else if (n.indexOf(e, i) < 0) {
                e.push(i);
            }
        }
        return e;
    };
    n.union = function() {
        return n.uniq(r(arguments, true, true, []));
    };
    n.intersection = function(a) {
        if (a == null) return [];
        var b = [];
        var c = arguments.length;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (n.contains(b, f)) continue;
            for (var g = 1; g < c; g++) {
                if (!n.contains(arguments[g], f)) break;
            }
            if (g === c) b.push(f);
        }
        return b;
    };
    n.difference = function(a) {
        var b = r(g.call(arguments, 1), true, true, []);
        return n.filter(a, function(a) {
            return !n.contains(b, a);
        });
    };
    n.zip = function(a) {
        if (a == null) return [];
        var b = n.max(arguments, "length").length;
        var c = Array(b);
        for (var d = 0; d < b; d++) {
            c[d] = n.pluck(arguments, d);
        }
        return c;
    };
    n.object = function(a, b) {
        if (a == null) return {};
        var c = {};
        for (var d = 0, e = a.length; d < e; d++) {
            if (b) {
                c[a[d]] = b[d];
            } else {
                c[a[d][0]] = a[d][1];
            }
        }
        return c;
    };
    n.indexOf = function(a, b, c) {
        if (a == null) return -1;
        var d = 0, e = a.length;
        if (c) {
            if (typeof c == "number") {
                d = c < 0 ? Math.max(0, e + c) : c;
            } else {
                d = n.sortedIndex(a, b);
                return a[d] === b ? d : -1;
            }
        }
        for (;d < e; d++) if (a[d] === b) return d;
        return -1;
    };
    n.lastIndexOf = function(a, b, c) {
        if (a == null) return -1;
        var d = a.length;
        if (typeof c == "number") {
            d = c < 0 ? d + c + 1 : Math.min(d, c + 1);
        }
        while (--d >= 0) if (a[d] === b) return d;
        return -1;
    };
    n.range = function(a, b, c) {
        if (arguments.length <= 1) {
            b = a || 0;
            a = 0;
        }
        c = c || 1;
        var d = Math.max(Math.ceil((b - a) / c), 0);
        var e = Array(d);
        for (var f = 0; f < d; f++, a += c) {
            e[f] = a;
        }
        return e;
    };
    var s = function() {};
    n.bind = function(a, b) {
        var c, d;
        if (m && a.bind === m) return m.apply(a, g.call(arguments, 1));
        if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");
        c = g.call(arguments, 2);
        d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(g.call(arguments)));
            s.prototype = a.prototype;
            var e = new s();
            s.prototype = null;
            var f = a.apply(e, c.concat(g.call(arguments)));
            if (n.isObject(f)) return f;
            return e;
        };
        return d;
    };
    n.partial = function(a) {
        var b = g.call(arguments, 1);
        return function() {
            var c = 0;
            var d = b.slice();
            for (var e = 0, f = d.length; e < f; e++) {
                if (d[e] === n) d[e] = arguments[c++];
            }
            while (c < arguments.length) d.push(arguments[c++]);
            return a.apply(this, d);
        };
    };
    n.bindAll = function(a) {
        var b, c = arguments.length, d;
        if (c <= 1) throw new Error("bindAll must be passed function names");
        for (b = 1; b < c; b++) {
            d = arguments[b];
            a[d] = n.bind(a[d], a);
        }
        return a;
    };
    n.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache;
            var f = b ? b.apply(this, arguments) : d;
            if (!n.has(e, f)) e[f] = a.apply(this, arguments);
            return e[f];
        };
        c.cache = {};
        return c;
    };
    n.delay = function(a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    };
    n.defer = function(a) {
        return n.delay.apply(n, [ a, 1 ].concat(g.call(arguments, 1)));
    };
    n.throttle = function(a, b, c) {
        var d, e, f;
        var g = null;
        var h = 0;
        if (!c) c = {};
        var i = function() {
            h = c.leading === false ? 0 : n.now();
            g = null;
            f = a.apply(d, e);
            if (!g) d = e = null;
        };
        return function() {
            var j = n.now();
            if (!h && c.leading === false) h = j;
            var k = b - (j - h);
            d = this;
            e = arguments;
            if (k <= 0 || k > b) {
                clearTimeout(g);
                g = null;
                h = j;
                f = a.apply(d, e);
                if (!g) d = e = null;
            } else if (!g && c.trailing !== false) {
                g = setTimeout(i, k);
            }
            return f;
        };
    };
    n.debounce = function(a, b, c) {
        var d, e, f, g, h;
        var i = function() {
            var j = n.now() - g;
            if (j < b && j > 0) {
                d = setTimeout(i, b - j);
            } else {
                d = null;
                if (!c) {
                    h = a.apply(f, e);
                    if (!d) f = e = null;
                }
            }
        };
        return function() {
            f = this;
            e = arguments;
            g = n.now();
            var j = c && !d;
            if (!d) d = setTimeout(i, b);
            if (j) {
                h = a.apply(f, e);
                f = e = null;
            }
            return h;
        };
    };
    n.wrap = function(a, b) {
        return n.partial(b, a);
    };
    n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments);
        };
    };
    n.compose = function() {
        var a = arguments;
        var b = a.length - 1;
        return function() {
            var c = b;
            var d = a[b].apply(this, arguments);
            while (c--) d = a[c].call(this, d);
            return d;
        };
    };
    n.after = function(a, b) {
        return function() {
            if (--a < 1) {
                return b.apply(this, arguments);
            }
        };
    };
    n.before = function(a, b) {
        var c;
        return function() {
            if (--a > 0) {
                c = b.apply(this, arguments);
            } else {
                b = null;
            }
            return c;
        };
    };
    n.once = n.partial(n.before, 2);
    n.keys = function(a) {
        if (!n.isObject(a)) return [];
        if (l) return l(a);
        var b = [];
        for (var c in a) if (n.has(a, c)) b.push(c);
        return b;
    };
    n.values = function(a) {
        var b = n.keys(a);
        var c = b.length;
        var d = Array(c);
        for (var e = 0; e < c; e++) {
            d[e] = a[b[e]];
        }
        return d;
    };
    n.pairs = function(a) {
        var b = n.keys(a);
        var c = b.length;
        var d = Array(c);
        for (var e = 0; e < c; e++) {
            d[e] = [ b[e], a[b[e]] ];
        }
        return d;
    };
    n.invert = function(a) {
        var b = {};
        var c = n.keys(a);
        for (var d = 0, e = c.length; d < e; d++) {
            b[a[c[d]]] = c[d];
        }
        return b;
    };
    n.functions = n.methods = function(a) {
        var b = [];
        for (var c in a) {
            if (n.isFunction(a[c])) b.push(c);
        }
        return b.sort();
    };
    n.extend = function(a) {
        if (!n.isObject(a)) return a;
        var b, c;
        for (var d = 1, e = arguments.length; d < e; d++) {
            b = arguments[d];
            for (c in b) {
                if (j.call(b, c)) {
                    a[c] = b[c];
                }
            }
        }
        return a;
    };
    n.pick = function(a, b, c) {
        var d = {}, e;
        if (a == null) return d;
        if (n.isFunction(b)) {
            b = o(b, c);
            for (e in a) {
                var f = a[e];
                if (b(f, e, a)) d[e] = f;
            }
        } else {
            var i = h.apply([], g.call(arguments, 1));
            a = new Object(a);
            for (var j = 0, k = i.length; j < k; j++) {
                e = i[j];
                if (e in a) d[e] = a[e];
            }
        }
        return d;
    };
    n.omit = function(a, b, c) {
        if (n.isFunction(b)) {
            b = n.negate(b);
        } else {
            var d = n.map(h.apply([], g.call(arguments, 1)), String);
            b = function(a, b) {
                return !n.contains(d, b);
            };
        }
        return n.pick(a, b, c);
    };
    n.defaults = function(a) {
        if (!n.isObject(a)) return a;
        for (var b = 1, c = arguments.length; b < c; b++) {
            var d = arguments[b];
            for (var e in d) {
                if (a[e] === void 0) a[e] = d[e];
            }
        }
        return a;
    };
    n.clone = function(a) {
        if (!n.isObject(a)) return a;
        return n.isArray(a) ? a.slice() : n.extend({}, a);
    };
    n.tap = function(a, b) {
        b(a);
        return a;
    };
    var t = function(a, b, c, d) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        if (a == null || b == null) return a === b;
        if (a instanceof n) a = a._wrapped;
        if (b instanceof n) b = b._wrapped;
        var e = i.call(a);
        if (e !== i.call(b)) return false;
        switch (e) {
          case "[object RegExp]":
          case "[object String]":
            return "" + a === "" + b;

          case "[object Number]":
            if (+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a === +b;
        }
        if (typeof a != "object" || typeof b != "object") return false;
        var f = c.length;
        while (f--) {
            if (c[f] === a) return d[f] === b;
        }
        var g = a.constructor, h = b.constructor;
        if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h)) {
            return false;
        }
        c.push(a);
        d.push(b);
        var j, k;
        if (e === "[object Array]") {
            j = a.length;
            k = j === b.length;
            if (k) {
                while (j--) {
                    if (!(k = t(a[j], b[j], c, d))) break;
                }
            }
        } else {
            var l = n.keys(a), m;
            j = l.length;
            k = n.keys(b).length === j;
            if (k) {
                while (j--) {
                    m = l[j];
                    if (!(k = n.has(b, m) && t(a[m], b[m], c, d))) break;
                }
            }
        }
        c.pop();
        d.pop();
        return k;
    };
    n.isEqual = function(a, b) {
        return t(a, b, [], []);
    };
    n.isEmpty = function(a) {
        if (a == null) return true;
        if (n.isArray(a) || n.isString(a) || n.isArguments(a)) return a.length === 0;
        for (var b in a) if (n.has(a, b)) return false;
        return true;
    };
    n.isElement = function(a) {
        return !!(a && a.nodeType === 1);
    };
    n.isArray = k || function(a) {
        return i.call(a) === "[object Array]";
    };
    n.isObject = function(a) {
        var b = typeof a;
        return b === "function" || b === "object" && !!a;
    };
    n.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        n["is" + a] = function(b) {
            return i.call(b) === "[object " + a + "]";
        };
    });
    if (!n.isArguments(arguments)) {
        n.isArguments = function(a) {
            return n.has(a, "callee");
        };
    }
    if (typeof /./ !== "function") {
        n.isFunction = function(a) {
            return typeof a == "function" || false;
        };
    }
    n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    };
    n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a;
    };
    n.isBoolean = function(a) {
        return a === true || a === false || i.call(a) === "[object Boolean]";
    };
    n.isNull = function(a) {
        return a === null;
    };
    n.isUndefined = function(a) {
        return a === void 0;
    };
    n.has = function(a, b) {
        return a != null && j.call(a, b);
    };
    n.noConflict = function() {
        a._ = b;
        return this;
    };
    n.identity = function(a) {
        return a;
    };
    n.constant = function(a) {
        return function() {
            return a;
        };
    };
    n.noop = function() {};
    n.property = function(a) {
        return function(b) {
            return b[a];
        };
    };
    n.matches = function(a) {
        var b = n.pairs(a), c = b.length;
        return function(a) {
            if (a == null) return !c;
            a = new Object(a);
            for (var d = 0; d < c; d++) {
                var e = b[d], f = e[0];
                if (e[1] !== a[f] || !(f in a)) return false;
            }
            return true;
        };
    };
    n.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = o(b, c, 1);
        for (var e = 0; e < a; e++) d[e] = b(e);
        return d;
    };
    n.random = function(a, b) {
        if (b == null) {
            b = a;
            a = 0;
        }
        return a + Math.floor(Math.random() * (b - a + 1));
    };
    n.now = Date.now || function() {
        return new Date().getTime();
    };
    var u = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    var v = n.invert(u);
    var w = function(a) {
        var b = function(b) {
            return a[b];
        };
        var c = "(?:" + n.keys(a).join("|") + ")";
        var d = RegExp(c);
        var e = RegExp(c, "g");
        return function(a) {
            a = a == null ? "" : "" + a;
            return d.test(a) ? a.replace(e, b) : a;
        };
    };
    n.escape = w(u);
    n.unescape = w(v);
    n.result = function(a, b) {
        if (a == null) return void 0;
        var c = a[b];
        return n.isFunction(c) ? a[b]() : c;
    };
    var x = 0;
    n.uniqueId = function(a) {
        var b = ++x + "";
        return a ? a + b : b;
    };
    n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var y = /(.)^/;
    var z = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var A = /\\|'|\r|\n|\u2028|\u2029/g;
    var B = function(a) {
        return "\\" + z[a];
    };
    n.template = function(a, b, c) {
        if (!b && c) b = c;
        b = n.defaults({}, b, n.templateSettings);
        var d = RegExp([ (b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source ].join("|") + "|$", "g");
        var e = 0;
        var f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            f += a.slice(e, h).replace(A, B);
            e = h + b.length;
            if (c) {
                f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'";
            } else if (d) {
                f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'";
            } else if (g) {
                f += "';\n" + g + "\n__p+='";
            }
            return b;
        });
        f += "';\n";
        if (!b.variable) f = "with(obj||{}){\n" + f + "}\n";
        f = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f);
        } catch (h) {
            h.source = f;
            throw h;
        }
        var i = function(a) {
            return g.call(this, a, n);
        };
        var j = b.variable || "obj";
        i.source = "function(" + j + "){\n" + f + "}";
        return i;
    };
    n.chain = function(a) {
        var b = n(a);
        b._chain = true;
        return b;
    };
    var C = function(a) {
        return this._chain ? n(a).chain() : a;
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [ this._wrapped ];
                f.apply(a, arguments);
                return C.call(this, c.apply(n, a));
            };
        });
    };
    n.mixin(n);
    n.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            b.apply(c, arguments);
            if ((a === "shift" || a === "splice") && c.length === 0) delete c[0];
            return C.call(this, c);
        };
    });
    n.each([ "concat", "join", "slice" ], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            return C.call(this, b.apply(this._wrapped, arguments));
        };
    });
    n.prototype.value = function() {
        return this._wrapped;
    };
    if (typeof define === "function" && define.amd) {
        define("underscore", [], function() {
            return n;
        });
    }
}).call(this);

(function(a, b) {
    if (typeof define === "function" && define.amd) {
        define([ "underscore", "jquery", "exports" ], function(c, d, e) {
            a.Backbone = b(a, e, c, d);
        });
    } else if (typeof exports !== "undefined") {
        var c = require("underscore");
        b(a, exports, c);
    } else {
        a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
    }
})(this, function(a, b, c, d) {
    var e = a.Backbone;
    var f = [];
    var g = f.push;
    var h = f.slice;
    var i = f.splice;
    b.VERSION = "1.1.2";
    b.$ = d;
    b.noConflict = function() {
        a.Backbone = e;
        return this;
    };
    b.emulateHTTP = false;
    b.emulateJSON = false;
    var j = b.Events = {
        on: function(a, b, c) {
            if (!l(this, "on", a, [ b, c ]) || !b) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            d.push({
                callback: b,
                context: c,
                ctx: c || this
            });
            return this;
        },
        once: function(a, b, d) {
            if (!l(this, "once", a, [ b, d ]) || !b) return this;
            var e = this;
            var f = c.once(function() {
                e.off(a, f);
                b.apply(this, arguments);
            });
            f._callback = b;
            return this.on(a, f, d);
        },
        off: function(a, b, d) {
            var e, f, g, h, i, j, k, m;
            if (!this._events || !l(this, "off", a, [ b, d ])) return this;
            if (!a && !b && !d) {
                this._events = void 0;
                return this;
            }
            h = a ? [ a ] : c.keys(this._events);
            for (i = 0, j = h.length; i < j; i++) {
                a = h[i];
                if (g = this._events[a]) {
                    this._events[a] = e = [];
                    if (b || d) {
                        for (k = 0, m = g.length; k < m; k++) {
                            f = g[k];
                            if (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) {
                                e.push(f);
                            }
                        }
                    }
                    if (!e.length) delete this._events[a];
                }
            }
            return this;
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = h.call(arguments, 1);
            if (!l(this, "trigger", a, b)) return this;
            var c = this._events[a];
            var d = this._events.all;
            if (c) m(c, b);
            if (d) m(d, arguments);
            return this;
        },
        stopListening: function(a, b, d) {
            var e = this._listeningTo;
            if (!e) return this;
            var f = !b && !d;
            if (!d && typeof b === "object") d = this;
            if (a) (e = {})[a._listenId] = a;
            for (var g in e) {
                a = e[g];
                a.off(b, d, this);
                if (f || c.isEmpty(a._events)) delete this._listeningTo[g];
            }
            return this;
        }
    };
    var k = /\s+/;
    var l = function(a, b, c, d) {
        if (!c) return true;
        if (typeof c === "object") {
            for (var e in c) {
                a[b].apply(a, [ e, c[e] ].concat(d));
            }
            return false;
        }
        if (k.test(c)) {
            var f = c.split(k);
            for (var g = 0, h = f.length; g < h; g++) {
                a[b].apply(a, [ f[g] ].concat(d));
            }
            return false;
        }
        return true;
    };
    var m = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
          case 0:
            while (++d < e) (c = a[d]).callback.call(c.ctx);
            return;

          case 1:
            while (++d < e) (c = a[d]).callback.call(c.ctx, f);
            return;

          case 2:
            while (++d < e) (c = a[d]).callback.call(c.ctx, f, g);
            return;

          case 3:
            while (++d < e) (c = a[d]).callback.call(c.ctx, f, g, h);
            return;

          default:
            while (++d < e) (c = a[d]).callback.apply(c.ctx, b);
            return;
        }
    };
    var n = {
        listenTo: "on",
        listenToOnce: "once"
    };
    c.each(n, function(a, b) {
        j[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {});
            var g = b._listenId || (b._listenId = c.uniqueId("l"));
            f[g] = b;
            if (!e && typeof d === "object") e = this;
            b[a](d, e, this);
            return this;
        };
    });
    j.bind = j.on;
    j.unbind = j.off;
    c.extend(b, j);
    var o = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {});
        this.cid = c.uniqueId("c");
        this.attributes = {};
        if (b.collection) this.collection = b.collection;
        if (b.parse) d = this.parse(d, b) || {};
        d = c.defaults({}, d, c.result(this, "defaults"));
        this.set(d, b);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };
    c.extend(o.prototype, j, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return c.clone(this.attributes);
        },
        sync: function() {
            return b.sync.apply(this, arguments);
        },
        get: function(a) {
            return this.attributes[a];
        },
        escape: function(a) {
            return c.escape(this.get(a));
        },
        has: function(a) {
            return this.get(a) != null;
        },
        set: function(a, b, d) {
            var e, f, g, h, i, j, k, l;
            if (a == null) return this;
            if (typeof a === "object") {
                f = a;
                d = b;
            } else {
                (f = {})[a] = b;
            }
            d || (d = {});
            if (!this._validate(f, d)) return false;
            g = d.unset;
            i = d.silent;
            h = [];
            j = this._changing;
            this._changing = true;
            if (!j) {
                this._previousAttributes = c.clone(this.attributes);
                this.changed = {};
            }
            l = this.attributes, k = this._previousAttributes;
            if (this.idAttribute in f) this.id = f[this.idAttribute];
            for (e in f) {
                b = f[e];
                if (!c.isEqual(l[e], b)) h.push(e);
                if (!c.isEqual(k[e], b)) {
                    this.changed[e] = b;
                } else {
                    delete this.changed[e];
                }
                g ? delete l[e] : l[e] = b;
            }
            if (!i) {
                if (h.length) this._pending = d;
                for (var m = 0, n = h.length; m < n; m++) {
                    this.trigger("change:" + h[m], this, l[h[m]], d);
                }
            }
            if (j) return this;
            if (!i) {
                while (this._pending) {
                    d = this._pending;
                    this._pending = false;
                    this.trigger("change", this, d);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },
        unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {
                unset: true
            }));
        },
        clear: function(a) {
            var b = {};
            for (var d in this.attributes) b[d] = void 0;
            return this.set(b, c.extend({}, a, {
                unset: true
            }));
        },
        hasChanged: function(a) {
            if (a == null) return !c.isEmpty(this.changed);
            return c.has(this.changed, a);
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? c.clone(this.changed) : false;
            var b, d = false;
            var e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a) {
                if (c.isEqual(e[f], b = a[f])) continue;
                (d || (d = {}))[f] = b;
            }
            return d;
        },
        previous: function(a) {
            if (a == null || !this._previousAttributes) return null;
            return this._previousAttributes[a];
        },
        previousAttributes: function() {
            return c.clone(this._previousAttributes);
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {};
            if (a.parse === void 0) a.parse = true;
            var b = this;
            var d = a.success;
            a.success = function(c) {
                if (!b.set(b.parse(c, a), a)) return false;
                if (d) d(b, c, a);
                b.trigger("sync", b, c, a);
            };
            N(this, a);
            return this.sync("read", this, a);
        },
        save: function(a, b, d) {
            var e, f, g, h = this.attributes;
            if (a == null || typeof a === "object") {
                e = a;
                d = b;
            } else {
                (e = {})[a] = b;
            }
            d = c.extend({
                validate: true
            }, d);
            if (e && !d.wait) {
                if (!this.set(e, d)) return false;
            } else {
                if (!this._validate(e, d)) return false;
            }
            if (e && d.wait) {
                this.attributes = c.extend({}, h, e);
            }
            if (d.parse === void 0) d.parse = true;
            var i = this;
            var j = d.success;
            d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                if (d.wait) b = c.extend(e || {}, b);
                if (c.isObject(b) && !i.set(b, d)) {
                    return false;
                }
                if (j) j(i, a, d);
                i.trigger("sync", i, a, d);
            };
            N(this, d);
            f = this.isNew() ? "create" : d.patch ? "patch" : "update";
            if (f === "patch") d.attrs = e;
            g = this.sync(f, this, d);
            if (e && d.wait) this.attributes = h;
            return g;
        },
        destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this;
            var d = a.success;
            var e = function() {
                b.trigger("destroy", b, b.collection, a);
            };
            a.success = function(c) {
                if (a.wait || b.isNew()) e();
                if (d) d(b, c, a);
                if (!b.isNew()) b.trigger("sync", b, c, a);
            };
            if (this.isNew()) {
                a.success();
                return false;
            }
            N(this, a);
            var f = this.sync("delete", this, a);
            if (!a.wait) e();
            return f;
        },
        url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || M();
            if (this.isNew()) return a;
            return a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
        },
        parse: function(a, b) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(a) {
            return this._validate({}, c.extend(a || {}, {
                validate: true
            }));
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return true;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            if (!d) return true;
            this.trigger("invalid", this, d, c.extend(b, {
                validationError: d
            }));
            return false;
        }
    });
    var p = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    c.each(p, function(a) {
        o.prototype[a] = function() {
            var b = h.call(arguments);
            b.unshift(this.attributes);
            return c[a].apply(c, b);
        };
    });
    var q = b.Collection = function(a, b) {
        b || (b = {});
        if (b.model) this.model = b.model;
        if (b.comparator !== void 0) this.comparator = b.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (a) this.reset(a, c.extend({
            silent: true
        }, b));
    };
    var r = {
        add: true,
        remove: true,
        merge: true
    };
    var s = {
        add: true,
        remove: false
    };
    c.extend(q.prototype, j, {
        model: o,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a);
            });
        },
        sync: function() {
            return b.sync.apply(this, arguments);
        },
        add: function(a, b) {
            return this.set(a, c.extend({
                merge: false
            }, b, s));
        },
        remove: function(a, b) {
            var d = !c.isArray(a);
            a = d ? [ a ] : c.clone(a);
            b || (b = {});
            var e, f, g, h;
            for (e = 0, f = a.length; e < f; e++) {
                h = a[e] = this.get(a[e]);
                if (!h) continue;
                delete this._byId[h.id];
                delete this._byId[h.cid];
                g = this.indexOf(h);
                this.models.splice(g, 1);
                this.length--;
                if (!b.silent) {
                    b.index = g;
                    h.trigger("remove", h, this, b);
                }
                this._removeReference(h, b);
            }
            return d ? a[0] : a;
        },
        set: function(a, b) {
            b = c.defaults({}, b, r);
            if (b.parse) a = this.parse(a, b);
            var d = !c.isArray(a);
            a = d ? a ? [ a ] : [] : c.clone(a);
            var e, f, g, h, i, j, k;
            var l = b.at;
            var m = this.model;
            var n = this.comparator && l == null && b.sort !== false;
            var p = c.isString(this.comparator) ? this.comparator : null;
            var q = [], s = [], t = {};
            var u = b.add, v = b.merge, w = b.remove;
            var x = !n && u && w ? [] : false;
            for (e = 0, f = a.length; e < f; e++) {
                i = a[e] || {};
                if (i instanceof o) {
                    g = h = i;
                } else {
                    g = i[m.prototype.idAttribute || "id"];
                }
                if (j = this.get(g)) {
                    if (w) t[j.cid] = true;
                    if (v) {
                        i = i === h ? h.attributes : i;
                        if (b.parse) i = j.parse(i, b);
                        j.set(i, b);
                        if (n && !k && j.hasChanged(p)) k = true;
                    }
                    a[e] = j;
                } else if (u) {
                    h = a[e] = this._prepareModel(i, b);
                    if (!h) continue;
                    q.push(h);
                    this._addReference(h, b);
                }
                h = j || h;
                if (x && (h.isNew() || !t[h.id])) x.push(h);
                t[h.id] = true;
            }
            if (w) {
                for (e = 0, f = this.length; e < f; ++e) {
                    if (!t[(h = this.models[e]).cid]) s.push(h);
                }
                if (s.length) this.remove(s, b);
            }
            if (q.length || x && x.length) {
                if (n) k = true;
                this.length += q.length;
                if (l != null) {
                    for (e = 0, f = q.length; e < f; e++) {
                        this.models.splice(l + e, 0, q[e]);
                    }
                } else {
                    if (x) this.models.length = 0;
                    var y = x || q;
                    for (e = 0, f = y.length; e < f; e++) {
                        this.models.push(y[e]);
                    }
                }
            }
            if (k) this.sort({
                silent: true
            });
            if (!b.silent) {
                for (e = 0, f = q.length; e < f; e++) {
                    (h = q[e]).trigger("add", h, this, b);
                }
                if (k || x && x.length) this.trigger("sort", this, b);
            }
            return d ? a[0] : a;
        },
        reset: function(a, b) {
            b || (b = {});
            for (var d = 0, e = this.models.length; d < e; d++) {
                this._removeReference(this.models[d], b);
            }
            b.previousModels = this.models;
            this._reset();
            a = this.add(a, c.extend({
                silent: true
            }, b));
            if (!b.silent) this.trigger("reset", this, b);
            return a;
        },
        push: function(a, b) {
            return this.add(a, c.extend({
                at: this.length
            }, b));
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b;
        },
        unshift: function(a, b) {
            return this.add(a, c.extend({
                at: 0
            }, b));
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b;
        },
        slice: function() {
            return h.apply(this.models, arguments);
        },
        get: function(a) {
            if (a == null) return void 0;
            return this._byId[a] || this._byId[a.id] || this._byId[a.cid];
        },
        at: function(a) {
            return this.models[a];
        },
        where: function(a, b) {
            if (c.isEmpty(a)) return b ? void 0 : [];
            return this[b ? "find" : "filter"](function(b) {
                for (var c in a) {
                    if (a[c] !== b.get(c)) return false;
                }
                return true;
            });
        },
        findWhere: function(a) {
            return this.where(a, true);
        },
        sort: function(a) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            a || (a = {});
            if (c.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(c.bind(this.comparator, this));
            }
            if (!a.silent) this.trigger("sort", this, a);
            return this;
        },
        pluck: function(a) {
            return c.invoke(this.models, "get", a);
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {};
            if (a.parse === void 0) a.parse = true;
            var b = a.success;
            var d = this;
            a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a);
                if (b) b(d, c, a);
                d.trigger("sync", d, c, a);
            };
            N(this, a);
            return this.sync("read", this, a);
        },
        create: function(a, b) {
            b = b ? c.clone(b) : {};
            if (!(a = this._prepareModel(a, b))) return false;
            if (!b.wait) this.add(a, b);
            var d = this;
            var e = b.success;
            b.success = function(a, c) {
                if (b.wait) d.add(a, b);
                if (e) e(a, c, b);
            };
            a.save(null, b);
            return a;
        },
        parse: function(a, b) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },
        _prepareModel: function(a, b) {
            if (a instanceof o) return a;
            b = b ? c.clone(b) : {};
            b.collection = this;
            var d = new this.model(a, b);
            if (!d.validationError) return d;
            this.trigger("invalid", this, d.validationError, b);
            return false;
        },
        _addReference: function(a, b) {
            this._byId[a.cid] = a;
            if (a.id != null) this._byId[a.id] = a;
            if (!a.collection) a.collection = this;
            a.on("all", this._onModelEvent, this);
        },
        _removeReference: function(a, b) {
            if (this === a.collection) delete a.collection;
            a.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(a, b, c, d) {
            if ((a === "add" || a === "remove") && c !== this) return;
            if (a === "destroy") this.remove(b, d);
            if (b && a === "change:" + b.idAttribute) {
                delete this._byId[b.previous(b.idAttribute)];
                if (b.id != null) this._byId[b.id] = b;
            }
            this.trigger.apply(this, arguments);
        }
    });
    var t = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample" ];
    c.each(t, function(a) {
        q.prototype[a] = function() {
            var b = h.call(arguments);
            b.unshift(this.models);
            return c[a].apply(c, b);
        };
    });
    var u = [ "groupBy", "countBy", "sortBy", "indexBy" ];
    c.each(u, function(a) {
        q.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b);
            };
            return c[a](this.models, e, d);
        };
    });
    var v = b.View = function(a) {
        this.cid = c.uniqueId("view");
        a || (a = {});
        c.extend(this, c.pick(a, x));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };
    var w = /^(\S+)\s*(.*)$/;
    var x = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    c.extend(v.prototype, j, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this;
        },
        setElement: function(a, c) {
            if (this.$el) this.undelegateEvents();
            this.$el = a instanceof b.$ ? a : b.$(a);
            this.el = this.$el[0];
            if (c !== false) this.delegateEvents();
            return this;
        },
        delegateEvents: function(a) {
            if (!(a || (a = c.result(this, "events")))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (!c.isFunction(d)) d = this[a[b]];
                if (!d) continue;
                var e = b.match(w);
                var f = e[1], g = e[2];
                d = c.bind(d, this);
                f += ".delegateEvents" + this.cid;
                if (g === "") {
                    this.$el.on(f, d);
                } else {
                    this.$el.on(f, g, d);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this;
        },
        _ensureElement: function() {
            if (!this.el) {
                var a = c.extend({}, c.result(this, "attributes"));
                if (this.id) a.id = c.result(this, "id");
                if (this.className) a["class"] = c.result(this, "className");
                var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                this.setElement(d, false);
            } else {
                this.setElement(c.result(this, "el"), false);
            }
        }
    });
    b.sync = function(a, d, e) {
        var f = z[a];
        c.defaults(e || (e = {}), {
            emulateHTTP: b.emulateHTTP,
            emulateJSON: b.emulateJSON
        });
        var g = {
            type: f,
            dataType: "json"
        };
        if (!e.url) {
            g.url = c.result(d, "url") || M();
        }
        if (e.data == null && d && (a === "create" || a === "update" || a === "patch")) {
            g.contentType = "application/json";
            g.data = JSON.stringify(e.attrs || d.toJSON(e));
        }
        if (e.emulateJSON) {
            g.contentType = "application/x-www-form-urlencoded";
            g.data = g.data ? {
                model: g.data
            } : {};
        }
        if (e.emulateHTTP && (f === "PUT" || f === "DELETE" || f === "PATCH")) {
            g.type = "POST";
            if (e.emulateJSON) g.data._method = f;
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                a.setRequestHeader("X-HTTP-Method-Override", f);
                if (h) return h.apply(this, arguments);
            };
        }
        if (g.type !== "GET" && !e.emulateJSON) {
            g.processData = false;
        }
        if (g.type === "PATCH" && y) {
            g.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }
        var i = e.xhr = b.ajax(c.extend(g, e));
        d.trigger("request", d, i, e);
        return i;
    };
    var y = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent);
    var z = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments);
    };
    var A = b.Router = function(a) {
        a || (a = {});
        if (a.routes) this.routes = a.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };
    var B = /\((.*?)\)/g;
    var C = /(\(\?)?:\w+/g;
    var D = /\*\w+/g;
    var E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(A.prototype, j, {
        initialize: function() {},
        route: function(a, d, e) {
            if (!c.isRegExp(a)) a = this._routeToRegExp(a);
            if (c.isFunction(d)) {
                e = d;
                d = "";
            }
            if (!e) e = this[d];
            var f = this;
            b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g);
                f.trigger.apply(f, [ "route:" + d ].concat(g));
                f.trigger("route", d, g);
                b.history.trigger("route", f, d, g);
            });
            return this;
        },
        execute: function(a, b) {
            if (a) a.apply(this, b);
        },
        navigate: function(a, c) {
            b.history.navigate(a, c);
            return this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = c.result(this, "routes");
            var a, b = c.keys(this.routes);
            while ((a = b.pop()) != null) {
                this.route(a, this.routes[a]);
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(E, "\\$&").replace(B, "(?:$1)?").replace(C, function(a, b) {
                return b ? a : "([^/?]+)";
            }).replace(D, "([^?]*?)");
            return new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                if (b === d.length - 1) return a || null;
                return a ? decodeURIComponent(a) : null;
            });
        }
    });
    var F = b.History = function() {
        this.handlers = [];
        c.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history;
        }
    };
    var G = /^[#\/]|\s+$/g;
    var H = /^\/+|\/+$/g;
    var I = /msie [\w.]+/;
    var J = /\/$/;
    var K = /#.*$/;
    F.started = false;
    c.extend(F.prototype, j, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
        },
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : "";
        },
        getFragment: function(a, b) {
            if (a == null) {
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(J, "");
                    if (!a.indexOf(c)) a = a.slice(c.length);
                } else {
                    a = this.getHash();
                }
            }
            return a.replace(G, "");
        },
        start: function(a) {
            if (F.started) throw new Error("Backbone.history has already been started");
            F.started = true;
            this.options = c.extend({
                root: "/"
            }, this.options, a);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var d = this.getFragment();
            var e = document.documentMode;
            var f = I.exec(navigator.userAgent.toLowerCase()) && (!e || e <= 7);
            this.root = ("/" + this.root + "/").replace(H, "/");
            if (f && this._wantsHashChange) {
                var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = g.hide().appendTo("body")[0].contentWindow;
                this.navigate(d);
            }
            if (this._hasPushState) {
                b.$(window).on("popstate", this.checkUrl);
            } else if (this._wantsHashChange && "onhashchange" in window && !f) {
                b.$(window).on("hashchange", this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }
            this.fragment = d;
            var h = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + "#" + this.fragment);
                    return true;
                } else if (this._hasPushState && this.atRoot() && h.hash) {
                    this.fragment = this.getHash().replace(G, "");
                    this.history.replaceState({}, document.title, this.root + this.fragment);
                }
            }
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
            F.started = false;
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            });
        },
        checkUrl: function(a) {
            var b = this.getFragment();
            if (b === this.fragment && this.iframe) {
                b = this.getFragment(this.getHash(this.iframe));
            }
            if (b === this.fragment) return false;
            if (this.iframe) this.navigate(b);
            this.loadUrl();
        },
        loadUrl: function(a) {
            a = this.fragment = this.getFragment(a);
            return c.any(this.handlers, function(b) {
                if (b.route.test(a)) {
                    b.callback(a);
                    return true;
                }
            });
        },
        navigate: function(a, b) {
            if (!F.started) return false;
            if (!b || b === true) b = {
                trigger: !!b
            };
            var c = this.root + (a = this.getFragment(a || ""));
            a = a.replace(K, "");
            if (this.fragment === a) return;
            this.fragment = a;
            if (a === "" && c !== "/") c = c.slice(0, -1);
            if (this._hasPushState) {
                this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, a, b.replace);
                if (this.iframe && a !== this.getFragment(this.getHash(this.iframe))) {
                    if (!b.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, a, b.replace);
                }
            } else {
                return this.location.assign(c);
            }
            if (b.trigger) return this.loadUrl(a);
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b);
            } else {
                a.hash = "#" + b;
            }
        }
    });
    b.history = new F();
    var L = function(a, b) {
        var d = this;
        var e;
        if (a && c.has(a, "constructor")) {
            e = a.constructor;
        } else {
            e = function() {
                return d.apply(this, arguments);
            };
        }
        c.extend(e, d, b);
        var f = function() {
            this.constructor = e;
        };
        f.prototype = d.prototype;
        e.prototype = new f();
        if (a) c.extend(e.prototype, a);
        e.__super__ = d.prototype;
        return e;
    };
    o.extend = q.extend = A.extend = v.extend = F.extend = L;
    var M = function() {
        throw new Error('A "url" property or function must be specified');
    };
    var N = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            if (c) c(a, d, b);
            a.trigger("error", a, d, b);
        };
    };
    return b;
});

this["JST"] = this["JST"] || {};

this["JST"]["battle/controls"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) {
        __p += '<div class="control-wrapper">\n	<div class="alternative-controls">\n		<div class="controls large-controls animated fadeIn">\n			<a href="#" class="action" data-action="1">THUNDERSHOCK</a>\n			<a href="#" class="action" data-action="2">GROWL</a>\n			<a href="#" class="action" data-action="3">THUNDERWAVE</a>\n			<a href="#" class="action" data-action="4">--</a>\n		</div>\n		<div class="back">\n			<a href="#" class="return">&larr;</a>\n		</div>\n	</div>\n\n	<div class="main-controls">\n		<div class="controls animated fadeIn">\n			<a href="#" class="fight">FIGHT</a>\n			<a href="#" class="pokemon"><sup>P</sup><sub>K</sub><sup>M</sup><sub>N</sub></a>\n			<a href="#">ITEM</a>\n			<a href="#">RUN</a>\n		</div>\n\n		What will ' + ((__t = pokemon.name()) == null ? "" : __t) + " do?\n	</div>\n</div>";
    }
    return __p;
};

this["JST"]["battle/layout"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) {
        __p += '<div class="battle-screen"></div>\n';
    }
    return __p;
};

this["JST"]["battle/opponent"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) {
        __p += '<div class="stats-wrapper fadeIn">\n	<div class="opponent-stats">\n		<h3>' + ((__t = pokemon.name()) == null ? "" : __t) + '</h3>\n		<span class="level">' + ((__t = pokemon.get("level")) == null ? "" : __t) + '</span>\n\n		<div class="health-bar">\n			<div class="inner-health" style="width: ' + ((__t = pokemon.percentAlive()) == null ? "" : __t) + '%;"></div>\n		</div>\n\n		<div class="pokeball-icon"></div>\n	</div>\n	<div class="opponent-notch"></div>\n</div>\n\n<div class="platform opponent">\n	<img src="assets/images/pokemon/front/' + ((__t = pokemon.get("number")) == null ? "" : __t) + '.png">\n</div>\n';
    }
    return __p;
};

this["JST"]["battle/player"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "", __e = _.escape;
    with (obj) {
        __p += '<div class="stats-wrapper fadeIn">\n		<div class="pokemon-stats">\n		<h3>' + ((__t = pokemon.name()) == null ? "" : __t) + '</h3>\n		<span class="level">' + ((__t = pokemon.get("level")) == null ? "" : __t) + '</span>\n\n		<div class="health-bar">\n			<div class="inner-health" style="width: ' + ((__t = pokemon.percentAlive()) == null ? "" : __t) + '%;"></div>\n		</div>\n		<span class="health">' + ((__t = pokemon.get("health")) == null ? "" : __t) + "/" + ((__t = pokemon.get("maxHealth")) == null ? "" : __t) + '</span>\n\n		<div class="experience-bar">\n			<div class="inner-experience" style="width: 10%"></div>\n		</div>\n	</div>\n	<div class="pokemon-notch"></div>\n</div>\n\n<div class="platform">\n	<img src="assets/images/pokemon/back/' + ((__t = pokemon.get("number")) == null ? "" : __t) + '.png">\n</div>\n';
    }
    return __p;
};

var AbstractGameInterface = Backbone.View.extend({
    esc: function() {},
    up: function() {},
    down: function() {},
    left: function() {},
    right: function() {},
    enter: function() {}
});

var BattleView = AbstractGameInterface.extend({
    tagName: "section",
    className: "notched",
    events: {},
    opponentView: null,
    playerView: null,
    controlsView: null,
    initialize: function(a) {
        this.opponentView = new BattleOpponentView({
            model: a.opponent
        });
        this.playerView = new BattlePlayerView({
            model: a.player
        });
        this.controlsView = new BattleControlsView({
            model: a.player
        });
    },
    render: function() {
        this.$el.html(JST["battle/layout"]());
        this.$(".battle-screen").append(this.opponentView.render().el).append(this.playerView.render().el).append(this.controlsView.render().el);
        return this;
    }
});

(function(a) {
    var b = Backbone.View.extend({
        views: [],
        initialize: function() {
            this.controls = new Controls({});
            var a = this.model = new Player({
                x: 10,
                y: 4
            });
            var b, c = new Image();
            c.src = "assets/images/world.png";
            c.onload = function() {
                b.trigger("sprite:load");
            };
            var d = 184;
            var e = 52;
            var f = 1;
            var g = 2;
            var h = 3;
            var i = 51;
            var j = 53;
            var k = 101;
            var l = 102;
            var m = 103;
            var n = 50 * 4 - 1;
            var o = {
                sprite: {
                    img: c,
                    size: 16,
                    gap: 1,
                    columns: 50
                },
                whitelist: [ d, n + 203 ]
            };
            var p = new Map(_.extend(o, {
                grid: [ [ f, g, g, g, h ], [ i, d, d, d, j ], [ i, d, d, d, j ], [ k, l, d, l, m ] ]
            }));
            b = new Map(_.extend(o, {
                grid: [ [ d, d, n + 1, n + 2, n + 3, n + 4, n + 5, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d ], [ d, f, n + 51, n + 52, n + 53, n + 54, n + 55, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, h, d ], [ d, i, n + 101, n + 102, n + 103, n + 104, n + 105, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, j, d ], [ d, i, n + 151, n + 152, n + 153, n + 154, n + 155, d, d, d, d, d, d, d, d, d, d, e, d, d, d, d, d, d, j, d ], [ d, i, n + 201, n + 202, n + 203, n + 204, n + 205, d, d, d, d, d, d, d, d, d, d, e, d, d, d, d, d, d, j, d ], [ d, i, d, d, d, d, d, d, d, d, d, d, d, d, e, d, d, d, d, d, d, d, d, d, j, d ], [ d, i, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, j, d ], [ d, i, d, d, d, d, d, d, d, d, d, e, d, d, d, d, d, d, d, d, d, d, d, d, j, d ], [ d, i, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, e, d, d, d, d, d, d, j, d ], [ d, k, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, m, d ], [ d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d ] ],
                doors: [ {
                    coordinates: [ 4, 4 ],
                    map: p,
                    landing: [ 2, 2 ]
                } ]
            }));
            p.set("doors", [ {
                coordinates: [ 2, 3 ],
                map: b,
                landing: [ 4, 5 ]
            } ]);
            this.worldView = new WorldView({
                model: this.model,
                game: this,
                map: b
            });
        }
    });
    a.GameView = b;
})(window);

(function(a) {
    var b = AbstractGameInterface.extend({
        events: {},
        initialize: function(a) {
            _.bindAll(this, "checkControls", "redraw");
            this.game = a.game;
            this.map = a.map;
            this.listenTo(this.model, "change:x change:y", this.redraw);
            this.listenTo(this.map, "sprite:load", this.redraw);
            $(window).resize(this.redraw);
            this.redraw();
            this.checkControls();
            this.checkControls = _.throttle(this.checkControls, 100);
        },
        checkControls: function() {
            var a = {
                x: this.model.get("x"),
                y: this.model.get("y")
            };
            increment = 1;
            if (this.game.controls.pressed("right") && this.map.canMoveTo(a.x + increment, a.y)) {
                a.x += increment;
            } else if (this.game.controls.pressed("left") && this.map.canMoveTo(a.x - increment, a.y)) {
                a.x -= increment;
            }
            if (this.game.controls.pressed("down") && this.map.canMoveTo(a.x, a.y + increment)) {
                a.y += increment;
            } else if (this.game.controls.pressed("up") && this.map.canMoveTo(a.x, a.y - increment)) {
                a.y -= increment;
            }
            this.model.set(a);
            this.checkCollision();
            requestAnimationFrame(this.checkControls);
        },
        checkCollision: function() {
            var a = this.map.get("doors");
            for (var b = a.length - 1; b >= 0; b--) {
                if (this.model.get("x") === a[b].coordinates[0] && this.model.get("y") === a[b].coordinates[1]) {
                    this.map = a[b].map;
                    this.model.set({
                        x: a[b].landing[0],
                        y: a[b].landing[1]
                    });
                    break;
                }
            }
        },
        redraw: function() {
            var a = $("#canvas"), b = a.get(0).getContext("2d"), c = $(window).width(), d = $(window).height();
            a.attr("width", c).attr("height", d);
            var e = {
                0: "#ffffff",
                1: "#aaffff",
                2: "#ffaaff",
                3: "#ffffaa",
                4: "#aaaaaa"
            };
            var f = this.model.get("x"), g = this.model.get("y"), h = c / 2, i = d / 2, j = 16;
            this.map.draw(function(a, c, d, e) {
                var k = (c - f) * j + h, l = (a - g) * j + i;
                if (e) {
                    this.drawSprite(b, e, k, l, j);
                }
                this.drawSprite(b, d, k, l, j);
            }, this);
            b.fillStyle = "#000";
            var k = j * .1;
            b.fillRect(h, i, j, j);
        },
        drawSprite: function(a, b, c, d, e) {
            a.drawImage(b.img, b.sx, b.sy, b.size, b.size, c, d, e, e);
        }
    });
    a.WorldView = b;
})(window);

var Moves = {
    "Faint Attack": {
        accuracy: 1,
        name: "Faint Attack",
        power: 60,
        type: "dark"
    },
    acid: {
        accuracy: 1,
        name: "Acid",
        power: 40,
        type: "poison"
    },
    "aerial ace": {
        accuracy: 1,
        name: "Aerial Ace",
        power: 60,
        type: "flying"
    },
    "air cutter": {
        accuracy: .95,
        name: "Air Cutter",
        power: 55,
        type: "flying"
    },
    ancientpower: {
        accuracy: 1,
        name: "AncientPower",
        power: 60,
        type: "rock"
    },
    astonish: {
        accuracy: 1,
        name: "Astonish",
        power: 30,
        type: "ghost"
    },
    "aurora beam": {
        accuracy: 1,
        name: "Aurora Beam",
        power: 65,
        type: "ice"
    },
    bite: {
        accuracy: 1,
        name: "Bite",
        power: 60,
        type: "dark"
    },
    blizzard: {
        accuracy: .7,
        name: "Blizzard",
        power: 120,
        type: "ice"
    },
    "body slam": {
        accuracy: 1,
        name: "Body Slam",
        power: 85,
        type: "normal"
    },
    "bone club": {
        accuracy: .85,
        name: "Bone Club",
        power: 65,
        type: "ground"
    },
    bubble: {
        accuracy: 1,
        name: "Bubble",
        power: 20,
        type: "water"
    },
    bubblebeam: {
        accuracy: 1,
        name: "BubbleBeam",
        power: 65,
        type: "water"
    },
    confusion: {
        accuracy: 1,
        name: "Confusion",
        power: 50,
        type: "psychic"
    },
    constrict: {
        accuracy: 1,
        name: "Constrict",
        power: 10,
        type: "normal"
    },
    crabhammer: {
        accuracy: .85,
        name: "Crabhammer",
        power: 90,
        type: "water"
    },
    "cross chop": {
        accuracy: .8,
        name: "Cross Chop",
        power: 100,
        type: "fighting"
    },
    crunch: {
        accuracy: 1,
        name: "Crunch",
        power: 80,
        type: "dark"
    },
    "dizzy punch": {
        accuracy: 1,
        name: "Dizzy Punch",
        power: 70,
        type: "normal"
    },
    "dragon claw": {
        accuracy: 1,
        name: "Dragon Claw",
        power: 80,
        type: "simple"
    },
    dragonbreath: {
        accuracy: 1,
        name: "DragonBreath",
        power: 60,
        type: "dragon"
    },
    "drill peck": {
        accuracy: 1,
        name: "Drill Peck",
        power: 80,
        type: "flying"
    },
    dynamicpunch: {
        accuracy: .5,
        name: "DynamicPunch",
        power: 100,
        type: "fighting"
    },
    earthquake: {
        accuracy: 1,
        name: "Earthquake",
        power: 100,
        type: "ground"
    },
    "egg bomb": {
        accuracy: .75,
        name: "Egg Bomb",
        power: 100,
        type: "normal"
    },
    ember: {
        accuracy: 1,
        name: "Ember",
        power: 40,
        type: "fire"
    },
    "fire blast": {
        accuracy: .85,
        name: "Fire Blast",
        power: 120,
        type: "fire"
    },
    "fire punch": {
        accuracy: 1,
        name: "Fire Punch",
        power: 75,
        type: "fire"
    },
    "flame wheel": {
        accuracy: 1,
        name: "Flame Wheel",
        power: 60,
        type: "fire"
    },
    flamethrower: {
        accuracy: 1,
        name: "Flamethrower",
        power: 95,
        type: "fire"
    },
    gust: {
        accuracy: 1,
        name: "Gust",
        power: 40,
        type: "flying"
    },
    headbutt: {
        accuracy: 1,
        name: "Headbutt",
        power: 70,
        type: "normal"
    },
    "heat wave": {
        accuracy: .9,
        name: "Heat Wave",
        power: 100,
        type: "fire"
    },
    "horn attack": {
        accuracy: 1,
        name: "Horn Attack",
        power: 65,
        type: "normal"
    },
    "hydro pump": {
        accuracy: .8,
        name: "Hydro Pump",
        power: 120,
        type: "water"
    },
    "hyper fang": {
        accuracy: .9,
        name: "Hyper Fang",
        power: 80,
        type: "normal"
    },
    "hyper voice": {
        accuracy: 1,
        name: "Hyper Voice",
        power: 90,
        type: "normal"
    },
    "ice beam": {
        accuracy: 1,
        name: "Ice Beam",
        power: 95,
        type: "ice"
    },
    "ice punch": {
        accuracy: 1,
        name: "Ice Punch",
        power: 75,
        type: "ice"
    },
    "icy wind": {
        accuracy: .95,
        name: "Icy Wind",
        power: 55,
        type: "ice"
    },
    "iron tail": {
        accuracy: .75,
        name: "Iron Tail",
        power: 100,
        type: "steel"
    },
    "karate chop": {
        accuracy: 1,
        name: "Karate Chop",
        power: 50,
        type: "fighting"
    },
    lick: {
        accuracy: 1,
        name: "Lick",
        power: 20,
        type: "ghost"
    },
    "low kick": {
        accuracy: 1,
        name: "Low Kick",
        power: 50,
        type: "fighting"
    },
    "magical leaf": {
        accuracy: 1,
        name: "Magical Leaf",
        power: 60,
        type: "grass"
    },
    "mega kick": {
        accuracy: .75,
        name: "Mega Kick",
        power: 120,
        type: "normal"
    },
    "mega punch": {
        accuracy: .85,
        name: "Mega Punch",
        power: 80,
        type: "normal"
    },
    megahorn: {
        accuracy: .85,
        name: "Megahorn",
        power: 120,
        type: "bug"
    },
    "metal claw": {
        accuracy: .95,
        name: "Metal Claw",
        power: 50,
        type: "steel"
    },
    "meteor mash": {
        accuracy: .85,
        name: "Meteor Mash",
        power: 100,
        type: "steel"
    },
    "mud shot": {
        accuracy: .95,
        name: "Mud Shot",
        power: 55,
        type: "ground"
    },
    overheat: {
        accuracy: .9,
        name: "Overheat",
        power: 140,
        type: "fire"
    },
    peck: {
        accuracy: 1,
        name: "Peck",
        power: 35,
        type: "flying"
    },
    "poison fang": {
        accuracy: 1,
        name: "Poison Fang",
        power: 50,
        type: "poison"
    },
    "poison sting": {
        accuracy: 1,
        name: "Poison Fang",
        power: 15,
        type: "poison"
    },
    pound: {
        accuracy: 1,
        name: "Pound",
        power: 40,
        type: "normal"
    },
    "powder snow": {
        accuracy: 1,
        name: "Powder Snow",
        power: 40,
        type: "ice"
    },
    psybeam: {
        accuracy: 1,
        name: "Psybeam",
        power: 65,
        type: "psychic"
    },
    psychic: {
        accuracy: 1,
        name: "Psychic",
        power: 90,
        type: "psychic"
    },
    "razor leaf": {
        accuracy: .95,
        name: "Razor Leaf",
        power: 55,
        type: "grass"
    },
    "rock throw": {
        accuracy: .9,
        name: "Rock Throw",
        power: 50,
        type: "rock"
    },
    "rock tomb": {
        accuracy: .8,
        name: "Rock Tomb",
        power: 50,
        type: "rock"
    },
    "rolling kick": {
        accuracy: .85,
        name: "Rolling Kick",
        power: 60,
        type: "fighting"
    },
    scratch: {
        accuracy: 1,
        name: "Scratch",
        power: 40,
        type: "normal"
    },
    "shadow ball": {
        accuracy: 1,
        name: "Shadow Ball",
        power: 80,
        type: "ghost"
    },
    "shadow punch": {
        accuracy: 1,
        name: "Shadow Punch",
        power: 60,
        type: "ghost"
    },
    "shock wave": {
        accuracy: 1,
        name: "Shock Wave",
        power: 60,
        type: "electric"
    },
    "signal beam": {
        accuracy: 1,
        name: "Signal Beam",
        power: 75,
        type: "bug"
    },
    "silver wind": {
        accuracy: 1,
        name: "Silver Wind",
        power: 60,
        type: "bug"
    },
    "sky uppercut": {
        accuracy: .9,
        name: "Sky Uppercut",
        power: 85,
        type: "fighting"
    },
    slam: {
        accuracy: .75,
        name: "Slam",
        power: 80,
        type: "normal"
    },
    slash: {
        accuracy: 1,
        name: "Slash",
        power: 70,
        type: "normal"
    },
    "sludge bomb": {
        accuracy: 1,
        name: "Sludge Bomb",
        power: 90,
        type: "poison"
    },
    sludge: {
        accuracy: 1,
        name: "Sludge",
        power: 65,
        type: "poison"
    },
    smog: {
        accuracy: .7,
        name: "Smog",
        power: 20,
        type: "poison"
    },
    snore: {
        accuracy: 1,
        name: "Snore",
        power: 40,
        type: "normal"
    },
    spark: {
        accuracy: 1,
        name: "Spark",
        power: 65,
        type: "electric"
    },
    "steel wing": {
        accuracy: .1,
        name: "Steel Wing",
        power: 70,
        type: "steel"
    },
    stomp: {
        accuracy: 1,
        name: "Stomp",
        power: 65,
        type: "normal"
    },
    struggle: {
        accuracy: .95,
        name: "Struggle",
        power: 35,
        type: "normal"
    },
    superpower: {
        accuracy: 1,
        name: "Superpower",
        power: 120,
        type: "fighting"
    },
    swift: {
        accuracy: 1,
        name: "Swift",
        power: 60,
        type: "normal"
    },
    tackle: {
        accuracy: .95,
        name: "Tackle",
        power: 35,
        type: "normal"
    },
    thunder: {
        accuracy: .7,
        name: "Thunder",
        power: 120,
        type: "electric"
    },
    thunderbolt: {
        accuracy: 1,
        name: "Thunderbolt",
        power: 95,
        type: "electric"
    },
    thunderpunch: {
        accuracy: 1,
        name: "ThunderPunch",
        power: 75,
        type: "electric"
    },
    thundershock: {
        accuracy: 1,
        name: "ThunderShock",
        power: 40,
        type: "electric"
    },
    twister: {
        accuracy: 1,
        name: "Twister",
        power: 40,
        type: "dragon"
    },
    vicegrip: {
        accuracy: 1,
        name: "ViceGrip",
        power: 55,
        type: "normal"
    },
    "vine whip": {
        accuracy: 1,
        name: "Vine Whip",
        power: 35,
        type: "grass"
    },
    "water gun": {
        accuracy: 1,
        name: "Water Gun",
        power: 40,
        type: "water"
    },
    "water pulse": {
        accuracy: 1,
        name: "Water Pulse",
        power: 60,
        type: "water"
    },
    waterfall: {
        accuracy: 1,
        name: "Waterfall",
        power: 80,
        type: "water"
    },
    "wing attack": {
        accuracy: 1,
        name: "Wing Attack",
        power: 60,
        type: "flying"
    },
    "zap cannon": {
        accuracy: .5,
        name: "Zap Cannon",
        power: 100,
        type: "electric"
    }
};

var Pokedex = {
    "1": {
        name: "Bulbasaur",
        attack: 49,
        defense: 49,
        evolveLevel: 16,
        evolveTo: "2",
        type: "grass",
        moves: [ "tackle", "vine whip" ],
        curve: 1.3,
        levels: [ 5, 10 ],
        probability: 3
    },
    "2": {
        name: "Ivysaur",
        attack: 62,
        defense: 63,
        evolveLevel: 32,
        evolveTo: "3",
        type: "grass",
        moves: [ "tackle", "vine whip", "razor leaf" ],
        curve: 1.3
    },
    "3": {
        name: "Venusaur",
        attack: 82,
        defense: 83,
        type: "grass",
        moves: [ "tackle", "vine whip", "razor leaf" ],
        curve: 1.3
    },
    "4": {
        name: "Charmander",
        attack: 52,
        defense: 43,
        evolveLevel: 16,
        evolveTo: "5",
        type: "fire",
        moves: [ "scratch", "ember", "metal claw" ],
        curve: 1.3,
        levels: [ 5, 10 ],
        probability: 3
    },
    "5": {
        name: "Charmeleon",
        attack: 64,
        defense: 58,
        evolveLevel: 36,
        evolveTo: "6",
        type: "fire",
        moves: [ "scratch", "ember", "metal claw", "flamethrower" ],
        curve: 1.3
    },
    "6": {
        name: "Charizard",
        attack: 84,
        defense: 78,
        type: "fire",
        moves: [ "flamethrower", "wing attack", "slash", "metal claw" ],
        curve: 1.3
    },
    "7": {
        name: "Squirtle",
        attack: 48,
        defense: 65,
        evolveLevel: 16,
        evolveTo: "8",
        type: "water",
        moves: [ "tackle", "bubble", "water gun" ],
        curve: 1.3,
        levels: [ 5, 10 ],
        probability: 3
    },
    "8": {
        name: "Wartortle",
        attack: 63,
        defense: 80,
        evolveLevel: 36,
        evolveTo: "9",
        type: "water",
        moves: [ "tackle", "bubble", "water gun", "bite" ],
        curve: 1.3
    },
    "9": {
        name: "Blastoise",
        attack: 83,
        defense: 100,
        type: "water",
        moves: [ "hydro pump", "bubble", "water gun", "bite" ],
        curve: 1.3
    },
    "10": {
        name: "Caterpie",
        attack: 30,
        defense: 35,
        evolveLevel: 7,
        evolveTo: "11",
        type: "bug",
        moves: [ "tackle" ],
        curve: 1.6,
        levels: [ 2, 7 ],
        probability: 15
    },
    "12": {
        name: "Butterfree",
        attack: 45,
        defense: 50,
        type: "bug",
        moves: [ "confusion", "gust", "psybeam", "silver wind" ],
        curve: 1.6
    },
    "13": {
        name: "Weedle",
        attack: 35,
        defense: 30,
        evolveLevel: 7,
        evolveTo: "14",
        type: "bug",
        moves: [ "poison sting" ],
        curve: 1.6,
        levels: [ 2, 7 ],
        probability: 15
    },
    "16": {
        name: "Pidgey",
        attack: 45,
        defense: 40,
        evolveLevel: 18,
        evolveTo: "17",
        type: "normal",
        moves: [ "tackle", "gust" ],
        curve: 1.3,
        levels: [ 2, 10 ],
        probability: 15
    },
    "17": {
        name: "Pidgeotto",
        attack: 60,
        defense: 55,
        evolveLevel: 36,
        evolveTo: "18",
        type: "normal",
        moves: [ "tackle", "gust", "wing attack" ],
        curve: 1.3
    },
    "18": {
        name: "Pidgeot",
        attack: 80,
        defense: 75,
        type: "normal",
        moves: [ "tackle", "gust", "wing attack" ],
        curve: 1.3
    },
    "19": {
        name: "Rattata",
        attack: 56,
        defense: 35,
        evolveLevel: 20,
        evolveTo: "20",
        type: "normal",
        moves: [ "tackle", "hyper fang" ],
        curve: 1.6,
        levels: [ 2, 7 ],
        probability: 20
    },
    "20": {
        name: "Raticate",
        attack: 81,
        defense: 60,
        type: "normal",
        moves: [ "tackle", "hyper fang" ],
        curve: 1.6
    },
    "21": {
        name: "Spearow",
        attack: 60,
        defense: 30,
        evolveLevel: 20,
        evolveTo: "22",
        type: "normal",
        moves: [ "peck" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 10
    },
    "22": {
        name: "Fearow",
        attack: 90,
        defense: 65,
        type: "normal",
        moves: [ "peck", "drill peck" ],
        curve: 1.6
    },
    "23": {
        name: "Ekans",
        attack: 60,
        defense: 44,
        evolveLevel: 22,
        evolveTo: "24",
        type: "poison",
        moves: [ "poison sting", "bite" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 15
    },
    "24": {
        name: "Arbok",
        attack: 85,
        defense: 69,
        type: "poison",
        moves: [ "poison sting", "bite", "acid" ],
        curve: 1.6
    },
    "26": {
        name: "Raichu",
        attack: 90,
        defense: 55,
        type: "electric",
        moves: [ "thundershock", "thunderbolt" ],
        curve: 1.6
    },
    "27": {
        name: "Sandshrew",
        attack: 75,
        defense: 85,
        evolveLevel: 22,
        evolveTo: "28",
        type: "ground",
        moves: [ "scratch", "poison sting" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 10
    },
    "28": {
        name: "Sandslash",
        attack: 100,
        defense: 110,
        type: "ground",
        moves: [ "scratch", "poison sting", "slash", "swift" ],
        curve: 1.6
    },
    "29": {
        name: "Nidoran",
        attack: 47,
        defense: 52,
        evolveLevel: 16,
        evolveTo: "30",
        type: "poison",
        moves: [ "scratch" ],
        curve: 1.3,
        levels: [ 5, 8 ],
        probability: 15
    },
    "31": {
        name: "Nidoqueen",
        attack: 82,
        defense: 87,
        type: "poison",
        moves: [ "scratch", "poison sting", "body slam", "superpower" ],
        curve: 1.3
    },
    "32": {
        name: "Nidoran",
        attack: 57,
        defense: 40,
        evolveLevel: 16,
        evolveTo: "33",
        type: "poison",
        moves: [ "peck" ],
        curve: 1.3,
        levels: [ 5, 8 ],
        probability: 15
    },
    "34": {
        name: "Nidoking",
        attack: 92,
        defense: 77,
        type: "poison",
        moves: [ "peck", "poison sting", "megahorn" ],
        curve: 1.3
    },
    "38": {
        name: "Ninetales",
        attack: 76,
        defense: 75,
        type: "fire",
        moves: [ "ember" ],
        curve: 1.6
    },
    "41": {
        name: "Zubat",
        attack: 45,
        defense: 35,
        evolveLevel: 22,
        evolveTo: "42",
        type: "poison",
        moves: [ "astonish", "bite", "wing attack" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 15
    },
    "42": {
        name: "Golbat",
        attack: 80,
        defense: 70,
        type: "poison",
        moves: [ "poison fang", "bite", "wing attack", "air cutter" ],
        curve: 1.6
    },
    "46": {
        name: "Paras",
        attack: 70,
        defense: 55,
        evolveLevel: 24,
        evolveTo: "47",
        type: "bug",
        moves: [ "scratch" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 15
    },
    "47": {
        name: "Parasect",
        attack: 95,
        defense: 80,
        type: "bug",
        moves: [ "scratch", "slash" ],
        curve: 1.6
    },
    "48": {
        name: "Venonat",
        attack: 55,
        defense: 50,
        evolveLevel: 31,
        evolveTo: "49",
        type: "bug",
        moves: [ "tackle", "confusion" ],
        curve: 1.6,
        levels: [ 10, 24 ],
        probability: 8
    },
    "49": {
        name: "Venomoth",
        attack: 65,
        defense: 60,
        type: "bug",
        moves: [ "psybeam", "psychic", "confusion", "gust" ],
        curve: 1.6
    },
    "50": {
        name: "Diglett",
        attack: 55,
        defense: 25,
        evolveLevel: 26,
        evolveTo: "51",
        type: "ground",
        moves: [ "scratch" ],
        curve: 1.6,
        levels: [ 8, 16 ],
        probability: 15
    },
    "51": {
        name: "Dugtrio",
        attack: 80,
        defense: 50,
        type: "ground",
        moves: [ "scratch", "slash", "earthquake" ],
        curve: 1.6
    },
    "52": {
        name: "Meowth",
        attack: 45,
        defense: 35,
        evolveLevel: 28,
        evolveTo: "53",
        type: "normal",
        moves: [ "scratch", "bite" ],
        curve: 1.6,
        levels: [ 8, 20 ],
        probability: 10
    },
    "53": {
        name: "Persian",
        attack: 70,
        defense: 60,
        type: "normal",
        moves: [ "scratch", "bite", "slash" ],
        curve: 1.6
    },
    "54": {
        name: "Psyduck",
        attack: 52,
        defense: 48,
        evolveLevel: 33,
        evolveTo: "55",
        type: "water",
        moves: [ "scratch", "confusion" ],
        curve: 1.6,
        levels: [ 8, 20 ],
        probability: 15
    },
    "55": {
        name: "Golduck",
        attack: 82,
        defense: 78,
        type: "water",
        moves: [ "scratch", "confusion", "hydro pump" ],
        curve: 1.6
    },
    "56": {
        name: "Mankey",
        attack: 80,
        defense: 35,
        evolveLevel: 28,
        evolveTo: "57",
        type: "fighting",
        moves: [ "scratch", "low kick", "karate chop" ],
        curve: 1.6,
        levels: [ 5, 18 ],
        probability: 8
    },
    "57": {
        name: "Primeape",
        attack: 105,
        defense: 60,
        type: "fighting",
        moves: [ "scratch", "low kick", "karate chop", "cross chop" ],
        curve: 1.6
    },
    "59": {
        name: "Arcanine",
        attack: 110,
        defense: 80,
        type: "fire",
        moves: [ "bite", "ember" ],
        curve: 1
    },
    "60": {
        name: "Poliwag",
        attack: 50,
        defense: 40,
        evolveLevel: 25,
        evolveTo: "61",
        type: "water",
        moves: [ "bubble", "water gun" ],
        curve: 1.3,
        levels: [ 5, 18 ],
        probability: 6
    },
    "62": {
        name: "Poliwrath",
        attack: 85,
        defense: 95,
        type: "water",
        moves: [ "water gun" ],
        curve: 1.3
    },
    "65": {
        name: "Alakazam",
        attack: 50,
        defense: 45,
        type: "psychic",
        moves: [ "confusion", "psybeam", "psychic" ],
        curve: 1.3
    },
    "66": {
        name: "Machop",
        attack: 80,
        defense: 50,
        evolveLevel: 28,
        evolveTo: "67",
        type: "fighting",
        moves: [ "low kick", "karate chop" ],
        curve: 1.3,
        levels: [ 5, 19 ],
        probability: 12
    },
    "68": {
        name: "Machamp",
        attack: 130,
        defense: 80,
        type: "fighting",
        moves: [ "low kick", "karate chop", "cross chop", "dynamicpunch" ],
        curve: 1.3
    },
    "69": {
        name: "Bellsprout",
        attack: 75,
        defense: 35,
        evolveLevel: 21,
        evolveTo: "70",
        type: "grass",
        moves: [ "vine whip" ],
        curve: 1.3,
        levels: [ 5, 20 ],
        probability: 15
    },
    "71": {
        name: "Victreebel",
        attack: 105,
        defense: 65,
        type: "grass",
        moves: [ "vine whip", "razor leaf" ],
        curve: 1.3
    },
    "72": {
        name: "Tentacool",
        attack: 40,
        defense: 35,
        evolveLevel: 30,
        evolveTo: "73",
        type: "water",
        moves: [ "poison sting", "constrict", "acid", "bubblebeam" ],
        curve: 1,
        levels: [ 5, 20 ],
        probability: 10
    },
    "73": {
        name: "Tentacruel",
        attack: 70,
        defense: 65,
        type: "water",
        moves: [ "hydro pump", "constrict", "acid", "bubblebeam" ],
        curve: 1
    },
    "74": {
        name: "Geodude",
        attack: 80,
        defense: 100,
        evolveLevel: 25,
        evolveTo: "75",
        type: "rock",
        moves: [ "tackle", "rock throw" ],
        curve: 1.3,
        levels: [ 5, 20 ],
        probability: 15
    },
    "76": {
        name: "Golem",
        attack: 110,
        defense: 130,
        type: "rock",
        moves: [ "tackle", "rock throw", "earthquake" ],
        curve: 1.3
    },
    "77": {
        name: "Ponyta",
        attack: 85,
        defense: 55,
        evolveLevel: 40,
        evolveTo: "78",
        type: "fire",
        moves: [ "ember", "stomp" ],
        curve: 1.6,
        levels: [ 20, 35 ],
        probability: 6
    },
    "78": {
        name: "Rapidash",
        attack: 100,
        defense: 70,
        type: "fire",
        moves: [ "ember", "stomp", "fire blast" ],
        curve: 1.6
    },
    "79": {
        name: "Slowpoke",
        attack: 65,
        defense: 65,
        evolveLevel: 37,
        evolveTo: "80",
        type: "water",
        moves: [ "tackle", "water gun", "confusion", "headbutt" ],
        curve: 1.6,
        levels: [ 25, 35 ],
        probability: 5
    },
    "80": {
        name: "Slowbro",
        attack: 75,
        defense: 110,
        type: "water",
        moves: [ "psychic", "water gun", "confusion", "headbutt" ],
        curve: 1.6
    },
    "81": {
        name: "Magnemite",
        attack: 35,
        defense: 70,
        evolveLevel: 30,
        evolveTo: "82",
        type: "electric",
        moves: [ "tackle", "thundershock", "spark" ],
        curve: 1.6,
        levels: [ 5, 20 ],
        probability: 8
    },
    "82": {
        name: "Magneton",
        attack: 60,
        defense: 95,
        type: "electric",
        moves: [ "tackle", "thundershock", "spark", "zap cannon" ],
        curve: 1.6
    },
    "83": {
        name: "Farfetch'd",
        attack: 65,
        defense: 55,
        type: "normal",
        moves: [ "peck", "slash" ],
        curve: 1.6,
        levels: [ 25, 40 ],
        probability: 8
    },
    "84": {
        name: "Doduo",
        attack: 85,
        defense: 45,
        evolveLevel: 31,
        evolveTo: "85",
        type: "normal",
        moves: [ "peck" ],
        curve: 1.6,
        levels: [ 15, 25 ],
        probability: 8
    },
    "85": {
        name: "Dodrio",
        attack: 110,
        defense: 70,
        type: "normal",
        moves: [ "peck", "drill peck" ],
        curve: 1.6
    },
    "86": {
        name: "Seel",
        attack: 45,
        defense: 55,
        evolveLevel: 34,
        evolveTo: "87",
        type: "water",
        moves: [ "headbutt", "icy wind", "aurora beam" ],
        curve: 1.6,
        levels: [ 25, 30 ],
        probability: 4
    },
    "87": {
        name: "Dewgong",
        attack: 70,
        defense: 80,
        type: "water",
        moves: [ "ice beam", "headbutt", "icy wind", "aurora beam" ],
        curve: 1.6
    },
    "88": {
        name: "Grimer",
        attack: 80,
        defense: 50,
        evolveLevel: 38,
        evolveTo: "89",
        type: "poison",
        moves: [ "pound", "sludge" ],
        curve: 1.6,
        levels: [ 5, 30 ],
        probability: 10
    },
    "89": {
        name: "Muk",
        attack: 105,
        defense: 75,
        type: "poison",
        moves: [ "pound", "sludge", "sludge bomb" ],
        curve: 1.6
    },
    "91": {
        name: "Cloyster",
        attack: 95,
        defense: 180,
        type: "water",
        moves: [ "aurora beam" ],
        curve: 1
    },
    "92": {
        name: "Gastly",
        attack: 35,
        defense: 30,
        evolveLevel: 25,
        evolveTo: "93",
        type: "ghost",
        moves: [ "tackle", "lick" ],
        curve: 1.3,
        levels: [ 5, 15 ],
        probability: 10
    },
    "94": {
        name: "Gengar",
        attack: 65,
        defense: 60,
        type: "ghost",
        moves: [ "tackle", "lick", "shadow punch", "shadow ball" ],
        curve: 1.3
    },
    "95": {
        name: "Onix",
        attack: 45,
        defense: 160,
        type: "rock",
        moves: [ "iron tail", "rock throw", "dragonbreath", "slam" ],
        curve: 1.6,
        levels: [ 5, 40 ],
        probability: 8
    },
    "96": {
        name: "Drowzee",
        attack: 48,
        defense: 45,
        evolveLevel: 26,
        evolveTo: "97",
        type: "psychic",
        moves: [ "pound", "confusion", "headbutt" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 8
    },
    "97": {
        name: "Hypno",
        attack: 73,
        defense: 70,
        type: "psychic",
        moves: [ "pound", "confusion", "headbutt", "psychic" ],
        curve: 1.6
    },
    "98": {
        name: "Krabby",
        attack: 105,
        defense: 90,
        evolveLevel: 28,
        evolveTo: "99",
        type: "water",
        moves: [ "bubble", "vicegrip", "mud shot", "stomp" ],
        curve: 1.6,
        levels: [ 15, 20 ],
        probability: 6
    },
    "99": {
        name: "Kingler",
        attack: 130,
        defense: 115,
        type: "water",
        moves: [ "stomp", "crabhammer", "vicegrip", "mud shot" ],
        curve: 1.6
    },
    "100": {
        name: "Voltorb",
        attack: 30,
        defense: 50,
        evolveLevel: 30,
        evolveTo: "101",
        type: "electric",
        moves: [ "tackle", "spark" ],
        curve: 1.6,
        levels: [ 5, 12 ],
        probability: 6
    },
    "101": {
        name: "Electrode",
        attack: 50,
        defense: 70,
        type: "electric",
        moves: [ "tackle", "spark", "swift" ],
        curve: 1.6
    },
    "103": {
        name: "Exeggutor",
        attack: 95,
        defense: 85,
        type: "grass",
        moves: [ "confusion", "stomp", "egg bomb" ],
        curve: 1
    },
    "104": {
        name: "Cubone",
        attack: 50,
        defense: 95,
        evolveLevel: 28,
        evolveTo: "105",
        type: "ground",
        moves: [ "bone club", "headbutt" ],
        curve: 1.6,
        levels: [ 15, 22 ],
        probability: 5
    },
    "105": {
        name: "Marowak",
        attack: 80,
        defense: 110,
        type: "ground",
        moves: [ "bone club", "headbutt" ],
        curve: 1.6
    },
    "106": {
        name: "Hitmonlee",
        attack: 120,
        defense: 53,
        evolveLevel: 20,
        evolveTo: "107",
        type: "fighting",
        moves: [ "rolling kick" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "107": {
        name: "Hitmonchan",
        attack: 105,
        defense: 79,
        type: "fighting",
        moves: [ "mega punch", "ice punch", "fire punch", "sky uppercut" ],
        curve: 1.6
    },
    "108": {
        name: "Lickitung",
        attack: 55,
        defense: 75,
        type: "normal",
        moves: [ "lick", "stomp", "slam" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 10
    },
    "109": {
        name: "Koffing",
        attack: 65,
        defense: 95,
        evolveLevel: 35,
        evolveTo: "110",
        type: "poison",
        moves: [ "tackle", "smog", "sludge" ],
        curve: 1.6,
        levels: [ 15, 25 ],
        probability: 6
    },
    "110": {
        name: "Weezing",
        attack: 90,
        defense: 120,
        type: "poison",
        moves: [ "tackle", "smog", "sludge" ],
        curve: 1.6
    },
    "111": {
        name: "Rhyhorn",
        attack: 85,
        defense: 95,
        evolveLevel: 42,
        evolveTo: "112",
        type: "ground",
        moves: [ "horn attack", "stomp" ],
        curve: 1,
        levels: [ 15, 35 ],
        probability: 4
    },
    "112": {
        name: "Rhydon",
        attack: 130,
        defense: 120,
        type: "ground",
        moves: [ "horn attack", "stomp", "earthquake", "megahorn" ],
        curve: 1
    },
    "113": {
        name: "Chansey",
        attack: 5,
        defense: 5,
        type: "normal",
        moves: [ "pound", "egg bomb" ],
        curve: 1.9,
        levels: [ 25, 55 ],
        probability: 4
    },
    "114": {
        name: "Tangela",
        attack: 55,
        defense: 115,
        type: "grass",
        moves: [ "constrict", "vine whip", "slam" ],
        curve: 1.6,
        levels: [ 15, 45 ],
        probability: 4
    },
    "115": {
        name: "Kangaskhan",
        attack: 95,
        defense: 80,
        type: "normal",
        moves: [ "bite", "mega punch", "dizzy punch" ],
        curve: 1.6,
        levels: [ 5, 45 ],
        probability: 4
    },
    "116": {
        name: "Horsea",
        attack: 40,
        defense: 70,
        evolveLevel: 32,
        evolveTo: "117",
        type: "water",
        moves: [ "bubble", "water gun", "twister" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 10
    },
    "117": {
        name: "Seadra",
        attack: 65,
        defense: 95,
        type: "water",
        moves: [ "bubble", "water gun", "twister", "hydro pump" ],
        curve: 1.6
    },
    "118": {
        name: "Goldeen",
        attack: 67,
        defense: 60,
        evolveLevel: 33,
        evolveTo: "119",
        type: "water",
        moves: [ "peck", "horn attack" ],
        curve: 1.6,
        levels: [ 5, 25 ],
        probability: 12
    },
    "119": {
        name: "Seaking",
        attack: 92,
        defense: 65,
        type: "water",
        moves: [ "peck", "horn attack", "waterfall", "megahorn" ],
        curve: 1.6
    },
    "121": {
        name: "Starmie",
        attack: 75,
        defense: 85,
        type: "water",
        moves: [ "water gun", "swift" ],
        curve: 1
    },
    "122": {
        name: "Mr. mime",
        attack: 45,
        defense: 65,
        type: "psychic",
        moves: [ "confusion", "magical leaf", "psybeam", "psychic" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "123": {
        name: "Scyther",
        attack: 110,
        defense: 80,
        type: "bug",
        moves: [ "wing attack", "slash" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "124": {
        name: "Jynx",
        attack: 50,
        defense: 35,
        type: "ice",
        moves: [ "body slam", "blizzard", "powder snow", "ice punch" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "125": {
        name: "Electabuzz",
        attack: 83,
        defense: 57,
        type: "electric",
        moves: [ "thunderpunch", "swift", "thunderbolt", "thunder" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "126": {
        name: "Magmar",
        attack: 95,
        defense: 57,
        type: "fire",
        moves: [ "fire blast", "smog", "fire punch", "flamethrower" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "127": {
        name: "Pinsir",
        attack: 125,
        defense: 100,
        type: "bug",
        moves: [ "vicegrip" ],
        curve: 1,
        levels: [ 5, 15 ],
        probability: 4
    },
    "128": {
        name: "Tauros",
        attack: 100,
        defense: 95,
        type: "normal",
        moves: [ "tackle", "horn attack" ],
        curve: 1,
        levels: [ 5, 15 ],
        probability: 4
    },
    "129": {
        name: "Magikarp",
        attack: 10,
        defense: 55,
        evolveLevel: 20,
        evolveTo: "130",
        type: "water",
        moves: [ "tackle" ],
        curve: 1,
        levels: [ 5, 15 ],
        probability: 15
    },
    "130": {
        name: "Gyarados",
        attack: 125,
        defense: 79,
        type: "water",
        moves: [ "bite", "twister", "hydro pump" ],
        curve: 1
    },
    "131": {
        name: "Lapras",
        attack: 85,
        defense: 80,
        type: "water",
        moves: [ "water gun", "body slam", "ice beam", "hydro pump" ],
        curve: 1,
        levels: [ 5, 15 ],
        probability: 4
    },
    "133": {
        name: "Eevee",
        attack: 55,
        defense: 50,
        type: "normal",
        moves: [ "tackle", "bite" ],
        curve: 1.6,
        levels: [ 5, 35 ],
        probability: 8
    },
    "135": {
        name: "Jolteon",
        attack: 65,
        defense: 60,
        type: "electric",
        moves: [ "tackle", "thundershock", "thunder" ],
        curve: 1.6,
        levels: [ 5, 15 ],
        probability: 4
    },
    "136": {
        name: "Flareon",
        attack: 130,
        defense: 60,
        type: "fire",
        moves: [ "flamethrower", "ember", "bite", "smog" ],
        curve: 1.6
    },
    "137": {
        name: "Porygon",
        attack: 60,
        defense: 70,
        type: "normal",
        moves: [ "tackle", "psybeam", "zap cannon" ],
        curve: 1.6,
        levels: [ 5, 45 ],
        probability: 4
    },
    "138": {
        name: "Omanyte",
        attack: 40,
        defense: 100,
        evolveLevel: 40,
        evolveTo: "139",
        type: "rock",
        moves: [ "constrict", "bite", "water gun", "mud shot" ],
        curve: 1.6
    },
    "139": {
        name: "Omastar",
        attack: 60,
        defense: 125,
        type: "rock",
        moves: [ "ancientpower", "hydro pump", "water gun", "mud shot" ],
        curve: 1.6
    },
    "140": {
        name: "Kabuto",
        attack: 80,
        defense: 90,
        evolveLevel: 40,
        evolveTo: "141",
        type: "rock",
        moves: [ "scratch", "mud shot" ],
        curve: 1.6
    },
    "141": {
        name: "Kabutops",
        attack: 115,
        defense: 105,
        type: "rock",
        moves: [ "scratch", "mud shot", "slash", "ancientpower" ],
        curve: 1.6
    },
    "142": {
        name: "Aerodactyl",
        attack: 105,
        defense: 65,
        type: "rock",
        moves: [ "wing attack", "bite", "ancientpower" ],
        curve: 1
    },
    "143": {
        name: "Snorlax",
        attack: 110,
        defense: 65,
        type: "normal",
        moves: [ "tackle", "headbutt", "snore", "body slam" ],
        curve: 1,
        levels: [ 25, 25 ],
        probability: 2
    },
    "144": {
        name: "Articuno",
        attack: 85,
        defense: 100,
        type: "ice",
        moves: [ "gust", "powder snow", "ice beam", "blizzard" ],
        curve: 1,
        levels: [ 50, 50 ],
        probability: 1
    },
    "145": {
        name: "Zapdos",
        attack: 90,
        defense: 85,
        type: "electric",
        moves: [ "peck", "thundershock", "drill peck", "thunder" ],
        curve: 1,
        levels: [ 50, 50 ],
        probability: 1
    },
    "146": {
        name: "Moltres",
        attack: 100,
        defense: 90,
        type: "fire",
        moves: [ "wing attack", "ember", "flamethrower", "heat wave" ],
        curve: 1,
        levels: [ 50, 50 ],
        probability: 1
    },
    "147": {
        name: "Dratini",
        attack: 64,
        defense: 45,
        evolveLevel: 30,
        evolveTo: "148",
        type: "dragon",
        moves: [ "twister", "slam" ],
        curve: 1,
        levels: [ 10, 20 ],
        probability: 6
    },
    "148": {
        name: "Dragonair",
        attack: 84,
        defense: 65,
        evolveLevel: 55,
        evolveTo: "149",
        type: "dragon",
        moves: [ "twister", "slam" ],
        curve: 1
    },
    "149": {
        name: "Dragonite",
        attack: 134,
        defense: 95,
        type: "dragon",
        moves: [ "twister", "slam", "wing attack" ],
        curve: 1
    },
    "150": {
        name: "Mewtwo",
        attack: 110,
        defense: 90,
        type: "psychic",
        moves: [ "confusion", "swift", "psychic" ],
        curve: 1,
        levels: [ 70, 70 ],
        probability: 1
    },
    "151": {
        name: "Mew",
        attack: 100,
        defense: 100,
        type: "psychic",
        moves: [ "pound", "mega punch", "psychic", "ancientpower" ],
        curve: 1.3,
        levels: [ 50, 50 ],
        probability: .3
    }
};

var TypeMultipliers = {
    ghost: {
        ghost: 2,
        steel: .5,
        psychic: 2,
        dark: .5,
        normal: 0
    },
    steel: {
        steel: .5,
        electric: .5,
        fire: .5,
        ice: 2,
        water: .5,
        rock: 2
    },
    ice: {
        steel: .5,
        fire: .5,
        flying: 2,
        ice: .5,
        dragon: 2,
        water: .5,
        grass: 2,
        ground: 2
    },
    electric: {
        electric: .5,
        flying: 2,
        dragon: .5,
        water: 2,
        grass: .5,
        ground: 0
    },
    normal: {
        ghost: 0,
        steel: .5,
        rock: .5
    },
    fire: {
        steel: 2,
        fire: .5,
        ice: 2,
        dragon: .5,
        water: .5,
        rock: .5,
        grass: 2,
        bug: 2
    },
    psychic: {
        steel: .5,
        dark: 0,
        psychic: .5,
        poison: 2,
        fighting: 2
    },
    flying: {
        steel: .5,
        electric: .5,
        fighting: 2,
        rock: .5,
        grass: 2,
        bug: 2
    },
    poison: {
        ghost: .5,
        steel: 0,
        poison: .5,
        rock: .5,
        grass: 2,
        ground: .5
    },
    dragon: {
        steel: .5,
        dragon: 2
    },
    water: {
        fire: 2,
        dragon: .5,
        water: .5,
        rock: 2,
        grass: .5,
        ground: 2
    },
    fighting: {
        ghost: 0,
        steel: 2,
        normal: 2,
        psychic: .5,
        flying: .5,
        poison: .5,
        dark: 2,
        ice: 2,
        rock: 2,
        bug: .5
    },
    rock: {
        steel: .5,
        fire: 2,
        flying: 2,
        fighting: .5,
        ice: 2,
        bug: 2,
        ground: .5
    },
    dark: {
        ghost: 2,
        steel: .5,
        psychic: 2,
        dark: .5,
        fighting: .5
    },
    grass: {
        steel: .5,
        fire: .5,
        flying: .5,
        poison: .5,
        dragon: .5,
        water: 2,
        rock: 2,
        grass: .5,
        bug: .5,
        ground: 2
    },
    bug: {
        ghost: .5,
        steel: .5,
        fire: .5,
        psychic: 2,
        flying: .5,
        poison: .5,
        dark: 2,
        fighting: .5,
        grass: 2
    },
    ground: {
        steel: 2,
        electric: 2,
        fire: 2,
        flying: 0,
        poison: 2,
        rock: 2,
        grass: .5,
        bug: .5
    }
};

(function(a) {
    var b = {
        "68": "rightKeyPressed",
        "65": "leftKeyPressed",
        "87": "upKeyPressed",
        "83": "downKeyPressed",
        "39": "rightKeyPressed",
        "37": "leftKeyPressed",
        "38": "upKeyPressed",
        "40": "downKeyPressed"
    };
    a.Controls = Backbone.Model.extend({
        initialize: function() {
            this.resetKeys();
            document.addEventListener("keydown", _.bind(this.keyDown, this), false);
            document.addEventListener("keyup", _.bind(this.keyUp, this), false);
        },
        resetKeys: function() {
            for (var a in b) {
                var c = b[a];
                this.set(c, false);
            }
        },
        pressed: function(a) {
            return this.get(a + "KeyPressed");
        },
        keyDown: function(a) {
            if (a.keyCode in b) {
                var c = b[a.keyCode];
                this.trigger("press:" + c.replace(/KeyPressed$/, ""), this);
                this.set(c, true);
            }
        },
        keyUp: function(a) {
            if (a.keyCode in b) {
                var c = b[a.keyCode];
                this.set(c, false);
            }
        }
    });
})(window);

var Map = Backbone.Model.extend({
    sprite: function(a, b) {
        return this._sprite(this.get("grid")[a][b]);
    },
    _sprite: function(a) {
        var b = this.get("sprite"), c = a % b.columns, d = Math.floor(a / b.columns);
        return {
            item: a,
            img: b.img,
            size: b.size,
            sx: Math.floor((b.size + b.gap) * c),
            sy: Math.floor((b.size + b.gap) * d)
        };
    },
    canMoveTo: function(a, b) {
        var c = this.get("whitelist"), d = this.get("grid");
        return d.length > b && d[b].length > a && _.contains(c, d[b][a]);
    },
    draw: function(a, b) {
        var c = this.get("grid");
        for (x = 0; x < c.length; x++) {
            for (y = 0; y < c[x].length; y++) {
                a.apply(b, [ x, y, this.sprite(x, y), this._sprite(184) ]);
            }
        }
    }
});

var Player = Backbone.Model.extend({
    defaults: {
        money: 0,
        gender: "MALE",
        name: "Unknown"
    },
    constructor: function() {
        this.pokemon = new Backbone.Collection();
        this.items = new Backbone.Collection();
        this.seen = new Backbone.Collection();
        this.badges = new Backbone.Collection();
        this.testPokemon = new Pokemon({
            number: 1,
            level: 4,
            health: 8,
            maxHealth: 13
        });
        Backbone.Model.apply(this, arguments);
    },
    fainted: function() {
        return false;
    },
    currentPokemon: function() {
        return this.testPokemon;
    }
});

var Pokemon = Backbone.Model.extend({
    defaults: function() {
        return {
            number: 0,
            level: 1,
            name: null,
            wild: true,
            experience: 0,
            health: 1,
            maxHealth: 1,
            attack: 1,
            defense: 1,
            specialAttack: 1,
            specialDefense: 1,
            speed: 1
        };
    },
    constructor: function() {
        this.moves = new Backbone.Collection();
        Backbone.Model.apply(this, arguments);
    },
    fainted: function() {
        return this.get("health") === 0;
    },
    percentAlive: function() {
        return this.get("health") / this.get("maxHealth") * 100;
    },
    name: function() {
        return this.get("name") || this.pokedex().name.toUpperCase();
    },
    pokedex: function() {
        return Pokedex[this.get("number")];
    }
});

var BattleControlsView = Backbone.View.extend({
    tagName: "div",
    className: "messages",
    events: {
        "click .back": "returnFromAlternative",
        "click .fight": "goToAlternative",
        "click .action": "doAction"
    },
    initialize: function() {},
    returnFromAlternative: function() {
        this.$(".control-wrapper").removeClass("alternate-controls-active");
        return false;
    },
    goToAlternative: function() {
        this.$(".control-wrapper").addClass("alternate-controls-active");
        return false;
    },
    doAction: function(a) {
        var b = $(a.currentTarget).data("action");
        return false;
    },
    render: function() {
        this.$el.html(JST["battle/controls"]({
            pokemon: this.model.currentPokemon()
        }));
        return this;
    }
});

var BattleOpponentView = Backbone.View.extend({
    tagName: "div",
    className: "opponent-wrapper slideInLeft",
    events: {},
    initialize: function() {},
    render: function() {
        this.$el.html(JST["battle/opponent"]({
            pokemon: new Pokemon({
                number: 34,
                level: 10,
                wild: true,
                health: 13,
                maxHealth: 13
            })
        }));
        return this;
    }
});

var BattlePlayerView = Backbone.View.extend({
    tagName: "div",
    className: "player-wrapper slideInRight",
    events: {},
    defaults: {
        x: 5,
        y: 5
    },
    initialize: function() {},
    render: function() {
        this.$el.html(JST["battle/player"]({
            pokemon: this.model.currentPokemon()
        }));
        return this;
    }
});