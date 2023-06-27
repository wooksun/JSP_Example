<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jQuery ajax</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="./images/externalFile.jpg">
<link rel="stylesheet" href="css/bootstrap.css">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.js"></script>
<script type="text/javascript" src="./js/ajax.js"></script><!-- ajax 구현 -->
</head>
<body>

<!-- 회원가입 양식 -->
<div class="container" style="margin-top: 20px;">
	<!-- <form action="./UserRegister" method="post"> --> <!-- 1번작업(기존) -->
	<form> <!-- 2번작업 -->
		<table class="table table-hover table-bordered" style="border: 1px solid #dddddd;">
			<thead>
				<tr class="success">
					<th colspan="3" style="text-align: center;">
						<h2>회원 가입 양식</h2>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th class="warning" style="vertical-align: middle; width: 120px;">아이디</th>
					<td>
						<input 
							id="userID" 
							class="form-control" 
							type="text" 
							name="userID" 
							placeholder="아이디를 입력하세요." 
							autocomplete="off"/>
					</td>
					<td class="info" style="vertical-align: middle; width: 120px; text-align: center;">
						<button class="btn btn-primary" type="button" onclick="registerCheckFunction()">
							중복검사
						</button>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">비밀번호</th>
					<td colspan="2">
						<input 
							id="userPassword1" 
							class="form-control" 
							type="password" 
							name="userPassword1" 
							placeholder="비밀번호를 입력하세요." 
							autocomplete="off"
							onkeyup="passwordCheckFunction()"/>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">비밀번호 확인</th>
					<td colspan="2">
						<input 
							id="userPassword2" 
							class="form-control" 
							type="password" 
							name="userPassword2" 
							placeholder="비밀번호를 입력하세요." 
							autocomplete="off"
							onkeyup="passwordCheckFunction()"/>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">이름</th>
					<td colspan="2">
						<input 
							id="userName" 
							class="form-control" 
							type="text" 
							name="userName" 
							placeholder="이름을 입력하세요." 
							autocomplete="off"/>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">나이</th>
					<td colspan="2">
						<input 
							id="userAge" 
							class="form-control" 
							type="text" 
							name="userAge" 
							placeholder="나이를 입력하세요." 
							autocomplete="off"/>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">성별</th>
					<td colspan="2">
						<div class="form-group" style="text-align: center; margin: 0px auto;">
							<div class="btn-group" data-toggle="buttons">
								<label class="btn btn-primary active">
									<input type="radio" name="userGender" value="남자" checked="checked"/>&nbsp;남자
								</label>
								<label class="btn btn-primary">
									<input type="radio" name="userGender" value="여자"/>&nbsp;여자
								</label>
							</div>
						</div>
					</td>
				</tr>
				
				<tr>
					<th class="warning" style="vertical-align: middle;">이메일</th>
					<td colspan="2">
						<input 
							id="userEmail" 
							class="form-control" 
							type="email" 
							name="userEmail" 
							placeholder="이메일을 입력하세요." 
							autocomplete="off"/>
					</td>
				</tr>
				
				<tr>
					<td colspan="3" style="text-align: center;">
						<!-- 비밀번호 일치 검사 결과 메시지가 출력될 영역 -->
						<h5 id="passwordCheckMessage" style="color: red; font-weight: bold;"></h5>
						<!-- 아이디 중복 검사 결과 메시지가 출력될 영역 -->
						<h5 id="idCheckMessage" style="color: red; font-weight: bold;"></h5>
						<!-- 오류 메시지가 출력될 영역 -->
						<h5 id="errorMessage" style="color: blue; font-weight: bold;">
							<%-- ${messageType}: ${messageContent} --%>
						</h5>
						<!-- <input class="btn btn-primary" type="submit" value="회원가입"/> --> <!-- 1번작업(기존) -->
						<input class="btn btn-primary" type="button" value="회원가입" onclick="userRegister()"/> <!-- 2번작업 --> 
						<input class="btn btn-primary" type="reset" value="다시쓰기"/>
					</td>
				</tr>
				
			</tbody>
		</table>		
	</form>
</div>

<!-- 현재 프로젝트는 session을 사용하지 않기 때문에 k20230626_1_register에서 사용하던 모든 스크립트 릿을 삭제한다. -->

<!-- 회원 저장 모달 창 -->
<div id="messageModal" class="modal fade" role="dialog" aria-hidden="true">
	<div class="vertical-alignment-helper">
		<div class="modal-dialog vertical-align-center">
			<!-- 모달 창의 종류를 설정한다. -->
			<!-- messageCheck라는 id를 추가하고 class를 제거한다. -->
			<div id="messageCheck">
				<!-- 헤더 -->
				<div class="modal-header panel-heading">
					<!-- 헤더 오른쪽 상단에 "X" 버튼 표시 -->
					<button class="close" type="button" data-dismiss="modal">
						<span aria-hidden="true">&times;</span>
						<span class="sr-only">Close</span>
					</button>
					<!-- messageType이라는 id를 추가한다. -->
					<h4 id="messageType" class="modal-title">
						<%-- ${messageType} --%> 
					</h4>
				</div>
				<!-- messageContent라는 id를 추가한다. -->
				<div id="messageContent" class="modal-body">
					<%-- ${messageContent} --%>
				</div>
				<!-- 풋터 -->
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" data-dismiss="modal">닫기</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- 
모달창을 띄우는 기능을 실행하는 스크립트를 ajax.js로 옮긴다.
<script type="text/javascript">
	$('#messageModal').modal('show');
</script>
 -->
</body>
</html>