import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ExpCard } from '../../shared/exp-card/exp-card';
import { PortfolioService } from '../../core/data/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [ExpCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class About {
  private readonly portfolio = inject(PortfolioService);
  readonly aboutBio = this.portfolio.aboutBio;
  readonly experience = this.portfolio.experience;
  readonly education = this.portfolio.education;
}
