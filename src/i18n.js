! function () {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (n) {
        "use strict";
        if (null == this) throw new TypeError;
        var e = Object(this),
            r = e.length >>> 0;
        if (0 === r) return -1;
        var t = 0;
        if (arguments.length > 0 && ((t = Number(arguments[1])) != t ? t = 0 : 0 != t && t != 1 / 0 && t != -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t)))), t >= r) return -1;
        for (var u = t >= 0 ? t : Math.max(r - Math.abs(t), 0); u < r; u++)
            if (u in e && e[u] === n) return u;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (n) {
        "use strict";
        if (null == this) throw new TypeError;
        var e = Object(this),
            r = e.length >>> 0;
        if (0 === r) return -1;
        var t = r;
        arguments.length > 1 && ((t = Number(arguments[1])) != t ? t = 0 : 0 != t && t != 1 / 0 && t != -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))));
        for (var u = t >= 0 ? Math.min(t, r - 1) : r - Math.abs(t); u >= 0; u--)
            if (u in e && e[u] === n) return u;
        return -1
    });
    var n, e = this.jQuery || this.Zepto,
        r = {},
        t = {},
        u = 0,
        a = [],
        o = !1;
    "undefined" != typeof module && module.exports ? module.exports = r : (e && (e.i18n = e.i18n || r), this.i18n = this.i18n || r);
    var s = {
            lng: void 0,
            load: "all",
            preload: [],
            lowerCaseLng: !1,
            returnObjectTrees: !1,
            fallbackLng: "dev",
            fallbackNS: [],
            detectLngQS: "setLng",
            ns: "translation",
            fallbackOnNull: !0,
            fallbackOnEmpty: !1,
            fallbackToDefaultNS: !1,
            nsseparator: ":",
            keyseparator: ".",
            selectorAttr: "data-i18n",
            debug: !1,
            resGetPath: "locales/__lng__/__ns__.json",
            resPostPath: "locales/add/__lng__/__ns__",
            getAsync: !0,
            postAsync: !0,
            resStore: void 0,
            useLocalStorage: !1,
            localStorageExpirationTime: 6048e5,
            dynamicLoad: !1,
            sendMissing: !1,
            sendMissingTo: "fallback",
            sendType: "POST",
            interpolationPrefix: "__",
            interpolationSuffix: "__",
            reusePrefix: "$t(",
            reuseSuffix: ")",
            pluralSuffix: "_plural",
            pluralNotFound: ["plural_not_found", Math.random()].join(""),
            contextNotFound: ["context_not_found", Math.random()].join(""),
            escapeInterpolation: !1,
            setJqueryExt: !0,
            defaultValueFromContent: !0,
            useDataAttrOptions: !1,
            cookieExpirationTime: 5256e2,
            useCookie: !0,
            cookieName: "lang",
            cookieDomain: void 0,
            objectTreeKeyHandler: void 0,
            postProcess: void 0,
            parseMissingKey: void 0,
            shortcutFunction: "sprintf"
        },
        i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        l = {
            create: function (n, e, r, t) {
                var u;
                if (r) {
                    var a = new Date;
                    a.setTime(a.getTime() + 60 * r * 1e3), u = "; expires=" + a.toGMTString()
                } else u = "";
                t = t ? "domain=" + t + ";" : "", document.cookie = n + "=" + e + u + ";" + t + "path=/"
            },
            read: function (n) {
                for (var e = n + "=", r = document.cookie.split(";"), t = 0; t < r.length; t++) {
                    for (var u = r[t];
                        " " == u.charAt(0);) u = u.substring(1, u.length);
                    if (0 === u.indexOf(e)) return u.substring(e.length, u.length)
                }
                return null
            },
            remove: function (n) {
                this.create(n, "", -1)
            }
        },
        c = {
            extend: e ? e.extend : function (n, e) {
                if (!e || "function" == typeof e) return n;
                for (var r in e) n[r] = e[r];
                return n
            },
            each: e ? e.each : function (n, e, r) {
                var t, u = 0,
                    a = n.length,
                    o = void 0 === a || "function" == typeof n;
                if (r)
                    if (o) {
                        for (t in n)
                            if (!1 === e.apply(n[t], r)) break
                    } else
                        for (; u < a && !1 !== e.apply(n[u++], r););
                else if (o) {
                    for (t in n)
                        if (!1 === e.call(n[t], t, n[t])) break
                } else
                    for (; u < a && !1 !== e.call(n[u], u, n[u++]););
                return n
            },
            ajax: e ? e.ajax : "undefined" != typeof document ? function (n) {
                var e = function (n, r, t, u) {
                    "function" == typeof t && (u = t, t = {}), t.cache = t.cache || !1, t.data = t.data || {}, t.headers = t.headers || {}, t.jsonp = t.jsonp || !1, t.async = void 0 === t.async || t.async;
                    var a, o = function () {
                        for (var n = arguments[0], e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t])
                        }
                        return n
                    }({
                        accept: "*/*",
                        "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                    }, e.headers, t.headers);
                    if (a = "application/json" === o["content-type"] ? JSON.stringify(t.data) : function (n) {
                            if ("string" == typeof n) return n;
                            var e = [];
                            for (var r in n) n.hasOwnProperty(r) && e.push(encodeURIComponent(r) + "=" + encodeURIComponent(n[r]));
                            return e.join("&")
                        }(t.data), "GET" === n) {
                        var s = [];
                        if (a && (s.push(a), a = null), t.cache || s.push("_=" + (new Date).getTime()), t.jsonp && (s.push("callback=" + t.jsonp), s.push("jsonp=" + t.jsonp)), (s = s.join("&")).length > 1 && (r.indexOf("?") > -1 ? r += "&" + s : r += "?" + s), t.jsonp) {
                            var i = document.getElementsByTagName("head")[0],
                                l = document.createElement("script");
                            return l.type = "text/javascript", l.src = r, void i.appendChild(l)
                        }
                    }! function (n) {
                        if (window.XMLHttpRequest) return n(null, new XMLHttpRequest);
                        if (window.ActiveXObject) try {
                            return n(null, new ActiveXObject("Msxml2.XMLHTTP"))
                        } catch (e) {
                            return n(null, new ActiveXObject("Microsoft.XMLHTTP"))
                        }
                        n(new Error)
                    }(function (e, s) {
                        if (e) return u(e);
                        for (var i in s.open(n, r, t.async), o) o.hasOwnProperty(i) && s.setRequestHeader(i, o[i]);
                        s.onreadystatechange = function () {
                            if (4 === s.readyState) {
                                var n = s.responseText || "";
                                if (!u) return;
                                u(s.status, {
                                    text: function () {
                                        return n
                                    },
                                    json: function () {
                                        return JSON.parse(n)
                                    }
                                })
                            }
                        }, s.send(a)
                    })
                };
                ({
                    authBasic: function (n, r) {
                        e.headers.Authorization = "Basic " + function (n) {
                            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                            n = function (n) {
                                n = n.replace(/\r\n/g, "\n");
                                for (var e = "", r = 0; r < n.length; r++) {
                                    var t = n.charCodeAt(r);
                                    t < 128 ? e += String.fromCharCode(t) : t > 127 && t < 2048 ? (e += String.fromCharCode(t >> 6 | 192), e += String.fromCharCode(63 & t | 128)) : (e += String.fromCharCode(t >> 12 | 224), e += String.fromCharCode(t >> 6 & 63 | 128), e += String.fromCharCode(63 & t | 128))
                                }
                                return e
                            }(n);
                            var r, t, u, a, o, s, i, l = "",
                                c = 0;
                            do {
                                a = (r = n.charCodeAt(c++)) >> 2, o = (3 & r) << 4 | (t = n.charCodeAt(c++)) >> 4, s = (15 & t) << 2 | (u = n.charCodeAt(c++)) >> 6, i = 63 & u, isNaN(t) ? s = i = 64 : isNaN(u) && (i = 64), l += e.charAt(a) + e.charAt(o) + e.charAt(s) + e.charAt(i), r = t = u = "", a = o = s = i = ""
                            } while (c < n.length);
                            return l
                        }(n + ":" + r)
                    },
                    connect: function (n, r, t) {
                        return e("CONNECT", n, r, t)
                    },
                    del: function (n, r, t) {
                        return e("DELETE", n, r, t)
                    },
                    get: function (n, r, t) {
                        return e("GET", n, r, t)
                    },
                    head: function (n, r, t) {
                        return e("HEAD", n, r, t)
                    },
                    headers: function (n) {
                        e.headers = n || {}
                    },
                    isAllowed: function (n, e, r) {
                        this.options(n, function (n, t) {
                            r(-1 !== t.text().indexOf(e))
                        })
                    },
                    options: function (n, r, t) {
                        return e("OPTIONS", n, r, t)
                    },
                    patch: function (n, r, t) {
                        return e("PATCH", n, r, t)
                    },
                    post: function (n, r, t) {
                        return e("POST", n, r, t)
                    },
                    put: function (n, r, t) {
                        return e("PUT", n, r, t)
                    },
                    trace: function (n, r, t) {
                        return e("TRACE", n, r, t)
                    }
                })[n.type ? n.type.toLowerCase() : "get"](n.url, n, function (e, r) {
                    200 === e ? n.success(r.json(), e, null) : n.error(r.text(), e, null)
                })
            } : function () {},
            cookie: "undefined" != typeof document ? l : {
                create: function (n, e, r, t) {},
                read: function (n) {
                    return null
                },
                remove: function (n) {}
            },
            detectLanguage: function () {
                var n, e = [];
                if ("undefined" != typeof window && (function () {
                        for (var n = window.location.search.substring(1).split("&"), r = 0; r < n.length; r++) {
                            var t = n[r].indexOf("=");
                            if (t > 0) {
                                var u = n[r].substring(0, t),
                                    a = n[r].substring(t + 1);
                                e[u] = a
                            }
                        }
                    }(), e[s.detectLngQS] && (n = e[s.detectLngQS])), !n && "undefined" != typeof document && s.useCookie) {
                    var r = c.cookie.read(s.cookieName);
                    r && (n = r)
                }
                return n || "undefined" == typeof navigator || (n = navigator.language ? navigator.language : navigator.userLanguage), n
            },
            escape: function (n) {
                return "string" == typeof n ? n.replace(/[&<>"'\/]/g, function (n) {
                    return i[n]
                }) : n
            },
            log: function (n) {
                s.debug && "undefined" != typeof console && console.log(n)
            },
            toLanguages: function (n) {
                var e = [];
                if ("string" == typeof n && n.indexOf("-") > -1) {
                    var r = n.split("-");
                    n = s.lowerCaseLng ? r[0].toLowerCase() + "-" + r[1].toLowerCase() : r[0].toLowerCase() + "-" + r[1].toUpperCase(), "unspecific" !== s.load && e.push(n), "current" !== s.load && e.push(r[0])
                } else e.push(n);
                return -1 === e.indexOf(s.fallbackLng) && s.fallbackLng && e.push(s.fallbackLng), e
            },
            regexEscape: function (n) {
                return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        };

    function f(u, i) {
        "function" == typeof u && (i = u, u = {}), u = u || {}, c.extend(s, u), delete s.fixLng, "string" == typeof s.ns && (s.ns = {
            namespaces: [s.ns],
            defaultNs: s.ns
        }), "string" == typeof s.fallbackNS && (s.fallbackNS = [s.fallbackNS]), s.interpolationPrefixEscaped = c.regexEscape(s.interpolationPrefix), s.interpolationSuffixEscaped = c.regexEscape(s.interpolationSuffix), s.lng || (s.lng = c.detectLanguage()), s.lng ? s.useCookie && c.cookie.create(s.cookieName, s.lng, s.cookieExpirationTime, s.cookieDomain) : (s.lng = s.fallbackLng, s.useCookie && c.cookie.remove(s.cookieName)), a = c.toLanguages(s.lng), n = a[0], c.log("currentLng set to: " + n);
        var l, f = g;
        if (u.fixLng && ((f = function (n, e) {
                return (e = e || {}).lng = e.lng || f.lng, g(n, e)
            }).lng = n), y.setCurrentLng(n), e && s.setJqueryExt && function () {
                function n(n, r, t) {
                    if (0 !== r.length) {
                        var u, a = "text";
                        if (0 === r.indexOf("[")) {
                            var o = r.split("]");
                            r = o[1], a = o[0].substr(1, o[0].length - 1)
                        }
                        r.indexOf(";") === r.length - 1 && (r = r.substr(0, r.length - 2)), "html" === a ? (u = s.defaultValueFromContent ? e.extend({
                            defaultValue: n.html()
                        }, t) : t, n.html(e.t(r, u))) : "text" === a ? (u = s.defaultValueFromContent ? e.extend({
                            defaultValue: n.text()
                        }, t) : t, n.text(e.t(r, u))) : "prepend" === a ? (u = s.defaultValueFromContent ? e.extend({
                            defaultValue: n.html()
                        }, t) : t, n.prepend(e.t(r, u))) : "append" === a ? (u = s.defaultValueFromContent ? e.extend({
                            defaultValue: n.html()
                        }, t) : t, n.append(e.t(r, u))) : (u = s.defaultValueFromContent ? e.extend({
                            defaultValue: n.attr(a)
                        }, t) : t, n.attr(a, e.t(r, u)))
                    }
                }

                function r(r, t) {
                    var u = r.attr(s.selectorAttr);
                    if (u || void 0 === u || !1 === u || (u = r.text() || r.val()), u) {
                        var a = r,
                            o = r.data("i18n-target");
                        if (o && (a = r.find(o) || r), t || !0 !== s.useDataAttrOptions || (t = r.data("i18n-options")), t = t || {}, u.indexOf(";") >= 0) {
                            var i = u.split(";");
                            e.each(i, function (e, r) {
                                "" !== r && n(a, r, t)
                            })
                        } else n(a, u, t);
                        !0 === s.useDataAttrOptions && r.data("i18n-options", t)
                    }
                }
                e.t = e.t || g, e.fn.i18n = function (n) {
                    return this.each(function () {
                        r(e(this), n), e(this).find("[" + s.selectorAttr + "]").each(function () {
                            r(e(this), n)
                        })
                    })
                }
            }(), e && e.Deferred && (l = e.Deferred()), s.resStore) return t = s.resStore, o = !0, i && i(f), l && l.resolve(f), l ? l.promise() : void 0;
        var m = c.toLanguages(s.lng);
        "string" == typeof s.preload && (s.preload = [s.preload]);
        for (var p = 0, b = s.preload.length; p < b; p++)
            for (var d = c.toLanguages(s.preload[p]), h = 0, N = d.length; h < N; h++) m.indexOf(d[h]) < 0 && m.push(d[h]);
        return r.sync.load(m, s, function (n, e) {
            t = e, o = !0, i && i(f), l && l.resolve(f)
        }), l ? l.promise() : void 0
    }

    function m(n, e) {
        var u = {
                dynamicLoad: s.dynamicLoad,
                resGetPath: s.resGetPath,
                getAsync: s.getAsync,
                customLoad: s.customLoad,
                ns: {
                    namespaces: n,
                    defaultNs: ""
                }
            },
            a = c.toLanguages(s.lng);
        "string" == typeof s.preload && (s.preload = [s.preload]);
        for (var o = 0, i = s.preload.length; o < i; o++)
            for (var l = c.toLanguages(s.preload[o]), f = 0, m = l.length; f < m; f++) a.indexOf(l[f]) < 0 && a.push(l[f]);
        for (var p = [], b = 0, d = a.length; b < d; b++) {
            var g = !1,
                h = t[a[b]];
            if (h)
                for (var N = 0, v = n.length; N < v; N++) h[n[N]] || (g = !0);
            else g = !0;
            g && p.push(a[b])
        }
        p.length ? r.sync._fetch(p, u, function (u, a) {
            var o = n.length * p.length;
            c.each(n, function (n, u) {
                s.ns.namespaces.indexOf(u) < 0 && s.ns.namespaces.push(u), c.each(p, function (n, i) {
                    t[i] = t[i] || {}, t[i][u] = a[i][u], 0 == --o && e && (s.useLocalStorage && r.sync._storeLocal(t), e())
                })
            })
        }) : e && e()
    }

    function p(n, e, r, t) {
        if (!n) return n;
        if (t = t || e, n.indexOf(t.interpolationPrefix || s.interpolationPrefix) < 0) return n;
        var u = t.interpolationPrefix ? c.regexEscape(t.interpolationPrefix) : s.interpolationPrefixEscaped,
            a = t.interpolationSuffix ? c.regexEscape(t.interpolationSuffix) : s.interpolationSuffixEscaped,
            o = "HTML" + a;
        return c.each(e, function (e, i) {
            var l = r ? r + s.keyseparator + e : e;
            n = "object" == typeof i && null !== i ? p(n, i, l, t) : t.escapeInterpolation || s.escapeInterpolation ? (n = n.replace(new RegExp([u, l, o].join(""), "g"), i)).replace(new RegExp([u, l, a].join(""), "g"), c.escape(i)) : n.replace(new RegExp([u, l, a].join(""), "g"), i)
        }), n
    }

    function b(n, e) {
        var r = c.extend({}, e);
        for (delete r.postProcess; - 1 != n.indexOf(s.reusePrefix) && !(++u > s.maxRecursion);) {
            var t = n.lastIndexOf(s.reusePrefix),
                a = n.indexOf(s.reuseSuffix, t) + s.reuseSuffix.length,
                o = n.substring(t, a),
                i = o.replace(s.reusePrefix, "").replace(s.reuseSuffix, "");
            if (-1 != i.indexOf(",")) {
                var l = i.indexOf(",");
                if (-1 != i.indexOf("{", l) && -1 != i.indexOf("}", l)) {
                    var f = i.indexOf("{", l),
                        m = i.indexOf("}", f) + "}".length;
                    try {
                        r = c.extend(r, JSON.parse(i.substring(f, m))), i = i.substring(0, l)
                    } catch (n) {}
                }
            }
            var p = N(i, r);
            n = n.replace(o, p)
        }
        return n
    }

    function d(n, e) {
        var r = h(n, e = e || {}),
            t = v(n, e);
        return void 0 !== t || t === r
    }

    function g(n, e) {
        return e = e || {}, o ? (u = 0, N.apply(null, arguments)) : (c.log("i18next not finished initialization. you might have called t function before loading resources finished."), e.defaultValue || "")
    }

    function h(n, e) {
        return void 0 !== e.defaultValue ? e.defaultValue : n
    }

    function N(n, e) {
        if ("string" == typeof e ? "sprintf" === s.shortcutFunction ? e = function () {
                for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
                return {
                    postProcess: "sprintf",
                    sprintf: n
                }
            }.apply(null, arguments) : "defaultValue" === s.shortcutFunction && (e = {
                defaultValue: e
            }) : e = e || {}, null == n) return "";
        "string" == typeof n && (n = [n]);
        var r = n[0];
        if (n.length > 1)
            for (var t = 0; t < n.length && !d(r = n[t]); t++);
        var u, o = h(r, e),
            i = v(r, e),
            l = e.lng ? c.toLanguages(e.lng) : a,
            f = e.ns || s.ns.defaultNs;
        r.indexOf(s.nsseparator) > -1 && (f = (u = r.split(s.nsseparator))[0], r = u[1]), void 0 === i && s.sendMissing && (e.lng ? x.postMissing(l[0], f, r, o, l) : x.postMissing(s.lng, f, r, o, l));
        var m = e.postProcess || s.postProcess;
        void 0 !== i && m && k[m] && (i = k[m](i, r, e));
        var g = o;
        if (o.indexOf(s.nsseparator) > -1 && (g = (u = o.split(s.nsseparator))[1]), g === r && s.parseMissingKey && (o = s.parseMissingKey(o)), void 0 === i && (o = b(o = p(o, e), e), m && k[m])) {
            var N = h(r, e);
            i = k[m](N, r, e)
        }
        return void 0 !== i ? i : o
    }

    function v(n, e) {
        var u, o, i = h(n, e = e || {}),
            l = a;
        if (!t) return i;
        if (e.lng && (l = c.toLanguages(e.lng), !t[l[0]])) {
            var f = s.getAsync;
            s.getAsync = !1, r.sync.load(l, s, function (n, e) {
                c.extend(t, e), s.getAsync = f
            })
        }
        var m, d = e.ns || s.ns.defaultNs;
        if (n.indexOf(s.nsseparator) > -1) {
            var x = n.split(s.nsseparator);
            d = x[0], n = x[1]
        }
        if (function (n) {
                return n.context && ("string" == typeof n.context || "number" == typeof n.context)
            }(e) && (delete(u = c.extend({}, e)).context, u.defaultValue = s.contextNotFound, (o = g(d + s.nsseparator + n + "_" + e.context, u)) != s.contextNotFound)) return p(o, {
            context: e.context
        });
        if (function (n) {
                return void 0 !== n.count && "string" != typeof n.count && 1 !== n.count
            }(e)) {
            delete(u = c.extend({}, e)).count, u.defaultValue = s.pluralNotFound;
            var k = d + s.nsseparator + n + s.pluralSuffix,
                S = y.get(l[0], e.count);
            if (S >= 0 ? k = k + "_" + S : 1 === S && (k = d + s.nsseparator + n), (o = g(k, u)) != s.pluralNotFound) return p(o, {
                count: e.count,
                interpolationPrefix: e.interpolationPrefix,
                interpolationSuffix: e.interpolationSuffix
            })
        }
        for (var O = n.split(s.keyseparator), L = 0, j = l.length; L < j && void 0 === m; L++) {
            for (var w = l[L], T = 0, P = t[w] && t[w][d]; O[T];) P = P && P[O[T]], T++;
            if (void 0 !== P) {
                var A = Object.prototype.toString.apply(P);
                if ("string" == typeof P) P = b(P = p(P, e), e);
                else if ("[object Array]" !== A || s.returnObjectTrees || e.returnObjectTrees) {
                    if (null === P && !0 === s.fallbackOnNull) P = void 0;
                    else if (null !== P)
                        if (s.returnObjectTrees || e.returnObjectTrees) {
                            if ("[object Number]" !== A && "[object Function]" !== A && "[object RegExp]" !== A) {
                                var C = "[object Array]" === A ? [] : {};
                                c.each(P, function (r) {
                                    C[r] = N(d + s.nsseparator + n + s.keyseparator + r, e)
                                }), P = C
                            }
                        } else s.objectTreeKeyHandler && "function" == typeof s.objectTreeKeyHandler ? P = s.objectTreeKeyHandler(n, P, w, d, e) : (P = "key '" + d + ":" + n + " (" + w + ")' returned an object instead of string.", c.log(P))
                } else P = b(P = p(P = P.join("\n"), e), e);
                "string" == typeof P && "" === P.trim() && !0 === s.fallbackOnEmpty && (P = void 0), m = P
            }
        }
        if (void 0 === m && !e.isFallbackLookup && (!0 === s.fallbackToDefaultNS || s.fallbackNS && s.fallbackNS.length > 0))
            if (e.isFallbackLookup = !0, s.fallbackNS.length)
                for (var _ = 0, M = s.fallbackNS.length; _ < M && (!(m = v(s.fallbackNS[_] + s.nsseparator + n, e)) || (m.indexOf(s.nsseparator) > -1 ? m.split(s.nsseparator)[1] : m) === (i.indexOf(s.nsseparator) > -1 ? i.split(s.nsseparator)[1] : i)); _++);
            else m = v(n, e);
        return m
    }
    c.applyReplacement = p;
    var x = {
            load: function (n, e, r) {
                e.useLocalStorage ? x._loadLocal(n, e, function (t, u) {
                    for (var a = [], o = 0, s = n.length; o < s; o++) u[n[o]] || a.push(n[o]);
                    a.length > 0 ? x._fetch(a, e, function (n, e) {
                        c.extend(u, e), x._storeLocal(e), r(null, u)
                    }) : r(null, u)
                }) : x._fetch(n, e, function (n, e) {
                    r(null, e)
                })
            },
            _loadLocal: function (n, e, r) {
                var t = {},
                    u = (new Date).getTime();
                if (window.localStorage) {
                    var a = n.length;
                    c.each(n, function (n, o) {
                        var s = window.localStorage.getItem("res_" + o);
                        s && (s = JSON.parse(s)).i18nStamp && s.i18nStamp + e.localStorageExpirationTime > u && (t[o] = s), 0 == --a && r(null, t)
                    })
                }
            },
            _storeLocal: function (n) {
                if (window.localStorage)
                    for (var e in n) n[e].i18nStamp = (new Date).getTime(), window.localStorage.setItem("res_" + e, JSON.stringify(n[e]))
            },
            _fetch: function (n, e, r) {
                var t = e.ns,
                    u = {};
                if (e.dynamicLoad) {
                    var a = function (n, e) {
                        r(null, e)
                    };
                    if ("function" == typeof e.customLoad) e.customLoad(n, t.namespaces, e, a);
                    else {
                        var o = p(e.resGetPath, {
                            lng: n.join("+"),
                            ns: t.namespaces.join("+")
                        });
                        c.ajax({
                            url: o,
                            success: function (n, e, r) {
                                c.log("loaded: " + o), a(0, n)
                            },
                            error: function (n, e, r) {
                                c.log("failed loading: " + o), a()
                            },
                            dataType: "json",
                            async: e.getAsync
                        })
                    }
                } else {
                    var s, i = t.namespaces.length * n.length;
                    c.each(t.namespaces, function (t, a) {
                        c.each(n, function (n, t) {
                            var o = function (n, e) {
                                n && (s = s || []).push(n), u[t] = u[t] || {}, u[t][a] = e, 0 == --i && r(s, u)
                            };
                            "function" == typeof e.customLoad ? e.customLoad(t, a, e, o) : x._fetchOne(t, a, e, o)
                        })
                    })
                }
            },
            _fetchOne: function (n, e, r, t) {
                var u = p(r.resGetPath, {
                    lng: n,
                    ns: e
                });
                c.ajax({
                    url: u,
                    success: function (n, e, r) {
                        c.log("loaded: " + u), t(null, n)
                    },
                    error: function (n, e, r) {
                        200 == r.status ? c.log("There is a typo in: " + u) : 404 == r.status ? c.log("Does not exist: " + u) : c.log(r.status + " when loading " + u), t(r, {})
                    },
                    dataType: "json",
                    async: r.getAsync
                })
            },
            postMissing: function (n, e, r, u, a) {
                var o = {};
                o[r] = u;
                var i = [];
                if ("fallback" === s.sendMissingTo && !1 !== s.fallbackLng) i.push({
                    lng: s.fallbackLng,
                    url: p(s.resPostPath, {
                        lng: s.fallbackLng,
                        ns: e
                    })
                });
                else if ("current" === s.sendMissingTo || "fallback" === s.sendMissingTo && !1 === s.fallbackLng) i.push({
                    lng: n,
                    url: p(s.resPostPath, {
                        lng: n,
                        ns: e
                    })
                });
                else if ("all" === s.sendMissingTo)
                    for (var l = 0, f = a.length; l < f; l++) i.push({
                        lng: a[l],
                        url: p(s.resPostPath, {
                            lng: a[l],
                            ns: e
                        })
                    });
                for (var m = 0, b = i.length; m < b; m++) {
                    var d = i[m];
                    c.ajax({
                        url: d.url,
                        type: s.sendType,
                        data: o,
                        success: function (n, a, o) {
                            c.log("posted missing key '" + r + "' to: " + d.url);
                            for (var s = r.split("."), i = 0, l = t[d.lng][e]; s[i];) l = i === s.length - 1 ? l[s[i]] = u : l[s[i]] = l[s[i]] || {}, i++
                        },
                        error: function (n, e, t) {
                            c.log("failed posting missing key '" + r + "' to: " + d.url)
                        },
                        dataType: "json",
                        async: s.postAsync
                    })
                }
            }
        },
        y = {
            rules: {
                ach: {
                    name: "Acholi",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                af: {
                    name: "Afrikaans",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ak: {
                    name: "Akan",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                am: {
                    name: "Amharic",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                an: {
                    name: "Aragonese",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ar: {
                    name: "Arabic",
                    numbers: [0, 1, 2, 3, 11, 100],
                    plurals: function (n) {
                        return Number(0 === n ? 0 : 1 == n ? 1 : 2 == n ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5)
                    }
                },
                arn: {
                    name: "Mapudungun",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                ast: {
                    name: "Asturian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ay: {
                    name: "Aymará",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                az: {
                    name: "Azerbaijani",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                be: {
                    name: "Belarusian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                bg: {
                    name: "Bulgarian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                bn: {
                    name: "Bengali",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                bo: {
                    name: "Tibetan",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                br: {
                    name: "Breton",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                bs: {
                    name: "Bosnian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                ca: {
                    name: "Catalan",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                cgg: {
                    name: "Chiga",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                cs: {
                    name: "Czech",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : n >= 2 && n <= 4 ? 1 : 2)
                    }
                },
                csb: {
                    name: "Kashubian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                cy: {
                    name: "Welsh",
                    numbers: [1, 2, 3, 8],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : 2 == n ? 1 : 8 != n && 11 != n ? 2 : 3)
                    }
                },
                da: {
                    name: "Danish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                de: {
                    name: "German",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                dz: {
                    name: "Dzongkha",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                el: {
                    name: "Greek",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                en: {
                    name: "English",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                eo: {
                    name: "Esperanto",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                es: {
                    name: "Spanish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                es_ar: {
                    name: "Argentinean Spanish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                et: {
                    name: "Estonian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                eu: {
                    name: "Basque",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                fa: {
                    name: "Persian",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                fi: {
                    name: "Finnish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                fil: {
                    name: "Filipino",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                fo: {
                    name: "Faroese",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                fr: {
                    name: "French",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                fur: {
                    name: "Friulian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                fy: {
                    name: "Frisian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ga: {
                    name: "Irish",
                    numbers: [1, 2, 3, 7, 11],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : 2 == n ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4)
                    }
                },
                gd: {
                    name: "Scottish Gaelic",
                    numbers: [1, 2, 3, 20],
                    plurals: function (n) {
                        return Number(1 == n || 11 == n ? 0 : 2 == n || 12 == n ? 1 : n > 2 && n < 20 ? 2 : 3)
                    }
                },
                gl: {
                    name: "Galician",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                gu: {
                    name: "Gujarati",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                gun: {
                    name: "Gun",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                ha: {
                    name: "Hausa",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                he: {
                    name: "Hebrew",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                hi: {
                    name: "Hindi",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                hr: {
                    name: "Croatian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                hu: {
                    name: "Hungarian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                hy: {
                    name: "Armenian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ia: {
                    name: "Interlingua",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                id: {
                    name: "Indonesian",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                is: {
                    name: "Icelandic",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n % 10 != 1 || n % 100 == 11)
                    }
                },
                it: {
                    name: "Italian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ja: {
                    name: "Japanese",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                jbo: {
                    name: "Lojban",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                jv: {
                    name: "Javanese",
                    numbers: [0, 1],
                    plurals: function (n) {
                        return Number(0 !== n)
                    }
                },
                ka: {
                    name: "Georgian",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                kk: {
                    name: "Kazakh",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                km: {
                    name: "Khmer",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                kn: {
                    name: "Kannada",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ko: {
                    name: "Korean",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                ku: {
                    name: "Kurdish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                kw: {
                    name: "Cornish",
                    numbers: [1, 2, 3, 4],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : 2 == n ? 1 : 3 == n ? 2 : 3)
                    }
                },
                ky: {
                    name: "Kyrgyz",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                lb: {
                    name: "Letzeburgesch",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ln: {
                    name: "Lingala",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                lo: {
                    name: "Lao",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                lt: {
                    name: "Lithuanian",
                    numbers: [1, 2, 10],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                lv: {
                    name: "Latvian",
                    numbers: [0, 1, 2],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : 0 !== n ? 1 : 2)
                    }
                },
                mai: {
                    name: "Maithili",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                mfe: {
                    name: "Mauritian Creole",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                mg: {
                    name: "Malagasy",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                mi: {
                    name: "Maori",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                mk: {
                    name: "Macedonian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 == n || n % 10 == 1 ? 0 : 1)
                    }
                },
                ml: {
                    name: "Malayalam",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                mn: {
                    name: "Mongolian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                mnk: {
                    name: "Mandinka",
                    numbers: [0, 1, 2],
                    plurals: function (n) {
                        return Number(1 == n ? 1 : 2)
                    }
                },
                mr: {
                    name: "Marathi",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ms: {
                    name: "Malay",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                mt: {
                    name: "Maltese",
                    numbers: [1, 2, 11, 20],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : 0 === n || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3)
                    }
                },
                nah: {
                    name: "Nahuatl",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                nap: {
                    name: "Neapolitan",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                nb: {
                    name: "Norwegian Bokmal",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ne: {
                    name: "Nepali",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                nl: {
                    name: "Dutch",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                nn: {
                    name: "Norwegian Nynorsk",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                no: {
                    name: "Norwegian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                nso: {
                    name: "Northern Sotho",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                oc: {
                    name: "Occitan",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                or: {
                    name: "Oriya",
                    numbers: [2, 1],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                pa: {
                    name: "Punjabi",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                pap: {
                    name: "Papiamento",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                pl: {
                    name: "Polish",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                pms: {
                    name: "Piemontese",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ps: {
                    name: "Pashto",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                pt: {
                    name: "Portuguese",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                pt_br: {
                    name: "Brazilian Portuguese",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                rm: {
                    name: "Romansh",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ro: {
                    name: "Romanian",
                    numbers: [1, 2, 20],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : 0 === n || n % 100 > 0 && n % 100 < 20 ? 1 : 2)
                    }
                },
                ru: {
                    name: "Russian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                sah: {
                    name: "Yakut",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                sco: {
                    name: "Scots",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                se: {
                    name: "Northern Sami",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                si: {
                    name: "Sinhala",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                sk: {
                    name: "Slovak",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(1 == n ? 0 : n >= 2 && n <= 4 ? 1 : 2)
                    }
                },
                sl: {
                    name: "Slovenian",
                    numbers: [5, 1, 2, 3],
                    plurals: function (n) {
                        return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0)
                    }
                },
                so: {
                    name: "Somali",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                son: {
                    name: "Songhay",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                sq: {
                    name: "Albanian",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                sr: {
                    name: "Serbian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                su: {
                    name: "Sundanese",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                sv: {
                    name: "Swedish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                sw: {
                    name: "Swahili",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                ta: {
                    name: "Tamil",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                te: {
                    name: "Telugu",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                tg: {
                    name: "Tajik",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                th: {
                    name: "Thai",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                ti: {
                    name: "Tigrinya",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                tk: {
                    name: "Turkmen",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                tr: {
                    name: "Turkish",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                tt: {
                    name: "Tatar",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                ug: {
                    name: "Uyghur",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                uk: {
                    name: "Ukrainian",
                    numbers: [1, 2, 5],
                    plurals: function (n) {
                        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
                    }
                },
                ur: {
                    name: "Urdu",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                uz: {
                    name: "Uzbek",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                vi: {
                    name: "Vietnamese",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                wa: {
                    name: "Walloon",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(n > 1)
                    }
                },
                wo: {
                    name: "Wolof",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                },
                yo: {
                    name: "Yoruba",
                    numbers: [1, 2],
                    plurals: function (n) {
                        return Number(1 != n)
                    }
                },
                zh: {
                    name: "Chinese",
                    numbers: [1],
                    plurals: function (n) {
                        return 0
                    }
                }
            },
            addRule: function (n, e) {
                y.rules[n] = e
            },
            setCurrentLng: function (n) {
                if (!y.currentRule || y.currentRule.lng !== n) {
                    var e = n.split("-");
                    y.currentRule = {
                        lng: n,
                        rule: y.rules[e[0]]
                    }
                }
            },
            get: function (n, e) {
                return function (e, r) {
                    var t;
                    if (t = y.currentRule && y.currentRule.lng === n ? y.currentRule.rule : y.rules[e]) {
                        var u = t.plurals(r),
                            a = t.numbers[u];
                        return 2 === t.numbers.length && 1 === t.numbers[0] && (2 === a ? a = -1 : 1 === a && (a = 1)), a
                    }
                    return 1 === r ? "1" : "-1"
                }(n.split("-")[0], e)
            }
        },
        k = {},
        S = function (n, e) {
            k[n] = e
        },
        O = function () {
            function n(n) {
                return Object.prototype.toString.call(n).slice(8, -1).toLowerCase()
            }

            function e(n, e) {
                for (var r = []; e > 0; r[--e] = n);
                return r.join("")
            }
            var r = function () {
                return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)
            };
            return r.format = function (r, t) {
                var u, a, o, s, i, l, c, f = 1,
                    m = r.length,
                    p = "",
                    b = [];
                for (a = 0; a < m; a++)
                    if ("string" === (p = n(r[a]))) b.push(r[a]);
                    else if ("array" === p) {
                    if ((s = r[a])[2])
                        for (u = t[f], o = 0; o < s[2].length; o++) {
                            if (!u.hasOwnProperty(s[2][o])) throw O('[sprintf] property "%s" does not exist', s[2][o]);
                            u = u[s[2][o]]
                        } else u = s[1] ? t[s[1]] : t[f++];
                    if (/[^s]/.test(s[8]) && "number" != n(u)) throw O("[sprintf] expecting number but found %s", n(u));
                    switch (s[8]) {
                        case "b":
                            u = u.toString(2);
                            break;
                        case "c":
                            u = String.fromCharCode(u);
                            break;
                        case "d":
                            u = parseInt(u, 10);
                            break;
                        case "e":
                            u = s[7] ? u.toExponential(s[7]) : u.toExponential();
                            break;
                        case "f":
                            u = s[7] ? parseFloat(u).toFixed(s[7]) : parseFloat(u);
                            break;
                        case "o":
                            u = u.toString(8);
                            break;
                        case "s":
                            u = (u = String(u)) && s[7] ? u.substring(0, s[7]) : u;
                            break;
                        case "u":
                            u = Math.abs(u);
                            break;
                        case "x":
                            u = u.toString(16);
                            break;
                        case "X":
                            u = u.toString(16).toUpperCase()
                    }
                    u = /[def]/.test(s[8]) && s[3] && u >= 0 ? "+" + u : u, l = s[4] ? "0" == s[4] ? "0" : s[4].charAt(1) : " ", c = s[6] - String(u).length, i = s[6] ? e(l, c) : "", b.push(s[5] ? u + i : i + u)
                }
                return b.join("")
            }, r.cache = {}, r.parse = function (n) {
                for (var e = n, r = [], t = [], u = 0; e;) {
                    if (null !== (r = /^[^\x25]+/.exec(e))) t.push(r[0]);
                    else if (null !== (r = /^\x25{2}/.exec(e))) t.push("%");
                    else {
                        if (null === (r = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))) throw "[sprintf] huh?";
                        if (r[2]) {
                            u |= 1;
                            var a = [],
                                o = r[2],
                                s = [];
                            if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(o))) throw "[sprintf] huh?";
                            for (a.push(s[1]);
                                "" !== (o = o.substring(s[0].length));)
                                if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(o))) a.push(s[1]);
                                else {
                                    if (null === (s = /^\[(\d+)\]/.exec(o))) throw "[sprintf] huh?";
                                    a.push(s[1])
                                } r[2] = a
                        } else u |= 2;
                        if (3 === u) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                        t.push(r)
                    }
                    e = e.substring(r[0].length)
                }
                return t
            }, r
        }();
    S("sprintf", function (n, e, r) {
        return r.sprintf ? "[object Array]" === Object.prototype.toString.apply(r.sprintf) ? (t = n, (u = r.sprintf).unshift(t), O.apply(null, u)) : "object" == typeof r.sprintf ? O(n, r.sprintf) : n : n;
        var t, u
    }), r.init = f, r.setLng = function (n, e, r) {
        return "function" == typeof e ? (r = e, e = {}) : e || (e = {}), e.lng = n, f(e, r)
    }, r.preload = function (n, e) {
        "string" == typeof n && (n = [n]);
        for (var r = 0, t = n.length; r < t; r++) s.preload.indexOf(n[r]) < 0 && s.preload.push(n[r]);
        return f(e)
    }, r.addResourceBundle = function (n, e, r) {
        "string" != typeof e ? (r = e, e = s.ns.defaultNs) : s.ns.namespaces.indexOf(e) < 0 && s.ns.namespaces.push(e), t[n] = t[n] || {}, t[n][e] = t[n][e] || {}, c.extend(t[n][e], r)
    }, r.removeResourceBundle = function (n, e) {
        "string" != typeof e && (e = s.ns.defaultNs), t[n] = t[n] || {}, t[n][e] = {}
    }, r.loadNamespace = function (n, e) {
        m([n], e)
    }, r.loadNamespaces = m, r.setDefaultNamespace = function (n) {
        s.ns.defaultNs = n
    }, r.t = g, r.translate = g, r.exists = d, r.detectLanguage = c.detectLanguage, r.pluralExtensions = y, r.sync = x, r.functions = c, r.lng = function () {
        return n
    }, r.addPostProcessor = S, r.options = s
}();