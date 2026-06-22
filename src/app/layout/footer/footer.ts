import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { Icon } from '../../shared/icons/icon';
import { PortfolioService } from '../../core/data/portfolio.service';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class Footer {
  private readonly portfolio = inject(PortfolioService);

  readonly socials = this.portfolio.socials;

  readonly copy = computed(() => {
    const { name, role } = this.portfolio.profile();
    return `© ${new Date().getFullYear()} ${name} · ${role}`;
  });
}
