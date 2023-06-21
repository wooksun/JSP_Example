package com.tjoeun.fileuploadVO;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DownloadAction")
public class DownloadAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DownloadAction() {
        super();
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
	}

	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8"); 
		
		//	fileDownload.jsp에서 넘어오는 업로드한 파일 이름과 실제 디스크에 저장된 파일 이름을 받는다.
		String filename = request.getParameter("file"); // 업로드한 파일 이름
		String fileRealname = request.getParameter("realfile"); // 실제 디스크에 저장된 파일 이름
		
		//	다운로드 할 파일이 저장된 실제 물리적 디렉토리 경로를 다운로드 할 파일 이름과 연결한다.
		String uploadDirectory =  "C:/upload/" + fileRealname;
		File file = new File(uploadDirectory);
		
		String mimeType = getServletContext().getMimeType(file.toString());
		
		if (mimeType == null) {
			response.setContentType("application/octet-stream");
		}
		
		String downloadName = "";
		if(request.getHeader("user-agent").indexOf("MSIE") == -1) {
			downloadName = new String(filename.getBytes("UTF-8"), "8859_1");
		} else {
			downloadName = new String(filename.getBytes("EUC-KR"), "8859_1");
		}
		
		response.setHeader("Content-Disposition", "attachment;filename=\"" + downloadName + "\";");
		
		FileInputStream fileInputStream = new FileInputStream(file);
		ServletOutputStream outputStream = response.getOutputStream();
		byte[] b = new byte[1024];
		int data = 0;
		
		while ((data = fileInputStream.read(b, 0, b.length)) != -1) {
			outputStream.write(b, 0, data);  
		}
		outputStream.flush();
		outputStream.close();
		fileInputStream.close();
		
		
	}
}
