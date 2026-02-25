import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section id="contact" class="contact-section">

      <!-- Decorative background blobs -->
      <div class="blob blob--1"></div>
      <div class="blob blob--2"></div>

      <div class="contact-container">

        <!-- Badge -->
        <span class="contact-badge">Contact</span>

        <!-- Title -->
        <h2 class="contact-title">Travaillons ensemble</h2>
        <p class="contact-subtitle">
          Disponible pour missions longue durée.<br>
          Réponse sous <strong>24h</strong>.
        </p>

        <!-- Main CTA -->
        <a href="mailto:lasserre.arnaud@hotmail.fr" class="cta-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Me contacter
        </a>

        <!-- Divider -->
        <div class="divider">
          <span class="divider-line"></span>
          <span class="divider-text">ou retrouvez-moi sur</span>
          <span class="divider-line"></span>
        </div>

        <!-- Social links -->
        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/lasserrearnaud/"
            target="_blank"
            rel="noopener"
            class="social-card social-card--linkedin"
            aria-label="LinkedIn">
            <div class="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div class="social-info">
              <span class="social-name">LinkedIn</span>
              <span class="social-handle">lasserrearnaud</span>
            </div>
            <svg class="social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>

          <a
            href="https://www.malt.fr/profile/arnaudlasserre1"
            target="_blank"
            rel="noopener"
            class="social-card social-card--malt"
            aria-label="Malt">
            <div class="social-icon social-icon--malt">
              <img ngSrc="/icon/malt.png" height="32" width="60" alt=""
                   style="object-fit:contain;filter:brightness(0) invert(1);">
            </div>
            <div class="social-info">
              <span class="social-name">Malt</span>
              <span class="social-handle">arnaudlasserre1</span>
            </div>
            <svg class="social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <!-- Footer note -->
        <p class="contact-note">
          🔒 Vos informations restent confidentielles et ne sont jamais partagées.
        </p>

      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --accent: #2563eb;
      --accent-light: #3b82f6;
      --accent-glow: rgba(37, 99, 235, 0.25);
      --linkedin: #0a66c2;
      --malt: #fc5656;
    }

    .contact-section {
      position: relative;
      background: #080f1e;
      padding: 7rem 2rem;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Blobs ── */
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.18;
      pointer-events: none;
    }
    .blob--1 {
      width: 500px; height: 500px;
      background: var(--accent);
      top: -150px; left: -150px;
    }
    .blob--2 {
      width: 400px; height: 400px;
      background: #7c3aed;
      bottom: -100px; right: -100px;
    }

    /* ── Container ── */
    .contact-container {
      position: relative;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    /* ── Badge ── */
    .contact-badge {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent-light);
      background: rgba(37, 99, 235, 0.12);
      border: 1px solid rgba(59, 130, 246, 0.25);
      padding: 0.3rem 1rem;
      border-radius: 999px;
      margin-bottom: 1.25rem;
    }

    /* ── Title ── */
    .contact-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5vw, 3rem);
      color: #ffffff;
      margin: 0 0 1rem;
      line-height: 1.15;
    }

    .contact-subtitle {
      font-size: 1rem;
      color: #94a3b8;
      line-height: 1.7;
      font-weight: 300;
      margin: 0 0 2.5rem;
    }

    .contact-subtitle strong {
      color: #e2e8f0;
      font-weight: 500;
    }

    /* ── CTA Button ── */
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.9rem 2rem;
      background: var(--accent);
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .cta-button::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }

    .cta-button:hover::after {
      transform: translateX(100%);
    }

    .cta-button:hover {
      background: var(--accent-light);
      transform: translateY(-2px);
      box-shadow: 0 8px 28px var(--accent-glow);
    }

    .cta-button svg {
      width: 18px; height: 18px;
    }

    /* ── Divider ── */
    .divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 2.5rem 0;
    }

    .divider-line {
      flex: 1;
      height: 1px;
      background: rgba(255,255,255,0.08);
    }

    .divider-text {
      font-size: 0.78rem;
      color: #475569;
      white-space: nowrap;
      letter-spacing: 0.05em;
    }

    /* ── Social Cards ── */
    .social-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .social-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.1rem 1.4rem;
      border-radius: 14px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.03);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .social-card:hover {
      transform: translateX(4px);
      background: rgba(255,255,255,0.06);
    }

    .social-card--linkedin:hover {
      border-color: rgba(10, 102, 194, 0.5);
      box-shadow: 0 4px 20px rgba(10, 102, 194, 0.15);
    }

    .social-card--malt:hover {
      border-color: rgba(252, 86, 86, 0.5);
      box-shadow: 0 4px 20px rgba(252, 86, 86, 0.15);
    }

    .social-icon {
      width: 80px; height: 40px;
      border-radius: 10px;
      background: var(--linkedin);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }

    .social-icon svg {
      width: 20px; height: 20px;
      color: white;
    }

    .social-icon--malt {
      background: var(--malt);
    }

    .social-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
    }

    .social-name {
      font-size: 0.95rem;
      font-weight: 500;
      color: #e2e8f0;
    }

    .social-handle {
      font-size: 0.78rem;
      color: #475569;
    }

    .social-arrow {
      width: 18px; height: 18px;
      color: #334155;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .social-card:hover .social-arrow {
      color: #94a3b8;
      transform: translate(2px, -2px);
    }

    /* ── Footer note ── */
    .contact-note {
      margin-top: 2.5rem;
      font-size: 0.78rem;
      color: #334155;
    }

    /* ── Responsive ── */
    @media (max-width: 480px) {
      .contact-section { padding: 5rem 1.25rem; }
    }
  `]
})
export class Contact {}
