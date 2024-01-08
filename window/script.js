let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerWidth;

// window 창의 X축과 Y축의 스크롤 위치를 나타낸다.
val = window.scrollY;
val = window.scrollX;

// 현재 URL에 대한 정보를 나타낸다.
val = window.location;

// 해당 window 창이 열리면 바로 google로 리다이렉션한다.
// window.location.href = 'http://google.com/';

// 직전과 직후에 방문했던 사이트를 나타낸다.
history.forward;
history.back;

// 해당 window에서 방문했던 사이트를 나타낸다.
window.history.go(-2);

// 브라우저에 대한 정보들을 나타낸다.
window.navigator;

console.log(val);