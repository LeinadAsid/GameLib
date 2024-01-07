import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() canDismiss = true;

  @Output() closeModal = new EventEmitter<void>();

  @HostListener('click', ['$event.target']) onClick(el: Element) {
    if (el.hasAttribute('data-close') && this.canDismiss) {
      this.closeModal.emit();
    }
  }
}
