var password = document.querySelector("#password_in");
var password_check = document.querySelector("#password_check");
var password_check_1 = document.querySelector("#password_check_1");
var id_in = document.querySelector("#id_in");
var submit_id = document.querySelector("#submit_id");
password_check_1.onclick =check_paasword
submit_id.onlcick = include_id
function  include_id(){
if (password.value === password_check.value){
    user_list = [id_in.value,password.value];/*이거 한명만 회원가입하는 코드니 여러명이 이용할 땐 다른 코드로 바꿔주기*/
    alert("회원가입이 완료 되셨습니다 !")
/*로그인 창이나 index 창으로 보내기 (회원가입 완료됨)*/
    }
}
function check_paasword(){
if (password.value === password_check.value){
    alert("비밀번호가 일치합니다")
    }
else{
    alert("비밀번호가 일치하지 않습니다")
    password.value ="";
    password_check.value ="";
    }
}