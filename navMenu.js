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

// Progress Bar Code to Calculate Random Customer Satisfaction Rating from 55% to 95%.
const customerRating = Math.floor(Math.random() * (95 - 55 + 1)) + 55;

//Set up the for the Progress Bar.
const progressBar = document.getElementById("progressBar");

//Add the Style for the Progress Bar
progressBar.style.width = customerRating + "%";

const satisfactionLabel = `${customerRating}%`;

// Create a new div element for the label
const labelElement = document.createElement('div');
labelElement.textContent = satisfactionLabel;

// Add a class to the label for styling
labelElement.classList.add('progressLabel');

// Add the label to the progress bar
progressBar.appendChild(labelElement);