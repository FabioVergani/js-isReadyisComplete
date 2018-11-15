(w=>{
	const c=w.console,
	d=w.document,
	frag=w.Object.defineProperty(d.createDocumentFragment(),'createElement',{value:s=>frag.appendChild(d.createElement(s))}),
	onceWhenHappens=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	domReady=domIsReady=>{
		c.log('dom is: ready %O',domIsReady);
		const d=domIsReady.target,
		$body=d.body,	
		$bodyClassList=$body.classList,
		hasHeader=$bodyClassList.contains('header-no')!==true,
		hasFooter=$bodyClassList.contains('footer-no')!==true,
		$contents=d.getElementById('contents');
		//
		let $BackToTop=null,
		$TopAnchor=null;

		//--------------------------
		if(w.screen.width>1024){
			if($bodyClassList.contains('prevent-mousewheel-zoom')){
				c.info('preventing mousewheel-zoom');
				d.addEventListener('mousewheel',o=>{if(o.ctrlKey===true){o.preventDefault()}})
			};
		};

		//-------------------------------------------
		if($bodyClassList.contains('listen-scroll')){
			const debounce=(f,i=300)=>{let e;return o=>{w.clearTimeout(e);e=w.setTimeout(()=>{f(o)},i)}};
			let scrollCallBack=null;
			if($bodyClassList.contains('detect-scroll-ending')){
				with($BackToTop=frag.createElement('a')){
					id='back-to-top';
					addEventListener('click',o=>{
						o.preventDefault();
						const d=o.target.ownerDocument,t=$TopAnchor;
						let e;
						if(t!==null && (e=d.getElementById(t))!==null){e.scrollIntoView(true)}else{(e=d.body).scrollTo({top:0,left:e.scrollLeft,behavior:'smooth'})}
					})
				};
				let yOld=w.scrollY<<0,upCallBack=null,downCallBack=null;
				scrollCallBack=o=>{
					const y=$body.scrollTop<<0,
					ScrollingUpFromBottom=()=>{$bodyClassList.remove('reached-bottom')},
					ScrollingDownFromTop=()=>{$bodyClassList.remove('reached-top')};
					if(y!==0){
						if(y!==yOld){
							if(y>yOld){
								if(($body.scrollHeight-(1+y+$body.clientHeight))>0){
									if(downCallBack!==null){downCallBack();downCallBack=null};
									//c.info('scrolled: down')
								}else{
									with($bodyClassList){remove('reached-top');add('reached-bottom')};
									upCallBack=ScrollingUpFromBottom;
									//c.info('reached: bottom')
								}
							}else{
								if(upCallBack!==null){upCallBack();upCallBack=null};
								//c.info('scrolled: up');
							}
						}
					}else{
						with($bodyClassList){remove('reached-bottom');add('reached-top')};
						downCallBack=ScrollingDownFromTop;
						//c.info('reached: top')
					};
					yOld=y
				};
			};
			if(scrollCallBack!==null){d.body.addEventListener('scroll',debounce(scrollCallBack))}
		};


		//more?


		//-------------------------------------------------------------------
		if(hasHeader||hasFooter){
			const node=$body.firstElementChild;
			let $header,$footer;
			if(hasFooter){
				($footer=frag.createElement('footer')).id='footer';
				//link?
			};
			if(hasHeader){
				($header=frag.createElement('header')).id='header';
				with($header.appendChild(d.createElement('img'))){
					id='logo';
					alt='milfadore.tk';
					src='./res/image/skin/logo.svg';
					addEventListener('click',o=>{o.target.ownerDocument.defaultView.location='./home.htm'})
				}
				$body.insertBefore($header,node);
				if(hasFooter){$header.after($footer)}
			}else{
				if(hasFooter){node.insertBefore($footer,e)}
			};
			if($BackToTop!==null){$body.appendChild($BackToTop)}
		};
		//--------------------------------------------------------------
		if(domIsReady.type===null||d.readyState==='complete'){
			docLoaded({target:d,type:null})
		}else{
			$bodyClassList.add('loading');
			onceWhenHappens(w,'load',docLoaded)
		};
		$bodyClassList.remove('js-no');$TopAnchor='footer'//<<<<<<<<<<<<<<
	},
	docLoaded=docIsLoaded=>{
		c.log('document is: loaded %O',docIsLoaded);
		const d=docIsLoaded.target,$body=d.body,$bodyClassList=$body.classList;
		if(docIsLoaded.type!==null){
			$bodyClassList.replace('loading','loaded');
		}else{
			$bodyClassList.add('loaded');
		}
	};
	c.clear();
	if(d.readyState!=='complete'){onceWhenHappens(w,'DOMContentLoaded',domReady)}else{domReady({target:d,type:null})}
})(window);
