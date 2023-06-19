<%@page import="com.tjoeun.vo.FreeboardVO"%>
<%@page import="com.tjoeun.service.FreeboardService"%>
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
//	delete.jsp에서 넘어오는 삭제할 글번호, 삭제 후 돌아갈 페이지 번호, 삭제하기 위해서 입력한 비밀번호를 받는다.
	int currentPage = Integer.parseInt(request.getParameter("currentPage"));
	//out.println(currentPage);
%>

<jsp:useBean id="vo" class="com.tjoeun.vo.FreeboardVO">
	<jsp:setProperty property="*" name="vo"/>
</jsp:useBean>

<%
	FreeboardService service = FreeboardService.getInstance();
//	삭제할 글의 비밀번호와 삭제하기 위해 입력한 비밀번호를 비교하기 위해 삭제할 글을 얻어온다.
	FreeboardVO original = service.selectByIdx(vo.getIdx());
	//out.println(original);
	
//	삭제할 글의 비밀번호(original.getPassword())와 삭제하기 위해 입력한 비밀번호(vo.getPassword())를 비교해서 같으면 글을 삭제한 후
//	목록으로 돌아가고, 다르면 비밀번호가 올바르지 않다는 메시지를 보여준 후 목록으로 돌아간다.
	out.println("<script>");
	if (original.getPassword().trim().equals(vo.getPassword())) {
		//	비밀번호가 일치하면 글을 삭제하는 메소드를 실행한다.
		service.delete(vo.getIdx());
		
		out.println("alert('" + vo.getIdx() + "번 글 삭제완료!')");
	} else {
		//	비밀번호가 일치하지 않으면 오류 메시지를 출력한다.
		out.println("alert('비밀번호가 올바르지 않습니다.')");
	}
	out.println("location.href='list.jsp?currentPage=" + currentPage + "'");
	out.println("</script>");
%>

</body>
</html>