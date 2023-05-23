function foodShow() {
	let food = document.getElementsByName('food')[0];
	//console.log(food);
	
	//	select 태그 객체에서 length는 option 태그의 개수를 얻어온다.
	//console.log(food.length);
	
	//	options는 select 태그 내부의 option 태그들을 모아놓은 객체이다.
	//console.log(typeof food.options);
	
	//	selectedIndex는 options 객체에서 몇번째 option 태그가 선택되었나 얻어온다.
	//console.log(food.options.selectedIndex);
	
	 let index = food.options.selectedIndex;
	 //	value는 특정 option 객체의 값을 얻어온다.
	 console.log(food.options[index].value);
}

function foodShow2() {
	let food = document.getElementsByName('food')[1];
	//console.log(food);
	//console.log(food.length);
	
	let str = '';
	for(let i=0; i<food.length; i++) {
		//	selected는 특정 option 객체가 선택되면 true, 선택되지 않았으면 false를 얻어온다.
		//console.log(food[i].value + ', ' + food[i].selected);
		//console.log(food[i].value + (food[i].selected ? ' 선택됨' : ' 선택안됨'));
		str += food[i].selected ? food[i].value + ' ' : '';
	}
	console.log(str.length > 0 ? str : '없음');
}

































