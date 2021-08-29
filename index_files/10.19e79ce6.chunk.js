(this["webpackJsonpfc-wallet"]=this["webpackJsonpfc-wallet"]||[]).push([[10],{239:function(e,t,n){"use strict";var o=n(1),a=n(39);n(243);t.a=function(e){var t=e.icon,n=e.label,r=e.name,i=e.type,s=e.value,c=e.onchange,l=e.disabled,u=e.passReset,d=e.isLogin,p=e.placeholder;return Object(o.jsxs)("div",{className:Object(a.a)("InputField",u&&"InputField--reset-pass",d&&"InputField--is-login"),children:[Object(o.jsx)("img",{className:"InputField__img",alt:"icon",src:t}),Object(o.jsxs)("div",{className:"InputField__content",children:[p?null:Object(o.jsx)("label",{className:"InputField__label",children:n}),Object(o.jsx)("input",{required:!0,className:"InputField__input",name:r,type:i,disabled:l,placeholder:p,value:s,onChange:c})]})]})}},242:function(e,t,n){"use strict";t.a=n.p+"static/media/mail-icon.344b9dd5.svg"},243:function(e,t,n){},244:function(e,t,n){"use strict";n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return S})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return _})),n.d(t,"e",(function(){return P}));var o=n(11),a=n(8),r=n.n(a),i=n(3),s=n(12),c=n(0),l=n(7),u=n(6),d=n(80),p=n(25),m=n(42),b=n(10),f=(n(246),n(20)),h=n(55),g=n(44),j=n(78),O=n(81),v=n(5),w=(n(18),n(83),"JP238MD02"),y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],y=Object(p.b)(),x=Object(b.g)(),_={os:null,userAgent:null,browser:null,deviceKey:null,type:null};if(window.navigator){var T=window.navigator,S=T.userAgent,P=T.platform;(_={os:P||"unknown",userAgent:S,browser:Object(d.a)(S),type:Object(O.a)(S)}).deviceKey=Object(v.c)()}return{error:n,handleLogin:function(e){var t=e.data,n=e.passwordFlow,o=e.setShowRegister,c=e.showModal;Object(h.a)("fewcents");var d=Object(u.a)("url_params","json");console.trace(t),Object(s.a)(r.a.mark((function e(){var s,u,p,b,h,O,T,S,P,k,C;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.b.loading("Logging...",{id:w}),e.next=4,Object(j.a)(d);case 4:return s=e.sent,u=Object(i.a)(Object(i.a)(Object(i.a)({},t),_),{},{role:"member",currency:"SGD",loginType:"fewcents",ipAddress:"10.0.0.1",loginKey:null===s||void 0===s?void 0:s.loginKey,sourcePublisherId:(null===s||void 0===s?void 0:s.loginPublisherId)?null===s||void 0===s?void 0:s.loginPublisherId:0,loginToken:null===s||void 0===s?void 0:s.loginKey}),e.next=8,fetch("".concat(l.a.ApiBaseUrl,"/customer/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 8:return p=e.sent,e.next=11,p.json();case 11:if(b=e.sent,h=b.message,b.success){e.next=15;break}throw new Error(null!==h&&void 0!==h?h:"Something went wrong. failed to process request");case 15:if(O=b.data,T=O.customer,S=O.accessToken,P=O.refreshToken,k=O.deviceKey,T){e.next=18;break}throw new Error("Error while signing up");case 18:y(Object(m.a)(T)),f.b.dismiss(),Object(v.h)(S),Object(v.j)(P),Object(v.i)(k),null===(null===T||void 0===T?void 0:T.isWalletCurrencyConfirmed)||(null===T||void 0===T?void 0:T.isWalletCurrencyConfirmed)?n?o&&c&&(o(!0),c(!1)):Object(g.a)(x,{pathname:"/dashboard"},{accessToken:S,refreshToken:P,deviceKey:_.deviceKey}):o&&c&&(o(!0),c(!1)),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),e.t0.message.includes("incorrect")&&a("Incorrect OTP"),f.b.error(null!==(C=e.t0.message)&&void 0!==C?C:"Failed to login",{id:w});case 30:case"end":return e.stop()}}),e,null,[[0,26]])})))()}}},x=function(){if(window.navigator){var e=window.navigator,t=e.userAgent;({os:e.platform||"unknown",userAgent:t,browser:Object(d.a)(t),type:Object(O.a)(t)}).deviceKey=Object(v.c)()}return{handleGetOTP:function(e){var t=e.email,n=e.intentForOTP,o=e.showModal;Object(h.a)("fewcents");var a=Object(u.a)("url_params","json"),c={os:null,userAgent:null,browser:null,deviceKey:null,type:null};if(window.navigator){var p=window.navigator,m=p.userAgent,b=p.platform;(c={os:b||"unknown",userAgent:m,browser:Object(d.a)(m),type:Object(O.a)(m)}).deviceKey=Object(v.c)()}Object(s.a)(r.a.mark((function e(){var s,u,d,p,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.b.loading("Sending One Time Password email...",{id:w}),e.prev=1,e.next=4,Object(j.a)(a);case 4:return s=e.sent,u=Object(i.a)(Object(i.a)({},c),{},{email:t,role:"member",currency:"SGD",loginType:"fewcents",ipAddress:"10.0.0.1",loginKey:null===s||void 0===s?void 0:s.loginKey,sourcePublisherId:(null===s||void 0===s?void 0:s.loginPublisherId)?null===s||void 0===s?void 0:s.loginPublisherId:0,loginToken:null===s||void 0===s?void 0:s.loginKey,intentForOTP:n}),e.next=8,fetch("".concat(l.a.ApiBaseUrl,"/customer/getOneTimePassword"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 8:return d=e.sent,e.next=11,d.json();case 11:if(p=e.sent,m=p.message,p.success){e.next=15;break}throw new Error(null!==m&&void 0!==m?m:"Something went wrong. failed to process request");case 15:o(!0),f.b.success("We have emailed your One Time Password (OTP). Please check your INBOX and SPAM folders.",{id:w,duration:3e4}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),f.b.error(e.t0.message,{id:w});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))()}}},_=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],y=Object(p.b)(),x=Object(b.g)(),_={os:null,userAgent:null,browser:null,deviceKey:null,type:null};if(window.navigator){var T=window.navigator,S=T.userAgent,P=T.platform;(_={os:P||"unknown",userAgent:S,browser:Object(d.a)(S),type:Object(O.a)(S)}).deviceKey=Object(v.c)()}return{error:n,handleVerifyOTP:function(e){var t=e.data,n=e.passwordFlow,o=e.setShowRegister,c=e.showModal;Object(h.a)("fewcents");var d=Object(u.a)("url_params","json");console.trace(t),Object(s.a)(r.a.mark((function e(){var s,u,p,b,h,O,T,S,P,k,C;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.b.loading("Logging...",{id:w}),e.next=4,Object(j.a)(d);case 4:return s=e.sent,u=Object(i.a)(Object(i.a)(Object(i.a)({},t),_),{},{role:"member",currency:"SGD",loginType:"fewcents",ipAddress:"10.0.0.1",loginKey:null===s||void 0===s?void 0:s.loginKey,sourcePublisherId:(null===s||void 0===s?void 0:s.loginPublisherId)?null===s||void 0===s?void 0:s.loginPublisherId:0,loginToken:null===s||void 0===s?void 0:s.loginKey,intentForOTP:n?"forgotPassword":"createUser"}),e.next=8,fetch("".concat(l.a.ApiBaseUrl,"/customer/verifyOneTimePassword"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 8:return p=e.sent,e.next=11,p.json();case 11:if(b=e.sent,h=b.message,b.success){e.next=15;break}throw new Error(null!==h&&void 0!==h?h:"Something went wrong. failed to process request");case 15:if(O=b.data,T=O.customer,S=O.accessToken,P=O.refreshToken,k=O.deviceKey,T){e.next=18;break}throw new Error("Error while signing up");case 18:y(Object(m.a)(T)),f.b.dismiss(),Object(v.h)(S),Object(v.j)(P),Object(v.i)(k),null===(null===T||void 0===T?void 0:T.isWalletCurrencyConfirmed)||(null===T||void 0===T?void 0:T.isWalletCurrencyConfirmed)?n?o&&c&&(o(!0),c(!1)):Object(g.a)(x,{pathname:"/dashboard"},{accessToken:S,refreshToken:P,deviceKey:_.deviceKey}):o&&c&&(o(!0),c(!1)),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),e.t0.message.includes("incorrect")&&a("Incorrect OTP"),f.b.error(null!==(C=e.t0.message)&&void 0!==C?C:"Failed to login",{id:w});case 30:case"end":return e.stop()}}),e,null,[[0,26]])})))()}}},T=function(e,t){Object(s.a)(r.a.mark((function n(){var o,a,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f.b.loading("Sending code...",{id:w}),n.prev=1,n.next=4,fetch("".concat(l.a.ApiBaseUrl,"/customer/").concat(e,"/forgotPassword"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});case 4:return o=n.sent,n.next=7,o.json();case 7:if(a=n.sent,i=a.message,a.success){n.next=11;break}throw new Error(null!==i&&void 0!==i?i:"Something went wrong. failed to process request");case 11:f.b.success("Please check your email for code",{id:w}),t.push({pathname:"/reset-password"}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),f.b.error("Failed to send the code",{id:w});case 18:case"end":return n.stop()}}),n,null,[[1,15]])})))()},S=function(e,t,n,o){Object(s.a)(r.a.mark((function a(){var i,s,c,u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i={email:e,newPassword:t,resetCode:n},f.b.loading("Changing password...",{id:w}),a.prev=2,a.next=5,fetch("".concat(l.a.ApiBaseUrl,"/customer/resetPassword"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 5:return s=a.sent,a.next=8,s.json();case 8:if(c=a.sent,u=c.message,c.success){a.next=12;break}throw new Error(null!==u&&void 0!==u?u:"Something went wrong. failed to process request");case 12:f.b.success("Password changed",{id:w}),o.push({pathname:"/login"}),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(2),f.b.error("Failed to change the password",{id:w});case 19:case"end":return a.stop()}}),a,null,[[2,16]])})))()},P=function(){var e=Object(b.g)(),t=Object(p.b)(),n=Object(v.a)();return function(o){var a=o.password,i=o.customer,c=o.data;Object(s.a)(r.a.mark((function o(){var s,u,d,p,b,h,j,O;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return d={customerId:i.id,email:i.email,homeCountry:null!==(s=null===c||void 0===c?void 0:c.homeCountry)&&void 0!==s?s:null===i||void 0===i?void 0:i.homeCountry,homeCurrency:null!==(u=null===c||void 0===c?void 0:c.homeCurrency)&&void 0!==u?u:null===i||void 0===i?void 0:i.homeCurrency,password:a},f.b.loading("Updating password and currency...",{id:w}),o.prev=2,o.next=5,fetch("".concat(l.a.ApiBaseUrl,"/customer/setPasswordAndConfirmWallet"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(d)});case 5:return p=o.sent,o.next=8,p.json();case 8:if(b=o.sent,h=b.message,b.success){o.next=12;break}throw new Error(null!==h&&void 0!==h?h:"Something went wrong. failed to process request");case 12:t(Object(m.a)(b.data)),f.b.success("Successfully updated",{id:w}),j=Object(v.d)(),O=Object(v.b)(),Object(g.a)(e,{pathname:"/dashboard"},{accessToken:n,refreshToken:j,deviceKey:O}),o.next=22;break;case 19:o.prev=19,o.t0=o.catch(2),f.b.error("Failed to update",{id:w});case 22:case"end":return o.stop()}}),o,null,[[2,19]])})))()}}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var o=n(9),a=function(e,t){return{type:o.g,email:e,password:t}},r=function(e){return{type:o.h,privacyPolicyCheck:e}}},249:function(e,t,n){"use strict";t.a=n.p+"static/media/lock-icon.4f0f7885.svg"},257:function(e,t,n){"use strict";t.a=function(e,t){return!!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e)}},258:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(8),r=n.n(a),i=n(12),s=n(11),c=n(0),l=n(10),u=n(25),d=n(70),p=n(77),m=n(112),b=n.p+"static/media/google-light-normal.be0604fe.svg",f=n.p+"static/media/facebook-color.d4e9bea3.svg",h=n(3),g=n(7),j=n(80),O=n(6),v=n(42),w=n(78),y=n(81),x=n(5),_=function(){var e=Object(i.a)(r.a.mark((function e(t,n,o,a){var i,s,c,l,u,d,p,m,b,f,_,T,S,P;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(O.a)("url_params","json"),s={os:null,userAgent:null,browser:null,deviceKey:null,type:null},window.navigator&&(c=window.navigator,l=c.userAgent,u=c.platform,(s={os:u||"unknown",userAgent:l,browser:Object(j.a)(l),type:Object(y.a)(l)}).deviceKey=Object(x.c)()),e.prev=3,e.next=6,Object(w.a)(i);case 6:return d=e.sent,p=Object(h.a)(Object(h.a)(Object(h.a)({},t),s),{},{role:"member",currency:"SGD",loginKey:null===d||void 0===d?void 0:d.loginKey,sourcePublisherId:(null===d||void 0===d?void 0:d.loginPublisherId)?null===d||void 0===d?void 0:d.loginPublisherId:0,loginToken:null===d||void 0===d?void 0:d.loginKey,loginSource:"wallet"}),e.next=10,fetch("".concat(g.a.ApiBaseUrl,"/customer/login/social"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});case 10:return m=e.sent,e.next=13,m.json();case 13:if(b=e.sent,f=b.data,_=b.message,b.success){e.next=17;break}throw new Error(null!==_&&void 0!==_?_:"Something went wrong. failed to process request");case 17:if(T=f.customer,S=f.accessToken,P=f.refreshToken,T){e.next=20;break}throw new Error("Error while signing in to  ".concat(null===t||void 0===t?void 0:t.loginType));case 20:return n(Object(v.a)(T)),Object(x.h)(S),Object(x.j)(P),Object(x.i)(f.deviceKey),e.abrupt("return",Object(h.a)({deviceKey:s.deviceKey,accessToken:S,refreshToken:P},T));case 27:throw e.prev=27,e.t0=e.catch(3),e.t0;case 30:case"end":return e.stop()}}),e,null,[[3,27]])})));return function(t,n,o,a){return e.apply(this,arguments)}}(),T=(n(116),n(44)),S=n(41),P=n(20),k=n(39),C=n(239),N=n(242),L=n(249),F=n(31);function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}function E(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=I(e);if(t){var a=I(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return K(this,n)}}function U(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),a=o?o[1]:"",r=o?o[3]:"",i=o?o[2]:n,s=i.length>=t?i:(U(Array(t)).map((function(){return"0"})).join("")+i).slice(-1*t);return"".concat(a).concat(s).concat(r)}var G={daysInHours:!1,zeroPadTime:2};function J(e,t){var n=e.days,o=e.hours,a=e.minutes,r=e.seconds,i=Object.assign(Object.assign({},G),t),s=i.daysInHours,c=i.zeroPadTime,l=i.zeroPadDays,u=void 0===l?c:l,d=Math.min(2,c),p=s?z(o+24*n,c):z(o,d);return{days:s?"":z(n,u),hours:p,minutes:z(a,d),seconds:z(r,d)}}var q=function(e){E(n,e);var t=R(n);function n(){var e;return M(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return D(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(c.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(c.Component);q.propTypes={count:F.number,children:F.element,onComplete:F.func};var V=function(e){E(n,e);var t=R(n);function n(e){var o;if(M(this,n),(o=t.call(this,e)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=Object(c.createRef)(),o.tick=function(){var e=o.calcTimeDelta(),t=e.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(e,void 0,t)},o.start=function(){if(!o.isStarted()){var e=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=e?o.calcOffsetStartTimestamp()-e:0;var t=o.calcTimeDelta();o.setTimeDeltaState(t,"STARTED",o.props.onStart),o.props.controlled||t.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(e){o.props.onComplete&&o.props.onComplete(e)},e.date){var a=o.calcTimeDelta();o.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return D(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,o=e.precision,a=e.controlled,r=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,a=void 0===o?Date.now:o,r=n.precision,i=void 0===r?0:r,s=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,s||(t+=l);var d=s?t:t-a(),p=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((u?d:Math.max(0,d))/1e3).toFixed(p))),b=Math.abs(m)/1e3;return{total:m,days:Math.floor(b/86400),hours:Math.floor(b/3600%24),minutes:Math.floor(b/60%60),seconds:Math.floor(b%60),milliseconds:Number((b%1*1e3).toFixed()),completed:m<=0}}(t,{now:n,precision:o,controlled:a,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var o=this;if(this.mounted){var a;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),a=this.handleOnComplete);return this.setState((function(n){var a=t||n.status;return e.completed&&!o.props.overtime?a="COMPLETED":t||"COMPLETED"!==a||(a="STOPPED"),{timeDelta:e,status:a}}),(function(){n&&n(o.state.timeDelta),a&&a(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,o=e.zeroPadDays,a=this.state.timeDelta;return Object.assign(Object.assign({},a),{api:this.getApi(),props:this.props,formatted:J(a,{daysInHours:t,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,o=e.onComplete;return Object(c.createElement)(q,{ref:this.legacyCountdownRef,count:t,onComplete:o},n)}var a=this.props,r=a.className,i=a.overtime,s=a.children,l=a.renderer,u=this.getRenderProps();if(l)return l(u);if(s&&this.state.timeDelta.completed&&!i)return Object(c.cloneElement)(s,{countdown:u});var d=u.formatted,p=d.days,m=d.hours,b=d.minutes,f=d.seconds;return Object(c.createElement)("span",{className:r},u.total<0?"-":"",p,p?":":"",m,":",b,":",f)}}]),n}(c.Component);V.defaultProps=Object.assign(Object.assign({},G),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),V.propTypes={date:Object(F.oneOfType)([Object(F.instanceOf)(Date),F.string,F.number]),daysInHours:F.bool,zeroPadTime:F.number,zeroPadDays:F.number,controlled:F.bool,intervalDelay:F.number,precision:F.number,autoStart:F.bool,overtime:F.bool,className:F.string,children:F.element,renderer:F.func,now:F.func,onMount:F.func,onStart:F.func,onPause:F.func,onStop:F.func,onTick:F.func,onComplete:F.func};var H=V,$=n(244),Z=n(257),X=(n(258),n(72)),Q=n(89),Y=function(e){var t=e.passwordFlow,n="JP238MD02",a=Object(c.useState)(),r=Object(s.a)(a,2),i=r[0],l=r[1],d=Object(c.useState)({password:"",confirmPassword:""}),p=Object(s.a)(d,2),m=p[0],b=p[1],f=Object(u.c)((function(e){return e.user.customer})),g=Object(u.c)((function(e){return e.auth.privacyPolicyCheck})),j=Object($.e)(),O=Object(X.a)(f),v=O.countries,w=O.userCountry;Object(c.useEffect)((function(){return function(){P.b.dismiss(),b({password:"",confirmPassword:""})}}),[]);var y=function(e,t){(null===t||void 0===t?void 0:t.name)&&(null===e||void 0===e?void 0:e.value)&&l(e)},x=function(e){var t=e.target.name,n=e.target.value;b(Object(h.a)(Object(h.a)({},m),{},Object(S.a)({},t,n)))};return Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!g)return P.b.error("Please check the terms and privacy policy",{id:n}),!1;m.password===m.confirmPassword?Object(Z.a)(m.password,m.confirmPassword)?null===(null===f||void 0===f?void 0:f.isWalletCurrencyConfirmed)||(null===f||void 0===f?void 0:f.isWalletCurrencyConfirmed)?j(t?{password:m.password,customer:f}:{password:m.password,data:i,customer:f}):j({password:m.password,data:i,customer:f}):P.b.error("Password should be at least 8 characters long (At least 1 lowercase and uppercase alphabet, 1 numeric and 1 special character)",{id:n,duration:2e4}):P.b.error("Password and confirm password doesn't match",{id:n})},children:[Object(o.jsx)("h3",{className:"ManualAuth__title",children:t?"Reset Password":"Setup your account"}),Object(o.jsx)(C.a,{icon:L.a,name:"password",label:"Password",placeholder:"Password",type:"password",value:m.password,onchange:x,isLogin:!0}),Object(o.jsx)(C.a,{icon:L.a,name:"confirmPassword",label:"Confirm password",placeholder:"Confirm password",type:"password",value:m.confirmPassword,onchange:x,isLogin:!0}),t&&(null===(null===f||void 0===f?void 0:f.isWalletCurrencyConfirmed)||(null===f||void 0===f?void 0:f.isWalletCurrencyConfirmed))?null:Object(o.jsx)(Q.a,{name:"country",options:v,placeholder:"Countries",onSelectChange:y,userCountry:w,isManualLogin:!0}),Object(o.jsx)("div",{className:"ManualAuth__login-action",children:Object(o.jsx)("input",{className:"ManualAuth__btn ManualAuth__btn--login",type:"submit",value:"".concat(t?"Reset password":"Continue")})})]})},ee=n(82),te=function(e){var t=e.email,n=e.passwordFlow,a=e.showModal,r=e.setShowRegister,i=Object(c.useState)(Date.now()+6e5),l=Object(s.a)(i,2),u=l[0],d=l[1],p=Object(c.useRef)(Math.random()),m=Object($.c)().handleGetOTP;return Object(o.jsxs)(ee.a,{showModal:a,isOtp:!0,children:[Object(o.jsx)("p",{className:"EmailOtp__email",children:t}),Object(o.jsx)(H,{date:u,autoStart:!0,renderer:function(e){var t=e.formatted,n=t.minutes,a=t.seconds;return Object(o.jsxs)("h4",{className:"EmailOtp__timer",children:[n,":",a]})}},p.current),Object(o.jsx)("h2",{className:"EmailOtp__helper-text",children:"Please check your email (including spam) for One Time Password"}),Object(o.jsx)(ne,{setShowRegister:r,showModal:a,email:t,passwordFlow:n}),Object(o.jsxs)("p",{className:"EmailOtp__recieve-text",children:["Didn't Recieve?",Object(o.jsx)("button",{className:"EmailOtp__resend-text",onClick:function(){m({email:t,intentForOTP:"resend",showModal:a}),d(Date.now()+6e5),p.current=Math.random()},children:"Resend OTP"})]}),Object(o.jsx)("a",{className:"EmailOtp__terms",href:"mailto:support@fewcents.co",target:"_blank",children:"Email Support"})]})},ne=function(e){var t=e.email,n=e.passwordFlow,a=e.setShowRegister,r=e.showModal,i=Object(c.useState)({otp1:"",otp2:"",otp3:"",otp4:"",otp5:"",otp6:""}),l=Object(s.a)(i,2),d=l[0],p=l[1],m=Object(u.c)((function(e){return e.auth.privacyPolicyCheck})),b=Object($.f)(),f=b.error,g=b.handleVerifyOTP,j=function(e){e.preventDefault();var t=e.target,n=t.value,o=t.name.split("-"),a=Object(s.a)(o,2)[1];console.log(parseInt(n)),isNaN(parseInt(n))?p(Object(h.a)(Object(h.a)({},d),{},Object(S.a)({},"otp".concat(a),""))):p(Object(h.a)(Object(h.a)({},d),{},Object(S.a)({},"otp".concat(a),n)))},O=function(e){var t=e.target,n=t.name,o=t.value,a=n.split("-"),r=Object(s.a)(a,2)[1];console.log(parseInt(o));var i=parseInt(r,10);if("Backspace"===e.key)v(i);else{if(isNaN(parseInt(o)))return;w(i)}},v=function(e){if(e>0){var t=document.querySelector("input[name=otp-".concat(e-1,"]"));null!==t&&t.focus()}},w=function(e){if(e<6){var t=document.querySelector("input[name=otp-".concat(e+1,"]"));null!==t&&t.focus()}};return Object(o.jsxs)("form",{className:"OtpTextField",onSubmit:function(e){if(e.preventDefault(),!m)return P.b.error("Please check the terms and privacy policy"),!1;var o=d.otp1,i=d.otp2,s=d.otp3,c=d.otp4,l=d.otp5,u=d.otp6,p={email:t,code:"".concat(o).concat(i).concat(s).concat(c).concat(l).concat(u)};g({data:p,setShowRegister:a,showModal:r,passwordFlow:n})},children:[Object(o.jsxs)("div",{className:"OtpTextField__input-container",children:[Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-1",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp1,onChange:j,onKeyUp:O}),Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-2",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp2,onChange:j,onKeyUp:O}),Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-3",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp3,onChange:j,onKeyUp:O}),Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-4",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp4,onChange:j,onKeyUp:O}),Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-5",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp5,onChange:j,onKeyUp:O}),Object(o.jsx)("input",{type:"text",maxLength:1,name:"otp-6",autoComplete:"new-password",inputMode:"numeric",className:Object(k.a)("OtpTextField__input","Incorrect OTP"===f&&"OtpTextField__input--error"),value:d.otp6,onChange:j,onKeyUp:O})]}),Object(o.jsx)("input",{type:"submit",value:"Continue",className:"OtpTextField__continue-btn"})]})},oe=function(e){var t=e.passwordFlow,n=e.setPasswordFlow,a=e.setShowVerifyEmail,r=Object(c.useState)(""),i=Object(s.a)(r,2),l=i[0],d=i[1],p=Object(c.useState)(!1),m=Object(s.a)(p,2),b=m[0],f=m[1],h=Object(c.useState)(!1),g=Object(s.a)(h,2),j=g[0],O=g[1],v=Object(u.c)((function(e){return e.auth.privacyPolicyCheck})),w=Object($.c)().handleGetOTP;return Object(o.jsx)(o.Fragment,{children:b?Object(o.jsx)(Y,{passwordFlow:t}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!v)return P.b.error("Please check the terms and privacy policy"),!1;""===l?P.b.error("Email field is empty"):w({email:l,intentForOTP:t?"forgotPassword":"createUser",showModal:O})},children:[Object(o.jsx)("h3",{className:"VerifyEmail__title",children:t?"Forgot Password":"New User"}),Object(o.jsx)(C.a,{icon:N.a,name:"email",label:"Email Address",placeholder:"Email Address",type:"email",value:l,onchange:function(e){d(e.target.value)},isLogin:!0}),Object(o.jsx)("div",{className:"ManualAuth__login-action",children:Object(o.jsx)("input",{disabled:""===l,className:"ManualAuth__btn ManualAuth__btn--login",type:"submit",value:"".concat(t?"Continue":"Verify Email")})}),Object(o.jsxs)("p",{className:"VerifyEmail__forgot-password--prefix-text",children:["Already have an account?"," ",Object(o.jsx)("a",{className:"VerifyEmail__forgot-password",onClick:function(){if(!v)return P.b.error("Please check the terms and privacy policy"),!1;a((function(e){return!e})),n((function(e){return!e}))},children:"Sign in"})]})]}),j&&Object(o.jsx)(te,{email:l,passwordFlow:t,showModal:O,setShowRegister:f})]})})},ae=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),l=i[0],d=i[1],p=Object(c.useState)(!1),m=Object(s.a)(p,2),b=m[0],f=m[1],g=Object(u.c)((function(e){return e.auth.privacyPolicyCheck})),j=Object($.d)().handleLogin;Object(c.useEffect)((function(){return function(){P.b.dismiss(),a({email:"",password:""})}}),[]);var O=function(e){var t=e.target.name,o=e.target.value;a(Object(h.a)(Object(h.a)({},n),{},Object(S.a)({},t,o)))};return Object(o.jsx)("div",{className:Object(k.a)("EmailLogin"),children:l?Object(o.jsx)(oe,{passwordFlow:b,setPasswordFlow:f,setShowVerifyEmail:d}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!g)return P.b.error("Please check the terms and privacy policy"),!1;j({data:n})},children:[Object(o.jsx)(C.a,{icon:N.a,name:"email",label:"Email Address",placeholder:"Email Address",type:"email",value:n.email,onchange:O,isLogin:!0}),Object(o.jsx)(C.a,{icon:L.a,name:"password",label:"Password",placeholder:"Password",type:"password",value:n.password,onchange:O,isLogin:!0}),Object(o.jsxs)("div",{className:"ManualAuth__forgot-action",children:[Object(o.jsxs)("p",{className:"ManualAuth__forgot-password--prefix-text",children:["New to Few\xa2ents?"," ",Object(o.jsx)("a",{className:"ManualAuth__forgot-password",onClick:function(){if(!g)return P.b.error("Please check the terms and privacy policy"),!1;d((function(e){return!e}))},children:"Create Account"})]}),Object(o.jsx)("p",{className:"ManualAuth__forgot-password",onClick:function(){if(!g)return P.b.error("Please check the terms and privacy policy"),!1;f(!0),d((function(e){return!e}))},children:"Forgot Password"})]}),Object(o.jsx)("div",{className:"ManualAuth__login-action",children:Object(o.jsx)("input",{disabled:""===n.email||""===n.password,className:"ManualAuth__btn ManualAuth__btn--login",type:"submit",value:"Login"})})]})})})},re=n(55),ie=n(88),se=n(40),ce=n(246),le=function(){var e,t=Object(l.g)(),n=Object(l.h)(),a=Object(u.b)(),h=(n.state||{from:{pathname:"/dashboard"}}).from,j=null===(e=Object(O.a)("url_params","json"))||void 0===e?void 0:e.loginPublisherLogoUrl,v=Object(c.useState)(null),w=Object(s.a)(v,2),y=w[0],S=w[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),L=N[0],F=N[1],M=Object(c.useState)(1),A=Object(s.a)(M,2),D=(A[0],A[1]),E=Object(c.useState)("social"),I=Object(s.a)(E,2),B=I[0],K=I[1],R=Object(u.c)((function(e){return e.auth.privacyPolicyCheck})),U=Object(c.useRef)(!0),W=Object(c.useRef)();Object(c.useEffect)((function(){var e=Object(O.a)("url_params","json");return e?(z(e),G(e)):window.location.href=g.a.Domain,function(){return P.b.dismiss()}}),[]),Object(c.useEffect)((function(){U.current?U.current=!1:null===(null===y||void 0===y?void 0:y.isWalletCurrencyConfirmed)||(null===y||void 0===y?void 0:y.isWalletCurrencyConfirmed)?Object(T.a)(t,h,y):(F(!0),P.b.dismiss())}),[y]);var z=function(e){Object(x.a)()&&("paywall"===(null===e||void 0===e?void 0:e.topupSource)?t.replace({pathname:h.pathname,state:{animateTopUp:!0}}):t.replace(h))},G=function(e){if("google"===e.loginMethod){var t=P.b.loading("Logging in..."),o=Object(d.c)(n.hash.replace("#","?"));o?(J(o,e,t),se.b("Google Login Redirect Completed",{userInfo:o})):(P.b.error("Failed to login",{id:t}),se.b("Google Login Failed"),"paywall"===e.loginSource&&(window.location.href=e.loginRedirectUrl))}else if("facebook"===e.loginMethod){var a=P.b.loading("Logging in...");Object(i.a)(r.a.mark((function t(){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d.b)(n.hash.replace("#","?"));case 3:(o=t.sent)?(J(o,e,a),se.b("Facebook Login Redirect Completed",{userInfo:o})):(P.b.error("Failed to login",{id:a}),se.b("Facebook Login Failed"),"paywall"===e.loginSource&&(window.location.href=e.loginRedirectUrl)),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),P.b.error("Failed to login",{id:a}),se.b("Facebook Login Failed"),"paywall"===e.loginSource&&(window.location.href=e.loginRedirectUrl);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},J=function(){var e=Object(i.a)(r.a.mark((function e(n,o,i){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(n,a,t,h);case 3:s=e.sent,S(s),"google"===o.loginMethod?se.b("Google Login Successful",{customer:s}):"facebook"===o.loginMethod&&se.b("Facebook Login Successful",{customer:s}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),P.b.error("Failed to login",{id:i}),"google"===o.loginMethod?se.b("Google Login Failed"):"facebook"===o.loginMethod&&se.b("Facebook Login Failed"),"paywall"===o.loginSource&&(window.location.href=o.loginRedirectUrl);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,o){return e.apply(this,arguments)}}(),q=function(){if(!R)return P.b.error("Please check the terms and privacy policy"),!1;se.b("Google Login Initialized");var e=Object(re.a)("google");Object(d.d)(e)},V=function(){if(!R)return P.b.error("Please check the terms and privacy policy"),!1;se.b("Facebook Login Initialized");var e=Object(re.a)("facebook");Object(d.a)(e)},H=function(){return Object(o.jsx)(ae,{})},$=function(){return Object(o.jsxs)("div",{className:"SocialLogin",children:[Object(o.jsxs)("div",{className:"SocialLogin__sign-in SocialLogin__sign-in--google",onClick:q,children:[Object(o.jsx)("img",{className:"SocialLogin__social-logo SocialLogin__social-logo--google",alt:"google-logo",src:b}),Object(o.jsx)("span",{className:"SocialLogin__sign-in-text",children:"Continue with Google"})]}),Object(o.jsxs)("div",{className:"SocialLogin__sign-in SocialLogin__sign-in--facebook",onClick:V,children:[Object(o.jsx)("div",{className:"SocialLogin__social-logo--wrapper",children:Object(o.jsx)("img",{className:"SocialLogin__social-logo SocialLogin__social-logo--facebook",alt:"facebook-logo",src:f})}),Object(o.jsx)("span",{className:"SocialLogin__sign-in-text",children:"Continue with Facebook"})]})]})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"LoginBox2__wrapper",children:[Object(o.jsx)("span",{className:"LoginBox2__top-left-big-green"}),Object(o.jsx)("span",{className:"LoginBox2__bottom-right-small-green"})]}),Object(o.jsxs)("div",{className:"LoginBox2",children:[Object(o.jsxs)("div",{className:"LoginBox2__img-content",children:[Object(o.jsxs)("div",{className:"LoginBox2__logo-container",children:[Object(o.jsx)("img",{className:"LoginBox2__logo",alt:"logo",src:p.a}),j?Object(o.jsx)("img",{ref:W,className:"LoginBox2__logo",alt:"logo",src:j,onLoad:function(){D(W.current.naturalWidth/W.current.naturalHeight)}}):null]}),Object(o.jsx)("img",{className:"LoginBox2__img",alt:"sign-in-illustration",src:m.a})]}),Object(o.jsxs)("div",{className:"LoginBox2__content",children:[Object(o.jsx)("h1",{className:"LoginBox2__title",children:"Instant access. Fewcents."}),Object(o.jsx)("p",{className:"LoginBox2__description",children:"No need to subscribe. Pay-per-content across multiple sites."}),Object(o.jsxs)("div",{className:"LoginBox2__tabs",children:[Object(o.jsxs)("div",{className:"LoginBox2__tabs-header",children:[Object(o.jsx)("h3",{className:Object(k.a)("LoginBox2__tabs-heading","social"===B&&"LoginBox2__tabs-heading--active"),onClick:function(){return K("social")},children:"Social Login"}),Object(o.jsx)("h3",{className:Object(k.a)("LoginBox2__tabs-heading","email"===B&&"LoginBox2__tabs-heading--active"),onClick:function(){return K("email")},children:"Email Login"})]}),Object(o.jsx)("div",{className:"LoginBox2__tabs-content",children:function(){switch(B){case"social":return $();case"email":return H();default:return $()}}()})]}),Object(o.jsxs)("div",{className:"LoginBox2__terms-conditions-contact",children:[Object(o.jsxs)("div",{className:"LoginBox2__agree-terms",children:[Object(o.jsx)("input",{type:"checkbox",id:"privacy-policy",name:"privacyPolicyCheck",checked:R,onChange:function(){return a(Object(ce.b)(!R))}}),Object(o.jsxs)("label",{className:"LoginBox2__terms LoginBox2__privacy-policy",htmlFor:"privacy-policy",children:["I agree to Few\xa2ents",Object(o.jsx)("a",{className:"LoginBox2__terms LoginBox2__terms--highlight",href:"https://fewcents.co/terms",target:"_blank",children:"Terms"}),"and"," ",Object(o.jsx)("a",{className:"LoginBox2__terms LoginBox2__terms--highlight",href:"https://fewcents.co/privacy",target:"_blank",children:"Privacy Policy"}),"."]})]}),Object(o.jsx)("div",{className:"LoginBox2__contact-us",children:Object(o.jsx)("a",{className:"LoginBox2__terms LoginBox2__terms--highlight",href:"mailto:support@fewcents.co",target:"_blank",children:"Email Support"})})]})]}),Object(o.jsx)("span",{className:"LoginBox2__bottom-right-big-pink"}),Object(o.jsx)("span",{className:"LoginBox2__top-left-medium-pink"}),Object(o.jsx)("span",{className:"LoginBox2__top-left-medium-green"})]}),Object(o.jsx)(P.a,{toastOptions:{style:{textAlign:"center"}}}),L&&Object(o.jsx)(ie.default,{showModal:F,customer:y,isLogin:!0})]})};n(117),t.default=function(){return Object(o.jsx)("div",{className:"Login",children:Object(o.jsx)(le,{})})}}}]);
//# sourceMappingURL=10.19e79ce6.chunk.js.map