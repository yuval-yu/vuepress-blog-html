(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{358:function(t,s,a){"use strict";a.r(s);var v=a(3),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"tcp与udp的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的区别"}},[t._v("#")]),t._v(" TCP与UDP的区别")]),t._v(" "),s("p",[t._v("在socket网络程序中，TCP和UDP分别是面向连接和非面向连接的。因此TCP的socket编程，收发两端（客户端和服务器端）都要有成对的socket，因此，发送端为了将多个发往接收端的包，更有效的发到对方，使用了优化方法（Nagle算法），将多次间隔较小、数据量小的数据，合并成一个大的数据块，然后进行封包。这样，接收端，就难于分辨出来了，必须提供科学的拆包机制。")]),t._v(" "),s("p",[t._v("对于UDP，不会使用块的合并优化算法，这样，实际上目前认为，是由于UDP支持的是一对多的模式，所以接收端的skbuff(套接字缓冲区）采用了链式结构来记录每一个到达的UDP包，在每个UDP包中就有了消息头（消息来源地址，端口等信息），这样，对于接收端来说，就容易进行区分处理了。所以UDP不会出现粘包问题。")]),t._v(" "),s("h2",{attrs:{id:"粘包、拆包发生原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#粘包、拆包发生原因"}},[t._v("#")]),t._v(" 粘包、拆包发生原因")]),t._v(" "),s("p",[t._v("发生TCP粘包或拆包有很多原因，现列出常见的几点，可能不全面，欢迎补充，")]),t._v(" "),s("ol",[s("li",[t._v("要发送的数据大于TCP发送缓冲区剩余空间大小，将会发生拆包。")]),t._v(" "),s("li",[t._v("待发送数据大于MSS（最大报文长度），TCP在传输前将进行拆包。")]),t._v(" "),s("li",[t._v("要发送的数据小于TCP发送缓冲区的大小，TCP将多次写入缓冲区的数据一次发送出去，将会发生粘包。")]),t._v(" "),s("li",[t._v("接收数据端的应用层没有及时读取接收缓冲区中的数据，将发生粘包。")])]),t._v(" "),s("h2",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),s("ol",[s("li",[t._v("发送端给每个数据包添加包首部，首部中应该至少包含数据包的长度，这样接收端在接收到数据后，通过读取包首部的长度字段，便知道每一个数据包的实际长度了。")]),t._v(" "),s("li",[t._v("发送端将每个数据包封装为固定长度（不够的可以通过补0填充），这样接收端每次从接收缓冲区中读取固定长度的数据就自然而然的把每个数据包拆分开来。")]),t._v(" "),s("li",[t._v("可以在数据包之间设置边界，如添加特殊符号，这样，接收端通过这个边界就可以将不同的数据包拆分开。\n等等。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);