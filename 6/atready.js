(function($){
 function isReady(event_Ready){
	console.info('isReady');
 }
 function at(a,b){const c=function(x){b(x);d.removeEventListener(a,c)},d=$d;d.addEventListener(a,c)}
 const $d=$.document;
 if($d.readyState!=='complete'){at('DOMContentLoaded',isReady)}else{isReady({target:$d})}
})(window);
