const navItems = [

    // Basically, I'm creating the Nav Items with the const "meaning constant",
//with the overarching name, navItems, using curly braces to add in the name of the 
//nav items first then the link that would link the name with the link (Navigating Menu)

{ name: "Home", link: "index.html"},
{ name: "Menu", link: "menu.html"},
{ name: "Contact", link: "contact.html"},
{ name: "About", link: "about.html"}
    
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

//We're making the menu products for the Pizza Menu by adding in the name, price, and image to be displayed for the potential customer
//to take a look at.
const menuItems = [
    {name: "Pepperoni", price: 8.50, image:"/drippingPizza.jpg"  },
    {name: "Margherita Basil", price: 12.50, image: "/closeUpPizza.jpg"},
    {name: "Cheese", price: 4.75, image:"/pizza1.jpg"},
    {name: "Gourmet Cheese", price: 15.75, image: "/pizza2.jpg"}
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

// //This is our starting variables for the form (Form Elements)
// const contactForm = document.getElementById("contactForm");
// //Now we need the Event Listener for the Form.
// contactForm.addEventListener("submit", function(event) {
//     //Prevent Default from Form Submission
//     prevent.preventDefault();
//     //Get the Input Values from the Form.

// })

//Now we're going to use the function (invoke it/call it) to create the nav bars.
makeNav();
makePizzaMenu();
