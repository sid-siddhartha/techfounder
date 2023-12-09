const technologies = [
    { name: "C", inventor: "Dennis M. Ritchie", foundedYear: 1972, inventedYear: 1972 },
    { name: "C++", inventor: "Bjarne Stroustrup", foundedYear: 1979, inventedYear: 1983 },
    { name: "Java", inventor: "James Gosling", foundedYear: 1995, inventedYear: 1996 },
    { name: "Python", inventor: "Guido van Rossum", foundedYear: 1989, inventedYear: 1991 },
    { name: "HTML", inventor: "Tim Berners-Lee", foundedYear: 1989, inventedYear: 1991 },
    { name: "CSS", inventor: "Håkon Wium Lie", foundedYear: 1994, inventedYear: 1996 },
    { name: "JavaScript", inventor: "Brendan Eich", foundedYear: 1995, inventedYear: 1995 },
    { name: "ReactJs", inventor: "Facebook", foundedYear: 2013, inventedYear: 2013 },
    { name: "AngularJs", inventor: "Google", foundedYear: 2010, inventedYear: 2010 },
    { name: "ExpressJs", inventor: "TJ Holowaychuk", foundedYear: 2010, inventedYear: 2010 },
    { name: "MongoDB", inventor: "Eliot Horowitz", foundedYear: 2007, inventedYear: 2009 },
    { name: "SQL", inventor: "Donald D. Chamberlin", foundedYear: 1979, inventedYear: 1974 },
    { name: "MySQL", inventor: "MySQL AB", foundedYear: 1995, inventedYear: 1995 },
    { name: "PostgreSQL", inventor: "PostgreSQL Global Development Group", foundedYear: 1996, inventedYear: 1989 },
    { name: "AWS", inventor: "Amazon", foundedYear: 2006, inventedYear: 2002 },
    { name: "Azure", inventor: "Microsoft", foundedYear: 2010, inventedYear: 2010 },
    { name: "Git", inventor: "Linus Torvalds", foundedYear: 2005, inventedYear: 2005 },
    { name: "GitHub", inventor: "Chris Wanstrath", foundedYear: 2008, inventedYear: 2008 },
];

// Add this function to show autocomplete suggestions
function showSuggestions() {
    const userInput = document.getElementById("searchInput").value.toLowerCase();
    const suggestionsContainer = document.getElementById("suggestions");

    // Filter technologies that start with the user input
    const filteredTechnologies = technologies.filter(tech => tech.name.toLowerCase().startsWith(userInput));

    // Generate HTML for suggestions
    const suggestionsHTML = filteredTechnologies.map(tech => `<p onclick="selectSuggestion('${tech.name}')">${tech.name}</p>`).join('');

    // Display suggestions
    suggestionsContainer.innerHTML = suggestionsHTML;
    suggestionsContainer.style.display = filteredTechnologies.length > 0 ? 'block' : 'none';
}

// Add this function to select a suggestion
function selectSuggestion(value) {
    document.getElementById("searchInput").value = value;
    document.getElementById("suggestions").style.display = 'none';
}

function hidePopup() {
    const popupContainer = document.getElementById("popup");
    popupContainer.style.display = "none";
    // Remove the light effect
    const lightBeam = document.querySelector(".light-beam");
    if (lightBeam) {
        lightBeam.remove();
    }
}

function search() {
    const userInput = document.getElementById("searchInput").value.toLowerCase();
    const popupContainer = document.getElementById("popup");
    const resultContainer = document.getElementById("result");
    
    const technology = technologies.find(tech => tech.name.toLowerCase() === userInput);

    if (technology) {
        resultContainer.innerHTML = `
            <p><strong>Name:</strong> ${technology.name}</p>
            <p><strong>Inventor:</strong> ${technology.inventor}</p>
            <p><strong>Founded Year:</strong> ${technology.foundedYear}</p>
            <p><strong>Invented Year:</strong> ${technology.inventedYear}</p>
        `;

        // Show the popup
        popupContainer.style.display = "flex";
        
        // Add the light effect
        document.body.insertAdjacentHTML("beforeend", '<div class="light-beam"></div>');

        // Hide the popup after 5 seconds (adjust the delay as needed)
        setTimeout(hidePopup, 5000);
    } else {
        resultContainer.innerHTML = `<p>Technology not found.</p>`;
    }
}
