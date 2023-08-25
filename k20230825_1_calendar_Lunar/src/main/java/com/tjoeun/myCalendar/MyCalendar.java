package com.tjoeun.myCalendar;

//	달력 작업에 필요한 메소드를 모아놓은 클래스
public class MyCalendar {
	
//	년도를 인수로 넘겨받아 윤년, 평년을 판단해 윤년이면 true, 평년이면 false를 리턴하는 메소드
	public static boolean isLeapYear(int year) { // isLeapYear
		return year % 4 == 0 && year % 100 != 0 || year % 400 == 0; // 윤년, 평년식
	}
	
//	년, 월을 인수로 넘겨받아 그 달의 마지막 날짜를 리턴하는 메소드
	public static int lastDay(int year, int month) { //lastDay
		int[] m = { 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
		m[1] = isLeapYear(year) ? 29 : 28; // isLeapYear를 불러와 삼항연산자로 코드를 줄임.
		return m[month - 1];
	}
	
	
//	년, 월, 일을 인수로 넘겨받아 1년 1월 1일부터 지난 날짜를 계산해 리턴하는 메소드
	public static int totalDay(int year, int month, int day) { //totalDay
		int sum = (year - 1) * 365 + (year - 1) / 4 - (year - 1) / 100 + (year - 1) / 400;
		for (int i = 1; i < month; i++) {
			sum += lastDay(year, i);
		}
		return sum + day;
	}

//	년, 월, 일을 인수로 넘겹다아 요일을 숫자로 계산해 리턴하는 메소드
//	일요일(0), 월요일(1), 화요일(2), 수요일(3), 목요일(4), 금요일(5), 토요일(6)
	public static int weekDay(int year, int month, int day) { //weekDay
		return totalDay(year, month, day) % 7;
	}
	
}
