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
		(this.read = read);
}

function displayBooks() {
	bookDisplay.innerHTML = "";
	for (const [index, book] of myLibrary.entries()) {
		const { title, author, pages, read } = book;
		bookDisplay.innerHTML += `<div class="book">
                                    <div class="book-line"></div>
                                    <h2 class="title">${title}</h2>
                                    <h3 class="author">${author}</h3>
                                    <div class="buttons">
                                        <img src="/icons/delete.svg" height="30px" onclick="deleteBook(${index})"/>
                                        <img src="/icons/${
																					read ? "read.svg" : "notread.svg"
																				}" height="30px" onclick="markRead(${index})"/>
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

function addBookToLibrary() {}

displayBooks();
