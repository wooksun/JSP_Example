<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Oracle Connection Test</title>
</head>
<body>

<!--
	오라클 연결
	시작 버튼 => 오라클 => Run Sql Command Line 실행
	
	SQL> connect system
	Enter password: => 비밀번호를 입력한다. 비밀번호를 입력할 때, 아무런 문자도 표시되지 않는다.
	Connected.
	
	사용자 계정 생성
	create user wook identified by 0000;
	User created.
	
	SQL> select * from all_users; => 현재 생성된 계정 생성
	
	권한설정 => DBA(관리자), resource(개발자), connect(일반 사용자)
	SQL> grant connect, resource to 계정명;
	Grant succeeded.
-->

<%
	Connection conn = null;
	try {
		//	oracle 드라이버 클래스를 읽어온다.
		Class.forName("oracle.jdbc.driver.OracleDriver");
		//	oracle에 연결해서 Connection 객체에 저장한다.
		//	DriverManager 클래스의 getConnection(url, user, password) 메소드로 oracle에 연결한다.
		//	url에 사용할 oracle이 설치된 경로를 적는다.
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		conn = DriverManager.getConnection(url, "wook", "0000");
		
		out.println("연결성공: " + conn + "<br/>");
		
	} catch(ClassNotFoundException e) {
		out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
	} catch(SQLException e) {
		out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
	} finally {
		if(conn != null) { try{conn.close(); } catch(SQLException e) { e.printStackTrace(); } }
	}
%>

</body>
</html>