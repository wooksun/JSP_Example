/*
	함수의 형식 
	function 함수이름([인수, ...]) {
		함수가 실행할 문장
		...;
		[return 값;]
	}
*/

function printHello() {
	console.log('Hello');
};
printHello(); //함수 호출
console.log('=========================');

//	자바스크립트의 함수는 오버로딩을 지원하지 않고 인수의 개수가 달라도 상관없다.
function log(message) {
	console.log(message);
};
//	자바스크립트는 같은 이름으로 함수를 다시 선언하면 앞에 선언한 함수는 무시된다.
function log() {
	console.log('Hi~~~1');
}
log('Hi~~~2');
log();
console.log('=========================');

//	함수의 인수로 객체를 받을 수 있다.
//	function: 함수 선언
function setName(obj) {
	obj.name = '우기';
}
const choi = { //객체 생성
	name:'최진욱',
	age:20
};
console.log(choi);
console.log(choi.name);
console.log(choi.age);

setName(choi); //객체 넘기기, const choi -> function setName(obj)로
console.log(choi);
console.log('=========================');

//	디폴트 인수 => ES6부터 추가
//	디폴트 인수를 사용하지 않으면, 인수가 넘어오면 넘어온 값으로 함수를 실행하지만, 인수가 넘어오지 않으면 undefined로 처리된다.

//	ES5의 경우
function showMessage(message, from) {
	if(from == undefined) {
		from = '수신인 없음';
	}
	console.log(`ES5: ${message} by ${from}`);
};
showMessage('hi~', 'choi'); // ES5: hi~ by choi
showMessage('hi~'); // ES5: hi~ by undefined, from에 undefined가 뜨지만, if문 처리로 ES5: hi~ by 수신인 없음 으로 출력
console.log('=========================');

//	ES6
//	디폴트 인수는 기본값을 가지는 인수를 말한다.
//	from에 데이터가 넘어오면 넘어온 데이터로 함수를 실행하고 데이터 가 넘어오지 않으면 디폴트 인수로 지정된 '수신인없음'을 from에 넣고 함수를 실행.
function showMessage2(message, from = '수신인 없음') {
	console.log(`ES6: ${message} by ${from}`);
}
showMessage2('hi~', 'choi'); //ES6: hi~ by choi
showMessage2('hi~'); //ES6: hi~ by 수신인 없음
console.log('=========================');

//	rest => 가변 인자 => ES6에서 추가
//	가변 인자는 '...'을 앞에 붙여서 선언하면 배열로 만들어진다.
function printAll(...args) {
	//console.log(typeof args);
	//console.log('배열의 크기: ' + args.length);
	//console.log('배열에 저장된 값: ' + args);
	
	//일반 for
	/*
	for (let i=0; i<args.length; i++) {
		console.log(args[i]);
		
	}
	*/
	
	//향상된 for
	//향상된 for는 배열의 첫번째 인덱스의 값을 변수에 넣고 반복을 시작하고, 마지막 인덱스의 값을 변수에 넣어 반복한 후 종료한다.
	for (let arg of args) { // 자바는 (int arg : args)
		console.log(arg);
	}
};
printAll('최진욱');
console.log('=========================');
printAll('최진욱', '김문선');
console.log('=========================');
printAll('최진욱', '김문선','아지');
console.log('=========================');
printAll('최진욱', '김문선','아지','랑이');
console.log('=========================');


//	익명 함수
//	자바스크립트는 변수에 함수를 할당할 수 있으므로 익명으로 만든 함수를 변수에 할당해서 사용(실행)할 수 있다. => 1급 함수
const print = function () { //변수에 익명 함수 할당
	console.log('print');
};

//	함수가 할당된 변수를 함수명 처럼 사용한다.
print();

//	함수가 할당된 변수를 다른 변수에 할당하면 다른 변수도 함수처럼 사용할 수 있다.
const printAgain = print;
printAgain();

//	변수에는 꼭 익명 함수만 할당할 수 있는 것이 아니고 일반 함수도 할당할 수 있다.
function sum(a, b) { //sum이라는 함수 명이 있기에 일반 함수
	return a + b;
};
console.log(sum(5, 8));
const sumAgain = sum; //변수에 일반 함수 할당
console.log(sumAgain(6, 2));
console.log('=========================');

//	callback 함수
//	콜백 함수는 코드를 통해서 명시적으로 호출되는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에
//	도달했을 때 시스템에서 호출(자동으로 실행)하는 함수를 말한다. => 익명함수가 콜백을 구현할 때 주로 사용된다.

//	printYes, printNo 변수에 익명 함수를 등록한다.
const printYes = function () {
	console.log('Yes');
};
const printNo = function () {
	console.log('No');
};

function quiz(answer, yes, no) {
	if (answer == '사랑해') {
		yes();
	} else {
		no();
	}
};

// 함수를 호출할 때 처리할 데이터와 그 데이터를 처리할 함수까지 전달한다.
quiz('사랑해', printYes, printNo);
quiz('안사랑해', printYes, printNo);
console.log('=========================');

function quiz2(answer, yes, no) {
	if (answer == '사랑해') {
		yes();
	} else {
		no();
	}
};

 quiz2('사랑해', function() {
	 console.log('Yes!');
 }, function() {
	 console.log('No!');
 })
 
 quiz2('미워해', () => console.log('Yes!'), () => console.log('No!'));
console.log('=========================');
 
 //	화살표(arrow) 함수
 //	일반 익명 함수
 const simplePrint = function() {
	 console.log('일반 익명 함수 simplePrint() 실행');
 };
 simplePrint();
 
//	화살표 함수
//	function을 사용하지 않고 ')'와 '{' 사이에 화살표(=>)를 입력한다. function() { 에서 () => { 
 const simplePrint2 = () => { 
	 console.log('화살표 함수 simplePrint2() 실행');
 };
 simplePrint2();

//	화살표 함수가 실행할 문장이 1문장일 때 {}를 생략할 수 있다.
 const simplePrint3 = () => console.log('화살표 함수 simplePrint3() 실행'); //{} 없이 =>로
 simplePrint3();
console.log('=========================');

const whoAreYou = function (name) {
	console.log(name + '님 안녕하세요');
};
whoAreYou('최진욱');

const whoAreYou2 = (name) => {
	console.log(name + '님 안녕하세요');
};
whoAreYou2('김문선');

const whoAreYou3 = (name) => console.log(name + '님 안녕하세요');
whoAreYou3('아지랑이');

//	화살표 함수의 인수가 1개일 경우에는 ()를 생략할 수 있다.
const whoAreYou4 = name => console.log(name + '님 안녕하세요');
whoAreYou4('부모');
console.log('=========================');

const add = function(a, b) {
	return a + b;
};
console.log(add(5, 8));

const add2 = (a, b) => {
	return a + b;
};
console.log(add2(5, 8));

//	함수가 실행하는 문장이 return 1문장만 있을 경우 {}를 생략하면 return도 반드시 생략해야 한다.
const add3 = (a, b) => a + b;
console.log(add3(5, 8));
console.log('=========================');

//	자동 실행 함수
//	자동 실행 함수는 함수 전체를 ()로 묶고, 마지막에 ()를 붙여준다.
(
	function hello() {
		console.log('자동 실행');
	}
)();
//	hello(); //에러 발생
//	자동 실행 함수는 일반 함수처럼 실행하면 에러가 발생된다.























