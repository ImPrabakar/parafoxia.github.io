window.onload = function(event) {
	console.log("ready")
	document.getElementById("submit").addEventListener("click", validate_contact);
}

function validate_contact() {
	name    = document.getElementById("name").value
	email   = document.getElementById("email").value
	message = document.getElementById("message").value

	if (name == "" || email == "" || message == "") {
		alert("There are some empty parameters. Make sure all boxes are filled.")
	}
	else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
		alert("That is not a valid email address. Make sure the email has a '@' and a '.'.")
	}
	else {
		alert("Message sent off successfully. Check your inbox in a few days for a reply!")
	}
}