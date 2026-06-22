import { Injectable, inject, signal } from '@angular/core';

import { SupabaseService } from '../supabase/supabase.service';
import type {
  Profile,
  Project,
  SocialLinks,
  Tech,
  TimelineItem,
} from '../models/portfolio.models';

/** Helper for the 135° tile gradients used on the tech stack. */
const grad = (from: string, to: string): string =>
  `linear-gradient(135deg, ${from}, ${to})`;

/**
 * Serves portfolio content.
 *
 * PLACEHOLDER DATA: every signal below is seeded with the static content from
 * the original design. Once your Supabase tables exist, replace the seed values
 * with live queries (examples in the TODOs) — components bind to the signals, so
 * the UI updates automatically when the data loads.
 *
 * Example migration pattern:
 *
 *   constructor() {
 *     this.supabase.client
 *       .from('experience')
 *       .select('*')
 *       .order('sort', { ascending: true })
 *       .then(({ data }) => { if (data) this.experience.set(data as TimelineItem[]); });
 *   }
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly supabase = inject(SupabaseService);

  readonly socials = signal<SocialLinks>({
    githubUrl: 'https://github.com/dsaints2344',
    githubHandle: '@dsaints2344',
    linkedinUrl: 'https://www.linkedin.com/in/david-de-los-santos-8667a9192/',
  });

  readonly profile = signal<Profile>({
    name: 'David De Los Santos',
    role: 'Software Engineer',
    greeting: 'Welcome,',
    tagline:
      'Curiosity-driven engineer who loves taking things apart to understand how they work — then building them back better.',
    photoUrl: 'assets/profile.jpg',
    stats: [
      { value: '12+', label: 'Technologies' },
      { value: '3+', label: 'Projects shipped' },
      { value: '1yr', label: 'Professional' },
    ],
  });

  /** About-page bio. Trusted static HTML (note the inline <strong>). */
  readonly aboutBio = signal<string>(
    'I am a <strong>curiosity-driven, problem-solving</strong> software engineer ' +
      'with a passion for understanding how things work. That instinct has carried ' +
      'my career forward — though as a kid it left a considerable trail of dismantled ' +
      'toys, taken apart and (mostly) put back together.',
  );

  readonly experience = signal<TimelineItem[]>([
    {
      role: 'Junior Web Developer',
      company: 'Novosit',
      period: '2023 — Present',
      type: 'Full Time',
      badgeClass: 'badge',
      description:
        'Building and maintaining responsive web interfaces with React and Sass, ' +
        'collaborating across the stack to ship features and squash bugs.',
    },
  ]);

  readonly education = signal<TimelineItem[]>([
    {
      role: 'B.S. Computer Science',
      company: 'University',
      period: 'Edit me',
      type: 'Degree',
      badgeClass: 'badge purple',
      description: 'Placeholder entry — swap in your school, dates and focus area.',
    },
  ]);

  readonly techStack = signal<Tech[]>([
    { name: 'React', label: '⚛', background: grad('#23272F', '#1A1D23'), color: '#61DAFB', fontSize: 26 },
    { name: 'Next.js', label: 'N', background: grad('#1A1A1A', '#000'), color: '#fff' },
    { name: 'JavaScript', label: 'JS', background: grad('#F7DF1E', '#E6CE00'), color: '#1A1A1A' },
    { name: 'HTML5', label: '〈〉', background: grad('#E34F26', '#C9381A'), color: '#fff', fontSize: 15 },
    { name: 'CSS3', label: '#', background: grad('#1572B6', '#0C5A98'), color: '#fff', fontSize: 22 },
    { name: 'Sass', label: 'Sass', background: grad('#CD6799', '#A8487A'), color: '#fff', fontSize: 12 },
    { name: 'Tailwind', label: 'tw', background: grad('#38BDF8', '#0EA5E9'), color: '#fff' },
    { name: 'Bootstrap', label: 'B', background: grad('#7952B3', '#5E3A9A'), color: '#fff' },
    { name: 'MobX', label: 'Mx', background: grad('#FF9955', '#E8722B'), color: '#fff' },
    { name: 'MySQL', label: 'SQL', background: grad('#00758F', '#005E73'), color: '#fff', fontSize: 14 },
    { name: 'Git', label: 'git', background: grad('#F05032', '#D63B1F'), color: '#fff', fontSize: 14 },
    { name: 'VS Code', label: 'VS', background: grad('#1F9CF0', '#0E70C0'), color: '#fff' },
  ]);

  readonly projects = signal<Project[]>([
    {
      title: 'Generator App',
      featured: true,
      badgeClass: 'badge',
      description:
        'A configurable generator that turns a few inputs into ready-to-use output — ' +
        'built around a reactive MobX store with a snappy React front end and ' +
        'Sass-driven styling. The flagship project of my portfolio.',
      tags: ['React', 'MobX', 'Sass', 'JavaScript'],
      placeholderNote: 'project screenshot — 1200×760',
      codeUrl: 'https://github.com/dsaints2344',
      liveUrl: '#',
    },
    {
      title: 'Portfolio Website',
      featured: false,
      badgeClass: 'badge blue',
      description:
        'This very site — a responsive, multi-section portfolio built from a Figma design.',
      tags: ['React', 'CSS', 'Figma'],
      placeholderNote: 'screenshot — 720×420',
      codeUrl: 'https://github.com/dsaints2344',
      liveUrl: '#',
    },
    {
      title: 'Task Dashboard',
      featured: false,
      badgeClass: 'badge purple',
      description: 'A full-stack dashboard with a Next.js front end and a MySQL-backed API.',
      tags: ['Next.js', 'Tailwind', 'MySQL'],
      placeholderNote: 'screenshot — 720×420',
      codeUrl: 'https://github.com/dsaints2344',
      liveUrl: '#',
    },
  ]);

  readonly contactBlurb = signal<string>(
    'Have a project in mind, a question, or just want to say hi? Drop a note below ' +
      "and I'll get back to you.",
  );

  readonly availability = signal<string>('Open to opportunities');
}
