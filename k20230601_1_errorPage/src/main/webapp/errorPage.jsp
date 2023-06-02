<%@page import="java.util.ArrayList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error Page</title>
</head>
<body>

<a href="pageOK.jsp">Click</a>

<%
	//int i = 10 / 0;
	//int j = Integer.parseInt("안녕하세요!");
	ArrayList<String> list = null;
	list.get(0);
%>
</body>
</html>