var e,t;e=this,t=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=13)}([function(e,t,r){var n=r(3),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function s(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return u(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)s(arguments[n],r);return t},extend:function(e,t,r){return s(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,s=[],p=!1,f=-1;function l(){p&&c&&(p=!1,c.length?s=c.concat(s):f=-1,s.length&&d())}function d(){if(!p){var e=u(l);p=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,p=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||p||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){e.exports=r(16)},function(e,t,r){e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){(function(t){var n=r(0),o=r(21),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(u=r(7)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(i)})),e.exports=c}).call(this,r(1))},function(e,t,r){var n=r(0),o=r(22),i=r(4),a=r(24),u=r(27),c=r(28),s=r(8);e.exports=function(e){return new Promise((function(t,p){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",y=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+y)}var g=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,p,n),d=null}},d.onabort=function(){d&&(p(s("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){p(s("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),p(s(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var v=r(29),m=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in d&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),p(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},function(e,t,r){var n=r(23);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},function(e,t,r){var n=r(0);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(i,(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(a,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var u=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===u.indexOf(e)}));return n.forEach(c,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},function(e,t,r){function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){(function(t){var r,n="__lodash_hash_undefined__",o="[object Function]",i="[object GeneratorFunction]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,c=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,h=l||d||Function("return this")(),y=Array.prototype,g=Function.prototype,v=Object.prototype,m=h["__core-js_shared__"],_=(r=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",b=g.toString,w=v.hasOwnProperty,S=v.toString,P=RegExp("^"+b.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=h.Symbol,A=y.splice,j=B(h,"Map"),O=B(Object,"create"),T=x?x.prototype:void 0,R=T?T.toString:void 0;function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function E(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function k(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function N(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function D(e,t){for(var r,n=0,o=(t=function(e,t){if(I(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!F(e))||(u.test(e)||!a.test(e)||null!=t&&e in Object(t))}(t,e)?[t]:I(r=t)?r:U(r)).length;null!=e&&n<o;)e=e[q(t[n++])];return n&&n==o?e:void 0}function L(e){return!(!$(e)||(t=e,_&&_ in t))&&(function(e){var t=$(e)?S.call(e):"";return t==o||t==i}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?P:f).test(function(e){if(null!=e){try{return b.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function M(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function B(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return L(r)?r:void 0}C.prototype.clear=function(){this.__data__=O?O(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(O){var r=t[e];return r===n?void 0:r}return w.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return O?void 0!==t[e]:w.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=O&&void 0===t?n:t,this},E.prototype.clear=function(){this.__data__=[]},E.prototype.delete=function(e){var t=this.__data__,r=N(t,e);return!(r<0||(r==t.length-1?t.pop():A.call(t,r,1),0))},E.prototype.get=function(e){var t=this.__data__,r=N(t,e);return r<0?void 0:t[r][1]},E.prototype.has=function(e){return N(this.__data__,e)>-1},E.prototype.set=function(e,t){var r=this.__data__,n=N(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},k.prototype.clear=function(){this.__data__={hash:new C,map:new(j||E),string:new C}},k.prototype.delete=function(e){return M(this,e).delete(e)},k.prototype.get=function(e){return M(this,e).get(e)},k.prototype.has=function(e){return M(this,e).has(e)},k.prototype.set=function(e,t){return M(this,e).set(e,t),this};var U=H((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(F(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var r=[];return c.test(e)&&r.push(""),e.replace(s,(function(e,t,n,o){r.push(n?o.replace(p,"$1"):t||e)})),r}));function q(e){if("string"==typeof e||F(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function H(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a),a};return r.cache=new(H.Cache||k),r}H.Cache=k;var I=Array.isArray;function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==S.call(e)}e.exports=function(e,t,r){var n=null==e?void 0:D(e,t);return void 0===n?r:n}}).call(this,r(12))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=r(14),i=r(32);n(void 0,void 0,void 0,(function*(){return o.transport.emit("onready",yield i.getSummary())}))},function(e,t,r){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.transport=t.DASHBOARD_ANALYTICS_URL=t.DASHBOARD_ANALYTICS_PORT=t.DASHBOARD_ANALYTICS_HOST=void 0,t.DASHBOARD_ANALYTICS_HOST=e.env.DASHBOARD_ANALYTICS_HOST,t.DASHBOARD_ANALYTICS_PORT=e.env.DASHBOARD_ANALYTICS_PORT,t.DASHBOARD_ANALYTICS_URL=`${t.DASHBOARD_ANALYTICS_HOST}:${t.DASHBOARD_ANALYTICS_PORT}`;const n=r(15);t.transport=n.DebugTransport.connect(t.DASHBOARD_ANALYTICS_URL)}).call(this,r(1))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AxiosTransport=t.DebugTransport=void 0;const n=r(2);t.DebugTransport={connect:function(e){return console.log(`connect to ${e} endpoint`),this},emit:function(e,t){console.log(e,JSON.stringify(t))}},t.AxiosTransport={connect:function(e){if(e||0===e.length)throw new Error("Missing `url` parameter");return this.baseUrl=e,this},emit:function(e,t){n.default.post(`${this.baseUrl}/${e}`,t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},function(e,t,r){var n=r(0),o=r(3),i=r(17),a=r(9);function u(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var c=u(r(6));c.Axios=i,c.create=function(e){return u(a(c.defaults,e))},c.Cancel=r(10),c.CancelToken=r(30),c.isCancel=r(5),c.all=function(e){return Promise.all(e)},c.spread=r(31),e.exports=c,e.exports.default=c},function(e,t,r){var n=r(0),o=r(4),i=r(18),a=r(19),u=r(9);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=c},function(e,t,r){var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){var n=r(0),o=r(20),i=r(5),a=r(6);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){var n=r(25),o=r(26);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t,r){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},function(e,t,r){var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){var n=r(10);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSummary=void 0;const o=r(33),i=r(40);t.getSummary=function(){return n(this,void 0,void 0,(function*(){const e=o.getProperties(),t=i.getSummary(e),r=i.patchSummary(t,{include:["page_type","product_id","product_title","shop","shop_id","unique_token","visit_token"]});return yield i.validateSummary(r)}))}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getProperties=t.getRawProperties=void 0;const n=r(34),o=r(35),i=r(36),a=r(37),u=r(38),c=r(39);function s(){return[n.getCookieProperties(),o.getMetaProperties(),i.getPageProperties(),a.getShopProperties(),u.getTrekkieProperties()]}t.getRawProperties=s,t.getProperties=function(){return c(s())}},function(e,t,r){function n(){return[{alias:"unique_token",property:"_shopify_y"},{alias:"visit_token",property:"_shopify_s"}]}function o(e){var t;const r=`(^|;)\\s*${e}\\s*=\\s*([^;]+)`;return(null===(t=document.cookie.match(r))||void 0===t?void 0:t.pop())||""}Object.defineProperty(t,"__esModule",{value:!0}),t.getCookieProperties=t.getPropertyValue=t.getPropertyMapping=void 0,t.getPropertyMapping=n,t.getPropertyValue=o,t.getCookieProperties=function(e){return((null==e?void 0:e.mapping)||[{alias:"unique_token",property:"_shopify_y"},{alias:"visit_token",property:"_shopify_s"}]).map((function({alias:e,property:t},r){return{[e]:o(t)}}))}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getMetaProperties=t.getPropertyValue=t.getPropertyMapping=void 0;const n=r(11);function o(){return[{alias:"page_type",property:"page.pageType"},{alias:"product_id",property:"product.id"},{alias:"product_gid",property:"product.gid"},{alias:"product_type",property:"product.vendor"},{alias:"product_vendor",property:"product.type"},{alias:"resource_id",property:"page.resourceId"},{alias:"resource_type",property:"page.resourceType"}]}function i(e){var t;const r=null===(t=globalThis.ShopifyAnalytics)||void 0===t?void 0:t.meta;return r?n(r,e):null}t.getPropertyMapping=o,t.getPropertyValue=i,t.getMetaProperties=function(e){return((null==e?void 0:e.mapping)||[{alias:"page_type",property:"page.pageType"},{alias:"product_id",property:"product.id"},{alias:"product_gid",property:"product.gid"},{alias:"product_type",property:"product.vendor"},{alias:"product_vendor",property:"product.type"},{alias:"resource_id",property:"page.resourceId"},{alias:"resource_type",property:"page.resourceType"}]).map((function({alias:e,property:t},r){return{[e]:i(t)}}))}},function(e,t,r){function n(){return[{alias:"page_url",property:"og:url"},{alias:"page_type",property:"og:type"},{alias:"page_title",property:"og:title"},{alias:"product_price",property:"og:price:amount"}]}function o(e,t){var r;const n=`meta[property="${e}"]`;return null===(r=document.querySelector(n))||void 0===r?void 0:r.getAttribute(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getPageProperties=t.getPropertyValue=t.getPropertyMapping=void 0,t.getPropertyMapping=n,t.getPropertyValue=o,t.getPageProperties=function(e){return((null==e?void 0:e.mapping)||[{alias:"page_url",property:"og:url"},{alias:"page_type",property:"og:type"},{alias:"page_title",property:"og:title"},{alias:"product_price",property:"og:price:amount"}]).map((function({alias:e,property:t},r){return{[e]:o(t,"content")}}))}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getShopProperties=t.getPropertyValue=t.getPropertyMapping=void 0;const n=r(11);function o(){return[{alias:"shop",property:"shop"},{alias:"country",property:"country"}]}function i(e){const t=globalThis.Shopify;return t?n(t,e):null}t.getPropertyMapping=o,t.getPropertyValue=i,t.getShopProperties=function(e){return((null==e?void 0:e.mapping)||[{alias:"shop",property:"shop"},{alias:"country",property:"country"}]).map((function({alias:e,property:t},r){return{[e]:i(t)}}))}},function(e,t,r){function n(){return[{alias:"shop_id",property:"shopId"},{alias:"unique_token",property:"uniqToken"},{alias:"visit_token",property:"visitToken"}]}function o(e){var t,r,n;const o=null===(n=null===(r=null===(t=globalThis.ShopifyAnalytics)||void 0===t?void 0:t.lib)||void 0===r?void 0:r.trekkie)||void 0===n?void 0:n.defaultAttributes;return o?o[e]:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getTrekkieProperties=t.getPropertyValue=t.getPropertyMapping=void 0,t.getPropertyMapping=n,t.getPropertyValue=o,t.getTrekkieProperties=function(e){return((null==e?void 0:e.mapping)||[{alias:"shop_id",property:"shopId"},{alias:"unique_token",property:"uniqToken"},{alias:"visit_token",property:"visitToken"}]).map((function({alias:e,property:t},r){return{[e]:o(t)}}))}},function(e,t,r){(function(t){var r=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")();function s(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var p=Object.prototype,f=p.hasOwnProperty,l=p.toString,d=c.Symbol,h=p.propertyIsEnumerable,y=d?d.isConcatSpreadable:void 0;function g(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=v),o||(o=[]);++i<a;){var u=e[i];t>0&&r(u)?t>1?g(u,t-1,r,n,o):s(o,u):n||(o[o.length]=u)}return o}function v(e){return m(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?l.call(e):"";return t==o||t==i}(e)}(e)}(e)&&f.call(e,"callee")&&(!h.call(e,"callee")||l.call(e)==n)}(e)||!!(y&&e&&e[y])}var m=Array.isArray;e.exports=function(e){return e&&e.length?g(e,1):[]}}).call(this,r(12))},function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.validateSummary=t.patchSummary=t.getSummary=void 0;const o=r(41);t.getSummary=function(e){const t={};return e&&e.forEach((function(e){for(let[r,n]of Object.entries(e))t[r]&&"window"===n||null!=n&&(t[r]=n.toString())})),t},t.patchSummary=function(e,t){const r=(null==t?void 0:t.include)||Object.keys(e),n={};return r.forEach((t=>n[t]=e[t])),n},t.validateSummary=function(e){return n(this,void 0,void 0,(function*(){return e&&e.page_type||(yield o.fetchProductPage())&&(e.page_type="product"),e}))}},function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchProductPage=t.getProductHandle=void 0;const o=r(2);function i(e){return((null==e?void 0:e.baseUrl)||window.location.pathname).split("/").pop()}t.getProductHandle=i,t.fetchProductPage=function(e){return n(this,void 0,void 0,(function*(){const t=(null==e?void 0:e.handle)||i();let r=null;try{r=yield o.default.get(`/products/${t}.json`)}catch(e){r=e.response}finally{return 200===(null==r?void 0:r.status)}}))}}])},"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("shopify.tracker",[],t):"object"==typeof exports?exports["shopify.tracker"]=t():e["shopify.tracker"]=t();
//# sourceMappingURL=shopify.tracker.js.map