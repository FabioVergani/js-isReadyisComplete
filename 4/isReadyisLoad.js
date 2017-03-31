(function(w){'use strict';
 function at(e,s,f,x){function a(){e.removeEventListener(s,i)}function i(o){a();f(o)}a();e.addEventListener(s,i,x)};
 function a(evt){
  const d=evt.target;console.log('isReady',d);
 }
 function b(evt){
	const d=evt.target;console.log('isLoad',d);
	let s;
	//<<<

	//<<<
	if(s=d.titleOriginal){d.title=s};
 }
 let e=w.document;
 if(e.readyState!=='complete'){
  e.titleOriginal=e.title;
  e.title='Loading..';
	at(w,'DOMContentLoaded',a);
	at(w,'load',b)
 }else{
	a(e={target:e});
	b(e)
 };
})(window);
//END.
