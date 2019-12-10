(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,o){"use strict";o.d(t,"b",function(){return s}),o.d(t,"a",function(){return l});var a=o(8),n=o(1),r=o(14);function s(e){var t="POST",o="createRecord";return(e=Object(a.a)({},e,{modelName:"promize_font_color",idKey:"promize_font_color_id"})).promize_font_color_id&&(t="PUT",o="updateRecord",delete e.created_date,delete e.updated_date),{types:["".concat(n.x,"_").concat(n.U),"".concat(n.x,"_").concat(n.H),"".concat(n.x,"_").concat(n.Z)],method:t,url:o,data:e,payload:{receiveType:"postData"}}}function l(){var e={modelName:"promize_font_color",idKey:"promize_font_color_id",domain_id:r.a.DOMAIN_ID};return{types:["".concat(n.y,"_").concat(n.U),"".concat(n.y,"_").concat(n.H),"".concat(n.y,"_").concat(n.Z)],method:"POST",url:"getAllRecords",data:e}}},375:function(e,t,o){e.exports=o.p+"static/media/color-picker.dfbc9764.png"},390:function(e,t,o){"use strict";o.r(t);var a=o(8),n=o(7),r=o(5),s=o(17),l=o(15),i=o(27),c=o(16),p=o(0),d=o.n(p),m=o(22),u=o(14),f=o(100),h=o(82),_=o(99),b=o(93),g=o(1),v=o(40),y=o(110),E=(o(3),o(80)),N=o.n(E),C=o(32),k=o(307),O=o(375),z=o.n(O),j=function(e){function t(){var e,o;Object(n.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(o=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={color:{r:"241",g:"112",b:"19",a:"1"},displayColorPicker:!1},o.handleClick=function(e){o.setState({displayColorPicker:!o.state.displayColorPicker})},o.handleColorChange=function(e){o.setState({color:e.rgb}),o.props.handleChangeComplete(e)},o}return Object(c.a)(t,e),Object(r.a)(t,[{key:"classNameCheck",value:function(){var e=this.props.form.validation(this.props.fieldName),t=e?this.props.state.inputErrors[this.props.fieldName].message:"",o="form-group ".concat(e?"feild-wrong":""," ").concat(this.props.value&&!e?"feild-sucess":"");return{className:this.props.validation?o:"form-group",message:t,validation:e}}},{key:"input",value:function(){var e=this.classNameCheck(),t=N()({default:{color:{width:"36px",height:"14px",borderRadius:"2px",background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")},swatch:{padding:"4px 6px 0px",background:"#fff",borderRadius:"1px",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2",bottom:"40px",right:"0"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"70px",left:"0px"}}});return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"promize-form-group promize-form-addon"},d.a.createElement("div",{className:"promize-picker-control"},d.a.createElement("label",{htmlFor:this.props.fieldName,className:"promize-form-control-label"},this.props.labelName,this.props.validation&&d.a.createElement("sup",null,"*")),d.a.createElement("input",{className:"promize-form-control",type:this.props.inputType?this.props.inputType:"text",id:this.props.fieldName,step:this.props.inputStep?this.props.inputStep:"","data-type":this.props.dataType||"text","data-name":this.props.dataName,placeholder:this.props.placeholder?this.props.placeholder:"",name:this.props.fieldName,onBlur:this.props.onBlur||this.props.form.blurEventListner,disabled:this.props.disabled,onChange:this.props.onChange||this.props.form.handleFieldsChange,value:this.props.value,"data-validation-name":this.props.labelName,maxLength:this.props.maxLength})),d.a.createElement("div",{className:"promize-picker"},d.a.createElement("div",{style:t.swatch,onClick:this.handleClick},d.a.createElement("img",{src:z.a})),this.state.displayColorPicker&&d.a.createElement("div",{style:t.popover},d.a.createElement("div",{style:t.cover,onClick:this.handleClick}),d.a.createElement(k.SketchPicker,{disableAlpha:!0,color:this.props.state.fields.font_color_code,onChangeComplete:this.handleColorChange}))),e.validation&&d.a.createElement("span",{className:"promize-form-error"},"".concat(this.props.labelName," ")+e.message)))}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,this.input())}}]),t}(d.a.Component),P=o(87);var x=function(e){return{font_color_name:"required",font_color_code:"required"}},S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"promize-modal-cover"},d.a.createElement("div",{className:"promize-modal modal-sm"},d.a.createElement("div",{className:"promize-modal-header"},d.a.createElement("h3",{className:"modal-title"},d.a.createElement("span",null,"Add Font Color"))),d.a.createElement("div",{className:"promize-modal-body"},d.a.createElement("form",{onSubmit:this.props.font.handleSubmit,method:"POST"},d.a.createElement("div",{className:"df-wrap"},d.a.createElement("div",{className:"wd-100"},d.a.createElement(C.a,Object.assign({},this.props,{form:this.props.font,fieldName:"font_color_name",value:this.props.state.fields.font_color_name,labelName:"Color Name",validation:!1}))),d.a.createElement("div",{className:"wd-100"},d.a.createElement(j,Object.assign({},this.props,{form:this.props.font,fieldName:"font_color_code",value:this.props.state.fields.font_color_code,labelName:"Color Code",validation:!1}))),d.a.createElement("div",{className:"mt-20 wd-100 df df-end"},d.a.createElement("button",{className:"btn btn-promize-secondary",onClick:this.props.enablePopup},"Cancel"),d.a.createElement(P.a,{className:"btn btn-promize-primary",text:"Save",response:this.props.state.fields})))))))}}]),t}(p.Component),D=o(18),w=o.n(D),F=function(e){function t(e){var o;Object(n.a)(this,t),(o=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleChangeComplete=function(e){var t=o.state.fields,n=Object(a.a)({},t,{font_color_code:e.hex});o.setState({fields:n})},o.enablePopup=function(){var e={font_color_name:"",font_color_code:"",domain_id:u.a.DOMAIN_ID,status:1};o.setState({fields:e,openPopup:!o.state.openPopup})},o.state={openPopup:!1},o.displayRows=o.displayRows.bind(Object(i.a)(o)),o.state={filters:{domain_id:u.a.DOMAIN_ID,searchVal:"",modelName:"promize_font_color",searchKey:"font_color_name",idKey:"promize_font_color_id"},fields:{font_color_name:"",font_color_code:"",domain_id:u.a.DOMAIN_ID,status:1},fonts:[],inputErrors:{}};var r=x();return o.grid=f.a.getInstance({currentComponent:Object(i.a)(o),url:"getListsWithPagination",actionType:g.y,method:"POST"}),o.font=v.a.getInstance(Object(i.a)(o),r,function(e){o.props.dispatch(Object(y.b)(e)),o.resetForm()},{},{}),o}return Object(c.a)(t,e),Object(r.a)(t,[{key:"initialState",value:function(){return{filters:{domain_id:this.props.app.DOMAIN_ID,searchVal:"",modelName:"promize_font_color",searchKey:"font_color_name",idKey:"promize_font_color_id"},fields:{font_color_name:"",font_color_code:"",domain_id:u.a.DOMAIN_ID,status:1},fonts:[],inputErrors:{}}}},{key:"componentDidMount",value:function(){this.grid.getRecords()}},{key:"resetForm",value:function(){var e=this,t={font_color_name:"",font_color_code:"",domain_id:u.a.DOMAIN_ID,status:1};this.setState({fields:t},function(){e.grid.getRecords()})}},{key:"setData",value:function(e){var t=e.fontcolors.response,o=e.fontcolor.response;t!==this.props.fontcolors.response&&(!e.fontcolors.isFetching&&t.data&&Object.keys(t.data).length>0&&t.status&&200===t.status?this.setState({fonts:t.data||[],openPopup:!1}):!e.fontcolors.isFetching&&e.fontcolors.isError&&this.setState({fonts:[]})),console.log("out"),o!==this.props.fontcolor.response&&(console.log("in"),!e.fontcolor.isFetching&&e.fontcolor.response.data&&Object.keys(e.fontcolor.response.data).length>0&&e.fontcolor.response.status&&200===e.fontcolor.response.status?(w.a.success(e.fontcolor.response.message),this.setState({openPopup:!1})):!e.fontcolor.isFetching&&e.fontcolor.isError&&w.a.error(e.fontcolor.response.message))}},{key:"editFont",value:function(e,t){e.preventDefault(),this.setState({fields:t,openPopup:!this.state.openPopup})}},{key:"displayRows",value:function(){var e=this,t=this.state.fonts,o=d.a.createElement(b.a,{isFetching:this.props.fontcolors.isFetching,colspan:"10"});return t.length>0&&(o=t.map(function(t,o){var a=1==t.status;return d.a.createElement("tr",{key:o},d.a.createElement("td",null,t.font_color_name),d.a.createElement("td",null,t.font_color_code),d.a.createElement("td",null,d.a.createElement(h.a,Object.assign({},e.props,{value:a,fieldName:"status",id:t.promize_font_color_id,onChange:function(o){e.grid.statusUpdate({url:"changeStatus",actionType:g.G,params:t,modelName:"promize_font_color",PKey:"promize_font_color_id"},o)},spanLabel:{first:"Active",second:"InActive"},checkValue:{first:!0,second:!1}}))),d.a.createElement("td",null,d.a.createElement("div",{className:"table-actions"},d.a.createElement("button",{className:"btn-tbl edit",onClick:function(o){return e.editFont(o,t)}},d.a.createElement("i",{className:"fa fa-pencil-alt"})),d.a.createElement("button",{className:"btn-tbl delete",onClick:function(o){return e.table.delete.handleToogleModal({id:t.promize_font_color_id,idKey:"ids",url:"deleteRecord",actionType:g.B,modelName:"promize_font_color",PKey:"promize_font_color_id"},o)}},d.a.createElement("i",{className:"fa fa-trash-alt"})))))})),o}},{key:"componentWillReceiveProps",value:function(e){this.setData(e)}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,this.state.openPopup&&d.a.createElement("div",null,d.a.createElement(S,Object.assign({},this,{font:this.font,handleChangeComplete:this.handleChangeComplete,enablePopup:this.enablePopup,currentComponent:this}))),d.a.createElement(_.a,Object.assign({ref:function(t){e.table=t}},this.props,this.state,{pageTitle:"Font Color",managementType:g.y,addButton:d.a.createElement("button",{className:"btn btn-promize-primary",onClick:this.enablePopup},d.a.createElement("span",null,"Add")),grid:this.grid,data:this.props.fontcolors,rowDelete:this.props.fontDelete}),d.a.createElement("table",{className:"promize-table table-hover table-action",id:"fixTable"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{className:this.grid.sortType?"ASC"==this.grid.sortType?"sorting-asec":"sorting-desc":"sorting",onClick:function(t){return e.grid.handleColSorting(t)}},"Name"),d.a.createElement("th",null,"Code"),d.a.createElement("th",null,"Status"),d.a.createElement("th",null,"Action"))),d.a.createElement("tbody",null,this.displayRows()))))}}]),t}(p.Component);t.default=Object(m.b)(function(e){return{fontStatus:e.fontStatus,fontDelete:e.fontDelete,fileUpload:e.fileUpload,fontcolors:e.fontcolors,fontcolor:e.fontcolor}})(F)},87:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var a=o(0),n=o.n(a),r=function(e){var t=e.className,o=e.text;e.response;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"submit",className:t},o))}}}]);
//# sourceMappingURL=11.f3d5ff99.chunk.js.map