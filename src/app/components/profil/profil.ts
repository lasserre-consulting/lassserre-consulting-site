import { Component, inject, LOCALE_ID } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [NgOptimizedImage, ScrollRevealDirective],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
  pdfHref = inject(LOCALE_ID) === 'en'
    ? '/pdf/dossier-competence-en.pdf'
    : '/pdf/dossier-competence.pdf';
}
