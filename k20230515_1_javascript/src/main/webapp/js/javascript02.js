//	변수(variable)
//	변수가 var, let, const로 선언되지 않으면 에러를 발생시킨다.
'use strict';  //ECMA Script5에서 추가

//	변수의 타입
//	기본(원시, primitive type) 자료형
//		=> number(숫자), string(문자열), boolean(논리), null, undefined, symbol(ES6)
//	object(객체), box container
//	function(함수) => 함수도 변수에 할당이 가능하다.
//				   => 함수의 인수로 함수를 전달할 수 있고, 함수의 실행 결과로 함수를 리턴할 수 있다.
//				   => 1급 함수

// age = 19; //'use strict';에 의해서 에러가 발생된다.
// var age = 19; // 변수 선언시 var를 사용했으므로 use strict에 의해서 에러가 발생되지 않는다.
// var age;
console.log('age: ' + age); //undefined

//	var => ES5
// 	호이스팅(variable hoisting)
//	var를 사용해서 선언한 변수는 프로그램 어디에서 선언하던지 변수 선언만 항상 맨 위로 끌어올려진다.
//	변수를 선언만하고 값을 할당하지 않으면 undefined가 된다.

console.log('age: ' + age); //undefined
var age = 100;
console.log('age: ' + age); //100
var age = '열살'; //var는 같은 이름의 변수를 다시 선언할 수 있다.
console.log('age: ' + age); //열살
console.log('==================================='); 


//	var는 block scope를 사용하지 않고, function scope를 사용한다. => 유연성
//	block scope: 변수가 선언된 { }블록 내부에서만 사용할 수 있다. => let, const
//	function scope: 변수가 선언된 함수에서만 사용할 수 있다. => var
//	block scope는 변수가 선언된 { } 블록 밖으로 나가면 소멸되고, function scope는 변수가 선언된 함수가 종료되면 변수가 소멸된다.

//	let => ES6
let globalName = '장길산';
{
	let name = '홍길동';
	console.log('name: ' + name); //홍길동
	//let name = '임꺽정'; // 에러, let은 같은 이름의 변수를 다시 선언할 수 없다.
	name = '임꺽정'; //선언된 변수에 값을 할당할 수 있다. const는 할당할 수 없다.
	console.log('name: ' + name); //임꺽정
	console.log('globalName: ' + globalName); //장길산
}
console.log('name: ' + name);//아무런 값도 출력되지 않는다.
console.log('globalName: ' + globalName);//아무런 값도 출력되지 않는다.
console.log('===================================');

//	상수(constant)
//	선언 시 값을 할당한 다음 값을 변경할 수 없는 데이터 타입 => 보안성
//const maxNumber; //상수는 최초 선언 시 값을 할당해야 하므로 에러가 발생된다.
const maxNumber = 100; //상수는 최초 선언 시 값을 반드시 할당해야 한다.
console.log('maxNumber: ' + maxNumber); //100
//maxNumber = 200; //상수로 선언한 변수에 값을 할당하려 했으므로 에러가 발생.
console.log('===================================');

//	template: `(그레이브)를 사용하고, 출력할 데이터는 ${ ~ } 사이에 적는다.
let count = 17.5;
const size = true;
//	typeof 명령으로 변수의 자료형을 확인할 수 있다.
console.log('value: ' + count + ', type: ' + typeof count); //일반 따옴표를 이용, 17.5, number
console.log(`value: ${count}, type: ${typeof count}`); // `(그레이브)를 이용, 17.5, number
console.log(`value: ${size}, type: ${typeof size}`); // `(그레이브)를 이용, true, boolean
console.log('===================================');

//	자바스크립트는 나눗셈을 0으로 하면 결과가 infinity가 된다.
const infinity = 1 / 0;
console.log(`value: ${infinity}, type: ${typeof infinity}`); // `(그레이브)를 이용
console.negativeInfinity = -1 / 0;
console.log(`value: ${negativeInfinity}, type: ${typeof negativeInfinity}`); // `(그레이브)를 이용
//	자바스크립트는 문자열을 나누면 결과가 Nan이 된다.
const nan = 'Not A Number' / 2;
console.log(`value: ${nan}, type: ${typeof nan}`); // `(그레이브)를 이용
console.log('===================================');






