$(() => {
	//	id 속성이 base인 div 태그를 선택해서 뒤에 새로운 요소를 추가한다.
	$('button:eq(0)').click(function () {
		//	after(): 선택된 요소 외부 뒤에 인수로 지정한 새로운 요소를 추가한다.
		//	$('선택자').append(추가할 요소);
		
		//$('#base').after('<div>after() 함수로 추가한 요소1</div>');
		//$('#base').after($('<div>').text('after() 함수로 추가한 요소2'));
		let $div = $('<div>').text('after() 함수로 추가한 요소3');
		$('#base').after($div);
	});
	
	//	id 속성이 base인 div 태그를 선택해서 뒤에 새로운 요소를 추가한다.
	$('button:eq(1)').click(function () {
		//	insertAfter(): 새로운 요소를 인수로 지정한 요소 외부 뒤에 추가한다.
		//	$(추가할 요소).insertAppend(선택자);
		//$('<div>insertAfter() 함수로 추가한 요소1</div>').insertAfter('#base');
		$('<div>').text('insertAfter() 함수로 추가한 요소2').insertAfter('#base');
	});
	
	//	id 속성이 base인 div 태그를 선택해서 뒤에 새로운 요소를 추가한다.
	$('button:eq(2)').click(function () {
		//	before(): 선택된 요소 외부 앞에 인수로 지정한 새로운 요소를 추가한다.
		//	$('선택자').before(추가할 요소);
		
		//$('#base').before('<div>before() 함수로 추가한 요소1</div>');
		//$('#base').before($('<div>').text('before() 함수로 추가한 요소2'));
		let $div = $('<div>').text('before() 함수로 추가한 요소3');
		$('#base').before($div);
	});
	
	//	id 속성이 base인 div 태그를 선택해서 뒤에 새로운 요소를 추가한다.
	$('button:eq(3)').click(function () {
		//	insertBefore(): 선택된 요소 외부 앞에 인수로 지정한 새로운 요소를 추가한다.
		//	$(추가할 요소).insertBefore(선택자);
		//$('<div>insertBefore() 함수로 추가한 요소1</div>').insertBefore('#base');
		$('<div>').text('insertBefore() 함수로 추가한 요소2').insertBefore('#base');
	});
});