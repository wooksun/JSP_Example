<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- 부트스트랩 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- js -->
<script type="text/javascript" src="./js/setting.js" defer="defer"></script>

</head>
<body>

   <div class="m-3">
      <table class="table" style="width: 700px; margin-left: auto; margin-right: auto;">
         <tr class="table-success">
            <th colspan="4" style="font-size: 30px; text-align: center;">게시글 보기</th>
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
            <th class="align-middle-dark">제목</th>
            <td colspan="3">
               <c:set var="subject" value="${fn:replace(vo.subject, '<', '&lt;')}"/>
               <c:set var="subject" value="${fn:replace(subject, '>', '&gt;')}"/>
               ${subject}
            </td>
         </tr>
         <tr>
            <th class="align-middle">내용</th>
            <td colspan="3">
               <c:set var="content" value="${fn:replace(vo.content, '<', '&lt;')}"/>
               <c:set var="content" value="${fn:replace(content, '>', '&gt;')}"/>
               <c:set var="content" value="${fn:replace(content, enter, '<br/>')}"/>
               ${content}
            </td>
         </tr>
         <tr class="table-secondary" >
            <td colspan="4" align="center">
               <input 
                  class="btn btn-outline-primary btn-sm" 
                  type="button" 
                  value="수정하기"
                  style="font-size: 13px;"
                  onclick="location.href='selectByIdx.jsp?idx=${vo.idx}&currentPage=${currentPage}&job=update'"/>
               <input 
                  class="btn btn-outline-danger btn-sm" 
                  type="button" 
                  value="삭제하기" 
                  style="font-size: 13px;"
                  onclick="location.href='selectByIdx.jsp?idx=${vo.idx}&currentPage=${currentPage}&job=delete'"/>
               <!-- 
                  history.back(), history.go(-1)을 사용하면 단순히 전 화면으로 돌아가서 증가된 조회수가
                  반영되지 않는다. 
               -->
               <input 
                  class="btn btn-outline-warning btn-sm" 
                  type="button" 
                  value="돌아가기" 
                  style="font-size: 13px;" 
                  onclick="location.href='list.jsp?currentPage=${currentPage}'"
               />
            </td>
         </tr>
      </table>
   </div>
   
  <hr style="color: red; width: 700px; margin-left: auto; margin-right: auto;">
  
  <!-- 댓글 폼 -->
  <form class="m-3" action="commentOK.jsp" method="post" name="commentForm">
  	<table class="table" style="width: 700px; margin-left: auto; margin-right: auto;">
  		<tr class="table-success">
          <th colspan="4" style="font-size: 30px; text-align: center;">댓글 보기</th>
        </tr>
        
        <!-- 이 줄은 원래 보이면 안되는 줄이다. => 작업이 완료되면 화면에 표시되지 않게 한다. -->
        <!-- <tr style="display: none;"> -->
        <tr>
        	<td colspan="4">
        		<!-- 수정 또는 삭제할 댓글의 글번호 -->
        		idx: <input type="text" name="idx" value="${vo.idx}" size="1"/>
        		<!-- 현재 댓글이 어떤 메인글의 댓글인가? -->
        		gup: <input type="text" name="gup" value="${vo.idx}" size="1"/>
        		<!-- 작업 모드, 1 => 댓글 저장 / 2 => 댓글 수정 / 3 => 댓글 삭제 -->
        		mode: <input type="text" name="mode" value="1" size="1"/>
        		<!-- 메인글이 표시되던 페이지 번호 -->
        		currentPage: <input type="text" name="currentPage" value="${currentPage}" size="1"/>
        		<!-- 댓글 작성자 IP 주소 -->
        		ip: <input type="text" name="ip" value="${pageContext.request.remoteAddr}"/>
        	</td>
        </tr>
        
        <!-- 이 줄부터 댓글 입력, 수정, 삭제에 사용한다. -->
        <tr>
        	<th class="align-middle" style="width: 100px; text-align: center;">
        		<label for="name">이름 :</label>
        	</th>
        	<td style="width: 250px;">
        		<input id="name" class="form-control form-control-sm" type="text" name="name"/>
        	</td>
        	<th class="align-middle" style="width: 100px; text-align: center;">
        		<label for="password">비밀번호 :</label>
        	</th>
        	<td style="width: 250px;">
        		<input id="password" class="form-control form-control-sm" type="password" name="password"/>
        	</td>
        </tr>
        <tr>
        	<th class="align-middle" style="width: 100px; text-align: center;">
        		<label for="content">내용 :</label>
        	</th>
        	<td colspan="3" style="width: 600px;">
        		<textarea id="content" class="form-control form-control-sm" rows="3" name="content" style="resize: none;"></textarea>
        	</td>
        </tr>
        
        <tr class="table-success">
        	<td colspan="4" align="center">
        		<input 
        			class="btn btn-outline-success btn-sm" 
        			type="submit" 
        			value="댓글저장" 
        			style="font-size: 13px;"
        			name="commentBtn"/>
        		<input 
        			class="btn btn-outline-danger btn-sm" 
        			type="button" 
        			value="다시쓰기" 
        			style="font-size: 13px;"
        			onclick="setting(0, 1, '댓글저장', '', '')"/>
        	</td>
        </tr>
        
        <!-- 댓글을 출력한다. -->
        <c:set var="comment" value="${freeboardCommentList.list}"></c:set>
      
        
        <!-- 댓글이 없는 경우 -->
        <c:if test="${comment.size() == 0}">
         <tr>
            <td colspan="4">
               <marquee>저장된 댓글이 없습니다.</marquee>
            </td>
         </tr>
      </c:if>
        
        <!-- 댓글이 있는 경우 -->
        <c:if test="${comment.size() != 0}">
        <c:forEach var="co" items="${comment}">
        <tr class="table-success">
        	<td colspan="4">
        		${co.idx}.
        		<c:set var="subject" value="${fn:replace(co.name, '<', '&lt;')}"/>
				<c:set var="subject" value="${fn:replace(name, '>', '&gt;')}"/>
				${name} 님이
				<fmt:formatDate value="${co.writeDate}" pattern="yyyy.MM.hh(E)"/>에 남긴글<br/>
				<c:set var="content" value="${fn:replace(co.content, '<', '&lt;')}"/>
                <c:set var="content" value="${fn:replace(content, '>', '&gt;')}"/>
                <c:set var="content" value="${fn:replace(content, enter, '<br/>')}"/>
                ${content}
                <br/>
                <div align="right">
                <!-- 자바스크립트 함수의 인수로 문자열을 전달할 경우 반드시 따옴표로 묶어야 한다. -->
                	<input 
	                  class="btn btn-outline-primary btn-sm" 
	                  type="button" 
	                  value="수정하기"
	                  style="font-size: 13px;"
	                  onclick="setting(${co.idx}, 2, '댓글수정', '${name}', '${content}')"/>
	               	<input 
	                  class="btn btn-outline-danger btn-sm" 
	                  type="button" 
	                  value="삭제하기" 
	                  style="font-size: 13px;"
	                  onclick="setting(${co.idx}, 3, '댓글삭제', '${name}', '${content}')"/> 
	                </div>
        	</td>
        </tr>
        </c:forEach>
        </c:if>
        
  	</table>
  </form>
   
</body>
</html>