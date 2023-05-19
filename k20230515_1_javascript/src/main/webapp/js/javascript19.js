function openWin() {
	//console.log('openWin() 함수 실행');
	//window.open(); 
	//window.open(url, title, option); 
	
	let url = './20_javascript_윈도우2.html'; //새로 띄울 창에 표시할 페이지 이름
	let title = '아이디 중복 검사'; // 윈도우 이름(큰 비중 x)
	let option = 'top=50px, left=100px, width=500px, height=600px'; //윈도우 옵션
	window.open(url, title, option); 
	
	//	새 윈도우를 현재 브라우저에 새 탭으로 띄우려면 option을 생략하면 된다.
	//window.open(url, title); 
}

function registerForm() {
	//	감춰놓은 id 속성이 register로 지정된 div 태그를 화면에 표시한다.
	document.getElementById('register').style.display = 'block';
	document.body.style.backgroundColor = 'gray';
	
	// 로그인 버튼을 비활성화 시킨다.
	// 비활성화할 버튼이 1개일 때
	// document.getElementsByName('btn')[1].disabled = 'disabled';


	// 비활성화할 버튼이 여러개일 때
	// name 속성이 btn인 모든 버튼 객체를 얻어온다.
    //let btns = document.getElementsByName('btn');
   
 	/*  
	for (let i=0; i<btns.length; i++) {
      btns[i].disabled = 'disabled';
   }*/
   
	/*   
	for (let btn of btns) {
	  btns[i].disabled = 'disabled';
   }*/
   
	/*   
   for(let i in btns) {
	    btns[i].disabled = 'disabled';
   }
   */
  
   //	모든 input 태그를 비활성화 시킨다.
   let inputs = document.getElementsByTagName('input');
   for (let i=0; i<7; i++) {
      inputs[i].disabled = 'disabled'; //disabled = 'disabled' 비활성화
   }
}

function closeWin() {
	//	id 속성이 register로 지정된 div 태그를 화면에서 사라지게 한다.
	document.getElementById('register').style.display = 'none';
	document.body.style.backgroundColor = 'white';
	
	//	registerForm() 함수에서 비활성화한 input 태그를 활성화시킨다.
	let inputs = document.getElementsByTagName('input');
   	for (let i=0; i<7; i++) {
      	inputs[i].disabled = ''; //disabled = '' 활성화
   	}
}

function idChk() {
	alert('중복 체크 버튼을 클릭해서 아이디 중복 체크를 하세요.');
}

function idCheck() {
	let url = './21_javascript_윈도우3.html'; 
	let title = '아이디 중복 검사'; 
	let option = 'top=50px, left=100px, width=500px, height=600px'; 
	window.open(url, title, option); 
}

























