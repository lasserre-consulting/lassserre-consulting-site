import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="expertise" class="expertise-section">
      <div class="expertise-container">

        <span class="section-badge">Expertise</span>
        <h2 class="section-title">Ce que j'apporte à vos projets</h2>
        <p class="section-subtitle">Une combinaison rare de vision technique, de leadership et de delivery.</p>

        <div class="cards">
          <div
            class="card"
            *ngFor="let item of expertises"
            [style.--accent]="item.color">

            <!-- Numbered index -->
            <span class="card-index">{{ item.index }}</span>

            <!-- Icon -->
            <div class="card-icon" [innerHTML]="item.icon"></div>

            <!-- Content -->
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>

            <!-- Tags -->
            <div class="card-tags">
              <span class="tag" *ngFor="let tag of item.tags">{{ tag }}</span>
            </div>

            <!-- Hover glow -->
            <div class="card-glow"></div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --text-primary: #0f172a;
      --text-secondary: #64748b;
      --border: #e2e8f0;
      --bg-section: #ffffff;
    }

    .expertise-section {
      background: var(--bg-section);
      padding: 6rem 2rem;
      font-family: 'DM Sans', sans-serif;
      position: relative;
      overflow: hidden;
    }

    /* Soft radial wash in background */
    .expertise-section::before {
      content: '';
      position: absolute;
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .expertise-container {
      position: relative;
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
    }

    /* ── Header ── */
    .section-badge {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #2563eb;
      background: rgba(37, 99, 235, 0.08);
      border: 1px solid rgba(37, 99, 235, 0.18);
      padding: 0.3rem 1rem;
      border-radius: 999px;
      margin-bottom: 1.25rem;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      color: var(--text-primary);
      margin: 0 0 0.75rem;
      line-height: 1.2;
    }

    .section-subtitle {
      font-size: 0.95rem;
      color: var(--text-secondary);
      font-weight: 300;
      margin: 0 0 3.5rem;
    }

    /* ── Cards ── */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .card {
      position: relative;
      text-align: left;
      padding: 2rem;
      border-radius: 20px;
      border: 1px solid var(--border);
      background: #fafbfc;
      overflow: hidden;
      cursor: default;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 48px rgba(0,0,0,0.08);
      border-color: color-mix(in srgb, var(--accent) 35%, transparent);
    }

    .card:hover .card-glow {
      opacity: 1;
    }

    .card:hover .card-icon svg {
      transform: scale(1.1);
    }

    /* Glow blob bottom-right */
    .card-glow {
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%);
      bottom: -60px;
      right: -60px;
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }

    /* Index number */
    .card-index {
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      color: var(--border);
      line-height: 1;
      user-select: none;
      transition: color 0.25s ease;
    }

    .card:hover .card-index {
      color: color-mix(in srgb, var(--accent) 20%, transparent);
    }

    /* Icon */
    .card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: color-mix(in srgb, var(--accent) 10%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }

    .card-icon svg {
      width: 24px;
      height: 24px;
      stroke: var(--accent);
      transition: transform 0.25s ease;
    }

    /* Title */
    .card-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.15rem;
      color: var(--text-primary);
      margin: 0 0 0.6rem;
      line-height: 1.3;
    }

    /* Description */
    .card-desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.7;
      font-weight: 300;
      margin: 0 0 1.25rem;
    }

    /* Tags */
    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tag {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: var(--accent);
      background: color-mix(in srgb, var(--accent) 10%, transparent);
      border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .cards { grid-template-columns: 1fr; }
    }

    @media (max-width: 480px) {
      .expertise-section { padding: 4rem 1.25rem; }
    }
  `]
})
export class Expertise {

  expertises = [
    {
      index: '01',
      color: '#2563eb',
      title: 'Développement Fullstack',
      description: 'Conception et développement d\'applications robustes, scalables et maintenables de bout en bout — du backend Java / Spring Boot à l\'interface Angular.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>`,
      tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST API'],
    },
    {
      index: '02',
      color: '#7c3aed',
      title: 'Tech Lead',
      description: 'Définition de l\'architecture technique, animation des revues de code, montée en compétences de l\'équipe et alignement avec les enjeux produit.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M18 8l2 2 4-4"/>
      </svg>`,
      tags: ['Architecture', 'Code Review', 'Mentoring', 'Microservices'],
    },
    {
      index: '03',
      color: '#059669',
      title: 'Agilité & Scrum',
      description: 'Delivery structuré et orienté valeur produit. Animation des cérémonies, priorisation du backlog et pilotage par les indicateurs.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12L4.93 7"/>
        <path d="M12 12l7.07-5"/>
        <path d="M12 2v4"/>
        <circle cx="12" cy="22" r="1" fill="currentColor"/>
        <circle cx="4" cy="7" r="1" fill="currentColor"/>
        <circle cx="20" cy="7" r="1" fill="currentColor"/>
      </svg>`,
      tags: ['Scrum', 'Kanban', 'Backlog', 'OKR', 'Delivery'],
    },
  ];
}
