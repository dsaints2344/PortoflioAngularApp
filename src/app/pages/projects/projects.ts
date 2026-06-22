import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Icon } from '../../shared/icons/icon';
import { PortfolioService } from '../../core/data/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class Projects {
  private readonly portfolio = inject(PortfolioService);
  readonly projects = this.portfolio.projects;
}
