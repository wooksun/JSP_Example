onload =  () => {
	//alert('꺄~');
	let a = document.querySelectorAll('a');
	let img = document.querySelectorAll('img')[0];
	let count = 3;
	
	//	'◀'에 onclick 이벤트를 연결한다.
	a[0].onclick = () => {
		//	getAttribute('속성이름'): 인수로 지정된 속성의 속성값을 얻어온다.
		//console.log(img.getAttribute('alt'));
		let imgAlt = img.getAttribute('alt');
		if (imgAlt == 'img01') {
			alert('첫번째 이미지입니다.');
		} else {
			img.setAttribute('src', './images/img0' + --count + '.jpg');
			img.setAttribute('alt', 'img0' + count);
		}
	}
	
	//	'▶'에 onclick 이벤트를 연결한다.
	a[1].onclick = () => {
		//let imgAlt = img.getAttribute('alt');
		if(count >= 5) { //count > 4도 가능
			alert('마지막 이미지입니다.');
		}else {
			img.setAttribute('src', `./images/img0${++count}.jpg`);
			img.setAttribute('alt', `img0${count}`);
		}
	}
}



































