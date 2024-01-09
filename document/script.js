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

// 하나의 요소에 접근할 때
const headerContainer = document.getElementById('header-container');
headerContainer.style.display = 'none';

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';

// 여러 요소에 접근할 때
const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let lists = document.getElementsByTagName('li');
// Collection으로 출력된다.
console.log(lists);

// Collection은 forEach를 사용해서 출력하지 못한다.
// lists.array.forEach(list => {
//     console.log(list);
// });


lists = Array.from(lists);
// Collection을 Array로 출력한다.
console.log(lists);

lists.array.forEach((list, index) => {
    list.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.background = 'gray';
});