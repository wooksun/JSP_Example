//	일급 객체(first-class object)
//	컴퓨터 프로그래밍 언어 디자인에서 일급 객체란, 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 의미한다.
//	함수를 인수로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원할 때 일급 객체라 한다.

//	아래 3가지 조건을 충족한다면 일급 객체라 할 수 있다.
//	1. 변수에 함수를 할당할 수 있어야 한다.
//	2. 함수의 인수로 함수를 넘길 수 있어야 한다.
//	3. 함수의 리턴값으로 함수를 리턴할 수 있어야 한다.

//	javascript filter 함수 구현하기
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/*
function callback(element) {
	console.log(element);
}

words.filter(callback);
*/

//	익명함수
/*
words.filter(function (element) {
	console.log(element);
});
*/

//	화살표 함수
words.filter(element => console.log(element));
console.log('1. =====================================');

function callback2(element) {
	//console.log(element);
	if (element.length > 6) {
		return element;
	}
}

let newWords = words.filter(callback2);
console.log(newWords);
console.log('2. =====================================');

function callback3(element) {
	if (element.length > 6) {
		return true;
	} else {
		return false;
	}
}

newWords = words.filter(callback3);
console.log(newWords);
console.log('3. =====================================');

function callback4(element) {
	//	element.length > 6 실행 자체가 논리값이므로 바로 리턴하면 된다.
	return element.length > 6;
}

newWords = words.filter(callback4);
console.log(newWords);
console.log('4. =====================================');

//	filter 함수의 인수로 익명함수를 바로 넣어준다.
newWords = words.filter(function (element) {
	return element.length > 6;
});
console.log(newWords);
console.log('5. =====================================');

//	filter 함수의 인수로 익명함수를 화살표 함수로 바꿔준다.
newWords = words.filter((element) => {
	return element.length > 6;
});
console.log(newWords);
console.log('6. =====================================');

//	화살표 함수를 생략형으로 변경한다.
newWords = words.filter(element => element.length > 6);
console.log(newWords);
console.log('7. =====================================');

function myFilter(origin, callback) {
	//	조건에 맞는 결과를 기억할 빈 배열을 선언한다.
	let result = [];
	for(let i=0; i<origin.length; i++) {
		//	원본 데이터가 저장된 배열의 각 요소를 하나씪 꺼내서 변수에 저장한다.
		let current = origin[i];
		//	callback 함수의 조건에 만족하는 요소를 배열에 추가한다.
		if (callback(current)) {
			result.push(current);
		}
	}
	//	조건에 맞는 결과를 저장한 배열을 리턴한다.
	return result;
}

newWords = myFilter(words, word => word.length > 6);
console.log(newWords);
console.log('8. =====================================');



















