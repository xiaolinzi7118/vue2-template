(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1989"],{"475e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("myTinymce",{ref:"myTinymceRef",attrs:{"init-config":t.initConfig},model:{value:t.str,callback:function(e){t.str=e},expression:"str"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.insertStr}},[t._v("插入富文本")]),t._v(" "),a("div",[t._v("合并单元格示例")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"span-method":t.arraySpanMethod,border:""}},[a("el-table-column",{attrs:{prop:"typeName",label:"大类",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"level",label:"风险等级"}}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1)],1)},n=[],s=(a("6762"),a("2fdb"),a("7f7f"),a("db72")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tinymce-editor"},[a("editor",{attrs:{id:t.id,init:t.init,disabled:t.disabled},on:{onClick:t.onClick},model:{value:t.myValue,callback:function(e){t.myValue=e},expression:"myValue"}})],1)},l=[],o=a("e562"),u=a.n(o),c=a("9917"),p=(a("030f"),a("4ea8"),a("3aea"),a("07d1"),a("84ec8"),a("f557"),a("9434"),a("2d33"),a("34de"),a("fc39"),{components:{Editor:c["a"]},props:{value:{type:String,default:""},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"lists image media"},toolbar:{type:[String,Array],default:"undo redo |  formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat hr"},initConfig:{type:Object,default:function(){return{}}}},data:function(){return{init:{language_url:"/vue2-template/static/langs/zh_CN.js",language:"zh_CN",skin_url:"/vue2-template/static/skins/ui/oxide",content_css:"/vue2-template/static/skins/content/default/content.css",height:300,plugins:this.plugins,toolbar:this.toolbar,branding:!1,menubar:!1,resize:!1,statusbar:!1},myValue:this.value,id:"editor-test"}},watch:{value:function(t){this.myValue=t},myValue:function(t){this.$emit("input",t)}},mounted:function(){u.a.init({})},methods:{onClick:function(t){this.$emit("onClick",t,u.a)},clear:function(){this.myValue=""},insert:function(t){var e=u.a.get(this.id);e.execCommand("mceInsertContent",!1,t)}}}),m=p,d=a("2877"),h=Object(d["a"])(m,r,l,!1,null,"e5089cba",null),y=h.exports,f={components:{myTinymce:y},data:function(){return{str:"这是一段测试文本",initConfig:{forced_root_block:""},tableData:[],originData:[{id:"12987122",productName:"普通活期",type:"liquid",level:"R1",account:"15000",remark:""},{id:"12987125",productName:"朝朝宝",type:"assurance",level:"R1",account:"15000",remark:""},{id:"12987127",productName:"朝朝宝",type:"fund",level:"R1",account:"15000",remark:""}],typeList:[{id:"liquid",name:"活钱管理",sum:0},{id:"assurance",name:"保障管理",sum:0},{id:"fund",name:"基金管理",sum:0}],typeMerge:[],sumMerge:[]}},created:function(){for(var t=0;t<this.typeList.length;t++)for(var e=0;e<this.originData.length;e++)this.originData[e].type===this.typeList[t].id&&(this.typeList[t].sum+=1,this.tableData.push(Object(s["a"])({typeName:this.typeList[t].name},this.originData[e])),this.typeMerge.push(0)),e===this.originData.length-1&&(this.typeList[t].sum+=1,this.tableData.push({typeName:this.typeList[t].name,productName:"合并信息"}),this.typeMerge[this.tableData.length-this.typeList[t].sum]=this.typeList[t].sum,this.typeMerge.push(0));this.sumMerge=this.typeList.reduce((function(t,e){return t.concat(t[t.length-1]+e.sum-1)}),[this.typeList[0].sum-1]),this.sumMerge.pop()},methods:{insertStr:function(){var t='<span>&nbsp;</span><span style="color: blue;">链接1</span><span>&nbsp;</span>';this.$refs.myTinymceRef.insert(t)},arraySpanMethod:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex;return 0===a?this.typeMerge[e]?{rowspan:this.typeMerge[e],colspan:1}:{rowspan:0,colspan:0}:this.sumMerge.includes(e)?1===a?{rowspan:1,colspan:4}:{rowspan:0,colspan:0}:void 0}}},b=f,g=Object(d["a"])(b,i,n,!1,null,"fb9cbf8c",null);e["default"]=g.exports}}]);