<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.tjoeun.memoList.DBUtil"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>출석 페이징</title>

<style type="text/css">

	

</style>
</head>
<body>

<form action="memoInsert.jsp" method="post">
	<table width="1000" align="center" border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="3">출석 게시판 Ver 0.1</th>
		</tr>
		<tr>
			<th width="100">이름</th>
			<th width="100">비밀번호</th>
			<th width="800">메모</th>
		</tr>
		<tr>
			<td align="center">
				<input type="text" name="name" style="width:90%; height: 25px;"/>
			</td>
			<td align="center">
				<input type="text" name="password" style="width:90%; height: 25px;"/>
			</td>
			<td align="center">
				<input type="text" name="memo" style="width:90%; height: 25px;"/>
				<input type="submit" value="저장" style="height: 28px;"/>
			</td>
		</tr>
	</table>
</form>

<br/>
<hr size="3" color="dodgerblue"/>
<br/>

<%
	int pageSize = 10; 
	int totalCount = 0; 
	int totalPage = 0; 
	int currentPage = 1;
	int startNo = 0; 
	int endNo = 0; 
	int startPage = 0; 
	int endPage = 0; 
	
//	=============================================================================================================================================
//	페이지당 표시할 글의 개수를 받아 pageSize 변수에 저장한다.
//	게시판이 최초로 실행될 때 이전 페이지가 없으므로 넘어오는 pageSize 값이 null이고, 
//	보기 버튼 이외의 다른 버튼이 클릭되면 pageSize가 넘어오지 않기 때문에 역시 null이 된다. => 예외 처리를 한다.
	try {
		pageSize = Integer.parseInt(request.getParameter("pageSize"));
		//	화면에 표시할 글의 개수가 정상적으로 넘어왔으므로 화면에 표시할 글의 개수를 세션에 저장한다.
		session.setAttribute("pageSize", pageSize + "");
	} catch (NumberFormatException e) {
		//	보기 버튼을 제외한 나머지 버튼은 pageSize를 전달하는 기능이 없기 때문에 NumberFormatException이 발생되서 이곳으로 오게된다.
		//	이전 페이지에서 넘어오는 pageSize가 null이면 세션에 저장해둔 pageSize를 얻어와서 화면에 표시할 글의 개수로 지정한다.
		//	브라우저가 최초로 실행될 때 세션이 만들어지기 때문에 브라우저가 최초로 실행되면 이전 페이지에서 넘어오는 pageSize도 null
		//	session에 저장된 pageSize도 null이다.
		String temp = (String) session.getAttribute("pageSize");
		if (temp != null) {
			pageSize = Integer.parseInt(temp);
		}
	}
//	=============================================================================================================================================
	
	Connection conn = DBUtil.getMysqlConnection();
	String sql = "SELECT COUNT(*) FROM memolist";
	PreparedStatement pstmt = conn.prepareStatement(sql);
	ResultSet rs = pstmt.executeQuery();
	
	rs.next();
	totalCount = rs.getInt(1);
	
	totalPage = (totalCount - 1) / pageSize + 1;
	
	try {
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
		
		currentPage = currentPage > totalPage ? totalPage : currentPage; 
		
	} catch (NumberFormatException e) {
		
	}


	startNo = (currentPage - 1) * pageSize;
	endNo = startNo + pageSize - 1;

	endNo = endNo < totalCount ? totalCount : endNo;
	sql = "SELECT * FROM memolist ORDER BY idx DESC limit ?, ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, startNo);
	pstmt.setInt(2, pageSize);
	rs = pstmt.executeQuery();
%>

<table width="1200" align="center" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="80">글 번호</th>
		<th width="80">이름</th>
		<th width="840">메모</th>
		<th width="120">작성일</th>
		<th width="80">ip</th>
	</tr>
	
	<tr>
		<td colspan="3">
			
			<!-- 한 페이지에 표시할 글의 개수를 변경한다. -->
			<form action="?" method="post">
				페이지당 표시할 글의 개수를 선택하세요.
				<!-- 
				<select name="pageSize" style="width:70px; height: 25px;">
					<option>3</option>
					<option>5</option>
					<option selected="selected">10</option>
					<option>15</option>
					<option>20</option>
				</select>
				 -->
				 <!-- 
				 <input type="radio" name="pageSize" value="3">3
				 <input type="radio" name="pageSize" value="5">5
				 <input type="radio" name="pageSize" value="10">10
				 <input type="radio" name="pageSize" value="15">15
				 <input type="radio" name="pageSize" value="20">20
				  -->
				<input type="number" name="pageSize" value="10"/>
				<input type="submit" value="보기"/>
			</form>
		</td>
		<td colspan="2" align="right">
			<%=totalCount%>(<%=currentPage%> / <%=totalPage%>) 
		</td>
	</tr>
	
<%
	if(rs.next()) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd(E)");
		do {
%>			
	<tr>
		<td align="center"><%=rs.getInt("idx") %></td>	
		<td align="center"><%=rs.getString("name") %></td>	
		<td><%=rs.getString("memo") %></td>	
		<td align="center"><%=sdf.format(rs.getTimestamp("writeDate")) %></td>	
		<td><%=rs.getString("ip") %></td>	
	</tr>		
			
<%			
		} while(rs.next());
	} else {
%>	

	<tr>
		<td colspan="5">
			<marquee>테이블에 저장된 데이터가 없습니다.</marquee>
		</td>
	</tr>

<%	
	}
%>	

	<tr>
		<td colspan="5" align="center">
		
<%
	startPage = (currentPage - 1) / 10 * 10 + 1;
	endPage = startPage + 9;
	endPage = endPage > totalPage ? totalPage : endPage;
	
	if (currentPage > 1) {
%>

	<button 
		type="button" 
		title="첫 페이지로 이동합니다." 
		onclick="location.href='?currentPage=1'"
		>처음</button>

<% 
	} else {
%>

	<button type="button" disabled="disabled" title="이미 첫 페이지 입니다.">처음</button>

<% 	
	}
	
	if(startPage > 1) {
%>

	<button 
		type="button" 
		title="이전 10페이지로 이동합니다." 
		onclick="location.href='?currentPage=<%=startPage - 1%>'"
		>이전</button>

<% 
	} else {
%>	
	
	<button type="button" disabled="disabled" title="이미 첫 10페이지 입니다.">이전</button>
	
<% 	
	}

	for (int i=startPage; i<=endPage; i++) {
		if (currentPage == i) {
			out.println("<button type='button' disabled='disabled'>" + i + "</button>");
		} else {
			out.println("<button type='button' title='" + i + 
					" 페이지로 이동합니다.' onclick='location.href=\"?currentPage=" + i + "\"'>" + i + "</button>");
		}
	}
	
	if(endPage < totalPage) {
%>

	<button 
		type="button" 
		title="다음 10페이지로 이동합니다." 
		onclick="location.href='?currentPage=<%=endPage + 1%>'"
		>다음</button>

<% 	
	} else {
%>			
	
	<button type="button" disabled="disabled" title="이미 마지막 10페이지 입니다.">다음</button>
	
<% 		
	}

	if (currentPage < totalPage) {
%>

	<button 
		type="button" 
		title="마지막 페이지로 이동합니다." 
		onclick="location.href='?currentPage=<%=totalPage%>'"
		>마지막</button>

<% 	
	} else {
%>

	<button type="button" disabled="disabled" title="이미 마지막 페이지 입니다.">마지막</button>

<% 	
	}
	
%>		
		
		</td>
	</tr>
	
</table>

</body>
</html>










