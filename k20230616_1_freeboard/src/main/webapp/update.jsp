<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수정할 글 보기</title>

<!-- 부트스트랩 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

</head>
<body>

<!-- 수정할 글을 화면에 보여주고 비밀번호를 입력받아 실제로 글을 수정하는 페이지로 넘겨준다. -->
<fmt:requestEncoding value="UTF-8"/>


<form class="m-3" action="updateOK.jsp" method="post">
	 <table class="table" style="width: 700px; margin-left: auto; margin-right: auto;">
		<tr class="table-success">
            <th colspan="4" style="font-size: 30px; text-align: center;">수정할 글 보기</th>
         </tr>
		 <tr class="table-dark">
            <th style="width: 100px; text-align: center;">글번호</th>
            <th style="width: 350px; text-align: center;">이름</th>
            <th style="width: 150px; text-align: center;">작성일</th>
            <th style="width: 100px; text-align: center;">조회수</th>
         </tr>
          <tr>
            <td align="center">
               ${vo.idx}
            </td>
            <td align="center">
               <c:set var="name" value="${fn:replace(vo.name, '<', '&lt;')}"/>
               <c:set var="name" value="${fn:replace(name, '>', '&gt;')}"/>
               ${name}
            </td>
            <td align="center">
               <jsp:useBean id="date" class="java.util.Date"/>
               <c:if test="${date.year == vo.writeDate.year && date.month == vo.writeDate.month &&
                  date.date == vo.writeDate.date}">
                  <fmt:formatDate value="${vo.writeDate}" pattern="a h:mm:ss"/>
               </c:if>
               <c:if test="${date.year != vo.writeDate.year || date.month != vo.writeDate.month ||
                  date.date != vo.writeDate.date}">
                  <fmt:formatDate value="${vo.writeDate}" pattern="yyyy.MM.dd(E)"/>
               </c:if>
            </td>
            <td align="center">
               ${vo.hit}
            </td>
         </tr>
          <tr>
            <th class="align-middle-dark">
            	<label for="subject">제목</label>
            </th>
            <td colspan="2">
              <%--  
               <c:set var="subject" value="${fn:replace(vo.subject, '<', '&lt;')}"/>
               <c:set var="subject" value="${fn:replace(subject, '>', '&gt;')}"/>
               ${subject} 
               --%>
               <input 
               		id="subject"
	            	class="form-control form-control-sm" 
	            	type="text" 
	            	name="subject"
	            	value="${vo.subject}"/>
            </td>
            <!-- 공지글 -->
            <th class="align-middle table-dark"  width="100" style="text-align: center;">
				공지글
				<c:if test="${fn:trim(vo.notice) == 'YES'}"> <!-- 공지글인가? -->
					<input class="form-check-input" type="checkbox" name="notice" checked="checked"/>
				</c:if>
				<c:if test="${fn:trim(vo.notice) != 'YES'}"> <!-- 일반글인가?? -->
					<input class="form-check-input" type="checkbox" name="notice" value="YES">
				</c:if>
			</th>
         </tr>
         <tr>
            <th class="align-middle">
            	<label for="label">내용</label>
            </th>
            <td colspan="3">
              <%--  
               <c:set var="content" value="${fn:replace(vo.content, '<', '&lt;')}"/>
               <c:set var="content" value="${fn:replace(content, '>', '&gt;')}"/>
               <c:set var="content" value="${fn:replace(content, enter, '<br/>')}"/>
               ${content} 
               --%>
               <textarea 
               		id="content"
               		class="form-control form-control-sm"
               		rows="10"
               		name="content" 
               		style="resize: none;">${vo.content}</textarea>
            </td>
         </tr>
         <tr class="table-secondary" >
            <td colspan="4" align="center">
            	<div class="row g-3 align-items-center" style="width: 90%; margin-left: auto; margin-right: auto;">
            		<div class="col-auto">
            			<label for="password">비밀번호</label>
	            		<input id="password" class="form-control form-control-sm" type="password" name="password" style="font-size: 13px;">
            		</div>
            	<div class="col-auto">
            		<input 
	            		class="btn btn-outline-success btn-sm" 
	            		type="submit" 
	            		value="수정하기" 
	            		style="font-size: 13px;"/>
            		<input 
                        class="btn btn-outline-danger btn-sm" 
                        type="reset"
                        value="다시쓰기"
                        style="font-size: 13px;">
            		<input 
            			class="btn btn-outline-warning btn-sm" 
            			type="button" 
            			value="돌아가기" 
            			style="font-size: 13px;"
            			onclick="history.back()"/>
            		<input 
            			class="btn btn-outline-primary btn-sm" 
            			type="button" 
            			value="목록보기" 
            			style="font-size: 13px;"
            			onclick="location.href='list.jsp?currentPage=${currentPage}'"/>
            	</div>
            </div>
          </td>
        </tr>
	</table>
	
	<!-- 수정할 글번호와 수정 후 돌아갈 페이지 번호를 form에 hidden으로 저장해서 deleteOK.jsp로 넘긴다. -->
	<input type="hidden" name="idx" value="${vo.idx}"/>
	<input type="hidden" name="currentPage" value="${currentPage}"/>
	
</form>
</body>
</html>