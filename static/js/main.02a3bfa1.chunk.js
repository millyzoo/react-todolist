(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var o,i,r,c,a,s,d,l,b,p,x,u,h,j,f,g,O,m,v,k,w,y,C,E=e(1),D=e.n(E),F=e(12),B=e.n(F),z=(e(21),e(10)),I=e(16),M=e(5),$=e(2),S=e(3),T=e.p+"static/media/clear.32466c17.svg",J=e.p+"static/media/delete.89150e53.svg",A=e.p+"static/media/edit.5428aee9.svg",H=e(0),L=S.b.div(o||(o=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 45px;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #F6F6F6;\n  }\n  &:hover Button{\n    opacity: 1;\n  }\n"]))),P=S.b.div(i||(i=Object($.a)(["\n  display: flex;\n  align-items: center;\n  width: calc(100% - 52px);\n  height: 100%;\n  color: #555555;\n"]))),K=S.b.label(r||(r=Object($.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: 0.3s;\n\n  input {\n    margin-right: 15px;\n  }\n\n  ","\n"])),(function(n){return n.$isDone&&"\n    text-decoration: line-through;\n    color: #E1E1E1;\n  "})),N=S.b.div(c||(c=Object($.a)(['\n  position: relative;\n  margin-right: 20px;\n  height: 10px;\n  width: 10px;\n  border: 1px solid #BBBBBB;\n  border-radius: 50%;\n  transition: 0.3s;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 0.5px;\n    bottom: 4px;\n    transform: rotate(-50deg);\n    width: 15px;\n    height: 2px;\n    background-color: #858585;\n    opacity: 0;\n    transition: 0.3s;\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    left: -2px;\n    bottom: 2px;\n    transform: rotate(45deg);\n    width: 7px;\n    height: 2px;\n    background-color: #858585;\n    opacity: 0;\n    transition: 0.3s;\n  }\n  ',"\n"])),(function(n){return n.$isDone&&"\n    border: 1px solid transparent;\n\n    &::before {\n      opacity: 1;\n    }\n    \n    &::after {\n      opacity: 1;\n    }\n  "})),R=S.b.div(a||(a=Object($.a)(["\n  display: flex;\n"]))),q=S.b.button(s||(s=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  outline: none;\n  border: transparent;\n  background-color: transparent;\n  opacity: 0;\n  transition: 0.3s;\n  cursor: pointer;\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  & + & {\n    margin-left: 20px;\n  }\n"]))),G=S.b.div(d||(d=Object($.a)(["\n  z-index: 1;\n\n  ","\n"])),(function(n){return n.$modalIsOpen?"display: block;":"display: none;"})),Q=S.b.div(l||(l=Object($.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),U=S.b.div(b||(b=Object($.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 300px;\n  height: 130px;\n  background-color: #fff;\n"]))),V=S.b.div(p||(p=Object($.a)(['\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n  &::before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-45deg);\n    width: 3px;\n    height: 15px;\n    background-color: #000;\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n    width: 3px;\n    height: 15px;\n    background-color: #000;\n  }\n']))),W=S.b.div(x||(x=Object($.a)(["\n  display: flex;\n  width: 100%;\n"]))),X=S.b.input(u||(u=Object($.a)(["\n  margin-right: 15px;\n  padding: 5px;\n  width: calc(100% - 50px);\n  border: transparent;\n  border-bottom: 1px solid #000;\n  outline: none;\n  font-size: 20px;\n"]))),Y=S.b.button(h||(h=Object($.a)(["\n  width: 80px;\n  border: 1px solid #858585;\n  border-radius: 20px;\n  background-color: transparent;\n  font-size: 16px;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {    \n    background-color: #E3E3E3;\n  }\n"])));function Z(n){var t=n.todo,e=n.handleDeleteTodo,o=n.handleToggleIsDone,i=n.modalIsOpen,r=n.handleModalClose,c=n.handelModalOpen;return Object(H.jsxs)(L,{children:[Object(H.jsxs)(G,{$modalIsOpen:i,children:[Object(H.jsx)(Q,{}),Object(H.jsxs)(U,{children:[Object(H.jsx)(V,{onClick:function(){r()}}),Object(H.jsxs)(W,{children:[Object(H.jsx)(X,{}),Object(H.jsx)(Y,{children:"\u78ba\u5b9a"})]})]})]}),Object(H.jsx)(P,{"$data-todo-id":t.id,children:Object(H.jsxs)(K,{$isDone:t.isDone,onClick:function(){o(t.id)},children:[Object(H.jsx)(N,{$isDone:t.isDone}),Object(H.jsx)("p",{children:t.content})]})}),Object(H.jsxs)(R,{children:[Object(H.jsx)(q,{onClick:function(){c()},children:Object(H.jsx)("img",{src:A,alt:""})}),Object(H.jsx)(q,{onClick:function(){e(t.id)},children:Object(H.jsx)("img",{src:J,alt:""})})]})]})}var _,nn=S.b.div(j||(j=Object($.a)(["\n  margin: 100px auto 0 auto;\n  width: 100%;\n  max-width: 550px;\n  background-color: #fff;\n  box-shadow: 0 0 50px rgba(135, 135, 135, 0.1);\n"]))),tn=S.b.div(f||(f=Object($.a)(["\n  display: flex;\n"]))),en=S.b.div(g||(g=Object($.a)(["\n  width: calc(100% / 3);\n  line-height: 50px;\n  text-align: center;\n  color: #555555;\n  background-color: #F9F9F9;\n  transition: 0.3s;\n  cursor: pointer;\n\n  & + & {\n    border-left: 1px solid #ECECEC;\n    border-bottom: 1px solid #ECECEC;\n  }\n\n  &:hover {\n    background-color: #ffffff;\n  }\n"]))),on=S.b.div(O||(O=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 45px;\n  height: 75px;\n  font-size: 15px;\n  color: #858585;\n"]))),rn=S.b.span(m||(m=Object($.a)(["\n  margin-right: 5px;\n"]))),cn=S.b.div(v||(v=Object($.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  border: 1px solid #E1E1E1;\n  border-radius: 30px;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #F9F9F9;\n  }\n\n  img {\n    margin-right: 5px;\n    width: 15px;\n    height: 15px;\n  }\n"]))),an=S.b.div(k||(k=Object($.a)(["\n  max-height: 260px;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n  width: 10px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #E3E3E3;\n    border-radius: 20px;\n  }\n"]))),sn=S.b.div(w||(w=Object($.a)(["\n  display: flex;\n  border-top: 1px solid #ECECEC;\n"]))),dn=S.b.input(y||(y=Object($.a)(["\n  padding: 0 25px;\n  width: calc(100% - 60px);\n  border: transparent;\n  outline: none;\n  font-size: 20px;\n  color: #555555;\n\n  ::placeholder {\n    font-size: 20px;\n    color: #DCDCDC;\n  }\n"]))),ln=S.b.button(C||(C=Object($.a)(["\n  width: 60px;\n  height: 60px;\n  border: transparent;\n  border-left: 1px solid #ECECEC;\n  background-color: transparent;\n  color: #555555;\n  font-family: 'Microsoft JhengHei';\n  font-size: 30px;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: #F9F9F9;\n  }\n"])));function bn(){var n=Object(E.useState)([{id:1,content:"test content",isDone:!0},{id:2,content:"\u672a\u5b8c\u6210",isDone:!1}]),t=Object(M.a)(n,2),e=t[0],o=t[1],i=Object(E.useState)(""),r=Object(M.a)(i,2),c=r[0],a=r[1],s=Object(E.useState)("all"),d=Object(M.a)(s,2),l=d[0],b=d[1],p=Object(E.useState)(!1),x=Object(M.a)(p,2),u=x[0],h=x[1],j=Object(E.useRef)(3);function f(n){c&&(o([{id:j.current,content:c}].concat(Object(I.a)(e))),a(""),j.current++)}var g=function(n){o(e.filter((function(t){return t.id!==n})))},O=function(n){o(e.map((function(t){return t.id!==n?t:Object(z.a)(Object(z.a)({},t),{},{isDone:!t.isDone})})))},m=function(){h(!1)},v=function(){h(!0)};return Object(H.jsxs)(nn,{children:[Object(H.jsxs)(tn,{children:[Object(H.jsx)(en,{onClick:function(){return b("all")},children:"\u5168\u90e8"}),Object(H.jsx)(en,{onClick:function(){return b("uncomplete")},children:"\u672a\u5b8c\u6210"}),Object(H.jsx)(en,{onClick:function(){return b("done")},children:"\u5df2\u5b8c\u6210"})]}),Object(H.jsxs)(on,{children:[Object(H.jsxs)("p",{children:[Object(H.jsx)(rn,{children:"0"}),"\u500b\u672a\u5b8c\u6210"]}),Object(H.jsxs)(cn,{onClick:function(){o(e.filter((function(n){return!0!==n.isDone})))},children:[Object(H.jsx)("img",{src:T,alt:""}),"\u79fb\u9664\u5df2\u5b8c\u6210\u4e8b\u9805"]})]}),Object(H.jsx)(an,{children:e.filter((function(n){return"all"===l?n:"uncomplete"===l?!n.isDone:n.isDone})).map((function(n){return Object(H.jsx)(Z,{todo:n,modalIsOpen:u,handelModalOpen:v,handleModalClose:m,handleDeleteTodo:g,handleToggleIsDone:O},n.id)}))}),Object(H.jsxs)(sn,{children:[Object(H.jsx)(dn,{type:"text",placeholder:"Add something to do here?",value:c,onChange:function(n){a(n.target.value)},onKeyDown:function(n){13===n.keyCode&&f()}}),Object(H.jsx)(ln,{onClick:function(n){return f()},children:"+"})]})]})}var pn=Object(S.a)(_||(_=Object($.a)(["\n  body {\n    background-color: #EFF4F6;\n    font-family: 'Microsoft JhengHei';\n  }\n  p {\n    margin: 0;\n  }\n"])));function xn(){return Object(H.jsx)(pn,{})}var un=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(xn,{}),Object(H.jsx)(bn,{})]})},hn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;e(n),o(n),i(n),r(n),c(n)}))};B.a.render(Object(H.jsx)(D.a.StrictMode,{children:Object(H.jsx)(un,{})}),document.getElementById("root")),hn()}},[[25,1,2]]]);
//# sourceMappingURL=main.02a3bfa1.chunk.js.map