/*! For license information please see confetti.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={};!function t(e,r,n,o){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),i="function"==typeof Path2D&&"function"==typeof DOMMatrix,c=function(){if(!e.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),r=t.getContext("2d");r.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{r.createPattern(n,"no-repeat")}catch(t){return!1}return!0}();function l(){}function s(t){var n=r.exports.Promise,o=void 0!==n?n:e.Promise;return"function"==typeof o?new o(t):(t(l,l),null)}var u,f,h,d,p,y,m,v,g,b,w,x=(u=c,f=new Map,{transform:function(t){if(u)return t;if(f.has(t))return f.get(t);var e=new OffscreenCanvas(t.width,t.height);return e.getContext("2d").drawImage(t,0,0),f.set(t,e),e},clear:function(){f.clear()}}),M=(p=Math.floor(1e3/60),y={},m=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(h=function(t){var e=Math.random();return y[e]=requestAnimationFrame((function r(n){m===n||m+p-1<n?(m=n,delete y[e],t()):y[e]=requestAnimationFrame(r)})),e},d=function(t){y[t]&&cancelAnimationFrame(y[t])}):(h=function(t){return setTimeout(t,p)},d=function(t){return clearTimeout(t)}),{frame:h,cancel:d}),S=(b={},function(){if(v)return v;if(!n&&a){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{v=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,r){t.postMessage({options:e||{},callback:r})}t.init=function(e){var r=e.transferControlToOffscreen();t.postMessage({canvas:r},[r])},t.fire=function(r,n,o){if(g)return e(r,null),g;var a=Math.random().toString(36).slice(2);return g=s((function(n){function i(e){e.data.callback===a&&(delete b[a],t.removeEventListener("message",i),g=null,x.clear(),o(),n())}t.addEventListener("message",i),e(r,a),b[a]=i.bind(null,{data:{callback:a}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),b)b[e](),delete b[e]}}(v)}return v}),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function C(t,e,r){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:E[e],r)}function L(t){return t<0?0:Math.floor(t)}function O(t){return parseInt(t,16)}function k(t){return t.map(I)}function I(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function P(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function T(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function A(t,r){var c,l=!t,u=!!C(r||{},"resize"),f=!1,h=C(r,"disableForReducedMotion",Boolean),d=a&&C(r||{},"useWorker")?S():null,p=l?P:T,y=!(!t||!d||!t.__confetti_initialized),m="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function v(e,r,a){for(var l,u,f,h,d=C(e,"particleCount",L),y=C(e,"angle",Number),m=C(e,"spread",Number),v=C(e,"startVelocity",Number),g=C(e,"decay",Number),b=C(e,"gravity",Number),w=C(e,"drift",Number),S=C(e,"colors",k),E=C(e,"ticks",Number),O=C(e,"shapes"),I=C(e,"scalar"),P=!!C(e,"flat"),T=function(t){var e=C(t,"origin",Object);return e.x=C(e,"x",Number),e.y=C(e,"y",Number),e}(e),A=d,j=[],F=t.width*T.x,N=t.height*T.y;A--;)j.push((void 0,void 0,u=(l={x:F,y:N,angle:y,spread:m,startVelocity:v,color:S[A%S.length],shape:O[(0,h=O.length,Math.floor(Math.random()*(h-0))+0)],ticks:E,decay:g,gravity:b,drift:w,scalar:I,flat:P}).angle*(Math.PI/180),f=l.spread*(Math.PI/180),{x:l.x,y:l.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*l.startVelocity+Math.random()*l.startVelocity,angle2D:-u+(.5*f-Math.random()*f),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:l.color,shape:l.shape,tick:0,totalTicks:l.ticks,decay:l.decay,drift:l.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*l.gravity,ovalScalar:.6,scalar:l.scalar,flat:l.flat}));return c?c.addFettis(j):(c=function(t,e,r,a,c){var l,u,f=e.slice(),h=t.getContext("2d"),d=s((function(e){function s(){l=u=null,h.clearRect(0,0,a.width,a.height),x.clear(),c(),e()}l=M.frame((function e(){!n||a.width===o.width&&a.height===o.height||(a.width=t.width=o.width,a.height=t.height=o.height),a.width||a.height||(r(t),a.width=t.width,a.height=t.height),h.clearRect(0,0,a.width,a.height),(f=f.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var r=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,c=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-r)+")",t.beginPath(),i&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,r,n,o,a,i){var c=new Path2D(t),l=new Path2D;l.addPath(c,new DOMMatrix(e));var s=new Path2D;return s.addPath(l,new DOMMatrix([Math.cos(i)*o,Math.sin(i)*o,-Math.sin(i)*a,Math.cos(i)*a,r,n])),s}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(a-n),.1*Math.abs(c-o),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var l=Math.PI/10*e.wobble,s=.1*Math.abs(a-n),u=.1*Math.abs(c-o),f=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,d=new DOMMatrix([Math.cos(l)*s,Math.sin(l)*s,-Math.sin(l)*u,Math.cos(l)*u,e.x,e.y]);d.multiplySelf(new DOMMatrix(e.shape.matrix));var p=t.createPattern(x.transform(e.shape.bitmap),"no-repeat");p.setTransform(d),t.globalAlpha=1-r,t.fillStyle=p,t.fillRect(e.x-f/2,e.y-h/2,f,h),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-n)*e.ovalScalar,Math.abs(c-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,r,n,o,a,i,c,l){t.save(),t.translate(e,r),t.rotate(a),t.scale(n,o),t.arc(0,0,1,0,c,void 0),t.restore()}(t,e.x,e.y,Math.abs(a-n)*e.ovalScalar,Math.abs(c-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var y=Math.PI/2*3,m=4*e.scalar,v=8*e.scalar,g=e.x,b=e.y,w=5,M=Math.PI/w;w--;)g=e.x+Math.cos(y)*v,b=e.y+Math.sin(y)*v,t.lineTo(g,b),y+=M,g=e.x+Math.cos(y)*m,b=e.y+Math.sin(y)*m,t.lineTo(g,b),y+=M;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(o)),t.lineTo(Math.floor(a),Math.floor(c)),t.lineTo(Math.floor(n),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(h,t)}))).length?l=M.frame(e):s()})),u=s}));return{addFettis:function(t){return f=f.concat(t),d},canvas:t,promise:d,reset:function(){l&&M.cancel(l),u&&u()}}}(t,j,p,r,a),c.promise)}function g(r){var n=h||C(r,"disableForReducedMotion",Boolean),o=C(r,"zIndex",Number);if(n&&m)return s((function(t){t()}));l&&c?t=c.canvas:l&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(o),document.body.appendChild(t)),u&&!y&&p(t);var a={width:t.width,height:t.height};function i(){if(d){var e={getBoundingClientRect:function(){if(!l)return t.getBoundingClientRect()}};return p(e),void d.postMessage({resize:{width:e.width,height:e.height}})}a.width=a.height=null}function g(){c=null,u&&(f=!1,e.removeEventListener("resize",i)),l&&t&&(document.body.removeChild(t),t=null,y=!1)}return d&&!y&&d.init(t),y=!0,d&&(t.__confetti_initialized=!0),u&&!f&&(f=!0,e.addEventListener("resize",i,!1)),d?d.fire(r,a,g):v(r,a,g)}return g.reset=function(){d&&d.reset(),c&&c.reset()},g}function j(){return w||(w=A(null,{useWorker:!0,resize:!0})),w}r.exports=function(){return j().apply(this,arguments)},r.exports.reset=function(){j().reset()},r.exports.create=A,r.exports.shapeFromPath=function(t){if(!i)throw new Error("path confetti are not supported in this browser");var e,r;"string"==typeof t?e=t:(e=t.path,r=t.matrix);var n=new Path2D(e),o=document.createElement("canvas").getContext("2d");if(!r){for(var a,c,l=1e3,s=l,u=l,f=0,h=0,d=0;d<l;d+=2)for(var p=0;p<l;p+=2)o.isPointInPath(n,d,p,"nonzero")&&(s=Math.min(s,d),u=Math.min(u,p),f=Math.max(f,d),h=Math.max(h,p));a=f-s,c=h-u;var y=Math.min(10/a,10/c);r=[y,0,0,y,-Math.round(a/2+s)*y,-Math.round(c/2+u)*y]}return{type:"path",path:e,matrix:r}},r.exports.shapeFromText=function(t){var e,r=1,n="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,r="scalar"in t?t.scalar:r,o="fontFamily"in t?t.fontFamily:o,n="color"in t?t.color:n);var a=10*r,i=a+"px "+o,c=new OffscreenCanvas(a,a),l=c.getContext("2d");l.font=i;var s=l.measureText(e),u=Math.ceil(s.actualBoundingBoxRight+s.actualBoundingBoxLeft),f=Math.ceil(s.actualBoundingBoxAscent+s.actualBoundingBoxDescent),h=s.actualBoundingBoxLeft+2,d=s.actualBoundingBoxAscent+2;u+=4,f+=4,(l=(c=new OffscreenCanvas(u,f)).getContext("2d")).font=i,l.fillStyle=n,l.fillText(e,h,d);var p=1/r;return{type:"bitmap",bitmap:c.transferToImageBitmap(),matrix:[p,0,0,p,-u*p/2,-f*p/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),t,!1);const e=t.exports;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(){o=function(){return e};var t,e={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var M={};f(M,l,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(j([])));E&&E!==n&&a.call(E,l)&&(M=E);var C=x.prototype=b.prototype=Object.create(M);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,c,l){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==r(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function k(e,r,n){var o=p;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=I(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=x,i(C,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,u,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},L(O.prototype),f(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(C),f(C,u,"Generator"),f(C,l,(function(){return this})),f(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function i(t,r,n,o,a,i,c,l,s){e({particleCount:t,angle:r,spread:n,startVelocity:o,decay:a,gravity:i,drift:c,flat:!1,ticks:l,scalar:s,colors:["#f00","#00f","#0f0"]})}function c(t){return new Promise((function(r){var n=t,o=0,a=setInterval((function(){e({particleCount:50,spread:360,startVelocity:30,origin:{x:Math.random(),y:Math.random()-.2},scalar:.8,colors:["#f00","#00f","#0f0"]}),++o>=n&&(clearInterval(a),r())}),200)}))}t.exports.create,window.onload=function(){var t=!1;chrome.storage.sync.get("checkOffSwitch").then((function(e){t=e.checkOffSwitch||!1,console.log("Check Off Enabled: ",t),r()}));var e=function(){var t,e=(t=o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:chrome.storage.sync.get(["selectedProfile"],(function(t){var e=t.selectedProfile;chrome.storage.sync.get(["profiles"],(function(t){var r=t.profiles[e],n=r.particleSlider||150,o=r.angleSlider||90,a=r.spreadSlider||270,l=r.velocitySlider||45,s=r.decaySlider||.9,u=r.gravitySlider||1,f=r.driftSlider||0,h=r.tickSlider||200,d=r.particleSizeSlider||1,p=r.burstSlider||5;i(n,o,a,l,s,u,f,h,d),c(p)}))}));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,l,"next",t)}function l(t){a(i,n,o,c,l,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),r=function(){var r=Array.from(document.querySelectorAll("[data-v-625658].text-white.bg-primary-dark.hover\\:bg-primary-alt.p-px.font-metro.focus\\:outline-none.transition-colors.duration-150"));if(t){var n=document.querySelectorAll("[data-v--363100].float-right.ml-2.w-28.text-white.bg-primary-dark.hover\\:bg-primary-alt.p-px.font-metro.focus\\:outline-none.transition-colors.duration-150"),o=Array.from(n).filter((function(t){var e=t.querySelectorAll("div");return Array.from(e).some((function(t){return t.textContent.includes("Check Off")}))}));r=r.concat(o)}r.forEach((function(t){t.hasClickListener||(t.addEventListener("click",e),t.hasClickListener=!0)}))};new MutationObserver((function(t,e){var o,a=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(a.s();!(o=a.n()).done;){var i=o.value;"childList"!==i.type&&"attributes"!==i.type&&"characterData"!==i.type||r()}}catch(t){a.e(t)}finally{a.f()}})).observe(document.body,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}})();