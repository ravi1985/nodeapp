(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{384:function(e,t,a){"use strict";a.r(t);var c=a(7),r=a(5),i=a(17),n=a(16),o=a(27),l=a(18),s=a(0),d=a.n(s),p=a(22),m=a(11),_=a(15),u=a(100),y=a(82),g=a(99),h=a(93),f=(a(90),a(1)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(n.a)(t).call(this,e))).displayRows=a.displayRows.bind(Object(o.a)(a)),a.state=a.initialState(),a.grid=u.a.getInstance({currentComponent:Object(o.a)(a),url:"getListsWithPagination",actionType:f.m,method:"POST"}),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"initialState",value:function(){return{filters:{domain_id:this.props.app.DOMAIN_ID,searchVal:"",modelName:"promize_domain_clipart_category",searchKey:"clipart_category_name",idKey:"promize_domain_clipart_category_id"},cliparts:[]}}},{key:"componentDidMount",value:function(){this.grid.getRecords()}},{key:"setData",value:function(e){var t=e.cliparts.response;t!==this.props.cliparts.response&&(!e.cliparts.isFetching&&t.data&&Object.keys(t.data).length>0&&t.status&&200===t.status?this.setState({cliparts:t.data||[]}):!e.cliparts.isFetching&&e.cliparts.isError&&this.setState({cliparts:[]}))}},{key:"displayRows",value:function(){var e=this,t=this.state.cliparts,a=d.a.createElement(h.a,{isFetching:this.props.cliparts.isFetching,colspan:"10"});return t.length>0&&(a=t.map(function(t,a){var c=1==t.status;return d.a.createElement("tr",{key:a},d.a.createElement("td",null,d.a.createElement("div",{className:"promize-tbl-mi-cvr"},d.a.createElement("img",{src:_.a.APP_IMAGE_BASE_URL+t.clipart_category_image,className:"promize-tbl-img-sm",alt:" "}))),d.a.createElement("td",null,t.clipart_category_name),d.a.createElement("td",null,d.a.createElement(y.a,Object.assign({},e.props,{value:c,fieldName:"status",id:t.promize_clipart_id,onChange:function(a){e.grid.statusUpdate({url:"changeStatus",actionType:f.o,params:t,modelName:"promize_domain_clipart_category",PKey:"promize_domain_clipart_category_id"},a)},spanLabel:{first:"Active",second:"InActive"},checkValue:{first:!0,second:!1}}))),d.a.createElement("td",null,d.a.createElement("div",{className:"table-actions"},d.a.createElement(m.c,{className:"btn-tbl edit",to:"/settings/clipart/edit/"+t.promize_domain_clipart_category_id},d.a.createElement("i",{className:"fa fa-pencil-alt"})),d.a.createElement("button",{className:"btn-tbl delete",onClick:function(a){return e.table.delete.handleToogleModal({id:t.promize_domain_clipart_category_id,modelName:"promize_domain_clipart_category",PKey:"promize_domain_clipart_category_id",idKey:"ids",url:"deleteRecord",actionType:f.n},a)}},d.a.createElement("i",{className:"fa fa-trash-alt"})))))})),a}},{key:"componentWillReceiveProps",value:function(e){this.setData(e)}},{key:"render",value:function(){var e=this;return d.a.createElement(g.a,Object.assign({ref:function(t){e.table=t}},this.props,this.state,{pageTitle:"Clip Art List",addButton:d.a.createElement(m.c,{className:"btn btn-promize-primary",to:"/settings/clipart/add"},d.a.createElement("span",null,"Add")),managementType:f.l,grid:this.grid,data:this.props.cliparts,rowDelete:this.props.clipartDelete}),d.a.createElement("table",{className:"promize-table table-hover table-action",id:"fixTable"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Image"),d.a.createElement("th",{className:this.grid.sortType?"ASC"==this.grid.sortType?"sorting-asec":"sorting-desc":"sorting",onClick:function(t){return e.grid.handleColSorting(t)}},"Category"),d.a.createElement("th",null,"Status"),d.a.createElement("th",null,"Action"))),d.a.createElement("tbody",null,this.displayRows())))}}]),t}(s.Component);t.default=Object(p.b)(function(e){return{clipartStatus:e.clipartStatus,clipartDelete:e.clipartDelete,cliparts:e.cliparts}})(b)},90:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"e",function(){return o}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"f",function(){return d}),a.d(t,"a",function(){return p});var c=a(8),r=a(1),i=a(15);function n(e){var t="POST",a="createRecord";return(e=Object(c.a)({},e,{status:1,modelName:"promize_domain_clipart_category",idKey:"promize_domain_clipart_category_id"})).promize_domain_clipart_category_id&&(t="PUT",a="updateRecord",delete e.created_date,delete e.updated_date),{types:["".concat(r.l,"_").concat(r.U),"".concat(r.l,"_").concat(r.H),"".concat(r.l,"_").concat(r.Z)],method:t,url:a,data:e,payload:{receiveType:"postData"}}}function o(e){var t="POST",a="createRecord";return(e=Object(c.a)({},e,{modelName:"promize_clipart_category_images",idKey:"promize_clipart_category_images_id"})).promize_clipart_category_images_id&&(t="PUT",a="updateRecord",delete e.created_date,delete e.updated_date),{types:["".concat(r.p,"_").concat(r.U),"".concat(r.p,"_").concat(r.H),"".concat(r.p,"_").concat(r.Z)],method:t,url:a,data:e,payload:{receiveType:"postData"}}}function l(e){return{types:["".concat(r.l,"_").concat(r.U),"".concat(r.l,"_").concat(r.H),"".concat(r.l,"_").concat(r.Z)],method:"GET",url:"getClipartWithPK/"+e,data:{},payload:{receiveType:"editData"}}}function s(){var e={modelName:"promize_domain_clipart_category",idKey:"promize_domain_clipart_category_id",domain_id:i.a.DOMAIN_ID};return{types:["".concat(r.m,"_").concat(r.U),"".concat(r.m,"_").concat(r.H),"".concat(r.m,"_").concat(r.Z)],method:"POST",url:"getAllRecords",data:e}}function d(e,t,a){var c=new FormData;return c.append("file",e),c.append("name",t),{types:["".concat(r.J,"_").concat(r.U),"".concat(r.J,"_").concat(r.H),"".concat(r.J,"_").concat(r.Z)],method:"POST",requestBodyType:"FormData",url:"uploadClipartImage",data:c,payload:{receiveType:"postData"}}}function p(e){return(e=Object(c.a)({},e,{modelName:"promize_clipart_category_images",idKey:"promize_clipart_category_images_id"})).promize_clipart_category_images_id&&(delete e.created_date,delete e.updated_date),{types:["".concat(r.q,"_").concat(r.U),"".concat(r.q,"_").concat(r.H),"".concat(r.q,"_").concat(r.Z)],method:"DELETE",url:"deleteRecord",data:e,payload:{receiveType:"postData"}}}}}]);
//# sourceMappingURL=15.7e753215.chunk.js.map