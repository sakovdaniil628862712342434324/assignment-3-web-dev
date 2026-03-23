// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", function (event) {
	// Prevent the form from automatically refreshing the page
	event.preventDefault();

	// Create the message element
	const thankYouMessage = document.createElement("p");
	thankYouMessage.innerHTML = "Thank you for your message!";
	thankYouMessage.style.fontSize = "24px";

	// Clear the current content and append the new message
	contactPage.innerHTML = "";
	contactPage.appendChild(thankYouMessage);
});
