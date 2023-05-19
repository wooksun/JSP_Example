let ids = ['aaa', 'bbb', 'ccc', 'ddd'];

function confirmChk() {
	//	중복 검사 할 아이디를 얻어온다.
	let id = document.getElementById('id').value.trim();
	//console.log(id);
	
	//	아이디 중복 검사 결과 메시지를 출력할 div 태그를 얻어온다.
	let div = document.getElementsByTagName('div')[0];
	//div.innerHTML = id;
	
	//	입력한 아이디가 아이디 목록에 존재하는가 검색한다.
	//	indexOf() 함수는 인수로 지정된 데이터가 배열의 몇번째 index에 위치하나 return한다.
	//	데이터가 있으면 데이터가 위치한 index를 return하고, 데이터가 없으면 -1을 return한다.
	if (id.length == 0) {
		div.innerHTML = '<br/><b style="color: red;">중복 검사할 아이디를 입력하세요.</b>';
	} else if(ids.indexOf(id) >= 0) {
		div.innerHTML = '<br/><b><span style="color: red;">' + id + '</span>는(은) 사용 할 수 없는 아이디 입니다.</b>';
	} else {
		div.innerHTML = '<br/><b><span style="color: red;">' + id + '</span>는(은) 사용 할 수 있는 아이디 입니다.</b>&nbsp;' +
		'<input type="button" value="사용하기" onclick="insertID(\'' + id + '\')"/>';
		//	자바스크립트 함수는 저장된 문자열을 호출하는 함수의 인수로 전달하려면, 변수명만 사용하면 안된다. => insertID(id)
		//	변수명만 사용하면 변수에 저장된 데이터를 문자열로 인식하는 것이 아니고, 변수로 인식해서 변수가 정의되지 않았다는 에러가 발생된다.
		
		//	id라는 변수에 'choi'가 저장되어 있을 때 id라는 변수를 함수로 전달하면 'choi'라는 문자열로 인식하는 것이 아니고,
		//	'choi'라는 변수로 인식한다. 
		//	변수에 저장된 문자열을 함수의 인수로 전달하려면 변수 이름 앞뒤에 따옴표를 붙여서 전달해야 한다.
		//	큰따옴표와 작은따옴표가 모두 사용된 상태일 경우 또 따옴표를 찍어야 한다면 \" 또는 /'를 사용해야 한다. -> insertID(\'id\'), (\"id\")
	}
	
	//	아이디를 입력하지 않았거나, 중복되는 아이디일 경우 아이디를 다시 입력하도록 지우고, 포커스를 이동시킨다.
	document.getElementById('id').value = '';
	document.getElementById('id').focus();
}

function insertID(id) {
	//console.log(id);
	//	중복 검사를 통과한 아이디를 부모 창으로 넘기고, 비밀번호에 포커스를 위치시킨다.
	opener.document.getElementsByName('id')[0].value = id;
	//	focus(): 특정 컨트롤로 포커스를 이동시킨다.
	opener.document.getElementsByName('password')[0].focus();
	
	//	중복검사 창을 닫는다.
	self.close();
}
































