<%@page import="com.tjoeun.service.InsertService"%>
<%@page import="com.tjoeun.vo.GuestbookVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>insertOK</title>
</head>
<body>

<%
request.setCharacterEncoding("UTF-8");
/*
String name = request.getParameter("name");
String password = request.getParameter("password");
String memo = request.getParameter("memo");
String ip = request.getParameter("ip"); 
// out.println(name + ", "  + password + ", " + memo + ", " + ip);

GuestbookVO vo  = new GuestbookVO();
vo.setName(name);
vo.setPassword(password);
vo.setMemo(memo);
vo.setIp(ip);
*/
%>

<jsp:useBean id="vo" class="com.tjoeun.vo.GuestbookVO">
   <jsp:setProperty property="*" name="vo"/>
</jsp:useBean>
${vo}<br/>

<%
// VO 클래스 => 글 1건을 기억하는 클래스
// List 클래스 => 1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수를 기억하는 클래스
// Service 클래스 => sql 명령을 실행하기 전에 필요한 전처리 작업을 실행하는 클래스 
//              => 비즈니스 로직을 작성하는 클래스
// DAO(Data Access Object) => sql 명령을 실행하는 클래스 => sql 명령 1개당 메소드 1개

// insert.jsp에서 넘어온 데이터를 guestbook 테이블에 저장한다.
// 테이블에 저장할 데이터가 저장된 객체(vo)를 전처리 작업을 하기 위해서 Service 클래스로 넘겨서 DAO 
// 클래스에서 sql 명령을 실행하기 전에 필요한 작업이 있다면 실행한다.
	InsertService.getInstance().insert(vo);

// 테이블에 글 1건을 저장했으면 테이블에 저장된 글을 브라우저에 출력하기 위해서 1페이지 분량의 글
// 목록을 얻어오는 페이지(list.jsp)로 넘겨준다.
	response.sendRedirect("list.jsp");
%>

</body>
</html>