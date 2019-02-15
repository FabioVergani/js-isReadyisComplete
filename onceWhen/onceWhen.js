(w=>{
	const console=w.console,
	d=w.document,
	dReady=isReady=>{
		console.log('doc is: ready %O',isReady);
		const d=isReady.target;
		//...
	},
	dFully=isLoaded=>{
		console.log('doc is: loaded %O',isLoaded);
		const d=isLoaded.target;
		//...
	},
	onceWhen=(e,s,c)=>{let f=o=>{e.removeEventListener(s,f);f=null;c(o)};e.addEventListener(s,f)};
	//
	if('complete'!==d.readyState){
		const f=onceWhen;
		f(w,'DOMContentLoaded',dReady);
		f(w,'load',dFully)
	}else{
		const o={target:d};
		dReady(o);
		dFully(o)
	}
})(window);