<%@page import="java.text.DecimalFormat"%>
<%@page import="com.tjoeun.onLinePoll.PollRead"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>투표 결과 보기</title>

<!-- 일정 시간이 경과되면 특정 웹 사이트로 이동하기 -->
<!-- <meta http-equiv="refresh" content="5; url='https://www.naver.com'"> --> <!-- 5초 후 네이버로 이동 -->
<!-- 일정 시간이 경과되면 현재 페이지를 다시 호출한다. => 새로고침한다. -->
<meta http-equiv="refresh" content="1; url='?'">

<!-- 파비콘(favicon) : 웹 브라우저의 주소창에 표시되는 웹 사이트를 대표하는 이미지이다. -->
<link rel="icon" href="./logo.png">
</head>
<body>
<!-- 텍스트 파일에 저장된 투표 결과를 읽어와 브라우저에 표시한다. -->
<%
//	텍스트 파일을 읽어서 투표 항목의 개수를 계산한다.
	String filepath = application.getRealPath("/") + "poll.txt"; 
	ArrayList<String> poll = PollRead.pollRead(filepath); 
	int itemCount = (poll.size() -1) / 2; 
	
	//득표율을 계산하기 위해서 전체 투표수를 계산한다.
	int sum = 0;
	for(int i=itemCount+1; i<poll.size(); i++) { //itemCount+1 = 10+1
		sum += Integer.parseInt(poll.get(i));
	}
//	out.println(sum);

//	숫자 데이터 서식을 지정한다.
	DecimalFormat df1 = new DecimalFormat("#,##0표"); //득표수 서식
	DecimalFormat df2 = new DecimalFormat("0.00%"); //득표율 서식
%>

<table border="1" width="500" align="center" cellspacing="0" cellpadding="5">
	<tr>
		<th colspan="2"> 
			<%=poll.get(0)%>
		</th>
	</tr>
	
	<tr>
		<td align="right" colspan="2"> 
			총 투표수 : <%=df1.format(sum)%>
		</td>
	</tr>
	
<%
	//투표 항목의 개수만큼 반복하며 redio 버튼과 투표 항목을 출력한다.
	for(int i=1; i <= itemCount; i++){ 
		int pyo = Integer.parseInt(poll.get(i + itemCount)); //득표수
		double per = (double)pyo / sum; //득표율
%>
	<tr>
		<td width="100">
			 <%=poll.get(i)%>(<%=df1.format(pyo)%>) 	<!-- 득표수 서식 지정 -->
		<!-- <%=poll.get(i)%>(<%=df2.format(pyo)%>) --> <!-- 득표율 서식 지정 -->
		</td>
		<td width="400"> 
			<hr size="10" color="#FF0000" width="<%=400 * per%>" align="left">
		</td>
	</tr>

<%
	}
%>

	<tr>
		<td align="center" colspan="2"> 
			<input type="button" value="홈으로" onclick="location.href='pollRead.jsp'"/>
		</td>
	</tr>
</table>
</body>
</html>