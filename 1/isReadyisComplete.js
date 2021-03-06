(function(doc){
 'use strict';
 var $d=document, $w=$d.defaultView||window,
 on=$w.addEventListener||function(s,r){$w.attachEvent('on'+s,r);},
 stopListen=$w.removeEventListener||function(s,r){$w.detachEvent('on'+s,r);},
 at=function(s,f,b){var g=function(evt){f(evt);stopListen(s,g);};on(s,g,b&&true);},
 log=(function(c){return c?function(){var o=c;o.log.apply(o,arguments);}:dummy;})($w.console),
 isReady=function(evt){
	log('isReady');
 },
 isComplete=function(evt){
	log('isComplete');
 },
 lastvar;
 //Run:
 if($d.readyState==='complete'){
  isReady(false);
  isComplete(false);
 }else{
  if('ondomcontentloaded' in $w){//supportDOMContentLoaded
	at('DOMContentLoaded',isReady);
	at('load',isComplete);
  }else{
	 at('load',function(evt){
	  isReady(false);
	  isComplete(evt);
	 });
  };
 };
})(document);
