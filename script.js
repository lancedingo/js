let button = document.getElementById("enter")
let input = document.getElementById("userinput")
let ul = document.querySelector("ul")

// button.addEventListener("click", function() {
//   if (input.value.length > 0) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// })

// input.addEventListener("keypress", function(event) {
//   event.which;
//   if (input.value.length > 0 && event.keyCode === 13) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = ""
//   }
// })

//===========================================================
//Tidy Code
function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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