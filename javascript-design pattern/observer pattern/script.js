const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');


// Observer 1
function sendToGoogleAnalytics(data) {
    console.log('Sent to Google analytics: ', data);
}


// Observer 2
function sendToCustomAnalytics(data) {
    console.log('Sent to custom analytics: ', data);
}


// Observer 3
function sendToEmail(data) {
    console.log('Sent to email: ', data);
}


const observers = [];
const Observer = Object.freeze({
    notify: (data) => observers.forEach((observer) => observer(data)),
    subscribe: (func) => observers.push(func),
    unsubscribe: (func) => {
        [...observers].forEach((observer, index) => {
            if (observer === func) {
                observers.splice(index, 1);
            }
        });
    },
});


// Observer들이 Subject를 관찰하는 중이다.
Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);


// 버튼이 클릭되면, Subject가 Observer에게 알림을 보낸다.
// 핑크 버튼을 눌렀을 경우
pinkBtn.addEventListener('click', () => {
    const data = '🎀 Click on pink button! 🎀';
    Observer.notify(data);

});

// 블루 버튼을 눌렀을 경우
blueBtn.addEventListener('click', () => {
    const data = '🦋 Click on blue button! 🦋';
    Observer.notify(data);
});

