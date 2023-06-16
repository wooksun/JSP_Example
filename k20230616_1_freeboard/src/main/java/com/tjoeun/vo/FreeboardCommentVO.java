package com.tjoeun.vo;

import java.util.Date;

//	메인글의 댓글을 기억하는 클래스
public class FreeboardCommentVO {
		
	private int idx;
	private int gup; // 메인글의 글번호 => 어떤 메인글의 댓글인가?
	private String name;
	private String password;
	private String content;
	private Date writeDate;
	private String ip;
	
	//	getters & setters
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public int getGup() {
		return gup;
	}
	public void setGup(int gup) {
		this.gup = gup;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getWriteDate() {
		return writeDate;
	}
	public void setWriteDate(Date writeDate) {
		this.writeDate = writeDate;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	
	//	toString()
	@Override
	public String toString() {
		return "FreeBoardCommentVO [idx=" + idx + ", gup=" + gup + ", name=" + name + ", password=" + password
				+ ", content=" + content + ", writeDate=" + writeDate + ", ip=" + ip + "]";
	}
	
}
