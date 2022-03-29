import {     
    logout,
    createItem,
    deleteItems,
    purchasedItem,
    checkAuth,
    getItems } from '../fetch-utils.js';
import { renderItem } from '../render.js';

const form = document.querySelector('.shopping-form');
const deleteButton = document.querySelector('.delete-button');
const logoutButton = document.querySelector('.logout-button');
const itemList = document.querySelector('.item-div-list');

checkAuth();
displayList();
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    await createItem({
        item: data.get('itemInput'),
        quantity: data.get('quantityInput'),
        purchased: false
    });
    form.reset();
    await displayList(); 
});

async function displayList(){
    itemList.textContent = '';
    
    const items = await getItems();
    
    
    for (let item of items){
        
        const itemEl = renderItem(item);
        itemEl.addEventListener('click', async () => {
            await purchasedItem(item.id);
            displayList();
        });
        
        itemList.append(itemEl);
    }

}

window.addEventListener('load', () => {
    displayList();
});

logoutButton.addEventListener('click', () => {
    logout();
});
deleteButton.addEventListener('click', async () =>{
    await deleteItems();
    displayList();
});