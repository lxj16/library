let myLibrary = [];
let formDisplay = false;
let id = 0;

//Dom selectors
const addBookBtn = document.querySelector("#addBookBtn");
const submitBtn = document.querySelector("#submitBtn");
const bookForm = document.querySelector("#bookForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookTable = document.querySelector("#bookTable");

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

function addBook() {}

function toggleForm() {
  formDisplay = !formDisplay;
  if (formDisplay) {
    bookForm.style.display = "none";
  } else {
    bookForm.style.display = "block";
  }
}

addBookBtn.addEventListener("click", toggleForm);
submitBtn.addEventListener("click", addBook);

function addBook(e) {
  if (title.value === "") {
    alert("Add your task");
  }

  //create li element
  const tr = document.createElement("tr");
  //add class
  tr.innerHTML = `
  <th scope="row">${++id}</th>
  <td>${titleInput.value}</td>
  <td>${authorInput.value}</td>
  <td>${pagesInput.value}</td>
  </tr>`;

  bookTable.appendChild(tr);

  //store in localstorage
  // storeTaskInLocalStorage(taskInput.value);

  //clear input
  titleInput.value = "";
  authorInput.value = "";

  bookForm.style.display = "none";

  e.preventDefault();
}
