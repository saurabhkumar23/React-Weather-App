(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(17),n(18),n(6)),l=n(7),u=n(11),m=n(9),s=(n(19),n(3));var p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).fetchWeather=function(){""!=a.props.state.city.trim()&&""!=a.props.state.country.trim()?(console.log(a.props.state.city),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.props.state.city,",").concat(a.props.state.country,"&APPID=f72d3208d111d02f19aabb823be0c462")).then((function(e){return e.json()})).then((function(e){console.log(e),e.main.temp=(5*(e.main.temp-32)/9).toFixed(2),e.main.temp_min=(5*(e.main.temp_min-32)/9).toFixed(2),e.main.temp_max=(5*(e.main.temp_max-32)/9).toFixed(2),a.props.setWeather(e)})).catch((function(e){return alert(e)}))):alert("fill both the fields!")},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.setWeather,t.setCity),a=t.setCountry,c=this.props.state,o=c.city,i=c.country,l=c.weather;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"REACT WEATHER APP"),r.a.createElement("input",{type:"text",placeholder:"City",name:"city",value:o,onChange:function(e){return n(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Country",name:"country",value:i,onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",{className:"getweather",onClick:function(t){return e.fetchWeather(t)}},"Submit"),l?r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"main-temp"},r.a.createElement("h1",null,l.main.temp,"\xb0"),r.a.createElement("h5",null,"Temperature")),r.a.createElement("div",{className:"sec-temp"},r.a.createElement("div",null,r.a.createElement("h1",null,l.main.temp_min,"\xb0"),r.a.createElement("h5",null,"Min. Temperature")),r.a.createElement("div",null,r.a.createElement("h1",null,l.main.temp_max,"\xb0"),r.a.createElement("h5",null,"Max. Temperature")))):null)}}]),n}(a.Component),h=Object(s.b)((function(e){return{state:e}}),(function(e){return{setCity:function(t){e(function(e){return{type:"SET_CITY",payload:e}}(t))},setCountry:function(t){e(function(e){return{type:"SET_COUNTRY",payload:e}}(t))},setWeather:function(t){e(function(e){return{type:"SET_WEATHER",payload:e}}(t))}}}))(p),d=n(10),f=n(1),y={city:"",country:"",weather:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return Object(f.a)(Object(f.a)({},e),{},{city:t.payload});case"SET_COUNTRY":return Object(f.a)(Object(f.a)({},e),{},{country:t.payload});case"SET_WEATHER":return Object(f.a)(Object(f.a)({},e),{},{weather:t.payload});default:return e}},v=Object(d.a)(E);var b=function(){return r.a.createElement(s.a,{store:v},r.a.createElement("div",{className:"App"},r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.70a3747e.chunk.js.map