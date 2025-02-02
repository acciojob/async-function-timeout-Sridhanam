//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the form elements
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const submitButton = document.getElementById("btn");
    const outputDiv = document.getElementById("output");

    // Function to delay execution
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to handle button click
    async function displayMessage() {
        // Get values from inputs
        const text = textInput.value;
        const delayTime = parseInt(delayInput.value, 10);

        // Validate delay input
        if (isNaN(delayTime) || delayTime < 0) {
            outputDiv.textContent = "Please enter a valid delay in milliseconds.";
            return;
        }

        // Wait for the specified delay
        await delay(delayTime);

        // Display the text in the output div
        outputDiv.textContent = text;
    }

    // Add event listener to the button
    submitButton.addEventListener("click", () => {
        displayMessage();
    });
});
