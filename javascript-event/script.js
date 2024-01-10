window.onload = function() {
    // 문서가 load 될 때 이 함수를 실행

    // 아이디가 'text'인 요소를 반환
    let text = document.getElementById('text');

    text.innerText = 'HTML 문서 loaded';
}

const aElement = document.querySelector('a');

aElement.addEventListener('click', () => {
    alert('a Element clicked');
});

const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (event) => {
    let val;
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    val = event.type;

    // 윈도우로부터의 거리 좌표
    val = event.clientY;

    // 요소로부터의 거리 좌표
    val = event.offsetY;

    console.log(val);
});


const submitBtn = document.querySelector('.submit-btn');
const title = document.querySelector('h2');

// CLICK EVENT TYPES
submitBtn.addEventListener('click', (handleEvent));
submitBtn.addEventListener('dblclick', (handleEvent));
submitBtn.addEventListener('mousedown', (handleEvent));
submitBtn.addEventListener('mouseup', (handleEvent));
submitBtn.addEventListener('mouseenter', (handleEvent));
submitBtn.addEventListener('mouseleave', (handleEvent));
submitBtn.addEventListener('mousemove', (handleEvent));


const form = document.querySelector('form');
const emailInput = document.getElementById('email');

// FORM EVENT TYPES

form.addEventListener('submit', (handleEvent));
emailInput.addEventListener('keydown', (handleEvent));
emailInput.addEventListener('keyup', (handleEvent));
emailInput.addEventListener('keypress', (handleEvent));
emailInput.addEventListener('focus', (handleEvent));
emailInput.addEventListener('blur', (handleEvent));
emailInput.addEventListener('cut', (handleEvent));

function handleEvent(event) {
    if(event.type ==='submit') {
        event.preventDefault();
    }
    console.log('Event Type: ${event.type}');
    // title.textContent = 'MouseX: ${event.offsetX} MouseY: ${event.offsetY}';
    title.textContent = event.target.value;
}