let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

// NodeList 반환, line break도 포함되어서 반환된다.
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// NodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment Node
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환한다.
// 실제 요소들의 리스트만 반환한다. HTML Collection 반환, line break는 포함되지 않는다.
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hi';

// First child
list.firstChild === list.childNodes[0];

val = list.firstElementChild;

// Last child
val = list.lastChild;
list.lastChild === list.childNodes[list.childNodes.length - 1];

// child 요소의 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log('val', val);