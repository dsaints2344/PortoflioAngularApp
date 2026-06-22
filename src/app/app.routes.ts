import { Routes } from '@angular/router';

const NAME = 'David De Los Santos';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: `${NAME} — Portfolio`,
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: `About — ${NAME}`,
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'tech',
    title: `Tech Stack — ${NAME}`,
    loadComponent: () => import('./pages/tech/tech').then((m) => m.Tech),
  },
  {
    path: 'projects',
    title: `Projects — ${NAME}`,
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'contact',
    title: `Contact — ${NAME}`,
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: 'home' },
];
