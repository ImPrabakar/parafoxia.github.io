window.onload = function(event) {
	console.log("ready");

	add_buttons = document.getElementsByClassName("add");
	for (var i = add_buttons.length - 1; i >= 0; i--) {
		add_buttons[i].addEventListener("click", add_item.bind(add_buttons[i]));
	}

	rem_buttons = document.getElementsByClassName("remove");
	for (var i = rem_buttons.length - 1; i >= 0; i--) {
		rem_buttons[i].addEventListener("click", remove_item.bind(add_buttons[i]));
	}
}

function add_item(target) {
	current_items = parseInt(document.getElementById("items").innerHTML);
	current_total = parseInt(document.getElementById("cost").innerHTML.slice(1));

	document.getElementById("items").innerHTML = current_items += 1;
	button_id = target.target.id;

	ps = document.getElementsByTagName("p");
	for (var i = ps.length - 1; i >= 0; i--) {
		if (ps[i].id == button_id) {
			price = parseInt(ps[i].innerHTML.slice(1));
			break;
		}
	}

	document.getElementById("cost").innerHTML = "£"+String(current_total + price);
}

function remove_item(target) {
	current_items = parseInt(document.getElementById("items").innerHTML);
	current_total = parseInt(document.getElementById("cost").innerHTML.slice(1));

	new_items = current_items - 1
	if (new_items < 0) { new_items = 0; }
	document.getElementById("items").innerHTML = new_items;
	button_id = target.target.id;

	ps = document.getElementsByTagName("p")
	for (var i = ps.length - 1; i >= 0; i--) {
		if (ps[i].id == button_id) {
			price = parseInt(ps[i].innerHTML.slice(1));
			break;
		}
	}

	new_total = current_total - price
	if (new_total < 0) { new_total = 0; }
	document.getElementById("cost").innerHTML = "£"+String(new_total);
}