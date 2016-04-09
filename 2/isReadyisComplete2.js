//START
(function($){
 var w=$,
 d=w.document,
 at=function(e,s,f,b){var x=e,i=function(o){f(o);x.removeEventListener(s,i);};x.addEventListener(s,i,b===true);},
 at$=at.bind(null,w),
 //…

 isReady=function(evt){var o=evt;console.log('isReady',o);},
 isComplete=function(evt){var o=evt;console.log('isComplete',o);},

 //…

 endvar;
 //Run:
 (function(s,r,c){if(s!=='complete'){var f=at$;f('DOMContentLoaded',r);f('load',c);}else{r(false);c(false);};})(d.readyState,isReady,isComplete);

})(window);
//END.
