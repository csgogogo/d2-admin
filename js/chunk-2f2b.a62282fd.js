(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f2b"],{"5a39":function(e,t,a){},"63e5":function(e,t,a){"use strict";var n=a("5a39"),r=a.n(n);r.a},af77:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",{staticClass:"page",attrs:{type:"card"}},[a("template",{slot:"header"},[e._v("主题")]),a("el-table",e._b({attrs:{data:e.list}},"el-table",e.table,!1),[a("el-table-column",{attrs:{prop:"name",align:"center",width:"260"}}),a("el-table-column",{attrs:{label:"预览",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"theme-preview",style:{backgroundImage:"url("+e.$baseUrl+t.row.preview+")"}})}}])}),a("el-table-column",{attrs:{prop:"address",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.activeName===t.row.name?a("el-button",{attrs:{type:"success",icon:"el-icon-check",round:""}},[e._v("已激活")]):a("el-button",{attrs:{round:""},on:{click:function(a){e.handleSelectTheme(t.row.name)}}},[e._v("使用")])]}}])})],1),a("div",[a("p",[e._v("尝试激活一个不存在的主题（主题不存在 "),a("d2-icon",{attrs:{name:"arrow-right"}}),e._v(" 默认主题）")],1),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handleSelectTheme("err-theme")}}},[a("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"hand-o-right"}}),e._v("\n      尝试激活主题 'err-theme'\n    ")],1)],1),a("template",{slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("当前激活主题 "+e._s(e.activeName))])],1)],2)},r=[],l=a("c93e"),c=(a("cadf"),a("551c"),a("097d"),a("2f62")),s={data:function(){return{table:{showHeader:!1,border:!0}}},computed:Object(l["a"])({},Object(c["e"])("d2admin/theme",["list","activeName"])),methods:Object(l["a"])({},Object(c["d"])("d2admin/theme",["set"]),{handleSelectTheme:function(e){this.set(e)}})},o=s,i=(a("63e5"),a("2877")),d=Object(i["a"])(o,n,r,!1,null,"6688e2ee",null);d.options.__file="index.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2f2b.a62282fd.js.map