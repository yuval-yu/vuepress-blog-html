(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{353:function(n,s,a){"use strict";a.r(s);var e=a(3),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"懒汉模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒汉模式"}},[n._v("#")]),n._v(" 懒汉模式")]),n._v(" "),s("h3",{attrs:{id:"懒汉模式-初始版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒汉模式-初始版"}},[n._v("#")]),n._v(" 懒汉模式(初始版)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class Singleton {\n    private static Singleton singleton;\n\n\n    private Singleton() {\n    }\n\n    public Singleton getInstance() {\n\n        synchronized (Singleton.class) {\n            if (singleton == null) {\n                singleton = new Singleton();\n            }\n        }\n        return singleton;\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("p",[n._v("可以看到此时的懒汉模式的性能是非常差的, 每次将对它进行加锁后进行获取. 下面将对它进行优化")]),n._v(" "),s("h3",{attrs:{id:"懒汉模式-加强版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒汉模式-加强版"}},[n._v("#")]),n._v(" 懒汉模式(加强版)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class Singleton {\n    private static Singleton singleton;\n\n\n    private Singleton() {\n    }\n\n    public Singleton getInstance() {\n        if (singleton == null){\n            synchronized (Singleton.class) {\n                if (singleton == null) {\n                    singleton = new Singleton();\n                }\n            }\n        }\n        return singleton;\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("在获取"),s("code",[n._v("singleton")]),n._v("的时候,只有"),s("code",[n._v("singleton")]),n._v("为空时才会对代码进行加锁,大大提高了程序的效率.\n但是我们仔细看其中的创建对象的部分, 这个单例模式真的是线程安全的吗?\n在JVM中"),s("code",[n._v("Singleton singleton = new Singleton();")]),n._v("并不是一个原子性的操作,会执行以下三个步骤")]),n._v(" "),s("ol",[s("li",[n._v("给 "),s("code",[n._v("singleton")]),n._v(" 分配空间、")]),n._v(" "),s("li",[n._v("调用 "),s("code",[n._v("Singleton")]),n._v(" 的构造函数来初始化、")]),n._v(" "),s("li",[n._v("将"),s("code",[n._v("singleton")]),n._v("对象指向分配的内存空间, "),s("code",[n._v("singleton")]),n._v("指向分配的内存空间后就不为"),s("code",[n._v("null")]),n._v("了;")])]),n._v(" "),s("p",[n._v("由于JVM的指令重排, 我们无法确保这三个步骤都在线程2在进行"),s("code",[n._v("if (singleton == null)")]),n._v("的时候已经执行了"),s("code",[n._v("2步骤")]),n._v(", 这时线程2获取到的"),s("code",[n._v("singleton")]),n._v("对象就是一个空对象,如果调用就会引发空指针异常")]),n._v(" "),s("h3",{attrs:{id:"懒汉模式-最终版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒汉模式-最终版"}},[n._v("#")]),n._v(" 懒汉模式(最终版)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class Singleton {\n    private volatile static Singleton singleton;\n\n\n    private Singleton() {\n    }\n\n    public Singleton getInstance() {\n        if (singleton == null){\n            synchronized (Singleton.class) {\n                if (singleton == null) {\n                    singleton = new Singleton();\n                }\n            }\n        }\n        return singleton;\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[s("code",[n._v("volatile")]),n._v(" 关键字禁止了指令重排, 可以完美解决上方因指令重拍引发的问题")]),n._v(" "),s("h2",{attrs:{id:"枚举模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举模式"}},[n._v("#")]),n._v(" 枚举模式")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class Singleton {\n    private Singleton() {\n    }\n\n    public static enum SingletonHandler {\n        SINGLETON;\n        private Singleton singleton;\n\n        SingletonHandler() {\n            singleton = new Singleton();\n        }\n\n        public Singleton getInstance() {\n            return singleton;\n        }\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);