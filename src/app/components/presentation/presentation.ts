import { Component, inject, LOCALE_ID } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export default class Presentation {

  name = 'Arnaud Lasserre';

  pdfHref = inject(LOCALE_ID) === 'en'
    ? '/pdf/dossier-competence-en.pdf'
    : '/pdf/dossier-competence.pdf';

  roles = [
    $localize`:@@presentation.role.fullstack:Développeur Fullstack Senior`,
    $localize`:@@presentation.role.techlead:Tech Lead`,
    $localize`:@@presentation.role.freelance:Consultant Freelance`,
  ];

  description = $localize`:@@presentation.description:Freelance senior basé à Toulouse. J'interviens sur vos projets Java / Angular en tant que développeur ou Tech Lead — architecture, qualité de code, delivery. Créateur d'Entrevia. 10 ans d'expérience.`;

  particles = Array.from({ length: 40 }, () => ({
    style: `
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --dur: ${3 + Math.random() * 5}s;
      --delay: ${Math.random() * 4}s;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `
  }));
}
