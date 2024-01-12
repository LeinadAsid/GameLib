import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameInfo } from '../../interfaces/GameInfo';
import { toBase64 } from '../../../shared/utils/images';
import { StarsComponent } from '../stars/stars.component';
@Component({
  selector: 'add-new-game-modal',
  standalone: true,
  imports: [ModalComponent, CommonModule, FormsModule, StarsComponent],
  templateUrl: './add-new-game-modal.component.html',
})
export class AddNewGameModalComponent {
  @ViewChild('gameimg') gameImg!: HTMLInputElement;

  @Output() private closeModal = new EventEmitter<void>();
  @Output() private saveGame = new EventEmitter<GameInfo>();

  newGame: GameInfo = {
    title: '',
    review: '',
    rate: 1,
    image: '',
  };

  handleClose() {
    this.closeModal.emit();
  }

  handleSaveGame() {
    this.saveGame.emit(this.newGame);
    this.reset();
    this.handleClose();
  }

  reset() {
    this.newGame = {
      title: '',
      review: '',
      rate: 1,
      image: '',
    };
  }

  async readImg(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files || !files[0]) {
      this.newGame.image = '';
      return;
    }

    this.newGame.image = (await toBase64(files[0]))?.toString() ?? '';
  }
}
