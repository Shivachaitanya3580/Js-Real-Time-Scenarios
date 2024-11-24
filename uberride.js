// Simulating Uber ride booking
let rideType = prompt(
    "Welcome to Uber! Please select your ride type:\n" +
    "1. UberX\n" +
    "2. UberXL\n" +
    "3. Uber Black\n" +
    "Enter the number corresponding to your choice:"
);

// Confirming the booking
if (rideType === "1" || rideType === "2" || rideType === "3") {
    // Simulate booking confirmation with a delay
    alert("Processing your ride booking... Please wait.");

    setTimeout(() => {
        let rideName = "";
        let price = 0;

        // Determine ride details based on the selection
        switch (rideType) {
            case "1":
                rideName = "UberX";
                price = "$10 - $15";
                break;
            case "2":
                rideName = "UberXL";
                price = "$20 - $30";
                break;
            case "3":
                rideName = "Uber Black";
                price = "$40 - $50";
                break;
        }

        // Ask for confirmation
        let confirmBooking = confirm(
            `Your ${rideName} is ready!\nEstimated Price: ${price}\nDo you want to confirm your ride?`
        );

        // Handle the user's response
        if (confirmBooking) {
            alert(`Thank you! Your ${rideName} is on the way.`);
        } else {
            alert("Ride canceled. You can book another ride anytime!");
        }
    }, 3000); // 3-second delay for confirmation
} else {
    alert("Invalid selection. Please refresh and select a valid ride type.");
}
