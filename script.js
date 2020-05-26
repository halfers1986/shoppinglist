var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteItem = document.querySelectorAll("deleteitem");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.className = "listItem"
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var listItem = document.getElementsByClassName("listItem")
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("X"));
	li.appendChild(button);
	li.addEventListener("click", markDone);
	button.className = "small red";
	button.onclick = removeParent;

	function markDone () {
	li.classList.toggle("done")
	};

	function removeParent (event) {
	event.target.parentNode.remove();
	};
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);