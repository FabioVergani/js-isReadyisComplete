(function($){
 function isReady(event_Ready){console.info('isReady%O',event_Ready);
  const $d=event_Ready.target;
	return $d
 }
 function isLoad(event_Load){console.info('isLoad%O',event_Load);
  const $d=event_Load.target;
	return $d
 }
 function at(a,b){const c=function(x){b(x);w.removeEventListener(a,c)},w=$;w.addEventListener(a,c)}
 const $d=$.document;
 if($d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad)}else{isLoad(isReady({target:$d}))}
})(window);
