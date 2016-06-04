(function($){
 'use strict';
 function at(s,f,b){const t=s,i=function(o){f(o);stopListen(t,i);};on(t,i,b&&true);}
 function isReady(evt){log('isReady');}
 function isComplete(evt){log('isComplete');}
 const w=$,
 FnProto=Function.prototype,
 Call=FnProto.call.bind(FnProto.bind),



 console=w.console,
 log=Call(console.log,console),
 on=w.addEventListener,
 stopListen=w.removeEventListener,
 d=w.document;
 if(d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isComplete);}else{isReady(false);isComplete(false);};
})(window);
//END.
