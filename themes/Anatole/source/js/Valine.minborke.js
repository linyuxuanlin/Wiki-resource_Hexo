! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Valine", [], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 11)
    }([function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e) {
            return e && A.test(e) ? e.replace($, function(e) {
                return O[e]
            }) : e
        }

        function a(e) {
            return e && C.test(e) ? e.replace(M, function(e) {
                return w[e]
            }) : e
        }
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(3),
            c = r(l),
            u = n(4),
            d = r(u),
            p = n(1),
            h = r(p),
            f = n(2),
            v = r(f);
        d.default.setOptions({
            renderer: new d.default.Renderer,
            gfm: !0,
            tables: !0,
            breaks: !0,
            pedantic: !0,
            sanitize: !0,
            smartLists: !0,
            smartypants: !0
        });
        var g = localStorage,
            m = {
                cdn: "https://gravatar.cat.net/avatar/",
                ds: ["mm", "identicon", "monsterid", "wavatar", "retro", ""],
                params: "",
                hide: !1
            },
            b = {
                comment: "",
                nick: "",
                mail: "",
                link: "",
                ua: navigator.userAgent,
                url: ""
            },
            x = ["nick", "mail", "link"],
            y = {
                "zh-cn": {
                    head: {
                        nick: "姓名",
                        mail: "座号(选填)",
                        link: "考生号(选填)"
                    },
                    tips: {
                        comments: "评论",
                        sofa: "还没有评论哦，快来做第一个~",
                        busy: "还在提交中，请稍候...",
                        again: "回去多读几年数学吧",
                        
                    },
                    ctrl: {
                        reply: "发射",
                        ok: "好的",
                        sure: "确认",
                        cancel: "好吧",
                        confirm: "确认",
                        continue: "继续",
                        more: "查看更多...",
                        try: "我不信"
                    },
                    error: {
                        99: "初始化失败，请检查init中的`el`元素.",
                        100: "初始化失败，请检查你的AppId和AppKey.",
                        401: "未经授权的操作，请检查你的AppId和AppKey.",
                        403: "访问被api域名白名单拒绝，请检查你的安全域名设置."
                    },
                    timeago: {
                        seconds: "秒前",
                        minutes: "分钟前",
                        hours: "小时前",
                        days: "天前",
                        now: "刚刚"
                    }
                },
                en: {
                    head: {
                        nick: "NickName",
                        mail: "E-Mail",
                        link: "Website(http://)"
                    },
                    tips: {
                        comments: "Comments",
                        sofa: "No comments yet.",
                        busy: "Submit is busy, please wait...",
                        again: "Sorry, this is a wrong calculation.",
                        limit: "The largest number of words %d"
                    },
                    ctrl: {
                        reply: "Reply",
                        ok: "Ok",
                        sure: "Sure",
                        cancel: "Cancel",
                        confirm: "Confirm",
                        continue: "Continue",
                        more: "Load More...",
                        try: "Once More?"
                    },
                    error: {
                        99: "Initialization failed, Please check the `el` element in the init method.",
                        100: "Initialization failed, Please check your appId and appKey.",
                        401: "Unauthorized operation, Please check your appId and appKey.",
                        403: "Access denied by api domain white list, Please check your security domain."
                    },
                    timeago: {
                        seconds: "seconds ago",
                        minutes: "minutes ago",
                        hours: "hours ago",
                        days: "days ago",
                        now: "just now"
                    }
                }
            },
            k = function() {
                function e(t) {
                    i(this, e);
                    var n = this;
                    return n.md5 = c.default, !!t && n.init(t), n
                }
                return s(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this;
                        try {
                            t.notify = e.notify || !1, t.verify = e.verify || !1;
                            var n = e.lang || "",
                                r = e.langMode || "";
                            n && r && t.installLocale(n, r), t.locale = t.locale || y[e.lang || "zh-cn"];
                            var i = m.ds,
                                o = e.avatar;
                            m.params = "?d=" + (i.indexOf(o) > -1 ? o : "mm"), m.hide = "hide" === o, b.url = decodeURI((e.path || location.pathname).replace(/index\.(html|htm)$/, "")), e.guest_info = (e.guest_info || x).filter(function(e) {
                                return x.indexOf(e) > -1
                            });
                            var a = Number(e.pageSize || 10);
                            e.pageSize = isNaN(a) ? 10 : a < 1 ? 10 : a;
                            var s = AV;
                            if (!s) return void setTimeout(function() {
                                t.init(e)
                            }, 20);
                            var l = e.app_id || e.appId,
                                c = e.app_key || e.appKey;
                            if (!l || !c) throw 100;
                            if (s.applicationId = null, s.init({
                                    appId: l,
                                    appKey: c
                                }), t.v = s, s)
                                for (var u = document.querySelectorAll(".valine-comment-count"), d = 0, p = u.length; d < p; d++) ! function(e, n) {
                                    var r = u[e];
                                    if (r) {
                                        var i = r.getAttribute("data-xid");
                                        t.Q(i).count().then(function(e) {
                                            r.innerText = e
                                        }).catch(function(e) {
                                            r.innerText = 0
                                        })
                                    }
                                }(d);
                            var h = e.el || null;
                            if (!(h = "[object HTMLDivElement]" === {}.toString.call(h) ? h : document.querySelectorAll(h)[0] || null)) throw 99;
                            t.el = h, t.el.classList.add("v");
                            var f = {
                                    nick: '<input name="nick" placeholder="' + t.locale.head.nick + '" class="vnick vinput" type="text">',
                                    mail: '<input name="mail" placeholder="' + t.locale.head.mail + '" class="vmail vinput" type="email">',
                                    link: '<input name="link" placeholder="' + t.locale.head.link + '" class="vlink vinput" type="text">'
                                },
                                v = e.guest_info.map(function(e) {
                                    return f[e]
                                }),
                                g = e.placeholder || "",
                                k = '<div class="vwrap"><div class="vheader item' + v.length + '">' + v.join("") + '</div><div class="vedit"><textarea class="veditor vinput" placeholder="' + g + '"></textarea></div><div class="vcontrol"><div class="col col-60" title="Markdown is Support"><a href="https://segmentfault.com/markdown" target="_blank"></a> <div class="vlimit"></div></div><div class="col col-40 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + t.locale.ctrl.reply + '</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><ul class="vlist"></ul><div class="vempty" style="display:none;"></div><div class="vpage txt-center" ></div><div class="info"><div class="power txt-right">  <a href="https://valine.js.org" target="_blank"></a> ';
                            t.el.innerHTML = k;
                            var w = t.el.querySelector(".vempty");
                            t.nodata = {
                                show: function(e) {
                                    return w.innerHTML = e || t.locale.tips.sofa, w.setAttribute("style", "display:block;"), t
                                },
                                hide: function() {
                                    return w.setAttribute("style", "display:none;"), t
                                }
                            };
                            var O = document.createElement("li");
                            O.setAttribute("class", "vloading"), O.innerHTML = '<div class="loading loading--double"></div>';
                            var S = t.el.querySelector(".vlist");
                            t.loading = {
                                show: function(e) {
                                    var n = S.querySelectorAll("li");
                                    return e ? S.insertBefore(O, n[0]) : S.appendChild(O), t.nodata.hide(), t
                                },
                                hide: function() {
                                    var e = S.querySelector(".vloading");
                                    return e && S.removeChild(e), 0 === S.querySelectorAll(".vcard").length && t.nodata.show(), t
                                }
                            };
                            var $ = t.el.querySelector(".vmark");
                            t.alert = {
                                show: function(e) {
                                    $.innerHTML = '<div class="valert txt-center"><div class="vtext">' + (e && e.text || 1) + '</div><div class="vbtns"></div></div>';
                                    var n = $.querySelector(".vbtns"),
                                        r = '<button class="vcancel vbtn">' + (e && e.ctxt || t.locale.ctrl.cancel) + "</button>",
                                        i = '<button class="vsure vbtn">' + (e && e.otxt || t.locale.ctrl.sure) + "</button>";
                                    if (n.innerHTML = "" + r + (e && e.type && i), _.on("click", $.querySelector(".vcancel"), function(e) {
                                            t.alert.hide()
                                        }), $.setAttribute("style", "display:block;"), e && e.type) {
                                        var o = $.querySelector(".vsure");
                                        _.on("click", o, function(n) {
                                            t.alert.hide(), e.cb && e.cb()
                                        })
                                    }
                                    return t
                                },
                                hide: function() {
                                    return $.setAttribute("style", "display:none;"), t
                                }
                            }, t.el && t.bind(e)
                        } catch (e) {
                            t.ErrorHandler(e)
                        }
                        return t
                    }
                }, {
                    key: "Q",
                    value: function(e) {
                        var t = this,
                            n = new t.v.Query("Comment");
                        return n.equalTo("url", decodeURI(e)), n.descending("createdAt"), n
                    }
                }, {
                    key: "ErrorHandler",
                    value: function(e) {
                        var t = this;
                        t.el && t.loading.hide().nodata.hide();
                        var n = "";
                        if (101 == e) return void t.nodata.show();
                        n = "number" == typeof e ? "Code " + e + ": " + (t.locale.error[e] || e) : e, t.el && t.nodata.show('<pre style="text-align:left;">' + n + "</pre>"), console
                    }
                }, {
                    key: "installLocale",
                    value: function(e, t) {
                        var n = this;
                        return t = t || {}, y[e] = JSON.stringify(Object.keys(y["zh-cn"])) == JSON.stringify(Object.keys(t)) ? t : void 0, n.locale = y[e] || y["zh-cn"], n
                    }
                }, {
                    key: "bind",
                    value: function(e) {
                        var t = this,
                            n = function n() {
                                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                    o = e.pageSize,
                                    a = Number(t.el.querySelector(".vnum").innerText);
                                t.loading.show();
                                var s = t.Q(b.url);
                                s.limit(o), s.skip((i - 1) * o), s.find().then(function(e) {
                                    for (var s = e.length, l = 0; l < s; l++) r(e[l], !0);
                                    var c = t.el.querySelector(".vpage");
                                    c.innerHTML = o * i < a ? '<button type="button" class="vmore vbtn">' + t.locale.ctrl.more + "</button>" : "";
                                    var u = c.querySelector(".vmore");
                                    u && _.on("click", u, function(e) {
                                        c.innerHTML = "", n(++i)
                                    }), t.loading.hide()
                                }).catch(function(e) {
                                    t.loading.hide().ErrorHandler(e.code)
                                })
                            };
                        t.Q(b.url).count().then(function(e) {
                            e > 0 ? (t.el.querySelector(".vinfo").setAttribute("style", "display:block;"), t.el.querySelector(".vcount").innerHTML = '<span class="vnum">' + e + "</span> " + t.locale.tips.comments, n()) : t.loading.hide()
                        }).catch(function(e) {
                            t.ErrorHandler(e.code)
                        });
                        for (var r = function(e, n) {
                                var r = document.createElement("li");
                                r.setAttribute("class", "vcard"), r.setAttribute("id", e.id);
                                var o = m.hide ? "" : '<img class="vimg" src=\'' + (m.cdn + (0, c.default)(e.get("mail")) + m.params) + "'>",
                                    a = (0, h.default)(e.get("ua")),
                                    s = '<span class="vsys">' + a.browser + " " + a.version + "</span>",
                                    l = '<span class="vsys">' + a.os + " " + a.osVersion + "</span>",
                                    u = "",
                                    d = e.get("link") || (e.get("mail") ? "mailto:" + e.get("mail") : "");
                                u = d ? '<a class="vname" rel="nofollow" href="' + d + '" target="_blank" >' + e.get("nick") + "</a>" : '<span class="vname">' + e.get("nick") + "</span>", r.innerHTML = o + '<section><div class="vhead">' + u + " " + s + " " + l + '</div><div class="vcontent">' + e.get("comment") + '</div><div class="vfooter"><span class="vtime">' + (0, v.default)(e.get("createdAt"), t.locale) + "</span><span rid='" + e.id + "' at='@" + e.get("nick") + "' mail='" + e.get("mail") + '\' class="vat">' + t.locale.ctrl.reply + "</span><div></section>";
                                for (var f = r.querySelector(".vat"), g = r.querySelectorAll("a"), b = 0, x = g.length; b < x; b++) {
                                    var y = g[b];
                                    y && "at" != y.getAttribute("class") && (y.setAttribute("target", "_blank"), y.setAttribute("rel", "nofollow"))
                                }
                                var k = t.el.querySelector(".vlist"),
                                    w = k.querySelectorAll("li");
                                n ? k.appendChild(r) : k.insertBefore(r, w[0]);
                                var O = r.querySelector(".vcontent");
                                O && i(O), f && p(f)
                            }, i = function(e) {
                                setTimeout(function() {
                                    e.offsetHeight > 180 && (e.classList.add("expand"), _.on("click", e, function(t) {
                                        e.setAttribute("class", "vcontent")
                                    }))
                                }, 20)
                            }, s = {
                                at: "",
                                rid: "",
                                rmail: ""
                            }, l = e.guest_info, u = {}, p = function(e) {
                                _.on("click", e, function(t) {
                                    var n = e.getAttribute("at"),
                                        r = e.getAttribute("rid"),
                                        i = e.getAttribute("mail");
                                    s.at = o(n), s.rid = r, s.rmail = i, u.comment.value = n + " ", u.comment.focus()
                                })
                            }, f = {
                                veditor: "comment"
                            }, x = 0, y = l.length; x < y; x++) f["v" + l[x]] = l[x];
                        for (var k in f) f.hasOwnProperty(k) && function() {
                            var e = f[k],
                                n = t.el.querySelector("." + k);
                            u[e] = n, _.on("input", n, function(r) {
                                if ("comment" === e) {
                                    var i = n.value || "",
                                        a = i.substring(0, 1e4);
                                    t.el.querySelector(".vlimit").innerHTML = "" == i ? "" : t.locale.tips.limit.replace("%d", 1e4 - a.length), b[e] = (0, d.default)(a), n.value = a
                                } else b[e] = o(n.value.replace(/(^\s*)|(\s*$)/g, ""))
                            })
                        }();
                        var w = function() {
                            var e = g && g.ValineCache;
                            if (e) {
                                e = JSON.parse(e);
                                var n = l;
                                for (var r in n) {
                                    var i = n[r];
                                    t.el.querySelector(".v" + i).value = a(e[i]), b[i] = e[i]
                                }
                            }
                        };
                        w();
                        var O = function() {
                                for (var e in f)
                                    if (f.hasOwnProperty(e)) {
                                        var n = f[e],
                                            r = t.el.querySelector("." + e);
                                        r.value = "", b[n] = ""
                                    }
                                s.at = "", s.rid = "", s.rmail = "", b.nick = "匿名者", t.el.querySelector(".vlimit").innerHTML = "", w()
                            },
                            S = t.el.querySelector(".vsubmit"),
                            $ = function(e) {
                                if (S.getAttribute("disabled")) return void t.alert.show({
                                    type: 0,
                                    text: t.locale.tips.busy + 'ヾ(๑╹◡╹)ﾉ"',
                                    ctxt: t.locale.ctrl.ok
                                });
                                if ("" == b.comment) return void u.comment.focus();
                                if (b.nick = "" == b.nick ? "匿名者" : b.nick, b.comment.indexOf(s.at) > -1 && "" != s.at) {
                                    var n = '<a class="at" href=\'#' + s.rid + "'>" + s.at + "</a>";
                                    b.comment = b.comment.replace(s.at, n)
                                }
                                var r = L.mail(b.mail),
                                    i = L.link(b.link);
                                b.mail = r.k ? r.v : "", b.link = i.k ? i.v : "", t.notify || t.verify ? C(M) : M()
                            },
                            A = function() {
                                var e = new t.v.ACL;
                                return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
                            },
                            M = function() {
                                S.setAttribute("disabled", !0), t.loading.show(!0);
                                var e = t.v.Object.extend("Comment"),
                                    n = new e;
                                for (var i in b)
                                    if (b.hasOwnProperty(i)) {
                                        var o = b[i];
                                        n.set(i, o)
                                    }
                                n.setACL(A()), n.save().then(function(e) {
                                    "Guest" != b.nick && g && g.setItem("ValineCache", JSON.stringify({
                                        nick: b.nick,
                                        link: b.link,
                                        mail: b.mail
                                    }));
                                    var n = t.el.querySelector(".vnum"),
                                        i = 1;
                                    try {
                                        n ? (i = Number(n.innerText) + 1, n.innerText = i) : t.el.querySelector(".vcount").innerHTML = '<span class="num">1</span> ' + t.locale.tips.comments, r(e), b.mail && E({
                                            username: b.nick,
                                            mail: b.mail
                                        }), s.at && s.rmail && t.notify && T({
                                            username: s.at.replace("@", ""),
                                            mail: s.rmail
                                        }), S.removeAttribute("disabled"), t.loading.hide(), O()
                                    } catch (e) {
                                        e.code && t.ErrorHandler(e.code) || t.ErrorHandler(e)
                                    }
                                }).catch(function(e) {
                                    t.ErrorHandler(e.code)
                                })
                            },
                            C = function e(n) {
                                var r = Math.floor(10 * Math.random() + 1),
                                    i = Math.floor(10 * Math.random() + 1),
                                    o = Math.floor(10 * Math.random() + 1),
                                    a = ["+", "-", "x"],
                                    s = a[Math.floor(3 * Math.random())],
                                    l = a[Math.floor(3 * Math.random())],
                                    c = "" + r + s + i + l + o,
                                    u = c + " = <input class='vcode vinput' >";
                                t.alert.show({
                                    type: 1,
                                    text: u,
                                    ctxt: t.locale.ctrl.cancel,
                                    otxt: t.locale.ctrl.ok,
                                    cb: function() {
                                        var r = +t.el.querySelector(".vcode").value;
                                        new Function("return " + c.replace(/x/g, "*"))() === r ? n && n() : t.alert.show({
                                            type: 1,
                                            text: "(T＿T)" + t.locale.tips.again,
                                            ctxt: t.locale.ctrl.cancel,
                                            otxt: t.locale.ctrl.try,
                                            cb: function() {
                                                e(n)
                                            }
                                        })
                                    }
                                })
                            },
                            E = function(e) {
                                var n = new t.v.User;
                                return n.setUsername(e.username), n.setPassword(e.mail), n.setEmail(e.mail), n.setACL(A()), n.signUp()
                            },
                            T = function e(n) {
                                t.v.User.requestPasswordReset(n.mail).then(function(e) {}).catch(function(r) {
                                    1 == r.code ? t.alert.show({
                                        type: 0,
                                        text: "ヾ(ｏ･ω･)ﾉ At太频繁啦，提醒功能暂时宕机。<br>" + r.error,
                                        ctxt: t.locale.ctrl.ok
                                    }) : E(n).then(function(t) {
                                        e(n)
                                    }).catch(function(e) {})
                                })
                            };
                        _.off("click", S, $), _.on("click", S, $), _.on("keyup", document, function(e) {
                            var t = e.keyCode || e.which || e.charCode;
                            (e.ctrlKey || e.metaKey) && 13 == t && $()
                        })
                    }
                }]), e
            }(),
            w = {},
            O = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#x60;",
                "\\": "&#x5c;"
            };
        for (var S in O) w[O[S]] = S;
        var $ = /[&<>"'`\\]/g,
            A = RegExp($.source),
            M = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
            C = RegExp(M.source),
            _ = {
                on: function(e, t, n, r) {
                    return t.addEventListener ? t.addEventListener(e, n, r || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n, this
                },
                off: function(e, t, n, r) {
                    return t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null, this
                }
            },
            L = {
                mail: function(e) {
                    return {
                        k: /[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(e),
                        v: e
                    }
                },
                link: function(e) {
                    return e = e.length > 0 && (/^(http|https)/.test(e) ? e : "http://" + e), {
                        k: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
                        v: e
                    }
                }
            };
        e.exports = k
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e || a.userAgent,
                n = this,
                r = {
                    Trident: t.indexOf("Trident") > -1 || t.indexOf("NET CLR") > -1,
                    Presto: t.indexOf("Presto") > -1,
                    WebKit: t.indexOf("AppleWebKit") > -1,
                    Gecko: t.indexOf("Gecko/") > -1,
                    Safari: t.indexOf("Safari") > -1,
                    Chrome: t.indexOf("Chrome") > -1 || t.indexOf("CriOS") > -1,
                    IE: t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1,
                    Edge: t.indexOf("Edge") > -1,
                    Firefox: t.indexOf("Firefox") > -1 || t.indexOf("FxiOS") > -1,
                    "Firefox Focus": t.indexOf("Focus") > -1,
                    Chromium: t.indexOf("Chromium") > -1,
                    Opera: t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1,
                    Vivaldi: t.indexOf("Vivaldi") > -1,
                    Yandex: t.indexOf("YaBrowser") > -1,
                    Kindle: t.indexOf("Kindle") > -1 || t.indexOf("Silk/") > -1,
                    360: t.indexOf("360EE") > -1 || t.indexOf("360SE") > -1,
                    UC: t.indexOf("UC") > -1 || t.indexOf(" UBrowser") > -1,
                    QQBrowser: t.indexOf("QQBrowser") > -1,
                    QQ: t.indexOf("QQ/") > -1,
                    Baidu: t.indexOf("Baidu") > -1 || t.indexOf("BIDUBrowser") > -1,
                    Maxthon: t.indexOf("Maxthon") > -1,
                    Sogou: t.indexOf("MetaSr") > -1 || t.indexOf("Sogou") > -1,
                    LBBROWSER: t.indexOf("LBBROWSER") > -1,
                    "2345Explorer": t.indexOf("2345Explorer") > -1,
                    TheWorld: t.indexOf("TheWorld") > -1,
                    XiaoMi: t.indexOf("MiuiBrowser") > -1,
                    Quark: t.indexOf("Quark") > -1,
                    Qiyu: t.indexOf("Qiyu") > -1,
                    Wechat: t.indexOf("MicroMessenger") > -1,
                    Taobao: t.indexOf("AliApp(TB") > -1,
                    Alipay: t.indexOf("AliApp(AP") > -1,
                    Weibo: t.indexOf("Weibo") > -1,
                    Douban: t.indexOf("com.douban.frodo") > -1,
                    Suning: t.indexOf("SNEBUY-APP") > -1,
                    iQiYi: t.indexOf("IqiyiApp") > -1,
                    Windows: t.indexOf("Windows") > -1,
                    Linux: t.indexOf("Linux") > -1 || t.indexOf("X11") > -1,
                    "Mac OS": t.indexOf("Macintosh") > -1,
                    Android: t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                    Ubuntu: t.indexOf("Ubuntu") > -1,
                    FreeBSD: t.indexOf("FreeBSD") > -1,
                    Debian: t.indexOf("Debian") > -1,
                    "Windows Phone": t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1,
                    BlackBerry: t.indexOf("BlackBerry") > -1 || t.indexOf("RIM") > -1,
                    MeeGo: t.indexOf("MeeGo") > -1,
                    Symbian: t.indexOf("Symbian") > -1,
                    iOS: t.indexOf("like Mac OS X") > -1,
                    "Chrome OS": t.indexOf("CrOS") > -1,
                    WebOS: t.indexOf("hpwOS") > -1,
                    Mobile: t.indexOf("Mobi") > -1 || t.indexOf("iPh") > -1 || t.indexOf("480") > -1,
                    Tablet: t.indexOf("Tablet") > -1 || t.indexOf("Pad") > -1 || t.indexOf("Nexus 7") > -1
                };
            r.Mobile ? r.Mobile = !(t.indexOf("iPad") > -1) : o.showModalDialog && o.chrome && (r[360] = !0);
            var i = {
                engine: ["WebKit", "Trident", "Gecko", "Presto"],
                browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
                os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
                device: ["Mobile", "Tablet"]
            };
            n.device = "PC", n.language = function() {
                var e = a.browserLanguage || a.language,
                    t = e.split("-");
                return t[1] && (t[1] = t[1].toUpperCase()), t.join("_")
            }();
            for (var s in i)
                for (var l = 0; l < i[s].length; l++) {
                    var c = i[s][l];
                    r[c] && (n[s] = c)
                }
            var u = {
                Windows: function() {
                    var e = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                    return {
                        6.4: "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        "5.0": "2000"
                    }[e] || e
                },
                Android: function() {
                    return t.replace(/^.*Android ([\d.]+);.*$/, "$1")
                },
                iOS: function() {
                    return t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                },
                Debian: function() {
                    return t.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                },
                "Windows Phone": function() {
                    return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                },
                "Mac OS": function() {
                    return t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                },
                WebOS: function() {
                    return t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                }
            };
            n.osVersion = "", u[n.os] && (n.osVersion = u[n.os](), n.osVersion == t && (n.osVersion = ""));
            var d = {
                Safari: function() {
                    return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Chrome: function() {
                    return t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                },
                IE: function() {
                    return t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                },
                Edge: function() {
                    return t.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                },
                Firefox: function() {
                    return t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                },
                "Firefox Focus": function() {
                    return t.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                },
                Chromium: function() {
                    return t.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                },
                Opera: function() {
                    return t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                },
                Vivaldi: function() {
                    return t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                },
                Yandex: function() {
                    return t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                },
                Kindle: function() {
                    return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Maxthon: function() {
                    return t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                },
                QQBrowser: function() {
                    return t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                },
                QQ: function() {
                    return t.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                },
                Baidu: function() {
                    return t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                },
                UC: function() {
                    return t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                },
                Sogou: function() {
                    return t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                },
                "2345Explorer": function() {
                    return t.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
                },
                TheWorld: function() {
                    return t.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                },
                XiaoMi: function() {
                    return t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                },
                Quark: function() {
                    return t.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                },
                Qiyu: function() {
                    return t.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                },
                Wechat: function() {
                    return t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                },
                Taobao: function() {
                    return t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                },
                Alipay: function() {
                    return t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                },
                Weibo: function() {
                    return t.replace(/^.*weibo__([\d.]+).*$/, "$1")
                },
                Douban: function() {
                    return t.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                },
                Suning: function() {
                    return t.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                },
                iQiYi: function() {
                    return t.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                }
            };
            n.version = "", d[n.browser] && (n.version = d[n.browser](), n.version == t && (n.version = "")), "Edge" == n.browser ? n.engine = "EdgeHTML" : "Chrome" == n.browser && parseInt(n.version) > 27 ? n.engine = "Blink" : "Opera" == n.browser && parseInt(n.version) > 12 ? n.engine = "Blink" : "Yandex" == n.browser ? n.engine = "Blink" : void 0 == n.browser && (n.browser = "Unknow App")
        }

        function i(e) {
            return new r(e)
        }
        var o = window || {},
            a = navigator || {};
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        var r = function(e, t) {
                if (e) try {
                    var n = e.getTime(),
                        r = (new Date).getTime(),
                        o = r - n,
                        a = Math.floor(o / 864e5);
                    if (0 === a) {
                        var s = o % 864e5,
                            l = Math.floor(s / 36e5);
                        if (0 === l) {
                            var c = s % 36e5,
                                u = Math.floor(c / 6e4);
                            if (0 === u) {
                                var d = c % 6e4;
                                return Math.round(d / 1e3) + " " + t.timeago.seconds
                            }
                            return u + " " + t.timeago.minutes
                        }
                        return l + " " + t.timeago.hours
                    }
                    return a < 0 ? t.timeago.now : a < 8 ? a + " " + t.timeago.days : i(e)
                } catch (e) {}
            },
            i = function(e) {
                var t = o(e.getDate(), 2),
                    n = o(e.getMonth() + 1, 2);
                return o(e.getFullYear(), 2) + "-" + n + "-" + t
            },
            o = function(e, t) {
                for (var n = e.toString(); n.length < t;) n = "0" + n;
                return n
            };
        e.exports = r
    }, function(e, t, n) {
        var r;
        ! function(i) {
            "use strict";

            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function a(e, t) {
                return e << t | e >>> 32 - t
            }

            function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n)
            }

            function l(e, t, n, r, i, o, a) {
                return s(t & n | ~t & r, e, t, i, o, a)
            }

            function c(e, t, n, r, i, o, a) {
                return s(t & r | n & ~r, e, t, i, o, a)
            }

            function u(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a)
            }

            function d(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a)
            }

            function p(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, s, p = 1732584193,
                    h = -271733879,
                    f = -1732584194,
                    v = 271733878;
                for (n = 0; n < e.length; n += 16) r = p, i = h, a = f, s = v, p = l(p, h, f, v, e[n], 7, -680876936), v = l(v, p, h, f, e[n + 1], 12, -389564586), f = l(f, v, p, h, e[n + 2], 17, 606105819), h = l(h, f, v, p, e[n + 3], 22, -1044525330), p = l(p, h, f, v, e[n + 4], 7, -176418897), v = l(v, p, h, f, e[n + 5], 12, 1200080426), f = l(f, v, p, h, e[n + 6], 17, -1473231341), h = l(h, f, v, p, e[n + 7], 22, -45705983), p = l(p, h, f, v, e[n + 8], 7, 1770035416), v = l(v, p, h, f, e[n + 9], 12, -1958414417), f = l(f, v, p, h, e[n + 10], 17, -42063), h = l(h, f, v, p, e[n + 11], 22, -1990404162), p = l(p, h, f, v, e[n + 12], 7, 1804603682), v = l(v, p, h, f, e[n + 13], 12, -40341101), f = l(f, v, p, h, e[n + 14], 17, -1502002290), h = l(h, f, v, p, e[n + 15], 22, 1236535329), p = c(p, h, f, v, e[n + 1], 5, -165796510), v = c(v, p, h, f, e[n + 6], 9, -1069501632), f = c(f, v, p, h, e[n + 11], 14, 643717713), h = c(h, f, v, p, e[n], 20, -373897302), p = c(p, h, f, v, e[n + 5], 5, -701558691), v = c(v, p, h, f, e[n + 10], 9, 38016083), f = c(f, v, p, h, e[n + 15], 14, -660478335), h = c(h, f, v, p, e[n + 4], 20, -405537848), p = c(p, h, f, v, e[n + 9], 5, 568446438), v = c(v, p, h, f, e[n + 14], 9, -1019803690), f = c(f, v, p, h, e[n + 3], 14, -187363961), h = c(h, f, v, p, e[n + 8], 20, 1163531501), p = c(p, h, f, v, e[n + 13], 5, -1444681467), v = c(v, p, h, f, e[n + 2], 9, -51403784), f = c(f, v, p, h, e[n + 7], 14, 1735328473), h = c(h, f, v, p, e[n + 12], 20, -1926607734), p = u(p, h, f, v, e[n + 5], 4, -378558), v = u(v, p, h, f, e[n + 8], 11, -2022574463), f = u(f, v, p, h, e[n + 11], 16, 1839030562), h = u(h, f, v, p, e[n + 14], 23, -35309556), p = u(p, h, f, v, e[n + 1], 4, -1530992060), v = u(v, p, h, f, e[n + 4], 11, 1272893353), f = u(f, v, p, h, e[n + 7], 16, -155497632), h = u(h, f, v, p, e[n + 10], 23, -1094730640), p = u(p, h, f, v, e[n + 13], 4, 681279174), v = u(v, p, h, f, e[n], 11, -358537222), f = u(f, v, p, h, e[n + 3], 16, -722521979), h = u(h, f, v, p, e[n + 6], 23, 76029189), p = u(p, h, f, v, e[n + 9], 4, -640364487), v = u(v, p, h, f, e[n + 12], 11, -421815835), f = u(f, v, p, h, e[n + 15], 16, 530742520), h = u(h, f, v, p, e[n + 2], 23, -995338651), p = d(p, h, f, v, e[n], 6, -198630844), v = d(v, p, h, f, e[n + 7], 10, 1126891415), f = d(f, v, p, h, e[n + 14], 15, -1416354905), h = d(h, f, v, p, e[n + 5], 21, -57434055), p = d(p, h, f, v, e[n + 12], 6, 1700485571), v = d(v, p, h, f, e[n + 3], 10, -1894986606), f = d(f, v, p, h, e[n + 10], 15, -1051523), h = d(h, f, v, p, e[n + 1], 21, -2054922799), p = d(p, h, f, v, e[n + 8], 6, 1873313359), v = d(v, p, h, f, e[n + 15], 10, -30611744), f = d(f, v, p, h, e[n + 6], 15, -1560198380), h = d(h, f, v, p, e[n + 13], 21, 1309151649), p = d(p, h, f, v, e[n + 4], 6, -145523070), v = d(v, p, h, f, e[n + 11], 10, -1120210379), f = d(f, v, p, h, e[n + 2], 15, 718787259), h = d(h, f, v, p, e[n + 9], 21, -343485551), p = o(p, r), h = o(h, i), f = o(f, a), v = o(v, s);
                return [p, h, f, v]
            }

            function h(e) {
                var t, n = "",
                    r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }

            function f(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }

            function v(e) {
                return h(p(f(e), 8 * e.length))
            }

            function g(e, t) {
                var n, r, i = f(e),
                    o = [],
                    a = [];
                for (o[15] = a[15] = void 0, i.length > 16 && (i = p(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                return r = p(o.concat(f(t)), 512 + 8 * t.length), h(p(a.concat(r), 640))
            }

            function m(e) {
                var t, n, r = "0123456789abcdef",
                    i = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i
            }

            function b(e) {
                return unescape(encodeURIComponent(e))
            }

            function x(e) {
                return v(b(e))
            }

            function y(e) {
                return m(x(e))
            }

            function k(e, t) {
                return g(b(e), b(t))
            }

            function w(e, t) {
                return m(k(e, t))
            }

            function O(e, t, n) {
                return t ? n ? k(t, e) : w(t, e) : n ? x(e) : y(e)
            }
            void 0 !== (r = function() {
                return O
            }.call(t, n, t, e)) && (e.exports = r)
        }()
    }, function(e, t, n) {
        (function(t) {
            (function() {
                function t(e) {
                    this.tokens = [], this.tokens.links = {}, this.options = e || u.defaults, this.rules = d.normal, this.options.gfm && (this.options.tables ? this.rules = d.tables : this.rules = d.gfm)
                }

                function n(e, t) {
                    if (this.options = t || u.defaults, this.links = e, this.rules = p.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.gfm ? this.options.breaks ? this.rules = p.breaks : this.rules = p.gfm : this.options.pedantic && (this.rules = p.pedantic)
                }

                function r(e) {
                    this.options = e || {}
                }

                function i(e) {
                    this.tokens = [], this.token = null, this.options = e || u.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options
                }

                function o(e, t) {
                    return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }

                function a(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(e, t) {
                        return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    })
                }

                function s(e, t) {
                    return e = e.source, t = t || "",
                        function n(r, i) {
                            return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
                        }
                }

                function l() {}

                function c(e) {
                    for (var t, n, r = 1; r < arguments.length; r++) {
                        t = arguments[r];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                function u(e, n, r) {
                    if (r || "function" == typeof n) {
                        r || (r = n, n = null), n = c({}, u.defaults, n || {});
                        var a, s, l = n.highlight,
                            d = 0;
                        try {
                            a = t.lex(e, n)
                        } catch (e) {
                            return r(e)
                        }
                        s = a.length;
                        var p = function(e) {
                            if (e) return n.highlight = l, r(e);
                            var t;
                            try {
                                t = i.parse(a, n)
                            } catch (t) {
                                e = t
                            }
                            return n.highlight = l, e ? r(e) : r(null, t)
                        };
                        if (!l || l.length < 3) return p();
                        if (delete n.highlight, !s) return p();
                        for (; d < a.length; d++) ! function(e) {
                            "code" !== e.type ? --s || p() : l(e.text, e.lang, function(t, n) {
                                return t ? p(t) : null == n || n === e.text ? --s || p() : (e.text = n, e.escaped = !0, void(--s || p()))
                            })
                        }(a[d])
                    } else try {
                        return n && (n = c({}, u.defaults, n)), i.parse(t.lex(e, n), n)
                    } catch (e) {
                        if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (n || u.defaults).silent) return "<p>An error occured:</p><pre>" + o(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }
                var d = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: l,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: l,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                    table: l,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                d.bullet = /(?:[*+-]|\d+\.)/, d.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, d.item = s(d.item, "gm")(/bull/g, d.bullet)(), d.list = s(d.list)(/bull/g, d.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + d.def.source + ")")(), d.blockquote = s(d.blockquote)("def", d.def)(), d._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", d.html = s(d.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, d._tag)(), d.paragraph = s(d.paragraph)("hr", d.hr)("heading", d.heading)("lheading", d.lheading)("blockquote", d.blockquote)("tag", "<" + d._tag)("def", d.def)(), d.normal = c({}, d), d.gfm = c({}, d.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), d.gfm.paragraph = s(d.paragraph)("(?!", "(?!" + d.gfm.fences.source.replace("\\1", "\\2") + "|" + d.list.source.replace("\\1", "\\3") + "|")(), d.tables = c({}, d.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                }), t.rules = d, t.lex = function(e, n) {
                    return new t(n).lex(e)
                }, t.prototype.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
                }, t.prototype.token = function(e, t, n) {
                    for (var r, i, o, a, s, l, c, u, p, e = e.replace(/^ +$/gm, ""); e;)
                        if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                                type: "space"
                            })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                            type: "code",
                            text: this.options.pedantic ? o : o.replace(/\n+$/, "")
                        });
                        else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "code",
                        lang: o[2],
                        text: o[3] || ""
                    });
                    else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "heading",
                        depth: o[1].length,
                        text: o[2]
                    });
                    else if (t && (o = this.rules.nptable.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                                type: "table",
                                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: o[3].replace(/\n$/, "").split("\n")
                            }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
                        this.tokens.push(l)
                    } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "heading",
                        depth: "=" === o[2] ? 1 : 2,
                        text: o[1]
                    });
                    else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "hr"
                    });
                    else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "blockquote_start"
                    }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (o = this.rules.list.exec(e)) {
                        for (e = e.substring(o[0].length), a = o[2], this.tokens.push({
                                type: "list_start",
                                ordered: a.length > 1
                            }), o = o[0].match(this.rules.item), r = !1, p = o.length, u = 0; u < p; u++) l = o[u], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== p - 1 && (s = d.bullet.exec(o[u + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = p - 1)), i = r || /\n\n(?!\s*$)/.test(l), u !== p - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)), this.tokens.push({
                            type: i ? "loose_item_start" : "list_item_start"
                        }), this.token(l, !1, n), this.tokens.push({
                            type: "list_item_end"
                        });
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: this.options.sanitize ? "paragraph" : "html",
                        pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
                        text: o[0]
                    });
                    else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                        href: o[2],
                        title: o[3]
                    };
                    else if (t && (o = this.rules.table.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                                type: "table",
                                header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                            }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(l)
                    } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
                        type: "paragraph",
                        text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
                    });
                    else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                        type: "text",
                        text: o[0]
                    });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var p = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                    url: l,
                    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: l,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
                };
                p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, p.link = s(p.link)("inside", p._inside)("href", p._href)(), p.reflink = s(p.reflink)("inside", p._inside)(), p.normal = c({}, p), p.pedantic = c({}, p.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }), p.gfm = c({}, p.normal, {
                    escape: s(p.escape)("])", "~|])")(),
                    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: s(p.text)("]|", "~]|")("|", "|https?://|")()
                }), p.breaks = c({}, p.gfm, {
                    br: s(p.br)("{2,}", "*")(),
                    text: s(p.gfm.text)("{2,}", "*")()
                }), n.rules = p, n.output = function(e, t, r) {
                    return new n(t, r).output(e)
                }, n.prototype.output = function(e) {
                    for (var t, n, r, i, a = ""; e;)
                        if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), a += i[1];
                        else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = o(i[1]), r = n), a += this.renderer.link(r, null, n);
                    else if (this.inLink || !(i = this.rules.url.exec(e))) {
                        if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : o(i[0]) : i[0];
                        else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, a += this.outputLink(i, {
                            href: i[2],
                            title: i[3]
                        }), this.inLink = !1;
                        else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                                a += i[0].charAt(0), e = i[0].substring(1) + e;
                                continue
                            }
                            this.inLink = !0, a += this.outputLink(i, t), this.inLink = !1
                        } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), a += this.renderer.strong(this.output(i[2] || i[1]));
                        else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), a += this.renderer.em(this.output(i[2] || i[1]));
                        else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), a += this.renderer.codespan(o(i[2], !0));
                        else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), a += this.renderer.br();
                        else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), a += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), a += this.renderer.text(o(this.smartypants(i[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                    } else e = e.substring(i[0].length), n = o(i[1]), r = n, a += this.renderer.link(r, null, n);
                    return a
                }, n.prototype.outputLink = function(e, t) {
                    var n = o(t.href),
                        r = t.title ? o(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, o(e[1]))
                }, n.prototype.smartypants = function(e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                }, n.prototype.mangle = function(e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                    return n
                }, r.prototype.code = function(e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0, e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + o(t, !0) + '">' + (n ? e : o(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : o(e, !0)) + "\n</code></pre>"
                }, r.prototype.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }, r.prototype.html = function(e) {
                    return e
                }, r.prototype.heading = function(e, t, n) {
                    return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
                }, r.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }, r.prototype.list = function(e, t) {
                    var n = t ? "ol" : "ul";
                    return "<" + n + ">\n" + e + "</" + n + ">\n"
                }, r.prototype.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                }, r.prototype.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                }, r.prototype.table = function(e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
                }, r.prototype.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                }, r.prototype.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }, r.prototype.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                }, r.prototype.em = function(e) {
                    return "<em>" + e + "</em>"
                }, r.prototype.codespan = function(e) {
                    return "<code>" + e + "</code>"
                }, r.prototype.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }, r.prototype.del = function(e) {
                    return "<del>" + e + "</del>"
                }, r.prototype.link = function(e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent(a(e)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (e) {
                            return ""
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return ""
                    }
                    var i = '<a href="' + e + '"';
                    return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
                }, r.prototype.image = function(e, t, n) {
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
                }, r.prototype.text = function(e) {
                    return e
                }, i.parse = function(e, t, n) {
                    return new i(t, n).parse(e)
                }, i.prototype.parse = function(e) {
                    this.inline = new n(e.links, this.options, this.renderer), this.tokens = e.reverse();
                    for (var t = ""; this.next();) t += this.tok();
                    return t
                }, i.prototype.next = function() {
                    return this.token = this.tokens.pop()
                }, i.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                }, i.prototype.parseText = function() {
                    for (var e = this.token.text;
                        "text" === this.peek().type;) e += "\n" + this.next().text;
                    return this.inline.output(e)
                }, i.prototype.tok = function() {
                    switch (this.token.type) {
                        case "space":
                            return "";
                        case "hr":
                            return this.renderer.hr();
                        case "heading":
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                        case "code":
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case "table":
                            var e, t, n, r, i = "",
                                o = "";
                            for (n = "", e = 0; e < this.token.header.length; e++)({
                                header: !0,
                                align: this.token.align[e]
                            }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                header: !0,
                                align: this.token.align[e]
                            });
                            for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                                for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                                o += this.renderer.tablerow(n)
                            }
                            return this.renderer.table(i, o);
                        case "blockquote_start":
                            for (var o = "";
                                "blockquote_end" !== this.next().type;) o += this.tok();
                            return this.renderer.blockquote(o);
                        case "list_start":
                            for (var o = "", a = this.token.ordered;
                                "list_end" !== this.next().type;) o += this.tok();
                            return this.renderer.list(o, a);
                        case "list_item_start":
                            for (var o = "";
                                "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                            return this.renderer.listitem(o);
                        case "loose_item_start":
                            for (var o = "";
                                "list_item_end" !== this.next().type;) o += this.tok();
                            return this.renderer.listitem(o);
                        case "html":
                            var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                            return this.renderer.html(s);
                        case "paragraph":
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case "text":
                            return this.renderer.paragraph(this.parseText())
                    }
                }, l.exec = l, u.options = u.setOptions = function(e) {
                    return c(u.defaults, e), u
                }, u.defaults = {
                    gfm: !0,
                    tables: !0,
                    breaks: !1,
                    pedantic: !1,
                    sanitize: !1,
                    sanitizer: null,
                    mangle: !0,
                    smartLists: !1,
                    silent: !1,
                    highlight: null,
                    langPrefix: "lang-",
                    smartypants: !1,
                    headerPrefix: "",
                    renderer: new r,
                    xhtml: !1
                }, u.Parser = i, u.parser = i.parse, u.Renderer = r, u.Lexer = t, u.lexer = t.lex, u.InlineLexer = n, u.inlineLexer = n.output, u.parse = u, e.exports = u
            }).call(function() {
                return this || ("undefined" != typeof window ? window : t)
            }())
        }).call(t, n(5))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        var r = n(7);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var i = {};
        i.transform = void 0;
        n(9)(r, i);
        r.locals && (e.exports = r.locals)
    }, function(e, t, n) {
        t = e.exports = n(8)(void 0), t.push([e.i, '.v *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.8;color:#555;-webkit-transition:all .3s ease;transition:all .3s ease}.v .vinput{border:none;resize:none;outline:none;padding:10px 0;max-width:100%;font-size:.775rem}.v .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v .vwrap input{background:transparent}.v .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v .vwrap .vheader.item2 .vinput{width:50%}.v .vwrap .vheader.item1 .vinput{width:100%}.v .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v .vwrap .vheader.item2 .vinput,.v .vwrap .vheader .vinput{width:100%}}.v .vwrap .vcontrol{font-size:0}.v .vwrap .vcontrol .col{display:inline-block;font-size:.725rem;vertical-align:middle;color:#ccc}.v .vwrap .vcontrol .col.text-right{text-align:right}.v .vwrap .vcontrol .col svg{margin-right:2px;overflow:hidden;fill:currentColor;vertical-align:middle}.v .vwrap .vcontrol .col.col-40{width:40%}.v .vwrap .vcontrol .col.col-60{width:60%}.v .vwrap .vcontrol .col.split{width:50%}.v .vwrap .vmark{position:absolute;background:rgba(0,0,0,.65);width:100%;height:100%;left:0;top:0}.v .vwrap .vmark .valert{padding-top:3rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}.v .vwrap .vmark .valert .vcode{width:4.6875rem;border-radius:.3125rem;padding:.5rem;background:#dedede}.v .vwrap .vmark .valert .vcode:focus{border-color:#3090e4;background-color:#fff}@media screen and (max-width:720px){.v .vwrap .vmark .valert{padding-top:5.5rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}}.v .power{color:#999}.v .power,.v .power a{font-size:.75rem}.v .vinfo{font-size:0;padding:5px}.v .vinfo .col{font-size:.875rem;display:inline-block;width:50%;vertical-align:middle}.v .vinfo .vcount .vnum{font-weight:600;font-size:1.25rem}.v a{text-decoration:none;color:#555}.v a:hover{color:#222}.v li,.v ul{list-style:none;margin:0 auto;padding:0}.v .txt-center{text-align:center}.v .txt-right{text-align:right}.v .pd5{padding:5px}.v .pd10{padding:10px}.v .veditor{width:100%;min-height:8.75rem;font-size:.875rem;background:transparent;resize:vertical}.v .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#313131;border:1px solid #ededed;border-radius:1.9rem;display:inline-block;background:#ededed;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5rem 1.25rem;font-size:.875rem;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v .vbtn+.vbtn{margin-left:1.25rem}.v .vbtn:active,.v .vbtn:hover{color:#3090e4;border-color:#3090e4;background-color:#fff}.v .vempty{padding:1.25rem;text-align:center;color:#999}.v .vlist{width:100%}.v .vlist .vcard{padding-top:1.5rem;position:relative;display:block}.v .vlist .vcard:after{content:"";clear:both;display:block}.v .vlist .vcard .vimg{width:2.5rem;height:2.5rem;float:left;border-radius:50%;margin-right:.7525rem}.v .vlist .vcard .vhead{line-height:1.5;margin-bottom:.625rem;margin-top:0}.v .vlist .vcard .vhead .vname{font-size:.875rem;font-weight:700;margin-right:.875rem;cursor:pointer}.v .vlist .vcard .vhead .vname:hover{color:#d7191a}.v .vlist .vcard .vhead .vsys{display:inline-block;padding:.2rem .5rem;background:#ededed;color:#b3b1b1;font-size:.75rem;border-radius:.2rem;margin-right:.3rem}@media screen and (max-width:520px){.v .vlist .vcard .vhead .vsys{display:none}}.v .vlist .vcard section{overflow:hidden;padding-bottom:1.5rem;border-bottom:1px dashed #f5f5f5}.v .vlist .vcard section .vfooter{position:relative}.v .vlist .vcard section .vfooter .vtime{color:#b3b3b3;font-size:.75rem;margin-right:.875rem}.v .vlist .vcard section .vfooter .vat{font-size:.8125rem;color:#ef2f11;cursor:pointer}.v .vlist .vcard .vcontent{word-wrap:break-word;word-break:break-all;text-align:justify;color:#4a4a4a;font-size:.875rem;line-height:2;position:relative;margin-bottom:.75rem}.v .vlist .vcard .vcontent a{font-size:.875rem;color:#708090;-webkit-text-decoration:double;text-decoration:double}.v .vlist .vcard .vcontent a:hover{color:#d7191a}.v .vlist .vcard .vcontent .code,.v .vlist .vcard .vcontent code,.v .vlist .vcard .vcontent pre{overflow:auto;padding:2px 6px;word-wrap:break-word;color:#555;background:#f5f2f2;border-radius:3px;font-size:.875rem;margin:5px 0}.v .vlist .vcard .vcontent.expand{cursor:pointer;max-height:11.25rem;overflow:hidden}.v .vlist .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15rem;pointer-events:none;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9))}.v .vlist .vcard .vcontent.expand:after{display:block;content:"Click on expand";text-align:center;color:#828586;position:absolute;width:100%;height:3.15rem;line-height:3.15rem;left:0;bottom:0;pointer-events:none;background:hsla(0,0%,100%,.9)}.v .vpage{padding:1rem 0}.v .vpage i{display:inline-block;padding:.05rem .65rem;font-size:.785rem;border:1px solid #f0f0f0;font-style:normal;cursor:pointer}.v .vpage i+i{margin-left:.35rem}.v .vpage i.active{border:none;color:#ccc;cursor:default}.v .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v .vloading{text-align:center;padding-top:.875rem}.v .loading{display:inline-block;border-radius:50%;width:2rem;height:2rem;border:.25rem solid #a0a0a0;border-top-color:#dcdcdc;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear}.v .loading--double{border-style:double;border-width:.5rem}', ""])
    }, function(e, t) {
        function n(e, t) {
            var n = e[1] || "",
                i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n].concat(i.sources.map(function(e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }

        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = f[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(u(r.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++) a.push(u(r.parts[o], t));
                    f[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function i(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    a = t.base ? o[0] + t.base : o[0],
                    s = o[1],
                    l = o[2],
                    c = o[3],
                    u = {
                        css: s,
                        media: l,
                        sourceMap: c
                    };
                r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                    id: a,
                    parts: [u]
                })
            }
            return n
        }

        function o(e, t) {
            var n = g(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = x[x.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = x.indexOf(e);
            t >= 0 && x.splice(t, 1)
        }

        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", c(t, e.attrs), o(e, t), t
        }

        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), o(e, t), t
        }

        function c(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }

        function u(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function() {};
                e.css = o
            }
            if (t.singleton) {
                var c = b++;
                n = m || (m = s(t)), r = d.bind(null, n, c, !1), i = d.bind(null, n, c, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = h.bind(null, n, t), i = function() {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), r = p.bind(null, n), i = function() {
                a(n)
            });
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else i()
                }
        }

        function d(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = k(t, i);
            else {
                var o = document.createTextNode(i),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }

        function p(e, t) {
            var n = t.css,
                r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function h(e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = y(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }
        var f = {},
            v = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            g = function(e) {
                var t = {};
                return function(n) {
                    return void 0 === t[n] && (t[n] = e.call(this, n)), t[n]
                }
            }(function(e) {
                return document.querySelector(e)
            }),
            m = null,
            b = 0,
            x = [],
            y = n(10);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = v()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = i(e, t);
            return r(n, t),
                function(e) {
                    for (var o = [], a = 0; a < n.length; a++) {
                        var s = n[a],
                            l = f[s.id];
                        l.refs--, o.push(l)
                    }
                    if (e) {
                        r(i(e, t), t)
                    }
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a];
                        if (0 === l.refs) {
                            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                            delete f[l.id]
                        }
                    }
                }
        };
        var k = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                var o;
                return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
            })
        }
    }, function(e, t, n) {
        n(6), e.exports = n(0)
    }])
});