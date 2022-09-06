const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//유저이름 저장 및 인사말 출력기능 실행
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //logoutForm.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

//로그아웃 및 유저데이터 삭제
/*
function onLogoutSubmit(e) {
  e.preventDefault();
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
}
*/

//인사말 출력
function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//스토리지내 유저이름데이터 유무확인
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //logoutForm.removeEventListener("submit", onLogoutSubmit);
} else {
  /*
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", onLogoutSubmit);
  loginForm.removeEventListener("submit", onLogoutSubmit);
  */
  paintGreetings(savedUsername);
}