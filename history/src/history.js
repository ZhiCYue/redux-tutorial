import _extends from '@babel/runtime/helpers/esm/extends';

var Action,
    x = Action || (Action = {});
x.Pop = "POP";
x.Push = "PUSH";
x.Replace = "REPLACE";

var y = "production" !== process.env.NODE_ENV ? function (a) {
    return Object.freeze(a);
} : function (a) {
    return a;
};

function z(a, b) {
    if (!a) {
        "undefined" !== typeof console && console.warn(b);

        try {
            throw Error(b);
        } catch (g) { }
    }
}

function A(a) {
    a.preventDefault();
    a.returnValue = "";
}

function B() {
    var a = [];
    return {
        get length() {
            return a.length;
        },

        push: function (b) {
            a.push(b);
            return function () {
                a = a.filter(function (a) {
                    return a !== b;
                });
            };
        },
        call: function (b) {
            a.forEach(function (a) {
                return a && a(b);
            });
        }
    };
}

function D() {
    return Math.random().toString(36).substr(2, 8);
}

function createPath(a) {
    var b = a.pathname,
        g = a.search;
    a = a.hash;
    return (void 0 === b ? "/" : b) + (void 0 === g ? "" : g) + (void 0 === a ? "" : a);
}

function parsePath(a) {
    var b = {};

    if (a) {
        var g = a.indexOf("#");
        0 <= g && (b.hash = a.substr(g), a = a.substr(0, g));
        g = a.indexOf("?");
        0 <= g && (b.search = a.substr(g), a = a.substr(0, g));
        a && (b.pathname = a);
    }

    return b;
}

