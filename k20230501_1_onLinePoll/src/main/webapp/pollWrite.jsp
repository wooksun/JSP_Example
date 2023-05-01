<%@page import="com.tjoeun.onLinePoll.PollWrite"%>
<%@page import="com.tjoeun.onLinePoll.PollRead"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- 파비콘(favicon) : 웹 브라우저의 주소창에 표시되는 웹 사이트를 대표하는 이미지이다. -->
<link rel="icon" href="./logo.png">
</head>
<body>

<!-- pollRead.jsp에서 넘어오는 투표한 항목을 받아서 득표수를 증가시켜 텍스트 파일에 저장한다. -->

<%
//	post 방식으로 데이터가 넘어올 때, 한글 깨짐을 방지한다.
	request.setCharacterEncoding("UTF-8");
//	pollRead.jsp에서 넘어오는 투표 데이터를 받는다.
	String tmp = request.getParameter("poll");
	out.println(tmp);
	
//	에러체크
//	투표 데이터가 넘어왔나?(null 또는 공백이 아닌가?) 검사한다. => 반드시 null 검사를 먼저 한다.(tmp != null)
	if(tmp != null && tmp.trim().length() != 0) { //=> tmp != null 검사를 먼저 하지 않으면 오류 발생.
		
		//넘어온 투표 데이터가 숫자인가 검사한다.
		try{
			int result = Integer.parseInt(tmp);
			
			//텍스트 파일을 읽어서 투표 항목의 개수를 계산한다. => 아래 if문의 itemCount를 읽어오기 위한 작업
			String filepath = application.getRealPath("/") + "poll.txt";
			ArrayList<String> poll = PollRead.pollRead(filepath);
		 	int itemCount = (poll.size() -1) / 2;
			
			
			//넘어온 투표 데이터가 정상적인 투표 범위의 데이터인가 검사한다.
			if(result >= 1 && result <= itemCount) {
				
				// * 여기까지 왔다는 것은 정상적인 투표 데이터가 넘어왔다는 것이므로 투표한 항목의 득표수를 1증가시켜서 텍스트 파일에 저장한다.
				// 득표수를 1증가시킬 ArrayList 위치(index)를 계산한다.
				int index = result + itemCount;
				// 득표수를 증가시킨다.
				result = Integer.parseInt(poll.get(index)) + 1;
				// 1증가도 득표수를 ArrayList의 index 번째 위치에 넣는다.
				//poll.set(index, String.valueOf(result));
				//poll.set(index, String.format("%s", result));
				poll.set(index, result + "");
				out.println(poll);
				// ArrayList에 저장된 데이터를 텍스트 파일에 저장하는 메소드를 실행한다.
				PollWrite.pollWrite(filepath, poll);
				// 투표 결과보기 페이지로 넘겨준다.
				response.sendRedirect("pollResult.jsp"); 
				
			} else {
				//넘어온 투표 데이터가 정상적인 투표 범위의 숫자가 아니므로 오류 메시지를 출력하고 pollRead.jsp로 돌려보낸다.
				//넘어온 투표 데이터가 숫자가 아니므로 오류 메시지를 출력하고 pollRead.jsp로 돌려보낸다.
				out.println("<script>"); //js효과 주기
				out.println("alert('투표 데이터가 정상 투표 범위가 아닙니다.')"); 
				out.println("location.href='pollRead.jsp'"); //alert창에 확인 버튼을 누르면 다시 투표하는 창으로 넘어가도록 경로설정
				out.println("</script>");
			}
			
		} catch(NumberFormatException e) {
			//넘어온 투표 데이터가 숫자가 아니므로 오류 메시지를 출력하고 pollRead.jsp로 돌려보낸다.
			out.println("<script>"); //js효과 주기
			out.println("alert('투표 데이터가 숫자가 아닙니다.')"); //get방식으로 URL에 투표방식을 문자열로 했다면, 정수형이 아니라는 경고창
			out.println("location.href='pollRead.jsp'"); //alert창에 확인 버튼을 누르면 다시 투표하는 창으로 넘어가도록 경로설정
			out.println("</script>");
		}
		
	} else {
//		투표 데이터가 넘어오지 않았으므로 오류 메시지를 출력하고 pollRead.jsp로 돌려보낸다.
		out.println("<script>"); //js효과 주기
		out.println("alert('투표하세요-!')"); //투표하지 않으면 뜨는 alert창
		out.println("location.href='pollRead.jsp'"); //alert창에 확인 버튼을 누르면 다시 투표하는 창으로 넘어가도록 경로설정
		out.println("</script>");
		
//		하나의 jsp 파일에 서버용 스크립트(jsp)와 클라이언트용 스크립트(javascript)를 모두 사용한 경우 코딩 순서와는 무관하게
//		서버용 스크립트가 먼저 다 실행되고 난 후, 클라이언트용 스크립트가 실행된다.
//		response.sendRedirect() 메소드는 인수로 지정한 페이지로 넘겨준다.
//		response.sendRedirect("pollRead.jsp"); //=> 메시지는 보이지 않지만, 아무런 투표없이 실행하면 투표하기 창으로 리셋됨.
	}
%>
</body>
</html>