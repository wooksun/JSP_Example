//	배열에 저장된 모든 데이터의 합계
console.log('======================= 기존 방식 =====================');
const numbers = [1,2,3,4,5];

let sum = 0;
for(let i=0; i<numbers.length; i++) {
	sum += numbers[i];
}
console.log(sum);

sum = 0;
for(let number of numbers) {
	sum += number;
}
console.log(sum);

sum = 0;
for(let i in numbers) {
	sum += numbers[i];
}
console.log(sum);
console.log('======================= for() =====================');

sum = 0;
function total(n) {
	sum += n;
}
numbers.forEach(total);
console.log(sum);

sum = 0;
numbers.forEach(function (n) {
	sum += n;
});
console.log(sum);

sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);
console.log('======================= forEach() =====================');
console.log('======================= 새로운 방식 =====================');

//	reduce(): 인수로 지정된 함수를 배열에 저장된 데이터를 1개씩 전달하며 반복해서 실행
//	최초 실행 시, accumulator의 초기치를 accumulator에 저장한 후 인수로 지정된 함수를 실행하고, 그 다음에는 현재 실행한 함수의 return값을
//	다음 실행할 함수의 accumulator에 저장한 후 끝까지 반복한다.

//	형식 - 익명 함수 사용
//	배열명.reduce(function (accumulator[, currentValue, currentIndex, array])) {
//		실행할 문장;
//		return 값;	//현재 return 값이 다음 실행의 accumulator에 저장된다.
//	}[, accumulator의 초기치]) 
//	accumulator의 초기치를 생략하면 배열의 0번째 index의 값이 초기치가 되고 1번째 index부터 반복한다.
//	accumulator의 초기치를 지정하면 배열의 0번째 index부터 반복한다.

//	형식 - 화살표 함수 사용
//	배열명.reduce((accumulator[, currentValue, currentIndex, array])) => {
//		실행할 문장;
//		return 값;	//현재 return 값이 다음 실행의 accumulator에 저장된다.
//	}[, accumulator의 초기치])

//	accumulator: 필수 입력, 연산 결과가 저장될 기억장소 (acc)
//	currentValue: 생략 가능, reduce() 함수를 실행하는 배열에 저장된 값이 차례대로 넘어와 저장되는 변수
//	currentIndex: 생략 가능, currentValue로 넘어오는 값의 index가 저장되는 변수
//	array:  reduce() 함수를 실행하는 배열 전체가 넘어와 저장되는 변수

sum = numbers.reduce(function (acc, value, index, array) {
	console.log(acc, value, index, array);
	return acc + value;
}, 0); //초기치 지정
console.log(sum);

sum = numbers.reduce((acc, value) => acc + value
, 0); //초기치 지정
console.log(sum);
console.log('======================= 1 =====================');

//	배열에 저장된 데이터 중에서 10보다 큰 데이터의 개수

const numbers2 = [1,2,3,4,5,10,20,30,40,50,60];

let count = 0;
for (let i=0; i<numbers2.length; i++) {
	if(numbers2[i] > 10) {
		count++;
	}
}
console.log(count)
console.log('======================= 2 =====================');

count = 0;
for (let number of numbers2) {
	if(number > 10) {
		count++;
	}
}
console.log(count)
console.log('======================= 3 =====================');

count = 0;
for (let i in numbers2) {
	if(numbers2[i] > 10) {
		count++;
	}
}
console.log(count)
console.log('======================= 4 =====================');

//	숫자가 저장된 배열을 넘겨받아 10보다 큰 수의 개수를 세는 함수
function tenOverNumber(numbers) {
	let count = 0;
	numbers.forEach(function (n) {
		if(n > 10) {
			count++;
		}
	});
	return count;
}

function tenOverNumber(numbers) {
	let count = 0;
	numbers.forEach(n => {
		if(n > 10) {
			count++;
		}
	});
	return count;
}
count = tenOverNumber(numbers2);
console.log(count);
console.log('======================= forEach() =====================');

function tenOverNumber2(numbers) {
	return numbers.filter(function (n) {
		return n > 10;
	}).length;
}
count = tenOverNumber2(numbers2);
console.log(count);

function tenOverNumber2(numbers) {
	return numbers.filter(n => n > 10).length;
}
count = tenOverNumber2(numbers2);
console.log(count);
console.log('======================= 5 =====================');

function tenOverNumber3(numbers) {
	return numbers.reduce(function (acc, value){
		if (value > 10) {
			//	조건을 만족하면 10보다 큰 경우이므로 현재 acc 값을 1증가시켜 다음으로 넘겨준다.
			//	acc++을 사용하면 현재 acc 값인 0을 다음 실행의 acc에 넣어주기 때문에 최종 결과가 0이 나온다.
			//return acc++; //acc를 리턴시키고 1증가 시킨다.
			return ++acc; //acc를 1증가시켜 리턴시킨다.
		} else {
			//조건을 만족하지 않으면 10보다 작은 경우이므로 현재 acc 값을 그대로 다음으로 넘겨준다.
			return acc;
		}
	}, 0);
}

function tenOverNumber3(numbers) {
	return numbers.reduce((acc, value) => (value > 10) ? ++acc : acc, 0);
}
count = tenOverNumber3(numbers2);
console.log(count);
console.log('======================= 6 =====================');

//	배열에 저장된 문자 개수 세기
const alphas = ['a','a','a','b','c','c','d','e','a'];

function alphaCount(alphas) {
	return alphas.reduce(function (acc, value){
		console.log(acc, value);
		if(acc[value] != undefined){ //객체에 value에 저장된 key가 있는가?
			//key가 있으면 key에 할당된 value 값(문자의 개수)을 증가시킨다. 
			acc[value] += 1;
		} else {
			//key가 없으면 1로 초기화시킨다.
			acc[value] = 1;
		}
		return acc;
	}, {}); //acc를 빈 객체로 초기화시키고 시작한다.
}

function alphaCount(alphas) {
	return	alphas.reduce((acc, value) => {
		if (acc[value]){ 
			acc[value] += 1;
		} else {
			acc[value] = 1;
		}
		return acc;
	}, {}); 
}
count = alphaCount(alphas);
console.log(count);
console.log('======================= 7 =====================');




























