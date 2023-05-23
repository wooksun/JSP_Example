function singleArr() {
	//	배열 선언 방법
	//	let 배열명 = new Array(); => 크기가 0인 빈 배열 객첼를 선언한다.
	let arrayObj = new Array();
	console.log(arrayObj);
	console.log(typeof arrayObj);
	console.log(arrayObj.length);
	console.log('======================');
	
	//	let 배열명 = []; => 크기가 0인 빈 배열 객체를 선언한다.
	let arrayObj2 = [];
	console.log(arrayObj2);
	console.log(typeof arrayObj2);
	console.log(arrayObj2.length);
	console.log('======================');
	
	//	let 배열명 = new Array(크기); => 빈 배열 객체를, 크기를 지정해서 선언한다.
	let arrayObj3 = new Array(5);
	console.log(arrayObj3);
	console.log(typeof arrayObj3);
	console.log(arrayObj3.length);
	console.log('======================');
	
	//	let 배열명 = new Array(초기치); => 초기치의 개수만큼의 크기를 가지는 배열 객체를 선언하고, 초기치로 초기화 시긴다.
	//	let 배열명 = [초기치];
	//let arrayObj4 = new Array(5, 4, 3);
	let arrayObj4 = [1,2,3,4,5];
	console.log(arrayObj4);
	console.log(typeof arrayObj4);
	console.log(arrayObj4.length);
	console.log('======================');
	
	let arrayObj5 = ['java', 2, 'script', 4];
	console.log(arrayObj5);
	console.log(typeof arrayObj5);
	console.log(arrayObj5.length);
	console.log('======================');
}

function multiArr() {
	let arrRow = 4; //행의 개수
	let arrCol = 3; //열의 개수
	
	//	행을 먼저 만들고 행의 개수만큼 반복하며 열을 만든다.
	let arr = new Array(arrRow); //행을 만든다.
	for (let i=0; i<arrRow; i++) { //행의 개수만큼 반복한다.
		arr[i] = new Array(arrCol); //각각의 행에 열을 만든다.
	}
	
	//	배열명[행][열]
	arr[0][0] = 'apple';
	arr[0][1] = 'banana'; 
	arr[0][2] = 'melon';
	
	arr[1][0] = 100;
	arr[1][1] = 200; 
	arr[1][2] = 300;
	
	arr[2][0] = true;
	arr[2][1] = 999; 
	arr[2][2] = '최진욱';
	
	//	배열에 배열을 저장시킬 수 있다
	arr[3][0] = ['임꺽정', '바보']; //3차원, 배열명[면][행][열]
	arr[3][1] = ['장길산', '천재']; 
	arr[3][2] = ['최진욱', '김문선'];
	
	
	console.log(arr); 
	console.log(arr[0]); 
	console.log(arr[3][0]); 
	console.log(arr[3][2][1]); 
	
	let arr2 = [[1, 2], [3, 4], [5, 6]];
	console.log(arr2); 
}

function joinTest() {
	let fruits = ['apple', 'banana', 'melon', 'mango'];
	let arr = ['111', '222', '333', '444'];
	
	//	배열끼리 합치고 싶어서 덧셈 연산을 실행하면, 배열을 합쳐서 ','로 구분된 문자열을 만들어서 합친다.
	let add = fruits + arr;
	console.log(add); // apple,banana,melon,mango111,222,333,444
	console.log(typeof add); //string
	
	//	2개 이상의 배열을 합치려면 concat() 함수를 사용해야 한다.
	let result = fruits.concat(arr);
	console.log(result); //['apple', 'banana', 'melon', 'mango', '111', '222', '333', '444'] => 배열로 합쳐짐
	console.log(typeof result); //object
	
	//	join() 함수는 배열 요소 사이에 인수로 지정한 문자열을 삽입해서 문자열로 만든다.
	let result2 = fruits.join(',');
	console.log(result2); //apple,banana,melon,mango
	console.log(typeof result2); //string
}

function alphaSort() {
	//	sort(): 코드값 순서로 오름차순(사전식) 정렬, 무조건 문자 데이터로 취급해서 정렬한다.
	//	null도 sort() 함수는 문자열로 취급해서 정렬한다.
	//	문자화 된 숫자 => 문자 순서로 정렬된다.
	let arr = ['a', 5, null, 'c', 'b', 'A', 100, 'nt', 'nv'];
	arr.sort();
	console.log(arr);
}

function numberSort() {
	let arr = [1,4,3,7,9,10];
	//	배열을 구성하는 모든 데이터가 숫자로 구성되어 있어도 무조건 문자 데이터로 취급해서 정렬한다.
	arr.sort();
	console.log(arr); // [1, 10, 3, 4, 7, 9]
	
	//	숫자 데이터를 정렬하기 위해서는 sort() 함수의 인수로 비교 함수를 넣어줘야 한다.
	//	sort() 함수가 자동으로 비교 함수로 데이터를 넘겨주기 때문에 비교함수를 호출할 때 인수를 적지 않는다.
	arr.sort(comparefn);
	console.log(arr);
	
	//	비교 함수를 익명으로 구현해도 된다.
	/*
	arr.sort(function (i, j) {
		//return i - j; //오름차순
		return j - i; //내림차순
	});
	*/
	arr.sort((i, j) => j - i);
	console.log(arr);
}

//	numberSort() 함수에서 데이터 정렬에 사용할 함수를 선언한다. => 정렬방식을 지정한다.
function comparefn(a, b) {
	//	1번째 인수에 저장된 값이 2번째 인수에 저장된 값보다 크면 1(양수), 같으면 0, 작으면 -1(음수)를 return하게 만든다. => 오름차순 정렬
	//	내림차순 정렬 => 부등호를 반대로 수정하면 내림차순 정렬이 된다.
	/*
	if(a > b) {
		return 1;
	} else if(a < b) {
		return -1;
	} else {
		return 0;
	}
	*/
	
	//return a - b; //오름차순
	return b - a; //내림차순
}

function reverseTest() {
	let names = ['홍길동', '임꺽정', '장길산', '일지매'];
	console.log(names);
	names.reverse();
	console.log(names);
	
	names.sort();
	console.log(names);
	names.reverse();
	console.log(names);
}

function arrayIO() {
	let arr = [];
	console.log(arr);
	
	//push(): 배열의 맨 뒤에 데이터를 추가한다.
	arr.push('홍길동');
	console.log(arr);
	arr.push('임꺽정');
	console.log(arr);
	arr.push('장길산');
	console.log(arr);
	
	//unshift(): 배열의 맨 앞에 데이터를 추가한다.
	arr.unshift('일지매');
	console.log(arr);
	
	//pop(): 배열의 맨 뒤의 데이터를 얻어온 후 제거한다.
	let pop = arr.pop();
	console.log(pop);
	console.log(arr);
	
	//shift(): 배열의 맨 앞의 데이터를 얻어온 후 제거한다.
	let shift = arr.shift();
	console.log(shift);
	console.log(arr);
}

function sliceTest() {
	let arr = [1,2,3,4,5];
	console.log(arr);
	
	//	slice(a, b): 배열의 a번째 index부터, b-1번째 index 요소까지 복사해서 새 배열을 만든다.
	let arr2 = arr.slice(1, 4);
	console.log(arr2);// [2, 3, 4]
	console.log(arr); //[1, 2, 3, 4, 5], 원본이 유지된다.
	
	//	splice(a, b): 배열의 a번째 index부터 b개만큼 추출해서 새 배열을 만든다.
	let arr3 = arr.splice(1, 4);
	console.log(arr3); 
	console.log(arr); //[1], 원본이 변형된다.
}

























