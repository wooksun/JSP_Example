<%@page import="javax.sql.DataSource"%>
<%@page import="javax.naming.InitialContext"%>
<%@page import="javax.naming.Context"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
//	lib 폴더에 tomcatDBCP 드라이버 클래스(tomcat-dbcp.jar)를 복사해 넣는다.
//	META-INF 폴더에 context.xml 파일을 만든다. => context.xml 파일을 복사해 넣는다. => 데이터베이스 연결정보
//	web.xml 파일에 아래의 내용을 코딩한다.
//  <resource-ref>
//  	<description>설명, 안써도 됨</description>
//  	<res-ref-name>jdbc/TestDB</res-ref-name>
// 		<res-type>javax.sql.DataSource</res-type>
// 		<res-auth>Container</res-auth>
//  </resource-ref>

	Connection conn = null;
	try {
		Context initContext = new InitialContext();
		//Context envContext = (Context) initContext.lookup("java:/comp/env");
		//DataSource dataSource = (DataSource) envContext.lookup("jdbc/TestDB");
		//	위의 주석으로 처리한 2줄은 tomcat server 7.0부터는 아래와 같이 1줄로 줄여서 사용한다.
		DataSource dataSource = (DataSource) initContext.lookup("java:/comp/env/jdbc/TestDB");
		conn = dataSource.getConnection();
		out.println("연결성공 : " + conn + "<br/>");
	} catch(Exception e) {
		e.printStackTrace();
	} finally {
		if(conn != null) { try{conn.close(); } catch(SQLException e) { e.printStackTrace(); } }
	}
%>

</body>
</html>