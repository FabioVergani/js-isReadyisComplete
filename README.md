```

($w=>{
	const $d = $w.document;
	const isReady = () => {
		//
		console.dir($d);
		//
	};
	if('complete' !== $d.readyState){
		$d.addEventListener('DOMContentLoaded',isReady,{once:true})
	}else{
		isReady()
	}
})(window);

```




# js-isReadyisComplete
template

(function($w){'use strict';
 function isReady(evt){

	function Defer(x,i){
		var p,e=x;
		if(e.isRunning===false){
			p='deferredTimeoutId';
			clearTimeout(e[p]);
			e[p]=setTimeout(function(){var f=e;f.isRunning=true;f.isRunning=f();},i);
		};
	}

	function handleScroll(evt){
		var e=evt.target.body,o=e.scrolling,y=o.y,j=y.prev,i;
		if(o.ignore!==true){
			i=y.now=y.prev=e.scrollTop;
			if(i>j){//direction:down
			 e=e.ownerDocument.documentElement;
			 if((e.scrollHeight-(i+e.clientHeight))===0){
				//ReachBottom
				alert('ReachBottom')
			 };
			};
		};

	};

	var e=evt,
	d=e.target||e,
	w=d.defaultView,
	on=w.on,
	Body=d[e='body']||(d[e]=w.$first(e)),
	Html=d.documentElement;

	if(!Body[e='ownerDocument']){Body[e]=d;};
	e=Body.scrollTop;
	Body.scrolling={
		ignore:false,
		y:{now:e,prev:e},
	};
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

	on(d,'scroll',handleScroll);
	on(d,'touchmove',handleScroll);

	Html.classList.replace('loading',['ready']);
	d.title=d.titleOriginal;
	isReady.fired=true;
	return Body;
 }
 function isLoad(evt){
	var e=evt,
	d=e.target||e,
	w=d.defaultView,
	Html=d.documentElement,
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
 var P,x,w=$w,d=w.document,f=w.Function,p=f.prototype,e=p.bind;
 d.titleOriginal=d.title;
 d.title='Loading..';
 w.info={
	support:{
		bind:e?(
		 p=(w.Call=p.call.bind(e))(d.getElementById,d),f=w.Call(d.createElement,d),
		 true
		):(
		 e=p.bind=function(o){var s=w.Array.prototype.slice,m=s.call(arguments,1),f=this,a=function(){},b=function(){var e=this;return f.apply(e instanceof a?e:o,m.concat(s.call(arguments)));};if(e=f.prototype){a.prototype=e;};b.prototype=new a();return b;},
		 w.Call=p.call.bind(e),
		 p=function(s){return document.getElementById(s)},
		 f=function(s){return document.createElement(s)},
		 false
		),
		scrollIntoView:Boolean(w.Element.prototype.scrollIntoView),
		__proto__:null
	},
	file:{
		islocal:w.String(w.location).indexOf('file://')!==-1,
		__proto__:null
	},
	__proto__:null
 };
 w.$id=p;
 e=w.Array.prototype;p='indexOf';if((p in e)!==true){e[p]=function(x,i){var k,o,l,n,e=this,v=-1;if(e!=null){o=Object(e);l=o.length>>>0;if(l!==0){e=Math;if((k=e.abs((n=(+i)||0)))===Infinity){n=0;};if(n<l){for(k=e.max((n>=0)?n:l-k,0),e=x;k<l;k++){if((k in o)&&(o[k]===e)){v=k;break;};};};};};return v;};};
 e=w.String.prototype;p='trim';if((p in e)!==true){e[p]=(function(p){return function(){return this.replace(p,'');};})(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);};
 if(p=d.documentMode && p<9){for(e=['footer','header','main','nav'],p=e.length;p--;f(e[p]));};
 e=(w.$Element=f)('_');
 if((p='classList') in e){
	f=w.DOMTokenList;
	P=f.prototype;
	e=e[p];
	e.add('a',(p='b'));
	if(!e.contains(p)){
		x=function(s){var o=P,p=s,g=o[p];o[p]=function(){for(var f=g,e=this,m=arguments,i=m.length-1;i>=0;i--){f.call(e,m[i]);};};}
		x('add');
		x('remove');
	};
	p='toggle';
	e[p](p,false);
	if(e.contains(p)){
		P[p]=(function(g){var f=g;return function(s,k){var e=this;return ((arguments.length>0)&&(e.contains(s)===k))?k:f.call(e,s);};})(P[p]);
	};
 }else{
	f=function(i){this.element=i;};
	P=f.prototype;
	P.s=function(e){return e.element.className.trim().split(/\s+/);};
	P.item=function(i){var e=this;return e.s(e)[i];};
	P.contains=function(i){var e=this;return -1!==e.s(e).indexOf(i);};
	P.add=function(){var r=[],e=this,f=e.s;for(var v,m=r,c=f(e),a=arguments,i=a.length-1;i>=0;i--){v=a[i];if (-1 === c.indexOf(v)){m[m.length]=v;};};if(r.length>0){e.element.className=(f(e).concat(r)).join('\u0020');};};
	P.remove=function(){var e=this,c=e.s(e);for(var j,a=arguments,i=a.length-1;i>=0;i--){j=c.indexOf(a[i]);if(-1!==j){c=c.splice(j,1);};};e.element.className=c.join('\u0020');};
	P.toggle=function(v,b){var i=v,k=b,e=this,x=e.contains(i);if(x!==k){e[x?'remove':'add'](i);x=!x;};return x;};
	P.length=0;
	f=w.setGetter(function(i,f){return f?function(e,p,g){f(e,p,{get:g});}:function(e,p,g){i.__defineGetter__(p,g);};})(e,w.Object.defineProperty);
	f(P,'length',function(){var e=this;return e.s(e).length;});
	f(Element.prototype,'classList',function(){return new f(this);});
 };
 f=w.$first=function(s){return document.getElementsByTagName(s)[0];};
 f=((e=d[p='documentElement'])?e:d[p]=f('html')).classList;
 if(!d[p='defaultView']){d[p]=w;};
 p=isLoad;
 (f.replace=function(a,b){var e=this;e.remove(a);e.add.apply(e,b);}).call(f,'js-no',['js','loading']);
 f=w.addEventListener;
 w.on=f?(f=function(e,s,c,r){e.removeEventListener(s,c,r);},function(e,s,c,r){e.addEventListener(s,c,r);}):(f=function(e,s,c){e.detachEvent('on'+s,c);},function(e,s,c){e.attachEvent('on'+s,c);});
 w.stopListen=f;
 f=w.at=function(x,s,f,b){var e=x,t=s,i=function(o){f(o);stopListen(e,t,i);};on(e,t,i,b&&true);};
 if(d.readyState!=='complete'){f(w,'DOMContentLoaded',isReady);f(w,'load',p);}else{p(d);};
})(window);
//END.
