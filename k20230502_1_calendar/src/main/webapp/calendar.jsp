<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.tjoeun.myCalendar.MyCalendar"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>만년 달력</title>

<style type="text/css">

	tr {
		height: 70px;
	}
	
	th {
		font-size: 16pt;
		width: 100px;
	}

	th#title {
		font-size: 30pt; /* 글꼴 크기 */
		font-family: D2Coding; /* 글꼴 이름 */
		font-weight: bold; ; /* 글씨 굵기 */
		color:tomato;
	}
	
	th#sun {
		color:red;
	}
	
	th#sat {
		color:blue;
	}
	
	td{
		text-align: right; /* 수평 정렬 */
		vertical-align: top; /* 수직 정렬 */
	}
	
	td.sun {
		color:red;
	}
	
	td.sat {
		color:blue;
	}
</style>

</head>
<body>

<%
//	달력 메소드 테스트
//	out.println(MyCalendar.isLeapYear(2023));
//	out.println(MyCalendar.lastDay(2020, 2));
//	out.println(MyCalendar.totalDay(2023, 5,1));
//	out.println(MyCalendar.weekDay(2023, 5,1));

//	컴퓨터 시스템의 년, 월을 얻어온다.
/* 	Date date = new Date();
	int year = date.getYear() + 1900;
	int month = date.getMonth() + 1; */
	Calendar calendar = Calendar.getInstance();
	int year = calendar.get(Calendar.YEAR);
	int month = calendar.get(Calendar.MONTH)+1;
//	out.println(year + "년 " + month + "월");


// 이전달, 다음달 하이퍼링크 또는 버튼을 클릭하면 get 방식으로 넘어오는 달력을 출력할 년,월을 받는다.
// 달력이 최초로 실행되면 이전 페이지가 존재하지 않기 때문에 넘어오는 데이터가 없으므로 year와 month가 null이므로 NumberformatException이 발생된다.
// -> 예외 처리를 해야한다.
	try{
		year = Integer.parseInt(request.getParameter("year"));
		month = Integer.parseInt(request.getParameter("month"));
		
		//month에 13이 넘어왔으면 달력에는 다음해 1월을 표시해야 하고, month에 0이 넘어왔으면 달력에는 전년도 12월을 표시해햐 한다.
		if(month >= 13) {
			year++;
			month=1;
		} else if(month <= 0) {
			year--;
			month=12;
		}
	} catch(NumberFormatException e) {
		
	}
		
%>

<table width="700" border="1" align="center" cellpadding="5" cellspacing="0">
	<tr>
	<th>
		<a href="?year=<%=year%>&month=<%=month-1%>">이전달</a>
	</th>
		<th id="title" colspan="5">
			<%=year %>년 <%=month %>월
		</th>
	<th>
		<a href="?year=<%=year%>&month=<%=month+1%>">다음달</a>
	</th>
	</tr>
	<tr>
		<th id="sun">일</th>
		<th>월</th>
		<th>화</th>
		<th>수</th>
		<th>목</th>
		<th>금</th>
		<th id="sat">토</th>
	</tr>
	
	<!-- 달력에 날짜를 출력한다. => 반복작업 -->
	<tr>
<%
//	1일이 출력될 위치(요일)을 맞추기 위해 달력을 출력할 달 1일의 요일만큼 반복하며 빈칸을 출력한다.
	for(int i=0; i<MyCalendar.weekDay(year, month, 1); i++) {
		out.println("<td>&nbsp;</td>");
	}
	
//	1일부터 달력을 출력할 달의 마지막 날짜까지 반복하며 날짜를 출력한다.
	for(int i=1; i<=MyCalendar.lastDay(year, month); i++) {
		
		
		// <td> 태그에 요일에 따른 class 속성을 지정한다.
		/* if(MyCalendar.weekDay(year, month, i) == 0) { //일요일?
			out.println("<td class='sun'>" + i + "</td>");
		} else if(MyCalendar.weekDay(year, month, i) == 6) { //토요일?
			out.println("<td class='sat'>" + i + "</td>");
		} else { //평일
			out.println("<td>" + i + "</td>");
		} */
		
		switch(MyCalendar.weekDay(year, month, i)){
			case 0:	//일요일?
				out.println("<td class='sun'>" + i + "</td>");
				break;
			case 6:	//토요일?
				out.println("<td class='sat'>" + i + "</td>");
				break;
			default :	//평일?
				out.println("<td>" + i + "</td>");
				break;
				
		}
			
		//출력한 날짜(i)가 토요일이면 줄을 바꾼다.
		if(MyCalendar.weekDay(year, month, i) == 6) { 
			out.println("</tr><tr>");
		}
	} 
%>

	</tr>


</table>

</body>
</html>