$(() =>  {
	$('div > p').first().click(() => $('div > b').first().toggle());
	
	$('div > p').eq(1).click(function () {
		//$('div > b').eq(1).toggle();
		//$('div > b:eq(1)').css('color', 'red');
		//$('div > b:eq(2)').css('color', 'blue').html('기능 연결');
		
		//	end(): 마지막에 실행한 함수의 실행 전 상태로 선택된 요소 집합($('선택자'))을 복원시킨다.
		//	요소 집합을 선택해서 기능을 실행하면 선택했던 요소 집합이 소멸된다.
		$('div > b').eq(1).css('color', 'red').toggle().eq(2).css('color', 'blue').html('기능 연결');
	});
	
	$('div > p').eq(2).click(() => $('div > b').slice(1, 3).css('color', 'skyblue').toggle());
	$('div > p').eq(3).click(() => $('div > b').last().css('color', 'tomato').toggle());
});





















