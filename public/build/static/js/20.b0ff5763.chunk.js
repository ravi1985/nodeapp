(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{387:function(t,e,i){"use strict";i.r(e);var a=i(7),s=i(5),r=i(17),n=i(15),u=i(27),p=i(16),o=i(0),c=i.n(o),b=i(18),l=i.n(b),h=i(3),m=i.n(h),_=i(22),d=i(40),f=i(152),v=i(106),g=function(t){function e(t){var i;Object(a.a)(this,e),(i=Object(r.a)(this,Object(n.a)(e).call(this,t))).isEdit=!0;var s=Object(f.c)(t);return i.attribute=d.a.getInstance(Object(u.a)(i),s,function(t){i.props.dispatch(Object(v.e)(t))},function(t){i.props.dispatch(Object(v.k)(t,"option_image","imageUpload"))},{}),i.textValues=d.a.getInstance(Object(u.a)(i),s,function(t){i.props.dispatch(Object(v.e)(t))},{}),i.state=Object(f.b)(),i.state.viewList=[],i.initialState=Object(f.b)(),i}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.match.params.id&&this.props.dispatch(Object(v.c)(this.props.match.params.id))}},{key:"componentWillReceiveProps",value:function(t){if(!t.attribute.isFetching&&!t.attribute.isError&&t.attribute.isFetching!==this.props.attribute.isFetching)if(t.attribute.response.data&&"editData"===t.attribute.receiveType){if(this.state.isEdit&&this.props.match.params.id){this.setState({isEdit:!1});var e=JSON.parse(JSON.stringify(t.attribute.response.data));e=m.a.set(e,"promize_attribute_id",parseInt(e.promize_attribute_id));var i=t.attribute.response.data.promize_attribute_values,a=t.attribute.response.data.promize_attribute_clipart_values,s=t.attribute.response.data.promize_attribute_image_values,r=t.attribute.response.data.promize_attribute_text_values,n=[];if(i.length>0)i.map(function(t,e){n[e]={},n[e]=t,t.promize_images.length>0&&t.promize_images.map(function(t,i){"option_thubnail_image"==t.image_type&&(n[e].option_thumbnail_image=t)})}),e=m.a.set(e,"promize_attribute_values",n);else if(a.length>0){var u;u=a[0],e=m.a.set(e,"promize_attribute_clipart_values",u)}else if(s.length>0)e=m.a.set(e,"promize_attribute_image_values",s[0]);else if(r.length>0){var p=r[0];e=m.a.set(e,"promize_attribute_text_values",p)}this.initialState={fields:e},this.setState({attribute_saved:!0,fields:e})}}else"postData"===t.attribute.receiveType&&(l.a.success(t.attribute.response.message),t.history.push("/attributes"))}},{key:"render",value:function(){var t=this.props.attribute,e=1==this.state.fields.status;return c.a.createElement(f.a,Object.assign({},this.props,{currentComponent:this,title:"Edit Attribute",form:this.attribute,attribute:t,state:this.state,reset:this.initialState,isEdit:!0,statusValue:e}))}}]),e}(o.Component);e.default=Object(_.b)(function(t){return{attribute:t.attribute}})(g)}}]);
//# sourceMappingURL=20.b0ff5763.chunk.js.map