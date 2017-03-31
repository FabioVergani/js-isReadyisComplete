(function(w){'use strict';
 function at(e,s,f,x){function a(){e.removeEventListener(s,i)}function i(o){a();f(o)}a();e.addEventListener(s,i,x)};
 function a(evt){
  const w=evt.target;console.log('isReady',w);
 }
 function b(evt){
	const w=evt.target;console.log('isLoad',w);
 }
 let e=w.document;
 if(e.readyState!=='complete'){at(w,'DOMContentLoaded',a);at(w,'load',b)}else{a(e={target:e});b(e)};
})(window);
//END.
