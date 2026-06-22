/**
 * Domain models for the portfolio content.
 *
 * These shapes mirror the placeholder data in `PortfolioService`. When you wire
 * up Supabase, map your table rows onto these interfaces so the components keep
 * working unchanged.
 */

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  greeting: string;
  /** Short hero paragraph under the role. */
  tagline: string;
  /** Path/URL to the profile photo. */
  photoUrl: string;
  stats: Stat[];
}

/** A work-experience or education entry (shared card shape). */
export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  type: string;
  /** CSS class(es) for the pill badge, e.g. `badge`, `badge blue`, `badge purple`. */
  badgeClass: string;
  description: string;
}

export interface Tech {
  name: string;
  /** Monogram/glyph shown on the tile. */
  label: string;
  /** CSS background (gradient) for the tile. */
  background: string;
  /** Text color for the monogram. */
  color: string;
  /** Optional font-size override (px) for the monogram. */
  fontSize?: number;
}

export interface Project {
  title: string;
  featured: boolean;
  /** CSS class(es) for the badge pill. */
  badgeClass: string;
  description: string;
  tags: string[];
  /** Placeholder caption shown in the screenshot area. */
  placeholderNote: string;
  codeUrl: string;
  liveUrl: string;
}

export interface SocialLinks {
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
}

/** Payload submitted by the contact form. */
export interface ContactMessage {
  email: string;
  subject: string;
  message: string;
}
