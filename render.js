export function renderItem(item){
    const div = document.createElement('div');
    const itemActual = document.createElement('p');
    const quantity = document.createElement('p');

    if (itemActual.purchased){
        itemActual.classList.add('purchased');
    } else {
        itemActual.classList.add('notPurchased');
    }

    itemActual.classList.add('item');

    itemActual.textContent = item.item;
    quantity.textContent = item.quantity;

    div.append(itemActual, quantity);
    return div;
}