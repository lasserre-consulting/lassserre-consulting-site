import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="stack-section">
      <div class="stack-container">

        <span class="section-badge">Stack Technique</span>
        <h2 class="section-title">Les outils de mon quotidien</h2>
        <p class="section-subtitle">Des technologies éprouvées pour des architectures robustes et scalables.</p>

        <div class="categories">
          <div class="category" *ngFor="let category of categories">
            <h3 class="category-title">{{ category.label }}</h3>
            <div class="tech-grid">
              <div
                class="tech-card"
                *ngFor="let tech of category.techs"
                [style.--accent]="tech.color">
                <div class="tech-icon" [innerHTML]="tech.icon"></div>
                <span class="tech-name">{{ tech.name }}</span>
                <div class="tech-glow"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      --bg: #080f1e;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.07);
      --text-primary: #f1f5f9;
      --text-muted: #64748b;
    }

    .stack-section {
      background: var(--bg);
      padding: 6rem 2rem;
      font-family: 'DM Sans', sans-serif;
      position: relative;
      overflow: hidden;
    }

    .stack-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }

    .stack-container {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    .section-badge {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #60a5fa;
      background: rgba(37, 99, 235, 0.12);
      border: 1px solid rgba(59, 130, 246, 0.2);
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
      color: var(--text-muted);
      font-weight: 300;
      margin: 0 0 3.5rem;
    }

    .categories {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .category-title {
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin: 0 0 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .category-title::before,
    .category-title::after {
      content: '';
      flex: 1;
      max-width: 80px;
      height: 1px;
      background: rgba(255,255,255,0.07);
    }

    /* La catégorie IA a un divider légèrement coloré */
    .category:last-child .category-title {
      color: #a78bfa;
    }

    .category:last-child .category-title::before,
    .category:last-child .category-title::after {
      background: rgba(139, 92, 246, 0.2);
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .tech-card {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.75rem 1.25rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      cursor: default;
      transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
      overflow: hidden;
    }

    .tech-card:hover {
      transform: translateY(-3px);
      border-color: color-mix(in srgb, var(--accent) 50%, transparent);
      background: color-mix(in srgb, var(--accent) 6%, transparent);
    }

    .tech-card:hover .tech-glow { opacity: 1; }

    .tech-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .tech-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .tech-icon svg { width: 22px; height: 22px; }

    .tech-name {
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-primary);
      white-space: nowrap;
    }

    @media (max-width: 480px) {
      .stack-section { padding: 4rem 1.25rem; }
      .tech-card { padding: 0.65rem 1rem; }
    }
  `]
})
export class Stack {

  categories = [
    {
      label: 'Backend',
      techs: [
        {
          name: 'Java',
          color: '#f89820',
          icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" fill="#f89820"/><path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.891 1.254-.999.526-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.819M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627" fill="#f89820"/><path d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" fill="#f89820"/></svg>`
        },
        {
          name: 'Spring Boot',
          color: '#6db33f',
          icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.59 5.373a10.46 10.46 0 0 1-1.384 2.607C17.337 3.55 13.03.75 8.198.75 4.038.75.75 4.038.75 8.198c0 3.116 1.834 5.885 4.604 7.181.23.11.46-.043.51-.274l.35-1.617a.52.52 0 0 0-.274-.576c-1.725-.861-2.81-2.63-2.77-4.573.052-2.83 2.379-5.119 5.21-5.12 2.933 0 5.354 2.183 5.691 5.065l-1.57-1.572a.458.458 0 0 0-.775.138l-.629 1.75a.458.458 0 0 0 .12.5l4.226 3.785a.458.458 0 0 0 .612-.009l3.921-3.787a.458.458 0 0 0 .102-.506l-.691-1.73a.458.458 0 0 0-.764-.115l-1.297 1.382c-.136-1.17-.518-2.272-1.09-3.237.43-.577.77-1.226.994-1.93A10.413 10.413 0 0 1 21.25 8.2a10.4 10.4 0 0 1-.66 2.45c.226.652.35 1.35.35 2.075 0 3.506-2.807 6.35-6.305 6.392H8.198C4.038 19.117.75 15.83.75 11.67v-.28c.302.104.618.18.947.218.287.034.574-.064.774-.265l1.253-1.253.021-.023c.254-.28.316-.688.148-1.031-.53-1.083-.82-2.309-.82-3.59 0-4.558 3.7-8.257 8.257-8.257 3.914 0 7.266 2.733 8.056 6.43.123.56.18 1.133.18 1.713 0 .253-.012.504-.037.754z" fill="#6db33f"/></svg>`
        },
        {
          name: 'Microservices',
          color: '#e96228',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#e96228" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 5h10M6.5 6.5l4 10.5M17.5 6.5l-4 10.5"/></svg>`
        },
      ]
    },
    {
      label: 'Frontend',
      techs: [
        {
          name: 'Angular',
          color: '#dd0031',
          icon: `<svg viewBox="0 0 24 24" fill="#dd0031" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5L2 6l1.5 13L12 22l8.5-3L22 6 12 2.5zm0 2.1l7.4 2.7-1.3 11.2L12 20l-6.1-1.5L4.6 7.3 12 4.6zm0 3.4L7.6 18h1.7l.9-2.3h3.6l.9 2.3h1.7L12 8zm0 2.5l1.4 3.7h-2.8L12 10.5z"/></svg>`
        },
        {
          name: 'TypeScript',
          color: '#3178c6',
          icon: `<svg viewBox="0 0 24 24" fill="#3178c6" xmlns="http://www.w3.org/2000/svg"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.255a1.07 1.07 0 0 0 .368-.39.999.999 0 0 0 .12-.49c0-.219-.063-.41-.187-.572a2.105 2.105 0 0 0-.503-.432 9.48 9.48 0 0 0-.753-.382 28.508 28.508 0 0 0-.932-.405c-.47-.197-.893-.407-1.268-.629a4.624 4.624 0 0 1-.964-.753 3.23 3.23 0 0 1-.615-.956 3.497 3.497 0 0 1-.213-1.254c0-.632.116-1.167.35-1.604.232-.438.546-.798.94-1.081a3.89 3.89 0 0 1 1.352-.606 6.116 6.116 0 0 1 1.586-.196zm-6.97.088l.01 2.484H9.037V20.8h-2.91V12.32H3.82V9.838z"/></svg>`
        },
        {
          name: 'Vue.js',
          color: '#42b883',
          icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23H9.1L12 7.41l2.9-5.18h3.94z" fill="#42b883"/><path d="M0 1.61l12 20.78L24 1.61h-4.67L12 14.08 4.67 1.61z" fill="#42b883" opacity="0.5"/></svg>`
        },
      ]
    },
    {
      label: 'DevOps & Cloud',
      techs: [
        {
          name: 'Docker',
          color: '#2496ed',
          icon: `<svg viewBox="0 0 24 24" fill="#2496ed" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>`
        },
        {
          name: 'Kubernetes',
          color: '#326ce5',
          icon: `<svg viewBox="0 0 24 24" fill="#326ce5" xmlns="http://www.w3.org/2000/svg"><path d="M11.998.0C5.366.0.0 5.367.0 12s5.366 12 11.998 12C18.633 24 24 18.633 24 12S18.633.0 11.998.0zm4.51 17.853l-4.51-2.6-4.51 2.6-.005-5.196-4.497 2.623L5.5 12 2.986 8.72l4.497 2.623.005-5.196 4.51 2.6 4.51-2.6.005 5.196 4.497-2.623L21.014 12l-2.514 3.28 4.497 2.623-4.497-2.623-.005 5.196z"/></svg>`
        },
        {
          name: 'CI/CD',
          color: '#fc6d26',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#fc6d26" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`
        },
      ]
    },
    {
      label: 'IA & Automatisation',
      techs: [
        {
          name: 'Claude',
          color: '#cc785c',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#cc785c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12h8M12 8l4 4-4 4"/></svg>`
        },
        {
          name: 'ChatGPT',
          color: '#10a37f',
          icon: `<svg viewBox="0 0 24 24" fill="#10a37f" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.01 14.032A4.505 4.505 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.368 2.019-1.164a.076.076 0 0 1 .071 0l4.815 2.778a4.504 4.504 0 0 1-.67 8.127V12.56a.786.786 0 0 0-.392-.81zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.772a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`
        },
        {
          name: 'Cursor',
          color: '#8b5cf6',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.5 18 3-7.5L21 10.5z"/><path d="M13.5 13.5L21 21"/></svg>`
        },
      ]
    },
  ];
}
