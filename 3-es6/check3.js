//
(function($){
 'use strict';
 function at(s,f,b){function i(o){f(o);stopListen(t,i);}const t=s;on(t,i,b&&true);}

 function a(evt){//log.dir(evt);
	const d=evt.target;
	log.info('isReady',d);
 }

 function b(evt){//log.dir(evt);
	const d=evt.target;
	log.info('isComplete',d);
 }

 const w=$,
 on=w.addEventListener,
 stopListen=w.removeEventListener,
 call=(function(o){const e=o;return e.call.bind(e.bind);})(w.Function.prototype),
 log=(function(o){const e=o,c=call,x=c(e.log,e);['dir','info','warn'].map(function(i){const m=e;x[i]=c(m[i],m);});return x;})(w.console);
 if(w.document.readyState!=='complete'){at('DOMContentLoaded',a);at('load',b);}else{a(false);b(false);}
})(window);
//END.
