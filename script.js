const navItems = [

    // Basically, I'm creating the Nav Items with the const "meaning constant",
//with the overarching name, navItems, using curly braces to add in the name of the 
//nav items first then the link that would link the name with the link (Navigating Menu)

{ name: "Home", link: "index.html"},
{ name: "Menu", link: "menu.html"},
{ name: "Contact", link: "contact.html"},
{ name: "Catering", link: "catering.html"}
    
//Use Shift Alt to duplicate a selection that you highlighted and copied then use
    //the down arrow key to duplicate.
//Also use Alt then using the Up or Down Arrow, you can move the code up or down
//your lines of code.

];

//Getting the list where we're going to add the Nav items.
// const navList = document.getElementById("navBar");

const navList = document.querySelector("nav ul");

function handleClicks(event) {
    //Prevent Default
    event.preventDefault();
    //Get href attribute.
    const pageLink = this.getAttribute("href");
    //Open the Page Link.
    window.location.href = pageLink;
}

//Now we want to get a function to create the NavBar Items
function makeNav() {
    //Now we want to use a loop to go through each of the Nav Items that we're now creating
    //Using a For Each Loop.
    navItems.forEach(item => {
        //Creating an LI Element for the list.
        const listItem = document.createElement("li");
        //Now we're creating an Anchor Element or an "A" element to add as a link later.
        const link = document.createElement("a");
        //Now we're creating a h-ref for the link to make the element "A" work as a link.
        link.setAttribute("href", item.link);
        //Now we're going to get the Names for the Link (Text context for the menu)
        link.textContent = item.name;
        //Adding the Click Event for the Link in the Nav.
        link.addEventListener("click", handleClicks);
        //In the Navbar, we're going to add the link to the listItems.
        //Side Comment, the append function is similar to concatentating two different
        //things together by combining them so we're adding a link to the list items
        //as shown on this link code below.
        listItem.appendChild(link);
        //Now we're going to add the list item to the Nav items.
        navList.appendChild(listItem);
        });
}
makeNav();

//We're making the menu products for the Pizza Menu by adding in the name, price, and image to be displayed for the potential customer
//to take a look at.
const menuItems = [
    {name: "Pepperoni", price: 8.50, image:"/drippingPizza.jpg"  },
    {name: "Margherita Basil", price: 12.50, image: "/closeUpPizza.jpg"},
    {name: "Gourmet Cheese", price: 15.75, image: "/pizza2.jpg"},
    {name: "Cheese", price: 4.75, image:"/pizza1.jpg"}
];

//This is the table element which the pizza menu will be displayed.
const menuTable = document.getElementById("pizzaMenu");

//Function to Create the Pizza Menu...whoo...
function makePizzaMenu() {
    //Creating the header row headers.
    let tableHeader = "<tr><th>Name</th><th>Price</th><th>Image</th></tr>";
    //Go Through Each Menu Item with a Loop.
    menuItems.forEach(pizza => {
        //Create a Row for Each Pizza
        tableHeader += `
        <tr>
            <td>${pizza.name}</td>
            <td>$${pizza.price.toFixed(2)}</td>
            <td><img src = "/images/${pizza.image}" alt= "${pizza.name}"></td>
        </tr>`;
    });
    //Set up the Content for the Table.
    menuTable.innerHTML = tableHeader;
}
makePizzaMenu();

//******Previous Code******************** */


// // //This is our starting variables for the form (Form Elements)
// const contactForm = document.getElementById("contactForm");
// //Function to Make and Show a Pop Up Window with a Message
// function showPopUp(message) {
//     //Make the Pop Up 
//     const popUp = document.createElement("div");
//     popUp.classList.add("popUp");
//     //Make the Pop Up Content to the Pop Up.
//     const popUpContent = document.createElement("div");
//     popUpContent.classList.add("popUpContent");
//     popUpContent.textContent = (message);
//     //Add the Pop Up Content to the Pop Up.
//     popUp.appendChild(popUpContent);
//     //Add the Pop Up To the Page.
//     document.body.appendChild(popUp);
//     //Close the Pop Up when we click out of it.
//     window.addEventListener("click", function(event) {
//         if (event.target === popUp) {
//             popUp.remove();
//         }
//     });
// }
// // //Now we need the Event Listener for the Form.
// contactForm.addEventListener("submit", function(event) {
//     //Prevent Default from Form Submission
//     event.preventDefault();
// //     //Get the Input Values from the Form.
//     const firstName = document.getElementById("firstName").value.trim();
//     const lastName = document.getElementById("lastName").value.trim();
//     const city = document.getElementById("city").value.trim();
//     const zipCode = document.getElementById("zipCode").value.trim();
//     const email = document.getElementById("email").value.trim();
    
