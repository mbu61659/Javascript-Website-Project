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

//Create Random Data for 12 Data Points
      function createData() {
        const data = [];
        for (let i = 0; i < 12; i++) {
          data.push(Math.floor(Math.random() * 100));
        }
        return data;
      }
  
      // Create initial chart
      const chartX = document.getElementById('myChart').getContext('2d');
      const chart = new Chart(chartX, {
        type: 'bar',
        data: {
          labels: Array.from({ length: 12 }, (_, i) => `Day ${i + 1}`),
          datasets: [{
            label: 'Pizza Sales',
            data: createData(),
            backgroundColor: 'orangered',
            borderColor: 'white',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });