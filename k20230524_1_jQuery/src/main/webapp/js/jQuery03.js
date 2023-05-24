function imgSize() {
	$('img').css({'width': '200px', 'height': '200px'});
}

function idSelector() {
	//$('#selId').css('display', 'none');
	//$('#selId').hide();
	$('#selId').slideUp();
}

function classSelector() {
	$('.selClass').css('opacity', '0.5');
}

//	속성 선택자
//	태그와 태그에 지정된 속성 및 속성값으로 요소 찾기
//  태그이름[속성이름]: 지정된 속성을 가지고 있는 모든 요소를 선택한다.
//  태그이름[속성이름=문자열]: 속성 값이 지정된 문자열과 일치하는 모든 요소를 선택한다. 완전일치
//  태그이름[속성이름~=문자열]: 지정된 문자열이 공백을 경계로 포함된 모든 요소를 선택한다. 단어포함
//  태그이름[속성이름*=문자열]: 지정된 문자열이 포함되는 모든 요소를 선택한다. 문장포함
//  태그이름[속성이름$=문자열]: 지정된 문자열로 끝나는 모든 요소를 선택한다.
//  태그이름[속성이름^=문자열]: 지정된 문자열로 시작하는 모든 요소를 선택한다.
//  태그이름[속성이름!=문자열]: 지정된 문자열과 같지 않은 모든 요소를 선택한다.
//  태그이름[속성이름|=문자열]: 지정된 문자열-로 정확히 시작하는 모든 요소를 선택한다.

function includeSelector() {
	//$('img[id]').css('opacity', '0.2');
	//$('img[id=selId]').css('opacity', '0.2');
	//$('img[title=img02]').css('opacity', '0.2');
	//$('img[title~=img02]').css('opacity', '0.2');
	//$('img[title*=02]').css('opacity', '0.2');
	//$('img[title$=04]').css('opacity', '0.2');
	//$('img[title^=image]').css('opacity', '0.2');
	//$('img[title!=img04]').css('opacity', '0.2');
	//$('img[title|=img01]').css('opacity', '0.2');
}

//	attribute(속성)와 property의 차이점
//	attribute는 html 요소가 추가적인 정보를 가지고 있는 이름과 값의 한 쌍을 말한다.
//	property는 속성을 객체화 했을 때 html DOM 트리 내부에서의 값을 말한다.
//	<input type="checkbox" name="chk" checked="checked/> => 속성:type, name, checked
//	위의 <input> 태그의 요소는 checked 속성을 가지고 있으며 속성값은 "checked"이다.
//	만약에 위의 체크박스가 선택되었을 때, checked 속성의 property는 "true"이다.


//	속성과 프로퍼티 설정
//  .attr(): 선택된 요소 집합의 첫 번째 요소로 지정된 속성 값을 리턴하거나 선택된 요소의 지정된 
//           속성을 전달받은 값으로 설정한다.
//  .removeAttr(): 지정된 속성을 제거한다.
//  .prop(): 선택된 요소 집합의 첫 번째 요소로 지정된 프로퍼티 값을 리턴하거나 선택된 요소의 지정된
//           프로퍼티를 전달받은 값으로 설정한다.
//  .removeProp(): 지정된 프로퍼티를 제거한다.

function changeImg() {
	//	attr('속성이름'): 인수로 지정된 속성의 속성값을 얻어온다.
	console.log($('img').eq(4).attr('id'));
	console.log($('img').eq(4).attr('title'));
	console.log($('img').eq(4).attr('src'));
	//	attr('속성이름', '속성값'): 인수로 지정된 속성의 속성값을 수정한다.
	$('img').eq(4).attr('src', './images/img05.jpg');
	$('img').eq(4).removeAttr('title');
}
























