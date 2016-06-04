//
(function($){
 'use strict';
 function at(s,f,b){const t=s,i=function(o){f(o);stopListen(t,i);};on(t,i,b&&true);}
 function isReady(evt){log('isReady');log.obj(evt);}
 function isComplete(evt){log('isComplete');log.obj(evt);}
 const w=$,

 Call=(function(e){return e.call.bind(e.bind);})(w.Function.prototype),

 log=(function(o){const e=o,c=Call,f=c(e.log,e);f.obj=c(e.dir,e);return f;})(w.console),

 on=w.addEventListener,
 stopListen=w.removeEventListener,
 d=w.document;
 if(d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isComplete);}else{isReady(false);isComplete(false);};
})(window);
//END.
