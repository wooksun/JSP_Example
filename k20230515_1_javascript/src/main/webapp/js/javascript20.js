function requestID() {
	//alert('온로드');
	//opener: 현재 창을 띄운 부모 창을 의미한다.
	
	//	부모 창에서 자식 창에 사용 할 데이터를 얻어온다.
	let parentID = opener.document.getElementById('parentID').value;
	console.log(parentID);
	//	부모 창에서 얻어온 데이터를 자식 창의 객체에 넣어준다.
	document.getElementById('childID').value = parentID;
}
































