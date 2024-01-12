import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
  @Input() canDismiss = true;
  @Output() closeModal = new EventEmitter<void>();

  isVisible = signal<boolean>(false);

  @HostListener('click', ['$event.target'])
  onClick(el: Element) {
    if (el.hasAttribute('data-close') && this.canDismiss) {
      this.closeModal.emit();
    }
  }

  constructor() {
    effect(() => {
      if (this.isVisible()) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'visible';
      }
    });
  }

  ngAfterViewInit(): void {
    const threshold = 1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
          } else {
            this.isVisible.set(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(this.modal.nativeElement);
  }
}
