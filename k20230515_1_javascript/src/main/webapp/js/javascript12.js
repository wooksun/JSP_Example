//	클래스 - class로 선언
class Food {
//	constructor: 생성자, 객체가 생성될 때 멤버 변수를 선언하고 초기화 한다.

	constructor(name) {
		console.log('악!!!!!!!');
		this.name = name;//멤버 변수 선언 및 초기화
		this.brands = [];
	}
//	멤버 함수 선언시 앞에 function을 붙이지 않는다.
	addBrands(brand) {
		this.brands.push(brand);
	}
	print() {
		console.log(`${this.name}을(를) 파는 음식점들 ${this.brands.join(', ')}`);
	}
}

//	클래스 객체 생성
const pizza = new Food('피자');
console.log(pizza);
pizza.addBrands('도미노 피자');
pizza.addBrands('피자스쿨');
pizza.addBrands('59쌀피자');
pizza.print();

const chicken = new Food('치킨');
chicken.addBrands('bhc');
chicken.addBrands('교촌');
chicken.addBrands('bbq');
chicken.addBrands('호식이');
console.log(chicken);
chicken.print();
console.log('===============================');

//상속
class Animal { //부모 클래스
	constructor(type, name, sound) {
		this.type = type;
		this.name = name;
		this.sound = sound;
	}
//	클래스에 멈버 함수를 정의하면 자바스크립트가 자동으로 prototype에 등록시킨다.
	say() {
		console.log(`부모 클래스의 say() 함수 실행: ${this.sound}`);
	}
}
// console.log(Animal.prototype.say);
const dog = new Animal('개', '멍멍이', '멍멍');
dog.say();
const cat = new Animal('고양이', '야옹이', '냐옹');
cat.say();
console.log('===============================');

//	상속은 java와 같이 extends 예약어를 사용한다.
class Dog extends Animal { 
	constructor(name, sound, age) {
		// Animal.call(this, '개', name, sound);
		super('개', name, sound); //부모 클래스의 생성자를 호출해서 상속받은 멤버를 초기화 시킨다.
		this.age = age;
	}
//	함수 오버라이드
	say() {
		console.log(`${this.age}살 강아지가 ${this.sound}합니다.`);
	}
}

const dog2 = new Dog('멍멍이', '멍멍', 15);
dog2.say();

class Cat extends Animal { 
	constructor(name, sound, age) {
		super('고양이', name, sound);
		this.age = age;
	}
	say() {
		console.log(`${this.age}살 고양이가 ${this.sound}합니다.`);
	}
}

const cat2 = new Cat('고양이', '냐옹', 10);
cat2.say();



























