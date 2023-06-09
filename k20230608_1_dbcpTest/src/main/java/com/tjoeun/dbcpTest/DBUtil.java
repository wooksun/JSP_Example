package com.tjoeun.dbcpTest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.management.RuntimeErrorException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;


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
		} catch(RuntimeErrorException e) {
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
	
//	oracle에 연결하는 Connection을 리턴하는 메소드
	public static Connection getOracleConnection() {
		Connection conn = null;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			conn = DriverManager.getConnection(url, "root", "0000");
			
			System.out.println("연결성공: " + conn + "<br/>");
			
		} catch(ClassNotFoundException e) {
			System.out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
		} catch(SQLException e) {
			System.out.println("데이터 베이스 접속 정보가 올바르지 않습니다.");
		} 
		return conn;
	}
	
	//	commonsDBCP를 사용해서 mysql이나 oracle에 연결하는 Connection을 리턴하는 메소드
	public static Connection getCommonsDBCPConnection() {
		Connection conn = null;
		try {
			//Class.forName("com.mysql.jdbc.Driver"); // mysql 5.x
			//Class.forName("com.mysql.cj.jdbc.Driver"); // mysql 8.x
			Class.forName("oracle.jdbc.driver.OracleDriver"); // oracle
			
			Class.forName("org.apache.commons.dbcp.PoolingDriver"); // commonsDBCP
			String url = "jdbc:apache:commons:dbcp:/pool";
			conn = DriverManager.getConnection(url);
		} catch(ClassNotFoundException e) {
			System.out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
		} catch(Exception e) {
			System.out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
		}
		return conn;
	}
	
//  tomcat DBCP를 사용해서 mysql 이나 oracle에 연결하는 Connection을 리턴하는 메소드
	public static Connection getTomcatDBCPConnection() {
		Connection conn = null;
		try {
			Context initContext = new InitialContext();
			DataSource dataSource = (DataSource) initContext.lookup("java:/comp/env/jdbc/TestDB");
			conn = dataSource.getConnection();
			System.out.println("연결성공 : " + conn + "<br/>");
		} catch(Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}