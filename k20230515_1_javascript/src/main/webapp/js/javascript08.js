let superheroes = ['아이언맨', '캡틴아메리카', '토르', '닥터스트레인지'];

for(let i=0; i<superheroes.length; i++) {
	console.log(superheroes[i]);	
}
console.log('================ 일반 for - of ======================');

for (let hero of superheroes) {
	console.log(hero);
}
console.log('================ 향상된 for - in ======================');

for (let i in superheroes) {
	console.log(superheroes[i]);
}
console.log('======================================');

//	배열명.forEach(): 인수로 지정된 함수로 배열 요소를 차례대로 전달하며 함수를 반복해 실행한다.
function print(hero) { //일반 함수
	console.log(hero);
}

//	형식: 배열명.forEach(함수명), (주의) forEach() 함수의 인수로 전달되는 함수 뒤에 ()를 붙이면 안된다.
superheroes.forEach(print);
console.log('================= forEach() - 일반함수 =====================');

const print2 = (hero) => { //익명 화살표 함수
	console.log(hero);
}
superheroes.forEach(print2);
console.log('================= forEach() - 익명 화살표 함수 =====================');

const print3 = hero => console.log(hero); //익명 화살표 함수, ()와 {} 생략

superheroes.forEach(print3);
console.log('================= forEach() - 익명 화살표 함수, ()와 {} 생략 =====================');

//	forEach() 함수의 인수로 화살표 익명 함수 전달
superheroes.forEach((hero) => {
	console.log(hero);
});
console.log('================= forEach() - 인수로 익명 화살표 함수 전달 =====================');

//	forEach() 함수의 인수로 ()와 {}를 생략한 화살표 익명 함수 전달
superheroes.forEach(hero => console.log(hero));
console.log('================= forEach() - 인수로 ()와 {}를 생략한 익명 화살표 함수 =====================');

//	화살표 함수의 인수가 1개일 경우 인수의 내용만 출력하는 함수는 console.log만 사용해도 된다.
superheroes.forEach(hero => console.log);
console.log('================= forEach() - 인수로 ()와 {}를 생략한 익명 화살표 함수 =====================');























