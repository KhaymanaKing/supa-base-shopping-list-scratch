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

form.addEventListener('submit,' async (e) => {
    e.preventDefault();

    await createItem({

    })
})