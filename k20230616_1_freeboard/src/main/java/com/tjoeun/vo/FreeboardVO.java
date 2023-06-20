package com.tjoeun.vo;

import java.util.Date;

//	메인글 1건을 기억하는 클래스
public class FreeboardVO {
	
	private int idx;
	private String name;
	private String password;
	private String subject; // 메인글 제목
	private String content; // 메인글 내용
	private Date writeDate;
	private int hit; // 조회수
	private String notice = ""; // 공지글 여부(on => 공지글, "" => 일반글)
	private String ip;
	private int commentCount; // 댓글의 개수
	
	//	getters & setters
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
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
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
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
	public int getHit() {
		return hit;
	}
	public void setHit(int hit) {
		this.hit = hit;
	}
	public String getNotice() {
		return notice;
	}
	public void setNotice(String notice) {
		this.notice = notice;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public int getCommentCount() {
		return commentCount;
	}
	public void setCommentCount(int commentCount) {
		this.commentCount = commentCount;
	}
	
	//	toString
	@Override
	public String toString() {
		return "FreeBoardCommentVO [idx=" + idx + ", name=" + name + ", password=" + password + ", subject=" + subject
				+ ", content=" + content + ", writeDate=" + writeDate + ", hit=" + hit + ", notice=" + notice + ", ip="
				+ ip + ", commentCount=" + commentCount + "]";
	}
	
}
