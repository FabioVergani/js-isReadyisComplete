(function($){
 function isReady(event_Ready){//console.info('isReady%O',event_Ready);
  const eR=event_Ready,$d=eR.target,$dE=$d.documentElement;
	$dE.classList.add('ready');
	return eR;
 }
 function isLoad(event_Load){//console.info('isLoad%O',event_Load);
  const $d=event_Load.target,$dE=$d.documentElement;
	//#
  on('keyup',function(event_KeyUp){
 		const n=event_KeyUp.keyCode;console.log('KeyUp%O',event_KeyUp,n);
  });
	swapClass($dE,'loading','loaded').remove('ready');
 }
 function on(a,b){const w=$;w.removeEventListener(a,b);w.addEventListener(a,b)}
 function at(a,b){const w=$,c=function(x){b(x);w.removeEventListener(a,c)};on(a,c)}
 function swapClass(a,b,c){const d=a.classList,e={add:function(a){d.add(a);return e},remove:function(a){d.remove(a);return e}};d.remove(b);d.add(c);return e}
 const $d=$.document,$dE=$d.documentElement;
 swapClass($dE,'js-no','js').remove('loaded').add('loading');
 if($d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad)}else{isLoad(isReady({target:$d}))}
})(window);
