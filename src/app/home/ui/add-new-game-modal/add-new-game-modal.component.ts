import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'add-new-game-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './add-new-game-modal.component.html',
})
export class AddNewGameModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
