<%@ page import="com.tjoeun.useBean.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberOK</title>
</head>
<body>

<!-- 데이터 받는 페이지에서 무조건 해야하는 것 => 한글 깨짐 방지 -->
<%
	request.setCharacterEncoding("UTF-8");
//	member.jsp에서 넘어오는 데이터를 받는다.
	String id = request.getParameter("id");
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	int age = Integer.parseInt(request.getParameter("age"));
	boolean  gender = Boolean.parseBoolean(request.getParameter("gender"));
	
//	접속자 ip 주소를 받는다.
//	getRemoteAddr(): 접속자 ip 주소를 얻어온다.
//	String ip = request.getRemoteAddr();

//	form에 저장되서 전송되는 ip 주소를 얻어온다.
	String ip = request.getParameter("ip");
	//out.println("접속자 ip: " + ip);
	
	//	MemberVO 클래스 객체를 만들고 member.jsp에서 넘겨받은 데이터를 넣어준다.
	/* 
	MemberVO vo = new MemberVO();
	vo.setId(id);
	vo.setName(name);
	vo.setPassword(password);
	vo.setAge(age);
	vo.setGender(gender);
	vo.setIp(ip);
	out.println(vo + "<br/>");
	*/
	 
	MemberVO vo = new MemberVO(id, name, password, age, gender, ip);
	out.println(vo + "<br/>");
%>

</body>
</html>