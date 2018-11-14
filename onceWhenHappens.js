(w=>{
	const c=w.console,d=w.document,onceWhenHappens=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	domReady=domIsReady=>{
		c.log('dom is: ready %O',domIsReady);
		const d=event.target,$body=d.body;
		//... faicose con il dom ...
		if(domIsReady.type===null||d.readyState==='complete'){docLoaded({target:d,type:null})}else{onceWhenHappens(w,'load',docLoaded)}
	},
	docLoaded=docIsLoaded=>{
		c.log('document is: loaded %O',docIsLoaded);
		//... faicose con il doc...
	};
	//
	if(d.readyState!=='complete'){onceWhenHappens(w,'DOMContentLoaded',domReady)}else{domReady({target:d,type:null})}
})(window);
