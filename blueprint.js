(function($){
 'use strict';

 function a(evt){//isReady, var d=evt.target;
	console.log(1)
 }

 function b(evt){//isComplete, var d=evt.target;
	console.log(2)
 }

 var w=$,
 on=w.addEventListener,
 stopListen=w.removeEventListener,
 at=function(s,f,b){var t=s,i=function(o){f(o);stopListen(t,i);};on(t,i,b&&true);};

 if(w.document.readyState!=='complete'){at('DOMContentLoaded',a);at('load',b);}else{a(false);b(false);}
})(window);
//END.
