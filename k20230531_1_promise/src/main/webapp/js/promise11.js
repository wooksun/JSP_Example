function timer(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(time), time);
	});
}

console.time('Promise.all 실행 시간');
Promise.all([timer(1000), timer(2000), timer(3000)])
	.then(function (result) {
		console.log('result: ', result);
		console.timeEnd('Promise.all 실행 시간');
	});

console.time('Promise.race 실행 시간');
Promise.race([timer(1000), timer(2000), timer(3000)])
	.then(function (result) {
		console.log('result: ', result);
		console.timeEnd('Promise.race 실행 시간');
	});





















