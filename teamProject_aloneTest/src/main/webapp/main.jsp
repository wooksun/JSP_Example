<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TestMainPage</title>
<!-- 부트스트랩 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="./css/main.css">
<link >
</head>
<body>
<!-- 애플 div -->
<!-- 
<div id="globalheader">
	<nav id="globalnav" style="background-color: rgba(22, 22, 23, .8);">
		<div class="globalnav-content" style="background-color: rgba(22, 22, 23, .8);"> 
			<ul id="globalnav-list" class="globalnav-list">
				<li>
					<a class="globalnav-link globalnav-link-apple">메인페이지(로고)</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
 -->

<div>
	<table class="table" style="background-color: #585858; color: #F2F2F2;">
		<tr style="background-color: #585858; color: #F2F2F2; text-align: center;">
			<td 
				class="top1"
				onclick="location.href='main.jsp'"
				>프로젝트로고(메인)</td>
			<td class="top1">Mac</td>
			<td class="top1">iPhone</td>
			<td class="top1">MacBook</td>
			<td class="top1">iPad</td>
			<td class="top1">Watch</td>
			<td class="top1">엔터테이먼트</td>
			<td class="top1">고객지원</td>
			<td class="top1">
				<img src="./images/search.png"/>
			</td>
			<td class="top1">
				<img src="./images/shopping-cart.png"/>
			</td>
		</tr>
	</table>
	<div 
		style="text-align: center; 
		display: flex; 
		align-items: center; 
		justify-content: center;
		background-color: #FAFAFA;"
		>테스트 웹사이트 전용 메인 문구입니다.</div>
</div>


</body>
</html>