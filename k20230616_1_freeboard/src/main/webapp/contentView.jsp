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
  
   
</body>
</html>