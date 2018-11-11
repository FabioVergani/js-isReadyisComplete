(w=>{
	const c=w.console,
	d=w.document,
	once=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	ƒ=(d,as)=>{
		c.log('%O %s',w,as?'ready':'loaded');
	};
	if(d.readyState!=='complete'){once(w,'load',o=>{ƒ(o.target,false)})}else{ƒ(d,true)}
})(window);
