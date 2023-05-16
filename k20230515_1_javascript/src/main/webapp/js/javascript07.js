const objects = [ //배열
	{ //객체1
		name: '멍멍이'
	},
	{ //객체2
		name: '냐옹이'
	}
];
console.log(objects);
console.log(objects.length);
console.log(objects[0]);
console.log(objects[1]);
console.log(objects[2]); //undefined, 배열의 인덱스 범위를 벗어났다.
console.log(objects[0].name);
console.log(objects[1].name);
console.log('===================================================');

//	push(): 배열의 맨 뒤에 데이터를 추가한다.
const choi = {
	name: '최진욱'
};
objects.push(choi);
console.log(objects);

objects.push({
	name: '우기'
});
console.log(objects);
console.log('===================================================');

//	pop(): 배열의 맨 뒤 데이터를 얻어온 후 제거한다.
obj = objects.pop();
console.log(obj);
console.log(objects);
console.log(objects.pop());
console.log(objects);
console.log('===================================================');

const doggy = {
	name: '멍멍이',
	sound: '멍멍',
	age: 2
};

//	Object.keys(): 인수로 지정된 객체의 key를 배열로 얻어온다.
const keys = Object.keys(doggy);
console.log(keys);
console.log(keys.length);

for (let i=0; i<keys.length; i++) { //일반 for
	console.log(keys[i]);
}
console.log('===================================================');
//	Object.values(): 인수로 지정된 객체의 key에 할당된 value 값을 배열로 얻어온다.
const values = Object.values(doggy);
console.log(values);
console.log(values.length);

for (let value of values) { //향상된 for
	console.log(value);
}
console.log('===================================================');
//	Object.entries(): 인수로 지정된 객체의 key와, key에 할당된 value를 한 쌍으로 묶은 배열로 얻어온다.
const entries = Object.entries(doggy);
console.log(entries);
console.log(entries.length);
console.log('===================================================');
//	in을 사용하는 for는 in 뒤에 배열이 나오면 배열의 인덱스가 변수에 저장되며 반복된다.
for (let i in entries) { //향상된 for
	console.log(entries[i]);
}
console.log('===================================================');
//	객체의 멤버에 접근하는 방법은 객체 이름에 '.'을 찍어서 접근하는 방법과, []안에 key를 입력하여 접근하는 방법이 있다.
console.log(doggy.name); // '.'으로 접근
console.log(doggy['name']); // ['key']으로 접근 => 문자열 ''안에 적음
name = 'name';
console.log(doggy[name]); 
console.log('===================================================');

for (let key of keys) {
	console.log(doggy[key]);
}




























