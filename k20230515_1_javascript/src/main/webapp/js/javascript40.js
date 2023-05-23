function tableAdd() {
	//	데이터가 입력된 form을 얻어와서 form에 입력된 데이터를 배열에 저장한다.
	//let form = document.getElementsByTagName('form')[0];
	//let form = document.querySelectorAll('form')[0];
	//	forms: 현재 문서의 form을 배열 형태로 저장하고 있는 자바스크립트 내장 객체
	let form = document.forms[0];
	//console.log(form);
	
	//	form객체가저장된변수.name속성값.value: form에서 지정된 name 속성을 가지는 요소의 입력된 값을 얻어올 수 있다.
	//console.log('id: ' + form.id.value);
	//console.log('password: ' + form.password.value);
	//console.log('address: ' + form.address.value);
	//console.log('phoneNo: ' + form.phoneNo.value);
	
	let values = [form.id.value, form.password.value, form.address.value, form.phoneNo.value];
	//console.log(values);
	
	//	form에 데이터가 모두 입력되었나 확인한다.
	for (let i=0; i<values.length; i++) {
		let value = values[i];
		if(value == null || value.trim() == '' || value == undefined){
			switch(i) {
				case 0:
					alert('아이디를 입력하세요.');
					//	아이디가 입력되지 않았으므로 아이디 텍스트 상자의 내용을 지우고, 포커스를 위치시킨다.
					form.id.value = '';
					form.id.focus();
					//	테이블에 추가할 아이디가 입력되지 않았으므로 tableAdd() 함수를 종료한다.
					return;
				case 1:
					alert('비밀번호를 입력하세요.');
					form.password.value = '';
					form.password.focus();
					return;
				case 2:
					alert('주소를 입력하세요.');
					form.address.value = '';
					form.address.focus();
					return;
				case 3:
					alert('전화번호를 입력하세요.');
					form.phoneNo.value = '';
					form.phoneNo.focus();
					return;
			}
		}
	}
	//	배열에 저장된 데이터를 id 속성이 table인 테이블에 추가한다.
	
	//	테이블에 데이터를 추가한 후 다음 데이터를 입력받기 위해 텍스트 상자의 내용을 모두 제거한다.
	form.id.value = '';
	form.password.value = '';
	form.address.value = '';
	form.phoneNo.value = '';
	
	//	아이디 텍스트 상자로 포커스를 이동시킨다.
	form.id.focus();
}



































