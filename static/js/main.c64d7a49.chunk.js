(this.webpackJsonpsearchfilter=this.webpackJsonpsearchfilter||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"name":"Andreas McGroarty","age":85,"isMarried":false,"gender":"Male"},{"name":"Renata Straun","age":7,"isMarried":true,"gender":"Female"},{"name":"Glenna Chittem","age":31,"isMarried":false,"gender":"Female"},{"name":"Fransisco Raynham","age":96,"isMarried":false,"gender":"Others"},{"name":"Fonz Matz","age":9,"isMarried":false,"gender":"Male"},{"name":"Marty Kinney","age":44,"isMarried":true,"gender":"Male"},{"name":"Ursola Pabst","age":92,"isMarried":false,"gender":"Male"},{"name":"Frannie Skayman","age":2,"isMarried":false,"gender":"Male"},{"name":"Aurthur Schoolcroft","age":60,"isMarried":true,"gender":"Male"},{"name":"Sandro Frostdick","age":8,"isMarried":true,"gender":"Others"}]')},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(4),s=a.n(i),c=(a(10),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))}),l=a(2),o=(a(11),a(5)),d=(a(12),a(0));var u=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],i=r.a.useState(""),s=Object(l.a)(i,2),c=s[0],u=s[1],h=r.a.useState(""),j=Object(l.a)(h,2),g=j[0],m=j[1],p=r.a.useState(""),b=Object(l.a)(p,2),O=b[0],f=b[1],x=1,M=150;function v(e,t,a){return(e-t)*(e-a)<=0}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("center",{children:Object(d.jsx)("h1",{children:"Displaying dynamic data with filtering from json file"})}),Object(d.jsx)("input",{style:{width:"310px",margin:"20px"},type:"text",placeholder:"Name...",onChange:function(e){n(e.target.value)}}),Object(d.jsxs)("select",{style:{width:"310px"},onChange:function(e){m(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"select gender"}),Object(d.jsx)("option",{value:"Male",children:"Male"}),Object(d.jsx)("option",{value:"Female",children:"Female"}),Object(d.jsx)("option",{value:"Others",children:"Others"})]}),Object(d.jsxs)("select",{style:{width:"310px"},onChange:function(e){u(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"select age"}),Object(d.jsx)("option",{value:"22",children:"1-25"}),Object(d.jsx)("option",{value:"31",children:"26-50"}),Object(d.jsx)("option",{value:"55",children:"Above 51+"})]}),Object(d.jsxs)("select",{style:{width:"310px",marhuhuhginBottom:"20px"},onChange:function(e){f(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"select Martial Status"}),Object(d.jsx)("option",{value:"true",children:"Married"}),Object(d.jsx)("option",{value:"false",children:"Unmarried"})]}),o.filter((function(e){return v(c,1,25)?(x=1,M=25):v(c,26,50)?(x=26,M=50):v(c,51,150)&&(x=51,M=150),""===a&&""===c&&""===g&&""===O||e.name.toLowerCase().includes(a.toLowerCase())&&e.age>=x&&e.age<=M&&e.gender.toLowerCase().startsWith(g.toLowerCase())&&e.isMarried.toString().includes(O)?e:void 0})).map((function(e,t){return Object(d.jsx)("div",{className:"user",children:Object(d.jsxs)("p",{children:[e.name," ",e.age," ",e.gender," ",e.isMarried?"Married":"Unmarried"]})},t)}))]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),c()}],[[14,1,2]]]);
//# sourceMappingURL=main.c64d7a49.chunk.js.map