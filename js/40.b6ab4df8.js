"use strict";(self["webpackChunkadmin_Tools"]=self["webpackChunkadmin_Tools"]||[]).push([[40],{6040:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"container"},[t("div",{staticClass:"leftView"},[t("div",{staticClass:"tip"},[e._v("选择组件")]),e._l(e.checkedList,(function(n,o){return t("div",{key:n.name},[t("div",{staticStyle:{padding:"10px 10px 0px"}},[t("el-checkbox",{attrs:{label:n.name},on:{change:function(t){return e.handleCheckboxChange(n,o)}}})],1)])}))],2),t("div",{staticClass:"child"},[t("el-button",{staticClass:"input_btn",attrs:{type:"primary"},on:{click:function(t){return e.copyInputBtnClick()}}},[e._v("复制声明")]),t("el-input",{staticClass:"inputView",attrs:{type:"textarea",rows:15,resize:"none",placeholder:"请输入内容"},on:{input:e.handleInputChange},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}})],1),t("div",{staticClass:"child"},[t("el-button",{staticClass:"input_btn",attrs:{type:"primary"},on:{click:function(t){return e.copyBtnClick()}}},[e._v("复制懒加载")]),t("el-input",{staticClass:"inputView",attrs:{type:"textarea",rows:12,resize:"none",placeholder:"请等待结果"},model:{value:e.resText,callback:function(t){e.resText=t},expression:"resText"}})],1)]),e._m(0)])},a=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%","text-align":"center",color:"rgb(200, 200, 200)","font-size":"12px","line-height":"2"}},[e._v("声明:点击左侧选中要生成懒加载的组件后会在中间框框自动生成类扩展的属性,"),t("br"),e._v("并在懒加载框框内会尽可能生成带有详细设置的懒加载"),t("br"),e._v("也可以复制自己声明的类扩展属性然后生成带有详细设置的懒加载")])}],i=(n(560),{components:{},data(){return{inputText:"",resText:"",checkedList:[{checked:!1,name:"UILabel",content:"@property (nonatomic ,strong) UILabel *Label;"},{checked:!1,name:"UIButton",content:"@property (nonatomic ,strong) UIButton *Btn;"},{checked:!1,name:"UIImageView",content:"@property (nonatomic ,strong) UIImageView *ImgView;"},{checked:!1,name:"UITabelView",content:"@property (nonatomic ,strong) UITableView *TableView;"},{checked:!1,name:"NSArray",content:"@property (nonatomic ,strong) NSArray *Array;"},{checked:!1,name:"NSMutableArray",content:"@property (nonatomic ,strong) NSMutableArray *MutArray;"},{checked:!1,name:"NSDictionary",content:"@property (nonatomic ,strong) NSMutableArray *Dict;"},{checked:!1,name:"NSMutableDictionary",content:"@property (nonatomic ,strong) NSMutableArray *MutDict;"}]}},methods:{handleCheckboxChange(e,t){console.log("Checkbox changed:",e,t),e.checked=!e.checked,this.inputText="";const n=[];this.checkedList.forEach((function(e){!0===e.checked&&n.push(e.content)})),console.log(n),this.inputText=n.join("\n\n"),this.handleInputChange(this.inputText)},copyInputBtnClick(){if(0===this.inputText.length)return void this.$message({message:"文本内容不能为空",type:"warning"});const e=document.createElement("textarea");e.value=this.inputText,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message({message:"复制成功",type:"success"})},copyBtnClick(){if(0===this.resText.length)return void this.$message({message:"文本内容不能为空",type:"warning"});const e=document.createElement("textarea");e.value=this.resText,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message({message:"复制成功",type:"success"})},handleInputChange(e){this.resText="";const t=[],n=e,o=n.split("\n");o.forEach((e=>{const n=e.replace(/@property\s*\([^)]*\)\s*/,"");if(n.includes("*")){const e=n.split(/\s+/).map((e=>e.replace("*","")));t.push(e)}}));const a=[];t.forEach((e=>{const t=e[0],n=e[1],o=n.replace(";","");if("UILabel"===t){const e='- (%@ *)%! {\n    if (_%! == nil) {\n        _%! = %@.alloc.init;\n        _%!.text = @"你好";\n        _%!.font = [UIFont systemFontOfSize:50];\n        _%!.textColor = UIColor.orangeColor;\n        _%!.textAlignment = NSTextAlignmentCenter;\n    }\n    return _%!;\n}',n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}else if("UIButton"===t){const e='- (%@ *)%! {\n    if (_%! == nil) {\n        _%! = [%@ buttonWithType:UIButtonTypeCustom];\n        [_%! setTitle:@"默认" forState:0];\n        [_%! setTitle:@"选中" forState:UIControlStateSelected];\n        _%!.titleLabel.font = [UIFont systemFontOfSize:50];\n        [_%! setTitleColor:UIColor.orangeColor forState:0];\n        [_%! setTitleColor:UIColor.orangeColor forState:UIControlStateSelected];\n        _%!.backgroundColor = UIColor.grayColor;\n        [_%! addTarget:self action:@selector(方法名) forControlEvents:UIControlEventTouchUpInside];\n    }\n    return _%!;\n}',n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}else if("UIImageView"===t){const e='- (%@ *)%! {\n    if (_%! == nil) {\n        _%! = %@.alloc.init;\n        _%!.image = [UIImage imageNamed:@"图片名"];\n    }\n    return _%!;\n}',n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}else if("UITableView"===t){const e='// tableView 附带方法\n// <UITableViewDataSource,UITableViewDelegate>\n\n// - (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath;\n// - (CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section;\n// - (CGFloat)tableView:(UITableView *)tableView heightForFooterInSection:(NSInteger)section;\n\n// - (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section;\n// - (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath;\n\n- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = [[UITableView alloc] initWithFrame:CGRectZero style:UITableViewStylePlain];\n        _TableView.dataSource = self;\n        _TableView.delegate = self;\n        _TableView.rowHeight = 100;\n        _TableView.separatorStyle = UITableViewCellSeparatorStyleNone;//隐藏分割线\n        [_TableView registerClass:UITableViewHeaderFooterView.class forHeaderFooterViewReuseIdentifier:@"UITableViewHeaderFooterView"];\n        [_TableView registerClass:UITableViewCell.class forCellReuseIdentifier:@"UITableViewCell"];\n    }\n    return _%!;\n}',n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}else if("UICollectionView"===t){const e="- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = [[%@ alloc] initWithFrame:CGRectZero collectionViewLayout:<#(nonnull UICollectionViewLayout *)#>];\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}else{const e="- (%@ *)%!{\n    if (_%! == nil) {\n        _%! = %@.alloc.init;\n    }\n    return _%!;\n}",n=e.replace(/%@/g,t),i=n.replace(/%!/g,o);a.push(i)}})),a.forEach((e=>{this.resText=this.resText+"\n"+e})),console.log(this.resText)}}}),l=i,r=n(1001),c=(0,r.Z)(l,o,a,!1,null,"2a1f2aee",null),s=c.exports}}]);
//# sourceMappingURL=40.b6ab4df8.js.map