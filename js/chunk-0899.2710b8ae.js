(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0899"],{"545a":function(t,n){t.exports="你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"},c725:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("d2-container",[e("template",{slot:"header"},[t._v("数据占位符")]),e("d2-markdown",{staticClass:"d2-mb",attrs:{source:t.doc}}),t._l(t.settingDPD,function(n,o){return e("d2-demo-mock-card",{key:o,staticStyle:{"margin-bottom":"0px !important"},attrs:{title:n.title,code:JSON.stringify(n.json,null,2),mock:t.mockResult[o]},on:{reload:function(n){t.doMock(o)}}})})],2)},c=[],i=(e("ac6a"),e("2b0e")),s=e("2ef0"),l=e("96eb"),a=e.n(l),u=[{title:"占位符演示",json:{name:{first:"@FIRST",middle:"@FIRST",last:"@LAST",full:"@first @middle @last"}}}],d=e("545a"),r=e.n(d),m={components:{"d2-demo-mock-card":function(){return e.e("chunk-0c79").then(e.bind(null,"4923"))}},data:function(){return{mockResult:[],settingDPD:u,settingDPDClone:Object(s["cloneDeep"])(u),doc:r.a}},mounted:function(){var t=this;this.settingDPD.forEach(function(n,e){t.doMock(e)})},methods:{doMock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i["default"].set(this.mockResult,t,JSON.stringify(a.a.mock(this.settingDPDClone[t].json),null,2))}}},k=m,f=e("2877"),h=Object(f["a"])(k,o,c,!1,null,null,null);h.options.__file="dpd.vue";n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-0899.2710b8ae.js.map