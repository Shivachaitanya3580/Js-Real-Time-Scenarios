// Simulating video quality selection
let quality = prompt(
    "Welcome to Hotstar! Please select your video quality:\n" +
    "1. 480p (Standard Definition)\n" +
    "2. 720p (High Definition)\n" +
    "3. 1080p (Full HD)\n" +
    "4. 4K (Ultra HD)\n" +
    "Enter the number corresponding to your choice:"
);

// Determine the selected quality using switch case
switch (quality) {
    case "1":
        alert("You selected 480p (Standard Definition). Enjoy your video!");
        break;
    case "2":
        alert("You selected 720p (High Definition). Enjoy your crisp visuals!");
        break;
    case "3":
        alert("You selected 1080p (Full HD). Immerse yourself in great detail!");
        break;
    case "4":
        alert("You selected 4K (Ultra HD). Experience the ultimate clarity!");
        break;
    default:
        alert("Invalid selection. Please refresh and choose a valid quality.");
        break;
}
