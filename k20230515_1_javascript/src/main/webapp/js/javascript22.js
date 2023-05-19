function searchID() {
	let doc = document.getElementById('test');
	let str = doc.innerHTML;
	doc.innerHTML = str + '<br/>getElementById() 함수는 DOM에서 id 속성을 탐색한다.';
	doc.style.backgroundColor = 'yellow'; 
}

function searchName() {
	let docs = document.getElementsByName('test');
	//console.log(docs);
	
/*	docs[0].value = '홍길동';
	docs[1].value = '임꺽정';
	docs[2].value = '장길산';*/
	
	const names = ['홍길동', '임꺽정', '장길산'];
	/*	
	for(let i=0; i<docs.length; i++) {
		docs[i].value = names[i];
	}
	*/
	
	/*
	let i = 0;
	for (let name of names) {
		docs[i++].value = name;
	}
	*/
	
	/*
	for(let i in names) {
		docs[i].value = names[i];
	}
	*/
	
	let i = 0;
/*	
	docs.forEach(function (doc) {
		doc.value = names[i++];
	})
	*/
	docs.forEach(doc => doc.value = names[i++]);
}

function searchTagName() {
	let docs = document.getElementsByTagName('p');
	for(let doc of docs) {
		doc.style.backgroundColor = 'hotpink';
	}
	
	let doc = document.getElementsByTagName('p')[2];
		doc.style.backgroundColor = 'skyblue';
}

function searchClass() {
	let docs = document.getElementsByClassName('test');
	for(let doc of docs) {
		doc.style.backgroundColor = 'dodgerblue';
	}
}

function searchCSSSelector() {
	//	querySelector(): css 선택자를 이용해서 첫번째 요소 1개를 찾는다. => id 탐색에 주로 사용된다.
	//	querySelectorAll(): querySelector()함수와 똑같이 css 선택자를 이용해서 찾지만, 차이점은 모든 요소를 찾는다.
	//	querySelector(), querySelectorAll() 함수의 인수로 id를 지정할 때는 '#'으로 시작하고, class를 지정할 때는 '.'으로 시작하고,
	//	태그는 아무것도 붙이지 않고 지정한다.
	
	//	id 속성값으로 탐색
	//	getElementById('id속성값'), querySelector('#id속성값')
	let doc = document.querySelector('#test');
	doc.innerHTML = 'querySelector() 함수를 이용한 선택';
	doc.style.color = 'red';
	doc.style.backgroundColor = 'skyblue';
	
	//	class 속성값으로 탐색
	//	getElementByClassName('class속성값'), querySelectorAll('.class속성값')
	let docs = document.querySelectorAll('.test');
	for (let doc of docs) {
		doc.style.color = 'yellow';
		doc.style.backgroundColor = 'black';
	}
	
	//	태그 이름으로 선택
	//	getElementByTagName('tag이름'), querySelectorAll('tag이름')
	docs = document.querySelectorAll('p');
	for (let doc of docs) {
		doc.style.color = 'green';
		doc.style.backgroundColor = 'tomato';
	}
}
























