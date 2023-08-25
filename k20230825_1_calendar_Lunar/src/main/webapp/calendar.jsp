<%@page import="com.tjoeun.myCalendar.SolaToLunar"%>
<%@page import="com.tjoeun.myCalendar.LunarDate"%>
<%@page import="java.util.ArrayList"%>
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

   table {
      /* border: 선두께 선종류 선색상 */
      border: 0px solid tomato;
   }

   tr {
      height: 70px; /* 행 높이 */
      border-width: 0px;
   }

   th {
      font-size: 20pt;
      width: 100px;
      border-width: 0px;
   }

   th#title {
      font-size: 30pt; /* 글꼴 크기 */
      font-family: D2Coding; /* 글꼴 이름 */
      font-weight: bold; /* 굵게 */
      color: tomato; /* 글자 색 */
   }
   
   th#sunday {
      color: red;
   }
   
   th#saturday {
      color: blue;
   }
   
   td {
      text-align: right; /* 수평 정렬 */
      vertical-align: top; /* 수직 정렬 */
      border: 1px solid black;
      border-radius: 10px;
   }
   
   td.sun {
      color: red;
   }
   
   td.sat {
      color: blue;
   }
   
   td#beforesun {
      color: red;
      font-size: 10pt;
      background-color: lavender; /* 배경색 */
   }
   
   td.before {
      font-size: 10pt;
      background-color: lavender;
   }
   
   td#aftersat {
      color: blue;
      font-size: 10pt;
      background-color: yellowgreen;
   }
   
   td.after {
      font-size: 10pt;
      background-color: yellowgreen;
   }
   
   td#choice {
      text-align: left;
      vertical-align: middle;
   }
   
   td.holiday {
      background-color: aliceblue;
      color: red;
      font-weight: bold;
   }
   
   span {
      font-size: 8pt;
   }

/*
   하이퍼링크 스타일 지정하기
   link: 1번도 클릭하지 않은 하이퍼링크
   visited: 1번 이상 클릭한 하이퍼링크
   hover: 하이퍼링크에 마우스를 올리고 있을 때
   active: 하이퍼링크를 마우스로 누르고 있을 때
   
   a:link {
      color: black;
      text-decoration: none;
   }

   a:visited {
      color: black;
      text-decoration: none;
   }
   
   a:link와 a:visited에 같은 서식이 적용되므로 ","로 나열해서 지정할 수 있다. 
   a:link, a:visited {
      color: red;
      text-decoration: none;
   }
*/

   a {
      color: black;
      text-decoration: none; /* 밑줄 */
   }

   a:hover {
      color: lime;
      text-decoration: overline;
   }

   a:active {
      color: DodgerBlue;
      text-decoration: underline;
   }

   .button {
     background-color: #4CAF50; /* Green */
     border: none;
     color: white;
     padding: 5px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     margin: 0;
     transition-duration: 0.4s;
     cursor: pointer;
   }
   
   .button1 {
     background-color: white; 
     color: black; 
     border: 2px solid #4CAF50;
   }
   
   .button1:hover {
     background-color: #4CAF50;
     color: white;
   }
   
   .select {
      width: 100px;
      height: 30px;
   }
   
   fieldset {
      width: 105px;
      height: 50px;
      display: inline;
      border: none;
   }
   
</style>

</head>
<body>

<%
   Calendar calendar = Calendar.getInstance();
   int year = calendar.get(Calendar.YEAR);
   int month = calendar.get(Calendar.MONTH) + 1;
   try {
      year = Integer.parseInt(request.getParameter("year"));
      month = Integer.parseInt(request.getParameter("month"));
      if (month >= 13) {
         year++;
         month = 1;
      } else if (month <= 0) {
         year--;
         month = 12;
      }
   } catch (NumberFormatException e) { }

//   달력을 출력할 달의 양력/음력 대응 결과를 얻어온다.
   ArrayList<LunarDate> lunarDate = SolaToLunar.solaToLunar(year, month);
