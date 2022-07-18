(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{324:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("blockquote",[s("p",[a._v("CAS 全拼为 "),s("code",[a._v("Compare And Swap")]),a._v(" 比较和交换, 也有人理解为 "),s("code",[a._v("Compare And Set")]),a._v("比较和赋值")])]),a._v(" "),s("h2",{attrs:{id:"锁与共享变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁与共享变量"}},[a._v("#")]),a._v(" 锁与共享变量")]),a._v(" "),s("ul",[s("li",[a._v("加锁是一种悲观的策略，它总是认为每次访问共享资源的时候，总会发生冲突，所以宁愿牺牲性能（时间）来保证数据安全。")]),a._v(" "),s("li",[a._v("无锁是一种乐观的策略，它假设线程访问共享资源不会发生冲突，所以不需要加锁，因此线程将不断执行，不需要停止。一旦碰到冲突，就重试当前操作直到没有冲突为止。")]),a._v(" "),s("li",[a._v("无锁的策略使用一种叫做比较交换的技术（CAS Compare And Swap）来鉴别线程冲突，一旦检测到冲突产生，就重试当前操作直到没有冲突为止。")])]),a._v(" "),s("h2",{attrs:{id:"cas原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cas原理"}},[a._v("#")]),a._v(" CAS原理")]),a._v(" "),s("p",[a._v("执行函数：CAS(V，E，N)")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("V: 准备要被更新的变量\nE: 期望值\nN: 表示新值\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("V是共享变量，我们拿着自己准备的这个E，去跟V去比较，如果E == V ，说明当前没有其它线程在操作，所以，我们把N 这个值 写入对象的 V 变量中。如果 E ！= V ，说明我们准备的这个E，已经过时了，所以我们要重新准备一个最新的E ，去跟V 比较，比较成功后才能更新 V的值为N。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207205126.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"aba问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aba问题"}},[a._v("#")]),a._v(" ABA问题")]),a._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("int a = 0;\nThread t1,t2,t3;\nt1: a=1   cas(0,0,1)\nt2: a=0   cas(1,1,0)\nt3: a=1   cas(0,0,1)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("在上方伪代码的情况下,")]),a._v(" "),s("ol",[s("li",[a._v("线程t1使用cas将a从0修改为1, 期望值为0(成立)")]),a._v(" "),s("li",[a._v("线程t2使用cas将a从1修改为0, 期望值为1(成立)")]),a._v(" "),s("li",[a._v("线程t3使用cas将a从0修改为1, 期望值为0(成立)")])]),a._v(" "),s("p",[a._v("可以看到, 在 t3 进行对a进行修改的时候, a的值已经被t1,t2修改过了, 这就是aba问题")]),a._v(" "),s("h3",{attrs:{id:"解决思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[a._v("#")]),a._v(" 解决思路")]),a._v(" "),s("p",[a._v("解决办法很简单, 在cas的时候设置进去一个版本号, 用于记录. 每次修改都对版本号进行变更")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CAS(V，E, version，N)\nint a = 0;\nThread t1,t2,t3;\nt1: a=1   cas(0,0,0,1)\nt2: a=0   cas(1,1,1,0)\nt3: a=1   cas(0,0,2,1)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("这样在t3 进行修改的时候发现版本号不对, 修改失败.")]),a._v(" "),s("h2",{attrs:{id:"无锁的效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无锁的效果"}},[a._v("#")]),a._v(" 无锁的效果")]),a._v(" "),s("ul",[s("li",[a._v("如果多个线程同时使用CAS操作一个变量的时候，只有一个线程能够修改成功。其余的线程提供的期望值已经与共享变量的值不一样了，所以均会失败。")]),a._v(" "),s("li",[a._v("由于CAS操作属于乐观派，它总是认为自己能够操作成功，所以操作失败的线程将会再次发起操作，而不是被OS挂起。所以说，即使CAS操作没有使用同步锁，其它线程也能够知道对共享变量的影响。")]),a._v(" "),s("li",[a._v("因为其它线程没有被挂起，并且将会再次发起修改尝试，所以无锁操作即CAS操作天生免疫死锁。")]),a._v(" "),s("li",[a._v("另外一点需要知道的是，CAS是系统原语，CAS操作是一条CPU的原子指令，所以不会有线程安全问题。")])]),a._v(" "),s("p",[a._v("转自"),s("a",{attrs:{href:"https://blog.csdn.net/yanluandai1985/article/details/82686486",target:"_blank",rel:"noopener noreferrer"}},[a._v("无锁机制----比较交换CAS"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);