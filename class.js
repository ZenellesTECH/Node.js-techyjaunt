//const book ={title:'Think and Grow Rich',author:'Napoleon Hill',isbn:'9781788441025',genre:'Non fiction',available: true}
//setter method must have an argument while getter method don't.
class  Book {
#isbn
    constructor(title,author,isbn,available = true) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.available = available;
    }
    setIsbn(value){
        if (typeof value === 'string' && value.length === 13){
            this.#isbn = value
            return "ISBN updated"
        }else{
            return "Invalid ISBN format."
        }
    } 
    getIsbn(){
        return this.#isbn
    }
borrowBook() {
    if (this.available){
        this.available = false;
        return ;
    }else{
        return "Book not available"
    }

}
returnBook(){
    if (!this.available){
         this.available = true;
         return "Book has been returned"
    
         }
    }
}

//const favBook = new Book("Think and Grow Rich","Napoleon Hill","9781788441025", false)
//console.log(favBook.returnBook())


class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        const existingBook = this.books.find(b => b.title === title);
        if (existingBook){
            return "Book exists";
        }else {
            this.books.push(book);
            return "Book successfully added"
        }
    }
    removeBook(isbn){
        const index = this.books.findIndex(book => book.getIsbn !== isbn);
        if (index === -1){
            return "Book not found"
        }else{
            this.books.splice(index, 1)
            return "Book removed successfully."
        }
    }
    findBookByTitle(title){
        const book =this.books.find(book => book.title === title)
        if (book){
            return book;
        }else {
            return "Book not found"
        }
    }
}

const library = new Library();
console.log(library.addBook(new Book("Think and Grow Rich","Napoleon Hill","9781788441025", false)))
console.log(library.findBookByTitle("Think and Grow Rich"))
//console.log(library.removeBook("9781788441025"))
console.log(library)


class  DigitalLibrary extends Library {
    constructor() { 
        super()
    }
    downloadBook(isbn){
        
        
        const book = this.books.find(book=>book.getIsbn()=== isbn);
        if (!book){
            return 'Book doesnot exist';
        }
        if (!book.available){
            return 'Book unavailable';
        }
        if (book.available){
            return 'Book has downloded successfully';
        }
        
    }
}
const digitalLibrary = new DigitalLibrary();
console.log(digitalLibrary.downloadBook('9781788441025'))