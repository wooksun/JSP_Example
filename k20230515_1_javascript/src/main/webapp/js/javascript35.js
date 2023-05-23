function elementCreate() {
	//	element(요소)를 만들어 html 문서에 추가한다.
	//	createElement('태그이름'): 인수로 지정한 태그를 만든다.
	
	let div = document.createElement('div'); //<div></div>
	
	//	태그에 속성과 속성값을 추가한다.
	/*
	//	createAttribute('속성이름'): 태그에 넣어줄 인수로 지정한 속성을 만든다.
	let attr = document.createAttribute('style'); //style
	//	nodeValue로 속성에 속성값을 추가한다.
	attr.nodeValue = 'border: 2px solid blue'; //style='border: 2px solid blue'
	//	setAttributeNode('속성'): 태그에 속성을 추가한다.
	div.setAttributeNode(attr);
	*/
	
	//	setAttribute('속성이름', '속성값'): 태그에 속성을 추가한다.
	div.setAttribute('style', 'border: 2px solid red')
	
	div.innerHTML = '<marquee>div 태그 추가</marquee>'
	//	appendChild('태그 또는 문자열'): 태그의 맨 뒤에 태그 또는 문자열을 추가한다.
	document.body.appendChild(div);
}


































