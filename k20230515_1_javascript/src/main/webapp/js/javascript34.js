function searchParent() {
	let child = document.getElementsByTagName('p')[0];
	console.log(child);
	
	//	parentNode는 탐색된 요소의 부모 요소를 탐색한다.
	let parentDiv = child.parentNode;
	console.log(parentDiv);
	parentDiv.style.backgroundColor = 'hotpink';
	
	//	nodeName은 탐색된 요소의 태그 이름을 얻어온다.
	console.log(parentDiv.nodeName);
}

function searchChild() {
	let parent = document.getElementsByTagName('div')[0];
	console.log(parent);
	/*	
	//	children은 탐색된 요소의 자식 요소(태그만)를 탐색한다.
	let childs = parent.children;
	console.log(childs);
	console.log(childs[0]);
	console.log(childs[1]);
	console.log(childs[2]);
	
	childs[0].style.backgroundColor = 'skyblue';
	childs[1].style.backgroundColor = 'yellowgreen';
	childs[2].style.backgroundColor = 'tomato';
	*/
	
	//	childNodes은 탐색된 요소의 자식 요소(태그 및 텍스트)를 탐색한다.
	let childs = parent.childNodes;
	console.log(childs);
	console.log(childs[0]); //텍스트1
	console.log(childs[1]); //p
	console.log(childs[2]);	//텍스트2
	console.log(childs[3]); //p
	console.log(childs[4]);	//텍스트3
	console.log(childs[5]); //p
	console.log(childs[6]);	//텍스트4
	
	childs[1].style.backgroundColor = 'skyblue';
	childs[3].style.backgroundColor = 'yellowgreen';
	childs[5].style.backgroundColor = 'tomato';
}

function testSearch() {
	/* //강사님 코드
	let test1 = document.getElementsByTagName('p')[3];
	console.log(test1);
	let div = test1.parentNode;
	console.log(div);
	div.style.backgroundColor = 'skyblue';
	*/
	
	//내 코드
	let test1 = document.getElementsByTagName('div')[2];
	test1.style.backgroundColor = 'skyblue';
	
	//강사님 코드
	let test4 = document.getElementsByTagName('div')[3];
	console.log(test4);
	let childs = test4.childNodes;
	console.log(childs);
	console.log(childs[3]);
	childs[3].style.fontSize = '30px';
	
	//내 코드
	//let test4 = document.getElementsByTagName('div')[3];
	//test4.style.fontSize= '20px';
}




























