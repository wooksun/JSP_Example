a = 100;
console.log('a: ' + a);

//	ECMA Script5부터 변수를 선언할 때 앞에 var를 붙여서 선언하기 시작했다.
var b = 200;
console.log('b: ' + b);
//	먼저 선언한 변수를 다시 선언할 수 있는 문제점이 있다.
var b = 'abcd';
console.log('b: ' + b);
//	ECMA Script6부터 변수를 선언할 때 앞에 let이나 const를 붙여서 선언하기 시작했다.
let c = 300;
console.log('c: ' + c);
//	let은 var와 달리 선언한 변수를 다시 선언하면 에러가 발생된다.
//	let c = 'abcd'; //에러 발생
c = 'abcd'; //변수의 값을 다시 할당하는 것은 가능하다.
console.log('c: ' + c);

const d = 400; //상수 선언 => 프로그램에서 값을 변경할 수 없다.
console.log('d: ' + d);

//	const도 let과 마찬가지로 선언한 변수를 다시 선언하면 에러가 발생된다.
//	const d = 'abcd'; //에러 발생
//	const로 선언한 변수는 상수이므로 프로그램에서 값을 변경하려 하면 에러가 발생된다.
d = 'abcd';//에러 발생
console.log('d: ' + d);




