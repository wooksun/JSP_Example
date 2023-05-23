function createImg() {
	//	라디오 버튼의 value 속성값을 얻어와서 브라우저에 표시할 이미지의 경로와 이름으로 사용한다.
	let radios = document.getElementsByName('radioBtn');
	//console.log(radios);
	//console.log(radios.length);
	/*
	for (let radio of radios) {
		console.log(radio.value);
	}
	*/
	
	let radioValue = '';
	radioValue = document.getElementsByTagName('radioBtn');
	for (let radio of radios) {
		//console.log(radio.checked);
		if(radio.checked) {
			//console.log(radio.value);
			radioValue = radio.value;
		}
	}
	//console.log(radioValue);
	
	//	img 태그를 만들고, src 속성값을 radioValue에 저장된 값으로 지정하면 된다.
	let img = document.createElement('img'); //<img>
	img.setAttribute('src', radioValue); //<img src="">
	
	//	img 태그를 넣어줄 div 태그를 얻어온다.
	let div = document.getElementById('imgView');
	
	//	라디오 버튼을 선택하고 이미지 생성버튼을 클릭할 떄마다 이미지가 변경되게 하려면,
	//	기존에 표시되던 img태그를 제거하고 다시 만든 img 태그를 넣어주면 된다.
	//	div 태그 내부의 마지막 태그를 선택해서 제가한다.
	
	//	삭제할 태그를 선택한다.
	//	firstElementChild: 첫번째 자식 태그
	//	lastElementChild: 마지막 자식 태그
	let removeImg = div.lastElementChild;
	//	removeChild(태그): 인수로 지정된 자식 태그를 제거한다.
	div.removeChild(removeImg);
	
	//	div 태그에 img 태그를 자식으로 넣어준다.
	div.appendChild(img); 
}

function removeImg() {
	let div = document.getElementById('imgView');
	div.innerHTML = '<br/>';
}

































