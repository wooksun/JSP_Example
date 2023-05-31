//	콜백 지옥

//	id와 password를 입력 받아서 로그인 처리와 로그인 후 역할을 받아오는 클래스

class UserStorage {
	
	//	로그인 함수
	//	loginUser(아이디, 비밀번호, 로그인 성공 시 실행할 callback 함수, 로그인 실패 시 실행할 callback 함수)
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(id == '최진욱' && password == '1231' || id == '김문선' && password == '0529') {
				//	로그인에 성공 했으므로 역할을 받아오는 callback() 함수를 실행한다.
				onSuccess(id);
			} else {
				//	로그인 실패 시 실행할 callback 함수를 실행한다.
				onError('로그인 실패');
			}
		}, 2000);
	}
	
	//	로그인 후 역할을 받아오는 함수
	//	getRoles(아이디, 역할을 받아오면 실행할 callback 함수와, 역할을 받아오지 못하면 실행할 callback 함수)
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
}
//	아이디와 비밀번호를 입력받는다.
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

//	로그인 처리를 하기 위해 loginUser() 함수가 작성된 클래스 객체를 생성한다.
const userStorage = new UserStorage();

/*
//	UserStorage 클래스의 loginUser() 함수를 호출해서 로그인 처리를 한다.
userStorage.loginUser(id, password, function (user) {
	console.log(user + ' 로그인 성공');
	//	로그인에 성공했으므로 아이디에 따른 역할을 요청해서 받아온다.
	userStorage.getRoles(user, function (userWithRole) {
		//	요청이 성공적으로 받아졌으면 javascript 객체에 저장된 name과 role를 출력한다.
		alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);
	}, function (error) {
		alert(error);
	})
}, function (error) {
	console.log(error);
});
*/

/*
userStorage.loginUser(id, password, user => {
	console.log(user + ' 로그인 성공');
	userStorage.getRoles(user, userWithRole => {
		alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role} 입니다.`);
	}, error => alert(error));
}, 
//함수가 실행하는 기능이 인수로 넘어온 데이터 1건을 단순히 콘솔에 로그로 출력하는 경우, 
//error => console.log(error))와 같이 실행하지 않고
console.log
);
*/

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















