//ARRAY SHOPPING LIST

const shoppingList = [
    'eggs',
    'tomatoes',
    'onions',
    'butter',
    'milk'
]

/*FOR CYCLE
for (let i = 0; i < shoppingList.length; i++) {
    let newLi = document.createElement('li')
    newLi.innerHTML = shoppingList[i];
    document.getElementById('list-items').append(newLi);
}*/

let i = 0;
while (i < shoppingList.length) {

    let newLi = document.createElement('li')
    newLi.innerHTML = shoppingList[i];
    document.getElementById('list-items').append(newLi);

    i++
}