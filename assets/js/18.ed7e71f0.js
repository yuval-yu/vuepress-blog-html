(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{334:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("转载自"),a("a",{attrs:{href:"https://www.jianshu.com/p/4002212ee4f5",target:"_blank",rel:"noopener noreferrer"}},[s._v("《线程池系列二》-ThreadPoolExecutor-线程池原理解析"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("相信大家都使用过线程池，也了解使用线程池的好处。我们使用线程池最多的还是使用Executors工具类创建FixedThreadPool、SingleThreadPool以及CachedThreadPool三种线程池，如果我们不了解其工作原理，将会碰到很多意想不到的问题，例如内存被撑爆，cpu被打满，线程池无故中断，关闭线程池应该使用shutdown()还是shutdownNow()等等一系列的问题，这篇文章将讲解为什么要是用线程池，为什么会出现上述的问题，线程池的工作原理是什么，应该选择何种线程池，如何定义线程池线程的个数等等。本文采用JDK8源码进行讲解，主要讲解原理为主，不过多的涉及到源码。")])]),s._v(" "),a("h2",{attrs:{id:"线程是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程是什么"}},[s._v("#")]),s._v(" 线程是什么")]),s._v(" "),a("p",[s._v("不讲书本知识，只是抛出一个问题：new Thread(); new Runnable(); new Callable(); （尽管不能new 接口，这里只是说明意思，不要较真），请问这代表线程吗？")]),s._v(" "),a("p",[s._v("一定要注意，这都是类，java中的类，不是线程，千万不要看到thread， runnable， callable就认为是线程，它们和Object， List，Map一样是java语言的类而已。 或者可以说他们是任务，线程执行的任务，因为他们内部都有线程要执行的方法run()或者call()，那什么才是线程呢？")]),s._v(" "),a("p",[s._v("new Thread().start(); 调用了start()方法才会在操作系统层面启动一个线程，除此之外都是承载了线程执行方法的类而已。这一点大家一定要分清楚。")]),s._v(" "),a("h2",{attrs:{id:"多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[s._v("#")]),s._v(" 多线程")]),s._v(" "),a("p",[s._v("多线程一定比单线程快吗？这个答案是否定的，在单核处理器环境下，多个线程执行任务势必会引起线程上下文切换，上下文切换会对当前线程的执行环境进行保存，并还原将要执行线程的执行环境，存在开销。多线程与单线程相比，多出了上下文切换的时间，因此在单核处理器环境下，多线程并不会提高性能。")]),s._v(" "),a("p",[s._v("现今，处理基本上都是多核多处理器，因此合理使用多线程编程将取很大的性能提升。但是当线程数过多，引起过多的上下文切换，当上下文切换的开销大于多线程带来的收益的话，性能将会下降。滥用多线程将会是一场灾难。")]),s._v(" "),a("h2",{attrs:{id:"线程池的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的引入"}},[s._v("#")]),s._v(" 线程池的引入")]),s._v(" "),a("p",[s._v("首先从线程类Thread讲起，Thread类具有两个功能：")]),s._v(" "),a("ol",[a("li",[s._v("维护线程 线程的创建、休眠、中断、暂停、销毁")]),s._v(" "),a("li",[s._v("执行任务 Thread类及其子类run()， Runnable对象的run(), Callable对象的call() （更准确的说应该是FutureTask，因为Callable对象并不能传入Thread类）")])]),s._v(" "),a("p",[s._v("Thread类将线程和任务耦合在一起，一般的使用方式为：有多少个任务就需要多少个线程去执行，并发的任务数太多，就会引起大量的上下文切换，以及线程的创建与销毁（线程的创建和销毁都设计到内核态和用户态的转换，开销也不容小觑）。")]),s._v(" "),a("p",[s._v("为了能对线程进行统一的管理和复用，引入了线程池。线程池对线程进行统一的管理，并可以弹性的扩展，将执行任务和线程完全分离，任务存放到阻塞队列中，线程不断的去阻塞队列中取任务执行。从而达到线程复用的目的（说白了，线程在死循环中去阻塞队列获取数据，如果获取不到就阻塞，如果获取到就执行，其run（）方法一直执行），这样线程与任务个数比为m:n 其中"),a("code",[s._v("m<n")])]),s._v(" "),a("p",[s._v("因此，编写多线程程序时，我们最好使用线程池。")]),s._v(" "),a("h2",{attrs:{id:"线程池的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的参数"}},[s._v("#")]),s._v(" 线程池的参数")]),s._v(" "),a("ul",[a("li",[s._v("corePoolSize")])]),s._v(" "),a("p",[s._v("核心线程数，当提交任务时如果线程数小于corePoolSize，则直接创建线程执行该任务，否则，将任务添加到阻塞队列")]),s._v(" "),a("ul",[a("li",[s._v("maximumPoolSize")])]),s._v(" "),a("p",[s._v("最大线程数，当提交任务时，任务需添加到阻塞队列且阻塞队列满时，如果线程数小于maximumPoolSize，则创建线程执行该任务，否则执行拒绝策略")]),s._v(" "),a("p",[s._v("注：如果阻塞队列采用的是无界队列的话，该参数无意义，因为阻塞队列无界就永远不会满")]),s._v(" "),a("ul",[a("li",[s._v("keepAliveTime")])]),s._v(" "),a("p",[s._v("线程空闲时间，空闲时间超过该时间则销毁线程，只对大于corePoolSize~maximumPoolSize的线程有效，即至少保留corePoolSize个线程，即便空闲时间大于keepAliveTime也不销毁。（核心线程也是可以销毁的，需要设置核心线程过期）")]),s._v(" "),a("p",[s._v("注：如果阻塞队列为无界，则maximumPoolSize无意义，那么keepAliveTime也就无意义")]),s._v(" "),a("ul",[a("li",[s._v("unit")])]),s._v(" "),a("p",[s._v("keepAliveTime的时间单位")]),s._v(" "),a("ul",[a("li",[s._v("workQueue")])]),s._v(" "),a("p",[s._v("阻塞队列，分为有界队列和无界队列，一般使用LinkedBlockingQueue、SynchronousQueue，用于存放任务，阻塞队列的泛型必须是Runnable")]),s._v(" "),a("ul",[a("li",[s._v("threadFactory")])]),s._v(" "),a("p",[s._v("线程工厂，负责创建线程，指定线程名，线程组，线程优先级，是否为守护线程等信息")]),s._v(" "),a("ul",[a("li",[s._v("handler")])]),s._v(" "),a("p",[s._v("拒绝策略，当阻塞队列放不下，且线程数达到最大值maximumPoolSize时，再提交任务，改任务会被拒绝。目前，JDK提供了四种拒绝策略")]),s._v(" "),a("ol",[a("li",[s._v("CallerRunsPolicy 调用线程执行策略，当前执行的线程执行该任务，可以保证任务不丢失，减缓任务添加的速度")]),s._v(" "),a("li",[s._v("AbortPolicy 直接抛出异常，会导致线程池抛异常，线程池不可用，默认拒绝策略")]),s._v(" "),a("li",[s._v("DiscardPolicy 直接丢弃该任务")]),s._v(" "),a("li",[s._v("DiscardOldestPolicy 丢弃最老的任务，重试添加该任务")])]),s._v(" "),a("p",[s._v("注：如果阻塞队列为无界，则拒绝策略无效，因为不会存在任务放不下的情况，也可以自定义自己的拒绝策略。该参数一定要重视")]),s._v(" "),a("h2",{attrs:{id:"线程池的构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的构造函数"}},[s._v("#")]),s._v(" 线程池的构造函数")]),s._v(" "),a("p",[s._v("构造线程池无非就是为上节中介绍的几个参数赋值，源码如下")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("corePoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        maximumPoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        maximumPoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" corePoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n        keepAliveTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IllegalArgumentException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("workQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" threadFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NullPointerException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("corePoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" corePoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("maximumPoolSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" maximumPoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("workQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" workQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keepAliveTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toNanos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keepAliveTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("threadFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" threadFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("其他的构造函数，都是间接调用该构造函数")]),s._v(" "),a("h2",{attrs:{id:"线程池的工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的工作原理"}},[s._v("#")]),s._v(" 线程池的工作原理")]),s._v(" "),a("ol",[a("li",[s._v("提交任务，如果"),a("code",[s._v("当前线程数<corPoolSize")]),s._v("，"),a("strong",[s._v("不管是否有空闲线程都会创建新的线程执行")])]),s._v(" "),a("li",[s._v("如果"),a("code",[s._v("当前线程数>=corPoolSize")]),s._v("，将任务提交给阻塞队列")]),s._v(" "),a("li",[s._v("如果阻塞队列不满，添加到阻塞队列，否则执行4")]),s._v(" "),a("li",[s._v("如果"),a("code",[s._v("当前线程数<maxPoolSize")]),s._v(",且不存在空闲线程则创建一个线程执行该任务，否则执行5")]),s._v(" "),a("li",[s._v("执行拒绝策略")])]),s._v(" "),a("p",[a("strong",[s._v("第一步需要注意的是在提交任务时，excutor会不会判断有无空闲线程，答案是不会，因为如果每次提交任务都需要判断有无空闲线程，将会造成很大的开销，excutor的做法是，启动的每一个worker在空闲时都会去阻塞队里阻塞的获取任务，如果没有任务则worker会阻塞，因为worker到底空不空闲worker自己是最清楚的。")])]),s._v(" "),a("p",[s._v("线程执行完一个任务之后，会从阻塞队列中获取任务，如果没有任务可以获取，则阻塞等待，如果有任务则直接获取执行。与此同时，线程池中有专门的线程坚持线程的空闲时间（等待任务的时间），如果超过指定时间且线程数>corePoolSize，就销毁线程。")]),s._v(" "),a("h3",{attrs:{id:"executors提供的三种线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executors提供的三种线程池"}},[s._v("#")]),s._v(" Executors提供的三种线程池")]),s._v(" "),a("ul",[a("li",[s._v("FixedThreadPool")])]),s._v(" "),a("p",[s._v("固定大小的线程池，其源代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newFixedThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nThreads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("通过源码可以看出，线程池的corePoolSize和maximumPoolSize都为指定大小，阻塞队列使用无界阻塞队列（看到无界阻塞队列，就应该想到maximumPoolSize、keepAliveTime、handler都无效），因此，该方法中有用的参数只有corePoolSize和workQueue是有意义的。")]),s._v(" "),a("p",[s._v("存在的问题：当任务执行的较慢，且任务提交的速度过快时，会有大量的任务存放到阻塞队列中，阻塞队列会越来越大，内存会被撑爆，使用该线程池时，一定要考虑清楚。")]),s._v(" "),a("p",[s._v("除了该方法外，Executors还提供了重载方法，可以指定ThreadFactory，但是却没有提供修改阻塞队列的重载方法")]),s._v(" "),a("p",[s._v("使用场景： 负载较重的服务器")]),s._v(" "),a("ul",[a("li",[s._v("SingleThreadPool")])]),s._v(" "),a("p",[s._v("当个线程的线程池，与FixedThreadPool相比就是将线程数指定为1，同样该线程池存在FixedThreadPool存在的问题，其源码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newSingleThreadExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FinalizableDelegatedExecutorService")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MILLISECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("与FixedThreadPool类型，Executors也提供了指定ThreadFactory的重载方法")]),s._v(" "),a("p",[s._v("使用场景： 单线程执行环境，保证顺序执行各个任务的场景")]),s._v(" "),a("ul",[a("li",[s._v("CachedThreadPool")])]),s._v(" "),a("p",[s._v("使用SynchronousQueue阻塞队列，该队列不保存元素，有任务提交到阻塞队列时，任务必须立即被处理。源码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExecutorService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("newCachedThreadPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SECONDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronousQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("从源码中可以看出，maximumPoolSize的值为Integer.MAX_VALUE，意味着只要有任务到达，且线程池内没有空闲线程，就给任务开辟一个线程去执行。线程空闲60s就销毁")]),s._v(" "),a("p",[s._v("存在问题：如果任务执行时间长，提交速度快，那么会产生大量的线程，引起上下文切换，应用可能会出现假死或者崩溃的情况。")]),s._v(" "),a("p",[s._v("同样，这种类型的线程池，也提供了一个指定ThreadFactory的重载方法"),a("br"),s._v("\n使用场景：适用于大量短期异步任务，或者负载较轻的服务器")]),s._v(" "),a("p",[s._v("由此可见：Executors提供的三种线程池都各自有优缺点，如果使用线程池，建议不要使用这三种线程池，而是直接通过线程池的构造方法指定自己的corePoolSize，maximumPoolSize，keepAliveTime，阻塞队列workQueue，ThreadFactory，拒绝策略，自己指定的优点就是可以根据自己的场景灵活的对各个参数进行配置。")]),s._v(" "),a("h2",{attrs:{id:"线程池提交任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池提交任务"}},[s._v("#")]),s._v(" 线程池提交任务")]),s._v(" "),a("ul",[a("li",[s._v("submit()")])]),s._v(" "),a("p",[s._v("提交有返回值的任务，返回值为Future类型（真正的类型是RunnableFuture，而实现RunnableFuture接口的在JDK实现中对外可以使用的就只有FutureTask类")]),s._v(" "),a("p",[s._v("有关FutureTask的相关知识可以参考我的另外一篇文章： "),a("a",{attrs:{href:"https://www.jianshu.com/p/36f8f3b8ee55",target:"_blank",rel:"noopener noreferrer"}},[s._v("FutureTask原理讲解与源码剖析"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("ul",[a("li",[s._v("execute()")])]),s._v(" "),a("p",[s._v("提交没有返回值的任务")]),s._v(" "),a("h3",{attrs:{id:"线程池关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池关闭"}},[s._v("#")]),s._v(" 线程池关闭")]),s._v(" "),a("ul",[a("li",[s._v("shutdown()")])]),s._v(" "),a("p",[s._v("将线程池的状态修改为shutdown，禁止向线程池中提交任务，并执行完已经提交的任务")]),s._v(" "),a("ul",[a("li",[s._v("shutdonwNow()")])]),s._v(" "),a("p",[s._v("将线程池的状态修改为stop， 立即终止线程池中的线程， 不处理阻塞队列中的任务，返回没有执行任务的列表")]),s._v(" "),a("p",[s._v("可以通过isTerminated()方法判断线程池是否完全关闭"),a("br"),s._v("\n也可以通过awaitTermination(long timeout, TimeUnit unit)最长等待一段时间后退出，但并不能保证关闭")]),s._v(" "),a("h2",{attrs:{id:"如何分配线程池的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何分配线程池的大小"}},[s._v("#")]),s._v(" 如何分配线程池的大小")]),s._v(" "),a("p",[s._v("一般来讲没有上下文切换的多线程程序是最好的，因此，如果有n个核，那么启动n个线程就可以。但是线程并不是一直处于运行状态（可能在等待IO放弃了cpu资源），这样cpu资源就会浪费，因此我们一般针对不同的任务设定不同的线程数。")]),s._v(" "),a("p",[s._v("首先我们应该获取服务器的线程数，可以通过如下代码获取：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Runtime.getRuntime().availableProcessors();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意，如果使用docker容器，使用该参数获取的是实机的核数，并不是分配给docker容器的核数，如果碰到需要修改， 具体情况具体分析。")]),s._v(" "),a("ol",[a("li",[s._v("针对IO密集型任务：一般分配2*p个线程（p代表服务器cpu总核数）")]),s._v(" "),a("li",[s._v("针对cpu密集型任务： 一般分配 p+1个线程")])]),s._v(" "),a("h2",{attrs:{id:"线程池的监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的监控"}},[s._v("#")]),s._v(" 线程池的监控")]),s._v(" "),a("p",[s._v("线程池提供了很多参数，来记录线程池中各个状态，了解即可：")]),s._v(" "),a("ol",[a("li",[s._v("taskCount 线程池执行任务总数")]),s._v(" "),a("li",[s._v("completedTaskCount 已执行完成任务数量")]),s._v(" "),a("li",[s._v("largestPoolSize 创建过最大的线程数")]),s._v(" "),a("li",[s._v("getPoolSize() 当前线程数量")]),s._v(" "),a("li",[s._v("getActiveCount() 活动线程数")])]),s._v(" "),a("p",[s._v("除此之外，还可以继承线程池类定义自己的线程池实现， 可以重写 beforeExecute(), afterExecute(), terminated()方法设置监控")])])}),[],!1,null,null,null);a.default=n.exports}}]);