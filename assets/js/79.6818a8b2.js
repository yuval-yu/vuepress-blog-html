(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{395:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("递归解法\n这题有个很骚气的递归解法，递归解法很不好理解，这里最好配合代码和动画一起理解。\n递归的两个条件：")]),t._v(" "),s("p",[t._v("终止条件是当前节点或者下一个节点==null\n在函数内部，改变节点的指向，也就是 head 的下一个节点指向 head 递归函数那句")]),t._v(" "),s("p",[t._v("head.next.next = head\n很不好理解，其实就是 head 的下一个节点指向head。\n递归函数中每次返回的 cur 其实只最后一个节点，在递归函数内部，改变的是当前节点的指向。\n动画演示如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210831212308.gif",alt:"递归.gif"}})]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//递归终止条件是当前为空，或者下一个节点为空")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里的cur就是最后一个节点")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里请配合动画演示理解")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果链表是 1->2->3->4->5，那么此时的cur就是5")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//而head是4，head的下一个是5，下下一个是空")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所以head.next.next 就是5->4")]),t._v("\n\t\thead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//防止链表循环，需要将head.next设置为空")]),t._v("\n\t\thead"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每层递归函数都返回cur，也就是最后一个节点")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("作者：wang_ni_ma\n链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/\n来源：力扣（LeetCode）")])])}),[],!1,null,null,null);s.default=e.exports}}]);