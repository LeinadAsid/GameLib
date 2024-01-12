import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
})
export class StarsComponent {
  @Input() editable: boolean = false;
  @Input() qtd: number = 1;
  @Output() qtdChange = new EventEmitter<number>();

  qtdHandle(value: number) {
    if (!this.editable) return;
    this.qtd = value;
    this.qtdChange.emit(value);
  }
}
