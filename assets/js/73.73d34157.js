(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{389:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"lua5-1-number-转-string-问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua5-1-number-转-string-问题"}},[s._v("#")]),s._v(" lua5.1 number 转 string 问题")]),s._v(" "),t("p",[s._v("部分number类型转为string类型会造成后几位错误, 如下")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234209856723049856")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" numStr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%.0f"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tostring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 运行")]),s._v("\nlua5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lua\nnumber  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.234209856723e+18")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234209856723049984")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("blockquote",[t("p",[s._v("该问题在lua5.3得到了解决, 但是由于kong不支持lua5.3, 所以在kong中暂时不能做这种转换")])]),s._v(" "),t("h2",{attrs:{id:"cjson转换如果key为字符串则不保证顺序性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cjson转换如果key为字符串则不保证顺序性"}},[s._v("#")]),s._v(" cjson转换如果key为字符串则不保证顺序性")]),s._v(" "),t("h3",{attrs:{id:"encode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encode"}},[s._v("#")]),s._v(" encode")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cjson "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cjson"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cjson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" tab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  aa "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" tabKeyNum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tab"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tabKeyNum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"decode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decode"}},[s._v("#")]),s._v(" decode")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" cjson "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cjson"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTableStr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tabStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pairs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cjson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tabStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" tabStr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"a\\":\\"1\\",\\"b\\":2,\\"c\\":3,\\"d\\":\\"4\\"}"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" tabNum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[\\"22\\",\\"1\\",\\"2\\",\\"3\\",\\"4\\"]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTableStr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tabStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printTableStr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tabNum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"konga不支持插件配置文件使用复杂类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#konga不支持插件配置文件使用复杂类型"}},[s._v("#")]),s._v(" konga不支持插件配置文件使用复杂类型")]),s._v(" "),t("p",[s._v("比如"),t("code",[s._v("List<Object>")]),s._v(","),t("code",[s._v("map")]),s._v(" 等, kong本身是支持的, 但是konga中不能正常显示和修改")]),s._v(" "),t("blockquote",[t("p",[s._v("在一些kong的自带插件中有使用到类似的类型, konga中也能正常显示与修改, 但是这实际上是konga采用硬编码的方式对指定的插件做了兼容, 如果将插件复制一份修改下名字就会发现不支持了"),t("code",[s._v("-_-||")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);