<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주민등록번호 유효성 검사</title>
<script type="text/javascript" defer="defer" src="./js/juminForm.js"></script>
</head>
<body>

<!--
	onsubmit 이벤트는 form의 submit 버튼이 클릭되면 실행되는 이벤트이다.
	form check는 submit 버튼이 클릭되면 실행되는 onsubmit 이벤트에서 javascript 함수를 실행해서 form에 입력된 데이터가 정상적인 데이터인가,
	유효성을 검사해서 검사 결과가 정상이면 true, 오류가 발생되면 false를 리턴하게 만든다. => 기본값은 true이다.
	onsubmit="return javascript함수(this)" 형태로 코딩하며 javascript 함수의 실행 결과 return 값이 true면
-->

<form action="juminFormOK.jsp" method="post" name="juminForm" onsubmit="return formCheck(this)">
	<input type="text" name="j1" maxlength="6" placeholder="주민등록번호 앞자리" onkeyup="moveNext(this, 6, document.juminForm.j2)"/>
	-
	<input type="text" name="j2" maxlength="7" placeholder="주민등록번호 뒷자리" onkeyup="moveNext(this, 7, document.juminForm.sendBtn)"/>
	<input type="submit" name="sendBtn" value="검사하기"/>
</form>

</body>
</html>