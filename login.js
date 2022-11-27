var id = document.querySelector("#user_id");
var password = document.querySelector("#password");
var user_list;
function check(){
if(id.value == user_list[0] && password.value == user_list[1] ){
    alert("로그인이 되셨습니다")
    }
else{
    alert("아이디 또는 비밀번호를 틀리셨습니다")
    id.value =""
    password.value =""
    }
}