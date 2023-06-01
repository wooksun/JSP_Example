//	id와 password를 입력 받아서 로그인 처리와 로그인 후 역할을 받아오는 클래스
class UserStorage {
	//	로그인 함수
	//	loginUser(아이디, 비밀번호, 로그인 성공 시 실행할 callback 함수, 로그인 실패 시 실행할 callback 함수)
	/*
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(id == '최진욱' && password == '1231' || id == '김문선' && password == '0529') {
				onSuccess(id);
			} else {
				onError('로그인 실패');
			}
		}, 2000);
	}
	*/
	
	//	callback 지옥에 빠진 이유는 함수가 성공 시 실행할 함수와, 실패 시 실행할 함수를 인수로 받았기 때문이다.
	//	=> onSuccess, onError 함수를 if문에 사용하는 것
	//	promise를 사용하면 성공 시 resolve(), 실패 시 reject()로 처리하면 된다.
	loginUser(id, password) {
		//	함수가 호출되면 promise를 만들어서 리턴시킨다.
		return new Promise((resolve, reject) => {
			//	기존에 있던 코드 promise의 executor 함수에서 실행한다.
			setTimeout(() => {
				if(id == '최진욱' && password == '1231' || id == '김문선' && password == '0529') {
					//onSuccess(id);
					resolve(id);
				} else {
					//onError('로그인 실패');
					reject('로그인 실패');
				}
			}, 2000);
		});
	}
	
	//	로그인 후 역할을 받아오는 함수
	//	getRoles(아이디, 역할을 받아오면 실행할 callback 함수와, 역할을 받아오지 못하면 실행할 callback 함수)
	/*
	getRoles(user, onSuccess, onError) {
		setTimeout(function () {
			if (user == '최진욱') {
				onSuccess({
					name: '최진욱',
					role: '관리자'
				});
			} else {
				onError('권한이 없습니다.');
			}
		}, 1000);
	}
	*/
	
	getRoles(user){
		//	함수가 호출되면 promise를 만들어서 리턴시킨다.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//	기존에 있던 코드 promise의 executor 함수에서 실행한다.
				if (user == '최진욱') {
					//onSuccess({name: '최진욱',role: '관리자'});
					resolve({name: '최진욱',role: '관리자'});
				} else {
					//onError('권한이 없습니다.');
					reject('권한이 없습니다.');
				}
			}, 1000);
		});
	}
} // class UserStorage

//	아이디와 비밀번호를 입력받는다.
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

//	로그인 처리를 하기 위해 loginUser() 함수가 작성된 클래스 객체를 생성한다.
const userStorage = new UserStorage(); 
/*
userStorage.loginUser(
	id, 
	password, 
	user => {
		console.log(user + ' 로그인 성공');
		userStorage.getRoles(
			user, 
			userWithRole => {
				alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);
			}, 
			error => alert(error)
		);
	}, 
	console.log
);
*/

/*
userStorage.loginUser(id, password)
	.then(function (id) {
		// console.log(id);
		return userStorage.getRoles(id);
	})
	.then(function (userWithRole) {
		//console.log(userWithRole);
		alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);
	})
	.catch(function (err) {
		console.log(err);
	});
*/

userStorage.loginUser(id, password)
	.then(id => userStorage.getRoles(id))
	.then(userWithRole => alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`))
	.catch(err => console.log(err));











