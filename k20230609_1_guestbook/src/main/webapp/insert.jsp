<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>방명록 쓰기</title>
<link rel="stylesheet" href="./guestbook.css"/>
</head>
<body>

<form action="insertOK.jsp" method="post">
	<table width="600" border="1" align="center" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="2">방명록쓰기</th>
		</tr>
		<tr>
			<th width="100">
				<label for="name">이름</label>
			</th>
			<td width="500">
				<input id="name" type="text" name="name"/>
			</td>
		</tr>
		<tr>
			<th>
				<label for="password">비밀번호</label>
			</th>
			<td>
				<input id="password" type="password" name="password"/>
			</td>
		</tr>
		<tr>
			<th>
				<label for="memo">메모</label>
			</th>
			<td>
				<textarea id="memo" rows="10" name="memo" style="resize: none; width: 99%;"></textarea>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input class="button button1" type="submit" value="글남기기"/>
				<input class="button button1" type="reset" value="다시쓰기"/>
				<input class="button button1" type="button" value="돌아가기" onclick="history.back()"/>
			</td>
		</tr>
	</table>
	
	<!-- 작성자 ip 주소를 hidden으로 넘겨준다. -->
	<%-- <input type="hidden" name="ip" value="<%=request.getRemoteAddr()%>"/> --%>
	<input type="hidden" name="ip" value="${pageContext.request.remoteAddr}"/>
	
</form>

</body>
</html>