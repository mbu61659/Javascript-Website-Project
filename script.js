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
//Now we're going to use the function (invoke it/call it) to create the nav bars.
makeNav();