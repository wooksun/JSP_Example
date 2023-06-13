<%@page import="com.tjoeun.service.UpdateService"%>
<%@page import="com.tjoeun.service.DeleteService"%>
<%@page import="com.tjoeun.service.SelectService"%>
<%@page import="com.tjoeun.vo.GuestbookVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

//	update.jsp에서 넘어오는 데이터를 받는다.
	int currentPage = Integer.parseInt(request.getParameter("currentPage"));
	//out.println(currentPage);
%>
<jsp:useBean id="vo" class="com.tjoeun.vo.GuestbookVO">
	<jsp:setProperty property="*" name="vo"/>
</jsp:useBean>
<%-- ${vo} --%>

<%
//	수정할 글의 비밀번호와 수정하기 위해 입력한 비밀번호를 비교하기 위해 수정할 글을 얻어온다.
	GuestbookVO original = SelectService.getInstance().selectByIdx(vo.getIdx());
	//out.println(original);
	
//  oracle을 필드 선언시 데이터 타입을 char(고정길이 문자열)로 선언하면 필드의 크기보다 입력된 문자의 크기가 작을 때, 
//	남는 자리가 모두 공백으로 리턴된다.
	//out.println("수정할 글의 비밀번호 글자수: " + original.getPassword().length() + "<br/>");
	//out.println("공백을 제거한 수정할 글의 비밀번호 글자수: " + original.getPassword().trim().length() + "<br/>");
	//out.println("수정하기 위해 입력한 비밀번호 글자수: " + vo.getPassword().length() + "<be/>");
//	테이블을 설계할 때, char 대신 varchar2(가변길이 문자열)로 선언한다.
//	이미 테이블이 char로 설계된 상태라면 trim() 메소드로 불필요한 빈 칸을 제거해서 사용한다.
	
//	수정할 글의 비밀번호(original.getPassword())와 수정하기 위해 입력한 비밀번호(vo.getPassword())를 비교한다.
	out.println("<script>");
	if (original.getPassword().trim().equals(vo.getPassword())) {
		//	비밀번호가 일치하면 글을 수정하는 메소드를 실행한다.
		UpdateService.getInstance().update(vo);
		
		out.println("alert('" + original.getIdx() + "번 글 수정완료!')");
	} else {
		//	비밀번호가 일치하지 않으면 오류 메시지를 출력한다.
		out.println("alert('비밀번호가 일치하지 않습니다.')");
	}
	out.println("location.href='list.jsp?currentPage=" + currentPage + "'");
	out.println("</script>");
%>

</body>
</html>