function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.pagesPerDay = function() {
        return Math.ceil(this.pages / 7);
    };

    this.getBookInfo = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, published in ${this.year}.`;
    };
}

// მაგალითი:
const myBook = new Book("1984", "George Orwell", 328, 1949);

console.log(myBook.getBookInfo()); // "1984 by George Orwell, 328 pages, published in 1949."
console.log(`თქვენ უნდა წაიკითხოთ დღეში ${myBook.pagesPerDay()} გვერდი.`); // "თქვენ უნდა წაიკითხოთ დღეში 47 გვერდი."
