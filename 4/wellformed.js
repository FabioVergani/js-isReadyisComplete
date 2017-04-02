(function(w){'use strict';
 function at(e,s,f,x){function a(){e.removeEventListener(s,i)}function i(o){a();f(o)}a();e.addEventListener(s,i,x)};
 function swapClass(e,a,b){var o=e.classList;o.remove(a);o.add(b);return o;}
 function a(evt){
	//‹‹‹

	//‹‹‹
	swapClass(dE,'loaded','loading').add('ready')//@Ready:done
 }
 function b(evt){
	let s;
	const d=evt.target,dE=d.documentElement;
	//‹‹‹

	//‹‹‹
	swapClass(dE,'ready','loaded').remove('loading');
	if(s=d.titleOriginal){d.title=s}//@Load:done
 }
 let e=w.document;
 const $id=e.getElementById.bind(e);
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
