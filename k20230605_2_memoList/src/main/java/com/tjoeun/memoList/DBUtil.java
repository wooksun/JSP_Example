package com.tjoeun.memoList;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException;

public class DBUtil {
	
	//	mysql에 연결하는 Connection을 리턴하는 메소드
	public static Connection getMysqlConnection() {
		Connection conn = null;
		
		try {
			Class.forName("com.mysql.jdbc.Driver"); //5.x 사용자
			String url = "jdbc:mysql://localhost:3306/javaam?useUnicode=true&characterEncoding=UTF-8"; 
			conn = DriverManager.getConnection(url, "root", "0000");
		} catch(ClassNotFoundException e) {
			System.out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
		} catch(MySQLSyntaxErrorException e) {
			System.out.println("데이터베이스가 없거나 이름이 틀렸습니다.");
		} catch(SQLException e) {
			System.out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
		}
		return conn;
	}
	
	//	mysql에 연결하는 Connection을 닫는 메소드
	public static void close(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}