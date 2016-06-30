(function($w){'use strict';

 function isReady(evt){
	var k=true,e=evt,d=e.target||(k=false,e),w=d.defaultView,s=w.support,h=d.documentElement,o=h.classList;
	o.remove('loading');
	if(s.DOMContentLoaded=k){o.add('ready');};
	for(var p=w.navigator.platform,m=[/Win32/i,/Android/i,/iOS/i],i=0;i<3;++i){
	 if(m[i].test(p)){h.setAttribute('data-os',['win','android','ios'][i]);break;};
	};
	d.title=d.titleOriginal;
 }



 function isLoad(evt){
	var e=evt,d=e.target||e,w=d.defaultView,s=w.support,o=d.documentElement.classList;
	if(s.DOMContentLoaded===true){o.remove('ready');}else{isReady(d);};
	d.title=d.titleOriginal;
	o.add('loaded');
 }



 var w=$w,
 d=(function($w){
	var i,w=$w,d=w.document;
	d.titleOriginal=d.title;
	d.title='Loading..';
	w.support={DOMContentLoaded:false};
	if(i=d.documentMode && i<9){i=3;for(var m=['footer','header','main','nav'];i--;d.createElement(m[i--]));};
	if(!d[i='defaultView']){d[i]=w;};
	if(!d[i='documentElement']){d[i]=d.getElementsByTagName('html')[0];};
	d[i].classList.add('loading');
	return d;
 })(w),
 on=w.addEventListener,
 stopListen=w.removeEventListener,
 at=w.at=function(s,f,b){var t=s,i=function(o){f(o);stopListen(t,i);};on(t,i,b&&true);};
 //
 if(d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad);}else{isLoad(d);};
})(window);
//END.
