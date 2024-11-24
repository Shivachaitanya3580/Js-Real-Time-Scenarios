// Display subscription plans
let userChoice = prompt(
    "Welcome to Hotstar! Please select a subscription plan:\n" +
    "1. Basic Plan - 149/month\n" +
    "2. Standard Plan - 899/month\n" +
    "3. Premium Plan - 1499/month\n" +
    "Enter the number of your choice:"
);

// Process the user's selection
switch (userChoice) {
    case "1":
        alert("You selected the Basic Plan. Price: 149/month.\nEnjoy limited access to movies and TV shows!");
        break;
    case "2":
        alert("You selected the Standard Plan. Price: 899/month.\nEnjoy access to most movies, TV shows, and live sports in HD!");
        break;
    case "3":
        alert("You selected the Premium Plan. Price: 1499/month.\nEnjoy full access to all content in Ultra HD with no ads!");
        break;
    default:
        alert("Invalid choice. Please refresh the page and select a valid plan.");
}
