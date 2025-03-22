// Toggle Password Visibility
function togglePassword() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// Toggle Dark Mode
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon for dark/light mode
    modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    // Save user preference in local storage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Check Local Storage for Dark Mode Preference
window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        modeToggle.textContent = "☀️";
    }
};