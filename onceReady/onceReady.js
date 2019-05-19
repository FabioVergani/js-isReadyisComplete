/*
f=w=>{
	console.dir(w);
	alert('ready')
};
//====================================
if('complete'!==w.document.readyState){
	const g=o=>{
		w.removeEventListener('load',g);
		f(o)
	};
	w.addEventListener('load',g)
}else{
	f(w)
}

*/


const onceAt=(e,s,f)=>{
	let x=o=>{
		e.removeEventListener(s,x);
		x=null;
		f(o)
	};
	e.addEventListener(s,x)
};

const onceReady=(w,f)=>{
	if('complete'!==w.document.readyState){
		onceAt(w,'load',f)
	}else{
		f(w)
	}
};
//...
onceReady(window,o=>{
console.dir(o)
	alert('ready')
})

