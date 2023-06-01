//	promise 만들기 1 => promise 객체를 만들어 변수에 할당한다.
const job = new Promise((resolve, reject) => {
	setTimeout(() => resolve('job ok!'), 1000);
});

job.then(data => console.log('data: ', data));

const job2 = new Promise((resolve, reject) => {
	setTimeout(() => reject('job2 fail!'), 1000);
});

job2.catch(err => console.log('error: ', err));

//	==========================================================================================================================================

//	promise 만들기 2 => 함수에서 promise 객체를 만들어 리턴한다.
function job3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('job3 ok!'),2000);
	});
}
job3().then(data2 => console.log('data2: ', data2));

function job4() {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject('job4 fail!'),2000);
	});
}

job4().catch(err2 => console.log('error2: ', err2));

//	==========================================================================================================================================

job3()
	.then(data3 => {
		console.log('data3: ', data3);
		job4()
			.catch(err3 => console.log('error3: ', err3));
	});

//	==========================================================================================================================================

job4()
	.then(function (data4) {
		console.log('data4: ', data4);
		job3();
	})
	.catch(function (err4) {
		console.log('error4: ', err4);
		//	promies에서 오류가 발생했을 때, Promise 객체의 reject() 함수를 실행하면 이어지는 작업을 중시킬 수 있다.
		return Promise.reject('현재 작업이 실패해서 다음 작업을 실행하지 않는다.');
	})
	.then(function (data5) {
		console.log('앞의 작업이 실패하면 이곳의 작업은 실행하지 않는다.');
	})
























