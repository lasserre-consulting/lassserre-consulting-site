import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SafeHtmlPipe, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats = [
    { value: $localize`:@@about.stat1.value:10 ans`, label: $localize`:@@about.stat1.label:d'expérience en développement` },
    { value: '40+',   label: $localize`:@@about.stat2.label:projets livrés` },
    { value: '100%',  label: $localize`:@@about.stat3.label:Fullstack pratiqué` },
  ];

  timeline = [
    {
      period: $localize`:@@about.timeline1.period:2025 – présent`,
      tag: $localize`:@@about.timeline1.tag:Freelance`,
      title: $localize`:@@about.timeline1.title:Consultant indépendant`,
      description: $localize`:@@about.timeline1.desc:Missions longue durée en tant que Tech Lead ou développeur senior. Focus sur la performance, la qualité et la valeur produit.`,
    },
    {
      period: '2021 – 2025',
      tag: $localize`:@@about.timeline2.tag:Consultant`,
      title: $localize`:@@about.timeline2.title:ESN — Conseil & Intégration`,
      description: $localize`:@@about.timeline2.desc:Missions variées en Java / Angular / VueJS chez des clients grands comptes.`,
    },
    {
      period: '2016 – 2021',
      tag: $localize`:@@about.timeline3.tag:Client final`,
      title: $localize`:@@about.timeline3.title:Développeur Fullstack`,
      description: $localize`:@@about.timeline3.desc:Développement, maintenance et déploiement d'une quarantaine de projets au sein d'une startup de 6 personnes en charge de l'intégralité du périmètre métier.`,
    },
  ];

  values = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: $localize`:@@about.value1.title:Fiabilité`,
      description: $localize`:@@about.value1.desc:Engagements tenus, deadlines respectées, communication proactive.`,
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
      title: $localize`:@@about.value2.title:Performance`,
      description: $localize`:@@about.value2.desc:Code optimisé, architecture scalable, delivery orienté valeur.`,
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: $localize`:@@about.value3.title:Transparence`,
      description: $localize`:@@about.value3.desc:Reporting clair, implication dans les décisions, pas de zone grise.`,
    },
  ];
}
