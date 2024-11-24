let shoppingcart = [
    {name:"iphone",price:59000},
    {name:"laptop",price:72000},
    {name:"headphone",price:5000},
    {name:"Buds",price:1500},
];

alert("welcome to amazon! shooping cart:");
shoppingcart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price.toFixed(2)}`);
});

if (confirm("Do you want to proceed to checkout?")) {
    let total = 0;
    let purchasedItems = [];
    for (let i = 0; i < shoppingcart.length; i++) {
        let item = shoppingCart[i];
        let userDecision = confirm(`Do you want to purchase ${item.name} for $${item.price.toFixed(2)}?`);
        
        if (userDecision) {
            purchasedItems.push(item);
            total += item.price;
            alert(`${item.name} added to your purchase.`);
        } else {
            alert(`${item.name} was skipped.`);
        }
    }

    // Final summary
    if (purchasedItems.length > 0) {
        alert(`Thank you for your purchase! You bought ${purchasedItems.length} item(s). Total: $${total.toFixed(2)}`);
    } else {
        alert("No items were purchased. Your cart is still full!");
    }
} else {
    alert("Checkout canceled. Your cart is safe!");
}