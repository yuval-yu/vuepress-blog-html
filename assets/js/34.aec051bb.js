(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{350:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("项目中为了将功能进行归类, 通常会将具有同种属性的类放在同一个模块中, 这样每次新建项目时其实都是一个依据模板项目修改项目名的重复操作. 这种情况可以使用"),a("code",[t._v("maven-archetype-plugin")]),t._v("插件来一次性解决")]),t._v(" "),a("h2",{attrs:{id:"整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[t._v("#")]),t._v(" 整体流程")]),t._v(" "),a("ol",[a("li",[t._v("依据模板项目生成骨架项目")]),t._v(" "),a("li",[t._v("在骨架中增加 maven 私服地址并修改配置文件")]),t._v(" "),a("li",[t._v("将骨架上传至私服")]),t._v(" "),a("li",[t._v("依据私服中骨架搭建项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204726.png",alt:"image-20210203152622210"}})]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ol",[a("li",[t._v("maven 的"),a("code",[t._v("setting.xml")]),t._v("文件中已配置了私服地址及用户名密码")]),t._v(" "),a("li",[t._v("准备一个模板项目大致模块如下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204740.png",alt:"image-20210203152746193"}})]),t._v(" "),a("h2",{attrs:{id:"依据模板项目生成脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依据模板项目生成脚手架"}},[t._v("#")]),t._v(" 依据模板项目生成脚手架")]),t._v(" "),a("h3",{attrs:{id:"模板项目-pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板项目-pom"}},[t._v("#")]),t._v(" 模板项目 pom")]),t._v(" "),a("p",[t._v("引入脚手架插件")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.maven.plugins"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven-archetype-plugin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.0.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"生成脚手架项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成脚手架项目"}},[t._v("#")]),t._v(" 生成脚手架项目")]),t._v(" "),a("p",[t._v("控制台进入模板项目根路径, 运行 "),a("code",[t._v("mvn archetype:create-from-project")]),t._v(" 生成脚手架项目\n运行成功后, 骨架会生成在 "),a("code",[t._v("项目路径/target/generated-sources")]),t._v(" 目录下, 名称为  archetype")]),t._v(" "),a("h2",{attrs:{id:"脚手架项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚手架项目配置"}},[t._v("#")]),t._v(" 脚手架项目配置")]),t._v(" "),a("h3",{attrs:{id:"配置私服地址-必选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置私服地址-必选"}},[t._v("#")]),t._v(" 配置私服地址(必选)")]),t._v(" "),a("p",[t._v("在骨架项目中找到项目文件中的父 pom ,增加私服配置\n"),a("code",[t._v("vi target/generated-sources/archetype/pom.xml")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("distributionManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("releases"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("私服地址"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("snapshotRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("snapshots"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("私服地址"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("snapshotRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("distributionManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"自定义配置-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置-可选"}},[t._v("#")]),t._v(" 自定义配置(可选)")]),t._v(" "),a("p",[t._v("项目中可能存在没有在项目根路径下的文件, 比如 "),a("code",[t._v("src/main/resources/bootstrap.yml")]),t._v("文件, 这种文件默认是不做替换的, 我们可以在脚手架项目中找到对应文件, 并将其中对应包名替换为 "),a("code",[t._v("${package}")]),t._v(" ,groupId 替换为"),a("code",[t._v("${groupId}")]),t._v(" 其他替换方式可在脚手架已生成内容中查找")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204751.png",alt:"image-20210203152959804"}})]),t._v(" "),a("p",[t._v("然后修改脚手架项目路径下 "),a("code",[t._v("target/generated-sources/archetype/src/main/resources/META-INF/maven/archetype-metadata.xml")]),t._v(" 配置文件\n先找到需要修改的文件所在模块,在模块中找到对应的文件配置, 在 fileSet 中添加"),a("code",[t._v('filtered="true"')]),t._v("属性,使在生成代码时替换该文件中代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204802.png",alt:"image-20210203153038190"}})]),t._v(" "),a("h2",{attrs:{id:"本地测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地测试"}},[t._v("#")]),t._v(" 本地测试")]),t._v(" "),a("ol",[a("li",[t._v("在生成的骨架项目根路径运行"),a("code",[t._v("mvn install")]),t._v("进行打包, 可以看到在本地仓库中生成了"),a("code",[t._v("模板项目名-archetype")]),t._v(" 的骨架项目包")]),t._v(" "),a("li",[t._v("在其他路径下新建文件夹 temp, 我是在 target 目录下新建了 temp 文件夹, 进入 temp 文件夹, 运行")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mvn archetype:generate -DarchetypeArtifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ArtifactId -DarchetypeGroupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("GroupId -DarchetypeVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("版本号 -DarchetypeCatalog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("local\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("上述代码需将=后文字替换为骨架项目实际参数")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("运行项目")])]),t._v(" "),a("h2",{attrs:{id:"上传私服"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传私服"}},[t._v("#")]),t._v(" 上传私服")]),t._v(" "),a("p",[a("code",[t._v("mvn deploy")])]),t._v(" "),a("h2",{attrs:{id:"使用骨架项目生成代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用骨架项目生成代码"}},[t._v("#")]),t._v(" 使用骨架项目生成代码")]),t._v(" "),a("h3",{attrs:{id:"命令行方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行方式"}},[t._v("#")]),t._v(" 命令行方式")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mvn archetype:generate -DarchetypeArtifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ArtifactId -DarchetypeGroupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("GroupId -DarchetypeVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("版本号 -DarchetypeCatalog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("remote\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"idea-方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea-方式"}},[t._v("#")]),t._v(" idea 方式")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204816.png",alt:"image-20210203152843811"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/yuyujson/cdn-images@latest/blog-images/20210207204826.png",alt:"image-20210203152919382"}})]),t._v(" "),a("p",[t._v("点击下一步后输入需要生成的项目名等信息按照步骤进行即可\nidea 导入 maven 脚手架项目后, 如果想删除则需在本地缓存中进行删除, 文件路径"),a("code",[t._v("Library/Caches/JetBrains/InteliJIdea2020.2/Maven/Indices/UserArchetypes.xml")])]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://maven.apache.org/archetype/maven-archetype-plugin/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);