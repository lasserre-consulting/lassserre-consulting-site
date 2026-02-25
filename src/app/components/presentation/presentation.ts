import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="hero">

      <!-- Animated background particles -->
      <div class="particles">
        @for (p of particles; track p){
          <span class="particle" [style]="p"></span>
        }
      </div>

      <!-- Mesh gradient blobs -->
      <div class="blob blob--a"></div>
      <div class="blob blob--b"></div>
      <div class="blob blob--c"></div>

      <div class="hero-container">

        <!-- Availability badge -->
        <div class="availability-badge">
          <span class="availability-dot"></span>
          Disponible pour de nouvelles missions
        </div>

        <!-- Name -->
        <h1 class="hero-name">{{ name }}</h1>

        <!-- Photo -->
        <div class="photo-wrapper">
          <div class="photo-ring"></div>
          <img
            ngSrc="/images/profil.png"
            alt="Arnaud Lasserre"
            height="220"
            width="220"
            class="photo"
            priority>
          <div class="photo-glow"></div>
        </div>

        <!-- Title with animated roles -->
        <div class="hero-roles">
          @for (role of roles; track role; let last = $last){
            <span class="role">
            {{ role }}
              @if (!last){
                <span class="separator">  ·  </span>
              }
          </span>
          }

        </div>

        <!-- Description -->
        <p class="hero-description">{{ description }}</p>

        <!-- CTAs -->
        <div class="hero-ctas">
          <a href="#contact" class="cta-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Discutons de votre projet
          </a>
          <a href="#expertise" class="cta-secondary">
            Voir mon expertise
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
          <!-- dans .hero-ctas, après le cta-secondary -->
          <a href="/pdf/dossier-competence.pdf"
             target="_blank"
             rel="noopener"
             class="cta-pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
            Dossier de compétences
          </a>
        </div>

        <!-- Scroll hint -->
        <div class="scroll-hint">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --accent: #3b82f6;
      --accent-dark: #2563eb;
      --accent-glow: rgba(59, 130, 246, 0.35);
    }

    /* ── Hero shell ── */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #060d1f;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Blobs ── */
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      pointer-events: none;
    }
    .blob--a {
      width: 600px; height: 600px;
      background: rgba(37, 99, 235, 0.22);
      top: -200px; left: -150px;
      animation: driftA 14s ease-in-out infinite alternate;
    }
    .blob--b {
      width: 500px; height: 500px;
      background: rgba(109, 40, 217, 0.18);
      bottom: -150px; right: -100px;
      animation: driftB 18s ease-in-out infinite alternate;
    }
    .blob--c {
      width: 300px; height: 300px;
      background: rgba(6, 182, 212, 0.1);
      top: 40%; left: 55%;
      animation: driftC 11s ease-in-out infinite alternate;
    }

    @keyframes driftA { to { transform: translate(60px, 80px) scale(1.08); } }
    @keyframes driftB { to { transform: translate(-50px, -70px) scale(1.05); } }
    @keyframes driftC { to { transform: translate(-40px, 50px); } }

    /* ── Particles ── */
    .particles { position: absolute; inset: 0; pointer-events: none; }
    .particle {
      position: absolute;
      width: 2px; height: 2px;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      animation: twinkle var(--dur, 4s) ease-in-out infinite var(--delay, 0s) alternate;
    }
    @keyframes twinkle {
      from { opacity: 0.1; transform: scale(1); }
      to   { opacity: 0.7; transform: scale(1.6); }
    }

    /* ── Container ── */
    .hero-container {
      position: relative;
      max-width: 720px;
      padding: 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    /* ── Availability badge ── */
    .availability-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      color: #86efac;
      background: rgba(134, 239, 172, 0.08);
      border: 1px solid rgba(134, 239, 172, 0.2);
      padding: 0.35rem 1rem;
      border-radius: 999px;
    }

    .availability-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.25); }
      50%       { box-shadow: 0 0 0 6px rgba(74,222,128,0.1); }
    }

    /* ── Name ── */
    .hero-name {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 7vw, 4.5rem);
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    /* ── Photo ── */
    .photo-wrapper {
      position: relative;
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .photo {
      width: 180px !important;
      height: 180px !important;
      border-radius: 50%;
      object-fit: cover;
      position: relative;
      z-index: 2;
      border: 3px solid rgba(255,255,255,0.1);
      display: block;
    }

    .photo-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 2px dashed rgba(59, 130, 246, 0.35);
      animation: spin 20s linear infinite;
      z-index: 3;
    }

    @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

    .photo-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% + 40px);
      height: calc(100% + 40px);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: radial-gradient(circle, var(--accent-glow), transparent 70%);
      z-index: 0;
    }

    /* ── Roles ── */
    .hero-roles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.25rem;
      font-size: clamp(0.85rem, 2vw, 1rem);
      font-weight: 400;
      color: #93c5fd;
      letter-spacing: 0.01em;
    }

    .separator {
      color: rgba(147, 197, 253, 0.4);
      margin: 0 0.1rem;
    }

    /* ── Description ── */
    .hero-description {
      font-size: 1rem;
      color: #94a3b8;
      line-height: 1.75;
      font-weight: 300;
      max-width: 520px;
      margin: 0;
    }

    /* ── CTAs ── */
    .hero-ctas {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.85rem 1.75rem;
      background: var(--accent-dark);
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .cta-primary::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }

    .cta-primary:hover::after { transform: translateX(100%); }

    .cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 32px var(--accent-glow);
    }

    .cta-primary svg { width: 17px; height: 17px; }

    .cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 1.75rem;
      background: rgba(255,255,255,0.05);
      color: #e2e8f0;
      text-decoration: none;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 400;
      font-family: 'DM Sans', sans-serif;
      border: 1px solid rgba(255,255,255,0.1);
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .cta-secondary:hover {
      background: rgba(255,255,255,0.09);
      transform: translateY(-2px);
    }

    .cta-secondary svg { width: 16px; height: 16px; }

    .cta-pdf {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.85rem 1.75rem;
      background: transparent;
      color: #93c5fd;
      text-decoration: none;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 400;
      font-family: 'DM Sans', sans-serif;
      border: 1px solid rgba(147, 197, 253, 0.25);
      transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    }

    .cta-pdf:hover {
      background: rgba(147, 197, 253, 0.08);
      border-color: rgba(147, 197, 253, 0.5);
      transform: translateY(-2px);
    }

    .cta-pdf svg {
      width: 17px;
      height: 17px;
    }

    /* ── Scroll hint ── */
    .scroll-hint {
      margin-top: 1rem;
      opacity: 0.35;
    }

    .scroll-mouse {
      width: 24px; height: 38px;
      border: 2px solid #94a3b8;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      padding-top: 6px;
    }

    .scroll-wheel {
      width: 3px; height: 8px;
      background: #94a3b8;
      border-radius: 2px;
      animation: scrollDown 1.6s ease-in-out infinite;
    }

    @keyframes scrollDown {
      0%   { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(10px); }
    }

    /* ── Responsive ── */
    @media (max-width: 480px) {
      .hero-ctas {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .cta-primary,
      .cta-secondary,
      .cta-pdf {
        width: 100%;
        max-width: 320px;
        justify-content: center;
      }

      .hero-roles {
        flex-direction: column;
        align-items: center;
        gap: 0.1rem;
      }

      .separator {
        display: none;
      }
    }
  `]
})
export default class Presentation {

  name = 'Arnaud Lasserre';

  roles = [
    'Développeur Fullstack Senior',
    'Tech Lead',
    'Consultant Freelance',
  ];

  description = `9 ans d'expérience en développement logiciel. Spécialisé Java / Angular,
    architecture performante, accompagnement technique et delivery orienté valeur.`;

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
