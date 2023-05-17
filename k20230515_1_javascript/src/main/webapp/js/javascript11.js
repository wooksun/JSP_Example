//	클래스 - function으로 선언
function Animal(type, name, sound) {
//	벰버 변수 초기화
	this.type = type;
	this.name = name;
	this.sound = sound;
//	멤버 함수
//	함수를 클래스 내부에서 선언하면 클래스의 객체가 생성될 때 마다 함수가 매번 만들어진다.
	this.say = function () {
		console.log(this.sound);
	};
}

//	클래스 객체 생성
const dog = new Animal('개', '멍멍이', '왈왈');
console.log(dog);
dog.say();
const cat = new Animal('고양이', '야옹이', '냐옹');
console.log(cat);
cat.say();
console.log('=================== 1 ======================');

function Animal2(type, name, sound) {
	this.type = type;
	this.name = name;
	this.sound = sound;
}

//	함수를 클래스 내부에서 선언하면 클래스의 객체가 생설될 때 마다 같은 함수가 만들어진다.
//	prototype으로 함수를 선언하면 객체가 생성될 때마다 같은 함수가 반복적으로 생성되지 않는다.
Animal2.prototype.say = function () {
		console.log(this.sound);
	};

const dog2 = new Animal2('개2', '멍멍이2', '왈왈2');
console.log(dog2);
dog2.say();
const cat2 = new Animal2('고양이2', '야옹이2', '냐옹2');
console.log(cat2);
cat2.say();
console.log('=================== 2 =======================');

function Animal3(type, name, sound) {
	this.type = type;
	this.name = name;
	this.sound = sound;
}

const dog3 = new Animal3('개3', '멍멍이3', '왈왈3');
console.log(dog3);
const cat3 = new Animal3('고양이3', '야옹이3', '냐옹3');
console.log(cat3);
//	prototype으로 함수를 선언하지 않고 클래스 외부에서 만든 함수를 각각의 객체에 넣어줄 수 있다.
function say() {
	console.log(this.sound);
}
dog3.say = say; //함수 이름 뒤에 ()를 쓰지 않는다.
console.log(dog3);
cat3.say = say;
console.log(cat3);

dog3.say();
cat3.say();
console.log('=================== 3 =======================');
console.log('=================== 상속 =======================');

function Animal4(type, name, sound) { //부모 클래스
	this.type = type;
	this.name = name;
	this.sound = sound;
}

//	부모 클래스의 prototype에 say() 함수를 추가한다.
Animal4.prototype.say = function () {
	console.log(this.sound);
};

//	Animal4(부모) 클래스를 상속받는 Dog(자식) 클래스를 정의한다.
function Dog(name, sound) {
	//	부모 클래스를 호출해서 자식 클래스를 초기화할 데이터를 전달한다.
	Animal4.call(this, '개', name, sound);
}

//	부모 클래스의 prototype을 자식 클래스의 prototype에 넣어준다. => 상속시킨다.
//	자식 클래스를 선언하고 자식 클래스의 객체를 생성하기 전에 넣어줘야 한다. => 위치가 중요하다.
Dog.prototype = Animal4.prototype;

//	Animal4(부모) 클래스를 상속받는 Cat(자식) 클래스를 정의한다.
function Cat(name, sound) {
	//	부모 클래스를 호출해서 자식 클래스를 초기화할 데이터를 전달한다.
	Animal4.call(this, '고양이', name, sound);
}
Cat.prototype = Animal4.prototype;

const dog4 = new Dog('몽몽이', 'MongMong!');
console.log(dog4);
console.log(dog4.type);
console.log(dog4.name);
console.log(dog4.sound);
dog4.say();

const cat4 = new Cat('냐옹이', 'Miyaong!');
console.log(cat4);
console.log(cat4.type);
console.log(cat4.name);
console.log(cat4.sound);
cat4.say();
















