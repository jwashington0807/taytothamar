import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [ PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit{

    pdfData?: any;
    currentPage = 1;
    totalPages = 1;

    ngOnInit(): void {
        // On initiation, get the PDF from the assets folder
        this.pdfData = environment.portfolioLink;
    }
}
