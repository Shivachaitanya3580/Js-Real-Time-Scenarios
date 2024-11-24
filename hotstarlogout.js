// Simulating the logout process
let confirmLogout = confirm("Are you sure you want to log out?");

if (confirmLogout) {
    alert("Logging you out... Please wait.");

    // Set a delay before redirecting to the login page (simulate processing time)
    setTimeout(() => {
        alert("You have been successfully logged out.");
        // Redirect to the login page (using location.href)
        window.location.href = "hotstar.html"; // Replace "login.html" with your actual login page URL
    }, 3000); // 3-second delay before redirecting
} else {
    alert("You are still logged in. Enjoy your session!");
}
