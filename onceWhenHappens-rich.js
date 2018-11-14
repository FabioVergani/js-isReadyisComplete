(w=>{
	const c=w.console,
	d=w.document,
	frag=w.Object.defineProperty(d.createDocumentFragment(),'createElement',{value:s=>frag.appendChild(d.createElement(s))}),
	onceWhenHappens=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	domReady=domIsReady=>{
		c.log('dom is: ready %O',domIsReady);
		const d=domIsReady.target,
		$header=frag.createElement('header'),
		$footer=frag.createElement('footer'),
		$body=d.body,	
		$contents=d.getElementById('contents');
		//
		//...
		//
		(b=>{
			const s=b.style,v=s.display;
			let e=$header;
			e.id='header';
			b.display='none';
			b.classList.remove('js-no');
			b.insertBefore(e,b.firstElementChild);
			e=$footer;
			e.id='footer';
			b.appendChild(e);
			s.display=v
		})($body);
		//--------------------------------------------------------------
		if(domIsReady.type===null||d.readyState==='complete'){
			docLoaded({target:d,type:null})
		}else{
			$body.classList.add('loading');
			onceWhenHappens(w,'load',docLoaded)
		}
	},
	docLoaded=docIsLoaded=>{
		c.log('document is: loaded %O',docIsLoaded);
		const d=docIsLoaded.target,
		$body=d.body,
		$bodyClassList=$body.classList;
		if(docIsLoaded.type!==null){
			$bodyClassList.replace('loading','loaded');
		}else{
			$bodyClassList.add('loaded');
		}
	};
	//
	if(d.readyState!=='complete'){onceWhenHappens(w,'DOMContentLoaded',domReady)}else{domReady({target:d,type:null})}
})(window);
