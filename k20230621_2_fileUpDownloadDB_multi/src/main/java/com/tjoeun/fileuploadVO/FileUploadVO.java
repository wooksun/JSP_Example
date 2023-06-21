package com.tjoeun.fileuploadVO;

public class FileUploadVO {
	
	private int idx;
	private String filename;
	private String filRealname;
	private int downloadCount;
	
	//	getters & setters
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getFilRealname() {
		return filRealname;
	}
	public void setFilRealname(String filRealname) {
		this.filRealname = filRealname;
	}
	public int getDownloadCount() {
		return downloadCount;
	}
	public void setDownloadCount(int downloadCount) {
		this.downloadCount = downloadCount;
	}
	
	//	toString()
	@Override
	public String toString() {
		return "FileUploadVO [idx=" + idx + ", filename=" + filename + ", filRealname=" + filRealname
				+ ", downloadCount=" + downloadCount + "]";
	}
	
	
	
}
