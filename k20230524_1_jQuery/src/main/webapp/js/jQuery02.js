function a1() {
	//	javascript
	//let span = document.getElementsByTagName('span');
	//let span = document.querySelectorAll('span');
	//console.log(span.length);
	//for (let i=0; i<span.length; i++) {
	//	span[i].style.color = 'skyblue';
	//}
	
	//	jQuery
	//	javascript는 전체에 대해서 작업하려면 반복문을 사용해야 하지만, jQuery는 반복문을 사용하지 않아도 된다.
	//	=> 특별한 설정이 없으면 전체에 대해서 일괄 처리를 한다.
	$('span').css('color', 'tomato'); //tag이름: 태그 선택자
}

function a2() {
	//	javascript
	//let t1 = document.getElementById('t1');
	//let t1 = document.querySelector('#t1');
	//t1.style.color = 'skyblue';
	
	//	jQuery
	$('#t1').css('color', 'tomato'); //#id: id선택자
}

function a3() {
	//	javascript
	//let t2 = document.getElementsByClassName('t2');
	//let t2 = document.querySelectorAll('.t2');
	//for (let c of t2) {
	//	c.style.color = 'blue';
	//}
	
	//	jQuery
	$('.t2').css('color', 'blue'); //	.class: class 선택자
}

function a4() {
	//	javascript
	//let child = document.querySelectorAll('li > span');
	//for (let s of child) {
	//	s.style.color = 'lime';
	//}
	
	//	jQuery
	$('li > span').css('color', 'lime');
}

function a5() {
	//	javascript
	//let child = document.querySelectorAll('li span');
	//for (let s of child) {
	//	s.style.color = 'purple';
	//}
	
	//	jQuery
	$('li span').css('color', 'purple');
}

//	:nth-child, :nth-last-child
//	같은 부모 요소를 가지는 형제 요소 중에서 특정 순서에 있는 요소를 선택하는 선택자이다.
//	:nth-child()는 앞에서부터 세고, :nth-last-child()는 뒤에서 부터 센다.
//	인수로 숫자, 연산식(곱하기는 숫자가 앞에 와야하고 더하기 빼기는 숫자가 뒤에 와야한다.)
//	odd(홀수), even(짝수)도 사용할 수 있다. 

function a6() {
	//$('li').eq(0)와 $('li:eq(0)')는 같은 의미로 사용된다.
	//$('li').eq(0).css('backgroundColor', 'skyblue');
	//$('li:eq(0)').css('backgroundColor', 'skyblue');
	
	//	eq()는 index가 0부터 시작하고, nth-child는 index가 1부터 시작된다. => 주의!!!
	//$('li:nth-child(1)').css('backgroundColor', 'hotpink'); //처음부터 위치를 센다.
	//$('li:nth-last-child(1)').css('backgroundColor', 'orange'); //마지막부터 위치를 센다.
	
	//$('li:nth-child(odd)').css('backgroundColor', 'skyblue'); //홀수 인덱스만 선택
	//$('li:nth-child(even)').css('backgroundColor', 'orange'); //짝수 인덱스만 선택
	
	//	n은 자동으로 0부터 1씩 증가하는 정수이고 '+', '-', '*' 연산을 사용할 수 있다.
	//$('li:nth-child(n)').css('backgroundColor', 'skyblue'); //모두 선택된다.
	//$('li:nth-child(n + 3)').css('backgroundColor', 'skyblue'); //3번째 index 위치부터 모두 선택된다.
	//	'*'연산도 가능한데, '*' 연산자를 사용할 수 없고, n앞에 숫자가 위치해야 한다.
	$('li:nth-child(2n+1)').css('backgroundColor', 'skyblue'); //홀수 인덱스만 선택
	$('li:nth-child(2n)').css('backgroundColor', 'orange'); //짝수 인덱스만 선택
}

//	first-child : 같은 부모 요소를 가지는 형제 요소 중에서 첫번째 자식 요소만 선택한다.
//	last-child : 같은 부모 요소를 가지는 형제 요소 중에서 마지막 자식 요소만 선택한다.
function a7() {
	$('li:first-child').css('backgroundColor', 'orange');
}

function a8() {
	$('li:last-child').css('backgroundColor', 'skyblue');
}
























