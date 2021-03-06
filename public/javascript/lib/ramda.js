//  Ramda v0.21.0
//  https://github.com/ramda/ramda
//  (c) 2013-2016 Scott Sauyet, Michael Hurley, and David Chambers
//  Ramda may be freely distributed under the MIT license.

(function () {
    "use strict";
    var t = {"@@functional/placeholder": !0}, n = function (t, n) {
        switch (t) {
            case 0:
                return function () {
                    return n.apply(this, arguments)
                };
            case 1:
                return function (t) {
                    return n.apply(this, arguments)
                };
            case 2:
                return function (t, r) {
                    return n.apply(this, arguments)
                };
            case 3:
                return function (t, r, e) {
                    return n.apply(this, arguments)
                };
            case 4:
                return function (t, r, e, u) {
                    return n.apply(this, arguments)
                };
            case 5:
                return function (t, r, e, u, i) {
                    return n.apply(this, arguments)
                };
            case 6:
                return function (t, r, e, u, i, o) {
                    return n.apply(this, arguments)
                };
            case 7:
                return function (t, r, e, u, i, o, c) {
                    return n.apply(this, arguments)
                };
            case 8:
                return function (t, r, e, u, i, o, c, s) {
                    return n.apply(this, arguments)
                };
            case 9:
                return function (t, r, e, u, i, o, c, s, a) {
                    return n.apply(this, arguments)
                };
            case 10:
                return function (t, r, e, u, i, o, c, s, a, f) {
                    return n.apply(this, arguments)
                };
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
        }
    }, r = function (t) {
        for (var n, r = []; !(n = t.next()).done;)r.push(n.value);
        return r
    }, e = function () {
        return Array.prototype.slice.call(arguments)
    }, u = function (t) {
        return new RegExp(t.source, (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : ""))
    }, i = function (t) {
        return function () {
            return !t.apply(this, arguments)
        }
    }, o = function (t, n) {
        t = t || [], n = n || [];
        var r, e = t.length, u = n.length, i = [];
        for (r = 0; e > r;)i[i.length] = t[r], r += 1;
        for (r = 0; u > r;)i[i.length] = n[r], r += 1;
        return i
    }, c = function (t, n, r) {
        for (var e = 0, u = r.length; u > e;) {
            if (t(n, r[e]))return !0;
            e += 1
        }
        return !1
    }, s = function (t, n) {
        for (var r = 0, e = n.length, u = []; e > r;)t(n[r]) && (u[u.length] = n[r]), r += 1;
        return u
    }, a = function (t) {
        return {"@@transducer/value": t, "@@transducer/reduced": !0}
    }, f = function (t) {
        var n = String(t).match(/^function (\w*)/);
        return null == n ? "" : n[1]
    }, l = function (t, n) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, p = function (t) {
        return t
    }, h = function () {
        var t = Object.prototype.toString;
        return "[object Arguments]" === t.call(arguments) ? function (n) {
            return "[object Arguments]" === t.call(n)
        } : function (t) {
            return l("callee", t)
        }
    }(), g = Array.isArray || function (t) {
            return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t)
        }, d = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }, y = Number.isInteger || function (t) {
            return t << 0 === t
        }, m = function (t) {
        return "[object Number]" === Object.prototype.toString.call(t)
    }, v = function (t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }, b = function (t) {
        return null != t && "object" == typeof t && t["@@functional/placeholder"] === !0
    }, w = function (t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }, x = function (t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }, j = function (t) {
        return "function" == typeof t["@@transducer/step"]
    }, O = function (t, n) {
        for (var r = 0, e = n.length, u = Array(e); e > r;)u[r] = t(n[r]), r += 1;
        return u
    }, S = function (t) {
        if (null == t)throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), r = 1, e = arguments.length; e > r;) {
            var u = arguments[r];
            if (null != u)for (var i in u)l(i, u) && (n[i] = u[i]);
            r += 1
        }
        return n
    }, A = function (t) {
        return [t]
    }, _ = function (t, n) {
        return function () {
            return n.call(this, t.apply(this, arguments))
        }
    }, E = function (t, n) {
        return function () {
            var r = this;
            return t.apply(r, arguments).then(function (t) {
                return n.call(r, t)
            })
        }
    }, N = function (t) {
        var n = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        return '"' + n.replace(/"/g, '\\"') + '"'
    }, k = function (t) {
        return t && t["@@transducer/reduced"] ? t : {"@@transducer/value": t, "@@transducer/reduced": !0}
    }, I = function Uu(t, n, r) {
        switch (arguments.length) {
            case 1:
                return Uu(t, 0, t.length);
            case 2:
                return Uu(t, n, t.length);
            default:
                for (var e = [], u = 0, i = Math.max(0, Math.min(t.length, r) - n); i > u;)e[u] = t[n + u], u += 1;
                return e
        }
    }, q = function () {
        var t = function (t) {
            return (10 > t ? "0" : "") + t
        };
        return "function" == typeof Date.prototype.toISOString ? function (t) {
            return t.toISOString()
        } : function (n) {
            return n.getUTCFullYear() + "-" + t(n.getUTCMonth() + 1) + "-" + t(n.getUTCDate()) + "T" + t(n.getUTCHours()) + ":" + t(n.getUTCMinutes()) + ":" + t(n.getUTCSeconds()) + "." + (n.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
    }(), W = {
        init: function () {
            return this.xf["@@transducer/init"]()
        }, result: function (t) {
            return this.xf["@@transducer/result"](t)
        }
    }, C = function () {
        function t(t) {
            this.f = t
        }

        return t.prototype["@@transducer/init"] = function () {
            throw new Error("init not implemented on XWrap")
        }, t.prototype["@@transducer/result"] = function (t) {
            return t
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(t, n)
        }, function (n) {
            return new t(n)
        }
    }(), P = function (t, n) {
        for (var r = 0, e = n.length - (t - 1), u = new Array(e >= 0 ? e : 0); e > r;)u[r] = I(n, r, r + t), r += 1;
        return u
    }, B = "function" == typeof Object.assign ? Object.assign : S, M = function (t, n) {
        return function () {
            var r = arguments.length;
            if (0 === r)return n();
            var e = arguments[r - 1];
            return g(e) || "function" != typeof e[t] ? n.apply(this, arguments) : e[t].apply(e, I(arguments, 0, r - 1))
        }
    }, R = function (t) {
        return function n(r) {
            return 0 === arguments.length || b(r) ? n : t.apply(this, arguments)
        }
    }, T = function (t) {
        return function n(r, e) {
            switch (arguments.length) {
                case 0:
                    return n;
                case 1:
                    return b(r) ? n : R(function (n) {
                        return t(r, n)
                    });
                default:
                    return b(r) && b(e) ? n : b(r) ? R(function (n) {
                        return t(n, e)
                    }) : b(e) ? R(function (n) {
                        return t(r, n)
                    }) : t(r, e)
            }
        }
    }, U = function (t) {
        return function n(r, e, u) {
            switch (arguments.length) {
                case 0:
                    return n;
                case 1:
                    return b(r) ? n : T(function (n, e) {
                        return t(r, n, e)
                    });
                case 2:
                    return b(r) && b(e) ? n : b(r) ? T(function (n, r) {
                        return t(n, e, r)
                    }) : b(e) ? T(function (n, e) {
                        return t(r, n, e)
                    }) : R(function (n) {
                        return t(r, e, n)
                    });
                default:
                    return b(r) && b(e) && b(u) ? n : b(r) && b(e) ? T(function (n, r) {
                        return t(n, r, u)
                    }) : b(r) && b(u) ? T(function (n, r) {
                        return t(n, e, r)
                    }) : b(e) && b(u) ? T(function (n, e) {
                        return t(r, n, e)
                    }) : b(r) ? R(function (n) {
                        return t(n, e, u)
                    }) : b(e) ? R(function (n) {
                        return t(r, n, u)
                    }) : b(u) ? R(function (n) {
                        return t(r, e, n)
                    }) : t(r, e, u)
            }
        }
    }, F = function Fu(t, r, e) {
        return function () {
            for (var u = [], i = 0, o = t, c = 0; c < r.length || i < arguments.length;) {
                var s;
                c < r.length && (!b(r[c]) || i >= arguments.length) ? s = r[c] : (s = arguments[i], i += 1), u[c] = s, b(s) || (o -= 1), c += 1
            }
            return 0 >= o ? e.apply(this, u) : n(o, Fu(t, u, e))
        }
    }, L = function (t, n, r) {
        return function () {
            var e = arguments.length;
            if (0 === e)return r();
            var u = arguments[e - 1];
            if (!g(u)) {
                var i = I(arguments, 0, e - 1);
                if ("function" == typeof u[t])return u[t].apply(u, i);
                if (j(u)) {
                    var o = n.apply(null, i);
                    return o(u)
                }
            }
            return r.apply(this, arguments)
        }
    }, D = function (t, n) {
        for (var r = n.length - 1; r >= 0 && t(n[r]);)r -= 1;
        return I(n, 0, r + 1)
    }, z = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.all = !0
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) || (this.all = !1, t = k(this.xf["@@transducer/step"](t, !1))), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), V = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.any = !1
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.any || (t = this.xf["@@transducer/step"](t, !1)), this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) && (this.any = !0, t = k(this.xf["@@transducer/step"](t, !0))), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), K = function () {
        function t(t, n) {
            this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(t)
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.acc = null, this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.store(n), this.full ? this.xf["@@transducer/step"](t, this.getCopy()) : t
        }, t.prototype.store = function (t) {
            this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, t.prototype.getCopy = function () {
            return o(I(this.acc, this.pos), I(this.acc, 0, this.pos))
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), $ = function () {
        function t(t, n) {
            this.xf = n, this.n = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            return this.n > 0 ? (this.n -= 1, t) : this.xf["@@transducer/step"](t, n)
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), H = function () {
        function t(t, n) {
            this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(t)
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.acc = null, this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.full && (t = this.xf["@@transducer/step"](t, this.acc[this.pos])), this.store(n), t
        }, t.prototype.store = function (t) {
            this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), X = function () {
        function t(t, n) {
            this.xf = n, this.pred = t, this.lastValue = void 0, this.seenFirstValue = !1
        }

        return t.prototype["@@transducer/init"] = function () {
            return this.xf["@@transducer/init"]()
        }, t.prototype["@@transducer/result"] = function (t) {
            return this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            var r = !1;
            return this.seenFirstValue ? this.pred(this.lastValue, n) && (r = !0) : this.seenFirstValue = !0, this.lastValue = n, r ? t : this.xf["@@transducer/step"](t, n)
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), Y = function () {
        function t(t, n) {
            this.xf = n, this.f = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            if (this.f) {
                if (this.f(n))return t;
                this.f = null
            }
            return this.xf["@@transducer/step"](t, n)
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), Z = function () {
        function t(t, n) {
            this.xf = n, this.f = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) ? this.xf["@@transducer/step"](t, n) : t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), G = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.found = !1
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.found || (t = this.xf["@@transducer/step"](t, void 0)), this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) && (this.found = !0, t = k(this.xf["@@transducer/step"](t, n))), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), J = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.idx = -1, this.found = !1
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.found || (t = this.xf["@@transducer/step"](t, -1)), this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.idx += 1, this.f(n) && (this.found = !0, t = k(this.xf["@@transducer/step"](t, this.idx))), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), Q = function () {
        function t(t, n) {
            this.xf = n, this.f = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.last))
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) && (this.last = n), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), tt = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.idx = -1, this.lastIdx = -1
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.lastIdx))
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), nt = function () {
        function t(t, n) {
            this.xf = n, this.f = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            return this.xf["@@transducer/step"](t, this.f(n))
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), rt = function () {
        function t(t, n) {
            this.xf = n, this.n = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            return 0 === this.n ? k(t) : (this.n -= 1, this.xf["@@transducer/step"](t, n))
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), et = function () {
        function t(t, n) {
            this.xf = n, this.f = t
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = W.result, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) ? this.xf["@@transducer/step"](t, n) : k(t)
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), ut = T(function (t, n) {
        return Number(t) + Number(n)
    }), it = U(function (t, n, r) {
        if (n >= r.length || n < -r.length)return r;
        var e = 0 > n ? r.length : 0, u = e + n, i = o(r);
        return i[u] = t(r[u]), i
    }), ot = T(L("all", z, function (t, n) {
        for (var r = 0; r < n.length;) {
            if (!t(n[r]))return !1;
            r += 1
        }
        return !0
    })), ct = R(function (t) {
        return function () {
            return t
        }
    }), st = T(function (t, n) {
        return t && n
    }), at = T(L("any", V, function (t, n) {
        for (var r = 0; r < n.length;) {
            if (t(n[r]))return !0;
            r += 1
        }
        return !1
    })), ft = T(L("aperture", K, P)), lt = T(function (t, n) {
        return o(n, [t])
    }), pt = T(function (t, n) {
        return t.apply(this, n)
    }), ht = U(function (t, n, r) {
        var e = {};
        for (var u in r)e[u] = r[u];
        return e[t] = n, e
    }), gt = U(function Lu(t, n, r) {
        switch (t.length) {
            case 0:
                return n;
            case 1:
                return ht(t[0], n, r);
            default:
                return ht(t[0], Lu(I(t, 1), n, Object(r[t[0]])), r)
        }
    }), dt = T(function (t, r) {
        return n(t.length, function () {
            return t.apply(r, arguments)
        })
    }), yt = U(function (t, n, r) {
        if (t > n)throw new Error("min must not be greater than max in clamp(min, max, value)");
        return t > r ? t : r > n ? n : r
    }), mt = R(function (t) {
        return function (n, r) {
            return t(n, r) ? -1 : t(r, n) ? 1 : 0
        }
    }), vt = T(function (t, r) {
        return 1 === t ? R(r) : n(t, F(t, [], r))
    }), bt = ut(-1), wt = T(function (t, n) {
        return null == n || n !== n ? t : n
    }), xt = U(function (t, n, r) {
        for (var e = [], u = 0, i = n.length; i > u;)c(t, n[u], r) || c(t, n[u], e) || e.push(n[u]), u += 1;
        return e
    }), jt = T(function (t, n) {
        var r = {};
        for (var e in n)e !== t && (r[e] = n[e]);
        return r
    }), Ot = T(function Du(t, n) {
        switch (t.length) {
            case 0:
                return n;
            case 1:
                return jt(t[0], n);
            default:
                var r = t[0], e = I(t, 1);
                return null == n[r] ? n : ht(r, Du(e, n[r]), n)
        }
    }), St = T(function (t, n) {
        return t / n
    }), At = T(L("dropWhile", Y, function (t, n) {
        for (var r = 0, e = n.length; e > r && t(n[r]);)r += 1;
        return I(n, r)
    })), _t = R(function (t) {
        return null != t && "function" == typeof t.empty ? t.empty() : null != t && null != t.constructor && "function" == typeof t.constructor.empty ? t.constructor.empty() : g(t) ? [] : x(t) ? "" : v(t) ? {} : h(t) ? function () {
            return arguments
        }() : void 0
    }), Et = T(function zu(t, n) {
        var r, e, u, i = {};
        for (e in n)r = t[e], u = typeof r, i[e] = "function" === u ? r(n[e]) : "object" === u ? zu(t[e], n[e]) : n[e];
        return i
    }), Nt = T(L("find", G, function (t, n) {
        for (var r = 0, e = n.length; e > r;) {
            if (t(n[r]))return n[r];
            r += 1
        }
    })), kt = T(L("findIndex", J, function (t, n) {
        for (var r = 0, e = n.length; e > r;) {
            if (t(n[r]))return r;
            r += 1
        }
        return -1
    })), It = T(L("findLast", Q, function (t, n) {
        for (var r = n.length - 1; r >= 0;) {
            if (t(n[r]))return n[r];
            r -= 1
        }
    })), qt = T(L("findLastIndex", tt, function (t, n) {
        for (var r = n.length - 1; r >= 0;) {
            if (t(n[r]))return r;
            r -= 1
        }
        return -1
    })), Wt = T(M("forEach", function (t, n) {
        for (var r = n.length, e = 0; r > e;)t(n[e]), e += 1;
        return n
    })), Ct = R(function (t) {
        for (var n = 0, r = t.length, e = {}; r > n;)g(t[n]) && t[n].length && (e[t[n][0]] = t[n][1]), n += 1;
        return e
    }), Pt = T(function (t, n) {
        for (var r = [], e = 0, u = n.length; u > e;) {
            for (var i = e + 1; u > i && t(n[e], n[i]);)i += 1;
            r.push(n.slice(e, i)), e = i
        }
        return r
    }), Bt = T(function (t, n) {
        return t > n
    }), Mt = T(function (t, n) {
        return t >= n
    }), Rt = T(l), Tt = T(function (t, n) {
        return t in n
    }), Ut = T(function (t, n) {
        return t === n ? 0 !== t || 1 / t === 1 / n : t !== t && n !== n
    }), Ft = R(p), Lt = U(function (t, n, r) {
        return vt(Math.max(t.length, n.length, r.length), function () {
            return t.apply(this, arguments) ? n.apply(this, arguments) : r.apply(this, arguments)
        })
    }), Dt = ut(1), zt = U(function (t, n, r) {
        t = t < r.length && t >= 0 ? t : r.length;
        var e = I(r);
        return e.splice(t, 0, n), e
    }), Vt = U(function (t, n, r) {
        return t = t < r.length && t >= 0 ? t : r.length, o(o(I(r, 0, t), n), I(r, t))
    }), Kt = T(M("intersperse", function (t, n) {
        for (var r = [], e = 0, u = n.length; u > e;)e === u - 1 ? r.push(n[e]) : r.push(n[e], t), e += 1;
        return r
    })), $t = T(function (t, n) {
        return null != n && n.constructor === t || n instanceof t
    }), Ht = R(function (t) {
        return g(t) ? !0 : t ? "object" != typeof t ? !1 : t instanceof String ? !1 : 1 === t.nodeType ? !!t.length : 0 === t.length ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1 : !1
    }), Xt = R(function (t) {
        return null == t
    }), Yt = function () {
        var t = !{toString: null}.propertyIsEnumerable("toString"), n = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], r = function () {
            return arguments.propertyIsEnumerable("length")
        }(), e = function (t, n) {
            for (var r = 0; r < t.length;) {
                if (t[r] === n)return !0;
                r += 1
            }
            return !1
        };
        return R("function" != typeof Object.keys || r ? function (u) {
            if (Object(u) !== u)return [];
            var i, o, c = [], s = r && h(u);
            for (i in u)!l(i, u) || s && "length" === i || (c[c.length] = i);
            if (t)for (o = n.length - 1; o >= 0;)i = n[o], l(i, u) && !e(c, i) && (c[c.length] = i), o -= 1;
            return c
        } : function (t) {
            return Object(t) !== t ? [] : Object.keys(t)
        })
    }(), Zt = R(function (t) {
        var n, r = [];
        for (n in t)r[r.length] = n;
        return r
    }), Gt = R(function (t) {
        return null != t && $t(Number, t.length) ? t.length : NaN
    }), Jt = T(function (t, n) {
        return n > t
    }), Qt = T(function (t, n) {
        return n >= t
    }), tn = U(function (t, n, r) {
        for (var e = 0, u = r.length, i = [], o = [n]; u > e;)o = t(o[0], r[e]), i[e] = o[1], e += 1;
        return [o[0], i]
    }), nn = U(function (t, n, r) {
        for (var e = r.length - 1, u = [], i = [n]; e >= 0;)i = t(i[0], r[e]), u[e] = i[1], e -= 1;
        return [i[0], u]
    }), rn = T(function (t, n) {
        return n.match(t) || []
    }), en = T(function (t, n) {
        return y(t) ? !y(n) || 1 > n ? NaN : (t % n + n) % n : NaN
    }), un = T(function (t, n) {
        return n > t ? n : t
    }), on = U(function (t, n, r) {
        return t(r) > t(n) ? r : n
    }), cn = T(function (t, n) {
        return B({}, t, n)
    }), sn = R(function (t) {
        return B.apply(null, [{}].concat(t))
    }), an = U(function (t, n, r) {
        var e, u = {};
        for (e in n)l(e, n) && (u[e] = l(e, r) ? t(e, n[e], r[e]) : n[e]);
        for (e in r)l(e, r) && !l(e, u) && (u[e] = r[e]);
        return u
    }), fn = T(function (t, n) {
        return t > n ? n : t
    }), ln = U(function (t, n, r) {
        return t(r) < t(n) ? r : n
    }), pn = T(function (t, n) {
        return t % n
    }), hn = T(function (t, n) {
        return t * n
    }), gn = T(function (t, n) {
        switch (t) {
            case 0:
                return function () {
                    return n.call(this)
                };
            case 1:
                return function (t) {
                    return n.call(this, t)
                };
            case 2:
                return function (t, r) {
                    return n.call(this, t, r)
                };
            case 3:
                return function (t, r, e) {
                    return n.call(this, t, r, e)
                };
            case 4:
                return function (t, r, e, u) {
                    return n.call(this, t, r, e, u)
                };
            case 5:
                return function (t, r, e, u, i) {
                    return n.call(this, t, r, e, u, i)
                };
            case 6:
                return function (t, r, e, u, i, o) {
                    return n.call(this, t, r, e, u, i, o)
                };
            case 7:
                return function (t, r, e, u, i, o, c) {
                    return n.call(this, t, r, e, u, i, o, c)
                };
            case 8:
                return function (t, r, e, u, i, o, c, s) {
                    return n.call(this, t, r, e, u, i, o, c, s)
                };
            case 9:
                return function (t, r, e, u, i, o, c, s, a) {
                    return n.call(this, t, r, e, u, i, o, c, s, a)
                };
            case 10:
                return function (t, r, e, u, i, o, c, s, a, f) {
                    return n.call(this, t, r, e, u, i, o, c, s, a, f)
                };
            default:
                throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
        }
    }), dn = R(function (t) {
        return -t
    }), yn = T(i(L("any", V, at))), mn = R(function (t) {
        return !t
    }), vn = T(function (t, n) {
        var r = 0 > t ? n.length + t : t;
        return x(n) ? n.charAt(r) : n[r]
    }), bn = R(function (t) {
        return function () {
            return vn(t, arguments)
        }
    }), wn = T(function (t, n) {
        var r = {};
        return r[t] = n, r
    }), xn = R(A), jn = R(function (t) {
        var r, e = !1;
        return n(t.length, function () {
            return e ? r : (e = !0, r = t.apply(this, arguments))
        })
    }), On = T(function (t, n) {
        return t || n
    }), Sn = function () {
        var t = function (n) {
            return {
                value: n, map: function (r) {
                    return t(r(n))
                }
            }
        };
        return U(function (n, r, e) {
            return n(function (n) {
                return t(r(n))
            })(e).value
        })
    }(), An = T(function (t, n) {
        return [t, n]
    }), _n = T(function (t, n) {
        for (var r = n, e = 0; e < t.length;) {
            if (null == r)return;
            r = r[t[e]], e += 1
        }
        return r
    }), En = U(function (t, n, r) {
        return wt(t, _n(n, r))
    }), Nn = U(function (t, n, r) {
        return n.length > 0 && t(_n(n, r))
    }), kn = T(function (t, n) {
        for (var r = {}, e = 0; e < t.length;)t[e] in n && (r[t[e]] = n[t[e]]), e += 1;
        return r
    }), In = T(function (t, n) {
        for (var r = {}, e = 0, u = t.length; u > e;) {
            var i = t[e];
            r[i] = n[i], e += 1
        }
        return r
    }), qn = T(function (t, n) {
        var r = {};
        for (var e in n)t(n[e], e, n) && (r[e] = n[e]);
        return r
    }), Wn = T(function (t, n) {
        return o([t], n)
    }), Cn = T(function (t, n) {
        return n[t]
    }), Pn = U(function (t, n, r) {
        return null != r && l(n, r) ? r[n] : t
    }), Bn = U(function (t, n, r) {
        return t(r[n])
    }), Mn = T(function (t, n) {
        for (var r = t.length, e = [], u = 0; r > u;)e[u] = n[t[u]], u += 1;
        return e
    }), Rn = T(function (t, n) {
        if (!m(t) || !m(n))throw new TypeError("Both arguments to range must be numbers");
        for (var r = [], e = t; n > e;)r.push(e), e += 1;
        return r
    }), Tn = U(function (t, n, r) {
        for (var e = r.length - 1; e >= 0;)n = t(n, r[e]), e -= 1;
        return n
    }), Un = R(k), Fn = U(function (t, n, r) {
        return o(I(r, 0, Math.min(t, r.length)), I(r, Math.min(r.length, t + n)))
    }), Ln = U(function (t, n, r) {
        return r.replace(t, n)
    }), Dn = R(function (t) {
        return x(t) ? t.split("").reverse().join("") : I(t).reverse()
    }), zn = U(function (t, n, r) {
        for (var e = 0, u = r.length, i = [n]; u > e;)n = t(n, r[e]), i[e + 1] = n, e += 1;
        return i
    }), Vn = U(function (t, n, r) {
        return Sn(t, ct(n), r)
    }), Kn = U(M("slice", function (t, n, r) {
        return Array.prototype.slice.call(r, t, n)
    })), $n = T(function (t, n) {
        return I(n).sort(t)
    }), Hn = T(function (t, n) {
        return I(n).sort(function (n, r) {
            var e = t(n), u = t(r);
            return u > e ? -1 : e > u ? 1 : 0
        })
    }), Xn = T(function (t, n) {
        return [Kn(0, t, n), Kn(t, Gt(n), n)]
    }), Yn = T(function (t, n) {
        if (0 >= t)throw new Error("First argument to splitEvery must be a positive integer");
        for (var r = [], e = 0; e < n.length;)r.push(Kn(e, e += t, n));
        return r
    }), Zn = T(function (t, n) {
        for (var r = 0, e = n.length, u = []; e > r && !t(n[r]);)u.push(n[r]), r += 1;
        return [u, I(n, r)]
    }), Gn = T(function (t, n) {
        return Number(t) - Number(n)
    }), Jn = M("tail", Kn(1, 1 / 0)), Qn = T(L("take", rt, function (t, n) {
        return Kn(0, 0 > t ? 1 / 0 : t, n)
    })), tr = T(function (t, n) {
        for (var r = n.length - 1; r >= 0 && t(n[r]);)r -= 1;
        return I(n, r + 1, 1 / 0)
    }), nr = T(L("takeWhile", et, function (t, n) {
        for (var r = 0, e = n.length; e > r && t(n[r]);)r += 1;
        return I(n, 0, r)
    })), rr = T(function (t, n) {
        return t(n), n
    }), er = T(function (t, n) {
        var r, e = Number(n), u = 0;
        if (0 > e || isNaN(e))throw new RangeError("n must be a non-negative number");
        for (r = new Array(e); e > u;)r[u] = t(u), u += 1;
        return r
    }), ur = R(function (t) {
        var n = [];
        for (var r in t)l(r, t) && (n[n.length] = [r, t[r]]);
        return n
    }), ir = R(function (t) {
        var n = [];
        for (var r in t)n[n.length] = [r, t[r]];
        return n
    }), or = R(function (t) {
        for (var n = 0, r = []; n < t.length;) {
            for (var e = t[n], u = 0; u < e.length;)"undefined" == typeof r[u] && (r[u] = []), r[u].push(e[u]), u += 1;
            n += 1
        }
        return r
    }), cr = function () {
        var t = "	\n\f\r   ᠎             　\u2028\u2029\ufeff", n = "​", r = "function" == typeof String.prototype.trim;
        return R(r && !t.trim() && n.trim() ? function (t) {
            return t.trim()
        } : function (n) {
            var r = new RegExp("^[" + t + "][" + t + "]*"), e = new RegExp("[" + t + "][" + t + "]*$");
            return n.replace(r, "").replace(e, "")
        })
    }(), sr = T(function (t, r) {
        return n(t.length, function () {
            try {
                return t.apply(this, arguments)
            } catch (n) {
                return r.apply(this, o([n], arguments))
            }
        })
    }), ar = R(function (t) {
        return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
    }), fr = R(function (t) {
        return function () {
            return t(I(arguments))
        }
    }), lr = R(function (t) {
        return gn(1, t)
    }), pr = T(function (t, n) {
        return vt(t, function () {
            for (var r, e = 1, u = n, i = 0; t >= e && "function" == typeof u;)r = e === t ? arguments.length : i + u.length, u = u.apply(this, I(arguments, i, r)), e += 1, i = r;
            return u
        })
    }), hr = T(function (t, n) {
        for (var r = t(n), e = []; r && r.length;)e[e.length] = r[0], r = t(r[1]);
        return e
    }), gr = T(function (t, n) {
        for (var r, e = 0, u = n.length, i = []; u > e;)r = n[e], c(t, r, i) || (i[i.length] = r), e += 1;
        return i
    }), dr = U(function (t, n, r) {
        return t(r) ? r : n(r)
    }), yr = U(function (t, n, r) {
        for (var e = r; !t(e);)e = n(e);
        return e
    }), mr = U(function (t, n, r) {
        return it(ct(n), t, r)
    }), vr = T(function (t, n) {
        return vt(n.length, function () {
            for (var r = [], e = 0; e < n.length;)r.push(n[e].call(this, arguments[e])), e += 1;
            return t.apply(this, r.concat(I(arguments, n.length)))
        })
    }), br = R(function (t) {
        for (var n = Yt(t), r = n.length, e = [], u = 0; r > u;)e[u] = t[n[u]], u += 1;
        return e
    }), wr = R(function (t) {
        var n, r = [];
        for (n in t)r[r.length] = t[n];
        return r
    }), xr = function () {
        var t = function (t) {
            return {
                value: t, map: function () {
                    return this
                }
            }
        };
        return T(function (n, r) {
            return n(t)(r).value
        })
    }(), jr = U(function (t, n, r) {
        return t(r) ? n(r) : r
    }), Or = T(function (t, n) {
        for (var r in t)if (l(r, t) && !t[r](n[r]))return !1;
        return !0
    }), Sr = T(function (t, n) {
        return vt(t.length, function () {
            return n.apply(this, o([t], arguments))
        })
    }), Ar = T(function (t, n) {
        for (var r, e = 0, u = t.length, i = n.length, o = []; u > e;) {
            for (r = 0; i > r;)o[o.length] = [t[e], n[r]], r += 1;
            e += 1
        }
        return o
    }), _r = T(function (t, n) {
        for (var r = [], e = 0, u = Math.min(t.length, n.length); u > e;)r[e] = [t[e], n[e]], e += 1;
        return r
    }), Er = T(function (t, n) {
        for (var r = 0, e = Math.min(t.length, n.length), u = {}; e > r;)u[t[r]] = n[r], r += 1;
        return u
    }), Nr = U(function (t, n, r) {
        for (var e = [], u = 0, i = Math.min(n.length, r.length); i > u;)e[u] = t(n[u], r[u]), u += 1;
        return e
    }), kr = ct(!1), Ir = ct(!0), qr = function Vu(t, n, r, e) {
        var i = function (u) {
            for (var i = n.length, o = 0; i > o;) {
                if (t === n[o])return r[o];
                o += 1
            }
            n[o + 1] = t, r[o + 1] = u;
            for (var c in t)u[c] = e ? Vu(t[c], n, r, !0) : t[c];
            return u
        };
        switch (ar(t)) {
            case"Object":
                return i({});
            case"Array":
                return i([]);
            case"Date":
                return new Date(t.valueOf());
            case"RegExp":
                return u(t);
            default:
                return t
        }
    }, Wr = function (t) {
        return T(function (r, e) {
            return n(Math.max(0, r.length - e.length), function () {
                return r.apply(this, t(e, arguments))
            })
        })
    }, Cr = function (t, n) {
        return Qn(t < n.length ? n.length - t : 0, n)
    }, Pr = function Ku(t, n, e, u) {
        if (Ut(t, n))return !0;
        if (ar(t) !== ar(n))return !1;
        if (null == t || null == n)return !1;
        if ("function" == typeof t.equals || "function" == typeof n.equals)return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);
        switch (ar(t)) {
            case"Arguments":
            case"Array":
            case"Object":
                if ("function" == typeof t.constructor && "Promise" === f(t.constructor))return t === n;
                break;
            case"Boolean":
            case"Number":
            case"String":
                if (typeof t != typeof n || !Ut(t.valueOf(), n.valueOf()))return !1;
                break;
            case"Date":
                if (!Ut(t.valueOf(), n.valueOf()))return !1;
                break;
            case"Error":
                return t.name === n.name && t.message === n.message;
            case"RegExp":
                if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode)return !1;
                break;
            case"Map":
            case"Set":
                if (!Ku(r(t.entries()), r(n.entries()), e, u))return !1;
                break;
            case"Int8Array":
            case"Uint8Array":
            case"Uint8ClampedArray":
            case"Int16Array":
            case"Uint16Array":
            case"Int32Array":
            case"Uint32Array":
            case"Float32Array":
            case"Float64Array":
                break;
            case"ArrayBuffer":
                break;
            default:
                return !1
        }
        var i = Yt(t);
        if (i.length !== Yt(n).length)return !1;
        for (var o = e.length - 1; o >= 0;) {
            if (e[o] === t)return u[o] === n;
            o -= 1
        }
        for (e.push(t), u.push(n), o = i.length - 1; o >= 0;) {
            var c = i[o];
            if (!l(c, n) || !Ku(n[c], t[c], e, u))return !1;
            o -= 1
        }
        return e.pop(), u.pop(), !0
    }, Br = function (t) {
        return function n(r) {
            for (var e, u, i, o = [], c = 0, s = r.length; s > c;) {
                if (Ht(r[c]))for (e = t ? n(r[c]) : r[c], i = 0, u = e.length; u > i;)o[o.length] = e[i], i += 1; else o[o.length] = r[c];
                c += 1
            }
            return o
        }
    }, Mr = function () {
        function t(t, n, r) {
            for (var e = 0, u = r.length; u > e;) {
                if (n = t["@@transducer/step"](n, r[e]), n && n["@@transducer/reduced"]) {
                    n = n["@@transducer/value"];
                    break
                }
                e += 1
            }
            return t["@@transducer/result"](n)
        }

        function n(t, n, r) {
            for (var e = r.next(); !e.done;) {
                if (n = t["@@transducer/step"](n, e.value), n && n["@@transducer/reduced"]) {
                    n = n["@@transducer/value"];
                    break
                }
                e = r.next()
            }
            return t["@@transducer/result"](n)
        }

        function r(t, n, r) {
            return t["@@transducer/result"](r.reduce(dt(t["@@transducer/step"], t), n))
        }

        var e = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
        return function (u, i, o) {
            if ("function" == typeof u && (u = C(u)), Ht(o))return t(u, i, o);
            if ("function" == typeof o.reduce)return r(u, i, o);
            if (null != o[e])return n(u, i, o[e]());
            if ("function" == typeof o.next)return n(u, i, o);
            throw new TypeError("reduce: list must be array or iterable")
        }
    }(), Rr = function () {
        var t = {
            "@@transducer/init": Array, "@@transducer/step": function (t, n) {
                return t.push(n), t
            }, "@@transducer/result": p
        }, n = {
            "@@transducer/init": String, "@@transducer/step": function (t, n) {
                return t + n
            }, "@@transducer/result": p
        }, r = {
            "@@transducer/init": Object, "@@transducer/step": function (t, n) {
                return B(t, Ht(n) ? wn(n[0], n[1]) : n)
            }, "@@transducer/result": p
        };
        return function (e) {
            if (j(e))return e;
            if (Ht(e))return t;
            if ("string" == typeof e)return n;
            if ("object" == typeof e)return r;
            throw new Error("Cannot create transformer for " + e)
        }
    }(), Tr = function () {
        function t(t, n) {
            this.f = t, this.retained = [], this.xf = n
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            return this.retained = null, this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            return this.f(n) ? this.retain(t, n) : this.flush(t, n)
        }, t.prototype.flush = function (t, n) {
            return t = Mr(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, n)
        }, t.prototype.retain = function (t, n) {
            return this.retained.push(n), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), Ur = function () {
        function t(t, n) {
            this.xf = n, this.f = t, this.inputs = {}
        }

        return t.prototype["@@transducer/init"] = W.init, t.prototype["@@transducer/result"] = function (t) {
            var n;
            for (n in this.inputs)if (l(n, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[n]), t["@@transducer/reduced"])) {
                t = t["@@transducer/value"];
                break
            }
            return this.inputs = null, this.xf["@@transducer/result"](t)
        }, t.prototype["@@transducer/step"] = function (t, n) {
            var r = this.f(n);
            return this.inputs[r] = this.inputs[r] || [r, []], this.inputs[r][1] = lt(n, this.inputs[r][1]), t
        }, T(function (n, r) {
            return new t(n, r)
        })
    }(), Fr = R(function (t) {
        return vt(t.length, function () {
            var n = 0, r = arguments[0], e = arguments[arguments.length - 1], u = I(arguments);
            return u[0] = function () {
                var t = r.apply(this, o(arguments, [n, e]));
                return n += 1, t
            }, t.apply(this, u)
        })
    }), Lr = R(function (t) {
        return gn(2, t)
    }), Dr = R(function (t) {
        return null != t && "function" == typeof t.clone ? t.clone() : qr(t, [], [], !0)
    }), zr = R(function (t) {
        return vt(t.length, t)
    }), Vr = T(L("drop", $, function (t, n) {
        return Kn(Math.max(0, t), 1 / 0, n)
    })), Kr = T(L("dropLast", H, Cr)), $r = T(L("dropLastWhile", Tr, D)), Hr = T(function (t, n) {
        return Pr(t, n, [], [])
    }), Xr = T(L("filter", Z, function (t, n) {
        return v(n) ? Mr(function (r, e) {
            return t(n[e]) && (r[e] = n[e]), r
        }, {}, Yt(n)) : s(t, n)
    })), Yr = R(Br(!0)), Zr = R(function (t) {
        return zr(function (n, r) {
            var e = I(arguments);
            return e[0] = r, e[1] = n, t.apply(this, e)
        })
    }), Gr = vn(0), Jr = Kn(0, -1), Qr = U(function (t, n, r) {
        var e, u;
        n.length > r.length ? (e = n, u = r) : (e = r, u = n);
        for (var i = [], o = 0; o < u.length;)c(t, u[o], e) && (i[i.length] = u[o]), o += 1;
        return gr(t, i)
    }), te = U(function (t, n, r) {
        return j(t) ? Mr(n(t), t["@@transducer/init"](), r) : Mr(n(Rr(t)), qr(t, [], [], !1), r)
    }), ne = R(function (t) {
        for (var n = Yt(t), r = n.length, e = 0, u = {}; r > e;) {
            var i = n[e], o = t[i], c = l(o, u) ? u[o] : u[o] = [];
            c[c.length] = i, e += 1
        }
        return u
    }), re = R(function (t) {
        for (var n = Yt(t), r = n.length, e = 0, u = {}; r > e;) {
            var i = n[e];
            u[t[i]] = i, e += 1
        }
        return u
    }), ee = R(function (t) {
        return null != t && Hr(t, _t(t))
    }), ue = vn(-1), ie = T(function (t, n) {
        if ("function" != typeof n.lastIndexOf || g(n)) {
            for (var r = n.length - 1; r >= 0;) {
                if (Hr(n[r], t))return r;
                r -= 1
            }
            return -1
        }
        return n.lastIndexOf(t)
    }), oe = T(L("map", nt, function (t, n) {
        switch (Object.prototype.toString.call(n)) {
            case"[object Function]":
                return vt(n.length, function () {
                    return t.call(this, n.apply(this, arguments))
                });
            case"[object Object]":
                return Mr(function (r, e) {
                    return r[e] = t(n[e]), r
                }, {}, Yt(n));
            default:
                return O(t, n)
        }
    })), ce = T(function (t, n) {
        return Mr(function (r, e) {
            return r[e] = t(n[e], e, n), r
        }, {}, Yt(n))
    }), se = U(function (t, n, r) {
        return an(function (n, r, e) {
            return t(r, e)
        }, n, r)
    }), ae = Wr(o), fe = Wr(Zr(o)), le = U(function (t, n, r) {
        return Hr(_n(t, r), n)
    }), pe = T(function (t, n) {
        return oe(Cn(t), n)
    }), he = vr(O, [In, Ft]), ge = U(function (t, n, r) {
        return Bn(Hr(n), t, r)
    }), de = U(function (t, n, r) {
        return Bn($t(t), n, r)
    }), ye = U(Mr), me = F(4, [], function (t, n, r, e) {
        return Mr(function (e, u) {
            var i = r(u);
            return e[i] = t(l(i, e) ? e[i] : n, u), e
        }, {}, e)
    }), ve = T(function (t, n) {
        return Xr(i(t), n)
    }), be = T(function (t, n) {
        return er(ct(t), n)
    }), we = ye(ut, 0), xe = T(function (t, n) {
        return Vr(t >= 0 ? n.length - t : 0, n)
    }), je = vt(4, function (t, n, r, e) {
        return Mr(t("function" == typeof n ? C(n) : n), r, e)
    }), Oe = U(function (t, n, r) {
        return gr(t, o(n, r))
    }), Se = T(function (t, n) {
        return Or(oe(Hr, t), n)
    }), Ae = function () {
        var t = function (t) {
            return {
                "@@transducer/init": W.init, "@@transducer/result": function (n) {
                    return t["@@transducer/result"](n)
                }, "@@transducer/step": function (n, r) {
                    var e = t["@@transducer/step"](n, r);
                    return e["@@transducer/reduced"] ? a(e) : e
                }
            }
        };
        return function (n) {
            var r = t(n);
            return {
                "@@transducer/init": W.init, "@@transducer/result": function (t) {
                    return r["@@transducer/result"](t)
                }, "@@transducer/step": function (t, n) {
                    return Ht(n) ? Mr(r, t, n) : Mr(r, t, [n])
                }
            }
        }
    }(), _e = function (t, n, r) {
        var e, u;
        if ("function" == typeof t.indexOf)switch (typeof n) {
            case"number":
                if (0 === n) {
                    for (e = 1 / n; r < t.length;) {
                        if (u = t[r], 0 === u && 1 / u === e)return r;
                        r += 1
                    }
                    return -1
                }
                if (n !== n) {
                    for (; r < t.length;) {
                        if (u = t[r], "number" == typeof u && u !== u)return r;
                        r += 1
                    }
                    return -1
                }
                return t.indexOf(n, r);
            case"string":
            case"boolean":
            case"function":
            case"undefined":
                return t.indexOf(n, r);
            case"object":
                if (null === n)return t.indexOf(n, r)
        }
        for (; r < t.length;) {
            if (Hr(t[r], n))return r;
            r += 1
        }
        return -1
    }, Ee = T(function (t, n) {
        return oe(t, Ae(n))
    }), Ne = R(function (t) {
        return vt(ye(un, 0, pe("length", t)), function () {
            for (var n = 0, r = t.length; r > n;) {
                if (!t[n].apply(this, arguments))return !1;
                n += 1
            }
            return !0
        })
    }), ke = R(function (t) {
        for (var n = t.length, r = 0; n > r;) {
            if (_e(t, t[r], r + 1) >= 0)return !1;
            r += 1
        }
        return !0
    }), Ie = R(function (t) {
        return vt(ye(un, 0, pe("length", t)), function () {
            for (var n = 0, r = t.length; r > n;) {
                if (t[n].apply(this, arguments))return !0;
                n += 1
            }
            return !1
        })
    }), qe = T(function (t, n) {
        return "function" == typeof t.ap ? t.ap(n) : "function" == typeof t ? vt(Math.max(t.length, n.length), function () {
            return t.apply(this, arguments)(n.apply(this, arguments))
        }) : Mr(function (t, r) {
            return o(t, oe(r, n))
        }, [], t)
    }), We = R(function $u(t) {
        return t = oe(function (t) {
            return "function" == typeof t ? t : $u(t)
        }, t), vt(ye(un, 0, pe("length", br(t))), function () {
            var n = arguments;
            return oe(function (t) {
                return pt(t, n)
            }, t)
        })
    }), Ce = zr(function (t) {
        return t.apply(this, I(arguments, 1))
    }), Pe = T(L("chain", Ee, function (t, n) {
        return "function" == typeof n ? function () {
            return n.call(this, t.apply(this, arguments)).apply(this, arguments)
        } : Br(!1)(oe(t, n))
    })), Be = R(function (t) {
        var r = ye(un, 0, oe(function (t) {
            return t[0].length
        }, t));
        return n(r, function () {
            for (var n = 0; n < t.length;) {
                if (t[n][0].apply(this, arguments))return t[n][1].apply(this, arguments);
                n += 1
            }
        })
    }), Me = T(function (t, n) {
        if (t > 10)throw new Error("Constructor with greater than ten arguments");
        return 0 === t ? function () {
            return new n
        } : zr(gn(t, function (t, r, e, u, i, o, c, s, a, f) {
            switch (arguments.length) {
                case 1:
                    return new n(t);
                case 2:
                    return new n(t, r);
                case 3:
                    return new n(t, r, e);
                case 4:
                    return new n(t, r, e, u);
                case 5:
                    return new n(t, r, e, u, i);
                case 6:
                    return new n(t, r, e, u, i, o);
                case 7:
                    return new n(t, r, e, u, i, o, c);
                case 8:
                    return new n(t, r, e, u, i, o, c, s);
                case 9:
                    return new n(t, r, e, u, i, o, c, s, a);
                case 10:
                    return new n(t, r, e, u, i, o, c, s, a, f)
            }
        }))
    }), Re = T(function (t, n) {
        return vt(ye(un, 0, pe("length", n)), function () {
            var r = arguments, e = this;
            return t.apply(e, O(function (t) {
                return t.apply(e, r)
            }, n))
        })
    }), Te = me(function (t, n) {
        return t + 1
    }, 0), Ue = T(L("dropRepeatsWith", X, function (t, n) {
        var r = [], e = 1, u = n.length;
        if (0 !== u)for (r[0] = n[0]; u > e;)t(ue(r), n[e]) || (r[r.length] = n[e]), e += 1;
        return r
    })), Fe = U(function (t, n, r) {
        return Hr(t(n), t(r))
    }), Le = U(function (t, n, r) {
        return Hr(n[t], r[t])
    }), De = T(L("groupBy", Ur, me(function (t, n) {
        return null == t && (t = []), t.push(n), t
    }, null))), ze = me(function (t, n) {
        return n
    }, null), Ve = T(function (t, n) {
        return "function" != typeof n.indexOf || g(n) ? _e(n, t, 0) : n.indexOf(t)
    }), Ke = R(function (t) {
        return Re(e, t)
    }), $e = T(function (t, n) {
        return function (r) {
            return function (e) {
                return oe(function (t) {
                    return n(t, e)
                }, r(t(e)))
            }
        }
    }), He = R(function (t) {
        return $e(vn(t), mr(t))
    }), Xe = R(function (t) {
        return $e(_n(t), gt(t))
    }), Ye = R(function (t) {
        return $e(Cn(t), ht(t))
    }), Ze = T(function (t, n) {
        var r = vt(t, n);
        return vt(t, function () {
            return Mr(qe, oe(r, arguments[0]), I(arguments, 1))
        })
    }), Ge = R(function (t) {
        return we(t) / t.length
    }), Je = R(function (t) {
        var n = t.length;
        if (0 === n)return NaN;
        var r = 2 - n % 2, e = (n - r) / 2;
        return Ge(I(t).sort(function (t, n) {
            return n > t ? -1 : t > n ? 1 : 0
        }).slice(e, e + r))
    }), Qe = Ke([Xr, ve]), tu = function () {
        if (0 === arguments.length)throw new Error("pipe requires at least one argument");
        return n(arguments[0].length, ye(_, arguments[0], Jn(arguments)))
    }, nu = function () {
        if (0 === arguments.length)throw new Error("pipeP requires at least one argument");
        return n(arguments[0].length, ye(E, arguments[0], Jn(arguments)))
    }, ru = ye(hn, 1), eu = T(function (t, n) {
        return "function" == typeof n.sequence ? n.sequence(t) : Tn(function (t, n) {
            return qe(oe(Wn, n), t)
        }, t([]), n)
    }), uu = U(function (t, n, r) {
        return eu(t, oe(n, r))
    }), iu = Pe(p), ou = function (t, n) {
        return _e(n, t, 0) >= 0
    }, cu = function Hu(t, n) {
        var r = function (r) {
            var e = n.concat([t]);
            return ou(r, e) ? "<Circular>" : Hu(r, e)
        }, e = function (t, n) {
            return O(function (n) {
                return N(n) + ": " + r(t[n])
            }, n.slice().sort())
        };
        switch (Object.prototype.toString.call(t)) {
            case"[object Arguments]":
                return "(function() { return arguments; }(" + O(r, t).join(", ") + "))";
            case"[object Array]":
                return "[" + O(r, t).concat(e(t, ve(function (t) {
                        return /^\d+$/.test(t)
                    }, Yt(t)))).join(", ") + "]";
            case"[object Boolean]":
                return "object" == typeof t ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
            case"[object Date]":
                return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : N(q(t))) + ")";
            case"[object Null]":
                return "null";
            case"[object Number]":
                return "object" == typeof t ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -(1 / 0) ? "-0" : t.toString(10);
            case"[object String]":
                return "object" == typeof t ? "new String(" + r(t.valueOf()) + ")" : N(t);
            case"[object Undefined]":
                return "undefined";
            default:
                if ("function" == typeof t.toString) {
                    var u = t.toString();
                    if ("[object Object]" !== u)return u
                }
                return "{" + e(t, Yt(t)).join(", ") + "}"
        }
    }, su = function () {
        if (0 === arguments.length)throw new Error("compose requires at least one argument");
        return tu.apply(this, Dn(arguments))
    }, au = function () {
        return su.apply(this, Wn(Ft, oe(Pe, arguments)))
    }, fu = function () {
        if (0 === arguments.length)throw new Error("composeP requires at least one argument");
        return nu.apply(this, Dn(arguments))
    }, lu = R(function (t) {
        return Me(t.length, t)
    }), pu = T(ou), hu = T(function (t, n) {
        for (var r = [], e = 0, u = t.length; u > e;)ou(t[e], n) || ou(t[e], r) || (r[r.length] = t[e]), e += 1;
        return r
    }), gu = R(L("dropRepeats", X(Hr), Ue(Hr))), du = R(function (t) {
        return Ze(t.length, t)
    }), yu = T(function (t, n) {
        var r = {};
        for (var e in n)ou(e, t) || (r[e] = n[e]);
        return r
    }), mu = function () {
        return au.apply(this, Dn(arguments))
    }, vu = R(function (t) {
        return cu(t, [])
    }), bu = T(function (t, n) {
        return ve(Zr(ou)(t), n)
    }), wu = function () {
        function t() {
            this._nativeSet = "function" == typeof Set ? new Set : null, this._items = {}
        }

        function n(t, n, r) {
            var e, u, i = typeof t;
            switch (i) {
                case"string":
                case"number":
                    return 0 !== t || r._items["-0"] || 1 / t !== -(1 / 0) ? null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), u = r._nativeSet.size, u > e) : r._nativeSet.has(t) : i in r._items ? t in r._items[i] ? !n : (n && (r._items[i][t] = !0), n) : (n && (r._items[i] = {}, r._items[i][t] = !0), n) : (n && (r._items["-0"] = !0), n);
                case"boolean":
                    if (i in r._items) {
                        var o = t ? 1 : 0;
                        return r._items[i][o] ? !n : (n && (r._items[i][o] = !0), n)
                    }
                    return n && (r._items[i] = t ? [!1, !0] : [!0, !1]), n;
                case"function":
                    return null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), u = r._nativeSet.size, u > e) : r._nativeSet.has(t) : i in r._items ? ou(t, r._items[i]) ? !n : (n && r._items[i].push(t), n) : (n && (r._items[i] = [t]), n);
                case"undefined":
                    return r._items[i] ? !n : (n && (r._items[i] = !0), n);
                case"object":
                    if (null === t)return r._items["null"] ? !n : (n && (r._items["null"] = !0), n);
                default:
                    return i = Object.prototype.toString.call(t), i in r._items ? ou(t, r._items[i]) ? !n : (n && r._items[i].push(t), n) : (n && (r._items[i] = [t]), n)
            }
        }

        return t.prototype.add = function (t) {
            return n(t, !0, this)
        }, t.prototype.has = function (t) {
            return n(t, !1, this)
        }, t
    }(), xu = T(function (t, n) {
        return d(t) ? function () {
            return t.apply(this, arguments) && n.apply(this, arguments)
        } : du(st)(t, n)
    }), ju = du(mn), Ou = T(function (t, n) {
        return d(t) ? function () {
            return t.apply(this, arguments) || n.apply(this, arguments)
        } : du(On)(t, n)
    }), Su = T(function (t, n) {
        return vt(t + 1, function () {
            var r = arguments[t];
            if (null != r && $t(Function, r[n]))return r[n].apply(r, I(arguments, 0, t));
            throw new TypeError(vu(r) + ' does not have a method named "' + n + '"')
        })
    }), Au = Su(1, "join"), _u = R(function (t) {
        var r = {};
        return n(t.length, function () {
            var n = vu(arguments);
            return l(n, r) || (r[n] = t.apply(this, arguments)), r[n]
        })
    }), Eu = Su(1, "split"), Nu = T(function (t, n) {
        if (!w(t))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + vu(t));
        return u(t).test(n)
    }), ku = Su(0, "toLowerCase"), Iu = Su(0, "toUpperCase"), qu = T(function (t, n) {
        for (var r, e, u = new wu, i = [], o = 0; o < n.length;)e = n[o], r = t(e), u.add(r) && i.push(e), o += 1;
        return i
    }), Wu = Zr(Su(1, "concat")), Cu = T(function (t, n) {
        return Wu(hu(t, n), hu(n, t))
    }), Pu = U(function (t, n, r) {
        return Wu(xt(t, n, r), xt(t, r, n))
    }), Bu = qu(Ft), Mu = T(function (t, n) {
        var r, e;
        return t.length > n.length ? (r = t, e = n) : (r = n, e = t), Bu(s(Zr(ou)(r), e))
    }), Ru = T(su(Bu, o)), Tu = {
        F: kr,
        T: Ir,
        __: t,
        add: ut,
        addIndex: Fr,
        adjust: it,
        all: ot,
        allPass: Ne,
        allUniq: ke,
        always: ct,
        and: st,
        any: at,
        anyPass: Ie,
        ap: qe,
        aperture: ft,
        append: lt,
        apply: pt,
        applySpec: We,
        assoc: ht,
        assocPath: gt,
        binary: Lr,
        bind: dt,
        both: xu,
        call: Ce,
        chain: Pe,
        clamp: yt,
        clone: Dr,
        comparator: mt,
        complement: ju,
        compose: su,
        composeK: au,
        composeP: fu,
        concat: Wu,
        cond: Be,
        construct: lu,
        constructN: Me,
        contains: pu,
        converge: Re,
        countBy: Te,
        curry: zr,
        curryN: vt,
        dec: bt,
        defaultTo: wt,
        difference: hu,
        differenceWith: xt,
        dissoc: jt,
        dissocPath: Ot,
        divide: St,
        drop: Vr,
        dropLast: Kr,
        dropLastWhile: $r,
        dropRepeats: gu,
        dropRepeatsWith: Ue,
        dropWhile: At,
        either: Ou,
        empty: _t,
        eqBy: Fe,
        eqProps: Le,
        equals: Hr,
        evolve: Et,
        filter: Xr,
        find: Nt,
        findIndex: kt,
        findLast: It,
        findLastIndex: qt,
        flatten: Yr,
        flip: Zr,
        forEach: Wt,
        fromPairs: Ct,
        groupBy: De,
        groupWith: Pt,
        gt: Bt,
        gte: Mt,
        has: Rt,
        hasIn: Tt,
        head: Gr,
        identical: Ut,
        identity: Ft,
        ifElse: Lt,
        inc: Dt,
        indexBy: ze,
        indexOf: Ve,
        init: Jr,
        insert: zt,
        insertAll: Vt,
        intersection: Mu,
        intersectionWith: Qr,
        intersperse: Kt,
        into: te,
        invert: ne,
        invertObj: re,
        invoker: Su,
        is: $t,
        isArrayLike: Ht,
        isEmpty: ee,
        isNil: Xt,
        join: Au,
        juxt: Ke,
        keys: Yt,
        keysIn: Zt,
        last: ue,
        lastIndexOf: ie,
        length: Gt,
        lens: $e,
        lensIndex: He,
        lensPath: Xe,
        lensProp: Ye,
        lift: du,
        liftN: Ze,
        lt: Jt,
        lte: Qt,
        map: oe,
        mapAccum: tn,
        mapAccumRight: nn,
        mapObjIndexed: ce,
        match: rn,
        mathMod: en,
        max: un,
        maxBy: on,
        mean: Ge,
        median: Je,
        memoize: _u,
        merge: cn,
        mergeAll: sn,
        mergeWith: se,
        mergeWithKey: an,
        min: fn,
        minBy: ln,
        modulo: pn,
        multiply: hn,
        nAry: gn,
        negate: dn,
        none: yn,
        not: mn,
        nth: vn,
        nthArg: bn,
        objOf: wn,
        of: xn,
        omit: yu,
        once: jn,
        or: On,
        over: Sn,
        pair: An,
        partial: ae,
        partialRight: fe,
        partition: Qe,
        path: _n,
        pathEq: le,
        pathOr: En,
        pathSatisfies: Nn,
        pick: kn,
        pickAll: In,
        pickBy: qn,
        pipe: tu,
        pipeK: mu,
        pipeP: nu,
        pluck: pe,
        prepend: Wn,
        product: ru,
        project: he,
        prop: Cn,
        propEq: ge,
        propIs: de,
        propOr: Pn,
        propSatisfies: Bn,
        props: Mn,
        range: Rn,
        reduce: ye,
        reduceBy: me,
        reduceRight: Tn,
        reduced: Un,
        reject: ve,
        remove: Fn,
        repeat: be,
        replace: Ln,
        reverse: Dn,
        scan: zn,
        sequence: eu,
        set: Vn,
        slice: Kn,
        sort: $n,
        sortBy: Hn,
        split: Eu,
        splitAt: Xn,
        splitEvery: Yn,
        splitWhen: Zn,
        subtract: Gn,
        sum: we,
        symmetricDifference: Cu,
        symmetricDifferenceWith: Pu,
        tail: Jn,
        take: Qn,
        takeLast: xe,
        takeLastWhile: tr,
        takeWhile: nr,
        tap: rr,
        test: Nu,
        times: er,
        toLower: ku,
        toPairs: ur,
        toPairsIn: ir,
        toString: vu,
        toUpper: Iu,
        transduce: je,
        transpose: or,
        traverse: uu,
        trim: cr,
        tryCatch: sr,
        type: ar,
        unapply: fr,
        unary: lr,
        uncurryN: pr,
        unfold: hr,
        union: Ru,
        unionWith: Oe,
        uniq: Bu,
        uniqBy: qu,
        uniqWith: gr,
        unless: dr,
        unnest: iu,
        until: yr,
        update: mr,
        useWith: vr,
        values: br,
        valuesIn: wr,
        view: xr,
        when: jr,
        where: Or,
        whereEq: Se,
        without: bu,
        wrap: Sr,
        xprod: Ar,
        zip: _r,
        zipObj: Er,
        zipWith: Nr
    };
    "object" == typeof exports ? module.exports = Tu : "function" == typeof define && define.amd ? define(function () {
        return Tu
    }) : this.R = Tu
}).call(this);