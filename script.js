class Book {
	constructor(title, author, pages, read = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

const library = [
	new Book('War and Peace', 'Leo Tolstoy', 1296, false),
	new Book(
		"Imminent: Inside the Pentagon's Hunt for UFOs",
		'Luis Elizondo',
		304,
		false
	),
	new Book('In Our Likeness: A Novel', 'Bryan VanDyke', 224, false),
];

const bookform = document.querySelector('.book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pagecount = document.getElementById('pagecount');

const dialogElem = document.getElementById('dialog');

const showDialogBtn = document.querySelector('.show-dialog');
showDialogBtn.addEventListener('click', () => {
	dialogElem.showModal();
});

const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', validateBook);

function validateBook(e) {
	e.preventDefault();
	if (bookform.checkValidity()) {
		addBookToLibrary();
		dialogElem.close()
	}

	const titleError = document.querySelector('.title-error')
	const authorError = document.querySelector('.author-error')
	const pagecountError = document.querySelector('.pagecount-error')
	
	if (!title.validity.valid) {
		titleError.innerText = title.validationMessage
	} else {
		titleError.innerText = ''
	}
	if (!author.validity.valid) {
		authorError.innerText = author.validationMessage
	}
	if (!pagecount.validity.valid) {
		pagecountError.innerText = pagecount.validationMessage
	}
}

function displayBooks() {
	const bookDisplay = document.querySelector('.book-display');
	bookDisplay.innerHTML = '';
	for (const [index, book] of library.entries()) {
		const { title, author, pages, read } = book;

		bookDisplay.innerHTML += `<div class="book">
                                    <div class="book-line"></div>
                                    <h2 class="title">${title}</h2>
                                    <h3 class="author">${author}</h3>
                                    <div class="buttons">
                                        <img src="./icons/delete.svg" height="30px" onclick="deleteBook(${index})"/>
                                        <img src="./icons/${
																					read ? 'read.svg' : 'notread.svg'
																				}" height="30px" 
										onclick="markRead(${index})"/>
                                    </div>
                                  </div>`;
	}
}

function deleteBook(index) {
	library.splice(index, 1);
	displayBooks();
}

function markRead(index) {
	library[index].read = !library[index].read;
	displayBooks();
}

function addBookToLibrary() {
	let newBook = new Book(title.value, author.value, pagecount.value);
	library.push(newBook);
	displayBooks();
}

displayBooks();
