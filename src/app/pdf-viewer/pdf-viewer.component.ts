import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfUrl:string|undefined;
  constructor(private route:ActivatedRoute){};
  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        const subject = params['subject'];
      if (subject === 'engineering_math') {
        this.pdfUrl = 'path/to/math.pdf';
      } else if (subject === 'computer_networks') {
        this.pdfUrl = '../assets/Computer Networks - A Tanenbaum - 5th edition.pdf';
      } else if (subject === 'computer-organization') {
        this.pdfUrl = 'path/to/computer-organization.pdf';
      } else if (subject === 'compiler-design') {
        this.pdfUrl = 'path/to/compiler-design.pdf';
      } else if (subject === 'data-structures') {
        this.pdfUrl = '../assets/Data Structures and Algorithms - Narasimha Karumanchi (1).pdf';
      } else if(subject==='algorithms'){
        this.pdfUrl='../'
      }
      });
  }


}
