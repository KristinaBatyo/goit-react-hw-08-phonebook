"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{3845:function(e,n,r){r.d(n,{Z:function(){return o}});var a,t=r(168),i=r(4934).Z.button(a||(a=(0,t.Z)(["\n  background-color: #fff;\n  border: 1px solid;\n  padding: 10px 15px;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),l=r(184),o=function(e){var n=e.children,r=e.type,a=void 0===r?"submit":r;return(0,l.jsx)(i,{type:a,children:n})}},130:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var a,t=r(9434),i=r(5029),l=r(1413),o=r(3943),u={name:"",email:"",password:""},s=r(8393),d={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},p=r(168),c=r(4934).Z.form(a||(a=(0,p.Z)(["\n    margin-top: 25px;\n    display: grid;\n    gap: 20px;\n    width: 300px;\n    padiing: 20px;\n"]))),h=r(3845),m=r(184),f=function(e){var n=e.onSubmit,r=(0,o.Z)({initialState:u,onSubmit:n}),a=r.state,t=r.handleChange,i=r.handleSubmit,p=a.name,f=a.email,b=a.password;return(0,m.jsxs)(c,{onSubmit:i,children:[(0,m.jsx)(s.Z,(0,l.Z)({value:p,handleChange:t},d.name)),(0,m.jsx)(s.Z,(0,l.Z)({value:f,handleChange:t},d.email)),(0,m.jsx)(s.Z,(0,l.Z)({value:b,handleChange:t},d.password)),(0,m.jsx)(h.Z,{children:" Register"})]})},b=function(){var e=(0,t.I0)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Register page"}),(0,m.jsx)(f,{onSubmit:function(n){e((0,i.IU)(n))}})]})}},8393:function(e,n,r){r.d(n,{Z:function(){return f}});var a=r(1413);function t(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i,l,o=r(2791),u=r(6382),s=r(168),d=r(4934),p=d.Z.div(i||(i=(0,s.Z)(["\n    display: grid;\n    grid-templete-columns: 70px 1fr;\n    align-items: center;\n    gap: 10px;\n    "]))),c=d.Z.input(l||(l=(0,s.Z)(["\n  border: 1px solid;\n  border-radius: 5px;\n  height: 35px;\n"]))),h=r(184),m=["label","handleChange"],f=function(e){var n=e.label,r=e.handleChange,i=t(e,m),l=(0,o.useMemo)((function(){return(0,u.x0)()}),[]);return(0,h.jsxs)(p,{children:[(0,h.jsx)("label",{htmlFor:l,children:n}),(0,h.jsx)(c,(0,a.Z)({id:l,onChange:r},i))]})}},3943:function(e,n,r){var a=r(4942),t=r(1413),i=r(9439),l=r(2791);n.Z=function(e){var n=e.initialState,r=e.onSubmit,o=(0,l.useState)((0,t.Z)({},n)),u=(0,i.Z)(o,2),s=u[0],d=u[1];return{state:s,setState:d,handleChange:function(e){var n=e.target;d((function(e){var r=n.name,i=n.value,l=n.checked,o="checkbox"===n.type?l:i;return(0,t.Z)((0,t.Z)({},e),{},(0,a.Z)({},r,o))}))},handleSubmit:function(e){e.preventDefault(),r((0,t.Z)({},s)),d((0,t.Z)({},n))}}}}}]);
//# sourceMappingURL=130.654b2164.chunk.js.map