function passwordCheck(obj) {
	//alert('passwordCheck() 실행');
	
	//	입력한 비밀번호가 8자 이상, 12자 이하인가 검사한다.
	/*
	let len = obj.password.value.trim().length;
	if(len < 8 || len > 12) {
		alert('비밀번호는 8자 이상, 12자 이하로 입력해야 합니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	//	영문자, 숫자, 특수문자가 각각 1개 이상씩 입력되었나 검사한다.
	let alphaCount = 0; // 영문자 개수 기억할 변수
	let numberCount = 0; // 숫자 개수 기억할 변수
	let etcCount = 0; // 특수문자 개수 기억할 변수
	//	입력된 비밀번호의 문자 개수만큼 반복하며 영문자, 숫자, 특수문자의 개수를 센다.
	const pw = obj.password.value.trim(); // 비밀번호 변수
	for (let i=0; i<len; i++) {
		if(pw.charAt(i) >= 'a' && pw.charAt(i) <= 'z' || pw.charAt(i) >= 'A' && pw.charAt(i) <= 'Z') {
			//	영문자 개수
			alphaCount++;
		}else if(pw.charAt(i) >= '0' && pw.charAt(i) <= '9') {
			//	숫자 개수
			numberCount++;
		} else {
			//	특수문자 개수 개수
			etcCount++;
		}
	}
	//onsole.log(`영문자: ${alphaCount}, 숫자: ${numberCount}, 특수문자:${etcCount}`);
	
	if(alphaCount == 0 || numberCount == 0 || etcCount == 0) {
		alert('비밀번호는 영문자, 숫자, 특수문자를 각각 1글자 이상 포함해야 합니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
 	*/
 	
 	const pw = obj.password.value.trim(); // 비밀번호 변수
 	
 	//	정규 표현식(정규식)을 사용한 영문자, 숫자, 특수문자가 각각 1개이상 입력되었고, 8자이상 12자 이하로 입력되었나 검사한다.
 	//	new RegExp('정규식패턴') => 자바스크립트 정규식 객체를 만든다.
 	//	. => 모든 문자 1글자를 대신한다. => 어떤 문자라도 1글자가 나와야 한다.
 	//	* => 모든 문자 0글자 이상을 대신한다. => 아무 문자가 안나와도 되고, 몇개가 나와도 상관없다.
 	//	+ => 모든 문자 1글자 이상을 대신한다. => 아무 문자나 1글자 이상 나와야 한다.
 	//	^ => 시작하는
 	//	$ => 끝나는
 	
 	//	글자수 제한
 	//const pattern = new RegExp('^.{8}$'); // 무조건 8자만 허용한다. => {8}은 반복횟수
 	//const pattern = new RegExp('^.{1,8}$'); // 무조건 8자 이내만 허용한다. => {1,8}은 앞이 최소 ,뒤가 최대(띄어쓰기 금지)
 	//const pattern = new RegExp('^.{8,}$'); // 무조건 8자 이상만 허용한다. => {8,}은 8글자부터 시작 ,뒤로는 제한 x
 	//const pattern = new RegExp('^.{8,12}$'); // 무조건 8자 이상, 12자 이하만 허용한다. => {8,12}은 8글자부터 시작 ,뒤로 12자까지
 	
 	//	숫자만 허용
 	//	[] => 허용 가능한 문자를 []안에 나열한다.
 	//const pattern = new RegExp('^[0123456789]+$'); // '+'를 안쓰면 딱 1글자만 검사한다. => 0,1,2,3,4,5,6,7,8,9까지
 	//const pattern = new RegExp('^[0-9]+$'); // '-'를 사용하면 범위를 지정할 수 있다. => 0~9까지
 	//	숫자 4글자만 허용한다. => {}가 사용되면 '+', '*'를 사용할 수 없다.
 	//const pattern = new RegExp('^[0-9]{4}$'); // 0~9까지 숫자만 4글자 허용
 	
 	//	영문자만 허용
 	//const pattern = new RegExp('^[A-Z]+$'); // 대문자만 허용한다
 	//const pattern = new RegExp('^[a-z]+$'); // 소문자만 허용한다
 	//const pattern = new RegExp('^[a-zA-Z]+$'); // 영문자만 허용한다
 	//const pattern = new RegExp('^[A-Za-z]+$'); // 영문자만 허용한다
 	
 	//	한글만 허용
 	//const pattern = new RegExp('^[ㄱ-힣]+$'); // ㄱ~ㅎ ㅏ~ㅣ까지
 	
 	//	지정한 특수문자만 허용
 	//const pattern = new RegExp('^[!@#$%^&]+$'); // 특수문자 !@#$%^& 만 허용
 	
 	//	영문자(대,소문자), 숫자, 특수문자(!@#$%^&)만 8자 이상, 12자 이하로 입력을 허용한다.
 	//const pattern = new RegExp('^[A-Za-z0-9!@#$%^&]{8,12}$'); // 소문자, 대문자 A~Z와 숫자 0~9, 특수문자 !@#$%^&까지 8자부터 12자까지
 	//const pattern = new RegExp('^(?=.*[0-9]+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[!@#$%^&]+)[a-zA-z0-9!@#$%^&]{8,12}$');
 	const pattern = new RegExp('^(?=.*[0-9]+)(?=.*[A-Za-z]+)(?=.*[!@#$%^&]+)[a-zA-z0-9!@#$%^&]{8,12}$');
 	
 	//	test() 함수는 인수로 지정된 문자열이 정규식 패턴에 만족하나 검사해서 만족하면 true, 만족하지 않으면 false를 리턴한다.
 	if(!pattern.test(pw)) {
		alert('비밀번호는 영문자, 숫자, 특수문자를 각각 1글자 이상 포함해야 합니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	 }
 	
	//	입력한 두개의 비밀번호가 같은가 검사한다.
	if(obj.password.value.trim() != obj.repassword.value.trim()) {
		alert('비밀번호가 일치하지 않습니다.');
		obj.password.value = '';
		obj.repassword.value = '';
		obj.password.focus();
		return false;
	}
	
	return true;
}























