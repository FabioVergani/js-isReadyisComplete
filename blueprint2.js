(function($w){'use strict';
 function isReady(evt){
	var k=true,e=evt,d=e.target||(k=false,e),w=d.defaultView,i=w.info,Location=w.location,h=d.documentElement,o=h.classList;
	o.remove('loading');
	if(i.support.DOMContentLoaded=k){o.add('ready');};
	switch(h.id){

	};
	for(var p=w.navigator.platform,m=[/win(32|64)/i,/android/i,/ios/i],i=0;i<3;++i){if(m[i].test(p)){h.setAttribute('data-os',['win','android','ios'][i]);break;};};
	d.title=d.titleOriginal;
 }
 //
 function isLoad(evt){
	var e=evt,d=e.target||e,w=d.defaultView,i=w.info,o=d.documentElement.classList;
	if(i.support.DOMContentLoaded===true){o.remove('ready');}else{isReady(d);};
	d.title=d.titleOriginal;
	o.add('loaded');
	//console.dir(i);
 }
 //
 var w=$w,
 d=(function($w){
	var w=$w,d=w.document,i;
	d.titleOriginal=d.title;
	d.title='Loading..';
	w.info={support:{DOMContentLoaded:false}};
	if(i=d.documentMode && i<9){for(var m=['footer','header','main','nav'],i=3;i--;d.createElement(m[i--]));};
	if(!d[i='defaultView']){d[i]=w;};
	if(!d[i='documentElement']){d[i]=d.getElementsByTagName('html')[0];};
	d[i].classList.add('loading');
	return d;
 })(w),
 at=w.at=function(s,f,b){var t=s,i=function(o){f(o);w.removeEventListener(t,i);};w.addEventListener(t,i,b&&true);};
 if(d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad);}else{isLoad(d);};
})(window);
//END.
