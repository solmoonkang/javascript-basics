const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

// 어떠한 이벤트가 발생했을 때, 함수를 등록한다.
function createNewTodo() {
    // 새로운 아이템 객체 생성하기
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false
    }

    // 배열 처음에 새로운 아이템을 추가한다.
    todos.unshift(item);

    // 요소 생성하기
    const {itemEl, inputEl, editBtnEl, removeBtnEl} = createTodoElement(item);

    // 리스트 요소 안에 방금 생성한 아이템 요소를 추가한다. (해당 요소를 앞에 추가한다.)
    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');    // disabled 속성을 제거한다.
    inputEl.focus();    // 새로운 TODO 추가하기 버튼을 눌렀을 때, 바로 텍스트를 추가할 수 있게 한다.

    saveToLocalStorage();
}

function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;     // checkbox checked가 true 상태로 저장된 것을 refresh 후 화면에 다시 출력해준다.

    if (item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');   // 해당 값이 설정되어 있으면, 값을 입력하지 못한다.

    const actionsEl = document.createElement('div');
    actionsEl.classList.add('actions');
    
    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText ='remove_circles';

    // checkbox가 체크되면 true이고, 체크되지 않으면 false로 설정된다.
    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;

        // check가 활성화되면, div 요소 class에 complete이 들어간다.
        if(item.complete) {
            itemEl.classList.add('complete');
        // 반대로, check가 비활성화되면, div 요소 class에 complete이 제거된다.
        } else {
            itemEl.classList.remove('complete');
        }

        saveToLocalStorage();
    });

    // 텍스트를 작성하다가 focus가 사라지면, blur 이벤트가 발생하도록 한다.
    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();   // blur 처리가 된 텍스트도 refresh 후 화면에 다시 출력해준다.
    });
    
    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    });

    removeBtnEl.addEventListener('click', () => {
        // 내가 클릭한 요소와 다른 것만 todos 배열로 반환한다. 즉, 같은 것들은 필터링 되고, 다른 것들을 todos 배열로 반환된다.
        todos = todos.filter(t => t.id !== item.id);    // item.id = 내가 클릭한 요소의 id를 의미한다.

        // 요소를 제거한다.
        itemEl.remove();
        
        saveToLocalStorage();   // 삭제된 데이터도 localStorage에서 제거한다.
    });

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}

// localStorage에 데이터를 저장시킨다.
function saveToLocalStorage() {
    // localStorage에 값을 넣을 때는 항상 String 타입으로 넣어야 한다.
    // 그러나 배열로 저장된 값을 localStorage에 넣기 위해서 String 타입으로 변환해야 한다.
    const data = JSON.stringify(todos);

    localStorage.setItem('my_todos', data);
}

// localStorage에서 데이터를 불러온다.
function loadFromLocalStorage() {
    const data = localStorage.getItem('my_todos');

    // 만약, 데이터가 있다면 String을 배열로 변환한다.
    if (data) {
        todos = JSON.parse(data);
    }
}

function displayTodos() {
    loadFromLocalStorage();

    for(let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const {itemEl} = createTodoElement(item);

        list.append(itemEl);
    }
}

// 페이지를 refresh해도 기존에 작성했던 내용이 화면에 그대로 출력된다.
displayTodos();