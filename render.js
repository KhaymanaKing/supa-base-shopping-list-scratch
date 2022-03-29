export function renderItem(item){
    const div = document.createElement('div');
    const itemActual = document.createElement('p');
    const quantity = document.createElement('p');

    if (itemActual.purchased){
        item.classlist.add('purchased');
    } else {
        item.classList.add('notPurchased');
    }

    itemActual.classlist.add('item');

    itemActual.textContent = item.item;
    quantity.textContent = item.quantity;

    div.append(itemActual, quantity);
    return div;
}