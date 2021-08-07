(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(144),s=a(43),l=a(74),u={h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},j=Object(l.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:s.a.A400},background:{default:"#fff"}},typography:u}),d=a(138),h=a(139),b=a(2),f=Object(d.a)((function(e){return{root:{display:"grid",placeItems:"center",height:"100vh"}}}));var p=function(){var e=f();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(h.a,{})})},O=a(19),m=a(10),x=a(143),v=a(120),y="FETCH_FROM_API",g="TOGGLE_TEMPERATURE",w="TRIGGER_ERROR",S=a(91),_=function(){return function(e){S.get("https://api.openweathermap.org/data/2.5/forecast?id=".concat("524901&appid=c714f87ec1e66ee0a71a17880ac6fc19")).then((function(t){var a=t.data,n={};for(var r in a.list){var c=a.list[r].dt_txt.split(" ")[0];if(!(c in n))for(var i in a.list){var o=a.list[i];c===o.dt_txt.split(" ")[0]&&(c in n?n[c].push(o):n[c]=[o])}}e({type:y,payload:{data:{city:a.city,list:n}}})})).catch((function(t){console.error("Error--\x3e",t),e({type:w,payload:!0})}))}},E=a(145),I=a(150),R=a(140),C=a(148),W=a(146),D=a(67),N=a.n(D);var k=function(){var e=Object(m.b)(),t=r.a.useState("celsius"),a=Object(O.a)(t,2),n=a[0],c=a[1];return Object(b.jsxs)(E.a,{my:3,mx:"auto",display:"flex",justifyContent:"center",alignItems:"center",children:[Object(b.jsxs)(I.a,{"aria-label":"temperature",name:"temperature",value:n,onChange:function(t){var a;c(t.target.value),e((a=t.target.value,function(e){e({type:g,payload:a})}))},row:!0,children:[Object(b.jsx)(R.a,{value:"celsius",control:Object(b.jsx)(C.a,{}),label:"Celsius"}),Object(b.jsx)(R.a,{value:"fahrenheit",control:Object(b.jsx)(C.a,{}),label:"Fahrenheit"})]}),Object(b.jsx)(W.a,{"aria-label":"refresh",component:"span",onClick:function(){e(_())},children:Object(b.jsx)(N.a,{})})]})},T=a(141),A=a(142),M=Object(d.a)({root:{minWidth:250,margin:"5px"},title:{fontSize:14},pos:{marginBottom:12}});var z=function(e){var t=e.day,a=M(),n=Object(m.c)((function(e){return e.weatherReducer})),r=n.weatherData,c=n.temperature,i=r.list[t],o=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},s={date:new Date(t).toLocaleDateString("en-US",{day:"numeric",weekday:"long",year:"numeric",month:"long"}),temp:function(){var e=parseInt(i[0].main.temp);if("celsius"===c){var t=5/9*(e-32);return t=Math.round(t),"".concat(t," \xb0C")}return"".concat(e," \xb0F")}(),weather:o(i[0].weather[0].main),desc:o(i[0].weather[0].description)};return Object(b.jsx)(T.a,{className:a.root,variant:"outlined",children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(v.a,{className:a.title,color:"textSecondary",align:"center",gutterBottom:!0,children:"".concat(s.date)}),Object(b.jsxs)(E.a,{mt:2,display:"flex",justifyContent:"space-around",alignItems:"center",children:[Object(b.jsx)(v.a,{className:a.pos,color:"textSecondary",children:"".concat(s.temp)}),Object(b.jsx)(v.a,{className:a.pos,color:"textSecondary",children:"".concat(s.weather)})]}),Object(b.jsx)(v.a,{variant:"body2",component:"p",align:"center",children:s.desc})]})})},F=a(68),U=a.n(F),G=a(69),P=a.n(G),B=a(44);var J=function(e){var t=e.handleSelectDay,a=Object(m.c)((function(e){return e.weatherReducer})).weatherData,r=Object(n.useState)(0),c=Object(O.a)(r,2),i=c[0],o=c[1],s=Object(n.useRef)([]),l=Object.keys(a.list).length;Object(n.useEffect)((function(){var e;a.list&&a.list[0]&&(s.current=null===s||void 0===s||null===(e=s.current)||void 0===e?void 0:e.slice(0,l),o(0),t(a.list[Object.keys(a.list)[0]]))}),[a.list,l,t]);var u=function(e){var n;a.list&&l>0&&(o(e),t(a.list[Object.keys(a.list)[e]]),(null===s||void 0===s?void 0:s.current[e])&&(null===s||void 0===s||null===(n=s.current[e])||void 0===n||n.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"})))},j=function(){if(a.list&&l>0){var e=i-1;e<0&&(e=l-1),u(e)}},d=function(){if(a.list&&l>0){var e=i+1;e>=l&&(e=0),u(e)}},h=function(e){var t=e.type,a={handler:"left"===t?j:d,icon:"left"===t?Object(b.jsx)(U.a,{}):Object(b.jsx)(P.a,{})};return Object(b.jsx)(W.a,{"aria-label":"refresh",component:"span",onClick:a.handler,children:a.icon})};return Object(b.jsxs)(E.a,{my:3,display:"flex",alignItems:"center",children:[Object(b.jsx)(E.a,{width:60,children:i>0&&Object(b.jsx)(h,{type:"left"})}),Object(b.jsx)("div",{className:B.carouselWrap,children:a.list&&l>0&&Object.keys(a.list).map((function(e,t){return Object(b.jsx)("div",{ref:function(e){return s.current[t]=e},className:"".concat(B.cardItem," ").concat(i===t&&B.selectedItem),children:Object(b.jsx)(z,{day:e})},e)}))}),Object(b.jsx)(E.a,{width:60,children:i!==l-1&&Object(b.jsx)(h,{type:"right"})})]})},L=a(16),V=a(70),X=a.n(V),H=a(71),Q=a.n(H),q=a(50),K=a.n(q),Y=a(72),Z=a.n(Y);K.a.fcRoot(X.a,Q.a,Z.a);var $=function(e){var t=e.seletctedDay,a=Object(m.c)((function(e){return e.weatherReducer})).temperature,n=function(e){var t=e.match(/([0-9]{1,2}):([0-9]{2})/).slice(1),a=Object(O.a)(t,2),n=a[0],r=a[1],c=+n<12?"AM":"PM";return"".concat(+n%12||12,":").concat(r," ").concat(c)},r=t.map((function(e){var t=e.dt_txt.split(" ")[1],r=parseInt(e.main.temp);if("celsius"===a){var c=5/9*(r-32);r=c=Math.round(c)}return{label:n(t),value:r}})),c={chart:{xAxisName:"Time",yAxisName:"Temperature",numberSuffix:"".concat("celsius"===a?" \xb0C":" \xb0F"),theme:"fusion"},data:r},i={type:"column2d",width:window.innerWidth>640?500:400,height:370,dataFormat:"json",dataSource:c};return Object(b.jsx)(E.a,{mt:4,display:"flex",justifyContent:"center",alignItems:"center",children:Object(b.jsx)(K.a,Object(L.a)({},i))})},ee=Object(d.a)({root:{height:"100vh",margin:"25px auto"}});var te=function(){var e=ee(),t=Object(m.c)((function(e){return e.weatherReducer})).weatherData,a=Object(n.useState)(t.list[Object.keys(t.list)[0]]),r=Object(O.a)(a,2),c=r[0],i=r[1];return Object(b.jsxs)(x.a,{maxWidth:"md",className:e.root,children:[Object(b.jsx)(v.a,{variant:"h3",align:"center",children:"Weather in ".concat(null===t||void 0===t?void 0:t.city.name,",  ").concat(null===t||void 0===t?void 0:t.city.country)}),Object(b.jsx)(k,{}),Object(b.jsx)(J,{handleSelectDay:function(e){i(e)}}),Object(b.jsx)($,{seletctedDay:c})]})},ae=a(147),ne=Object(d.a)((function(e){return{root:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center","& > * + *":{marginTop:e.spacing(2)}}}}));var re=function(){var e=ne();return Object(b.jsx)(x.a,{maxWidth:"md",className:e.root,children:Object(b.jsx)(ae.a,{severity:"error",children:"Aw, Snap! \u2014 Something went wrong. Try again."})})};var ce=function(){var e=Object(m.c)((function(e){return e.weatherReducer})),t=e.weatherData,a=e.isError,r=Object(m.b)();return Object(n.useEffect)((function(){setTimeout((function(){r(_())}),1e3)}),[r]),a?Object(b.jsx)(re,{}):null!==t?Object(b.jsx)(te,{}):Object(b.jsx)(p,{})},ie=(a(116),a(28)),oe=a(73),se={weatherData:null,temperature:"celsius",isError:!1};var le=Object(ie.b)({weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(L.a)(Object(L.a)({},e),{},{weatherData:t.payload.data,isError:!1});case g:return Object(L.a)(Object(L.a)({},e),{},{temperature:t.payload});case w:return Object(L.a)(Object(L.a)({},e),{},{isError:t.payload});default:return e}}}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.c,je=Object(ie.d)(le,ue(Object(ie.a)(oe.a)));i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m.a,{store:je,children:Object(b.jsx)(o.a,{theme:j,children:Object(b.jsx)(ce,{})})})}),document.getElementById("root"))},44:function(e,t,a){e.exports={carouselWrap:"Carousel_carouselWrap__1i-m9",cardItem:"Carousel_cardItem__wRQSJ",selectedItem:"Carousel_selectedItem__2mUx1"}}},[[117,1,2]]]);
//# sourceMappingURL=main.bbadc15a.chunk.js.map