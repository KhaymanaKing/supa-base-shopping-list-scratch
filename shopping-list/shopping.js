import { getItems } from "../fetch-utils";
import { 
    logout,
    createItem,
    deleteItems,
    purchasedItem,
    checkAuth
}

const form = document.querySelector('.shopping-form');
const deleteButton = document.querySelector('.delete-button');
const logoutButton = document.querySelector('.logout-button');
const itemList = document.querySelectorAll('.item-div-list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(shopping-form);
    await createItem({
        item: data.get('itemInput'),
        quantity: data.get('quantityInput'),
        purchased: false
    });
    shopping-form.reset();
    await displayList(); 
});

async function displayList(){

    const items = await getItems();
    itemList.textContent = '';

    for (let item of items){
        const itemEl = renderItem(item);

        itemEl.addEventListener('click', async () => {
            await purchasedItem(item.id);
            displayList();
        })
        itemList.append(item);
    }
}