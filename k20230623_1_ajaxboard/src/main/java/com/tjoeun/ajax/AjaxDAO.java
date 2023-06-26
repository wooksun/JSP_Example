package com.tjoeun.ajax;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class AjaxDAO {
	
	private Connection conn = null;
	private PreparedStatement pstmt = null;
	private ResultSet rs = null;
	
	//	기본 생성자에서 오라클과 연결한다.
	public AjaxDAO() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			conn = DriverManager.getConnection(url, "wook", "0000");
		} catch (ClassNotFoundException e) {
			System.out.println("드라이버 클래스가 없거나, 읽어올 수 없습니다.");
		} catch (SQLException e) {
			System.out.println("데이터베이스 연결 정보가 올바르지 않습니다.");
		}
	}

	//	검색어로 입력된 문자열이 name 필드에 포함된 데이터만 얻어오는 메소드
	public ArrayList<AjaxVO> search(String name) {
		System.out.println("AjaxDAO 클래스의  search() 메소드 실행");
		//System.out.println(name);
		ArrayList<AjaxVO> list = null;
		
		try {
			String sql = "select * from ajax where name like ? order by idx desc";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, '%' + name + '%'); // name 앞 뒤로 %를 붙여 와일드카드 형태
			rs = pstmt.executeQuery();
			list = new ArrayList<>();
			
			while(rs.next()) {
				AjaxVO vo = new AjaxVO();
				vo.setIdx(rs.getInt("idx"));
				vo.setName(rs.getString("name"));
				vo.setAge(rs.getInt("age"));
				vo.setGender(rs.getString("gender"));
				vo.setEmail(rs.getString("email"));
				list.add(vo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return list;
	}

	//	insert.jsp에서 입력한 데이터를 테이블에 저장하는 메소드
	public int insert(AjaxVO vo) {
		System.out.println("AjaxDAO 클래스의  insert() 메소드 실행");
		System.out.println(vo);
		try {
			String sql = "insert into ajax (idx, name, age, gender, email) values (ajax_idx_seq.nextval, ?, ?, ?, ?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, vo.getName());
			pstmt.setInt(2, vo.getAge());
			pstmt.setString(3, vo.getGender());
			pstmt.setString(4, vo.getEmail());
			return pstmt.executeUpdate(); // sql 명령이 정상적으로 실행된 개수를 리턴한다.
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		//	sql 명령에 오류가 있어서 catch 블록이 실행되면 -1을 리턴한다.
		return -1;
	}
	
}
