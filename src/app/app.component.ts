import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  pdfUrl:string|undefined;
  openPdfInViewer() {
    // Set the PDF URL to be displayed in the <iframe>
    this.pdfUrl = '../assets/Computer Network-CS.pdf';
  }

}
