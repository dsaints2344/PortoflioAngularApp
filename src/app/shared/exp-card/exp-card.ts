import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Icon } from '../icons/icon';
import type { TimelineItem } from '../../core/models/portfolio.models';

/** Card used for both work-experience and education timeline entries. */
@Component({
  selector: 'app-exp-card',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exp-card.html',
})
export class ExpCard {
  readonly item = input.required<TimelineItem>();
}
