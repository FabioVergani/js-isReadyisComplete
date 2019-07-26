	const onceWhen=(e,s,c)=>{
		const f=()=>{e.removeEventListener(s,g)},
		g=o=>{f();c(o)};
		e.addEventListener(s,g);
		return f
	};
