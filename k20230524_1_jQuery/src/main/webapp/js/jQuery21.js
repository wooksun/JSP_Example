$(() => {
	$('#btn1').click(function () {
		//	$('tag')는 태그를 선택하고, $('<tag>')는 태그를 만든다.
		//	jQuery에서 태그를 기억하는 변수는 앞에 '$'를 붙여서 만든다.
		let $tr = $('<tr>'); //<tr> ~ </tr>이 생성
		//	태그를 만들 때, 태그의 데이터를 넣어주려면 2번째 인수에 {}로 묶어서 넣어준다.
		let $td1 = $('<td>', {text: '방법1'}); //<td>방법1</td>이 생성
		let $td2 = $('<td>', {text: '방법2'});
		let $td3 = $('<td>', {text: '방법3'});
		let $td4 = $('<td>', {text: '방법4'});
		$tr.append($td1);
		$tr.append($td2);
		$tr.append($td3);
		$tr.append($td4);
		$('tbody').append($tr);
	});
	
	$('#btn2').click(function () {
		//	template literals: 템플릭 리터럴은 여러줄로 이루어진 문자열을 허용하는 문자열이다.
		//	템플릿 리터럴은 ``(그레이브)로 묶어서 표현하며 '${'와 '}' 사이에 변수 이름을 입력하면 변수에 저장된 데이터가
		//	템플릿 리터럴에 삽입된다.
		let str = '방법2';
		let html = `
			<tr>
				<td>${str}</td>
				<td>${str}</td>
				<td>${str}</td>
				<td>${str}</td>
			</tr> 
		`;
		$('tbody').append(html);
	});
});























