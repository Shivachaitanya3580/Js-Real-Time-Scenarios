// Simulate a product rating system
let productRatings = ["Laptop", "Smartphone", "Headphones"];
let userRatings = [];

// Loop through each product to get ratings
for (let i = 0; i < productRatings.length; i++) {
    let rating = prompt(
        `Please rate the product "${productRatings[i]}" on a scale of 1 to 5:`
    );

    // Validate the input and ensure it's between 1 and 5
    if (rating >= 1 && rating <= 5) {
        userRatings.push({ product: productRatings[i], rating: Number(rating) });
        alert(`Thank you! You rated "${productRatings[i]}" ${rating}/5.`);
    } else {
        alert("Invalid rating. Please enter a number between 1 and 5.");
        i--; // Decrement counter to retry the rating for the same product
    }
}

// Show a summary of the user's ratings
alert("Here is the summary of your ratings:");
userRatings.forEach((item) => {
    alert(`Product: ${item.product}, Rating: ${item.rating}/5`);
});

console.log(userRatings); // Optional: Log the ratings to the console
