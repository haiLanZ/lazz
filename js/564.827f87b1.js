"use strict";(self["webpackChunkadmin_Tools"]=self["webpackChunkadmin_Tools"]||[]).push([[564],{3564:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"container"},[t("div",{staticClass:"child"},[t("div",{staticClass:"tip"},[e._v("请将声明好的代码粘入下边输入框")]),t("el-input",{staticClass:"inputView",attrs:{type:"textarea",rows:15,resize:"none",placeholder:"请输入内容"},on:{input:e.handleInputChange},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}})],1),t("div",{staticClass:"child"},[t("el-button",{staticClass:"input_btn",attrs:{type:"primary"},on:{click:function(t){return e.copyBtnClick()}}},[e._v("点击复制")]),t("el-input",{staticClass:"inputView",attrs:{type:"textarea",rows:12,resize:"none",placeholder:"请等待结果"},model:{value:e.resText,callback:function(t){e.resText=t},expression:"resText"}})],1)])])},l=[],i=(n(560),{components:{},data(){return{inputText:"",resText:"",checked:!1}},methods:{handleCheckAllChange(){!0===this.checked?(console.log("选中了"),this.$alert("选中后会在生成的懒加载中尽可能多的默认代码(暂未开发完成)","提示",{confirmButtonText:"确定",callback:e=>{}})):console.log("取消了")},copyBtnClick(){if(0===this.resText.length)return void this.$message({message:"文本内容不能为空",type:"warning"});const e=document.createElement("textarea");e.value=this.resText,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message({message:"复制成功",type:"success"})},handleInputChange(e){this.resText="";const t=[],n=e,s=n.split("\n");s.forEach((e=>{const n=e.replace(/@property\s*\([^)]*\)\s*/,"");if(n.includes("*")){const e=n.split(/\s+/).map((e=>e.replace("*","")));t.push(e)}}));const l=[];t.forEach((e=>{const t=e[0],n=e[1],s=n.replace(";","");if("UIButton"===t){const e="- (%@ *)%! {\n    if (_%! == nil) {\n        _%! = [%@ buttonWithType:UIButtonTypeCustom];\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,s);l.push(i)}else if("UITableView"===t){const e="- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = [[%@ alloc] initWithFrame:CGRectZero style:UITableViewStylePlain];\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,s);l.push(i)}else if("UICollectionView"===t){const e="- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = [[%@ alloc] initWithFrame:CGRectZero collectionViewLayout:<#(nonnull UICollectionViewLayout *)#>];\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,s);l.push(i)}else{const e="- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = %@.alloc.init;\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,s);l.push(i)}})),l.forEach((e=>{this.resText=this.resText+"\n"+e})),console.log(this.resText)}}}),c=i,a=n(1001),o=(0,a.Z)(c,s,l,!1,null,"25ab9cb0",null),r=o.exports}}]);
//# sourceMappingURL=564.827f87b1.js.map