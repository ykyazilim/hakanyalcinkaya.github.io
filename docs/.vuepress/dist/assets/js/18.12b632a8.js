(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{297:function(t,a,s){"use strict";s.r(a);var n=s(37),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Title"),t._v(" "),s("p",[t._v("Senaryomuz:\nrequest.GET ile gelen first_name bilgisini alıp eğer Model'in içinde bu tanım varsa eklemek istiyoruz. Fakat gelen tanımı "),s("strong",[t._v("user.first_name")]),t._v(" olarak kullanmak yerine GET ile birlikte gelen KEY, VALUE şeklinde kullanmak istersek ne yapmamız lazım ? eğer key bilgisini alırsak key; user.'first_name' olarak geliyor, biz bu şekilde veri tabanına yazamayız. Bu yüzden setattr ile Instance'a veri eklemeyi göstereceğim.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gelen bilgi")]),t._v("\ndict_request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dict içindeki ilk bilgiyi almaya çalışıyoruz:")]),t._v("\nitem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dict_request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakanyalcinkaya@gmail.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hatalı Olan:")]),t._v("\nuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bu kodda gördüğünüz gibi string veri istediğimiz gibi işlenmedi.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# setattr ile birlikte:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("setattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Bonus:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# instance içindeki attribute'u almak için:")]),t._v("\n\nitem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first_name'")]),t._v("\nuser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakanyalcinkaya@gmail.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngetattrb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),t._v("\n")])])])])],1)},[],!1,null,null,null);e.options.__file="002-python-setattr-ile-instance-a-parametre-gondermek.md";a.default=e.exports}}]);