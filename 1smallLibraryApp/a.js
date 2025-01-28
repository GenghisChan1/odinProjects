 const myLibrary = [];

 function book(books){
  this.books = books;
 }

 book.prototype.addbooktoLibrary = function(){
  myLibrary.push(this.books);
 };

 book.prototype.showlibrary = function(){
  console.log(myLibrary);
 }

 const libs = new book("OPM");
 libs.addbooktoLibrary();
 libs.showlibrary();