%>

<table width="700" border="1" align="center" cellpadding="5" cellspacing="0">
   <tr>
      <th>
         <input class="button button1" type="button" value="이전달"
            onclick="location.href='?year=<%=year%>&month=<%=month - 1%>'">
      </th>
      <th id="title" colspan="5">
         <%=year%>년 <%=month%>월
      </th>
      <th>
         <button class="button button1" type="button" 
            onclick="location.href='?year=<%=year%>&month=<%=month + 1%>'">
            다음달
         </button>
      </th>
   </tr>
   <tr>
      <th id="sunday">일</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
      <th id="saturday">토</th>
   </tr>
   <tr>
<%
   int week = MyCalendar.weekDay(year, month, 1);
   int start = 0;
   if (month == 1) {
      start = MyCalendar.lastDay(year - 1, 12) - week;
   } else {
      start = MyCalendar.lastDay(year, month - 1) - week;
   }
   for (int i=0; i<MyCalendar.weekDay(year, month, 1); i++) {
      if (i == 0) {
         out.println("<td id='beforesun'>" + (month == 1 ? 12 : month - 1) + "/" + ++start + "</td>");
      } else {
         out.println("<td class='before'>" + (month == 1 ? 12 : month - 1) + "/" + ++start + "</td>");
      }
   }

   for (int i=1; i<=MyCalendar.lastDay(year, month); i++) {
      
      // 공휴일인가 판단해서 class 속성을 다르게 지정해서 날짜를 출력한다.
      if (lunarDate.get(i - 1).getHoliday().length() == 0) {
         switch (MyCalendar.weekDay(year, month, i)) {
            case 0:
               out.println("<td class='sun'>" + i + "</td>");
               break;
            case 6:
               out.println("<td class='sat'>" + i + "</td>");
               break;
            default:
               out.println("<td>" + i + "</td>");
               break;
         }
      } else {
         out.println("<td class='holiday'>" + i + lunarDate.get(i - 1).getHoliday() + "</td>");
      }
      
      if (MyCalendar.weekDay(year, month, i) == 6 && i != MyCalendar.lastDay(year, month)) {
         out.println("</tr><tr>");
      }
   }

   if (month == 12) {
      week = MyCalendar.weekDay(year + 1, 1, 1);
   } else {
      week = MyCalendar.weekDay(year, month + 1, 1);
   }

   if (week != 0) {
      start = 0;
      for (int i=week; i<=6; i++) {
         if (i == 6) {
            out.println("<td id='aftersat'>" + (month == 12 ? 1 : month + 1) + "/" + ++start + "</td>");
         } else {
            out.println("<td class='after'>" + (month == 12 ? 1 : month + 1) + "/" + ++start + "</td>");
         }
      }
   }
%>   
   </tr>
   <tr>
      <td id="choice" colspan="7">
         <form action="?" method="post">
            <fieldset>
               <legend>년</legend>
               <select class="select" name="year"> <!-- 1900 ~ 2100 -->
<%
   for (int i=1900; i<=2100; i++) {
      if (i == calendar.get(Calendar.YEAR)) {
         out.println("<option selected='selected'>" + i + "</option>");
      } else {
         out.println("<option>" + i + "</option>");
      }
   }
%>
               </select>
            </fieldset>
            <fieldset>
               <legend>월</legend>
               <select class="select" name="month"> <!-- 1 ~ 12 -->
<%
   for (int i=1; i<=12; i++) {
      if (i == calendar.get(Calendar.MONTH) + 1) {
         out.println("<option selected='selected'>" + i + "</option>");
      } else {
         out.println("<option>" + i + "</option>");
      }
   }
%>
               </select>
            </fieldset>
            <input class="select" type="submit" value="보기">
         </form>
      </td>
   </tr>
</table>

</body>
</html>
