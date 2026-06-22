import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Icon } from '../../shared/icons/icon';
import { PortfolioService } from '../../core/data/portfolio.service';

interface NavTab {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  private readonly portfolio = inject(PortfolioService);

  readonly socials = this.portfolio.socials;
  readonly open = signal(false);
  readonly scrolled = signal(false);

  readonly tabs: readonly NavTab[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/tech', label: 'Tech Stack' },
    { path: '/contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
