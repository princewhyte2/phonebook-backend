(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(16),u=n.n(o),a=(n(21),n(3)),i=n(4),s=n.n(i),d="api/persons",l={getAll:function(){return s.a.get(d).then((function(e){return e.data}))},create:function(e,t){return s.a.post(d,{name:e,number:t}).then((function(e){return e.data}))},remove:function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e}))},update:function(e,t,n){return s.a.put("".concat(d,"/").concat(e),{number:t,name:n}).then((function(e){return e.data}))}},b=n(0),j=function(e){var t=e.filter,n=e.setFilter;return Object(b.jsxs)("div",{children:["filter shown with: ",Object(b.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]})},f=function(e){var t=e.addPerson,n=e.newName,r=e.setNewName,c=e.newNumber,o=e.setNewNumber;return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:n,number:c}),r(""),o("")},children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var t=e.persons,n=e.onDelete;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[Object(b.jsxs)("p",{children:[e.name," ",e.number]}),Object(b.jsx)("button",{onClick:function(){return n(e.name,e.id)},children:"delete"})]},e.id)}))})},m=function(e){var t=e.notify;if(null===t)return null;var n=t.status,r=t.message;return Object(b.jsx)("div",{className:"message "+n,children:r})},O=function(){var e=Object(r.useState)([{name:"Arto Hellas",number:"040-123456",id:1}]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),u=Object(a.a)(o,2),i=u[0],s=u[1],d=Object(r.useState)(""),O=Object(a.a)(d,2),p=O[0],v=O[1],x=Object(r.useState)(""),w=Object(a.a)(x,2),g=w[0],N=w[1],y=Object(r.useState)(null),k=Object(a.a)(y,2),C=k[0],S=k[1];function A(e,t){S({status:e,message:t}),setTimeout((function(){S(null)}),5e3)}Object(r.useEffect)((function(){l.getAll().then((function(e){return c(e)})).catch((function(e){A("error","An error occurred while getting persons")}))}),[]);var D=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{notify:C}),Object(b.jsx)(j,{filter:g,setFilter:N}),Object(b.jsx)("h3",{children:"add a new"}),Object(b.jsx)(f,{addPerson:function(e){var t=e.name,r=e.number,o=n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));if(o){if(o.number===r)return void A("error","".concat(t," with ").concat(r," is already added to phonebook"));var u=o.id;window.confirm("".concat(t," is already added to phonebook, replace the old number with a new one?"))&&l.update(u,r,t).then((function(e){c(n.map((function(t){return t.id!==e.id?t:e}))),A("success","".concat(t," number updated to ").concat(r))})).catch((function(e){return A("error",e.response.data.error)}))}else l.create(t,r).then((function(e){c(n.concat(e)),A("success","Added ".concat(t))})).catch((function(e){return A("error",e.response.data.error)})),s(""),v("")},newName:i,setNewName:s,newNumber:p,setNewNumber:v}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(h,{persons:D,onDelete:function(e,t){window.confirm("Delete ".concat(e,"?"))&&l.remove(t).then((function(){c(n.filter((function(e){return e.id!==t}))),A("success","".concat(e," deleted"))})).catch((function(t){return A("error","".concat(e," not in server refresh your page"))}))}})]})};u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.48a4d4bc.chunk.js.map