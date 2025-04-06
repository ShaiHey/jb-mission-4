import { Component, input, output } from '@angular/core';
import { Ops } from '../../../models/ops/ops.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ NgClass ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  operation = input<Ops>()
}
