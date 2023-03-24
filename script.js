// Ask for confirmation
let confirmation = confirm("Do you want to proceed?");

// Check if the user clicked Ok
if (confirmation == true) {
  // If the user clicked OK, show an alert saying "You clicked OK. Proceeding..."
  alert("You clicked OK. Proceeding...");
} else {
  // If the user clicked Cancel, show an alert saying "You clicked Cancel. Exiting..."
  alert("You clicked Cancel. Exiting...");
}

