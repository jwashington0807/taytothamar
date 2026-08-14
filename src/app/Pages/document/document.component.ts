import { Component, computed, inject } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-document',
  imports: [ PdfViewerModule ],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
    currentPage = 1;
    totalPages = 1;

    private readonly route = inject(ActivatedRoute);

    readonly type = toSignal(
      this.route.queryParamMap.pipe(map(params => params.get('type'))),
      { initialValue: null as string | null }
    );

    readonly pdfData = computed(() => {
      switch (this.type()) {
        case 'portfolio':
          return environment.portfolioLink;
        case 'resume':
          return environment.resumeLink;
        case 'references':
          return environment.referencesLink;
        default:
          return undefined;
      }
    });
}
