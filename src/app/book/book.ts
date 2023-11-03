import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service'

@Component({
  selector: 'app-books',
  templateUrl: './book.html',
  styleUrls: ['./book.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  searchString = "";
  constructor (private bookService: BookService) {}

  onClickImage(book) {
    book.previewMode = !book.previewMode;
  }

  ngOnInit() {
    this.getBooks();
  }

  onSubmit() {
    this.getBooks()
  }

  private getBooks() {
    this.bookService.getBooks(this.searchString).then(data => {
      this.books = data;
    })
  }

}
