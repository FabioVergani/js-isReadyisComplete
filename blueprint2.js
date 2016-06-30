(function($w){'use strict';

 function isReady(evt){
	var k=true,e=evt,d=e.target||(k=false,e),w=d.defaultView;
	w.scrollTo(0,0);
	if(w.support.DOMContentLoaded=k){d.documentElement.classList.add('ready');};
	d.title=d.titleOriginal;
 }

 function isLoad(evt){
	var e=evt,d=e.target||e,w=d.defaultView,o=d.documentElement.classList;
	if(w.support.DOMContentLoaded===true){o.remove('ready');}else{isReady(d);};
	d.title=d.titleOriginal;
	o.add('loaded');
	w.setTimeout(function(){w.scrollTo(0,1);},9);//hide Old iOS AddressBar?
 }


 var w=$w,
 d=(function($w){
	var i,w=$w,d=w.document;
	w.support={DOMContentLoaded:false};
	d.titleOriginal=d.title;
	d.title='Loading..';
	if(i=d.documentMode && i<9){i=3;for(var m=['footer','header','main','nav'];i--;d.createElement(m[i--]));};
	if(!d[i='defaultView']){d[i]=w;};
	if(!d[i='documentElement']){d[i]=d.getElementsByTagName('html')[0];};
	return d;
 })(w),
 on=w.addEventListener,
 stopListen=w.removeEventListener,
 at=function(s,f,b){var t=s,i=function(o){f(o);stopListen(t,i);};on(t,i,b&&true);};
 //
 if(d.readyState!=='complete'){
	at('DOMContentLoaded',isReady);
	at('load',isLoad);
 }else{
	//isReady(d);
	isLoad(d);
 };
})(window);
//END.
