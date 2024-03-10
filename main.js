// Function to load fast links
function loadFastLinks() {
    const linksContainer = document.getElementById("fast-links");
    fastLinks.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.name;
        const listItem = document.createElement("li");
        listItem.appendChild(anchor);
        linksContainer.appendChild(listItem);
    });
}
// Function to load chatbots
function loadChatBots() {
    const linksContainer = document.getElementById("ChatBots");
    chatbots.forEach(chatbot => {
        // Create an anchor element
        const anchor = document.createElement("a");
        anchor.href = chatbot.link; // Set the link URL
        // Create the image element
        const img = document.createElement("img");
        img.src = chatbot.image;
        img.alt = chatbot.name;
        img.classList.add("chatbot-image"); // Add CSS class to the image
        // Append the image to the anchor element
        anchor.appendChild(img);
        // Create the list item and append the anchor to it
        const listItem = document.createElement("li");
        listItem.appendChild(anchor);
        // Append the list item to the links container
        linksContainer.appendChild(listItem);
    });
}



// Function to clear search queries
function clearQueries() {
    document.getElementById("google-search").value = "";
    document.getElementById("duckduckgo-search").value = "";
    document.getElementById("bing-search").value = "";
}

// Function to search on Enter key press
function searchOnEnter(event, searchFunction) {
    if (event.key === 'Enter') {
        searchFunction();
    }
}

// Functions to search on respective search engines
function searchGoogle() {
    var query = document.getElementById("google-search").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    clearQueries();
}

function searchDuckDuckGo() {
    var query = document.getElementById("duckduckgo-search").value;
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    clearQueries();
}

function searchBing() {
    var query = document.getElementById("bing-search").value;
    window.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(query);
    clearQueries();
}

// Call functions to load fast links and chatbots links when the page is loaded
window.addEventListener("DOMContentLoaded", loadFastLinks);
window.addEventListener("DOMContentLoaded", loadChatBots);
