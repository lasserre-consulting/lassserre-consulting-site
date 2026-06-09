import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeHtmlPipe(sanitizer);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a SafeHtml value for a valid HTML string', () => {
    const result = pipe.transform('<strong>test</strong>');
    expect(result).toBeTruthy();
  });

  it('should handle empty string', () => {
    const result = pipe.transform('');
    expect(result).toBeTruthy();
  });

  it('should handle SVG content', () => {
    const svg = '<svg viewBox="0 0 24 24"><path d="M12 2"/></svg>';
    const result = pipe.transform(svg);
    expect(result).toBeTruthy();
  });
});
