function randomNumber(number) {
	//	random(): 0이상이고, 1미만인 무작위 수를 발생시킨다.
	console.log(Math.random());
	for (let i=0; i<6; i++) {
		//console.log(Math.random());
		console.log(parseInt(Math.random() * number) + 1);
	}
	//	ceil(): 올림, floor(): 내림, round(): 반올림
	console.log('올림: ' + Math.ceil(3.14))
	console.log('내림: ' + Math.floor(3.14))
	console.log('반올림: ' + Math.round(3.14))
	console.log('반올림: ' + Math.round(3.55))
}

function randomColor(color) {
	/*
	let r =parseInt(Math.random() * 256);
	let g =Math.floor(Math.random() * 256);
	let b =Math.floor(Math.random() * 256);
	console.log(`r:${r}, g:${g}, b:${b}`);
	
	document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
	*/
	
	/*
	let random = function() {
		return Math.floor(Math.random() * 256);
		document.body.style.backgroundColor = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
	}
	*/
	
	let random = () => Math.floor(Math.random() * 256);
	document.body.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
	
}

function randomCircle() {
	let radius = Math.floor(Math.random() * 100) + 1;
	console.log('원의 반지름: ' + radius);
	
	let circle = document.getElementById('circle');
	//let circle = document.querySelector('#circle');
	
	circle.style.width = radius * 2 + 'px'; // div태그의 폭
	circle.style.height = radius * 2 + 'px'; // div태그의 높이
	
	let random = () => Math.floor(Math.random() * 256);
	circle.style.border = '4px solid ' + `rgb(${random()},${random()},${random()})`;
	circle.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
	circle.style.borderRadius = '50%';
}

function randomCircleArea() {
	//	원의 지름을 얻어온다.
	let circleWidth = document.querySelector('#circle').style.width; //width 속성 값을 얻어온다.
	console.log('원의 지름: ' + circleWidth);
	console.log(typeof circleWidth);
	
	//let width = circleWidth.substring(0, circleWidth.length - 2);
	let width = parseInt(circleWidth);
	console.log('원의 지름: ' + width);
	console.log(typeof width);
	
	
	width = parseInt(circleWidth);
	console.log('원의 지름: ' + width);
	console.log(typeof circleWidth);
	
	let radius = width / 2;
	console.log('원의 지름: ' + radius);
	
	let area = Math.PI * Math.pow(radius, 2); //원의 너비
	let len =  2 * Math.PI * radius; //원의 둘레
	
	document.getElementById('area').innerHTML = Math.round(area);
	document.querySelector('#len').innerHTML = Math.round(len);
}





























