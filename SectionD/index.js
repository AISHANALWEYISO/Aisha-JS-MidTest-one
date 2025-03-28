// Get  elements
const addButton = document.getElementById('addButton');
const newitem = document.getElementById('newitem');
const bucketList = document.getElementById('bucketList');

// Array to hold the bucket list items
let items = [];

function renderList() {
    // Clear the current list
    bucketList.innerHTML = '';

    //  creating and  listing elements
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item} <button onclick="deleteItem(${index})">Delete</button>`;
        bucketList.appendChild(listItem);
    });
}

// Function to add an item to the list
function addItem() {
    const newItem = newitem.value.trim();

    if (newItem) {
        items.push(newItem);
        newitem.value = ''; // Clear input field
        renderList(); // Update the display
    } else {
        alert('Please enter an item.');
    }
}

// Function to delete an item from the list
function deleteItem(index) {
    items.splice(index, 1); // Remove the item at the given index
    renderList(); 
}

addButton.addEventListener('click', addItem);


