import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TUI_DARK_MODE, TuiRoot } from '@taiga-ui/core';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  constructor() {
    // This is a light design, so pin Taiga UI to its light theme — otherwise
    // TUI_DARK_MODE defaults to the visitor's OS preference and renders dark.
    inject(TUI_DARK_MODE).set(false);
  }
}