//     //Validate Input with Regular Expressions.
//     const nameRegEx = /^[a-zA-Z] + $/;
//     const zipRegEx = /^d{5}$/;
//     const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     //Check if All Fields Are Accurate/Good to Go.
//     if (firstName.match(nameRegEx) && lastName.match(nameRegEx) && city.match(nameRegEx) && email.match(emailRegEx) && zipCode.match(zipRegEx)) {
//         console.log("Form Clicked");
//         showPopUp("Ayyye! Atta Boy! The form was sent. Good job, Jimmy...can I call you Jimmy? ");
//     } else {
//         showPopUp("You tried so hard, and got so far, but in the end, you made a mistake! Try again.");
//     }

//***********************End of Previous Code*************************************************************** */
// Copy and paste your work, or start typing.// Function to validate the form
function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get the form elements
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;
    const email = document.getElementById('email').value;

    // Regular expression for email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validate first name, last name, and city (accept only letters)
    const nameRegex = /^[a-zA-Z]+$/;

    // Validate zipcode (accept alphanumeric characters)
    const zipcodeRegex = /^\w+$/;

    // Check if all the fields are valid
    if (firstName.match(nameRegex) && lastName.match(nameRegex) && city.match(nameRegex) && email.match(emailRegex) && zipcode.match(zipcodeRegex)) {
        // Form is valid, submit the form
        showModal('Form submitted successfully!');
        // You can also submit the form using: document.getElementById('myForm').submit();
    } else {
        // Form is invalid, display error message
        showModal('Please fill out all fields correctly!');
    }
}

// Function to create and show the modal with the specified message
function showModal(message) {
    // Create the modal element
    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create the message element
    const modalText = document.createElement('p');
    modalText.id = 'modal-text';
    modalText.textContent = message;

    // Append message element to modal content
    modalContent.appendChild(modalText);

    // Append modal content to modal
    modal.appendChild(modalContent);

    // Append modal to body
    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            // Remove the modal element from the DOM
            modal.remove();
        }
    }
}

// Get the form element
const form = document.getElementById('myForm');

// Add event listener to the form submit button
form.addEventListener('submit', validateForm);





    // //Check if the first name is valid.
    // if (!nameRegEx.test(firstName)) {
    //     showPopUp("How's About You Write A Name Next Time?");
    //     return;
    // }

    // //Check if the Last Name is valid.
    // if (!nameRegEx.test(lastName)) {
    //     showPopUp("How's About You Write An Actual Last Name Before You Come Here Again! Please...");
    //     return;
    // }

    // //Check if the City is Valid.
    // if (city === " ") {
    //     showPopUp("Ehhhh! It's okay! You're not a cop are yus? Tell Us What City You From");
    //     return;
    // }

    // //Check if the ZipCode is Valid.
    // if (!zipRegEx.test(zipCode)) {
    //     showPopUp("Yas Don't Need to Zip it. Give Us the Real ZipCode and we won't hous' to 'urt yeah!");
    //     return;
    // }

    // //Check if the Email is valid,
    // if (!emailRegEx.test(email)) {
    //     showPopUp("I'm not the Feds, you'se can trust me. Send us your REAL email...then we'll talk about the mula...");
    //     return;
    // }

    //Send the Form if all validations are good.
    // showPopUp("Ayyye! Atta Boy! The form was sent. Good job, Jimmy...can you call you Jimmy? ");
    // return;
;




