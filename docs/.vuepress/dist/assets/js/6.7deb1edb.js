(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("p",[a._v("从零开始搭建 Vue 开发用的环境")]),a._v(" "),t("h2",{attrs:{id:"vue全局开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue全局开发环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" Vue全局开发环境搭建")]),a._v(" "),t("h3",{attrs:{id:"安装新环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装新环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装新环境")]),a._v(" "),t("ol",[t("li",[a._v("node")]),a._v(" "),t("li",[a._v("yarn")]),a._v(" "),t("li",[a._v("vue-cli")]),a._v(" "),t("li",[a._v("hotel")]),a._v(" "),t("li",[a._v("json-server")]),a._v(" "),t("li",[a._v("mock")])]),a._v(" "),t("h3",{attrs:{id:"生成新项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成新项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成新项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("vue init webpack "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ul",[t("li",[a._v("vue-router(Y)")]),a._v(" "),t("li",[a._v("EsLint (N)")]),a._v(" "),t("li",[a._v("unit(N)")]),a._v(" "),t("li",[a._v("Nightwatch(N)")]),a._v(" "),t("li",[a._v("Yes,I choose yarn")])]),a._v(" "),t("h3",{attrs:{id:"项目试运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目试运行","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目试运行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加服务器")]),a._v("\nhotel add "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm run dev"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除服务器")]),a._v("\nhotel "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v("\n")])])]),t("h2",{attrs:{id:"vue-项目开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-项目开发环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" Vue 项目开发环境搭建")]),a._v(" "),t("h3",{attrs:{id:"tailwindcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss","aria-hidden":"true"}},[a._v("#")]),a._v(" tailwindcss")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yarn 安装 tailwindcss")]),a._v("\nyarn add tailwindcss --dev\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置文件")]),a._v("\n.\\node_modules\\.bin\\tailwind init tailwind.js\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 .postcssrc.js ")]),a._v("\nconst tailwindcss "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./tailwind'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tailwindcss'")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),a._v(" tailwindcss,\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 main.js")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tailwindcss/dist/tailwind.min.css'")]),a._v("\n")])])]),t("h3",{attrs:{id:"axios、vue-axios-、qs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios、vue-axios-、qs","aria-hidden":"true"}},[a._v("#")]),a._v(" axios、vue-axios 、qs")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yarn 安装 axios")]),a._v("\nyarn add --save axios vue-axios qs\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把配置文件 http/http.js 放在 src 中")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 从别人封装好的项目里拷贝省事")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 main.js")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("get,post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" from "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./http/http'")]),a._v("\nVue.prototype."),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nVue.prototype."),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$post")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[a._v("#")]),a._v(" vuex")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yarn 安装 vuex")]),a._v("\nyarn add vuex\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 main.js")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" Vuex from "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'vuex'")]),a._v("\nVue.use"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Vuex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"vue-awesome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-awesome","aria-hidden":"true"}},[a._v("#")]),a._v(" vue-awesome")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yarn 安装 vue-awesome")]),a._v("\nyarn add vue-awesome\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 main.js")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'vue-awesome/icons'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" Icon from "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'vue-awesome/components/Icon'")]),a._v("\nVue.component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'v-icon'")]),a._v(", Icon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"json-数据环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-数据环境","aria-hidden":"true"}},[a._v("#")]),a._v(" JSON 数据环境")]),a._v(" "),t("h3",{attrs:{id:"有数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 有数据")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("json-server --watch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --port 3000\n")])])]),t("h3",{attrs:{id:"无数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 无数据")]),a._v(" "),t("p",[a._v("mockjs 环境")]),a._v(" "),t("p",[a._v("编写一个 js 的 name 文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行 js 文件")]),a._v("\njson-server "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 加入 hotel")]),a._v("\nhotel add "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"json-server <name>"')]),a._v("\n")])])])])}],!1,null,null,null);n.options.__file="Vue环境搭建.md";s.default=n.exports}}]);