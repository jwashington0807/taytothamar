import { Component, OnInit } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html',
    imports: [ PdfViewerModule ],
    styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit{

    pdfData?: any;
    currentPage = 1;
    totalPages = 1;

    ngOnInit(): void {
        // On initiation, get the PDF from the assets folder
        this.pdfData = environment.referencesLink;
    }
}
