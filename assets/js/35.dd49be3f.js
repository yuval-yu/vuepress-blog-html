(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{351:function(t,v,_){"use strict";_.r(v);var r=_(3),e=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"分类一-按操作方式-类结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类一-按操作方式-类结构"}},[t._v("#")]),t._v(" 分类一：按操作方式（类结构）")]),t._v(" "),v("p",[v("strong",[t._v("字节流和字符流：")])]),t._v(" "),v("ul",[v("li",[t._v("字节流：以字节为单位，每次次读入或读出是8位数据。可以读任何类型数据。")]),t._v(" "),v("li",[t._v("字符流：以字符为单位，每次次读入或读出是16位数据。其只能读取字符类型数据。")])]),t._v(" "),v("p",[v("strong",[t._v("输出流和输入流：")])]),t._v(" "),v("ul",[v("li",[t._v("输出流：从内存读出到文件。只能进行写操作。")]),t._v(" "),v("li",[t._v("输入流：从文件读入到内存。只能进行读操作。")])]),t._v(" "),v("p",[v("strong",[t._v("注意：")]),t._v(" 这里的出和入，都是相对于系统内存而言的。")]),t._v(" "),v("p",[v("strong",[t._v("节点流和处理流：")])]),t._v(" "),v("ul",[v("li",[t._v("节点流：直接与数据源相连，读入或读出。")]),t._v(" "),v("li",[t._v("处理流：与节点流一块使用，在节点流的基础上，再套接一层，套接在节点流上的就是处理流。")])]),t._v(" "),v("p",[v("strong",[t._v("为什么要有处理流？")])]),t._v(" "),v("p",[t._v("直接使用节点流，读写不方便，为了更快的读写文件，才有了处理流。")]),t._v(" "),v("h3",{attrs:{id:"分类说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类说明"}},[t._v("#")]),t._v(" 分类说明：")]),t._v(" "),v("p",[v("strong",[t._v("1. 输入字节流InputStream：")])]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("ByteArrayInputStream、StringBufferInputStream、FileInputStream")]),t._v(" 是三种基本的介质流，它们分别从Byte 数组、StringBuffer、和本地文件中读取数据。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("PipedInputStream")]),t._v(" 是从与其它线程共用的管道中读取数据。PipedInputStream的一个实例要和PipedOutputStream的一个实例共同使用，共同完成管道的读取写入操作。主要用于线程操作。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("DataInputStream：")]),t._v(" 将基础数据类型读取出来")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("ObjectInputStream")]),t._v(" 和所有 FilterInputStream 的子类都是装饰流（装饰器模式的主角）。")])])]),t._v(" "),v("p",[v("strong",[t._v("2. 输出字节流OutputStream：")])]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("ByteArrayOutputStream、FileOutputStream：")]),t._v(" 是两种基本的介质流，它们分别向- Byte 数组、和本地文件中写入数据。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("PipedOutputStream")]),t._v(" 是向与其它线程共用的管道中写入数据。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("DataOutputStream")]),t._v(" 将基础数据类型写入到文件中")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("ObjectOutputStream")]),t._v(" 和所有 FilterOutputStream 的子类都是装饰流。")])])]),t._v(" "),v("p",[v("strong",[t._v("3. 字符输入流Reader:")])]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("FileReader、CharReader、StringReader")]),t._v(" 是三种基本的介质流，它们分在本地文件、Char 数组、String中读取数据。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("PipedReader：")]),t._v(" 是从与其它线程共用的管道中读取数据")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("BufferedReader ：")]),t._v(" 加缓冲功能，避免频繁读写硬盘")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("InputStreamReader：")]),t._v(" 是一个连接字节流和字符流的桥梁，它将字节流转变为字符流。")])])]),t._v(" "),v("p",[v("strong",[t._v("4. 字符输出流Writer：")])]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("StringWriter:")]),t._v(" 向String 中写入数据。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("CharArrayWriter：")]),t._v(" 实现一个可用作字符输入流的字符缓冲区")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("PipedWriter:")]),t._v(" 是向与其它线程共用的管道中写入数据")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("BufferedWriter ：")]),t._v(" 增加缓冲功能，避免频繁读写硬盘。")])]),t._v(" "),v("li"),t._v(" "),v("li",[v("p",[v("strong",[t._v("PrintWriter 和PrintStream")]),t._v(" 将对象的格式表示打印到文本输出流。 极其类似，功能和使用也非常相似")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("OutputStreamWriter：")]),t._v(" 是OutputStream 到Writer 转换的桥梁，它的子类FileWriter 其实就是一个实现此功能的具体类（具体可以研究一SourceCode）。功能和使用和OutputStream 极其类似，后面会有它们的对应图。")])])]),t._v(" "),v("h3",{attrs:{id:"分类说明-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类说明-2"}},[t._v("#")]),t._v(" 分类说明：")]),t._v(" "),v("p",[v("strong",[t._v("对文件进行操作（节点流）：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("FileInputStream（字节输入流），")])]),t._v(" "),v("li",[v("p",[t._v("FileOutputStream（字节输出流），")])]),t._v(" "),v("li",[v("p",[t._v("FileReader（字符输入流），")])]),t._v(" "),v("li",[v("p",[t._v("FileWriter（字符输出流）")])])]),t._v(" "),v("p",[v("strong",[t._v("对管道进行操作（节点流）：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("PipedInputStream（字节输入流）,")])]),t._v(" "),v("li",[v("p",[t._v("PipedOutStream（字节输出流），")])]),t._v(" "),v("li",[v("p",[t._v("PipedReader（字符输入流），")])]),t._v(" "),v("li",[v("p",[t._v("PipedWriter（字符输出流）。")])]),t._v(" "),v("li",[v("p",[t._v("PipedInputStream的一个实例要和PipedOutputStream的一个实例共同使用，共同完成管道的读取写入操作。主要用于线程操作。")])])]),t._v(" "),v("p",[v("strong",[t._v("字节/字符数组流（节点流）：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ByteArrayInputStream，")])]),t._v(" "),v("li",[v("p",[t._v("ByteArrayOutputStream，")])]),t._v(" "),v("li",[v("p",[t._v("CharArrayReader，")])]),t._v(" "),v("li",[v("p",[t._v("CharArrayWriter；")])])]),t._v(" "),v("p",[v("strong",[t._v("除了上述三种是节点流，其他都是处理流，需要跟节点流配合使用。")])]),t._v(" "),v("p",[v("strong",[t._v("Buffered缓冲流（处理流）")]),t._v("：带缓冲区的处理流，缓冲区的作用的主要目的是：避免每次和硬盘打交道，提高数据访问的效率。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("BufferedInputStream，")])]),t._v(" "),v("li",[v("p",[t._v("BufferedOutputStream，")])]),t._v(" "),v("li",[v("p",[t._v("BufferedReader,")])]),t._v(" "),v("li",[v("p",[t._v("BufferedWriter,")])])]),t._v(" "),v("p",[v("strong",[t._v("转化流（处理流）：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("InputStreamReader：把字节转化成字符；")])]),t._v(" "),v("li",[v("p",[t._v("OutputStreamWriter：把字节转化成字符。")])])]),t._v(" "),v("p",[v("strong",[t._v("基本类型数据流（处理流）：用于操作基本数据类型值。")])]),t._v(" "),v("p",[t._v("因为平时若是我们输出一个8个字节的long类型或4个字节的float类型，那怎么办呢？可以一个字节一个字节输出，也可以把转换成字符串输出，但是这样转换费时间，若是直接输出该多好啊，因此这个数据流就解决了我们输出数据类型的困难。数据流可以直接输出float类型或long类型，提高了数据读写的效率。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("DataInputStream，")])]),t._v(" "),v("li",[v("p",[t._v("DataOutputStream。")])])]),t._v(" "),v("p",[v("strong",[t._v("打印流（处理流）：")])]),t._v(" "),v("p",[t._v("一般是打印到控制台，可以进行控制打印的地方。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("PrintStream，")])]),t._v(" "),v("li",[v("p",[t._v("PrintWriter，")])])]),t._v(" "),v("p",[v("strong",[t._v("对象流（处理流）：")])]),t._v(" "),v("p",[t._v("把封装的对象直接输出，而不是一个个在转换成字符串再输出。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ObjectInputStream，对象反序列化；")])]),t._v(" "),v("li",[v("p",[t._v("ObjectOutputStream，对象序列化；")])])]),t._v(" "),v("p",[v("strong",[t._v("合并流（处理流）：")])]),t._v(" "),v("ul",[v("li",[t._v("SequenceInputStream：可以认为是一个工具类，将两个或者多个输入流当成一个输入流依次读取。")])]),t._v(" "),v("p",[v("strong",[t._v("其他类：File（已经被Java7的Path取代）")])]),t._v(" "),v("p",[t._v("File类是对文件系统中文件以及文件夹进行封装的对象，可以通过对象的思想来操作文件和文件夹。 File类保存文件或目录的各种元数据信息，包括文件名、文件长度、最后修改时间、是否可读、获取当前文件的路径名，判断指定文件是否存在、获得当前目录中的文件列表，创建、删除文件和目录等方法。")]),t._v(" "),v("p",[v("strong",[t._v("其他类：RandomAccessFile")])]),t._v(" "),v("p",[t._v("该对象并不是流体系中的一员，其封装了字节流，同时还封装了一个缓冲区（字符数组），通过内部的指针来操作字符数组中的数据。 该对象特点：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("该对象只能操作文件，所以构造函数接收两种类型的参数：a.字符串文件路径；b.File对象。")])]),t._v(" "),v("li",[v("p",[t._v("该对象既可以对文件进行读操作，也能进行写操作，在进行对象实例化时可指定操作模式(r,rw)。")])])]),t._v(" "),v("p",[v("strong",[t._v("注意：")])]),t._v(" "),v("p",[t._v("IO中的很多内容都可以使用NIO完成，这些知识点大家知道就好，使用的话还是尽量使用NIO/AIO。")])])}),[],!1,null,null,null);v.default=e.exports}}]);