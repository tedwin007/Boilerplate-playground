import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPetStrore } from '../../models/interfaces/pet-strore-item.interface';

@Component({
  selector: 'single-pet-strore-item',
  templateUrl: './single-pet-strore-item.component.html',
  styleUrls: ['./single-pet-strore-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePetStroreComponent {
  // todo: replace/define 'IPetStrore' (empty)
  @Input() data?: IPetStrore;
}
