(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l});var n=a(8),o=a(1),s=a(15);function i(e){var t="POST",a="createRecord";return(e=Object(n.a)({},e,{modelName:"promize_fonts",idKey:"font_id"})).font_id&&(t="PUT",a="updateRecord",delete e.created_date,delete e.updated_date),{types:["".concat(o.v,"_").concat(o.U),"".concat(o.v,"_").concat(o.H),"".concat(o.v,"_").concat(o.Z)],method:t,url:a,data:e,payload:{receiveType:"postData"}}}function r(e,t,a){var n=new FormData;return n.append("file",e),n.append("name",t),{types:["".concat(o.u,"_").concat(o.U),"".concat(o.u,"_").concat(o.H),"".concat(o.u,"_").concat(o.Z)],method:"POST",requestBodyType:"FormData",url:"uploadFontFile",data:n,payload:{receiveType:"postData"}}}function l(){var e={modelName:"promize_fonts",idKey:"font_id",domain_id:s.a.DOMAIN_ID};return{types:["".concat(o.w,"_").concat(o.U),"".concat(o.w,"_").concat(o.H),"".concat(o.w,"_").concat(o.Z)],method:"POST",url:"getAllRecords",data:e}}},392:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a(5),s=a(17),i=a(16),r=a(27),l=a(18),c=a(0),p=a.n(c),d=a(22),m=a(15),u=a(100),f=a(82),h=a(99),b=a(93),v=a(1),g=a(40),E=a(108),_=(a(4),a(32)),N=a(8),y=a(153),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).change=a.change.bind(Object(r.a)(a)),a.onDrop=a.onDrop.bind(Object(r.a)(a)),a.onDragOver=a.onDragOver.bind(Object(r.a)(a)),a.onDragLeave=a.onDragLeave.bind(Object(r.a)(a)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"change",value:function(e){var t=e.target.value.split("\\");t=t[t.length-1];var a=this.props,n=a.fields,o=a.inputErrors;n=Object(N.a)({},n,{font_file:t}),o={},this.props.currentComponent.setState({fields:n,inputErrors:o}),this.props.form.handleFileSelect(e)}},{key:"onDrop",value:function(e){this.props.form.handleFileDrop({files:e},"font_file"),this.setState({highlight:!1})}},{key:"onDragOver",value:function(e){this.setState({highlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({highlight:!1})}},{key:"render",value:function(){var e=this,t=!!this.props.error[this.props.fieldName];return p.a.createElement(y.a,{onDrop:function(t){return e.props.form.handleFileDrop({files:t},"image_file")}},function(a){var n=a.getRootProps,o=a.getInputProps;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",Object.assign({className:"promize-upload"},n()),p.a.createElement("div",{className:"promize-upload-header"},p.a.createElement("label",{className:"promize-upload-title"},e.props.labelName),p.a.createElement("div",{className:"custom-upload-product"},p.a.createElement("div",{className:"promize-upload-button"},p.a.createElement("input",Object.assign({},o(),{type:"file",name:"image_file",id:"image_file",onChange:e.change,accept:".ttf"})),p.a.createElement("span",{className:"file-custom"},"Upload File")))),p.a.createElement("div",{className:"promize-upload-content"},p.a.createElement("div",{className:"promize-content-before-upload"},p.a.createElement("p",null,e.props.value?e.props.value:p.a.createElement(p.a.Fragment,null,p.a.createElement("i",{className:"fa fa-upload mr-15"}),"Browse the file")))),t&&p.a.createElement("span",{className:"promize-form-error"},"".concat(e.props.labelName," ")+"Required")))})}}]),t}(c.Component);var j=Object(d.b)(function(e){return{image:e.image}})(O),D=a(87);var F=function(e){return{font_name:"required",font_file:"required"}},S=function(e){function t(e){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).call(this,e))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"promize-modal-cover"},p.a.createElement("div",{className:"promize-modal modal-sm"},p.a.createElement("div",{className:"promize-modal-header"},p.a.createElement("h3",{className:"modal-title"},p.a.createElement("span",null,this.props.title))),p.a.createElement("div",{className:"promize-modal-body"},p.a.createElement("form",{onSubmit:this.props.font.handleSubmit,method:"POST"},p.a.createElement("div",{className:"df-wrap"},p.a.createElement("div",{className:"wd-100"},p.a.createElement(_.a,Object.assign({},this.props,{form:this.props.font,fieldName:"font_name",value:this.props.state.fields.font_name,labelName:"Font Name",validation:!1}))),p.a.createElement("div",{className:"wd-100"},p.a.createElement(_.a,Object.assign({},this.props,{form:this.props.font,fieldName:"font_code",value:this.props.state.fields.font_code,labelName:"Font Code",validation:!1}))),p.a.createElement("div",{className:"wd-100"},p.a.createElement(j,Object.assign({},this.props.state,{form:this.props.font,currentComponent:this.props.currentComponent,labelName:"Font File",fieldName:"font_file",dataName:"font_file",validation:!1,value:this.props.state.fields.font_file,error:this.props.state.inputErrors}))),p.a.createElement("div",{className:"mt-20 wd-100 df df-end"},p.a.createElement("button",{className:"btn btn-promize-secondary",onClick:this.props.enablePopup},"Cancel"),p.a.createElement(D.a,{className:"btn btn-promize-primary",text:"Save",response:this.props.state.fields})))))))}}]),t}(c.Component);var k=Object(d.b)(function(e){return{fileUpload:e.fileUpload,fonts:e.fonts}})(S),P=a(19),w=a.n(P),z=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).enablePopup=function(){var e={font_name:"",font_code:"",font_file:"",domain_id:m.a.DOMAIN_ID,status:1};a.setState({fields:e,openPopup:!a.state.openPopup,isEdit:!1})},a.state={openPopup:!1,isEdit:!1},a.displayRows=a.displayRows.bind(Object(r.a)(a)),a.state={filters:{domain_id:m.a.DOMAIN_ID,searchVal:"",modelName:"promize_fonts",searchKey:"font_name",idKey:"font_id"},fields:{font_name:"",font_code:"",font_file:"",domain_id:m.a.DOMAIN_ID,status:1},fonts:[],inputErrors:{}};var o=F();return a.grid=u.a.getInstance({currentComponent:Object(r.a)(a),url:"getListsWithPagination",actionType:v.w,method:"POST"}),a.font=g.a.getInstance(Object(r.a)(a),o,function(e){a.props.dispatch(Object(E.b)(e)),a.resetForm()},function(e){a.props.dispatch(Object(E.c)(e,"font_file","fileUpload"))},{}),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"initialState",value:function(){return{filters:{domain_id:m.a.DOMAIN_ID,searchVal:"",modelName:"promize_fonts",searchKey:"font_name",idKey:"font_id"},fonts:[]}}},{key:"componentDidMount",value:function(){this.grid.getRecords()}},{key:"resetForm",value:function(){var e=this,t={font_name:"",font_code:"",font_file:"",domain_id:m.a.DOMAIN_ID,status:1};this.setState({fields:t},function(){e.grid.getRecords()})}},{key:"setData",value:function(e){var t=this,a=e.fonts.response,n=e.font.response;a!==this.props.fonts.response&&(!e.fonts.isFetching&&a.data&&Object.keys(a.data).length>0&&a.status&&200===a.status?this.setState({fonts:a.data||[],openPopup:!1}):!e.fonts.isFetching&&e.fonts.isError&&this.setState({fonts:[]})),n!==this.props.font.response&&(!e.font.isFetching&&!e.fontSize.isError&&a.data&&Object.keys(a.data).length>0&&a.status&&200===a.status?(w.a.success(e.font.response.message),this.setState({openPopup:!1},function(){t.resetForm()})):!e.font.isFetching&&e.font.isError&&w.a.error(e.font.response.message))}},{key:"editFont",value:function(e,t){e.preventDefault(),this.setState({fields:t,openPopup:!this.state.openPopup,isEdit:!0})}},{key:"displayRows",value:function(){var e=this,t=this.state.fonts,a=p.a.createElement(b.a,{isFetching:this.props.fonts.isFetching,colspan:"10"});return t.length>0&&(a=t.map(function(t,a){var n=1==t.status;return p.a.createElement("tr",{key:a},p.a.createElement("td",null,t.font_name),p.a.createElement("td",null,p.a.createElement(f.a,Object.assign({},e.props,{value:n,fieldName:"status",id:t.font_id,onChange:function(a){e.grid.statusUpdate({url:"changeStatus",actionType:v.G,params:t,modelName:"promize_fonts",PKey:"font_id"},a)},spanLabel:{first:"Active",second:"InActive"},checkValue:{first:!0,second:!1}}))),p.a.createElement("td",null,p.a.createElement("div",{className:"table-actions"},p.a.createElement("button",{className:"btn-tbl edit",onClick:function(a){return e.editFont(a,t)}},p.a.createElement("i",{className:"fa fa-pencil-alt"})),p.a.createElement("button",{className:"btn-tbl delete",onClick:function(a){return e.table.delete.handleToogleModal({id:t.font_id,idKey:"ids",url:"deleteRecord",actionType:v.B,modelName:"promize_fonts",PKey:"font_id"},a)}},p.a.createElement("i",{className:"fa fa-trash-alt"})))))})),a}},{key:"componentWillReceiveProps",value:function(e){this.setData(e)}},{key:"render",value:function(){var e=this;return p.a.createElement(p.a.Fragment,null,this.state.openPopup&&p.a.createElement("div",null,p.a.createElement(k,Object.assign({},this,{font:this.font,title:this.state.isEdit?"Edit Font":"Add Font",enablePopup:this.enablePopup,currentComponent:this}))),p.a.createElement(h.a,Object.assign({ref:function(t){e.table=t}},this.props,this.state,{pageTitle:"Font Family",managementType:v.v,addButton:p.a.createElement("button",{className:"btn btn-promize-primary",onClick:this.enablePopup},p.a.createElement("span",null,"Add")),grid:this.grid,data:this.props.fonts,rowDelete:this.props.fontDelete}),p.a.createElement("table",{className:"promize-table table-hover table-action",id:"fixTable"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",{className:this.grid.sortType?"ASC"==this.grid.sortType?"sorting-asec":"sorting-desc":"sorting",onClick:function(t){return e.grid.handleColSorting(t)}},"Name"),p.a.createElement("th",null,"Status"),p.a.createElement("th",null,"Action"))),p.a.createElement("tbody",null,this.displayRows()))))}}]),t}(c.Component);t.default=Object(d.b)(function(e){return{fontStatus:e.fontStatus,fontDelete:e.fontDelete,fileUpload:e.fileUpload,fonts:e.fonts,font:e.font}})(z)},87:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),o=a.n(n),s=function(e){var t=e.className,a=e.text;e.response;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"submit",className:t},a))}}}]);
//# sourceMappingURL=12.2ca3053e.chunk.js.map