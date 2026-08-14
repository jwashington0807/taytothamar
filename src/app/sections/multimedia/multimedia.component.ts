import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

type MediaEmbed =
    | { kind: 'video'; url: string }
    | { kind: 'iframe'; url: SafeResourceUrl };

@Component({
    selector: 'app-multimedia',
    standalone: true,
    templateUrl: './multimedia.component.html',
    styleUrls: ['./multimedia.component.scss']
})

export class MultimediaComponent {

    private readonly linksFile = '/assets/files/multimedia-links.txt';

    private readonly http = inject(HttpClient);
    private readonly sanitizer = inject(DomSanitizer);

    media = toSignal(
        this.http.get(this.linksFile, { responseType: 'text' }).pipe(
            map(text => text
                .split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0 && !line.startsWith('#'))
                .map(link => this.toMediaEmbed(link))
            ),
            catchError(err => {
                console.error('Failed to load multimedia links', err);
                return of([] as MediaEmbed[]);
            })
        ),
        { initialValue: [] as MediaEmbed[] }
    );

    private toMediaEmbed(link: string): MediaEmbed {
        if (this.isDirectVideoFile(link)) {
            return { kind: 'video', url: link };
        }

        return { kind: 'iframe', url: this.sanitizer.bypassSecurityTrustResourceUrl(this.toEmbedUrl(link)) };
    }

    private isDirectVideoFile(url: string): boolean {
        return /\.(mp4|webm|ogg|ogv|mov|m4v)(\?.*)?$/i.test(url);
    }

    private toEmbedUrl(url: string): string {
        const youTubeWatch = url.match(/[?&]v=([^&]+)/);
        if (youTubeWatch) {
            return `https://www.youtube.com/embed/${youTubeWatch[1]}`;
        }

        const youTubeShort = url.match(/youtu\.be\/([^?&]+)/);
        if (youTubeShort) {
            return `https://www.youtube.com/embed/${youTubeShort[1]}`;
        }

        const vimeoShare = url.match(/vimeo\.com\/(\d+)/);
        if (vimeoShare) {
            return `https://player.vimeo.com/video/${vimeoShare[1]}`;
        }

        return url;
    }
}
