const bookDisplay = document.querySelector(".book-display");

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

function Book(title, author, pages, read = false) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.read = read ? "Has been read." : "Yet to be read");
}

function displayBooks() {
    bookDisplay.innerHTML = "";
	for (const [index, book] of myLibrary.entries()) {
		const { title, author, pages, read } = book;
		bookDisplay.innerHTML += `<div class="book" onclick="deleteBook(${index})">
                                    ${title}
                                    <button id="${index}">Delete</button>
                                  </div>`;
	}
	const deleteButtons = document.querySelectorAll("button");
	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", deleteBook);
	}
}

function deleteBook(e) {
    console.log(e)
}

function addBookToLibrary() {}

displayBooks();
