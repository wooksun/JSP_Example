<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카테고리 프로젝트</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="./js/formCheck.js" defer="defer"></script>
</head>
<body class="p-3">

<h1 class="m-3">Category Project</h1>

<!-- 메인 카테고리 입력 -->
<!-- js로 메인 카테고리 입력 폼 체크 -->
<form class="row m-3" action="insert.jsp" method="post" onsubmit="return mainFormCheck(this)">
	<div class="col-md-3">
		<input class="form-control" type="text" name="category"/>
	</div>
	<div class="col-md-2">
		<input class="btn btn-outline-primary" type="submit" value="메인 카테고리 만들기"/>
	</div>
</form>
<hr style="color: red;"/>

<!-- 카테고리 개수만큼 반복하며 카테고리 목록을 출력하고, 서브 카테고리를 입력받는다. -->
<%-- ${categoryList} --%>
<c:forEach var="vo" items="${categoryList.list}">
	<!-- js로 서브 카테고리 입력 폼 체크 -->
	<form class="row m-3" action="reply.jsp" method="post" onsubmit="return subFormCheck(this)">
		<div class="col-md-4">
			<input type="text" name="idx" value="${vo.idx}" size="1"/>
			<input type="text" name="gup" value="${vo.gup}" size="1"/>
			<input type="text" name="lev" value="${vo.lev}" size="1"/>
			<input type="text" name="seq" value="${vo.seq}" size="1"/>
			${vo.category}
		</div>
		
		<div class="col-md-3">
			<input class="form-control" type="text" name="category"/>
		</div>
		<div class="col-md-2">
			<input class="btn btn-outline-primary" type="submit" value="서브 카테고리 만들기"/>
		</div>
	</form>
</c:forEach>


</body>
</html>