function alertTest() {
	//alert('메시지');
	alert('alert가 띄우는 단순한 메시지를 출력하는 대화창');
	// 확인 버튼만 있는 대화창
}

function confirmTest() {
	//confirm('메시지');
	// 확인 버튼과 취소 버튼이 있는 대화창
	let result = confirm('(confirm) 배경색을 바꾸시겠습니까?');
	//console.log(result);
	//	확인 버튼을 클릭하면 true, 취소 버튼을 클릭하면 false가 return 된다. 
	if (result) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	}
}

function promptTest() {
	//prompt('메시지');
	//prompt('메시지', '안내메시지');
	//	확인버튼을 클릭하면 입력한 메시지, 취소버튼을 클릭하면 null이 리턴된다.
	//	return되는 데이터의 타입은 무조건 string 타입으로 리턴된다.
	let menu = prompt('점심은 무엇을 먹을까요?\n(1.짜장면, 2.양장피, 3.팔보채)','1, 2, 3번 중 택1');
	console.log(menu);
	console.log(typeof menu);
	
	switch (menu) {
		case '1':
			console.log('짜장면');
			break;
		case '2':
			console.log('양장피');
			break;
		case '3':
			console.log('팔보채');
			break;
		default:
			console.log('짜장면, 양장피, 팔보채 중에서 선택하세요.');
			break;
	}
	
}



























