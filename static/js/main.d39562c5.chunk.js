(this["webpackJsonpspace-finder-fronted"]=this["webpackJsonpspace-finder-fronted"]||[]).push([[0],{28:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),n=r(21),c=r.n(n),i=(r(28),r(4)),o=r(5),u=r(14),p=r(8),l=r(7),h=r(3),j=r.n(h),d=r(10),b=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(){var e=Object(d.a)(j.a.mark((function e(t,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("user"!==t||"123"!==r){e.next=4;break}return e.abrupt("return",{userName:t,email:"testing@yopmail.com"});case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getUserAttributes",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=[]).push({Name:"Testing user",Value:"User Test"},{Name:"Job",Value:"Engineer"},{Name:"Job 2",Value:"Engineer"}),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),f=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getSpaces",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=[]).push({location:"Paris",name:"Paris tower",spaceId:"1",photoUrl:"https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/pyr/57baab765bafe83c45be0a61/paris.jpg"},{location:"Spain",name:"Some place",spaceId:"2",photoUrl:"https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/1600/90/media/abd/refresh/europe/spain-vacations/abd-europe-spain-slideshow-01-plaza-de-espana-1x1.jpg?cb=3"},{location:"Some place",name:"Some place",spaceId:"3"}),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"reserveSpace",value:function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("123"!==t){e.next=4;break}return e.abrupt("return","44545");case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=r(9),O=Object(v.a)(),m=r(0),x=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={userName:"",password:"",loginAttempted:!1,loginSuccessful:!1},e}return Object(o.a)(r,[{key:"setUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"setPassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loginAttempted:!0}),e.next=4,this.props.authService.login(this.state.userName,this.state.password);case 4:(r=e.sent)?(this.setState({loginSuccessful:!0}),this.props.setUser(r),O.push("/profile")):this.setState({loginSuccessful:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.loginAttempted&&(e=Object(m.jsxs)("label",{children:["Login ",this.state.loginSuccessful?"successful":"failed"]})),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Please Login"}),Object(m.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(m.jsx)("input",{value:this.state.userName,onChange:function(e){return t.setUserName(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{value:this.state.password,type:"password",onChange:function(e){return t.setPassword(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"submit",value:"Login"}),e]})]})}}]),r}(s.a.Component),y=r(2),g=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).authService=new b,a.dataService=new f,a.state={user:void 0},a.setUser=a.setUser.bind(Object(u.a)(a)),a}return Object(o.a)(r,[{key:"setUser",value:function(e){this.setState({user:e})}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)(y.b,{history:O,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{user:this.state.user}),Object(m.jsxs)(y.c,{children:[Object(m.jsx)(y.a,{exact:!0,path:"/",component:S}),Object(m.jsx)(y.a,{exact:!0,path:"/login",children:Object(m.jsx)(x,{authService:this.authService,setUser:this.setUser})}),Object(m.jsx)(y.a,{exact:!0,path:"/profile",children:Object(m.jsx)(U,{user:this.state.user,authService:this.authService})}),Object(m.jsx)(y.a,{exact:!0,path:"/spaces",children:Object(m.jsx)(M,{dataService:this.dataService})})]})]})})})}}]),r}(s.a.Component),S=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"Home page"})}}]),r}(s.a.Component),w=r(13),k=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e;return e=this.props.user?Object(m.jsx)(w.a,{to:"/logout",style:{float:"right"},children:this.props.user.userName}):Object(m.jsx)(w.a,{"data-testid":"login-link",to:"/login",style:{float:"right"},children:"Login"}),Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)(w.a,{"data-testid":"home-link",to:"/",children:" Home"}),Object(m.jsx)(w.a,{"data-testid":"profile-link",to:"/profile",children:" Profile"}),Object(m.jsx)(w.a,{"data-testid":"spaces-link",to:"/spaces",children:" Spaces"}),e]})}}]),r}(s.a.Component),N=r(23),U=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={userAttributes:[]},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.user){e.next=5;break}return e.next=3,this.props.authService.getUserAttributes(this.props.user);case 3:t=e.sent,this.setState({userAttributes:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderUserAttributes",value:function(){var e,t=[],r=Object(N.a)(this.state.userAttributes);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.push(Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:a.Name}),Object(m.jsx)("td",{children:a.Value})]},a.Name))}}catch(s){r.e(s)}finally{r.f()}return Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{children:t})})}},{key:"render",value:function(){var e;return e=this.props.user?Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Hello ",this.props.user.userName]}),this.renderUserAttributes()]}):Object(m.jsxs)("div",{children:["Please ",Object(m.jsx)(w.a,{to:"/login",children:"Login"})]}),Object(m.jsxs)("div",{children:["Profile page",e]})}}]),r}(s.a.Component),C=(r(39),function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return this.props.show?Object(m.jsx)("div",{className:"modal",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{children:"You tried to reserve..."}),Object(m.jsx)("h3",{className:"modalText",children:this.props.content}),Object(m.jsx)("button",{className:"modalButton",onClick:function(){return e.props.close()},children:"Close"})]})}):Object(m.jsx)("div",{})}}]),r}(a.Component)),I=r.p+"static/media/generic-image.8939f288.jpg",A=(r(40),function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderImg",value:function(){return Object(m.jsx)("img",{src:this.props.photoUrl||I,alt:""})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"spaceComponent",children:[this.renderImg(),Object(m.jsx)("label",{className:"name",children:this.props.name}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"spaceId",children:this.props.spaceId}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{className:"location",children:this.props.location}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return e.props.reserveSpace(e.props.spaceId)},children:"Reserve"})]})}}]),r}(a.Component)),M=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).state={spaces:[],showModal:!1,content:""},a.reserveSpace=a.reserveSpace.bind(Object(u.a)(a)),a.closeModal=a.closeModal.bind(Object(u.a)(a)),a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dataService.getSpaces();case 2:t=e.sent,this.setState({spaces:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reserveSpace",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dataService.reserveSpace(t);case 2:(r=e.sent)?this.setState({showModal:!0,content:"You reserved the space ".concat(t,", it was accepted with the code ").concat(r)}):this.setState({showModal:!0,content:"You couldn't reserve the space ".concat(t)});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderSpaces",value:function(){var e=this,t=[];return this.state.spaces.forEach((function(r){t.push(Object(m.jsx)(A,{location:r.location,name:r.name,photoUrl:r.photoUrl,spaceId:r.spaceId,reserveSpace:e.reserveSpace},r.spaceId))})),t}},{key:"closeModal",value:function(){this.setState({showModal:!1,content:""})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Spaces Page"}),this.renderSpaces(),this.state.showModal&&Object(m.jsx)(C,{content:this.state.content,close:this.closeModal,show:this.state.showModal})]})}}]),r}(a.Component);c.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d39562c5.chunk.js.map