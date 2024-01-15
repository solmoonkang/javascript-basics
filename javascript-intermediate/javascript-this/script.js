// Method => Object

const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}
audio.play();


audio.stop = function () {
    console.log('stop this', this);
}
audio.stop();


// Function => Window Object
function playAudio() {
    console.log(this);
}
playAudio();


// Constructor Function => {}
function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio1 = new Audio('a');


// 화살표 함수 ===> this 항상 상위 스코프의 this를 가리키게 된다.
// Lexical this
const audio2 = {
    title: 'audio',
    categories: ['rock', 'rock', 'hiphop'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(this);
        })
    }
}
audio2.displayCategories();