(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(93)},48:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},89:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(17),s=a.n(r),c=(a(48),a(11)),i=a(12),l=a(15),u=a(13),h=a(16),g=(a(50),a(23)),d=a(20),p=Object(d.b)({userDetailsReducer:function(e,t){switch(e||(e={username:"",password:"",verifyPassword:""}),t.type){case"onUsernameChange":return Object(g.a)({},e,{username:t.username});case"onPasswordChange":return Object(g.a)({},e,{password:t.password});case"onVerifyPasswordChange":return Object(g.a)({},e,{verifyPassword:t.verifyPassword});default:return Object(g.a)({},e)}},loggedInCheckerReducer:function(e,t){switch(e||(e={loggedInCheck:"Welcome to Food Log\nPlease Log In"}),t.type){case"userLoggedIn":return{loggedInCheck:"Welcome to Food Log!"};case"userLoggedOut":return{loggedInCheck:"Welcome to Food Log\nPlease Log In"};default:return Object(g.a)({},e)}}}),m=a(14),b=a(7),w=(a(56),a(94)),f=a(77),O=a(19),v=a.n(O),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).searchAPI=e.searchAPI.bind(Object(b.a)(Object(b.a)(e))),e.onAPISearchParameterChange=e.onAPISearchParameterChange.bind(Object(b.a)(Object(b.a)(e))),e.state={apiSearchParameter:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"searchAPI",value:function(){v.a.post("/searchAPI",{token:localStorage.getItem("token"),searchParameter:this.state.apiSearchParameter}).then(function(e){e.data.noToken?alert(e.data.message):console.log(e.data)}),console.log(this.state.apiSearchParameter)}},{key:"onAPISearchParameterChange",value:function(e){this.setState({apiSearchParameter:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w.a,{id:"api-search-input",type:"text",placeholder:"search for food",onChange:this.onAPISearchParameterChange}),o.a.createElement(f.a,{onClick:this.searchAPI},"Search"))}}]),t}(o.a.Component),C=Object(m.b)(function(e){return e})(j),y=a(98),k=a(99),P=a(100),E=a(101),I=a(106),S=a(102),L=a(103),U=a(104),x=(a(78),a(80),a(105)),A=a(95),R=a(96),T=a(97),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.showPasword=a.showPasword.bind(Object(b.a)(Object(b.a)(a))),a.onUsernameChange=a.onUsernameChange.bind(Object(b.a)(Object(b.a)(a))),a.onPasswordChange=a.onPasswordChange.bind(Object(b.a)(Object(b.a)(a))),a.userLogIn=a.userLogIn.bind(Object(b.a)(Object(b.a)(a))),a.state={modal:!1,showPasswordText:"password",username:"",password:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"userLogIn",value:function(){var e=this;v.a.post("userLogIn",{userDetails:this.props.userDetailsReducer}).then(function(t){t.data.myToken?(localStorage.setItem("token",t.data.myToken),alert(t.data.message),e.setState({modal:!e.state.modal}),e.props.dispatch({type:"userLoggedIn"})):alert(t.data.message)})}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"showPasword",value:function(){"password"===this.state.showPasswordText?this.setState({showPasswordText:"text"}):this.setState({showPasswordText:"password"})}},{key:"onUsernameChange",value:function(e){this.props.dispatch({type:"onUsernameChange",username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.props.dispatch({type:"onPasswordChange",password:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{color:"danger",onClick:this.toggle},"Log In"),o.a.createElement(x.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},o.a.createElement(A.a,{toggle:this.toggle},"Log In"),o.a.createElement(R.a,null,o.a.createElement("p",null,"Username:"),o.a.createElement(w.a,{className:"log-in-input",type:"text",placeholder:"username",onChange:this.onUsernameChange}),o.a.createElement("p",null,"Password:"),o.a.createElement(w.a,{className:"log-in-input",type:this.state.showPasswordText,placeholder:"password",onChange:this.onPasswordChange}),o.a.createElement("span",{id:"checkbox-div"},o.a.createElement(w.a,{type:"checkbox",onClick:this.showPasword})," Show Password ")),o.a.createElement(T.a,null,o.a.createElement(f.a,{color:"primary",onClick:this.userLogIn},"Log In")," ")))}}]),t}(o.a.Component),N=Object(m.b)(function(e){return e})(D),W=(a(89),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.onUsernameChange=a.onUsernameChange.bind(Object(b.a)(Object(b.a)(a))),a.onPasswordChange=a.onPasswordChange.bind(Object(b.a)(Object(b.a)(a))),a.onVerifyPasswordChange=a.onVerifyPasswordChange.bind(Object(b.a)(Object(b.a)(a))),a.userSignUp=a.userSignUp.bind(Object(b.a)(Object(b.a)(a))),a.state={modal:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"userSignUp",value:function(){var e=this;this.props.userDetailsReducer.username.length&&this.props.userDetailsReducer.password.length?this.props.userDetailsReducer.password===this.props.userDetailsReducer.verifyPassword?v.a.post("userSignUp",{userDetails:this.props.userDetailsReducer}).then(function(t){console.log(t.data),v.a.post("userLogIn",{userDetails:e.props.userDetailsReducer}).then(function(a){t.data.duplicateCheck?alert(t.data.message):(localStorage.setItem("token",a.data.myToken),alert("You have successfull signed up and have been automatically logged in!"),e.setState({modal:!e.state.modal}))})}):alert("Passwords don't match!"):alert("Username and/or Passsword can't be blank")}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onUsernameChange",value:function(e){this.props.dispatch({type:"onUsernameChange",username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.props.dispatch({type:"onPasswordChange",password:e.target.value})}},{key:"onVerifyPasswordChange",value:function(e){this.props.dispatch({type:"onVerifyPasswordChange",verifyPassword:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{color:"danger",onClick:this.toggle},"Sign Up"),o.a.createElement(x.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},o.a.createElement(A.a,{toggle:this.toggle},"Sign Up"),o.a.createElement(R.a,null,o.a.createElement("p",null,"Username:"),o.a.createElement(w.a,{type:"text",placeholder:"username",onChange:this.onUsernameChange}),o.a.createElement("p",null,"Password:"),o.a.createElement(w.a,{type:"password",placeholder:"password",onChange:this.onPasswordChange}),o.a.createElement("p",null,"Re-Type Password:"),o.a.createElement(w.a,{type:"password",placeholder:"re-type password",onChange:this.onVerifyPasswordChange})),o.a.createElement(T.a,null,o.a.createElement(f.a,{color:"success",onClick:this.userSignUp},"Sign Up")," ",o.a.createElement(f.a,{color:"danger",onClick:this.toggle},"Cancel"))))}}]),t}(o.a.Component)),V=Object(m.b)(function(e){return e})(W),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.userLogOut=a.userLogOut.bind(Object(b.a)(Object(b.a)(a))),a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"userLogOut",value:function(){localStorage.clear(),this.props.dispatch({type:"userLoggedOut"}),window.location.href="/"}},{key:"render",value:function(){return localStorage.getItem("token")?console.log("logged in"):console.log("not logged in"),o.a.createElement("div",null,o.a.createElement(y.a,{color:"light",light:!0,expand:"md"},o.a.createElement("h3",null,this.props.loggedInCheckerReducer.loggedInCheck),o.a.createElement(k.a,{onClick:this.toggle}),o.a.createElement(P.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(E.a,{className:"ml-auto",navbar:!0},o.a.createElement(I.a,{nav:!0,inNavbar:!0},o.a.createElement(S.a,{nav:!0,caret:!0},"Account"),o.a.createElement(L.a,{right:!0},o.a.createElement(N,null),o.a.createElement(V,null),o.a.createElement(U.a,{divider:!0}),o.a.createElement(U.a,{onClick:this.userLogOut},"Log Out")))))))}}]),t}(o.a.Component),B=Object(m.b)(function(e){return e})(F),J=Object(d.c)(p),Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{store:J},o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement("h2",{id:"app-header"},"Food Log"),o.a.createElement(C,null)))}}]),t}(n.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(91);s.a.render(o.a.createElement(Q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):$(e)})}}()}},[[43,2,1]]]);
//# sourceMappingURL=main.f3c3733f.chunk.js.map