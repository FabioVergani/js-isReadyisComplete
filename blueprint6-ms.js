(function($w){'use strict';
 function dummy(){}
 function isReady(evt){
	function handlePageScroll(evt){
		var i=evt.target,e=i.body,o=e.scrolling,y=o.y,j=y.prev,f,m;
		if(o.listen!==false){
			i=y.curr=y.prev=e.scrollTop;
			o=o.react.atReaching.Bottom;
			if(o.enabled && i>j){//direction:down
			 e=e.ownerDocument.documentElement;
			 if((e.scrollHeight-(i+e.clientHeight))===0){
				console.warn('@PageBottom');
				o.actions.each(function(x){//registered-behvior-sequence
					if(x && x.isEnabled){
						x();//assume:typeof==='function'
					}else{
						console.log(x);
					};
				});
			 };
			};
		};
	};
	//
	var o,e=evt,d=e.target||e,w=d.defaultView,on=w.on,$first=w.$first,dBody=d[e='body']||(d[e]=$first(e)),dHtml=d.documentElement;
	if(!dBody[e='ownerDocument']){HEp[e]=dBody[e]=d;};
	dBody.scrolling={listen:true,y:{curr:(e=dBody.scrollTop),prev:e},react:{atReaching:{Bottom:{enabled:true,actions:[]}}}};
	e=null;
	(w.listenPageScroll=function(k){
		var e=d,f=w[k?'on':'stopListen'],x=handlePageScroll;
		f(e,'scroll',x);
		f(e,'touchmove',x);
		dBody.scrolling.listen=k;
	})(true);

//---

	w.getTextFile=function(x){var o=new XMLHttpRequest();o.open('GET',x,true);o.overrideMimeType('text/plain; charset=x-user-defined');o.send(null);return o;}
//---
	dHtml.swapClass('loading','ready');
	d.title=d.titleOriginal;
	isReady.fired=true;
	return dBody;
 }
 function isLoad(evt){
	var e=evt,d=e.target||e,w=d.defaultView,dHtml=d.documentElement,dBody=isReady.fired?d.body:isReady(d);
	e=null;
//---

	//console.dir(w.info);
//---
	d.title=d.titleOriginal;
	dHtml.swapClass('ready','loaded');
 }
 var w=$w,d=w.document,p='prototype',ARp=w.Array[p],HEp=w.HTMLElement[p],e=(p=w.Function[p]).bind,f;
 HEp.swapClass=function(a,b){var e=this.classList;e.remove(a);e.add(b);return e;};
 w.Slice=function(m,a,b){return ARp.slice.call(m,a,b);};
 w.info={
	file:{islocal:w.String(w.location).indexOf('file://')!==-1,__proto__:null},
	support:{
		bind:e?(
		 p=(w.CallBind=p.call.bind(e))(d.getElementById,d),
		 f=w.CallBind(d.createElement,d),
		 true
		):(
		 e=p.bind=function(o){var s=w.Slice,m=s(arguments,1),f=this,a=function(){},b=function(){var e=this;return f.apply(e instanceof a?e:o,m.concat(s(arguments)));};if(e=f.prototype){a.prototype=e;};b.prototype=new a();return b;},
		 w.CallBind=p.call.bind(e),
		 p=function(s){return d.getElementById(s)},
		 f=function(s){return d.createElement(s)},
		 false
		),
		scrollIntoView:(
		 w.creaTag=f,
		 w.$id=p,
		 (p='scrollIntoView') in (e=w.Element.prototype)?(
			true
		 ):(
			e[p]=dummy,
			false
		 )
		),
		dataset:(p=null,'dataset' in HEp),
		classList:('classList' in HEp?(
		 //fix,
		 true
		):(
		 //polyfill,
		 false
		)),
		__proto__:null
	},
	__proto__:null
 };
 p='console';
 if(p in w && (e=w[p])){
	f=w.CallBind(e.log,e);
 }else{
	f=dummy;
	w[p]={warn:f,log:f,dir:f,info:f};
 };
 w.log=f;
 e=p=f=null;
 //

 //
 e=ARp;
 e.consume=function(x){var f=x,m;if(f){m=this;while(e=m.shift()){f(e,m);};};};//nb:contigue,sparsebreak
 e.each=function(x){var f=x,i,m,l;if(f){i=0;m=this;l=m.length;while(i<l){f(m[i],i,m);++i;};};};//nb: sparse is used!
 p='indexOf';
 if((p in e)!==true){e[p]=function(x,i){var k,o,l,n,e=this,v=-1;if(e!=null){o=Object(e);l=o.length>>>0;if(l!==0){e=Math;if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};if(n<l){for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){if((k in o)&&(o[k]===e)){v=k;break;};};};};};return v;};};
 e=w.String.prototype;
 p='trim';
 if((p in e)!==true){e[p]=(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);};
 p=d.documentMode;
 if(p && p<9){for(e=['footer','header','main','nav','progress','time'],p=e.length;p--;f(e[p]));};//f>w.creaTag
 p=e=null;
 //<polyfills>
 f=w.$first=function(s){return d.getElementsByTagName(s)[0];};
 (((p='documentElement')in d)?d[p]:(d[p]=f('html'))).swapClass('js-no','js').add('loading');
 f=((p='defaultView')in d?w:(d[p]=w)).addEventListener;
 p=isLoad;
 w.on=f?(f=function(e,s,c,r){e.removeEventListener(s,c,r);},function(e,s,c,r){e.addEventListener(s,c,r);}):(f=function(e,s,c){e.detachEvent('on'+s,c);},function(e,s,c){e.attachEvent('on'+s,c);});
 w.stopListen=f;
 f=w.at=function(x,s,f,b){var e=x,t=s,i=function(o){f(o);stopListen(e,t,i);};on(e,t,i,b&&true);};
 if(d.readyState!=='complete'){f(w,'DOMContentLoaded',isReady);f(w,'load',p);}else{p(d);};
 d.titleOriginal=d.title;
 d.title='Loading..';
})(window);
//END
