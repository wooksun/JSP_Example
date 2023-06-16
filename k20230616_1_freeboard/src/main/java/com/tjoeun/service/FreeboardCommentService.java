package com.tjoeun.service;

import org.apache.ibatis.session.SqlSession;

import com.tjoeun.dao.FreeboardCommentDAO;
import com.tjoeun.mybatis.MySession;
import com.tjoeun.vo.FreeboardVO;

public class FreeboardCommentService {
	public static FreeboardCommentService instance = new FreeboardCommentService();
	private FreeboardCommentService() { }
	public static FreeboardCommentService getInstance() {
		return instance;
	}
	
	public void insert(FreeboardVO vo) {
		System.out.println("FreeboardCommentService 클래스의 insert() 메소드 실행");
		SqlSession mapper = MySession.getSession();
		
		//FreeboardCommentDAO.getInstance().insert(mapper, vo);
		
		mapper.commit();
		mapper.close();
	}
}
