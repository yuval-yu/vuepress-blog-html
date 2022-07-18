(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{377:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("blockquote",[a("p",[s._v("Docker 是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，并发布和应用到任意平台中。比如，你在本地用 Python 开发网站后台，开发测试完成后，就可以将 Python3 及其依赖包、Flask 及其各种插件、Mysql、Nginx 等打包到一个容器中，然后部署到任意你想部署到的环境。")])]),s._v(" "),a("ul",[a("li",[s._v("镜像（Image）：类似于虚拟机中的镜像，是一个包含有文件系统的面向 Docker 引擎的只读模板。任何应用程序运行都需要环境，而镜像就是用来提供这种运行环境的。例如一个 Ubuntu 镜像就是一个包含 Ubuntu 操作系统环境的模板，同理在该镜像上装上 Apache 软件，就可以称为 Apache 镜像。")]),s._v(" "),a("li",[s._v("容器（Container）：类似于一个轻量级的沙盒，可以将其看作一个极简的 Linux 系统环境（包括 root 权限、进程空间、用户空间和网络空间等），以及运行在其中的应用程序。Docker 引擎利用容器来运行、隔离各个应用。容器是镜像创建的应用实例，可以创建、启动、停止、删除容器，各个容器之间是是相互隔离的，互不影响。注意：镜像本身是只读的，容器从镜像启动时，Docker 在镜像的上层创建一个可写层，镜像本身不变。")]),s._v(" "),a("li",[s._v("仓库（Repository）：类似于代码仓库，这里是镜像仓库，是 Docker 用来集中存放镜像文件的地方。注意与注册服务器（Registry）的区别：注册服务器是存放仓库的地方，一般会有多个仓库；而仓库是存放镜像的地方，一般每个仓库存放一类镜像，每个镜像利用 tag 进行区分，比如 Ubuntu 仓库存放有多个版本（12.04、14.04 等）的 Ubuntu 镜像。")])]),s._v(" "),a("h2",{attrs:{id:"配置阿里镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里镜像源"}},[s._v("#")]),s._v(" 配置阿里镜像源")]),s._v(" "),a("ol",[a("li",[s._v("登录容器镜像服务控制台后，在左侧导航栏选择镜像工具 > 镜像加速器，在镜像加速器页面就会显示为您独立分配的加速器地址。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("例如：\n加速器地址：[系统分配前缀].mirror.aliyuncs.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("创建"),a("code",[s._v("/etc/docker/daemon.json")]),s._v("文件, 并写入:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n"registry-mirrors": [""]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("重启 daocker")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://help.aliyun.com/document_detail/60750.html?spm=a2c4g.11186623.6.553.798e242f91hdh4",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"docker-常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用操作"}},[s._v("#")]),s._v(" Docker 常用操作")]),s._v(" "),a("p",[s._v("输入"),a("code",[s._v("docker")]),s._v("可以查看 Docker 的命令用法，输入"),a("code",[s._v("docker COMMAND --help")]),s._v("查看指定命令详细用法。")]),s._v(" "),a("h3",{attrs:{id:"镜像常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像常用操作"}},[s._v("#")]),s._v(" 镜像常用操作")]),s._v(" "),a("p",[s._v("查找镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker search 关键词\n#搜索docker hub网站镜像的详细信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("下载镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull 镜像名:TAG\n## Tag表示版本，有些镜像的版本显示latest，为最新版本\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker images\n## 查看本地所有镜像\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rmi -f 镜像ID或者镜像名:TAG\n## 删除指定本地镜像\n## -f 表示强制删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("获取元信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker inspect 镜像ID或者镜像名:TAG\n## 获取镜像的元信息，详细信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"容器常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器常用操作"}},[s._v("#")]),s._v(" 容器常用操作")]),s._v(" "),a("p",[s._v("运行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --name 容器名 -i -t -p 主机端口:容器端口 -d -v 主机目录:容器目录:ro 镜像ID或镜像名:TAG\n## --name 指定容器名，可自定义，不指定自动命名\n## -i 以交互模式运行容器\n## -t 分配一个伪终端，即命令行，通常-it组合来使用\n## -p 指定映射端口，讲主机端口映射到容器内的端口\n## -d 后台运行容器\n## -v 指定挂载主机目录到容器目录，默认为rw读写模式，ro表示只读\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("容器列表：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps -a -q\n## docker ps查看正在运行的容器\n## -a 查看所有容器（运行中、未运行）\n## -q 只查看容器的ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("启动容器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker start 容器ID或容器名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("停止容器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker stop 容器ID或容器名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除容器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rm -f 容器ID或容器名\n## -f 表示强制删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看日志：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker logs 容器ID或容器名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入正在运行容器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it 容器ID或者容器名 /bin/bash\n## 进入正在运行的容器并且开启交互模式终端\n## /bin/bash是固有写法，作用是因为docker后台必须运行一个进程，否则容器就会退出，在这里表示启动容器后启动bash。\n## 也可以用docker exec在运行中的容器执行命令\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("拷贝文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker cp 主机文件路径 容器ID或容器名:容器路径 #主机中文件拷贝到容器中\ndocker cp 容器ID或容器名:容器路径 主机文件路径 #容器中文件拷贝到主机中\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("获取容器元信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker inspect 容器ID或容器名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-安装-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-tomcat"}},[s._v("#")]),s._v(" docker 安装 tomcat")]),s._v(" "),a("h3",{attrs:{id:"查找资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找资源"}},[s._v("#")]),s._v(" 查找资源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' yuyu@localhost  ~/.ssh/temp  docker search tomcat\nNAME                          DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\ntomcat                        Apache Tomcat is an open source implementati…   2894      [OK]\ntomee                         Apache TomEE is an all-Apache Java EE certif…   85        [OK]\ndordoka/tomcat                Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 base…   55                   [OK]\nbitnami/tomcat                Bitnami Tomcat Docker Image                     37                   [OK]\nkubeguide/tomcat-app          Tomcat image for Chapter 1                      29\nconsol/tomcat-7.0             Tomcat 7.0.57, 8080, "admin/admin"              17                   [OK]\ncloudesire/tomcat             Tomcat server, 6/7/8                            15                   [OK]\naallam/tomcat-mysql           Debian, Oracle JDK, Tomcat & MySQL              13                   [OK]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("docker search tomcat")]),s._v(" 命令可以查找到镜像对应的资源, 不过该命令不能显示镜像的详细信息, 我们下载的时候一般会加上"),a("code",[s._v("tag")]),s._v(" 来确定版本信息, 这时需要到官网进行查询")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204624.png",alt:"image-20210203171407470"}}),s._v("\n查询列表中, 镜像名称规则为"),a("code",[s._v("username/镜像名称,")]),s._v("前如果不带有路径, 则代表是 docker 官方发布的镜像, 也通过右上角是否标识"),a("code",[s._v("OFFICIAL IMAGE")]),s._v("来区分. 找到对应的镜像查看明细信息,选择"),a("code",[s._v("tags")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204609.png",alt:"image-20210203171500707"}}),s._v("\n如图红框标识的为 tag 名称, 用来区分版本号")]),s._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull tomcat:jdk8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看镜像信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像信息"}},[s._v("#")]),s._v(" 查看镜像信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker image ls\nREPOSITORY   TAG       IMAGE ID       CREATED       SIZE\ntomcat       jdk8      75dbb53610ac   2 days ago    534MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yuyu@localhost  ~  docker run --name tomcat1 -p 80:8080 -d tomcat:jdk8\n4a026076de8805b0b3ee890d39474e2438cbfc15ea6a8ac5ebdfbb459cd39437\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("docker run")]),s._v(" 命令如果没有找到本地镜像, 会先去官方镜像仓库拉取")])]),s._v(" "),a("h3",{attrs:{id:"tomcat-配置主页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-配置主页"}},[s._v("#")]),s._v(" tomcat 配置主页")]),s._v(" "),a("p",[s._v("官方下载的 tomcat 默认是没有主页的, 我们需要先进行配置主页才可以通过浏览器访问")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 进入容器")]),s._v("\nyuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it tomcat1 /bin/bash\nroot@4a026076de88:/usr/local/tomcat"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ls")]),s._v("\nBUILDING.txt  CONTRIBUTING.md  LICENSE\tNOTICE\tREADME.md  RELEASE-NOTES  RUNNING.txt  bin  conf  lib  logs  native-jni-lib  temp  webapps  webapps.dist  work\nroot@4a026076de88:/usr/local/tomcat"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## cd webapps")]),s._v("\nroot@4a026076de88:/usr/local/tomcat/webapps"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## pwd")]),s._v("\n/usr/local/tomcat/webapps\nroot@4a026076de88:/usr/local/tomcat/webapps"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mkdir ROOT")]),s._v("\nroot@4a026076de88:/usr/local/tomcat/webapps"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## cd ROOT/")]),s._v("\nroot@4a026076de88:/usr/local/tomcat/webapps/ROOT"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## echo 'tomcat1' > index.html")]),s._v("\nroot@4a026076de88:/usr/local/tomcat/webapps/ROOT"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ls")]),s._v("\nindex.html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 退出容器")]),s._v("\nroot@4a026076de88:/usr/local/tomcat/webapps/ROOT"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n yuyu@localhost  ~ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204551.png",alt:"image-20210203171535608"}})]),s._v(" "),a("h3",{attrs:{id:"删除容器及镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除容器及镜像"}},[s._v("#")]),s._v(" 删除容器及镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" yuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nCONTAINER ID   IMAGE         COMMAND             CREATED          STATUS          PORTS                  NAMES\n4a026076de88   tomcat:jdk8   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalina.sh run"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v(" minutes ago   Up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v(" minutes   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp   tomcat1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止容器")]),s._v("\nyuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop tomcat1\ntomcat1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除容器")]),s._v("\n yuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" tomcat1\ntomcat1\n yuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -all\nCONTAINER ID   IMAGE     COMMAND                  CREATED       STATUS                    PORTS                                                                                    NAMES\nbbc379d29549   consul    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.s…"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago   Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8300")]),s._v("-8302/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8600")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8301")]),s._v("-8302/udp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8500-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8500")]),s._v("/tcp, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8600-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8600")]),s._v("/udp   consul\n yuyu@localhost  ~ \n  yuyu@localhost  ~ \n yuyu@localhost  ~ \n yuyu@localhost  ~ \n yuyu@localhost  ~ \n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除镜像")]),s._v("\n yuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY   TAG       IMAGE ID       CREATED       SIZE\ntomcat       jdk8      75dbb53610ac   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago    534MB\nconsul       latest    98d273eafda1   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" weeks ago   122MB\n ✘ yuyu@localhost  ~  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi 75dbb53610ac\nUntagged: tomcat:jdk8\nUntagged: tomcat@sha256:ccd52c2878ea3d774909cf6005c43b8ae724b488b260b42284500fd13e55088c\nDeleted: sha256:75dbb53610acad26579a308e0916e3def3920306d7cf952a07f8680359e50465\nDeleted: sha256:660c1e67bfd7642a24cd20abe4a1a69be042ab762dad75efe02e0b895f4cb66c\nDeleted: sha256:6fea099eea51aec8b9db7ad87ddf66d18c3e226558b1c33184f2c8c50befdb3e\nDeleted: sha256:97762a6ce17dfc95ba2de1faa62754b0f9fbbec4526f468c290eca9594c62ec0\nDeleted: sha256:5dc1d4c8a71d3a9d64d8f1840d7d69a7b468159585bf00021da97d5753bc5b0e\nDeleted: sha256:5de3e672d52f7c931f75cb70881f3adc43c03d72ffa26fc7ff36a3364085c848\nDeleted: sha256:2d7ffe7660587340691287aa2e8197552e074044a6e8362f7ab8d7f80f919281\nDeleted: sha256:f616f88eac9441e18040ff70b49997fc3230502ff33b24852f694eebeb455e21\nDeleted: sha256:495fc0ac5b34eaca0b64a2735bd618cf9c117bda4586f9f5a5faaa37a20907b1\nDeleted: sha256:64c2fca04b3f5649a8505e6b7f28517ef57105e76f9e4e6a3a2ff82bd8f82eff\nDeleted: sha256:f0e10b20de190c7cf4ea7ef410e7229d64facdc5d94514a13aa9b58d36fca647\n yuyu@localhost  ~ \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);