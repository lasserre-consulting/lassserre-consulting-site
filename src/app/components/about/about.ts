import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="about-container">

        <!-- Header -->
        <div class="about-header">
          <span class="about-label">À propos</span>
          <h2 class="about-title">Mon parcours</h2>
          <p class="about-intro">
            Après 5 ans en tant que consultant et 4 ans chez client final,
            je poursuis aujourd'hui mon activité en freelance. Je privilégie
            les missions longues basées sur la performance, la transparence
            et l'exigence technique.
          </p>
        </div>

        <!-- Stats -->
        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of stats">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          <div
            class="timeline-item"
            *ngFor="let item of timeline; let i = index"
            [class.timeline-item--right]="i % 2 !== 0"
          >
            <div class="timeline-content">
              <div class="timeline-meta">
                <span class="timeline-period">{{ item.period }}</span>
                <span class="timeline-tag">{{ item.tag }}</span>
              </div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-desc">{{ item.description }}</p>
            </div>
            <div class="timeline-dot"></div>
          </div>
        </div>

        <!-- Values -->
        <div class="values-grid">
          <div class="value-item" *ngFor="let value of values">
            <div class="value-icon" [innerHTML]="value.icon"></div>
            <h4 class="value-title">{{ value.title }}</h4>
            <p class="value-desc">{{ value.description }}</p>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --accent: #2563eb;
      --accent-light: #3b82f6;
      --accent-glow: rgba(37, 99, 235, 0.15);
      --text-primary: #0f172a;
      --text-secondary: #64748b;
      --border: #e2e8f0;
      --bg-card: #f8fafc;
      --timeline-line: #cbd5e1;
    }

    .about-section {
      padding: 6rem 2rem;
      background: #ffffff;
      font-family: 'DM Sans', sans-serif;
      overflow: hidden;
    }

    .about-container {
      max-width: 900px;
      margin: 0 auto;
    }

    /* ── Header ── */
    .about-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .about-label {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-glow);
      padding: 0.3rem 0.9rem;
      border-radius: 999px;
      margin-bottom: 1rem;
    }

    .about-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--text-primary);
      margin: 0 0 1.25rem;
      line-height: 1.15;
    }

    .about-intro {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 620px;
      margin: 0 auto;
      font-weight: 300;
    }

    /* ── Stats ── */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 5rem;
    }

    .stat-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: default;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px var(--accent-glow);
      border-color: var(--accent-light);
    }

    .stat-value {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      color: var(--accent);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-secondary);
      text-align: center;
      font-weight: 400;
    }

    /* ── Timeline ── */
    .timeline {
      position: relative;
      margin-bottom: 5rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, transparent, var(--timeline-line) 10%, var(--timeline-line) 90%, transparent);
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      width: calc(50% - 2.5rem);
      margin-bottom: 3rem;
      animation: fadeSlideLeft 0.5s ease both;
    }

    .timeline-item--right {
      margin-left: calc(50% + 2.5rem);
      animation-name: fadeSlideRight;
    }

    .timeline-content {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      transition: box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .timeline-content:hover {
      box-shadow: 0 8px 24px var(--accent-glow);
      border-color: var(--accent-light);
    }

    .timeline-dot {
      position: absolute;
      width: 14px;
      height: 14px;
      background: var(--accent);
      border: 3px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--accent-glow);
      top: 1.75rem;
      right: -3.25rem;
    }

    .timeline-item--right .timeline-dot {
      right: auto;
      left: -3.25rem;
    }

    .timeline-meta {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 0.6rem;
    }

    .timeline-period {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    .timeline-tag {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-glow);
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
    }

    .timeline-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: var(--text-primary);
      margin: 0 0 0.4rem;
    }

    .timeline-desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
      font-weight: 300;
    }

    /* ── Values ── */
    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .value-item {
      text-align: center;
      padding: 2rem 1.25rem;
      border-radius: 16px;
      border: 1px solid var(--border);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .value-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px var(--accent-glow);
      border-color: var(--accent-light);
    }

    .value-icon {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
      display: flex;
      justify-content: center;
    }

    .value-icon svg {
      width: 36px;
      height: 36px;
      stroke: var(--accent);
    }

    .value-title {
      font-family: 'Playfair Display', serif;
      font-size: 1rem;
      color: var(--text-primary);
      margin: 0 0 0.4rem;
    }

    .value-desc {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.6;
      font-weight: 300;
    }

    /* ── Animations ── */
    @keyframes fadeSlideLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeSlideRight {
      from { opacity: 0; transform: translateX(20px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    /* ── Responsive ── */
    @media (max-width: 700px) {
      .stats-grid,
      .values-grid { grid-template-columns: 1fr 1fr; }

      .timeline::before { left: 1rem; }

      .timeline-item,
      .timeline-item--right {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }

      .timeline-dot,
      .timeline-item--right .timeline-dot {
        left: -2.25rem;
        right: auto;
      }
    }

    @media (max-width: 480px) {
      .stats-grid,
      .values-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class About {
  stats = [
    { value: '9 ans', label: "d'expérience en développement" },
    { value: '20+',   label: 'projets livrés en production' },
    { value: '100%',  label: 'missions longue durée' },
  ];

  timeline = [
    {
      period: '2016 – 2021',
      tag: 'Consultant',
      title: 'ESN — Conseil & Intégration',
      description: 'Missions variées en Java / Angular chez des clients grands comptes. Montée en compétences sur l\'architecture microservices et la CI/CD.',
    },
    {
      period: '2021 – 2025',
      tag: 'Client final',
      title: 'Tech Lead — Produit SaaS',
      description: 'Responsable architecture et delivery pour une plateforme à fort trafic. Encadrement d\'une équipe de 6 développeurs.',
    },
    {
      period: '2025 – présent',
      tag: 'Freelance',
      title: 'Consultant indépendant',
      description: 'Missions longue durée en tant que Tech Lead ou développeur senior. Focus sur la performance, la qualité et la valeur produit.',
    },
  ];

  values = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Fiabilité',
      description: 'Engagements tenus, deadlines respectées, communication proactive.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`,
      title: 'Performance',
      description: 'Code optimisé, architecture scalable, delivery orienté valeur.',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Transparence',
      description: 'Reporting clair, implication dans les décisions, pas de zone grise.',
    },
  ];
}
