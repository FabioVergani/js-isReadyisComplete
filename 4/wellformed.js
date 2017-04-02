(function(w){'use strict';
 function at(e,s,f,x){function a(){e.removeEventListener(s,i)}function i(o){a();f(o)}a();e.addEventListener(s,i,x)}
 function swapClass(e,a,b){var o=e.classList;o.remove(a);o.add(b);return o;}
 function a(evt){//@Ready
  const d=evt.target, w=d.defaultView, dE=d.documentElement;
	//‹‹‹
 	
	console.log('');

	//‹‹‹
	swapClass(dE,'loading','ready')
 }
 function b(evt){//@Load
	const d=evt.target, w=d.defaultView, dE=d.documentElement;
	let s;
	//‹‹‹

	console.log('');

	//‹‹‹
	if(s=d.titleOriginal){d.title=s};swapClass(dE,'ready','loaded')
 }
 let d=w.document;
 if(d.readyState!=='complete'){
	swapClass(d.documentElement,'loaded','loading');
	d.titleOriginal=d.title;
	d.title='Loading..';
	at(w,'DOMContentLoaded',a);
	at(w,'load',b)
 }else{
	a(d={target:d});
	b(d)
 };
})(window);
//END.
