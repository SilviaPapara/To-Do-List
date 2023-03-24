let input = document.getElementById("input");
let addButton = document.getElementById("addButton");
let toDoList = document.getElementById("toDoList");

addButton.addEventListener("click", function () {
  if (input.value.trim() == "") {
    deleteButton.disable = true;
  }

  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = input.value;
  toDoList.appendChild(paragraph);

  //   // Create a new div for the SVG elements
  let svgDiv = document.createElement("div");
  svgDiv.classList.add("svg-div");

  let deleteButton = document.createElement("img");
  deleteButton.classList.add("svgs");
  deleteButton.setAttribute("src", "assets/trash-solid.svg");
  svgDiv.appendChild(deleteButton);

  let editButton = document.createElement("img");
  editButton.classList.add("svgs");
  editButton.setAttribute("src", "assets/pen-to-square-solid.svg");
  svgDiv.appendChild(editButton);

  paragraph.appendChild(svgDiv);

  let isParagraphLineThrough = false;

  paragraph.addEventListener("click", function () {
    if (isParagraphLineThrough) {
      paragraph.style.textDecoration = "";
      isParagraphLineThrough = false;
    } else {
      paragraph.style.textDecoration = "line-through";
      isParagraphLineThrough = true;
    }
  });

  deleteButton.addEventListener("click", function () {
    toDoList.removeChild(paragraph);
  });

  // editButton.addEventListener("click",function(){

  // })

  editButton.addEventListener("click", function () {
    let editInput = document.createElement("input");
    editInput.classList.add("edit-input");
    editInput.value = paragraph.innerText;
    paragraph.innerText = "";
    paragraph.appendChild(editInput);
    editInput.focus();

    let saveButton = document.createElement("img");
    saveButton.classList.add("svgs");
    saveButton.setAttribute("src", "assets/check-solid.svg");
    paragraph.appendChild(saveButton);

    saveButton.addEventListener("click", function () {
      paragraph.innerText = editInput.value;
      paragraph.appendChild(deleteButton);
      paragraph.appendChild(editButton);
    });
  });

  input.value = "";
});