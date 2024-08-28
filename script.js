const bookDisplay = document.querySelector(".book-display");
const dialogElem = document.getElementById("dialog");
const showDialogBtn = document.querySelector(".show-dialog");
const addBookBtn = document.querySelector(".add-book");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pagecount = document.getElementById("pagecount");

showDialogBtn.addEventListener("click", () => {
	dialogElem.showModal();
});

addBookBtn.addEventListener("click", (event) => {
	event.preventDefault();

	if (
		title.validity.valid &&
		author.validity.valid &&
		pagecount.validity.valid
	) {
		addBookToLibrary();
		dialogElem.close();
	} else {
		alert("Please correct your book's information!");
	}
});

class Book {
	constructor(title, author, pages, read = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

const myLibrary = [
	new Book("War and Peace", "Leo Tolstoy", 1296, false),
	new Book(
		"Imminent: Inside the Pentagon's Hunt for UFOs",
		"Luis Elizondo",
		304,
		false
	),
	new Book("In Our Likeness: A Novel", "Bryan VanDyke", 224, false),
];

function displayBooks() {
	bookDisplay.innerHTML = "";
	for (const [index, book] of myLibrary.entries()) {
		const { title, author, pages, read } = book;
		
		bookDisplay.innerHTML += `<div class="book">
                                    <div class="book-line"></div>
                                    <h2 class="title">${title}</h2>
                                    <h3 class="author">${author}</h3>
                                    <div class="buttons">
                                        <img src="./icons/delete.svg" height="30px" onclick="deleteBook(${index})"/>
                                        <img src="./icons/${read ? "read.svg" : "notread.svg"}" height="30px" 
										onclick="markRead(${index})"/>
                                    </div>
                                  </div>`;
	}
}

function deleteBook(index) {
	myLibrary.splice(index, 1);
	displayBooks();
}

function markRead(index) {
	myLibrary[index].read = !myLibrary[index].read;
	displayBooks();
}

function addBookToLibrary() {
	let newBook = new Book(title.value, author.value, pagecount.value);
	myLibrary.push(newBook);
	displayBooks();
}

displayBooks();
