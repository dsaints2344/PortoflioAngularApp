import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../shared/icons/icon';
import { PortfolioService } from '../../core/data/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  private readonly portfolio = inject(PortfolioService);
  readonly profile = this.portfolio.profile;
}
