package com.tjoeun.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.tjoeun.vo.GuestbookVO;

public class GuestbookDAO {
   
   public static GuestbookDAO instance = new GuestbookDAO();
   private GuestbookDAO() { };
   public static GuestbookDAO getInstance() {
      return instance;
   };
   
   // InsertService 클래스에서 호출되는 mapper와 테이블에 저장할 데이터가 저장된 객체(vo)를 넘겨받고
   // guestbook.xml 파일의 insert sql 명령을 실행하는 메소드
   public void insert(SqlMapClient mapper, GuestbookVO vo) throws SQLException {
      System.out.println("GuestbookDAO 클래스의 insert() 메소드 실행");
      // System.out.println(vo);
      
      /*
      try {
         Connection conn = DBUtil.getTomcatDBCPConnection();
         String sql = "INSERT INTO guestbook(idx, name, password, memo, ip)" +  
               "VALUES (guestbook_idx_seq.nextval, ?, ?, ?, ?)";
         PreparedStatement pstmt = conn.prepareStatement(sql);
         pstmt.setString(1, vo.getName());
         pstmt.setString(2, vo.getPassword());
         pstmt.setString(3, vo.getMemo());
         pstmt.setString(4, vo.getIp());
         pstmt.executeUpdate();
      } catch(SQLException e) {
         e.printStackTrace();
      }
      */
      
      // insert("실행할 sql 명령의 id", sql 명령으로 전달할 데이터)	
      mapper.insert("insert", vo);
   }
   
//	SelectService 클래스에서 호출되는 mapper를 넘겨받고 guestbook.xml 파일의 테이블에 저장된 전체 글의 개수를 얻어오는 select sql 명령을 
//	실행하는 메소드
   public int selectCount(SqlMapClient mapper) throws SQLException {
	   //	queryForObject(): select sql 명령의 실행결과가 1건일 때 사용한다. => 결과가 Object 클래스 타입으로 
	   //	queryForList(): select sql 명령의 실행결과가 여러건일 때 사용한다.
	   return (int) mapper.queryForObject("selectCount");
   }
   
// SelectService 클래스에서 호출되는 mapper와 화면에 표시할 페이지의 시작 인덱스 번호와 끝 인덱스 번호가
// 저장된 HashMap 객체를 넘겨받고 guestbook.xml 파일의 1페이지 분량의 글 목록을 얻어오는 select sql 명령을
// 실행하는 메소드
	public ArrayList<GuestbookVO> selectList(SqlMapClient mapper, HashMap<String, Integer> hmap) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectList() 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectList", hmap);
	}
   
  
}