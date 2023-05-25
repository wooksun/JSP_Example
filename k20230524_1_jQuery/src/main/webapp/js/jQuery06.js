$(() => {
	//	class 속성값이 error로 지정된 에러 메시지를 숨긴다.
	$('.error').hide();
	
	//	id 속성값이 single로 지정된 form에서 submit이 클릭되면 실행할 이벤트를 설정한다.
	//	submit 이벤트는 input 태그나 button 태그의 type 속성값이 submit인 버튼이 클릭되면 발생되는 이벤트이다.
	//	jQuery는 submit이고 html이나 javascript에서는 onsubmit 이다.
	//	submit 이벤트에서는 서버로 전송하기 전에 폼의 유효성을 검사하고, 입력된 데이터가 이상이 없으면 true를 리턴시키고, 
	//	이상이 있으면 에러 메시지를 출력한 후, false를 리턴시킨다.
	//	submit 이벤트이 실행결과가 true(기본값)면 action 속성에 지정된 페이지로 이동하고, 실행 결과가 false면 현재 페이지를 표시한다.
	
	$('#single').submit(function () {
		//console.log('submit 이벤트 실행됨');
		let userID = $('input:text[name=userID]').val().trim();
		//let userID = $('#infoBox').val().trim();
		//console.log(userID);
		if (userID == null || userID == '') { //유효성 검사
			$('#infoBox').val('');
			$('#infoBox').focus(); 
			$('.error').show(); //감춰둔 에러 메시지를 표시
			return false; // false를 리턴시키면 현재 페이지에 그대로 머물러있는다.
		} 
		
		return true; //true를 리턴시키면 action 속성에 지정된 페이지로 이동한다.
	});
	
	//	전체 선택 체크 박스가 클릭되면 모든 체크 박스를 선택 또는 해제한다.
	$('input:checkbox[name=all]').click(function() {
		//console.log('전체 선택 checkBox 클릭');
		//	prop('속성이름') : 인수로 지정된 속성의 프로퍼티를 얻어온다.
		let checked = $('input:checkbox[name=all]').prop('checked');
		//	console.log(checked);
		
		//	name속성이 chk인 체크 박스의 프로퍼티를 name 속성이 all인 체크박스의 프로퍼티로 변경한다.
		
		//	prop('속성이름', 프로퍼티) : 인수로 지정된 속성의 프로퍼티를 변경한다.
		
		/*
		$('input:checkbox[name=chk]').each(function (index) {
			//console.log(index);
			$('input:checkbox[name=chk]').eq(index).prop('checked', checked);
		});
		*/
		
		/*
		$('input:checkbox[name=chk]').each(index => {
			$('input:checkbox[name=chk]').eq(index).prop('checked', checked);
		});
		*/
		
		/*
		$('input:checkbox[name=chk]').each(function (_, obj) {
			console.log($(this));
			$(this).prop('checked', checked);
		});
		*/
		
		$('input:checkbox[name=chk]').prop('checked', checked);
	});
	
	//	name 속성이 chk인 체크 박스가 클릭되면 name 속성이 chk인 모든 체크박스가 체크되었나 검사해서 모두 체크 되었으면 전체 선택 체크박스를
	//	체크하고, 그렇지 않으면 체크를 해제한다.
	$('input:checkbox[name=chk]').click(function () {
		//console.log('name 속성 값이 chk인 체크 박스 클릭');
		//name 속성이 chk인 요소에 전체 개수와 name이 chk인 요소 중에서 체크돈 요소의 개수를 비교한다.
		//console.log('name 속성이 chk인 요소의 전체 개수' + $('input:checkbox[name=chk]').length);
		//console.log('name 속성이 chk인 요소 중에서 체크된 요소의 개수' + $('input:checkbox[name=chk]:checked').length);
		if ($('input:checkbox[name=chk]').length == $('input:checkbox[name=chk]:checked').length) {
			//console.log('모두 체크됨');
			$('input:checkbox[name=all]').prop('checked', true);
		} else {
			//console.log('모두 체크되지 않음');
			$('input:checkbox[name=all]').prop('checked', false);
		}
	});
	
	//	체크 박스를 선택하고 확인 버튼을 클릭하면 체크 여부를 확인해서 그 결과를 id 속성인 result로 지정된 div태그 내부에 출력한다.
	
});


































