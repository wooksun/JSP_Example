<%@page import="com.tjoeun.service.SelectService"%>
<%@page import="com.tjoeun.vo.GuestbookList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!--
	currentPage를 넘겨받아 currentPage에 해당되는 1페이지 분량의 글 목록을 테이블에서 얻어와, request 영역에 저장한 후,
	1페이지 분량의 글을 브라우저에 출력하는 페이지(listView.jsp)로 넘겨준다.
-->

<%
	request.setCharacterEncoding("UTF-8");
//	이전 페이지에서 넘어오는 화면에 표시할 글 번호(currentPage)를 받는다. 

//	게시판이 최초로 실행될 때 또는 insertOK.jsp에서 호출될 때 list.jsp로 currentPage가 넘어오지 않는다. => null
//	null은 parseInt() 메소드를 실행했을 때, NumberFormatException이 발생되므로 예외처리를 해야한다.
//	이전 페이지에서 넘어오는 currentPage가 없으면 currentPage를 1로 초기화시켜 사용하고 넘어오는 currentPage가 있으면 넘어온 currentPage
//	값으로 초기화시켜 사용한다.
	int currentPage = 1;
	try {
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
	} catch (NumberFormatException e) {
		
	}
	
	//	카테고리와 검색어를 받는다. 
	String category = request.getParameter("category"); // 카테고리
	String item = request.getParameter("item"); // 검색어
	//	넘어온 검색어가 있으면 카테고리와 검색어를 세션에 저장하고 넘어온 검색어가 없으면 세션에 저장된 카테고리와 검색어를 읽어온다.
	if(item != null) {
		session.setAttribute("category", category);
		item = item.trim().length() == 0 ? "" : item;
		session.setAttribute("item", item);
	} else {
		category = (String) session.getAttribute("category");
		item = (String) session.getAttribute("item");
	}
	
	
	//	브라우저 화면에 표시할 1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수를 초기화시키는 메소드를 얻어온다.
	//	검색어가 넘어온 경우(내용, 이름, 내용 + 이름)와 넘어오지 않은 경우에 따른 메소드를 각각 실행한다.
	SelectService service = SelectService.getInstance();
	GuestbookList guestbookList = null;
	
	//	검색어가 없는 경우와, 검색어가 있을 때 카테고리가 내용, 이름, 내용+이름은 경우를 각각 메소드로 구현한다.
	/* 
	if (item == null || item.trim().length() == 0) { // 검색어가 넘어 왔는가?
		//	검색어가 입력되지 않은 경우
		guestbookList = service.selectList(currentPage);
	} else if(category.equals("내용")) { 
		// 검색어가 입력되고 카테고리가 "내용"인 경우
		guestbookList = service.selectListMemo(currentPage, item);
	} else if(category.equals("이름")) { 
		// 검색어가 입력되고 카테고리가 "이름"인 경우
		guestbookList = service.selectListName(currentPage, item);
	} else if(category.equals("내용+이름")) { 
		// 검색어가 입력되고 카테고리가 "내용+이름"인 경우
		guestbookList = service.selectListMemoName(currentPage, item);
	}
	*/
	 
	//	검색어가 있는 경우와 검색어가 없는 경우로 메소드를 구현한다.
  	if (item == null || item.trim().length() == 0) { // 검색어가 넘어 왔는가?
		//	검색어가 입력되지 않은 경우
		guestbookList = service.selectList(currentPage);
	} else { 
		//	검색어가 입력된 경우
		guestbookList = service.selectListMulti(currentPage, category, item);
	} 
	 
	//	1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수 초기화 된 객체를 request 영역에 저장한다.
	request.setAttribute("guestbookList", guestbookList);
	
	//	textarea에 글을 입력할 때 엔터키를 눌러 줄을 바꿔 입력한 경우 브라우저에 <br/>태그로 바꿔 출력하기 위해
	//	request 영역에 "\r\n"을 저장한다.
	request.setAttribute("enter", "\r\n");
	
	//	request 영역에 저장된 글 목록을 브라우저에 표시하는 페이지(listView.jsp)로 넘겨준다.
	pageContext.forward("listView2.jsp");
%>

</body>
</html>