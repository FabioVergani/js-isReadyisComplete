const onceAt=(e,s,f)=>{
	let x=o=>{
		e.removeEventListener(s,x);
		x=null;
		f(o)
	};
	e.addEventListener(s,x)
},
onceReady=(w,f)=>{
	if('complete'!==w.document.readyState){
		onceAt(w,'load',f)
	}else{
		f(w)
	}
};

//...

onceReady(window,w=>{
	alert('ready')
});
