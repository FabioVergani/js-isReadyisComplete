(function($){
 function isReady(event_Ready){console.info('isReady%O',event_Ready);
  const eR=event_Ready, $d=eR.target;
	return eR;
 }
 function isLoad(event_Load){console.info('isLoad%O',event_Load);
  const $d=event_Load.target;

	//#
  listen('keyup',function(event_KeyUp){
 		const n=event_KeyUp.keyCode;console.info('KeyUp%O',event_KeyUp,n);
  });

 }
 function listen(a,b){const w=$;w.removeEventListener(a,b);w.addEventListener(a,b)}
 function at(a,b){const w=$,c=function(x){b(x);w.removeEventListener(a,c)};listen(a,c)}
 const $d=$.document;
 if($d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad)}else{isLoad(isReady({target:$d}))}
})(window);
