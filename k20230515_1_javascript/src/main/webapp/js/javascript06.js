const cat = {
	name: '아지랑이',
	sound: '냐옹',
	
	//	객체의 멤버로 함수를 가질 수 있다.
	/*
	say: function say() {
		//console.log(sound); //에러
		//객체에 정의한 함수에서 객체의 멤버를 참조할 때는 자신을 의미하는 'this'를 붙여야 한다.
		console.log(this.sound); 
	}
	*/
	/*
	say: () => {
		// 화살표 함수에서는 'this'를 사용할 수 없다.
		console.log(this.sound); //undefined
	}
	*/
	
	say() {
		console.log(this.sound);
	}
	
};
console.log(cat);
console.log(cat.name);
console.log(cat.sound);
cat.say(); // 객체에서 정의한 함수를 실행한다.
console.log('===================================================');

//	객체 외부에서 작성한 함수를 객체에 주입할 수 있다.
const dog = {
	name: '뽀동이',
	sound: '왈왈'
};

const say = function () { //객체 외부에서 객체에 주입할 함수를 만든다.
	console.log(this.sound);
}
console.log(dog); //주입 전 상태 
dog.say = say; // 객체 외부에서 만든 say() 함수를 dog 객체에 주입한다
console.log(dog); //주입 후 상태
dog.say();

dog.say2 = cat.say; //cat 객체의 say() 함수를 dog 객체에 주입한다.
console.log(dog);
dog.say2();
console.log('===================================================');

//	getter, setter를 사용하면 객체의 값을 얻어오거나 넣어줄 때 필요한 일련의 기능을 실행할 수 있다.

//	getter
const numbers = {
	a: 1,
	b: 2,
	
//	getter: get으로 선언하는 함수
	get	sum() {
		//getter는 특정 멤버의 값이나 연산 결과를 얻어와야 하므로 일반적으로 값을 return 시켜야 한다.
		//값을 리턴시키지 않으면 undefined가 리턴된다.
		console.log('sum() 함수가 실행됩니다.');
		return this.a + this.b;
	}
};

console.log(numbers);
console.log(numbers.a);
console.log(numbers.b);
numbers.a = 5;
console.log(numbers);

//numbers.sum(); //numbers.sum is not a function 에러가 발생된다.
//getter를 실행할 때 함수 뒤에 ()를 붙이면 안된다.
console.log(numbers.sum);
console.log('===================================================');

const bull = {
	_name: '황소',
	
//	getter => get으로 선언한다.
//	getter를 실행할 때는 getter 뒤에 ()를 붙이면 안된다.
//	특정 멤버의 값이나 연산 결과를 얻어와야 하므로 일반적으로 값을 return 시켜야 한다.
	get name() {
		console.log('_name을 조회한다.');
		return this._name;
	},

//	setter => set으로 선언한다.
//	setter를 실행할 때는 setter 뒤에 ()를 붙이면 안된다.
//	특정 멤버에 값을 넣어줘야 하므로 인수로 value를 지정해야 한다.
	set name(value) {
		console.log('_name을 변경한다.');
		this._name = value;
	}
};
console.log(bull);
console.log(bull._name);
console.log(bull.name); //getter를 실행한다.
//bull.name('암소'); //에러 => setter 뒤에 ()를 붙이면 안된다.
bull.name = '암소'; //setter를 실행한다.
console.log(bull);
console.log('===================================================');

const numbers2 = {
	_a: 1, 
	_b: 2,
	sum: 3,
	calculator: function () {
		console.log('calculator()');
		this.sum = this._a + this._b;
	},
	
	get a() {
		return this._a;
	},
	
	get b() {
		return this._b;
	},
	
	set a(value) {
		this._a = value;
		this.calculator();
	},
	
	set b(value) {
		this._b = value;
		this.calculator();
	}
};
console.log(numbers2);
console.log(numbers2._a);
console.log(numbers2._b);
console.log(numbers2.sum);
numbers2.a=5; //a값 수정
console.log(numbers2.sum);
numbers2.b=7; //b값 수정
console.log(numbers2.sum);







































