import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document',
  imports: [ PdfViewerModule ],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
    pdfData?: any;
    currentPage = 1;
    totalPages = 1;
    type: string | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {

      this.route.queryParamMap.subscribe(params => {
      this.type = params.get('type');

      if(this.type != null){
        switch (this.type) {
          case 'portfolio':
              this.pdfData = environment.portfolioLink;
            break;
          case 'resume':
              this.pdfData = environment.resumeLink;
            break;
          case 'references':
              this.pdfData = environment.referencesLink;
            break;
          default:
            console.log("invalid string value");
        }
      }
      else
      {
        // We have a problem
      }
    });
  }
}
