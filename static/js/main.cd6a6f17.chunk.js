(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(26),a(18)),i=a(19),s=a(3),d=a(4),u=a(6),m=a(5),h=a(7),b=a(1),p=a(8),f=a.n(p),v=Object({NODE_ENV:"production",PUBLIC_URL:"/react-accounts-app"}).REACT_APP_RECORDS_API_URL||"https://5cb5bfa207f233001424d6c5.mockapi.io/api/v1/records",g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={edit:!1},a.handleEditingToggle=a.handleEditingToggle.bind(Object(b.a)(Object(b.a)(a))),a.handleUpdate=a.handleUpdate.bind(Object(b.a)(Object(b.a)(a))),a.handleDelete=a.handleDelete.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleEditingToggle",value:function(){this.setState({edit:!this.state.edit})}},{key:"handleUpdate",value:function(e){var t=this;e.preventDefault();var a,n,r={date:this.refs.date.value,title:this.refs.title.value,amount:Number.parseInt(this.refs.amount.value,0)};(a=this.props.record.id,n=r,f.a.put("".concat(v,"/api/v1/records/").concat(a),n)).then(function(e){return t.props.onUpdateRecord(t.props.record,e.data)}).catch(function(e){return console.log(e.message)}),this.handleEditingToggle()}},{key:"handleDelete",value:function(e){var t,a=this;e.preventDefault(),(t=this.props.record.id,f.a.delete("".concat(v,"/api/v1/records/").concat(t))).then(function(e){a.props.onDeleteRecord(e.data)}).catch(function(e){return console.log(e.message)})}},{key:"returnRecordRow",value:function(){var e=this.props.record,t=e.date,a=e.title,n=e.amount;return r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},t),r.a.createElement("td",{className:"align-middle"},a),r.a.createElement("td",{className:"align-middle"},n),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-3 btn-action",onClick:this.handleEditingToggle},"Edit"),r.a.createElement("button",{className:"btn btn-danger btn-action",onClick:this.handleDelete},"Delete")))}},{key:"returnEditingRow",value:function(){var e=this.props.record,t=e.date,a=e.title,n=e.amount;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:t,ref:"date"})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:a,ref:"title"})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:n,ref:"amount"})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-3 btn-action",onClick:this.handleUpdate},"Update"),r.a.createElement("button",{className:"btn btn-danger btn-action",onClick:this.handleEditingToggle},"Cancel")))}},{key:"render",value:function(){return this.state.edit?this.returnEditingRow():this.returnRecordRow()}}]),t}(n.Component),E=a(9),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={date:"",title:"",amount:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"buttonValid",value:function(){var e=this.state,t=e.date,a=e.title,n=e.amount;return!!(t&&a&&n)}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(E.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.date,r=a.title,c=a.amount;(function(e){return f.a.post("".concat(v,"/api/v1/records"),e)})({date:n,title:r,amount:Number.parseInt(c,0)}).then(function(e){t.props.onCreateRecord(e.data),t.setState({date:"",title:"",amount:""})}).catch(function(e){return console.log(e.message)})}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.title,n=e.amount;return r.a.createElement("form",{className:"form-row my-5 justify-content-center",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"col-2 mr-4"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,placeholder:"Date",name:"date",value:t})),r.a.createElement("div",{className:"col-3 mr-4"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,placeholder:"Title",name:"title",value:a})),r.a.createElement("div",{className:"col-2 mr-3"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,placeholder:"Amount",name:"amount",value:n})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.buttonValid()},"Create Record")))}}]),t}(n.Component),y=function(e){var t=e.title,a=e.type,n=e.amount;return r.a.createElement("div",{className:"col amount-box"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-white bg-".concat(a," text-center font-weight-bold")},t),r.a.createElement("div",{className:"card-body text-center font-weight-bold text-secondary"},n)))},N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={records:[],error:null,isLoaded:!1},a.onCreateRecord=a.onCreateRecord.bind(Object(b.a)(Object(b.a)(a))),a.onUpdateRecord=a.onUpdateRecord.bind(Object(b.a)(Object(b.a)(a))),a.onDeleteRecord=a.onDeleteRecord.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat(v,"/api/v1/records")).then(function(t){e.setState({records:t.data,isLoaded:!0})}).catch(function(t){e.setState({error:t,isLoaded:!0})})}},{key:"onCreateRecord",value:function(e){var t=this.state.records,a=[].concat(Object(i.a)(t),[e]);this.setState({records:a})}},{key:"onUpdateRecord",value:function(e,t){var a=this.state.records.map(function(a){return a.id!==e.id?a:Object(l.a)({},a,t)});this.setState({records:a})}},{key:"onDeleteRecord",value:function(e){var t=this.state.records.filter(function(t){return t.id!==e.id});this.setState({records:t})}},{key:"getIncome",value:function(){return this.state.records.filter(function(e){return e.amount>=0}).reduce(function(e,t){return e+t.amount},0)}},{key:"getOutcome",value:function(){return this.state.records.filter(function(e){return e.amount<=0}).reduce(function(e,t){return e+t.amount},0)}},{key:"getBalance",value:function(){return this.getIncome()+this.getOutcome()}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.records,c=a.error,o=a.isLoaded;return e=c?r.a.createElement("div",{className:"loading-message loading-error-message"},"Error: ",c.message):o?r.a.createElement("table",{className:"table table-bordered text-center "},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{className:"w-25"},"Date"),r.a.createElement("th",{className:"w-25"},"Title"),r.a.createElement("th",{className:"w-25"},"Amount"),r.a.createElement("th",{className:"w-25"},"Actions"))),r.a.createElement("tbody",null,n.map(function(e){return r.a.createElement(g,{key:e.id,record:e,onUpdateRecord:t.onUpdateRecord,onDeleteRecord:t.onDeleteRecord})}))):r.a.createElement("div",{className:"loading-message"},"Loading..."),r.a.createElement("div",{className:"mx-5 px-5"},r.a.createElement("h2",{className:"my-4 bg-primary text-white text-center"},"Accounts App"),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(y,{title:"Income",type:"success",amount:this.getIncome()}),r.a.createElement(y,{title:"Outcome",type:"danger",amount:this.getOutcome()}),r.a.createElement(y,{title:"Balance",type:"info",amount:this.getBalance()})),r.a.createElement(O,{onCreateRecord:this.onCreateRecord}),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.cd6a6f17.chunk.js.map