// Toggle Sidebar Visibility and Keep Button Visible
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("toggleBtn");

    sidebar.classList.toggle("hidden");

    if (sidebar.classList.contains("hidden")) {
        toggleBtn.style.left = "10px";  // Move button when sidebar is hidden
    } else {
        toggleBtn.style.left = "230px"; // Move button when sidebar is visible
    }
}

// Send Chat Message
function sendMessage() {
    let userInput = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");

    if (userInput.value.trim() === "") return;

    // Append User Message
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = userInput.value;
    chatbox.appendChild(userMessage);

    // Simulated AI Response
    setTimeout(() => {
        let aiMessage = document.createElement("div");
        aiMessage.classList.add("message", "ai");
        aiMessage.innerText = "I am here to assist you.";
        chatbox.appendChild(aiMessage);

        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to latest message
    }, 1000);

    userInput.value = "";
}

// Detect "Enter" Key Press to Send Message
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents new line in input
        sendMessage();
    }
});

// Start New Chat
function startNewChat() {
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML = `<div class="message ai">Hello! How can I assist you today?</div>`;
}


// Toggle Dark/Light Mode
function toggleMode() {
    let body = document.body;
    let modeToggle = document.querySelector(".mode-toggle");

    body.classList.toggle("light-mode");

    // Save user preference
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
        modeToggle.innerText = "🌙";  // Show moon for dark mode option
    } else {
        localStorage.setItem("mode", "dark");
        modeToggle.innerText = "☀️";  // Show sun for light mode option
    }
}

// Load User Preference on Page Load
window.onload = function () {
    let savedMode = localStorage.getItem("mode");
    let modeToggle = document.querySelector(".mode-toggle");

    if (savedMode === "light") {
        document.body.classList.add("light-mode");
        modeToggle.innerText = "🌙";
    } else {
        modeToggle.innerText = "☀️";
    }
};