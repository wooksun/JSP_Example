function numTest(num) {
	console.log(num);
	console.log(typeof num);
	
	console.log('123' + num); // 문자열 + 문자열 => 문자열 연결
	console.log(123 + num); // 숫자 + 문자열 => 문자열 연결
	console.log(num + 123); // 문자열 + 숫자 => 문자열 연결
	console.log(100 + 123); // 숫자 + 숫자 => 덧셈
	
	//	덧셈을 제외한 나머지 연산은 문자열과 숫자를 연산해도 결과가 숫자로 처리된다.
	console.log(num - 123);
	console.log(num * 123);
	console.log(num / 123);
	console.log(num % 123);
	//console.log(num ** 123);
	
	//	자바스크립트는 문자열과 문자열, 문자열과 숫자, 숫자와 문자열의 덧셈은 모두 문자열로 처리되므로 
	//	덧셈을 하기 위해서는 숫자로 변환한 후 연산을 해야한다.
	//	Number() 함수는 인수로 지정된 문자열을 숫자로 바꿔준다. => 정수, 실수를 구분하지 않는다.
	console.log(Number('123') + Number(num));
	console.log(Number('123') + Number(num));
	
	//	'100a'와 같이 인수로 지정된 문자열에 숫자로 변환할 수 없는 문자가 있을 경우, parseInt()함수나 parseFloat() 함수는
	//	변환시킬 수 있는데까지 변환을 하지만, Number() 함수는 숫자로 변환할 수 없는 문자열이 포함되면 NaN을 발생시킨다.
	console.log(Number('123a')); //NaN
	console.log(Number('3.14a')); //NaN
}

function numTest(int) {
	console.log(int);
	console.log(typeof int);
	console.log(parseInt (int)) + 100;
}

function numTest(float) {
	console.log(float);
	console.log(typeof float);
	console.log(parseFloat(float) + 100);
}





