(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=(n(23),n(4)),s=n(1),l=n(12),u=n(13),d=n(16),h=n(8),f=n(17),b=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow tc shadow-5"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},p=function(e){var t=e.robots.map((function(e,t){return o.a.createElement(b,{key:t,id:e.id,email:e.email,name:e.name})}));return o.a.createElement("div",null,t)},g=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:function(e){return t(e)}}))},v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",height:"350px",border:"5px solid black"}},e.children)};n(29);function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){Object(f.a)(r,e);var t,n=(t=r,function(){var e,n=Object(h.a)(t);if(m()){var r=Object(h.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(d.a)(this,e)});function r(){var e;return Object(l.a)(this,r),(e=n.call(this)).state={robots:[]},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"LOADING"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(g,{searchChange:n}),o.a.createElement(v,null,o.a.createElement(p,{robots:c})))}}]),r}(r.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(E),w=n(14),y=n(15),O=(n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(2),C={searchField:""},_={isPending:!1,robots:[],error:""},k=Object(w.createLogger)(),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(j.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(N,Object(s.a)(y.a,k));c.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.1240fab1.chunk.js.map