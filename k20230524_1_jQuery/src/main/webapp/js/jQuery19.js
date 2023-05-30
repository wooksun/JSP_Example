$(() => {
	$('p:eq(0)').click(function () {
		//	remove(): 선택된 요소를 얻어온 후 삭제한다.
		//	remove() 함수는 삭제된 요소와 연관된 이벤트가 삭제된다.
		let obj = $(this).remove();
		console.log(obj.html());
		$('h2').append(obj);
	});
	
	$('p:eq(1)').click(function () {
		//	detach(): 선택된 요소를 얻어온 후 삭제한다.
		//	detach() 함수는 ㅏㅅㄱ제된 요소와 연관된 이벤트가 유지된다.
		let obj = $(this).detach();
		console.log(obj.html());
		$('h2').append(obj);
	});
	
	$('p:eq(2)').click(function () {
		//	empty(): 선택된 요소의 모든 자식 요소를 삭제한다.
		//$(this).empty();
		$('div:eq(0)').empty();
	});
	
	$('p:eq(3)').click(function () {
		//	unwrap(): 선택된 요소의 부모 요소만 삭제한다. 자식 요소는 삭제되지 않는다.
		$(this).unwrap();
	});
});