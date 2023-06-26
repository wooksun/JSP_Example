package com.tjoeun.register;

public class RegisterVO {
	private String userId;
	private String userPassword;
	private String userName;
	private int userAge;
	private String userGender;
	private String userEmail;
	
	public RegisterVO() { }
	
	public RegisterVO(String userId, String userPassword, String userName, int userAge, String userGender,
			String userEmail) {
		super();
		this.userId = userId;
		this.userPassword = userPassword;
		this.userName = userName;
		this.userAge = userAge;
		this.userGender = userGender;
		this.userEmail = userEmail;
	}


	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getUserAge() {
		return userAge;
	}
	public void setUserAge(int userAge) {
		this.userAge = userAge;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
	@Override
	public String toString() {
		return "RegisterVO [userId=" + userId + ", userPassword=" + userPassword + ", userName=" + userName
				+ ", userAge=" + userAge + ", userGender=" + userGender + ", userEmail=" + userEmail + "]";
	}
	
	
}
