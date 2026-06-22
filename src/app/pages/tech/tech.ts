import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioService } from '../../core/data/portfolio.service';

@Component({
  selector: 'app-tech',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech.html',
})
export class Tech {
  private readonly portfolio = inject(PortfolioService);
  readonly techStack = this.portfolio.techStack;
}
