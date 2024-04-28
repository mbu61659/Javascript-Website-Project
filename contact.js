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
// Form validation

// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form input values
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    const city = document.getElementById('city').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const email = document.getElementById('email').value.trim();

    //Methods to capitalize the first letter of the first and last names.
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+$/;
    const zipRegex = /^\d{5}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check if first name is valid
    if (!nameRegex.test(firstName)) {
        alert('Please enter a valid first name.');
        return;
    }

    // Check if last name is valid
    if (!nameRegex.test(lastName)) {
        alert('Please enter a valid last name.');
        return;
    }

    // Check if city is valid
    if (city === '') {
        alert('Please enter your city.');
        return;
    }

    // Check if zip code is valid
    if (!zipRegex.test(zipCode)) {
        alert('Please enter a valid zip code.');
        return;
    }

    // Check if email is valid
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully! Here is the Name: ' + firstName + " " + lastName);
});
