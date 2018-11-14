(w=>{
	const c=w.console,d=w.document,onceWhenHappens=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	domReady=domIsReady=>{
		c.log('dom is: ready %O',domIsReady);
		const d=domIsReady.target,
		frag=w.Object.defineProperty(d.createDocumentFragment(),'add',{value:s=>frag.appendChild(d.createElement(s))}),
		$body=d.body,
		$header=frag.add('header'),
		$footer=frag.add('footer'),
		$main=d.getElementById('main');
		//
		$header.id='header';
		$footer.id='footer';
		//
		(e=>{
			const s=e.style,v=s.display;
			s.display='none';
			e.insertBefore($header,e.firstElementChild);
			e.appendChild($footer);
			s.display=v
		})($body);
		//
		if(domIsReady.type===null||d.readyState==='complete'){docLoaded({target:d,type:null})}else{onceWhenHappens(w,'load',docLoaded)}
	},
	docLoaded=docIsLoaded=>{
		c.log('document is: loaded %O',docIsLoaded);
		//... faicose con il doc...
	};
	//
	if(d.readyState!=='complete'){onceWhenHappens(w,'DOMContentLoaded',domReady)}else{domReady({target:d,type:null})}
})(window);
