"use strict";
var app = app || {};

var app = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾을 수 없습니다.'
	let  _ ;

	let run = x =>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Session(x));
			onCreate();
			
		})}	
		let init=()=>{
			_ = $.ctx();


			
			
		}
		let onCreate=()=>{
			init();
		alert('가람')
		}

	return{run}
	
})();