//	인수로 넘겨받은 시간이 경과한 후 넘겨받은 시간을 리턴하는 promise를 리턴하는 함수
/*
function timer(time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(time);
		}, time);
	});
}

timer(1000)
	.then(function (time) {
		console.log('1. time: ', time);
	});
*/

function timer(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(time), time);
	});
}

timer(1000).then(time => console.log('1. time: ', time));

//	=======================================================================================================

//	timer() 함수 실행 앞, 뒤에 start, end 표시
console.log('start 2');
timer(1000)
	.then(time => {
		console.log('2. time 1: ', time);
		return timer(time + 1000);
	})
	.then(time => {
		console.log('2. time 2: ', time);
		return timer(time + 1000);
	})
	.then(time => {
		console.log('2. time 3: ', time);
		console.log('end 2'); // 여기에 코딩해야 모두 완료된 후 출력된다.
		//	모두 완료된 후 리턴할 값이 있다면 여기서 리턴시킨다.
	})
	
	//	위에서 실행한 것과 동일한 결과를 가지게끔 async와 await를 사용하는 함수로 수정
async function run() {
	console.log('start 3');
	let time = await timer(1000);
	console.log('3. time 1: ', time);
	time = await timer(1000);
	console.log('3. time 2: ', time);
	time = await timer(1000);
	console.log('3. time 3: ', time);
	console.log('end 3');
	//	모두 완료된 후 리턴할 값이 있다면 여기서 리턴시킨다.
	return '안녕하세요 최진욱입니다.';
}

//	run() 함수 앞, 뒤에 parent start, parent end 표시
/*
console.log('parent start');
run().then(value => console.log('3. value: ', value));
console.log('parent end');
*/

//	run() 함수에 await를 붙여서 run2() async 함수로 만든다.
async function run2() {
	console.log('parent start');
	//await run();
	let value = await run();
	console.log('3. value: ', value);
	console.log('parent end');
}

run2();



























