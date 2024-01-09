let val;

val = document;
// 웹 페이지의 절대 URI 반환
val = document.baseURI;

// <head> 태그를 반환
val = document.head;
// <body> 태그를 반환
val = document.body;

// <form> 태그를 반환
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

// <script> 태그를 반환
val = document.scripts[0].getAttribute('src');

console.log(val);