function createBrowserHistory(a) {
    function b() {
        var a = h.location,
            d = f.state || {};
        return [d.idx, y({
            pathname: a.pathname,
            search: a.search,
            hash: a.hash,
            state: d.usr || null,
            key: d.key || "default"
        })];
    }

    function g(a) {
        return "string" === typeof a ? a : createPath(a);
    }

    function t(a, d) {
        void 0 === d && (d = null);
        return y(_extends({}, l, {}, "string" === typeof a ? parsePath(a) : a, {
            state: d,
            key: D()
        }));
    }

    function v(a) {
        n = a;
        a = b();
        q = a[0];
        l = a[1];
        c.call({
            action: n,
            location: l
        });
    }

    function w(a, d) {
        function c() {
            w(a, d);
        }

        var k = Action.Push,
            C = t(a, d);

        if (!e.length || (e.call({
            action: k,
            location: C,
            retry: c
        }), !1)) {
            var b = [{
                usr: C.state,
                key: C.key,
                idx: q + 1
            }, g(C)];
            C = b[0];
            b = b[1];

            try {
                f.pushState(C, "", b);
            } catch (G) {
                h.location.assign(b);
            }

            v(k);
        }
    }

    function u(a, d) {
        function c() {
            u(a, d);
        }

        var b = Action.Replace,
            k = t(a, d);
        e.length && (e.call({
            action: b,
            location: k,
            retry: c
        }), 1) || (k = [{
            usr: k.state,
            key: k.key,
            idx: q
        }, g(k)], f.replaceState(k[0], "", k[1]), v(b));
    }

    function r(a) {
        f.go(a);
    }

    void 0 === a && (a = {});
    a = a.window;
    var h = void 0 === a ? document.defaultView : a,
        f = h.history,
        p = null;
    h.addEventListener("popstate", function () {
        if (p) e.call(p), p = null; else {
            var a = Action.Pop,
                d = b(),
                c = d[0];
            d = d[1];
            if (e.length) {
                if (null != c) {
                    var f = q - c;
                    f && (p = {
                        action: a,
                        location: d,
                        retry: function () {
                            r(-1 * f);
                        }
                    }, r(f));
                } else "production" !== process.env.NODE_ENV ? z(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.") : void 0;
            } else v(a);
        }
    });
    var n = Action.Pop;
    a = b();
    var q = a[0],
        l = a[1],
        c = B(),
        e = B();
    null == q && (q = 0, f.replaceState(_extends({}, f.state, {
        idx: q
    }), ""));
    return {
        get action() {
            return n;
        },

        get location() {
            return l;
        },

        createHref: g,
        push: w,
        replace: u,
        go: r,
        back: function () {
            r(-1);
        },
        forward: function () {
            r(1);
        },
        listen: function (a) {
            return c.push(a);
        },
        block: function (a) {
            var d = e.push(a);
            1 === e.length && h.addEventListener("beforeunload", A);
            return function () {
                d();
                e.length || h.removeEventListener("beforeunload", A);
            };
        }
    };
}

;

function createHashHistory(a) {
    function b() {
        var a = parsePath(f.location.hash.substr(1)),
            c = a.pathname,
            b = a.search;
        a = a.hash;
        var e = p.state || {};
        return [e.idx, y({
            pathname: void 0 === c ? "/" : c,
            search: void 0 === b ? "" : b,
            hash: void 0 === a ? "" : a,
            state: e.usr || null,
            key: e.key || "default"
        })];
    }

    function g() {
        if (n) k.call(n), n = null; else {
            var a = Action.Pop,
                c = b(),
                e = c[0];
            c = c[1];
            if (k.length) {
                if (null != e) {
                    var f = l - e;
                    f && (n = {
                        action: a,
                        location: c,
                        retry: function () {
                            h(-1 * f);
                        }
                    }, h(f));
                } else "production" !== process.env.NODE_ENV ? z(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.") : void 0;
            } else w(a);
        }
    }

    function t(a) {
        var d = document.querySelector("base"),
            c = "";
        d && d.getAttribute("href") && (d = f.location.href, c = d.indexOf("#"), c = -1 === c ? d : d.slice(0, c));
        return c + "#" + ("string" === typeof a ? a : createPath(a));
    }

    function v(a, b) {
        void 0 === b && (b = null);
        return y(_extends({}, c, {}, "string" === typeof a ? parsePath(a) : a, {
            state: b,
            key: D()
        }));
    }

    function w(a) {
        q = a;
        a = b();
        l = a[0];
        c = a[1];
        e.call({
            action: q,
            location: c
        });
    }

    function u(a, c) {
        function d() {
            u(a, c);
        }

        var b = Action.Push,
            e = v(a, c);
        "production" !== process.env.NODE_ENV ? z("/" === e.pathname.charAt(0), "Relative pathnames are not supported in hash history.push(" + JSON.stringify(a) + ")") : void 0;

        if (!k.length || (k.call({
            action: b,
            location: e,
            retry: d
        }), !1)) {
            var g = [{
                usr: e.state,
                key: e.key,
                idx: l + 1
            }, t(e)];
            e = g[0];
            g = g[1];

            try {
                p.pushState(e, "", g);
            } catch (H) {
                f.location.assign(g);
            }

            w(b);
        }
    }

    function r(a, c) {
        function d() {
            r(a, c);
        }

        var e = Action.Replace,
            b = v(a, c);
        "production" !== process.env.NODE_ENV ? z("/" === b.pathname.charAt(0), "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(a) + ")") : void 0;
        k.length && (k.call({
            action: e,
            location: b,
            retry: d
        }), 1) || (b = [{
            usr: b.state,
            key: b.key,
            idx: l
        }, t(b)], p.replaceState(b[0], "", b[1]), w(e));
    }

    function h(a) {
        p.go(a);
    }

    void 0 === a && (a = {});
    a = a.window;
    var f = void 0 === a ? document.defaultView : a,
        p = f.history,
        n = null;
    f.addEventListener("popstate", g);
    f.addEventListener("hashchange", function () {
        var a = b()[1];
        createPath(a) !== createPath(c) && g();
    });
    var q = Action.Pop;
    a = b();
    var l = a[0],
        c = a[1],
        e = B(),
        k = B();
    null == l && (l = 0, p.replaceState(_extends({}, p.state, {
        idx: l
    }), ""));
    return {
        get action() {
            return q;
        },

        get location() {
            return c;
        },

        createHref: t,
        push: u,
        replace: r,
        go: h,
        back: function () {
            h(-1);
        },
        forward: function () {
            h(1);
        },
        listen: function (a) {
            return e.push(a);
        },
        block: function (a) {
            var c = k.push(a);
            1 === k.length && f.addEventListener("beforeunload", A);
            return function () {
                c();
                k.length || f.removeEventListener("beforeunload", A);
            };
        }
    };
}

;

function createMemoryHistory(a) {
    function b(a, b) {
        void 0 === b && (b = null);
        return y(_extends({}, n, {}, "string" === typeof a ? parsePath(a) : a, {
            state: b,
            key: D()
        }));
    }

    function g(a, b, f) {
        return !l.length || (l.call({
            action: a,
            location: b,
            retry: f
        }), !1);
    }

    function t(a, b) {
        p = a;
        n = b;
        q.call({
            action: p,
            location: n
        });
    }

    function v(a, e) {
        var c = Action.Push,
            d = b(a, e);
        "production" !== process.env.NODE_ENV ? z("/" === n.pathname.charAt(0), "Relative pathnames are not supported in memory history.push(" + JSON.stringify(a) + ")") : void 0;
        g(c, d, function () {
            v(a, e);
        }) && (f += 1, h.splice(f, h.length, d), t(c, d));
    }

    function w(a, e) {
        var c = m.Replace,
            d = b(a, e);
        "production" !== process.env.NODE_ENV ? z("/" === n.pathname.charAt(0), "Relative pathnames are not supported in Actionemory history.replace(" + JSON.stringify(a) + ")") : void 0;
        g(c, d, function () {
            w(a, e);
        }) && (h[f] = d, t(c, d));
    }

    function u(a) {
        var b = Math.min(Math.max(f + a, 0), h.length - 1),
            c = Action.Pop,
            d = h[b];
        g(c, d, function () {
            u(a);
        }) && (f = b, t(c, d));
    }

    void 0 === a && (a = {});
    var r = a;
    a = r.initialEntries;
    r = r.initialIndex;
    var h = (void 0 === a ? ["/"] : a).map(function (a) {
        var b = y(_extends({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: D()
        }, "string" === typeof a ? parsePath(a) : a));
        "production" !== process.env.NODE_ENV ? z("/" === b.pathname.charAt(0), "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(a) + ")") : void 0;
        return b;
    }),
        f = Math.min(Math.max(null == r ? h.length - 1 : r, 0), h.length - 1),
        p = Action.Pop,
        n = h[f],
        q = B(),
        l = B();
    return {
        get index() {
            return f;
        },

        get action() {
            return p;
        },

        get location() {
            return n;
        },

        createHref: function (a) {
            return "string" === typeof a ? a : createPath(a);
        },
        push: v,
        replace: w,
        go: u,
        back: function () {
            u(-1);
        },
        forward: function () {
            u(1);
        },
        listen: function (a) {
            return q.push(a);
        },
        block: function (a) {
            return l.push(a);
        }
    };
};

export {
    Action,
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory,
    createPath,
    parsePath
};