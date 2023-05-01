package com.tjoeun.onLinePoll;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class PollRead {

//	텍스트 파일의 내용을 읽어서 ArrayList에 저장해 리턴하는 메소드를 만든다.
	public static ArrayList<String> pollRead(String filepath) {
		
		ArrayList<String> poll = null; // 텍스트 파일의 내용을 저장해서 리턴시킬 객체를 선언한다.
		
		Scanner sc = null; //텍스트 파일의 내용을 읽어들이는 스캐너
		
		try {
			sc = new Scanner(new File(filepath));
			poll = new ArrayList<>();
			
//			파일의 끝까지(더 이상 읽을 줄이 없을 때까지) 반복하며 텍스트 파일의 내용을 읽어 ArrayList에 저장한다.
			while(sc.hasNextLine()) {
				String  str = sc.nextLine().trim();
//				읽어들인 줄이 빈 줄이 아니면 ArrayList에 저장한다.
				if(str.length() > 0) {
					poll.add(str);
				}
			}
		} catch (FileNotFoundException e) {
			System.out.println("디스크에 파일이 존재하지 않습니다.");
		}
		return poll;
		
	}

}
