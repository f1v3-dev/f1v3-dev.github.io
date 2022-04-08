const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('btn1')
let errStack = 0;

login.addEventListener('click', () => {
    if(id.value == 'seungjo'){
        if(password.value == '0000'){
            alert('로그인 성공!')
        }
        else {
            alert('ID / 비밀번호를 확인해주세요')
            errStack++;
        }
    }
    else{
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5){
        alert('비밀번호를 5회 이상 틀리셨습니다.')
    }
})