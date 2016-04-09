//START
(function($){
 var w=$,
 d=w.document,
 at=function(e,s,f,b){var x=e,i=function(o){f(o);x.removeEventListener(s,i);};x.addEventListener(s,i,b===true);},
 at$=function(s,f,b){at()},
 //…

 isReady=function(evt){var o=evt;console.log('isReady',o);},
 isComplete=function(evt){var o=evt;console.log('isComplete',o);},

 //…

 endvar;
 //Run:
 (function(s,r,c){
  var a=r,b=c,e,f;
  if(s!=='complete'){f=at;e=w;f(e,'DOMContentLoaded',a);f(e,'load',b);}else{a(false);b(false);};
 })(d.readyState,isReady,isComplete);

})(window);
//END.
