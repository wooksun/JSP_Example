//	'+': 문자열 연결 연산자
console.log("'my' + 'cat' = " + 'my' + 'cat');
console.log("'5' + 2 = " + '5' + 2);
//	string literal
console.log('string literal: 1 + 2 = ' + 1 + 2);
console.log('string literal: 1 + 2 = ${1 + 2}');
console.log(`string literal: 1 + 2 = ${1 + 2}`); //${ ~ }를 사용하려면 `(그레이브)를 사용해야 한다.
console.log('=================================');

//	산술 연산자
//	'+'을 제외한 나머지 산술 연산자(-, *, /, %)는 문자와 숫자를 연산하면 숫자로 계산한다.
console.log("'5' + 2 = " + '5' + 2); //덧셈은 문자열 연결
console.log("'5' + 2 = " + (parseInt('5') + 2)); //7, parseInt() => 정수화 함수
console.log('5' - 2); //3
console.log("'5' + 2 = " + '5' - 2); //Nan
console.log("'5' - 2 = " + ('5' - 2)); //3
console.log("'5' * 2 = " + ('5' * 2)); //10
console.log("'5' / 2 = " + ('5' / 2)); //2.5, 정수와 정수의 연산도 결과는 실수가 나온다.
console.log('=================================');


console.log("'5' / 2 = " + Math.ceil('5' / 2)); //3, ceil => 올림함수
console.log("'5' / 2 = " + Math.floor('5' / 2)); //2, floor => 내림함수
console.log("'5' / 2 = " + Math.round('5' / 2)); //3, round => 반올림함수
console.log("'5' / 2 = " + parseInt('5' / 2)); 
console.log('=================================');

console.log("'5' % 2 = " + '5' % 2); //1
//console.log("'5' ** 2 = " + '5' ** 2); //25, 거듭제곱 연산자. (5x5)
console.log("'5' ** 2 = " + Math.pow('5', 2)); //25, pow() => 거듭제곱 함수
//console.log("'5' ** 2 = " + '5' ** 0.5); //2.23606797749979, 루트 5
console.log("'5' ** 0.5 = " + Math.sqrt('5')); //2.23606797749979, sqrt() => 제곱근 함수
console.log('=================================');


//	증감연산자
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counterL ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counterL ${counter}`);
console.log('=================================');

//	대입연산자
let x = 6;
let y = 3;
console.log(`x += y => x: ${x += y}`);
console.log(`x -= y => x: ${x -= y}`);
console.log(`x *= y => x: ${x *= y}`);
console.log(`x /= y => x: ${x /= y}`);
console.log(`x %= y => x: ${x %= y}`);
console.log('=================================');

//	관계연산자
//	관계연산자도 숫자와 문자를 비교하면 숫자로 비교한다.
console.log(`10 < '6' = ${10 < '6'}`);
console.log(`10 < '6' = ${10 <= '6'}`);
console.log(`10 > '6' = ${10 > '6'}`);
console.log(`10 >= '6' = ${10 >= '6'}`);
console.log(`10 == '6' = ${10 == '6'}`);
console.log(`10 != '6' = ${10 != '6'}`);

//	자바스크립트는 '===', '!==' 연산자가 있다.
//	'=='나 '!='는 데이터 타입을 구분하지 않고, 값만 비교한다. => 문자도 숫자로 비교한다.
//	'==='와 '!=='는 데이터 타입과 값을 비교한다.
console.log(`10 == 10 = ${10 == 10}`); //true
console.log(`10 == '10' = ${10 == '10'}`); //true
console.log(`10 === '10' = ${10 === '10'}`); //false
console.log('=================================');

//	논리연산자(and or not)
console.log(`true && true = ${true && true}`);
console.log(`true && false = ${true && false}`);
console.log(`false && true = ${false && true}`);
console.log(`false && false = ${false && false}`);

console.log(`true || true = ${true || true}`);
console.log(`true || false = ${true || false}`);
console.log(`false|| true = ${false || true}`);
console.log(`false || false = ${false || false}`);

console.log(`!true = ${true}`);
console.log(`!false = ${false}`);

//	자바스크립트는 0을 제외한 모든 숫자를 true로, 0을 거짓으로 취급한다.
console.log(`!1 = ${!1}`);
console.log(`!0 = ${!0}`);
console.log(`!!3 = ${!!3}`);












