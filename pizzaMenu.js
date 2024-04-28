//******************Refactored code*************************

// Define the navigation items
const navItems = [
    { name: "Home", link: "index.html"},
    { name: "Menu", link: "menu.html"},
    { name: "Contact", link: "contact.html"},
    { name: "Catering", link: "catering.html"}
];

// Get the <ul> element where the navigation items will be added
const navList = document.querySelector('nav ul');

// Function to generate the navigation items
function generateNav() {
    navItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', item.link);
        link.textContent = item.name;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
}

// Call the function to generate the navigation
generateNav();

// Function to handle navigation link clicks
function handleClicks(event) {
    event.preventDefault();
    const pageLink = this.getAttribute('href');
    window.location.href = pageLink;
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', handleClicks);
});

// Define the pizza menu items
const menuItems = [
    {name: "Pepperoni", price: 8.50, image:"/drippingPizza.jpg"  },
    {name: "Margherita Basil", price: 12.50, image: "/closeUpPizza.jpg"},
    {name: "Gourmet Cheese", price: 15.75, image: "/pizza2.jpg"},
    {name: "Cheese", price: 4.75, image:"/pizza1.jpg"}
];

// Get the table element for the pizza menu
const menuTable = document.getElementById('pizzaMenu');

// // Function to generate the pizza menu
function makePizzaMenu() {
    let tableHeader = "<tr><th>Name</th><th>Price</th><th>Image</th></tr>";
    menuItems.forEach(pizza => {
        tableHeader += `
        <tr>
            <td>${pizza.name}</td>
            <td>$${pizza.price.toFixed(2)}</td>
            <td><img src="/images/${pizza.image}" alt="${pizza.name}"></td>
        </tr>`;
    });
    menuTable.innerHTML = tableHeader;
}

// // Call the function to generate the pizza menu
makePizzaMenu();

// // Function to create and show the modal
// function showModal(message) {
//     const modal = document.createElement('div');
//     modal.id = 'myModal';
//     modal.className = 'modal';

//     const modalContent = document.createElement('div');
//     modalContent.className = 'modal-content';

//     const modalText = document.createElement('p');
//     modalText.id = 'modal-text';
//     modalText.textContent = message;

//     modalContent.appendChild(modalText);
//     modal.appendChild(modalContent);
//     document.body.appendChild(modal);
//     modal.style.display = 'block';

//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//             modal.remove();
//         }
//     }
// }

// // Function to validate the form
// function validateForm() {
//     // event.preventDefault();
//     const firstName = document.getElementById('first-name').value.trim();
//     const lastName = document.getElementById('last-name').value.trim();
//     const city = document.getElementById('city').value.trim();
//     const zipcode = document.getElementById('zipcode').value.trim();
//     const email = document.getElementById('email').value.trim();

//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const nameRegex = /^[a-zA-Z]+$/;
//     const zipcodeRegex = /^\w+$/;

//     if (firstName.match(nameRegex) && lastName.match(nameRegex) && city.match(nameRegex) && email.match(emailRegex) && zipcode.match(zipcodeRegex)) {
//         console.log("form clicked");
//         showModal('Form submitted successfully!');
//     } else {
//        console.log("form error");
//         showModal('Please fill out all fields correctly!');
//     }
// }

// // Get the form element
// const form = document.getElementById('contactForm');

// // Add event listener to the form submit button
// form.addEventListener('submit', validateForm);

