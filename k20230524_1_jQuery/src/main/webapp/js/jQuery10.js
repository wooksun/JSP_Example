$(() => {
	//$('p:eq(0)').css('backgroundColor', 'tomato');
	//$('p').eq(0).css('backgroundColor', 'skyblue');
	//$('span').css('color', 'yellowgreen');
	
	//	0번째 <p>태그를 선택한 후, <span> 태그를 선택한다.
	//$('p:eq(0)').css('backgroundColor', 'tomato');// p 태그 블럭 전체
	//$('p:eq(0) > span').css('backgroundColor', 'green');//span 태그만
	
	//$('p').eq(0).css('backgroundColor', 'skyblue');
	//$('p').eq(0).add('span:eq(0)').css('color', 'hotpink');
	
	$('div').children().css('color', 'dodgerblue');
	$('div').children().click(function () {
		if ($(this).is('span')) {
			$(this).css('color', 'red');
		}
		if ($(this).is('b')) {
			$(this).css('color', 'green');
		}
		if ($(this).is('p')) {
			$(this).css('color', 'blue');
		}
		
	});
});



































