onload =  () => {
	let a = document.querySelectorAll('a');
	let img = document.querySelectorAll('img')[0];
	let count = 3;
	
	a[0].onclick = () => {
		count = --count < 1 ? 5 : count;
		img.setAttribute('src', './images/img0' + count + '.jpg');
	}
	
	a[1].onclick = () => {
		count = ++count > 5 ? 1 : count;
		img.setAttribute('src', `./images/img0${count}.jpg`);
	}
}



































