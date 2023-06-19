<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--jstl -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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

<!-- css -->
<link rel="stylesheet" href="./css/style.css">
</head>
<body>

<div class="m-3">
	<table class="table" style="width: 1000px; margin-left: auto; margin-right: auto;">
		<tr class="table-success">
			<th colspan="5" style="font-size: 20px; text-align: center;">게시판 보기</th>
		</tr>
		<tr>
			<td colspan="5" align="right">
				${freeboardList.totalCount}(${freeboardList.currentPage} / ${freeboardList.totalPage})
			</td>
		</tr>
		<tr class="table-success">
			<td style="width: 70px; text-align: center;">글번호</td>
			<td style="width: 610px; text-align: center;">제목</td>
			<td style="width: 100px; text-align: center;">이름</td>
			<td style="width: 150px; text-align: center;">작성일</td>
			<td style="width: 70px; text-align: center;">조회수</td>
		</tr>
		
		<!-- 오늘 날짜를 기억하는 Date 클래스 객체를 useBean으로 만든다. -->
		<jsp:useBean id="date" class="java.util.Date">
			<%-- ${date} --%>
		</jsp:useBean>
		
		<!-- 공지글을 출력한다. -->
		<c:if test="${currentPage == 1}">
			<c:forEach var="vo" items="${notice}">
				<tr class="table-warning">
					<td align="center">
						<!-- 공지 아이콘 -->
						<img src="./images/notice.png"/>
					</td>
					
					<td>
						<!-- 제목-->
						<c:set var="subject" value="${fn:replace(vo.subject, '<', '&lt;')}"/>
						<c:set var="subject" value="${fn:replace(subject, '>', '&gt;')}"/>
						<!-- 제목에 하이퍼링크를 걸어준다. -->
						<!-- 하이퍼링크를 클릭하면 조회수를 증가시키고, 클릭한 메인글의 내용을 표시한다. -->
						<a href="increment.jsp?idx=${vo.idx}&currentPage=${currentPage}">
							${subject}(${vo.commentCount})
						</a> 
						<!-- 조회수 -->
						<c:if test="${vo.hit > 10}">
							<!-- hit(조회수) -->
							<img src="./images/hot.gif"/>
						</c:if>
					</td>
					
					<td align="center">
						<!-- 이름 -->
						<c:set var="subject" value="${fn:replace(vo.name, '<', '&lt;')}"/>
						<c:set var="subject" value="${fn:replace(name, '>', '&gt;')}"/>
						${vo.name}
					</td>
					
					<td align="center">
						<!-- 오늘 입력된 글은 시간만 어제 이전에 입력된 글은 날짜만 출력한다. (날짜) -->
						<c:if test="${date.year == vo.writeDate.year && date.month == vo.writeDate.month && date.date == vo.writeDate.date}">
							<fmt:formatDate value="${vo.writeDate}" pattern="a h:mm:ss"/>
						</c:if>
						<c:if test="${date.year != vo.writeDate.year && date.month != vo.writeDate.month && date.date != vo.writeDate.date}">
							<fmt:formatDate value="${vo.writeDate}" pattern="yyyy.MM.dd(E)"/>
						</c:if>
					</td>
					
					<td align="center">
						${vo.hit}
					</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<!-- 메인글을 출력한다. -->
		<!-- list.jsp에서 request 영역에 저장한 freeboardList에서 1페이지 분량의 글이 저장된 ArrayList를 꺼내온다. -->
		<c:set var="list" value="${freeboardList.list}"/>
		<%-- ${list} --%>
		
		<!-- 메인글이 1건도 없으면 글이 없다고 출력한다. -->
		<c:if test="${list.size() == 0}">
			<tr>
				<td colspan="5">
					테이블에 저장된 글이 없습니다.
				</td>
			</tr>
		</c:if>
		
		<!-- 메인글이 있으면, 메인글의 개수만큼 반복하며 글 제목을 출력한다. -->	
		<c:if test="${list.size() != 0}">
			<c:forEach var="vo" items="${list}">
			<tr>
				<td align="center">
					${vo.idx}
				</td>
				<td>
					<!-- 제목에 태그를 적용할 수 없게 한다. -->
					<c:set var="subject" value="${fn:replace(vo.subject, '<', '&lt;')}"/>
					<c:set var="subject" value="${fn:replace(subject, '>', '&gt;')}"/>
					<!-- 제목에 하이퍼링크를 걸어준다. -->
					<!-- 하이퍼링크를 클릭하면 조회수를 증가시키고, 클릭한 메인글의 내용을 표시한다. -->
					<a href="increment.jsp?idx=${vo.idx}&currentPage=${currentPage}">
						${subject}(${vo.commentCount})
					</a> 
					
					<!-- 오늘 입력된 글에 new 아이콘 이미지를 표시한다. -->
					<c:if test="${date.year == vo.writeDate.year && date.month == vo.writeDate.month && date.date == vo.writeDate.date}">
						<!-- new -->
						<img src="./images/ic_new.gif"/>
					</c:if>
					
					<!-- 조회수가 일정 횟수를 넘어가면 hot 아이콘을 표시한다. -->
					<c:if test="${vo.hit > 10}">
						<!-- hit(조회수) -->
						<img src="./images/hot.gif"/>
					</c:if>
					
				</td>
				<td align="center">
					<!-- 이름에 태그를 적용할 수 없게 한다. -->
					<c:set var="subject" value="${fn:replace(vo.name, '<', '&lt;')}"/>
					<c:set var="subject" value="${fn:replace(name, '>', '&gt;')}"/>
					${vo.name}
				</td>
				<td align="center">
					<!-- 오늘 입력된 글은 시간만 어제 이전에 입력된 글은 날짜만 출력한다. -->
					<c:if test="${date.year == vo.writeDate.year && date.month == vo.writeDate.month && date.date == vo.writeDate.date}">
						<fmt:formatDate value="${vo.writeDate}" pattern="a h:mm:ss"/>
					</c:if>
					<c:if test="${date.year != vo.writeDate.year && date.month != vo.writeDate.month && date.date != vo.writeDate.date}">
						<fmt:formatDate value="${vo.writeDate}" pattern="yyyy.MM.dd(E)"/>
					</c:if>
				</td>
				<td align="center">
					${vo.hit}
				</td>
			</tr>
			</c:forEach>
		</c:if>
		
		<!-- 페이지 이동 버튼 -->
		<tr>
			<td colspan="5" align="center">
				<!--처음으로-->
				<c:if test="${freeboardList.currentPage > 1}">
					<button 
						class='button button1'
						type="button" 
						title="첫 페이지로 이동합니다." 
						onclick="location.href='?currentPage=1'"
					>처음</button>
				</c:if>
				
				<c:if test="${freeboardList.currentPage <= 1}"> <!-- else와 같은 의미 -->
					<button 
						class='button button2' 
						type="button" 
						disabled="disabled" 
						title="이미 첫 페이지 입니다."
					>처음</button>
				</c:if>
				
				<!-- 10페이지 앞으로 -->
				<c:if test="${freeboardList.startPage > 1}">
					<button 
						class='button button1'
						type="button" 
						title="이전 10페이지로 이동합니다." 
						onclick="location.href='?currentPage=${freeboardList.startPage - 1}'"
					>이전</button>
				</c:if>
				
				<c:if test="${freeboardList.startPage <= 1}"> <!-- else와 같은 의미 -->
					<button 
						class='button button2' 
						type="button" 
						disabled="disabled" 
						title="이미 첫 10페이지 입니다."
					>이전</button>
				</c:if>
				
				<!-- 페이지 이동 버튼 -->
				<c:forEach var="i" begin="${freeboardList.startPage}" end="${freeboardList.endPage}" step="1">
					<c:if test="${freeboardList.currentPage == i}">
						<button class='button button2' type='button' disabled='disabled'>${i}</button>
					</c:if>
					<c:if test="${freeboardList.currentPage != i}">
						<button class='button button1' type='button' title="${i}페이지로 이동합니다." onclick="location.href='?currentPage=${i}'">${i}</button>
					</c:if>
				</c:forEach>
				
				<!-- 10페이지 뒤로 -->
				<c:if test="${freeboardList.endPage < freeboardList.totalPage}">
					<button 
						class='button button1'
						type="button" 
						title="다음 10페이지로 이동합니다." 
						onclick="location.href='?currentPage=${freeboardList.endPage + 1}'"
					>다음</button>
				</c:if>
				
				<c:if test="${freeboardList.endPage >= freeboardList.totalPage}">
					<button 
						class='button button2' 
						type="button" 
						disabled="disabled" 
						title="이미 마지막 10페이지 입니다."
					>다음</button>
				</c:if>
				
				<!-- 마지막으로 -->
				<c:if test="${freeboardList.currentPage < freeboardList.totalPage}">
					<button 
						class='button button1'
						type="button" 
						title="마지막 페이지로 이동합니다." 
						onclick="location.href='?currentPage=${freeboardList.totalPage}'"
					>마지막</button>
				</c:if>
				
				<c:if test="${freeboardList.currentPage >= freeboardList.totalPage}">
					<button 
						class='button button2' 
						type="button" 
						disabled="disabled" 
						title="이미 마지막 페이지 입니다."
					>마지막</button>
				</c:if>
				
			</td>
		</tr>
		
		<!-- 글쓰기 버튼 -->
		<tr class="table-secondary">
			<td colspan="5" align="right">
				<input 
					class="btn btn-outline-primary btn-sm" 
					type="button" value="글쓰기"
					style="font-size: 13px;" 
					onclick="location.href='insert.jsp'"/>
			</td>
		</tr>
	</table>
</div>

</body>
</html>