<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>javascript ajax</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="./images/externalFile.jpg">
<link rel="stylesheet" href="css/bootstrap.css">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.js"></script>
<script type="text/javascript" src="./js/ajax.js"></script><!-- ajax 구현 -->
</head>
<body>

<!-- 회원 가입 양식 -->
<div class="container" style="margin-top: 20px;">
	<table class="table">
		<thead>
			<tr class="success">
				<th colspan="2" style="text-align: center; font-size: 25px;">회원가입</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th style="background-color: skyblue; vertical-align: middle;">이름</th>
				<td>
					<input id="name" class="form-control" type="text" autocomplete="off" placeholder="이름을 입력하세요."/>
				</td>
			</tr>
			
			<tr>
				<th style="background-color: skyblue; vertical-align: middle;">나이</th>
				<td>
					<input id="age" class="form-control" type="text" autocomplete="off" placeholder="나이를 입력하세요."/>
				</td>
			</tr>
			
			<tr>
				<th style="background-color: skyblue; vertical-align: middle;">성별</th>
				<td>
					<div class="form-group" style="text-align: center; margin: 0px auto;">
						<div class="btn-group" data-toggle="buttons">
							<label class="btn btn-primary">
								<input type="radio" name="gender" value="남자"/>&nbsp;남자
							</label>
							<label class="btn btn-primary active">
								<input type="radio" name="gender" value="여자"/>&nbsp;여자
							</label>
						</div>
					</div>
				</td>
			</tr>
			
			<tr>
				<th style="background-color: skyblue; vertical-align: middle;">이메일</th>
				<td>
					<input id="email" class="form-control" type="text" autocomplete="off" placeholder="이메일을 입력하세요."/>
				</td>
			</tr>
			<tr class="warning">
				<td colspan="2">
					<input class="btn btn-success pull-right" type="button" value="입력하기" onclick="insertFunction()"/>
				</td>			
			</tr>
		</tbody>
	</table>
</div>

<!-- 회원 출력 양식 -->
<div class="container" style="margin-top: 20px;">
	<div class="form-group row pull-right">
		<div class="col-xs-8">
			<input 
				id="username" 
				class="form-control" 
				type="text" 
				size="20" 
				autocomplete="off"
				onkeyup="searchFunction()">
		</div>
		<div class="col-xs-2">
			<input 
				class="btn btn-success" 
				type="button" 
				value="검색" 
				onclick="searchFunction()"/> 
		</div>
	</div>
</div>

<div class="container">
	<table class="table table-hover">
		<thead>
			<tr class="info">
				<th style="text-align: center;">번호</th>
				<th style="text-align: center;">이름</th>
				<th style="text-align: center;">나이</th>
				<th style="text-align: center;">성별</th>
				<th style="text-align: center;">이메일</th>
			</tr>
		</thead>
		<tbody  id="ajaxTable">
			<tr></tr>
		</tbody>
	</table>
</div>

</body>
</html>