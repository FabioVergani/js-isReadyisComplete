(function($w){'use strict';

 function isReady(evt){
	var isEvt=true, e=evt, d=e.target||(isEvt=false,e), dECL=d.documentElement.classList;
	d.title=d.titleOriginal;
	if(isEvt){dECL.add('ready');};
	w.scrollTo(0,0);
 }
 //


 function isLoad(evt){
	var isEvt=true, e=evt, d=e.target||(isEvt=false,e), dECL=d.documentElement.classList;
	d.title=d.titleOriginal;
	if(isEvt||dECL.contains('ready')){dECL.remove('ready');};
	dECL.add('loaded');
	w.scrollTo(0,1);//hide Old iOS AddressBar?
 }
 //

 var w=$w,
 d=(function($w){
	var i,w=$w,d=w.document;
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
 if(d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad);}else{isReady(d);isLoad(d);};
})(window);
//END.
