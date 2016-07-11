(function($w){'use strict';
 function isReady(evt){
	var e=evt,
	d=e.target||e,
	Body=d[e='body']||(d[e]=d.getElementsByTagName(e)[0]),
	Html=d.documentElement,
	w=d.defaultView;
	if(!Body[e='ownerDocument']){Body[e]=d;};
	e=null;

	//<
	 console.info('isReady');
	 console.group();
	 console.log('d.body.ownerDocument (d) %O',d.body.ownerDocument);
	 console.log('d.documentElement (Html) %O',d.documentElement);
	 console.log('d.body (Body) %O',d.body);
	 console.log('d.defaultView (w) %O',d.defaultView);
	 console.groupEnd();
	 console.log('w.info%O',w.info);
	//>

	Html.classList.replace('loading',['ready']);
	d.title=d.titleOriginal;
	isReady.fired=true;
	return Body;
 }
 function isLoad(evt){
	var e=evt,
	d=e.target||e,
	Html=d.documentElement,
	w=d.defaultView,
	e=w.info.support,
	Body=isReady.fired?d.body:isReady(d);
	e=null;

	//<
	 console.info('isLoad');
	 console.group();
	 console.dir(w);
	 console.dir(d);
	 console.dir(Html);
	 console.dir(Body);
	 console.dir(w.$id('feeds'));
	 console.groupEnd();
	//>

	d.title=d.titleOriginal;
	Html.classList.replace('ready',['loaded']);
 }
 var w=$w,d=w.document,f=w.Function,p=f.prototype,e=p.bind;
 d.titleOriginal=d.title;
 d.title='Loading..';
 w.info={
	support:{
		bind:!e?(p=(w.Call=p.call.bind(e))(d.getElementById,d),f=w.Call(d.createElement,d),true):(p=function(s){return document.getElementById(s)},f=function(s){return document.createElement(s)},false),
		classList:'classList' in f('_')?true:false,
		__proto__:null
	},
	file:{
		islocal:w.String(w.location).indexOf('file://')!==-1,
		__proto__:null
	},
	__proto__:null
 };
 w.$id=p;
 w.$Element=f;
 if(p=d.documentMode && p<9){for(e=['footer','header','main','nav'],p=e.length;p--;f(e[p]));};
 if(!d[p='defaultView']){d[p]=w;};
 f=w.$first=function(s){return document.getElementsByTagName(s)[0];};
 f=((e=d[p='documentElement'])?e:d[p]=f('html')).classList;
 p=isLoad;
 (f.replace=function(a,b){var e=this;e.remove(a);e.add.apply(e,b);}).call(f,'js-no',['js','loading']);
 f=w.addEventListener;
 w.on=f?(f=function(e,s,c,r){e.removeEventListener(s,c,r);},function(e,s,c,r){e.addEventListener(s,c,r);}):(f=function(e,s,c){e.detachEvent('on'+s,c);},function(e,s,c){e.attachEvent('on'+s,c);});
 w.stopListen=f;
 f=w.at=function(x,s,f,b){var e=x,t=s,i=function(o){f(o);stopListen(e,t,i);};on(e,t,i,b&&true);};
 if(d.readyState!=='complete'){f(w,'DOMContentLoaded',isReady);f(w,'load',p);}else{p(d);};
})(window);
//END.
