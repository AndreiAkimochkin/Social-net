(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[3],{139:function(t,e,s){"use strict";var n=s(14),r=s.n(n),o=s(22),i=s.n(o),c=s(0),u=s.n(c),a=s(4),p=s.n(a),d=s(36),j=function(t){function e(e){var s;if(s=t.call(this,e)||this,!e._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return s}i()(e,t);var s=e.prototype;return s.componentDidMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},s.componentDidUpdate=function(t){this.props.onSubmit!==t.onSubmit&&this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},s.render=function(){var t=this.props,e=(t._reduxForm,r()(t,["_reduxForm"]));return u.a.createElement("form",e)},e}(c.Component);j.propTypes={onSubmit:p.a.func.isRequired,_reduxForm:p.a.object},e.a=Object(d.b)(j)},292:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__13RHl"}},293:function(t,e,s){},294:function(t,e,s){t.exports={item:"Post_item__atx0M"}},295:function(t,e,s){"use strict";s.r(e);var n=s(5),r=s(28),o=s(29),i=s(31),c=s(30),u=s(1),a=s(0),p=s.n(a),d=s(292),j=s.n(d),b=s(43),l=s(130),f=function(t){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),n=s[0],r=s[1],o=Object(a.useState)(t.status),i=Object(l.a)(o,2),c=i[0],p=i[1];Object(a.useEffect)((function(){c(t.status)}),[t.status]);return Object(u.jsxs)("div",{children:[!n&&Object(u.jsx)("div",{children:Object(u.jsx)("span",{onClick:function(){r(!0)},children:t.status})}),n&&Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(t){p({status:t.currentTarget.value})},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(c)},value:c})})]})},m=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(u.jsx)("div",{className:j.a.content,children:Object(u.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(u.jsx)("img",{src:e.photos.large}),Object(u.jsx)(f,{status:s,updateStatus:n})]})}):Object(u.jsx)(b.a,{})},h=s(95),O=s(293),x=s.n(O),v=s(294),S=s.n(v),g=function(t){return Object(u.jsxs)("div",{className:S.a.item,children:[Object(u.jsx)("img",{src:"https://xakep.ru/wp-content/uploads/2013/12/085647.jpg"}),t.message,Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["Like ",t.likesCount]})})]})},P=s(139),k=s(128),_=s(129),w=s(74),F=s(65),C=p.a.memo((function(t){var e=t.posts.map((function(t){return Object(u.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(u.jsx)("div",{className:x.a.posts,children:Object(u.jsxs)("div",{className:x.a.item,children:[Object(u.jsx)("div",{children:"MyPost"}),Object(u.jsx)(y,{onSubmit:function(e){t.addPost(e.newPostText)}}),e]})})})),I=Object(w.a)(30),y=Object(_.a)({form:"AddNewPostForm"})((function(t){return Object(u.jsxs)(P.a,{onSubmit:t.handleSubmit,children:[Object(u.jsx)(k.a,{placeholder:"Send message",name:"newPostText",component:F.b,validate:[w.b,I]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Send message"})})]})})),N=C,T=s(12),U=Object(T.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(N),B=function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{profile:t.profile,stats:t.status,updateStatus:t.updateStatus}),Object(u.jsx)(U,{})]})},M=s(11),A=s(10),D=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUsersProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(u.jsx)(B,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(p.a.Component);e.default=Object(A.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUsersProfile:h.c,getStatus:h.b,updateStatus:h.e}),M.f)(D)}}]);
//# sourceMappingURL=3.b2e6afd3.chunk.js.map