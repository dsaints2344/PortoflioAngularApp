import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'company'
  | 'arrow-right'
  | 'external-link'
  | 'mail'
  | 'map-pin'
  | 'check'
  | 'menu'
  | 'close';

/**
 * Inline, `currentColor`-driven icon set ported from the design.
 * Brand glyphs are filled; UI glyphs are stroked.
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  host: { class: 'app-icon' },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<number>(24);
}
