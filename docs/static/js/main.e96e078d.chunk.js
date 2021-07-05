(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{29:function(e,r,a){},31:function(e,r,a){"use strict";a.r(r);var c=a(1),s=a(15),t=a.n(s),n=a(4),i=a(2),l=a(0);var o=function(e){var r=e.history;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{onClick:function(){console.log("Click login"),r.replace("./")},className:"btn btn-primary",children:"Login"})]})})},h=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid container",children:[Object(l.jsx)(n.c,{to:"/",className:"navbar-brand",children:"Heroes App"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.c,{to:"/marvel",className:"nav-link",children:"Marvel"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.c,{to:"/dc",className:"nav-link",children:"DC"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.c,{to:"/search",className:"nav-link",children:"Search"})})]}),Object(l.jsx)("span",{className:"navbar-text",children:Object(l.jsx)(n.c,{to:"/login",className:"nav-link",children:"Logout"})})]})]})})},j=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-aquaman",superhero:"Aquaman",publisher:"DC Comics",alter_ego:"Aquaman",first_appearance:"Aquaman Comics #27",characters:"La sirenita"},{id:"dc-cyborg",superhero:"Cyborg",publisher:"DC Comics",alter_ego:"Cyborg",first_appearance:"Cyborg Comics #27",characters:"Tuerquitas"},{id:"dc-green-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Green Arrow",first_appearance:"Green Arrow Comics #1",characters:"Arquito"},{id:"dc-green-lantern",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Green Lantern",first_appearance:"Green Lantern Comics #1",characters:"Lamparita"},{id:"dc-wonder-woman",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Wonder Woman",first_appearance:"Wonder Woman Comics #27",characters:"Sexy mujercita"},{id:"marvel-antman",superhero:"Ant Man",publisher:"Marvel",alter_ego:"Ant man",first_appearance:"Ant man Comics #27",characters:"Hormiguita"},{id:"marvel-blackwidow",superhero:"Black Widow",publisher:"Marvel",alter_ego:"Black Widow",first_appearance:"Black Widow Comics #27",characters:"Asesina"},{id:"marvel-capitan",superhero:"Capitan America",publisher:"Marvel",alter_ego:"Capitan America",first_appearance:"Capitan America Comics #27",characters:"Soldatido"},{id:"marvel-deadpool",superhero:"Dead Poll",publisher:"Marvel",alter_ego:"Dead Pool",first_appearance:"Dead Pool Comics #27",characters:"Malcriado"},{id:"marvel-fantastico",superhero:"Mr. Fantastico",publisher:"Marvel",alter_ego:"Mr. Fantastico",first_appearance:"4 fantasticos Comics #27",characters:"Hulito"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel",alter_ego:"Hulk",first_appearance:"Hulk Comics #27",characters:"Verdecito"},{id:"marvel-fenix",superhero:"Fenix",publisher:"Marvel",alter_ego:"Fenix",first_appearance:"Fenix Comics #27",characters:"Pajarito"},{id:"marvel-ironman",superhero:"Iron Man",publisher:"Marvel",alter_ego:"Iron Man",first_appearance:"Iron Man Comics #27",characters:"Egocentrico man"},{id:"marvel-spiderman",superhero:"Spider Man",publisher:"Marvel",alter_ego:"Spider Man",first_appearance:"Spider Man Comics #27",characters:"Aranita"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel",alter_ego:"Thor",first_appearance:"Thor Comics #27",characters:"Martillito"},{id:"marvel-vision",superhero:"Vision",publisher:"Marvel",alter_ego:"Vision",first_appearance:"Vision Comics #27",characters:"Rototito"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel",alter_ego:"Wolverine",first_appearance:"Wolverine Comics #27",characters:"Garritas"}],d=function(e){var r=e.hero;return Object(l.jsx)("div",{className:"card lg-3",children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:"./assets/"+r.id+".jpeg",className:"card-img",alt:"./assets/"+r.id+".jpeg"})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:r.superhero}),Object(l.jsx)("p",{className:"card-text",children:r.alter_ego}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:[" ",r.first_appearance," "]})}),Object(l.jsx)(n.b,{to:"./hero/"+r.id,children:"M\xe1s..."})]})})]})})};a(29);var b=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return j.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(l.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:a.map((function(e){return Object(l.jsx)(d,{hero:e},e.id)}))})};var m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Marvel"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"Marvel"})]})};var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"DC Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"DC Comics"})]})};var p=function(e){var r=e.history,a=Object(i.h)().heroId,s=Object(c.useMemo)((function(){return e=a,j.find((function(r){return r.id===e}));var e}),[a]);if(!s)return Object(l.jsx)(i.a,{to:"/"});var t=s.superhero,n=s.publisher,o=s.alter_ego,h=s.first_appearance,d=s.characters;return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{src:"../assets/"+a+".jpeg",alt:t,className:"img-thumbnail animate__animated animate__backInLeft"})}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsxs)("h3",{children:[" ",t," "]}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[" Alter ego: ",o," "]}),Object(l.jsxs)("li",{className:"list-group-item",children:[" Publicado: ",n," "]}),Object(l.jsxs)("li",{className:"list-group-item",children:[" Primera aparici\xf3n: ",h," "]})]}),Object(l.jsx)("h5",{children:"Personajes"}),Object(l.jsxs)("p",{children:[" ",d," "]}),Object(l.jsx)("button",{className:"btn btn-outline-info",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Volver"})]})]})},v=function(){return j};var x=function(){var e=Object(c.useMemo)((function(){return v()}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Todos"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:e.map((function(e){return Object(l.jsx)(d,{hero:e},e.id)}))})]})},O=a(18),g=a(17),f=a.n(g),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:j.filter((function(r){return r.superhero.toLowerCase().includes(e.toLowerCase())}))},C=function(e){var r=e.history,a=Object(i.g)(),s=f.a.parse(a.search).q,t=Object(c.useState)(s||""),n=Object(O.a)(t,2),o=n[0],h=n[1],j=Object(c.useMemo)((function(){return _(s||"")}),[s]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Search a hero"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-5",children:[Object(l.jsx)("h4",{children:"Form"}),Object(l.jsx)("h4",{}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target.search.value;r.push("?q="+a)},children:[Object(l.jsx)("input",{value:o,name:"search",onChange:function(e){h(e.target.value)},type:"search",placeholder:"Find your hero",className:"form-control"}),Object(l.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search"})]})]}),Object(l.jsxs)("div",{className:"col-7",children:[Object(l.jsx)("h4",{children:"Result"}),Object(l.jsx)("hr",{}),j.map((function(e){return Object(l.jsx)(d,{hero:e},e.id)})),void 0===s&&Object(l.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),0===j.length&&""!==s&&void 0!==s&&Object(l.jsxs)("div",{className:"alert alert-warning",children:["There are no heroes with: ",s," "]}),0===j.length&&""===s&&Object(l.jsx)("div",{className:"alert alert-info",children:"Search a hero"})]})]})]})};var N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(l.jsx)(i.b,{path:"/marvel",component:m}),Object(l.jsx)(i.b,{path:"/hero/:heroId",component:p}),Object(l.jsx)(i.b,{path:"/dc",component:u}),Object(l.jsx)(i.b,{path:"/search",component:C}),Object(l.jsx)(i.a,{to:"/"})]})})]})};var M=function(){return Object(l.jsx)(n.a,{children:Object(l.jsx)("div",{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:o}),Object(l.jsx)(i.b,{path:"/",component:N})]})})})},k=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(M,{children:[Object(l.jsx)("h1",{children:"Heroes App"}),Object(l.jsx)("hr",{})]})})};t.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e96e078d.chunk.js.map