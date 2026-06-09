import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  copied = false;

  readonly labelCopied  = $localize`:@@contact.copied:Copié !`;
  readonly labelCopy    = $localize`:@@contact.copy:Copier l'adresse`;
  readonly ariaLabelCopied = $localize`:@@contact.aria.copied:Adresse copiée`;
  readonly ariaLabelCopy   = $localize`:@@contact.aria.copy:Copier l'adresse email`;

  copyEmail() {
    navigator.clipboard.writeText('contact@lasserre-consulting.fr').then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
