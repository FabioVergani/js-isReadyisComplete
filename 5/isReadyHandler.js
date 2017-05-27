(function(window){'use strict';
 function at(a,b,c,d){function f(x){e();c(x)}function e(){a.removeEventListener(b,f)}e();a.addEventListener(b,f,d)}
 function swapClass(a,b,c){var d=a.classList,e={add:function(a){d.add(a);return e},remove:function(a){d.remove(a);return e}};d.remove(b);d.add(c);return e}
 //
 var w=window, wd=w.document, wdE=wd.documentElement,
 BindCall=(function(e){return e.bind.bind(e.call)})(w.Function.prototype), swapRootClass=BindCall(swapClass,null,wdE),
 isReadyHandler=function(isReadyEvent){
	var wd=isReadyEvent.target, w=wd.defaultView;
	//‹‹‹

	//‹‹‹
	return isReadyEvent;
 },isLoadHandler=function(isLoadEvent){
	var wd=isLoadEvent.target, w=wd.defaultView;
	//‹‹‹
	//‹‹‹
	swapRootClass('loading','loaded').remove('ready');
 };
 swapRootClass('js-no','js').remove('ready','loaded').add('loading');
 if(wd.readyState!=='complete'){at(w,'DOMContentLoaded',isReadyHandler);at(w,'load',isLoadHandler)}else{isLoadHandler(isReadyHandler({target:wd}))};
 isReadyHandler=isLoadHandler=null;
})(window);
//END.
